import * as React from "react";
import {useLocalStore} from "utils/hooks/useLocal";

import Auth from "pages/Auth";
import Creator from "pages/Creator";
import Choice from "pages/Choice";
import SpawnChoice from "pages/SpawnChoice";
import Bank from "pages/Bank";
import HUD from "pages/HUD";
import AdminRedactor from "pages/AdminRedactor";
import BattlePass from "pages/BattlePass";
import ATM from "pages/ATM";
import Pay from "pages/Pay";

import Chat from "pages/HUD/components/Chat/Chat";

import AuthStore from "store/AuthStore";
import BankStore from "store/BankStore";
import ChatStore from "store/ChatStore";
import CreatorStore from "store/CreatorStore";
import HUDStore from "store/HUDStore";
import CrimeHUDStore from "store/CrimeHUDStore";
import BattlePassStore from "store/BattlePassStore";

import spawnsData from "configs/spawnData";

const App = () => {
    const authStore = useLocalStore(() => new AuthStore());
    const bankStore = useLocalStore(() => new BankStore());
    const chatStore = useLocalStore(() => new ChatStore());
    const creatorStore = useLocalStore(() => new CreatorStore());
    const hudStore = useLocalStore(() => new HUDStore());
    const crimeHudStore = useLocalStore(() => new CrimeHUDStore());
    const battlePassStore = useLocalStore(() => new BattlePassStore());

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
        [payPrice, setPayPrice] = React.useState(5203);

    React.useEffect(() => {
        window.window.alt.emit('client::cef:ready');

        window.window.alt.on('cef::auth:start', bool => {
            setRegistered(bool);
            setComponent('auth');
        });

        window.alt.on('cef::characterCustom:start', () => {
            setComponent('creator');
        });

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

        window.alt.on('cef::bank:start', () => {
            setComponent('bank')
        });

        window.alt.on('cef::hud:start', () => {
            setComponent('hud');
        });
        window.alt.on('cef::hud:change', int => setHUD(int));

        window.alt.on('cef::adminRedactor:start', array => {
            setAdminRedactorData(array);
            setComponent('adminRedactor');
        });

        window.alt.on('cef::battlePass:start', () => {
            setComponent('battlePass');
        });

        window.alt.on('cef::pay:start', (price) => {
            setPayPrice(price);
            setComponent('pay');
        });

        window.alt.on('cef::cursor:change', bool => setCursorActive(bool));
    }, []);
    React.useEffect(() => {
        window.alt.on('cef::auth:getResetCode', (code) => {
            authStore.fetchResetCode(code);
        })
    }, [authStore]);
    React.useEffect(() => {
        window.alt.on('cef::bank:setAccountData', obj => bankStore.fetchAccountState(obj));
        window.alt.on('cef::bank:setFines', array => bankStore.fetchFines(array));
        window.alt.on('cef::bank:changeFines', obj => bankStore.changeFines(obj));
        window.alt.on('cef::bank:setCards', array => bankStore.fetchCards(array));
        window.alt.on('cef::bank:setWithdrawHistory', array => bankStore.fetchWithdrawHistory(array));
        window.alt.on('cef::bank:addWithdraw', data => bankStore.addWithdraw(data));
        window.alt.on('cef::bank:setTopUpHistory', array => bankStore.fetchTopUpHistory(array));
        window.alt.on('cef::bank:addTopUp', data => bankStore.addTopUp(data));
    }, [bankStore]);
    React.useEffect(() => {
        window.alt.on('cef::hud:loadState', obj => hudStore.fetchPlayerState(obj));
        window.alt.on('cef::hud:loadMoney', obj => hudStore.fetchPlayerMoney(obj));
        window.alt.on('cef::hud:setMapState', obj => hudStore.fetchMapState(obj));
        window.alt.on('cef::hud:setDate', date => hudStore.fetchDate(date));
        window.alt.on('cef::hud:setTime', time => hudStore.fetchTime(time));
        window.alt.on('cef::hud:loadCarState', obj => hudStore.fetchCarState(obj));
        window.alt.on('cef::hud:heal', bool => hudStore.fetchEffects('healing', bool));
        window.alt.on('cef::hud:kill', data => hudStore.fetchDeadState(data));
        window.alt.on('cef::hud:setGreenZone', bool => hudStore.setGreenZone(bool));
        window.alt.on('cef::hud:loadAmmo', obj => hudStore.fetchAmmo(obj));
        window.alt.on('cef::hud:setCarHud', bool => hudStore.setCarHud(bool));
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

    return <div className='app'>
        {component === 'auth' && <Auth isRegistered={isRegistered} store={authStore}/>}
        {component === 'creator' && <Creator store={creatorStore}/>}
        {component === 'choice' && <Choice characters={characters}/>}
        {component === 'spawnChoice' && <SpawnChoice spawnData={spawnsData}/>}
        {component === 'bank' && <Bank store={bankStore}/>}
        {component === 'hud' && <HUD
            defaultStore={hudStore}
            crimeStore={crimeHudStore}
            currentHUD={currentHUD}
        />}
        {component === 'adminRedactor' && <AdminRedactor data={adminRedactorData}/>}
        {component === 'battlePass' && <BattlePass store={battlePassStore}/>}
        {component === 'atm' && <ATM store={bankStore}/>}
        {component === 'pay' && <Pay payPrice={payPrice} money={hudStore.money} cardData={bankStore.accountState}/>}
        <Chat store={chatStore} isCursorActive={isCursorActive}
              isVisible={component === 'hud' && currentHUD === 0 && !hudStore.deadState.isDead}/>
    </div>
}

export default App;