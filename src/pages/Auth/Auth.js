import * as React      from 'react';
import EventManager    from 'utils/eventManager';

import BackgroundTower from './components/BackgroundTower';
import AuthForm        from './components/AuthForm';

import './Auth.scss';

const Auth = ({ store }) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		EventManager.addHandler('auth', 'getResetCode', code => store.fetchResetCode(code));
		
		EventManager.addHandler('auth', 'setRegistered', bool => store.setIsRegistered(bool));
		EventManager.addHandler('auth', 'sendNotify', (type, text) => store.addNotify(type, text));
		
		EventManager.stopAddingHandlers('auth');
		
		return () => EventManager.removeTargetHandlers('auth');
	}, [store]);
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('auth_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return (
		<div ref={screen} className="auth">
			<BackgroundTower/>
			<AuthForm store={store}/>
		</div>
	);
};

export default React.memo(Auth);