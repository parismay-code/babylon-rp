import * as React from 'react';
import {observer} from 'mobx-react-lite';

import truckDriver from 'assets/images/jobs/truckDriver.svg';
import busIcon     from 'assets/images/jobs/busIcon.svg';

import {regExp}    from 'utils/regExp';

import './TruckDriver.scss';

const TruckDriver = ({store}) => {
	const price = React.useMemo(() =>
		`${String(store.truckDriverData.arendPrice).replace(regExp.money, '$1 ')}$`, [store.truckDriverData.arendPrice]);
	
	return <div className="job-truck-driver">
		<img className="job-truck-driver__bg" src={truckDriver} alt="#"/>
		<div className="job-truck-driver-content">
			<div className="job-truck-driver-content-logo">
				<img className="job-truck-driver-content-logo__image" src={busIcon} alt="#"/>
			</div>
			<div className="job-truck-driver-content-main">
				<div className="job-truck-driver-content-main-header">
					<div className="job-truck-driver-content-main-header-name">
						<div className="job-truck-driver-content-main-header-name__title">работа</div>
						<div className="job-truck-driver-content-main-header-name__subtitle">дальнобойщик</div>
					</div>
					<div className="job-truck-driver-content-main-header-level">
						<div className="job-truck-driver-content-main-header-level__value">{store.truckDriverData.level}</div>
						<div className="job-truck-driver-content-main-header-level__title">уровень <br/>профессии</div>
					</div>
					<div className="job-truck-driver-content-main-header-completed">
						<div className="job-truck-driver-content-main-header-completed__value">{price}</div>
						<div className="job-truck-driver-content-main-header-level__title">стоимость <br/>аренды авто</div>
					</div>
					<div
						className="job-truck-driver-content-main-header-button"
						onClick={() => window.alt.emit('client::jobs:setBusJob')}
					>{store.busData.isEmployed ? 'уволиться' : 'устроиться'}</div>
				</div>
				<div className="job-truck-driver-content-main-information">
					<div className="job-truck-driver-content-main-information__title">Информация и требования</div>
					<div className="job-truck-driver-content-main-information-list">
						<div className="job-truck-driver-content-main-information-list__element">ЗП на счет в банке</div>
						<div className="job-truck-driver-content-main-information-list__element">Гос. работа</div>
						<div className="job-truck-driver-content-main-information-list__element">Водительское удостоверение</div>
						<div className="job-truck-driver-content-main-information-list__element">5-й игровой уровень</div>
					</div>
				</div>
				<div className="job-truck-driver-content-main-levels">
					<div className="job-truck-driver-content-main-levels-element">
						<div className="job-truck-driver-content-main-levels-element-title">
							<div className='job-truck-driver-content-main-levels-element-title__text'>1 уровень</div>
							<div className='job-truck-driver-content-main-levels-element-title__line'/>
						</div>
						<div className="job-truck-driver-content-main-levels-element__subtitle">Доступен всем</div>
					</div>
					<div className="job-truck-driver-content-main-levels-element">
						<div className="job-truck-driver-content-main-levels-element-title">
							<div className='job-truck-driver-content-main-levels-element-title__text'>2 уровень</div>
							<div className='job-truck-driver-content-main-levels-element-title__line'/>
						</div>
						<div className="job-truck-driver-content-main-levels-element__subtitle">100 и более поездок</div>
					</div>
					<div className="job-truck-driver-content-main-levels-element">
						<div className="job-truck-driver-content-main-levels-element-title">
							<div className='job-truck-driver-content-main-levels-element-title__text'>3 уровень</div>
							<div className='job-truck-driver-content-main-levels-element-title__line'/>
						</div>
						<div className="job-truck-driver-content-main-levels-element__subtitle">200 и более поездок</div>
					</div>
				</div>
				<div className="job-truck-driver-content-main-description">
					<div className='job-truck-driver-content-main-description__title'>Описание работы</div>
					<div className='job-truck-driver-content-main-description__text'>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
						labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default observer(TruckDriver);