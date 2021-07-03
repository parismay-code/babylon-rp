import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import HUDMain  from './pages/HUDMain';
import CrimeHUD from './pages/CrimeHUD';

import './HUD.scss';

const HUD = ({
	defaultStore,
	crimeStore,
	player,
	inventoryStore,
}) => {
	React.useEffect(() => {
		EventManager.addHandler('hud', 'change', int => defaultStore.setHud(int));
		EventManager.addHandler('hud', 'setMapState', obj => defaultStore.fetchMapState(obj));
		EventManager.addHandler('hud', 'setDate', date => defaultStore.fetchDate(date));
		EventManager.addHandler('hud', 'setTime', time => defaultStore.fetchTime(time));
		EventManager.addHandler('hud', 'loadCarState', obj => defaultStore.fetchCarState(obj));
		EventManager.addHandler('hud', 'sendAlert', obj => defaultStore.pushNotify(defaultStore.notifyQueue, obj));
		
		EventManager.addHandler('crimeHud', 'setTeams', obj => crimeStore.fetchTeams(obj));
		EventManager.addHandler('crimeHud', 'killPlayer', (team, id) => crimeStore.killPlayer(team, id));
		EventManager.addHandler('crimeHud', 'setPlayerKills', (team, id, kills) => crimeStore.setPlayerKills(team, id, kills));
		EventManager.addHandler('crimeHud', 'setTimer', value => crimeStore.setBattleTimer(value));
		
		EventManager.addHandler('inventory', 'show', bool => inventoryStore.setVisible(bool));
		EventManager.addHandler('inventory', 'setClothes', array => inventoryStore.fetchClothesData(array));
		EventManager.addHandler('inventory', 'setInventory', obj => inventoryStore.fetchInventoryData(obj));
		EventManager.addHandler('inventory', 'setTrunk', array => inventoryStore.fetchTrunkData(array));
		EventManager.addHandler('inventory', 'setPlayersAround', array => inventoryStore.fetchPlayersAround(array));
		
		inventoryStore.calcInventoryWeight();
		
		EventManager.stopAddingHandlers('hud');
		EventManager.stopAddingHandlers('crimeHud');
		EventManager.stopAddingHandlers('inventory');
		
		return () => {
			EventManager.removeTargetHandlers('hud');
			EventManager.removeTargetHandlers('crimeHud');
			EventManager.removeTargetHandlers('inventory');
		};
	}, [crimeStore, defaultStore, inventoryStore]);
	
	return <div className="hud">
		{
			defaultStore.currentHud === 0 ? <HUDMain
					store={defaultStore}
					player={player}
					inventoryStore={inventoryStore}
				/>
				: <CrimeHUD defaultStore={defaultStore} player={player} crimeStore={crimeStore}/>
		}
	</div>;
};

export default observer(HUD);