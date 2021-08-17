import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';
import cn           from 'classnames';

import History    from './components/History';
import Ammunition from './components/Ammunition';

import time   from 'assets/images/crimeStore/time.svg';
import locked from 'assets/images/crimeStore/locked.svg';
import opened from 'assets/images/crimeStore/opened.svg';

import './CrimeStore.scss';

const CrimeStore = ({store}) => {
	const [currentPage, setPage] = React.useState('main'),
		[currentOption, setOption] = React.useState('ammunition');
	
	const notify = React.useRef(null),
		screen = React.useRef(null);
	
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
		if (!store.isNotifyShowed) {
			showNotify();
		}
	}, [showNotify, store.notifyQueue.length, store.isNotifyShowed]);
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('crime-store_active'), 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="crime-store">
		<div className="crime-store-header">
			<div className="crime-store-header-info">
				<div className="crime-store-header-info__title">Склад</div>
				<div className="crime-store-header-info-time">
					<div className="crime-store-header-info-time__description">
						Участники организации могут брать предметы не чаще, чем каждые:
					</div>
					<img className="crime-store-header-info-time__icon" src={time} alt="#"/>
					<div className="crime-store-header-info-time__value">{store.store.timeout} <span>мин</span></div>
				</div>
				<div
					className="crime-store-header-info-status"
					onClick={() => {
						if (store.playerAccess.includes('manageStore')) {
							store.setStoreLocked(!store.isStoreLocked);
							EventManager.emitServer('fraction', 'lockStore', store.isStoreLocked);
						} else store.addNotify('Вы не можете управлять складом.');
					}}
				>
					<div className="crime-store-header-info-status__title">
						{store.isStoreLocked ? 'открыть' : 'закрыть'} <br/>склад
					</div>
					<img
						className="crime-store-header-info-status__icon"
						src={store.isStoreLocked ? locked : opened}
						alt="#"
					/>
				</div>
			</div>
			<div className="crime-store-header-navigation">
				<div
					className={cn('crime-store-header-navigation-element',
						currentPage === 'main' ? 'crime-store-header-navigation-element_active' : null)}
				>
					<div
						className="crime-store-header-navigation-element__title"
						onClick={() => {
							setPage('main');
							setOption('ammunition');
						}}
					>
						склад
					</div>
					<div className="crime-store-header-navigation-element-options">
						<div
							className={cn('crime-store-header-navigation-element-options__element',
								currentOption === 'ammunition' ? 'crime-store-header-navigation-element-options__element_active' : null)}
							onClick={() => setOption('ammunition')}
						>
							амуниция
						</div>
						<div
							className={cn('crime-store-header-navigation-element-options__element',
								currentOption === 'other' ? 'crime-store-header-navigation-element-options__element_active' : null)}
							onClick={() => setOption('other')}
						>
							прочее
						</div>
					</div>
				</div>
				<div
					className={cn('crime-store-header-navigation-element',
						currentPage === 'manage' ? 'crime-store-header-navigation-element_active' : null)}
				>
					<div
						className="crime-store-header-navigation-element__title"
						onClick={() => {
							if (store.playerAccess.includes('manageStore')) {
								setPage('manage');
								setOption('access');
							} else store.addNotify('Вы не можете управлять складом.');
						}}
					>
						управление
					</div>
					<div className="crime-store-header-navigation-element-options">
						<div
							className={cn('crime-store-header-navigation-element-options__element',
								currentOption === 'access' ? 'crime-store-header-navigation-element-options__element_active' : null)}
							onClick={() => setOption('access')}
						>
							доступ
						</div>
						<div
							className={cn('crime-store-header-navigation-element-options__element',
								currentOption === 'count' ? 'crime-store-header-navigation-element-options__element_active' : null)}
							onClick={() => setOption('count')}
						>
							кол-во
						</div>
					</div>
				</div>
				<div
					className={cn('crime-store-header-navigation-element',
						currentPage === 'history' ? 'crime-store-header-navigation-element_active' : null)}
				>
					<div
						className="crime-store-header-navigation-element__title"
						onClick={() => setPage('history')}
					>
						история
					</div>
				</div>
				<div className="crime-store-header-navigation__description">
					{currentPage === 'history' && 'Вы можете просматривать все операции со складом'}
					{currentPage === 'main' ?
						currentOption === 'ammunition' ? 'Возьмите или положите оружие' :
							'Возьмите или положите все, кроме оружия' : null}
					{currentPage === 'manage' ?
						currentOption === 'access' ? 'Используйте ранговую сортировку для каждого оружия' :
							'Введите кол-во единиц амуниции которое может взять участник организации' : null}
				</div>
			</div>
			<div ref={notify} className="crime-store-header-notify"/>
			<div className="crime-store-header-exit">
				<span className="crime-store-header-exit__text">выход -</span>
				<div className="crime-store-header-exit__button">Esc</div>
			</div>
		</div>
		<div className="crime-store-content">
			{currentPage === 'main' && currentOption === 'ammunition' && <Ammunition store={store}/>}
			{currentPage === 'history' && <History store={store}/>}
		</div>
	</div>;
};

export default observer(CrimeStore);