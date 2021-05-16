import * as React from 'react';
import {observer} from 'mobx-react-lite';

import bus     from 'assets/images/jobs/bus.svg';
import busIcon from 'assets/images/jobs/busIcon.svg';

import './Bus.scss';

const Bus = ({store}) => {
	return <div className="job-bus">
		<img className="job-bus__bg" src={bus} alt="#"/>
		<div className="job-bus-content">
			<div className="job-bus-content-logo">
				<img className="job-bus-content-logo__image" src={busIcon} alt="#"/>
			</div>
			<div className="job-bus-content-main">
				<div className="job-bus-content-main-header">
					<div className="job-bus-content-main-header-name">
						<div className="job-bus-content-main-header-name__title">работа</div>
						<div className="job-bus-content-main-header-name__subtitle">водитель автобуса</div>
					</div>
					<div className="job-bus-content-main-header-level">
						<div className="job-bus-content-main-header-level__value">{store.busData.level}</div>
						<div className="job-bus-content-main-header-level__title">уровень <br/>профессии</div>
					</div>
					<div className="job-bus-content-main-header-completed">
						<div className="job-bus-content-main-header-completed__value">{store.busData.completed}</div>
						<div className="job-bus-content-main-header-level__title">совершено <br/>поездок</div>
					</div>
					<div
						className="job-bus-content-main-header-button"
						onClick={() => window.alt.emit('client::jobs:setBusJob', !store.busData.isEmployed)}
					>{store.busData.isEmployed ? 'уволиться' : 'устроиться'}</div>
				</div>
				<div className="job-bus-content-main-information">
					<div className="job-bus-content-main-information__title">Информация и требования</div>
					<div className="job-bus-content-main-information-list">
						<div className="job-bus-content-main-information-list__element">ЗП на счет в банке</div>
						<div className="job-bus-content-main-information-list__element">Гос. работа</div>
						<div className="job-bus-content-main-information-list__element">Водительское удостоверение</div>
						<div className="job-bus-content-main-information-list__element">3-й игровой уровень</div>
					</div>
				</div>
				<div className="job-bus-content-main-levels">
					<div className="job-bus-content-main-levels-element">
						<div className="job-bus-content-main-levels-element-title">
							<div className='job-bus-content-main-levels-element-title__text'>1 уровень</div>
							<div className='job-bus-content-main-levels-element-title__line'/>
						</div>
						<div className="job-bus-content-main-levels-element__subtitle">Доступен всем</div>
					</div>
					<div className="job-bus-content-main-levels-element">
						<div className="job-bus-content-main-levels-element-title">
							<div className='job-bus-content-main-levels-element-title__text'>2 уровень</div>
							<div className='job-bus-content-main-levels-element-title__line'/>
						</div>
						<div className="job-bus-content-main-levels-element__subtitle">35 и более поездок</div>
					</div>
					<div className="job-bus-content-main-levels-element">
						<div className="job-bus-content-main-levels-element-title">
							<div className='job-bus-content-main-levels-element-title__text'>3 уровень</div>
							<div className='job-bus-content-main-levels-element-title__line'/>
						</div>
						<div className="job-bus-content-main-levels-element__subtitle">100 и более поездок</div>
					</div>
				</div>
				<div className="job-bus-content-main-description">
					<div className='job-bus-content-main-description__title'>Описание работы</div>
					<div className='job-bus-content-main-description__text'>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
						labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default observer(Bus);