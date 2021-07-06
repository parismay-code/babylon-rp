import React        from 'react';
import ReactDOM     from 'react-dom';
import EventManager from 'utils/eventManager';

import App from './App';

import 'utils/initMobX';

import './styles/global.scss';

if (!window.alt) {
	window.alt = {
		emit: () => {
		},
		on: () => {
		},
	};
}

window.alt.on('cef::eventManager', (event, ...args) => EventManager.callHandler(event, ...args));

window.callHandler = (event, ...args) => EventManager.callHandler(event, ...args);

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root'),
);
