import * as React from 'react';
import {observer} from 'mobx-react-lite';

import businessIcon from 'assets/images/mafiaMenu/businessIcon.svg';

import {regExp} from 'utils/regExp';

import './Business.scss';

const Business = ({store, color, setPage}) => {
	const balance = React.useMemo(() =>
			`$ ${String(store.balance).replace(regExp.money, '$1 ')}`, [store.balance]),
		isFractionCaptured = React.useMemo(() => {
			switch (store.fractionName) {
				case 'Armenian':
					return store.fractionsCaptureStatus.armenian;
				case 'Japanese':
					return store.fractionsCaptureStatus.japanese;
				case 'Russian':
					return store.fractionsCaptureStatus.russian;
				case 'Italian':
					return store.fractionsCaptureStatus.lcn;
				default:
					return;
			}
		}, [store.fractionName, store.fractionsCaptureStatus.armenian, store.fractionsCaptureStatus.lcn, store.fractionsCaptureStatus.russian, store.fractionsCaptureStatus.japanese]);
	
	const [business, setBusiness] = React.useState(0);
	
	React.useEffect(() => {
		let _business = 0;
		
		const interval = setInterval(() => {
			if (_business === store.territories) return clearInterval(interval);
			
			_business++;
			setBusiness(_business);
		}, 25);
		
		return () => clearInterval(interval);
	}, [store.territories]);
	
	const hours = React.useMemo(() => {
			if (String(store.capture.time.hours).length < 2) return `0${store.capture.time.hours}`;
			else return store.capture.time.hours;
		}, [store.capture.time.hours]),
		minutes = React.useMemo(() => {
			if (String(store.capture.time.minutes).length < 2) return `0${store.capture.time.minutes}`;
			else return store.capture.time.minutes;
		}, [store.capture.time.minutes]);
	
	return <div
		className="crime-menu-ghetto-territories"
		onClick={() => {
			if (store.playerAccess.includes('manageBizwar')) {
				if (isFractionCaptured === 'defence') setPage('getBizwar');
				else if (isFractionCaptured !== 'attack') setPage('setBizwar');
				else store.addNotify(`Вы уже назначили бизвар против ${store.capture.defence} в ${hours}:${minutes}`);
			} else store.addNotify('Вы не можете управлять бизварами.');
		}}
	>
		<div className="crime-menu-ghetto-territories-header">
			<img className="crime-menu-ghetto-territories-header__icon" src={businessIcon} alt="#"/>
			<div className="crime-menu-ghetto-territories-header__title">Деловая репутация</div>
		</div>
		<div className="crime-menu-ghetto-territories-content">
			<div
				className="crime-menu-ghetto-territories-content-fill"
				style={{
					background: `linear-gradient(to left, ${color}80, ${color}17)`,
					width: `${business / 72 * 100}%`,
				}}
			>
				<div className="crime-menu-ghetto-territories-content-fill__point"/>
			</div>
			<div className="crime-menu-ghetto-territories-content-info">
				<div className="crime-menu-ghetto-territories-content-info-percent">
					<div
						className="crime-menu-ghetto-territories-content-info-percent__title">{(business / 72 * 100).toFixed(0)}%
					</div>
					<div className="crime-menu-ghetto-territories-content-info-percent__subtitle">бизнесов под контролем
					</div>
				</div>
				<div className="crime-menu-ghetto-territories-content-info-stats">
					<div className="crime-menu-ghetto-territories-content-info-stats-players">
						<div
							className="crime-menu-ghetto-territories-content-info-stats-players__title">{store.players.length}</div>
						<div className="crime-menu-ghetto-territories-content-info-stats-players__subtitle">члена
							фракции
						</div>
					</div>
					<div className="crime-menu-ghetto-territories-content-info-stats-players">
						<div className="crime-menu-ghetto-territories-content-info-stats-players__title">{balance}</div>
						<div className="crime-menu-ghetto-territories-content-info-stats-players__subtitle">баланс
							фракции
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default observer(Business);