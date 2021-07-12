const isDev = process.env.NODE_ENV === 'development';

const eventsInMemory = [];

const EventManager = {
	// add event to memory
	addHandler: (eventTarget, eventName, handler) => {
		if (!eventsInMemory.find(el => el.target === eventTarget && el.name === eventName)) {
			eventsInMemory.push({
				id: eventsInMemory.length,
				target: eventTarget,
				name: eventName,
				handler: handler,
			});
		}
	},
	
	// call event from memory
	callHandler: (event, ...args) => {
		const target = event.split(':')[0],
			eventName = event.split(':')[1],
			index = eventsInMemory.findIndex(el => el.target === target && el.name === eventName);
		
		if (index !== -1) {
			eventsInMemory[index].handler(...args);
			if (isDev) console.log(`cef::${eventsInMemory[index].target}:${eventsInMemory[index].name} called`);
		} else if (isDev) console.log(`cef::${event} is not exists`);
	},
	
	// initialize all events added in component, should be after all events
	stopAddingHandlers: (target) => {
		for (let i = 0; i < eventsInMemory.length; i++) {
			if (eventsInMemory[i].target === target) {
				if (isDev) console.log(`cef::${eventsInMemory[i].target}:${eventsInMemory[i].name} loaded`);
			}
		}
		
		if (isDev) console.log(`${target} events loaded\n===============================================\n\n`);
		window.alt.emit('client::eventManager', `client::${target}:ready`);
		
		if (target === 'app') {
			if (isDev) console.log('all events ready');
			window.alt.emit('client::eventManager', 'client::cef:ready');
		}
	},
	
	// unsubscribe from all component events on unmount
	removeTargetHandlers: (eventTarget, bool) => {
		const events = eventsInMemory.filter(el => el.target === eventTarget);
		
		for (let i = 0; i < events.length; i++) {
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
		const event = `server::${eventTarget}:${eventName}`;
		
		window.alt.emit('client::eventManager', event, ...args);
		
		if (isDev) console.log(`emitted:\n${event}\n`, ...args);
	},
	emitClient: (eventTarget, eventName, ...args) => {
		if (typeof (eventTarget) !== 'string' || typeof (eventName) !== 'string') {
			throw new Error('event address must be string');
		}
		const event = `client::${eventTarget}:${eventName}`;
		
		window.alt.emit('client::eventManager', event, ...args);
		
		if (isDev) console.log(`emitted:\n${event}\n`, ...args);
	},
};

export default EventManager;