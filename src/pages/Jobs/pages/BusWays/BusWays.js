import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import {regExp} from 'utils/regExp';

import './BusWays.scss';

const BusWays = ({store}) => {
	const [currentWay, setCurrentWay] = React.useState(0);
	
	const price = React.useMemo(() =>
		`$ ${String(store.busData.arendPrice).replace(regExp.money, '$1 ')}`, [store.busData.arendPrice]);
	
	return <div className="job-bus-ways">
		<div className="job-bus-ways-map">
			<img className="job-bus-ways-map__image"
			     src={`./publicImages/jobs/bus/${store.busData.ways[currentWay].map}`} alt="#"/>
			<div className="job-bus-ways-map__title">карта маршрута</div>
		</div>
		<div className="job-bus-ways-content">
			<div className="job-bus-ways-content-header">
				<div className="job-bus-ways-content-header-title">
					<div className="job-bus-ways-content-header-title__text">выберите рейс</div>
					<div className="job-bus-ways-content-header-title__arend">аренда
						автобуса: <b>{price}</b></div>
				</div>
				<div
					className="job-bus-ways-content-header__button"
					onClick={() => EventManager.emitServer('job', 'startBus', store.busData.ways[currentWay].id)}
				>начать работу
				</div>
			</div>
			<div className="job-bus-ways-content-list">
				{store.busData.ways.map((el, key) => {
					const earning = `${String(el.earning).replace(regExp.money, '$1 ')}$`;
					
					return <div
						key={key}
						className={cn('job-bus-ways-content-list-element', currentWay === key ? 'job-bus-ways-content-list-element_active' : null)}
						onClick={() => setCurrentWay(key)}
					>
						<div className="job-bus-ways-content-list-element-content">
							<div className="job-bus-ways-content-list-element-content-name">
								<div className="job-bus-ways-content-list-element-content-name__title">№{el.id}</div>
								<div
									className="job-bus-ways-content-list-element-content-name__subtitle">{el.name}</div>
							</div>
							<div className="job-bus-ways-content-list-element-content__length">{el.length}/km</div>
							<div className="job-bus-ways-content-list-element-content-earning">
								<div className="job-bus-ways-content-list-element-content-earning__title">Заработок
								</div>
								<div
									className="job-bus-ways-content-list-element-content-earning__subtitle">{earning}</div>
							</div>
						</div>
					</div>;
				})}
			</div>
		</div>
	</div>;
};

export default observer(BusWays);