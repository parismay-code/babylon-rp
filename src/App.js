import * as React      from 'react';
import {useLocalStore} from 'utils/hooks/useLocal';
import EventManager    from 'utils/eventManager';

import Auth          from 'pages/Auth';
import Creator       from 'pages/Creator';
import Choice        from 'pages/Choice';
import SpawnChoice   from 'pages/SpawnChoice';
import Bank          from 'pages/Bank';
import HUD           from 'pages/HUD';
import AdminRedactor from 'pages/AdminRedactor';
import BattlePass    from 'pages/BattlePass';
import ATM           from 'pages/ATM';
import Pay           from 'pages/Pay';
import ClothesShop   from 'pages/ClothesShop';
import WeaponShop    from 'pages/WeaponShop';
import GasStation    from 'pages/GasStation';
import Jobs          from 'pages/Jobs';
import Parking       from 'pages/Parking';
import CrimeMenu     from 'pages/CrimeMenu';
import MafiaMenu     from 'pages/MafiaMenu';
import CarDealer     from 'pages/CarDealer';
import StartScreen   from 'pages/StartScreen';
import MainMenu      from 'pages/MainMenu';

import Chat from 'pages/HUD/components/Chat/Chat';

import ChatStore       from 'store/ChatStore';
import CreatorStore    from 'store/CreatorStore';
import HUDStore        from 'store/HUDStore';
import CrimeHUDStore   from 'store/CrimeHUDStore';
import BattlePassStore from 'store/BattlePassStore';
import PlayerStore     from 'store/PlayerStore';
import ShopsStore      from 'store/ShopsStore';
import JobsStore       from 'store/JobsStore';
import InventoryStore  from 'store/InventoryStore';
import AuthStore       from 'store/AuthStore';
import BankStore       from 'store/BankStore';
import CrimeMenuStore  from 'store/CrimeMenuStore';
import MafiaMenuStore  from 'store/MafiaMenuStore';

const App = () => {
	const bankStore = useLocalStore(() => new BankStore()),
		authStore = useLocalStore(() => new AuthStore()),
		chatStore = useLocalStore(() => new ChatStore()),
		creatorStore = useLocalStore(() => new CreatorStore()),
		hudStore = useLocalStore(() => new HUDStore()),
		crimeHudStore = useLocalStore(() => new CrimeHUDStore()),
		crimeMenuStore = useLocalStore(() => new CrimeMenuStore()),
		mafiaMenuStore = useLocalStore(() => new MafiaMenuStore()),
		battlePassStore = useLocalStore(() => new BattlePassStore()),
		playerStore = useLocalStore(() => new PlayerStore()),
		shopsStore = useLocalStore(() => new ShopsStore()),
		jobsStore = useLocalStore(() => new JobsStore()),
		inventoryStore = useLocalStore(() => new InventoryStore());
	
	const [component, setComponent] = React.useState(null),
		[characters, setCharacters] = React.useState([]),
		[adminRedactorData, setAdminRedactorData] = React.useState([]),
		[isCursorActive, setCursorActive] = React.useState(true),
		[payPrice, setPayPrice] = React.useState(0),
		[pinCode, setPinCode] = React.useState(null),
		[gasStation, setGasStation] = React.useState({}),
		[jobParams, setJobParams] = React.useState(null),
		[parkingData, setParkingData] = React.useState({
			id: 11,
			owner: 'Paris May',
			price: 100,
			maxSlots: 80,
			slots: [
				true,
				true,
				false,
				true,
				false,
				false,
				false,
				true,
				false,
				false,
				false,
				false,
				false,
				true,
				false,
				false,
				true,
				false,
				false,
				true,
				true,
				false,
				true,
				false,
				false,
				false,
				true,
				false,
				false,
				false,
				false,
				false,
				true,
				false,
				false,
				true,
				false,
				false,
				true,
				false,
				true,
				true,
				false,
				true,
				false,
				false,
				false,
				true,
				false,
				false,
				false,
				false,
				false,
				true,
				false,
				false,
				true,
				false,
				false,
				true,
				true,
				false,
				true,
				false,
				false,
				false,
				true,
				false,
				false,
				false,
				false,
				false,
				true,
				false,
				false,
				true,
				false,
				false,
				true,
				false,
			],
		});
	
	React.useEffect(() => {
		EventManager.addHandler('player', 'setData', obj => playerStore.fetchPlayerState(obj));
		EventManager.addHandler('player', 'setLookDirection', value => playerStore.fetchLookDirection(value));
		EventManager.addHandler('player', 'setQuests', array => playerStore.fetchQuests(array));
		EventManager.addHandler('player', 'addQuest', obj => playerStore.addQuest(obj));
		EventManager.addHandler('player', 'removeQuest', id => playerStore.removeQuest(id));
		
		EventManager.stopAddingHandlers('player');
		
		return () => EventManager.removeTargetHandlers('player');
	}, [playerStore]);
	React.useEffect(() => {
		EventManager.addHandler('chat', 'setAccess', obj => chatStore.fetchAccess(obj));
		EventManager.addHandler('chat', 'loadFamilyIcon', icon => chatStore.fetchFamilyIcon(icon));
		
		EventManager.stopAddingHandlers('chat');
		
		return () => EventManager.removeTargetHandlers('chat');
	}, [chatStore]);
	React.useEffect(() => {
		EventManager.addHandler('shop', 'setOwner', name => shopsStore.setOwner(name));
		
		EventManager.stopAddingHandlers('shop');
		
		return () => EventManager.removeTargetHandlers('shop');
	}, [shopsStore]);
	React.useEffect(() => {
		EventManager.addHandler('router', 'setComponent', (...args) => {
			setComponent(args[0]);
			
			if (args[0] === 'choice') setCharacters(args[1]);
			if (args[0] === 'adminRedactor') setAdminRedactorData(args[1]);
			if (args[0] === 'atm') setPinCode(args[1]);
			if (args[0] === 'pay') setPayPrice(args[1]);
			if (args[0] === 'gasStation') setGasStation(args[1]);
			if (args[0] === 'jobs') setJobParams(args[1]);
			if (args[0] === 'parking') setParkingData(args[1]);
		});
		
		EventManager.addHandler('cursor', 'change', bool => setCursorActive(bool));
		
		EventManager.stopAddingHandlers('router');
		EventManager.stopAddingHandlers('cursor');
		
		EventManager.stopAddingHandlers('app');
		
		return () => {
			EventManager.removeTargetHandlers('app');
			EventManager.removeTargetHandlers('router');
			EventManager.removeTargetHandlers('cursor');
		};
	}, []);
	
	return <div className="app">
		<Chat store={chatStore} isCursorActive={isCursorActive}
		      isVisible={(component === 'hud' || component === 'clothesShop') && hudStore.currentHud === 0 && !playerStore.playerState.dead.isDead}/>
		
		{component === 'auth' && <Auth store={authStore}/>}
		{component === 'creator' && <Creator store={creatorStore}/>}
		{component === 'choice' && <Choice characters={characters}/>}
		{component === 'spawnChoice' && <SpawnChoice player={playerStore}/>}
		{component === 'bank' && <Bank player={playerStore} store={bankStore}/>}
		{component === 'hud' && <HUD
			defaultStore={hudStore}
			crimeStore={crimeHudStore}
			player={playerStore}
			inventoryStore={inventoryStore}
		/>}
		{component === 'adminRedactor' && <AdminRedactor data={adminRedactorData}/>}
		{component === 'battlePass' && <BattlePass store={battlePassStore}/>}
		{component === 'atm' && <ATM player={playerStore} pinCode={pinCode}/>}
		{component === 'pay' && <Pay player={playerStore} payPrice={payPrice}/>}
		{component === 'clothesShop' && <ClothesShop player={playerStore} hudStore={hudStore} store={shopsStore}/>}
		{component === 'weaponShop' && <WeaponShop player={playerStore} store={shopsStore}/>}
		{component === 'gasStation' && <GasStation data={gasStation} store={hudStore} player={playerStore}/>}
		{component === 'jobs' && <Jobs store={jobsStore} player={playerStore} jobParams={jobParams}/>}
		{component === 'parking' && <Parking parkingData={parkingData} player={playerStore}/>}
		{component === 'crimeMenu' && <CrimeMenu store={crimeMenuStore}/>}
		{component === 'mafiaMenu' && <MafiaMenu store={mafiaMenuStore}/>}
		{component === 'carDealer' && <CarDealer store={shopsStore}/>}
		{component === 'startScreen' && <StartScreen player={playerStore}/>}
		{component === 'mainMenu' && <MainMenu player={playerStore}/>}
	</div>;
};

export default App;