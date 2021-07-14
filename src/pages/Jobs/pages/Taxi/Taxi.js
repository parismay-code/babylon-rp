import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import taxi    from 'assets/images/jobs/taxi.svg';
import busIcon from 'assets/images/jobs/busIcon.svg';

import './Taxi.scss';

const Taxi = ({store}) => {
	const taxiBg = React.useCallback((bool) => {
		if (bool) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
		else return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
	}, []);
	
	return <div className="job-taxi">
		<img className="job-taxi__bg" src={taxi} alt="#"/>
		<div className="job-taxi-content">
			<div className="job-taxi-content-logo">
				<img className="job-taxi-content-logo__image" src={busIcon} alt="#"/>
			</div>
			<div className="job-taxi-content-main">
				<div className="job-taxi-content-main-header">
					<div className="job-taxi-content-main-header-bg">
						<div className="job-taxi-content-main-header-bg-row">
							{taxiBg(true).map((el, key) => {
								return <div key={key} className="job-taxi-content-main-header-bg-row__element"/>;
							})}
						</div>
						<div className="job-taxi-content-main-header-bg-row">
							{taxiBg(false).map((el, key) => {
								return <div key={key} className="job-taxi-content-main-header-bg-row__element"/>;
							})}
						</div>
						<div className="job-taxi-content-main-header-bg-row">
							{taxiBg(true).map((el, key) => {
								return <div key={key} className="job-taxi-content-main-header-bg-row__element"/>;
							})}
						</div>
						<div className="job-taxi-content-main-header-bg-row">
							{taxiBg(false).map((el, key) => {
								return <div key={key} className="job-taxi-content-main-header-bg-row__element"/>;
							})}
						</div>
						<div className="job-taxi-content-main-header-bg-row">
							{taxiBg(true).map((el, key) => {
								return <div key={key} className="job-taxi-content-main-header-bg-row__element"/>;
							})}
						</div>
					</div>
					<div className="job-taxi-content-main-header-name">
						<div className="job-taxi-content-main-header-name__title">работа</div>
						<div className="job-taxi-content-main-header-name__subtitle">водитель такси</div>
					</div>
					<div className="job-taxi-content-main-header-completed">
						<div className="job-taxi-content-main-header-completed__value">{store.taxiData.arendPrice} $</div>
						<div className="job-taxi-content-main-header-level__title">стоимость <br/>аренды авто</div>
					</div>
					<div
						className="job-taxi-content-main-header-button"
						onClick={() => EventManager.emitServer('jobs', 'setTaxiJob', !store.taxiData.isEmployed)}
					>{store.taxiData.isEmployed ? 'уволиться' : 'устроиться'}</div>
				</div>
				<div className="job-taxi-content-main-information">
					<div className="job-taxi-content-main-information__title">Требования</div>
					<div className="job-taxi-content-main-information-list">
						<div className="job-taxi-content-main-information-list__element">Водительское удостоверение</div>
						<div className="job-taxi-content-main-information-list__element">3-й игровой уровень</div>
					</div>
				</div>
				<div className="job-taxi-content-main-description">
					<div className="job-taxi-content-main-description__title">Описание работы</div>
					<div className="job-taxi-content-main-description__text">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
						ut
						labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
						dolores
						et ea rebum. Stet clita kasd gubergren, no sea
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default observer(Taxi);