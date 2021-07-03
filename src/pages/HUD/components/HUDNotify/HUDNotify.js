import * as React   from 'react';
import EventManager from 'utils/eventManager';

import './HUDNotify.scss';

const HUDNotify = () => {
	const [text, setText] = React.useState(null);
	const [isNotifyShowed, setNotify] = React.useState(false);
	
	const showNotify = React.useCallback((text) => {
		setText(text);
		setNotify(true);
		
		setTimeout(() => {
			setNotify(false);
		}, 7000);
	}, []);
	
	React.useEffect(() => {
		EventManager.addHandler('hud', 'notify', text => showNotify(text));
	}, [showNotify]);
	
	return <div
		className="hud-notify"
		style={isNotifyShowed ? {opacity: '1'} : {opacity: '0'}}
	>
		<div className="hud-notify__title">Уведомление</div>
		<div className="hud-notify__subtitle">{text}</div>
	</div>;
};

export default React.memo(HUDNotify);