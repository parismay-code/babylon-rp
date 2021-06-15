import * as React from 'react';

import HUDMic     from '../../components/HUDMic';
import HUDMapInfo from '../../components/HUDMapInfo';
import HUDAzimuth from '../../components/HUDAzimuth';

import DamageNotify from './components/DamageNotify';
import PlayerState  from './components/PlayerState';
import Score        from './components/Score';
import Teams        from './components/Teams';
import KillNotify   from './components/KillNotify';

import scull from 'assets/images/hud/scull.svg';

import './CrimeHUD.scss';

const CrimeHUD = ({defaultStore, crimeStore, player}) => {
	const [kills, addKill] = React.useState(0),
		[damageData, setDamageData] = React.useState({
			damage: 0,
			target: {
				nickname: null,
				id: null,
			},
		}),
		[isDamageNotifyVisible, setDamageNotifyVisible] = React.useState(false),
		[isTeamsVisible, setTeamsVisible] = React.useState(false),
		[isKillNotifyVisible, setKillNotifyVisible] = React.useState(false),
		[killData, setKillData] = React.useState({
			killer: {
				nickname: null,
				id: null,
			},
			victim: {
				nickname: null,
				id: null,
			},
		});
	
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	React.useEffect(() => {
		window.alt.on('cef::crimeHud:addKill', () => addKill(kills => kills + 1));
		window.alt.on('cef::crimeHud:clearKills', () => addKill(0));
		window.alt.on('cef::crimeHud:showDamage', obj => {
			setDamageData(obj);
			setDamageNotifyVisible(false);
			setDamageNotifyVisible(true);
		});
		window.alt.on('cef::crimeHud:showTeams', bool => setTeamsVisible(bool));
		window.alt.on('cef::crimeHud:showKill', obj => {
			setKillData(obj);
			setKillNotifyVisible(false);
			setKillNotifyVisible(true);
		});
	}, []);
	
	return <div ref={screen} className="crime-hud">
		<HUDMic store={defaultStore} player={player}/>
		<HUDMapInfo store={defaultStore} player={player} noGeo={true}/>
		<PlayerState player={player}/>
		{isDamageNotifyVisible &&
		<DamageNotify player={player} damageData={damageData} setVisible={setDamageNotifyVisible}/>}
		<div className="crime-hud-kills" style={kills > 0 ? {opacity: 1} : {opacity: 0}}>
			<img className="crime-hud-kills__icon" src={scull} alt="#"/>
			<div className="crime-hud-kills__value">{kills}</div>
		</div>
		<HUDAzimuth player={player}/>
		<Score store={crimeStore}/>
		<Teams store={crimeStore} isVisible={isTeamsVisible}/>
		{isKillNotifyVisible && <KillNotify killData={killData} setVisible={setKillNotifyVisible}/>}
	</div>;
};

export default React.memo(CrimeHUD);