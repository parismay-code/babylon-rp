import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import truckDriverArend from 'assets/images/jobs/truckDriverArend.svg';

import {regExp} from 'utils/regExp';

import './TruckDriverArend.scss';

const TruckDriverArend = ({store}) => {
	const price = React.useMemo(() =>
		`${String(store.truckDriverData.arendPrice).replace(regExp.money, '$1 ')}$`, [store.truckDriverData.arendPrice]);
	
	return <div className="job-truck-driver-arend">
		<img className="job-truck-driver-arend__bg" src={truckDriverArend} alt="#"/>
		<div className="job-truck-driver-arend-content">
			<div className="job-truck-driver-arend-content-title">
				<div className="job-truck-driver-arend-content-title__arend">Аренда</div>
				<div className="job-truck-driver-arend-content-title__text">грузового транспортного средства</div>
			</div>
			<div className="job-truck-driver-arend-content-price">
				<div className="job-truck-driver-arend-content-price__value">{price}</div>
				<div className="job-truck-driver-arend-content-price__title">стоимость <br/>аренды ТС</div>
			</div>
			<div className="job-truck-driver-arend-content__description">
				Вы действительно хотите арендовать грузовой автомобиль?
			</div>
		</div>
		<div
			className="job-truck-driver-arend__submit"
			onClick={() => EventManager.emitServer('jobs', 'arendTruckDriver', store.truckDriverData.arendPrice)}
		>арендовать
		</div>
	</div>;
};

export default observer(TruckDriverArend);