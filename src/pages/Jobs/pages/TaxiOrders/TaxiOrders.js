import * as React        from 'react';
import {observer}        from 'mobx-react-lite';
import EventManager      from 'utils/eventManager';

import taxiOrders from 'assets/images/jobs/taxiOrders.svg';

import './TaxiOrders.scss';

const TaxiOrders = ({store}) => {
	const rightWord = React.useMemo(() => {
		const number = store.taxiData.orders.length;
		
		const lastSymbol = Number(String(number)[String(number).length - 1]);
		const preLastSymbol = Number(String(number)[String(number).length - 2]);
		const lastTwoSymbols = Number(String(lastSymbol) + String(preLastSymbol));
		
		if (lastTwoSymbols > 10 && lastTwoSymbols < 15) return 'доступных заказов';
		else if (lastSymbol === 1) return 'доступный заказ';
		else if (lastSymbol > 1 && lastSymbol < 5) return 'доступных заказа';
		else return 'доступных заказов';
	}, [store.taxiData.orders]);
	
	return <div className="job-taxi-orders">
		<img className="job-taxi-orders__bg" src={taxiOrders} alt="#"/>
		<div className="job-taxi-orders-content">
			<div className="job-taxi-orders-content-header">
				<div className="job-taxi-orders-content-header-title">
					<div className="job-taxi-orders-content-header-title__top">Таксопарк</div>
					<div className="job-taxi-orders-content-header-title__bottom">список всех заказов</div>
				</div>
				<div className="job-taxi-orders-content-header-free-orders">
					<div className="job-taxi-orders-content-header-free-orders__value">
						{store.taxiData.orders.length}
					</div>
					<div className="job-taxi-orders-content-header-free-orders__title">{rightWord.split(' ')[0]}
						<br/>{rightWord.split(' ')[1]}</div>
				</div>
			</div>
			<div className="job-taxi-orders-content-list">
				<div className="job-taxi-orders-content-list-header">
					<div
						className="job-taxi-orders-content-list-header__element job-taxi-orders-content-list-header__element_name"
					>
						заказчик
					</div>
					<div
						className="job-taxi-orders-content-list-header__element job-taxi-orders-content-list-header__element_distance"
					>
						расстояние
					</div>
					<div
						className="job-taxi-orders-content-list-header__element job-taxi-orders-content-list-header__element_description"
					>
						примечание
					</div>
				</div>
				<div className="job-taxi-orders-content-list-main">
					{store.taxiData.orders.map((el, key) => {
						return <div key={key} className="job-taxi-orders-content-list-main-element">
							<div className="job-taxi-orders-content-list-main-element__name">
								{el.name.split(' ')[0]}<br/>{el.name.split(' ')[1]}
							</div>
							<div className="job-taxi-orders-content-list-main-element__distance">{el.distance}</div>
							<div className="job-taxi-orders-content-list-main-element__description">{el.description}</div>
							<div
								className="job-taxi-orders-content-list-main-element__submit"
								onClick={() => EventManager.emitServer('jobs', 'acceptTaxiOrder', el.id)}
							>принять заказ
							</div>
						</div>;
					})}
				</div>
			</div>
		</div>
	</div>;
};

export default observer(TaxiOrders);