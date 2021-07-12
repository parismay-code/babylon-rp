import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import players         from 'assets/images/crimeMenu/players.svg';
import add             from 'assets/images/crimeMenu/add.svg';
import remove          from 'assets/images/crimeMenu/remove.svg';
import killedScull     from 'assets/images/crimeMenu/killedScull.svg';
import scull           from 'assets/images/crimeMenu/scull.svg';
import firstPlaceIcon  from 'assets/images/crimeMenu/firstPlaceIcon.svg';
import secondPlaceIcon from 'assets/images/crimeMenu/secondPlaceIcon.svg';
import thirdPlaceIcon  from 'assets/images/crimeMenu/thirdPlaceIcon.svg';

import './ChangeCaptureList.scss';

const ChangeCaptureList = ({store, setPage, fractionColor}) => {
	const captureList = React.useMemo(() => {
			return store.players.filter(el => el.isCapture);
		}, [store.players]),
		firstPlace = React.useMemo(() => store.capture.lastGameBest[store.capture.lastGameBest.findIndex(el => el.place === 1)], [store.capture.lastGameBest]),
		secondPlace = React.useMemo(() => store.capture.lastGameBest[store.capture.lastGameBest.findIndex(el => el.place === 2)], [store.capture.lastGameBest]),
		thirdPlace = React.useMemo(() => store.capture.lastGameBest[store.capture.lastGameBest.findIndex(el => el.place === 3)], [store.capture.lastGameBest]),
		fractionCaptureStatus = React.useMemo(() => {
			switch (store.fractionName) {
				case 'Marabunta': return store.fractionsCaptureStatus.mara;
				case 'Families': return store.fractionsCaptureStatus.families;
				case 'Ballas': return store.fractionsCaptureStatus.ballas;
				case 'Vagos': return store.fractionsCaptureStatus.vagos;
				default: return;
			}
		}, [store.fractionName, store.fractionsCaptureStatus]);
	
	React.useEffect(() => {
		store.capture.players = [];
		
		for (let i = 0; i < store.capture.count; i++) {
			store.capture.players.push({isBlank: true});
		}
		
		store.capture.players.push({isBlank: true, reserve: true});
		store.capture.players.push({isBlank: true, reserve: true});
	}, [store.capture]);
	
	return <div className="crime-menu-change-capture-list">
		<div className="crime-menu-change-capture-list-players">
			<div className="crime-menu-change-capture-list-players-header">
				<div className="crime-menu-change-capture-list-players-header-title">
					<img className="crime-menu-change-capture-list-players-header-title__icon" src={players} alt="#"/>
					<div className="crime-menu-change-capture-list-players-header-title__text">
						{captureList.length}
					</div>
				</div>
				<div className="crime-menu-change-capture-list-players-header__subtitle">Претенденты</div>
			</div>
			<div className="crime-menu-change-capture-list-players-content">
				{captureList.slice().sort((a, b) => b.rank - a.rank).map((el, key) => {
					return <div
						key={key}
						className="crime-menu-change-capture-list-players-content-element"
						onClick={() => {
							const index = store.capture.players.findIndex(el => el.isBlank);
							store.capture.players[index] = {...el, reserve: index + 1 > store.capture.count};
							captureList.splice(captureList.findIndex(_el => _el.id === el.id), 1);
						}}
						onMouseEnter={e => {
							switch (store.fractionName) {
								case 'Marabunta':
									return e.target.classList.add('crime-menu-change-capture-list-players-content-element_blue');
								case 'Vagos':
									return e.target.classList.add('crime-menu-change-capture-list-players-content-element_yellow');
								case 'Families':
									return e.target.classList.add('crime-menu-change-capture-list-players-content-element_green');
								case 'Ballas':
									return e.target.classList.add('crime-menu-change-capture-list-players-content-element_purple');
								default:
									return;
							}
						}}
						onMouseLeave={e => {
							e.target.classList.remove(
								'crime-menu-change-capture-list-players-content-element_blue',
								'crime-menu-change-capture-list-players-content-element_yellow',
								'crime-menu-change-capture-list-players-content-element_green',
								'crime-menu-change-capture-list-players-content-element_purple',
							);
						}}
					>
						<img className="crime-menu-change-capture-list-players-content-element__add" src={add} alt="#"/>
						<div className="crime-menu-change-capture-list-players-content-element__rank">{el.rank}</div>
						<div className="crime-menu-change-capture-list-players-content-element__nickname">
							[{el.id}] {el.nickname}
						</div>
					</div>;
				})}
			</div>
		</div>
		<div className="crime-menu-change-capture-list-team">
			<div className="crime-menu-change-capture-list-team-header">
				<img className="crime-menu-change-capture-list-team-header__icon" src={killedScull} alt="#"/>
				<div className="crime-menu-change-capture-list-team-header__title">Команда</div>
			</div>
			<div className="crime-menu-change-capture-list-team-content">
				{store.capture.players.map((el, key) => {
					return el.isBlank ? <div
							key={key}
							className="crime-menu-change-capture-list-team-content-element crime-menu-change-capture-list-team-content-element_blank"
							style={el.reserve ? {background: `linear-gradient(to right, #00000000, ${fractionColor}10, ${fractionColor}80, ${fractionColor}10, #00000000)`} : null}
						>
							<div className="crime-menu-change-capture-list-team-content-element__key">{key + 1}</div>
							<img className="crime-menu-change-capture-list-team-content-element__icon" src={scull} alt="#"/>
							{el.reserve ? <div className="crime-menu-change-capture-list-team-content-element__reserve">
								замена
							</div> : null}
						</div> :
						<div
							key={key}
							className="crime-menu-change-capture-list-team-content-element"
							style={el.reserve ? {background: `linear-gradient(to right, #00000000, ${fractionColor}10, ${fractionColor}80, ${fractionColor}10, #00000000)`} : null}
							onClick={() => {
								captureList.push(el);
								store.capture.players[key] = {isBlank: true, reserve: key + 1 > store.capture.count};
							}}
							onMouseEnter={e => {
								e.target.classList.add('crime-menu-change-capture-list-team-content-element_hovered');
							}}
							onMouseLeave={e => {
								e.target.classList.remove('crime-menu-change-capture-list-team-content-element_hovered');
							}}
						>
							<div className="crime-menu-change-capture-list-team-content-element__rank">{el.rank}</div>
							<div className="crime-menu-change-capture-list-team-content-element__nickname">
								[{el.id}] {el.nickname}
							</div>
							<img className="crime-menu-change-capture-list-team-content-element__remove" src={remove}
							     alt="#"/>
						</div>;
				})}
			</div>
		</div>
		<div className="crime-menu-change-capture-list-achievements">
			<div className="crime-menu-change-capture-list-achievements-header">
				<div className="crime-menu-change-capture-list-achievements-header__title">Лучшие игроки</div>
				<div className="crime-menu-change-capture-list-achievements-header__subtitle">прошлого матча</div>
				<div className="crime-menu-change-capture-list-achievements-header__description">
					Показатели лучших игроков команды за прошлый матч
				</div>
			</div>
			<div className="crime-menu-change-capture-list-achievements-content">
				{secondPlace && <div
					className="crime-menu-change-capture-list-achievements-content-element crime-menu-change-capture-list-achievements-content-element_second">
					<div className="crime-menu-change-capture-list-achievements-content-element-kills">
						<div className="crime-menu-change-capture-list-achievements-content-element-kills__value">
							{secondPlace.kills}
						</div>
						<div
							className="crime-menu-change-capture-list-achievements-content-element-kills__title">Убийств
						</div>
					</div>
					<div className="crime-menu-change-capture-list-achievements-content-element-pedestal">
						<img className="crime-menu-change-capture-list-achievements-content-element-pedestal__icon"
						     src={secondPlaceIcon} alt="#"/>
						<div className="crime-menu-change-capture-list-achievements-content-element-pedestal__status">
							{secondPlace.isDied ?
								'Погиб' : 'Выжил'}
						</div>
						<div className="crime-menu-change-capture-list-achievements-content-element-pedestal__nickname">
							[{secondPlace.id}]<br/>
							{secondPlace.nickname.split(' ')[0]}<br/>
							{secondPlace.nickname.split(' ')[1]}
						</div>
					</div>
				</div>}
				{firstPlace && <div
					className="crime-menu-change-capture-list-achievements-content-element crime-menu-change-capture-list-achievements-content-element_first">
					<div className="crime-menu-change-capture-list-achievements-content-element-kills">
						<div className="crime-menu-change-capture-list-achievements-content-element-kills__value">
							{firstPlace.kills}
						</div>
						<div
							className="crime-menu-change-capture-list-achievements-content-element-kills__title">Убийств
						</div>
					</div>
					<div className="crime-menu-change-capture-list-achievements-content-element-pedestal">
						<img className="crime-menu-change-capture-list-achievements-content-element-pedestal__icon"
						     src={firstPlaceIcon} alt="#"/>
						<div className="crime-menu-change-capture-list-achievements-content-element-pedestal__status">
							{firstPlace.isDied ?
								'Погиб' : 'Выжил'}
						</div>
						<div className="crime-menu-change-capture-list-achievements-content-element-pedestal__nickname">
							[{firstPlace.id}]<br/>
							{firstPlace.nickname.split(' ')[0]}<br/>
							{firstPlace.nickname.split(' ')[1]}
						</div>
					</div>
				</div>}
				{thirdPlace && <div
					className="crime-menu-change-capture-list-achievements-content-element crime-menu-change-capture-list-achievements-content-element_third">
					<div className="crime-menu-change-capture-list-achievements-content-element-kills">
						<div className="crime-menu-change-capture-list-achievements-content-element-kills__value">
							{thirdPlace.kills}
						</div>
						<div
							className="crime-menu-change-capture-list-achievements-content-element-kills__title">Убийств
						</div>
					</div>
					<div className="crime-menu-change-capture-list-achievements-content-element-pedestal">
						<img className="crime-menu-change-capture-list-achievements-content-element-pedestal__icon"
						     src={thirdPlaceIcon} alt="#"/>
						<div className="crime-menu-change-capture-list-achievements-content-element-pedestal__status">
							{thirdPlace.isDied ?
								'Погиб' : 'Выжил'}
						</div>
						<div className="crime-menu-change-capture-list-achievements-content-element-pedestal__nickname">
							[{thirdPlace.id}]<br/>
							{thirdPlace.nickname.split(' ')[0]}<br/>
							{thirdPlace.nickname.split(' ')[1]}
						</div>
					</div>
				</div>}
			</div>
		</div>
		<div
			className="crime-menu-change-capture-list-submit"
			onClick={() => {
				if (!fractionCaptureStatus) EventManager.emitServer('fraction', 'setCapture', store.capture);
				else EventManager.emitServer('fraction', 'getCapture', store.capture);
				
				setPage('main');
			}}
		>
			Готово
		</div>
	</div>;
};

export default observer(ChangeCaptureList);