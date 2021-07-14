import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import truckDriverOrders from 'assets/images/jobs/truckDriverOrders.svg';

import {regExp} from 'utils/regExp';

import './TruckDriverOrders.scss';

const TruckDriverOrders = ({store}) => {
	const [type, setType] = React.useState('state');
	
	const rightWord = React.useMemo(() => {
		const number = store.truckDriverData.orders.filter(el => el.type === type).length;
		
		const lastSymbol = Number(String(number)[String(number).length - 1]);
		const preLastSymbol = Number(String(number)[String(number).length - 2]);
		const lastTwoSymbols = Number(String(lastSymbol) + String(preLastSymbol));
		
		if (lastTwoSymbols > 10 && lastTwoSymbols < 15) return 'доступных заказов';
		else if (lastSymbol === 1) return 'доступный заказ';
		else if (lastSymbol > 1 && lastSymbol < 5) return 'доступных заказа';
		else return 'доступных заказов';
	}, [store.truckDriverData.orders, type]);
	
	return <div className="job-truck-driver-orders">
		<img className="job-truck-driver-orders__bg" src={truckDriverOrders} alt="#"/>
		<div className="job-truck-driver-orders-content">
			<div className="job-truck-driver-orders-content-header">
				<div className="job-truck-driver-orders-content-header-title">
					<div className="job-truck-driver-orders-content-header-title__top">заказы</div>
					<div className="job-truck-driver-orders-content-header-title__bottom">список всех заказов</div>
				</div>
				<div className="job-truck-driver-orders-content-header-types">
					<div
						className={cn('job-truck-driver-orders-content-header-types__element',
							type === 'state' ? 'job-truck-driver-orders-content-header-types__element_active' : null)}
						onClick={() => setType('state')}
					>
						Гос. заказы
					</div>
					{store.truckDriverData.access.private &&
					<div
						className={cn('job-truck-driver-orders-content-header-types__element',
							type === 'private' ? 'job-truck-driver-orders-content-header-types__element_active' : null)}
						onClick={() => setType('private')}
					>
						Частные
					</div>}
				</div>
				<div className={cn('job-truck-driver-orders-content-header-current',
					store.truckDriverData.current.name ? 'job-truck-driver-orders-content-header-current_active' : null)}>
					<div className="job-truck-driver-orders-content-header-current__title">
						{store.truckDriverData.current.name}
					</div>
					<div className="job-truck-driver-orders-content-header-current-content">
						<div className="job-truck-driver-orders-content-header-current-content-price">
							<div className="job-truck-driver-orders-content-header-current-content-price__title">
								{store.truckDriverData.current.price} $
							</div>
							<div className="job-truck-driver-orders-content-header-current-content-price__subtitle">
								текущий
							</div>
						</div>
						<div
							className="job-truck-driver-orders-content-header-current-content__cancel"
							onClick={() => EventManager.emitServer('job', 'cancelOrder')}
						>
							отменить заказ
						</div>
					</div>
				</div>
				<div className="job-truck-driver-orders-content-header-free-orders">
					<div className="job-truck-driver-orders-content-header-free-orders__value">
						{store.truckDriverData.orders.filter(el => el.type === type).length}
					</div>
					<div className="job-truck-driver-orders-content-header-free-orders__title">{rightWord.split(' ')[0]}
						<br/>{rightWord.split(' ')[1]}</div>
				</div>
			</div>
			<div className="job-truck-driver-orders-content-list">
				<div className="job-truck-driver-orders-content-list-header">
					<div
						className="job-truck-driver-orders-content-list-header__element job-truck-driver-orders-content-list-header__element_product">Продукт
					</div>
					<div
						className="job-truck-driver-orders-content-list-header__element job-truck-driver-orders-content-list-header__element_count">Количество
					</div>
					<div
						className="job-truck-driver-orders-content-list-header__element job-truck-driver-orders-content-list-header__element_earning">Оплата
					</div>
				</div>
				<div className="job-truck-driver-orders-content-list-main">
					{store.truckDriverData.orders.filter(el => el.type === type).map((el, key) => {
						const earning = `${String(el.earning).replace(regExp.money, '$1 ')} $`;
						
						return <div key={key} className="job-truck-driver-orders-content-list-main-element">
							<div
								className="job-truck-driver-orders-content-list-main-element__product">{el.product}</div>
							<div className="job-truck-driver-orders-content-list-main-element__count">{el.count}</div>
							<div className="job-truck-driver-orders-content-list-main-element__earning">{earning}</div>
							<div
								className="job-truck-driver-orders-content-list-main-element__submit"
								onClick={() => EventManager.emitServer('job', 'acceptTruckDriverOrder', el.id, el.earning)}
							>принять заказ
							</div>
						</div>;
					})}
				</div>
			</div>
		</div>
	</div>;
};

export default observer(TruckDriverOrders);