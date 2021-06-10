import * as React from 'react';

import killIcon from 'assets/images/hud/killIcon.svg';

import './KillNotify.scss';

const KillNotify = ({killData, setVisible}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		screen.current.style.opacity = 1;
		
		const timeout = setTimeout(() => setVisible(false), 2000);
		
		return () => clearTimeout(timeout);
	}, [setVisible]);
	
	return <div ref={screen} className='crime-hud-kill-notify'>
		<div className='crime-hud-kill-notify__killer'>{killData.killer.nickname} [{killData.killer.id}]</div>
		<div className='crime-hud-kill-notify-victim'>
			<img className='crime-hud-kill-notify-victim__icon' src={killIcon} alt='#'/>
			<div className='crime-hud-kill-notify-victim__name'>{killData.victim.nickname} [{killData.victim.id}]</div>
		</div>
	</div>
}

export default React.memo(KillNotify);