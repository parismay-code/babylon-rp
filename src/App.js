import * as React      from 'react';
import {useLocalStore} from 'utils/hooks/useLocal';

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
import CarDealer     from 'pages/CarDealer';

import Chat from 'pages/HUD/components/Chat/Chat';

import AuthStore       from 'store/AuthStore';
import BankStore       from 'store/BankStore';
import ChatStore       from 'store/ChatStore';
import CreatorStore    from 'store/CreatorStore';
import HUDStore        from 'store/HUDStore';
import CrimeHUDStore   from 'store/CrimeHUDStore';
import BattlePassStore from 'store/BattlePassStore';
import PlayerStore     from 'store/PlayerStore';
import ShopsStore      from 'store/ShopsStore';
import JobsStore       from 'store/JobsStore';
import InventoryStore  from 'store/InventoryStore';
import CrimeMenuStore  from 'store/CrimeMenuStore';

import spawnsData from 'configs/spawnData';

const App = () => {
	const authStore = useLocalStore(() => new AuthStore()),
		bankStore = useLocalStore(() => new BankStore()),
		chatStore = useLocalStore(() => new ChatStore()),
		creatorStore = useLocalStore(() => new CreatorStore()),
		hudStore = useLocalStore(() => new HUDStore()),
		crimeHudStore = useLocalStore(() => new CrimeHUDStore()),
		battlePassStore = useLocalStore(() => new BattlePassStore()),
		playerStore = useLocalStore(() => new PlayerStore()),
		shopsStore = useLocalStore(() => new ShopsStore()),
		jobsStore = useLocalStore(() => new JobsStore()),
		inventoryStore = useLocalStore(() => new InventoryStore()),
		crimeMenuStore = useLocalStore(() => new CrimeMenuStore());
	
	const [component, setComponent] = React.useState(null),
		[isRegistered, setRegistered] = React.useState(false),
		[characters, setCharacters] = React.useState([]),
		[adminRedactorData, setAdminRedactorData] = React.useState([]),
		[currentHUD, setHUD] = React.useState(0),
		[isCursorActive, setCursorActive] = React.useState(false),
		[payPrice, setPayPrice] = React.useState(0),
		[pinCode, setPinCode] = React.useState(null),
		[targetPlayerData, setTargetPlayerData] = React.useState({}),
		[gasStation, setGasStation] = React.useState({}),
		[currentJob, setCurrentJob] = React.useState(null),
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
		window.alt.on('cef::auth:start', bool => {
			setRegistered(bool);
			setComponent('auth');
		});
		
		window.alt.on('cef::characterCustom:start', () => setComponent('creator'));
		
		window.alt.on('cef::characterChoice:start', array => {
			setCharacters(array);
			setComponent('choice');
		});
		
		window.alt.on('cef::spawnChoice:start', data => {
			spawnsData[2].data = data.homes;
			spawnsData[3].data = data.array.frak;
			spawnsData[4].data = data.array.fam;
			setComponent('spawnChoice');
		});
		
		window.alt.on('cef::bank:start', () => setComponent('bank'));
		
		window.alt.on('cef::hud:start', () => setComponent('hud'));
		window.alt.on('cef::hud:change', int => setHUD(int));
		window.alt.on('cef::interactions:setTargetPlayerData', obj => setTargetPlayerData(obj));
		
		window.alt.on('cef::adminRedactor:start', array => {
			setAdminRedactorData(array);
			setComponent('adminRedactor');
		});
		
		window.alt.on('cef::battlePass:start', () => setComponent('battlePass'));
		
		window.alt.on('cef::atm:start', pinCode => {
			setPinCode(pinCode);
			setComponent('atm');
		});
		
		window.alt.on('cef::pay:start', price => {
			setPayPrice(price);
			setComponent('pay');
		});
		
		window.alt.on('cef::clothesShop:start', () => setComponent('clothesShop'));
		
		window.alt.on('cef::gunShop:start', () => setComponent('weaponShop'));
		
		window.alt.on('cef::gasStation:start', obj => {
			setGasStation(obj);
			setComponent('gasStation');
		});
		
		window.alt.on('cef::job:start', (job, params) => {
			setComponent('jobs');
			setCurrentJob(job);
			setJobParams(params);
		});
		
		window.alt.on('cef::parking:start', obj => {
			setComponent('parking');
			setParkingData(obj);
		});
		
		window.alt.on('cef::crimeMenu:start', () => setComponent('crimeMenu'));
		
		window.alt.on('cef::cursor:change', bool => setCursorActive(bool));
		
		window.alt.emit('client::cef:ready');
	}, []);
	React.useEffect(() => {
		window.alt.on('cef::player:setData', obj => playerStore.fetchPlayerState(obj));
		window.alt.on('cef::player:setLookDirection', value => playerStore.fetchLookDirection(value));
	}, [playerStore]);
	React.useEffect(() => {
		window.alt.on('cef::auth:getResetCode', (code) => {
			authStore.fetchResetCode(code);
		});
	}, [authStore]);
	React.useEffect(() => {
		window.alt.on('cef::bank:setFines', array => bankStore.fetchFines(array));
		window.alt.on('cef::bank:changeFines', obj => bankStore.changeFines(obj));
		window.alt.on('cef::bank:setCards', array => bankStore.fetchCards(array));
		window.alt.on('cef::bank:setWithdrawHistory', array => bankStore.fetchWithdrawHistory(array));
		window.alt.on('cef::bank:addWithdraw', data => bankStore.addWithdraw(data));
		window.alt.on('cef::bank:setTopUpHistory', array => bankStore.fetchTopUpHistory(array));
		window.alt.on('cef::bank:addTopUp', data => bankStore.addTopUp(data));
	}, [bankStore]);
	React.useEffect(() => {
		window.alt.on('cef::hud:setMapState', obj => hudStore.fetchMapState(obj));
		window.alt.on('cef::hud:setDate', date => hudStore.fetchDate(date));
		window.alt.on('cef::hud:setTime', time => hudStore.fetchTime(time));
		window.alt.on('cef::hud:loadCarState', obj => hudStore.fetchCarState(obj));
	}, [hudStore]);
	React.useEffect(() => {
		window.alt.on('cef::chat:setAccess', obj => chatStore.fetchAccess(obj));
		window.alt.on('cef::chat:loadFamilyIcon', icon => chatStore.fetchFamilyIcon(icon));
	}, [chatStore]);
	React.useEffect(() => {
		window.alt.on('cef::creator:setData', data => creatorStore.fetchData(data));
		window.alt.on('cef::creator:setClothes', data => creatorStore.fetchClothes(data));
	}, [creatorStore]);
	React.useEffect(() => {
		window.alt.on('cef::battlePass:setQuests', data => battlePassStore.fetchQuests(data));
		window.alt.on('cef::battlePass:setAwards', data => battlePassStore.fetchAwards(data));
		window.alt.on('cef::battlePass:setSeason', name => battlePassStore.setSeason(name));
		window.alt.on('cef::battlePass:setCoins', value => battlePassStore.setSeason(value));
	}, [battlePassStore]);
	React.useEffect(() => {
		window.alt.on('cef::shop:setOwner', name => shopsStore.setOwner(name));
		
		window.alt.on('cef::clothesShop:setData', array => shopsStore.fetchClothesShopData(array));
		
		window.alt.on('cef::gunShop:fetchData', obj => shopsStore.fetchWeaponShopData(obj));
		window.alt.on('cef::gunShop:clearBuyList', () => shopsStore.clearWeaponBuyList());
		
		window.alt.on('cef::carDealer:setData', array => shopsStore.fetchCarDealerData(array));
	}, [shopsStore]);
	React.useEffect(() => {
		window.alt.on('cef::jobs:setData', obj => jobsStore.fetchJobData(obj));
		window.alt.on('cef::jobs:setTruckDriverOrders', array => jobsStore.fetchTruckDriverOrders(array));
		window.alt.on('cef::jobs:addTruckDriverOrder', obj => jobsStore.addTruckDriverOrder(obj));
		window.alt.on('cef::jobs:removeTruckDriverOrder', id => jobsStore.removeTruckDriverOrder(id));
	}, [jobsStore]);
	React.useEffect(() => {
		window.alt.on('cef::inventory:setClothes', array => inventoryStore.fetchClothesData(array));
		window.alt.on('cef::inventory:setInventory', obj => inventoryStore.fetchInventoryData(obj));
		window.alt.on('cef::inventory:setTrunk', array => inventoryStore.fetchTrunkData(array));
		window.alt.on('cef::inventory:setPlayersAround', array => inventoryStore.fetchPlayersAround(array));
		
		inventoryStore.calcInventoryWeight();
	}, [inventoryStore]);
	React.useEffect(() => {
		window.alt.on('cef::crimeHud:setTeams', obj => crimeHudStore.fetchTeams(obj));
		window.alt.on('cef::crimeHud:killPlayer', (team, id) => crimeHudStore.killPlayer(team, id));
		window.alt.on('cef::crimeHud:setPlayerKills', (team, id, kills) => crimeHudStore.setPlayerKills(team, id, kills));
		window.alt.on('cef::crimeHud:setTimer', value => crimeHudStore.setBattleTimer(value));
	}, [crimeHudStore]);
	React.useEffect(() => {
		window.alt.on('client::crimeMenu:setFractionName', text => crimeMenuStore.fetchFractionName(text));
		window.alt.on('client::crimeMenu:setFractionTerritories', value => crimeMenuStore.fetchFractionTerritories(value));
		window.alt.on('client::crimeMenu:setBalance', value => crimeMenuStore.fetchBalance(value));
		window.alt.on('client::crimeMenu:setPlayers', array => crimeMenuStore.fetchPlayers(array));
		window.alt.on('client::crimeMenu:setStoreLocked', bool => crimeMenuStore.setStoreLocked(bool));
		window.alt.on('client::crimeMenu:changePlayerData', (id, obj) => crimeMenuStore.changePlayerData(id, obj));
		window.alt.on('client::crimeMenu:setNews', array => crimeMenuStore.fetchNews(array));
		window.alt.on('client::crimeMenu:changeNews', (type, ...args) => crimeMenuStore.changeNews(type, ...args));
		window.alt.on('client::crimeMenu:setEvents', array => crimeMenuStore.fetchEvents(array));
		window.alt.on('client::crimeMenu:changeEvents', (type, ...args) => crimeMenuStore.changeEvents(type, ...args));
		window.alt.on('client::crimeMenu:setRanks', array => crimeMenuStore.fetchRanksData(array));
		window.alt.on('client::crimeMenu:changeRankData', (rank, obj) => crimeMenuStore.changeRankData(rank, obj));
		window.alt.on('client::crimeMenu:setAwardLogs', array => crimeMenuStore.fetchAwardLogs(array));
		window.alt.on('client::crimeMenu:addAward', obj => crimeMenuStore.addAward(obj));
		window.alt.on('client::crimeMenu:setReprimandLogs', array => crimeMenuStore.fetchReprimandLogs(array));
		window.alt.on('client::crimeMenu:addReprimand', obj => crimeMenuStore.addReprimandLogs(obj));
		window.alt.on('client::crimeMenu:setStoreLogs', array => crimeMenuStore.fetchStoreLogs(array));
		window.alt.on('client::crimeMenu:addStoreLog', obj => crimeMenuStore.addStoreLogs(obj));
	}, [crimeMenuStore]);
	
	return <div className="app">
		{component === 'auth' && <Auth isRegistered={isRegistered} store={authStore}/>}
		{component === 'creator' && <Creator store={creatorStore}/>}
		{component === 'choice' && <Choice characters={characters}/>}
		{component === 'spawnChoice' && <SpawnChoice spawnData={spawnsData}/>}
		{component === 'bank' && <Bank store={bankStore} player={playerStore}/>}
		<Chat store={chatStore} isCursorActive={isCursorActive}
		      isVisible={(component === 'hud' || component === 'clothesShop') && currentHUD === 0 && !playerStore.playerState.dead.isDead}/>
		{component === 'hud' && <HUD
			defaultStore={hudStore}
			crimeStore={crimeHudStore}
			player={playerStore}
			inventoryStore={inventoryStore}
			currentHUD={currentHUD}
			targetPlayerData={targetPlayerData}
		/>}
		{component === 'adminRedactor' && <AdminRedactor data={adminRedactorData}/>}
		{component === 'battlePass' && <BattlePass store={battlePassStore}/>}
		{component === 'atm' && <ATM store={bankStore} player={playerStore} pinCode={pinCode}/>}
		{component === 'pay' && <Pay player={playerStore} payPrice={payPrice}/>}
		{component === 'clothesShop' && <ClothesShop player={playerStore} hudStore={hudStore} store={shopsStore}/>}
		{component === 'weaponShop' && <WeaponShop player={playerStore} store={shopsStore}/>}
		{component === 'gasStation' && <GasStation data={gasStation} store={hudStore} player={playerStore}/>}
		{component === 'jobs' && <Jobs store={jobsStore} currentJob={currentJob} jobParams={jobParams}/>}
		{component === 'parking' && <Parking parkingData={parkingData} player={playerStore}/>}
		{component === 'crimeMenu' && <CrimeMenu store={crimeMenuStore}/>}
		{component === 'carDealer' && <CarDealer store={shopsStore}/>}
	</div>;
};

export default App;