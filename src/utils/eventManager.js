const isDev = process.env.NODE_ENV === 'development';

if (!window.alt) {
	window.alt = {
		emit: () => {
		},
		on: () => {
		},
		off: () => {
		},
	};
}

const eventsInMemory = [];

const EventManager = {
	// add event to memory
	addHandler: (eventTarget, eventName, handler) => {
		// if event exists it will be resubscribed
		if (eventsInMemory.find(el => el.target === eventTarget && el.name === eventName)) {
			window.alt.off(`cef::${eventTarget}:${eventName}`, handler);
			window.alt.on(`cef::${eventTarget}:${eventName}`, handler);
			
			if (isDev) console.log(`cef::${eventTarget}:${eventName} resubscribed`);
		}
		
		// if event not exists it will be added to memory
		else eventsInMemory.push({
			id: eventsInMemory.length,
			target: eventTarget,
			name: eventName,
			handler: handler,
		});
	},
	
	// initialize all events added in component, should be after all events
	stopAddingHandlers: (target) => {
		for (let i = 0; i < eventsInMemory.length; i++) {
			if (eventsInMemory[i].target === target) {
				window.alt.on(`cef::${eventsInMemory[i].target}:${eventsInMemory[i].name}`, eventsInMemory.handler);
				if (isDev) console.log(`cef::${eventsInMemory[i].target}:${eventsInMemory[i].name} loaded`);
			}
		}
		
		if (isDev) console.log(`${target} events loaded\n===============================================\n\n`);
		window.alt.emit(`client::${target}:ready`);
		
		if (target === 'app') {
			if (isDev) console.log('all events ready');
			window.alt.emit('client::cef:ready');
		}
	},
	
	// unsubscribe from all component events on unmount
	removeTargetHandlers: (eventTarget, bool) => {
		const events = eventsInMemory.filter(el => el.target === eventTarget);
		
		for (let i = 0; i < events.length; i++) {
			window.alt.off(`cef::${events[i].target}:${events[i].name}`, events[i].handler);
			
			eventsInMemory.splice(eventsInMemory.findIndex(el => el.id === events[i].id), 1);
			
			if (isDev) console.log(`unsubscribe from cef::${events[i].target}:${events[i].name}`);
		}
		
		// logs remaining events if second argue was true
		if (isDev) {
			if (bool) {
				console.log('remaining events: ', eventsInMemory);
			}
		}
	},
	emitServer: (eventTarget, eventName, ...args) => {
		if (typeof (eventTarget) !== 'string' || typeof (eventName) !== 'string') {
			throw new Error('event address must be string');
		}
		window.alt.emit(`server::${eventTarget}:${eventName}`, ...args);
		
		if (isDev) console.log(`emitted:\nserver::${eventTarget}:${eventName}\n`, ...args);
	},
	emitClient: (eventTarget, eventName, ...args) => {
		if (typeof (eventTarget) !== 'string' || typeof (eventName) !== 'string') {
			throw new Error('event address must be string');
		}
		window.alt.emit(`client::${eventTarget}:${eventName}`, ...args);
		
		if (isDev) console.log(`emitted:\nclient::${eventTarget}:${eventName}\n`, ...args);
	},
};

export default EventManager;