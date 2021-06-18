import * as React from 'react';

import BackgroundTower from './components/BackgroundTower';
import AuthForm        from './components/AuthForm';

import './Auth.scss';

const Auth = ({store}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		window.alt.emit('client::auth:ready');
		
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