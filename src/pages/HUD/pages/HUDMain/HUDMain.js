import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import HUDHeader      from '../../components/HUDHeader';
import HUDPlayerState from '../../components/HUDPlayerState';
import HUDMapInfo     from '../../components/HUDMapInfo';
import HUDMic         from '../../components/HUDMic';
import HUDNotify      from '../../components/HUDNotify';
import HUDLevelUp     from '../../components/HUDLevelUp';
import HUDAlerts      from '../../components/HUDAlerts';
import HUDSpeedometer from '../../components/HUDSpeedometer';
import HUDDead        from '../../components/HUDDead';
import HUDFriendship  from '../../components/HUDFriendship';
import HUDInteraction from '../../components/HUDInteraction';
import Inventory      from '../../components/Inventory';

import greenZone from 'assets/images/hud/greenZone.svg';

import './HUDMain.scss';

const HUDMain = ({store, player, targetPlayerData, inventoryStore}) => {
	const [isInventoryOpened, setInventoryOpened] = React.useState(false);
	
	React.useEffect(() => {
		window.alt.emit('client::hud:ready');
		
		window.alt.on('cef::inventory:show', bool => setInventoryOpened(bool));
		
		const handleTabKey = (e) => {
			if (e.keyCode === 9) {
				e.preventDefault();
				e.stopPropagation();
			}
			
			if (e.keyCode === 32) {
				e.preventDefault();
				e.stopPropagation();
			}
		};
		
		document.getElementsByClassName('hud-main')[0].addEventListener('keydown', e => handleTabKey(e));
	}, []);
	
	return <div className="hud-main">
		{!player.playerState.dead.isDead && <>
			<HUDHeader player={player}/>
			<HUDPlayerState player={player} store={store}/>
			<HUDSpeedometer store={store} player={player}/>
			<HUDMapInfo store={store} player={player} noGeo={false}/>
			<HUDMic store={store} player={player}/>
		</>}
		<>
			<HUDLevelUp/>
			{player.playerState.dead.isDead &&
			<HUDDead player={player}/>}
			<HUDNotify/>
			<HUDFriendship/>
			<HUDAlerts/>
		</>
		{!player.playerState.dead.isDead && <>
			<HUDInteraction targetPlayerData={targetPlayerData}/>
			{player.playerState.effects.isHealing && <div className="hud-main__heal"/>}
			<div
				className={cn('hud-main-green-zone', player.playerState.isInGreenZone ? 'hud-main-green-zone_active' : null)}>
				<img className="hud-main-green-zone__icon" src={greenZone} alt="#"/>
				<div className="hud-main-green-zone__title">GreenZone</div>
			</div>
		</>}
		{isInventoryOpened && <Inventory store={inventoryStore}/>}
	</div>;
};

export default observer(HUDMain);