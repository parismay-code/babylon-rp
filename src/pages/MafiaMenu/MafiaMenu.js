import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import News        from './components/News';
import Business    from './components/Business';
import Events      from './components/Events';
import PlayersList from './components/PlayersList';
import Ranks       from './components/Ranks';
import Cars        from './components/Cars';

import SetBizwar        from './pages/SetBizwar';
import GetBizwar        from './pages/GetBizwar';
import ChangeBizwarList from './pages/ChangeBizwarList';

import armenianIcon from 'assets/images/mafiaMenu/armenianIcon.svg';
import russianIcon  from 'assets/images/mafiaMenu/russianIcon.svg';
import yakuzaIcon   from 'assets/images/mafiaMenu/yakuzaIcon.svg';
import lcnIcon      from 'assets/images/mafiaMenu/lcnIcon.svg';

import './MafiaMenu.scss';

const MafiaMenu = ({store}) => {
	const [currentComponent, setComponent] = React.useState('players'),
		[currentPage, setPage] = React.useState('main');
	
	const fractionIcon = React.useMemo(() => {
			switch (store.fractionName) {
				case 'Armenian':
					return armenianIcon;
				case 'Japanese':
					return yakuzaIcon;
				case 'Russian':
					return russianIcon;
				case 'Italian':
					return lcnIcon;
				default:
					return null;
			}
		}, [store.fractionName]),
		fractionColor = React.useMemo(() => {
			switch (store.fractionName) {
				case 'Armenian':
					return '#FFBF95';
				case 'Japanese':
					return '#FF2C2C';
				case 'Russian':
					return '#AFAFAF';
				case 'Italian':
					return '#C373F3';
				default:
					return null;
			}
		}, [store.fractionName]);
	
	const notify = React.useRef(null);
	
	const showNotify = React.useCallback(() => {
		if (store.notifyQueue.length > 0) {
			store.isNotifyShowed = true;
			
			notify.current.innerText = store.notifyQueue[0].text;
			notify.current.style.opacity = '1';
			
			setTimeout(() => {
				notify.current.style.opacity = '0';
				store.notifyQueue.shift();
				setTimeout(() => {
					store.isNotifyShowed = false;
				}, 500);
			}, store.notifyQueue[0].timeout ? store.notifyQueue[0].timeout : 3000);
		}
	}, [store.notifyQueue, store.isNotifyShowed]);
	
	React.useEffect(() => {
		EventManager.addHandler('fraction', 'sendNotify', (text, timeout) => store.addNotify(text, timeout));
	}, [store.addNotify]);
	React.useEffect(() => {
		EventManager.addHandler('fraction', 'setFractionName', text => store.fetchFractionName(text));
		EventManager.addHandler('fraction', 'setAllTerritories', obj => store.fetchAllTerritories(obj));
		EventManager.addHandler('fraction', 'setBalance', value => store.fetchBalance(value));
		EventManager.addHandler('fraction', 'setPlayers', array => store.fetchPlayers(array));
		EventManager.addHandler('fraction', 'setStoreLocked', bool => store.setStoreLocked(bool));
		EventManager.addHandler('fraction', 'changePlayerData', (id, obj) => store.changePlayerData(id, obj));
		EventManager.addHandler('fraction', 'setNews', array => store.fetchNews(array));
		EventManager.addHandler('fraction', 'changeNews', (type, ...args) => store.changeNews(type, ...args));
		EventManager.addHandler('fraction', 'setEvents', array => store.fetchEvents(array));
		EventManager.addHandler('fraction', 'changeEvents', (type, ...args) => store.changeEvents(type, ...args));
		EventManager.addHandler('fraction', 'setRanks', array => store.fetchRanksData(array));
		EventManager.addHandler('fraction', 'changeRankData', (rank, obj) => store.changeRankData(rank, obj));
		EventManager.addHandler('fraction', 'setAwardLogs', array => store.fetchAwardLogs(array));
		EventManager.addHandler('fraction', 'addAward', obj => store.addAward(obj));
		EventManager.addHandler('fraction', 'setReprimandLogs', array => store.fetchReprimandLogs(array));
		EventManager.addHandler('fraction', 'addReprimand', obj => store.addReprimandLogs(obj));
		EventManager.addHandler('fraction', 'setStoreLogs', array => store.fetchStoreLogs(array));
		EventManager.addHandler('fraction', 'addStoreLog', obj => store.addStoreLogs(obj));
		EventManager.addHandler('fraction', 'setFractionsFreeze', obj => store.setFractionsFreeze(obj));
		EventManager.addHandler('fraction', 'setFractionsCaptureStatus', obj => store.setFractionsCaptureStatus(obj));
		EventManager.addHandler('fraction', 'setCapture', obj => store.fetchCapture(obj));
		
		EventManager.stopAddingHandlers('fraction');
		
		return () => EventManager.removeTargetHandlers('fraction');
	}, [store]);
	React.useEffect(() => {
		if (!store.isNotifyShowed) {
			showNotify();
		}
	}, [showNotify, store.notifyQueue.length, store.isNotifyShowed]);
	
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('mafia-menu_active'), 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="mafia-menu">
		<div className="mafia-menu-header">
			<div className="mafia-menu-header__top-light"
			     style={{background: `radial-gradient(closest-side at 50% 50%, ${fractionColor}99, #FFFFFF00)`}}/>
			<div className="mafia-menu-header__title">{store.fractionName} mafia</div>
			<div className="mafia-menu-header__bottom-line"
			     style={{background: `linear-gradient(to right, #FFFFFF00, #FFFFFF, ${fractionColor})`}}/>
		</div>
		<div className="mafia-menu-content">
			{currentPage === 'main' && <>
				<div className="mafia-menu-content-left">
					<News store={store}/>
					<div className="mafia-menu-content-left-territories">
						<Business store={store} color={fractionColor} setPage={setPage}/>
					</div>
					<Events store={store}/>
				</div>
				<div className="mafia-menu-content-right">
					<div className="mafia-menu-content-right-navigation">
						<svg
							className="mafia-menu-content-right-navigation__players"
							xmlns="http://www.w3.org/2000/svg"
							width="39.992"
							height="27.994"
							viewBox="0 0 39.992 27.994"
							onClick={() => setComponent('players')}
						>
							<path
								d="M12,16.247a7,7,0,1,0-7-7A7,7,0,0,0,12,16.247Zm4.8,2h-.519a9.663,9.663,0,0,1-8.561,0H7.2a7.2,7.2,0,0,0-7.2,7.2v1.8a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3v-1.8A7.2,7.2,0,0,0,16.8,18.247Zm13.2-2a6,6,0,1,0-6-6A6,6,0,0,0,29.994,16.247Zm3,2h-.237a7.88,7.88,0,0,1-5.524,0h-.237a6.94,6.94,0,0,0-3.481.962,9.145,9.145,0,0,1,2.481,6.236v2.4c0,.137-.031.269-.037.4H36.992a3,3,0,0,0,3-3,7,7,0,0,0-7-7Z"
								transform="translate(0 -2.25)"
								fill={currentComponent === 'players' ? '#eaeaea' : '#000000'}
								opacity={currentComponent === 'players' ? 1 : .5}/>
						</svg>
						<svg
							className="mafia-menu-content-right-navigation__cars"
							xmlns="http://www.w3.org/2000/svg"
							width="33.75"
							height="27"
							viewBox="0 0 33.75 27"
							onClick={() => {
								if (store.playerAccess.includes('changeCars')) setComponent('cars');
								else store.addNotify('Вы не можете изменять доступ к машинам.');
							}}
						>
							<path
								d="M30.843,14.929l-.79-1.976-1.4-3.5A7.837,7.837,0,0,0,21.34,4.5H12.41A7.837,7.837,0,0,0,5.1,9.45l-1.4,3.5-.79,1.976A4.49,4.49,0,0,0,0,19.125V22.5a4.463,4.463,0,0,0,1.125,2.948v3.8a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V27h18v2.25a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25v-3.8A4.461,4.461,0,0,0,33.75,22.5V19.125A4.49,4.49,0,0,0,30.843,14.929ZM9.276,11.121A3.375,3.375,0,0,1,12.41,9h8.93a3.375,3.375,0,0,1,3.134,2.121l1.4,3.5h-18l1.4-3.5ZM5.625,22.486a2.122,2.122,0,0,1-2.25-2.243A2.122,2.122,0,0,1,5.625,18C6.975,18,9,20.019,9,21.364S6.975,22.486,5.625,22.486Zm22.5,0c-1.35,0-3.375.224-3.375-1.121S26.775,18,28.125,18a2.122,2.122,0,0,1,2.25,2.243,2.122,2.122,0,0,1-2.25,2.243Z"
								transform="translate(0 -4.5)" fill={currentComponent === 'cars' ? '#eaeaea' : '#000000'}
								opacity={currentComponent === 'cars' ? 1 : .5}/>
						</svg>
						<svg
							className="mafia-menu-content-right-navigation__ranks"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="29.995"
							viewBox="0 0 30 29.995"
							onClick={() => {
								if (store.playerAccess.includes('changeRanks')) setComponent('ranks');
								else store.addNotify('Вы не можете изменять ранги.');
							}}
						>
							<path
								d="M1963.846-1883.569a1.174,1.174,0,0,0-1.142-1.16c-.3-.012-.607-.013-.91,0-.194.008-.268-.05-.267-.255.007-1.782-.007-3.564.009-5.346a3.546,3.546,0,0,0-3.6-3.631c-1.827,0-3.655,0-5.482.01-.241,0-.4-.042-.479-.3a1.763,1.763,0,0,0-.251-.431,3.409,3.409,0,0,0-3.371-1.525,3.355,3.355,0,0,0-2.649,1.981c-.069.149-.129.27-.339.268-1.046-.01-2.093-.012-3.139,0a28.616,28.616,0,0,0-3,.043,3.4,3.4,0,0,0-2.757,2,3.865,3.865,0,0,0-.334,1.771q-.007,2.559,0,5.118c0,.213-.057.3-.282.289-.28-.016-.562.018-.841,0a1.211,1.211,0,0,0-1.166,1.155c.015,1.531,0,3.063,0,4.595a1.2,1.2,0,0,0,1.223,1.228c.242.005.485,0,.728,0,.331,0,.336,0,.335.324q0,2.638-.005,5.277a3.546,3.546,0,0,0,3.629,3.6c1.858-.015,3.715,0,5.573-.007a.3.3,0,0,1,.317.193,3.857,3.857,0,0,0,.541.865,3.408,3.408,0,0,0,4.359.794,3.333,3.333,0,0,0,1.441-1.589.387.387,0,0,1,.417-.261c.948.011,1.9,0,2.843,0v0c.955,0,1.911.006,2.866,0a3.072,3.072,0,0,0,.941-.137,3.525,3.525,0,0,0,1.81-1.311,3.08,3.08,0,0,0,.614-1.451,15.7,15.7,0,0,0,.044-1.681c0-1.448,0-2.9,0-4.345,0-.2.063-.272.262-.265.287.011.576.005.864,0a1.2,1.2,0,0,0,1.184-1.123Q1963.86-1881.226,1963.846-1883.569Zm-25.551,3.427c-.568-.083-1.134.036-1.7,0-.344-.022-.355-.033-.357-.373,0-.538.005-1.076,0-1.614,0-.184.073-.237.244-.233.288.008.575,0,.863,0v0c.3,0,.591,0,.886,0,.147,0,.228.045.227.207,0,.614,0,1.227,0,1.841C1938.457-1880.2,1938.411-1880.124,1938.3-1880.141Zm10.594-13.719a1.071,1.071,0,0,1,1.056,1.061,1.1,1.1,0,0,1-1.159,1.153,1.1,1.1,0,0,1-1.045-1.1A1.093,1.093,0,0,1,1948.889-1893.86Zm-.086,25.226a1.1,1.1,0,0,1-1.063-1.11,1.074,1.074,0,0,1,1.131-1.1,1.014,1.014,0,0,1,1.056,1.057A1.078,1.078,0,0,1,1948.8-1868.634Zm5.2-7.458H1943.7V-1886.4H1954Zm7.289-4.046c-.6-.077-1.195.022-1.792,0-.163-.006-.233-.074-.255-.247a12.473,12.473,0,0,1,.007-1.452c0-.517,0-.517.532-.517h.545c.311,0,.622,0,.932,0,.142,0,.207.053.206.2q0,.921,0,1.841C1961.47-1880.188,1961.416-1880.124,1961.293-1880.139Z"
								transform="translate(-1933.852 1896.247)"
								fill={currentComponent === 'ranks' ? '#eaeaea' : '#000000'}
								opacity={currentComponent === 'ranks' ? 1 : .5}/>
						</svg>
						<svg
							className="mafia-menu-content-right-navigation__store"
							xmlns="http://www.w3.org/2000/svg"
							width="31.69"
							height="29.499"
							viewBox="0 0 31.69 29.499"
							onClick={() => {
								if (store.playerAccess.includes('closeStore')) {
									store.setStoreLocked(!store.isStoreLocked);
									EventManager.emitServer('fraction', 'lockStore', store.isStoreLocked);
								} else store.addNotify('Вы не можете управлять складом.');
							}}
						>
							<path
								d="M21.178,29.5a1.262,1.262,0,0,1-1.261-1.262V23.192a1.262,1.262,0,0,1,1.261-1.262h.631V20.039a3.995,3.995,0,0,1,7.99,0V21.93h.631a1.262,1.262,0,0,1,1.261,1.262v5.045A1.261,1.261,0,0,1,30.429,29.5Zm2.734-9.46V21.93H27.7V20.039a1.892,1.892,0,1,0-3.785,0ZM16.819,25.8H6.071V24.287H16.919a12.68,12.68,0,0,0-.1,1.516h0ZM0,25.8V12.9A12.9,12.9,0,0,1,22.027,3.777,12.823,12.823,0,0,1,25.8,12.9v.841a12.58,12.58,0,0,0-4.554,2.5V10.626H4.553V25.8H0Zm6.071-3.035V21.25H17.69a12.688,12.688,0,0,0-.487,1.518H6.071ZM18.4,19.732H6.071V18.214H19.4a12.777,12.777,0,0,0-.99,1.518ZM6.071,16.7V15.179H19.732V16.7Zm0-3.035V12.144H19.732v1.517H6.071Z"
								transform="translate(0)" fill={store.isStoreLocked ? '#eaeaea' : '#000000'}
								opacity={store.isStoreLocked ? 1 : .5}/>
						</svg>
					</div>
					{currentComponent === 'players' && <PlayersList store={store} color={fractionColor}/>}
					{currentComponent === 'cars' && <Cars store={store}/>}
					{currentComponent === 'ranks' && <Ranks store={store}/>}
				</div>
			</>}
			{currentPage === 'setBizwar' &&
			<SetBizwar store={store} setPage={setPage} fractionIcon={fractionIcon} fractionColor={fractionColor}/>}
			{currentPage === 'getBizwar' &&
			<GetBizwar store={store} setPage={setPage} fractionColor={fractionColor}/>}
			{currentPage === 'changeCaptureList' &&
			<ChangeBizwarList store={store} setPage={setPage} fractionColor={fractionColor}/>}
			<div ref={notify} className="mafia-menu-content-notify"/>
		</div>
		<div className="mafia-menu-footer">
			<div className="mafia-menu-footer__top-line"
			     style={{background: `linear-gradient(to right, #FFFFFF00, #FFFFFF, ${fractionColor})`}}/>
			<div className="mafia-menu-footer-exit">
				<div className="mafia-menu-footer-exit__button">Esc</div>
				<span className="mafia-menu-footer-exit__text">- выход</span>
			</div>
			<img className="mafia-menu-footer__icon" src={fractionIcon} alt="#"/>
		</div>
	</div>;
};

export default observer(MafiaMenu);