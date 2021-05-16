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
import GasStation    from 'pages/GasStation';
import Jobs          from 'pages/Jobs';

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

import spawnsData from 'configs/spawnData';

const App = () => {
	const authStore = useLocalStore(() => new AuthStore());
	const bankStore = useLocalStore(() => new BankStore());
	const chatStore = useLocalStore(() => new ChatStore());
	const creatorStore = useLocalStore(() => new CreatorStore());
	const hudStore = useLocalStore(() => new HUDStore());
	const crimeHudStore = useLocalStore(() => new CrimeHUDStore());
	const battlePassStore = useLocalStore(() => new BattlePassStore());
	const playerStore = useLocalStore(() => new PlayerStore());
	const shopsStore = useLocalStore(() => new ShopsStore());
	const jobsStore = useLocalStore(() => new JobsStore());
	
	const [component, setComponent] = React.useState(null),
		[isRegistered, setRegistered] = React.useState(false),
		[characters, setCharacters] = React.useState([
			// {
			//     type: 2,
			//     gender: 1,
			//     level: 15,
			//     nickname: {
			//         firstname: 'Paris',
			//         lastname: 'May'
			//     },
			//     fraction: {
			//         type: 1,
			//         name: 'lspd'
			//     },
			//     condition: {
			//         hp: '100'
			//     },
			//     property: {
			//         money: '500000',
			//         bank: '5000000'
			//     },
			//     punishment: {
			//         reason: '',
			//         date: '',
			//         admin: {
			//             firstname: '',
			//             lastname: ''
			//         }
			//     }
			// },
			// {
			//     type: 2,
			//     gender: 0,
			//     level: 4,
			//     nickname: {
			//         firstname: 'Paris',
			//         lastname: 'May'
			//     },
			//     fraction: {
			//         type: 1,
			//         name: 'lspd'
			//     },
			//     condition: {
			//         hp: '100'
			//     },
			//     property: {
			//         money: '15800',
			//         bank: '5000000'
			//     },
			//     punishment: {
			//         reason: '',
			//         date: '',
			//         admin: {
			//             firstname: '',
			//             lastname: ''
			//         }
			//     }
			// },
			// {type: 1}
		]),
		[adminRedactorData, setAdminRedactorData] = React.useState([]),
		[currentHUD, setHUD] = React.useState(0),
		[isCursorActive, setCursorActive] = React.useState(false),
		[payPrice, setPayPrice] = React.useState(0),
		[pinCode, setPinCode] = React.useState(null),
		[targetPlayerData, setTargetPlayerData] = React.useState({}),
		[gasStation, setGasStation] = React.useState({
			id: 12,
			type: 'default',
			owner: 'Paris May',
			cost: {
				low: 10,
				medium: 20,
				premium: 30,
			},
		}),
		[currentJob, setCurrentJob] = React.useState(null),
		[jobParams, setJobParams] = React.useState(null);
	
	React.useEffect(() => {
		window.window.alt.emit('client::cef:ready');
		
		window.window.alt.on('cef::auth:start', bool => {
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
		
		window.alt.on('cef::pay:start', (price) => {
			setPayPrice(price);
			setComponent('pay');
		});
		
		window.alt.on('cef::clothesShop:start', () => setComponent('clothesShop'));
		
		window.alt.on('cef::gasStation:start', obj => {
			setComponent('gasStation');
			setGasStation(obj);
		});
		
		window.alt.on('cef::job:start', (job, params) => {
			setComponent('jobs');
			setCurrentJob(job);
			setJobParams(params);
		});
		
		window.alt.on('cef::cursor:change', bool => setCursorActive(bool));
	}, []);
	React.useEffect(() => {
		window.alt.on('cef::player:setData', obj => playerStore.fetchPlayerState(obj));
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
	}, [shopsStore]);
	React.useEffect(() => {
		window.alt.on('cef::jobs:setData', obj => jobsStore.fetchJobData(obj));
	}, [jobsStore]);
	
	return <div className="app">
		{component === 'auth' && <Auth isRegistered={isRegistered} store={authStore}/>}
		{component === 'creator' && <Creator store={creatorStore}/>}
		{component === 'choice' && <Choice characters={characters}/>}
		{component === 'spawnChoice' && <SpawnChoice spawnData={spawnsData}/>}
		{component === 'bank' && <Bank store={bankStore} player={playerStore}/>}
		{component === 'hud' && <HUD
			defaultStore={hudStore}
			crimeStore={crimeHudStore}
			player={playerStore}
			currentHUD={currentHUD}
			targetPlayerData={targetPlayerData}
		/>}
		{component === 'adminRedactor' && <AdminRedactor data={adminRedactorData}/>}
		{component === 'battlePass' && <BattlePass store={battlePassStore}/>}
		{component === 'atm' && <ATM store={bankStore} player={playerStore} pinCode={pinCode}/>}
		{component === 'pay' && <Pay player={playerStore} payPrice={payPrice}/>}
		{component === 'clothesShop' && <ClothesShop player={playerStore} hudStore={hudStore} store={shopsStore}/>}
		{component === 'gasStation' && <GasStation data={gasStation} store={hudStore} player={playerStore}/>}
		{component === 'jobs' && <Jobs store={jobsStore} currentJob={currentJob} jobParams={jobParams}/>}
		<Chat store={chatStore} isCursorActive={isCursorActive}
		      isVisible={(component === 'hud' || component === 'clothesShop') && currentHUD === 0 && !playerStore.playerState.dead.isDead}/>
	</div>;
};

export default App;