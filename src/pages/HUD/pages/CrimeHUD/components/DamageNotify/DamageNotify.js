import * as React from 'react';
import {observer} from 'mobx-react-lite';

import killIcon from 'assets/images/hud/killIcon.svg';

import './DamageNotify.scss';

const DamageNotify = ({player, damageData, setVisible}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		screen.current.style.opacity = 1;
		
		const timeout = setTimeout(() => setVisible(false), 2000);
		
		return () => clearTimeout(timeout);
	}, [setVisible]);
	
	return <div ref={screen} className='crime-hud-damage-notify'>
		<div className='crime-hud-damage-notify__block'/>
		<div className='crime-hud-damage-notify__damage'>{damageData.damage}</div>
		<div className='crime-hud-damage-notify-info'>
			<div className='crime-hud-damage-notify-info__attacker'>{player.playerState.nickname} [{player.playerState.id}]</div>
			<div className='crime-hud-damage-notify-info-target'>
				<img className='crime-hud-damage-notify-info-target__icon' src={killIcon} alt='#'/>
				<div className='crime-hud-damage-notify-info-target__name'>{damageData.target.nickname} [{damageData.target.id}]</div>
			</div>
		</div>
	</div>
}

export default observer(DamageNotify);