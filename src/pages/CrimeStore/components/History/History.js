import * as React from 'react';
import {observer} from 'mobx-react-lite';

import historyBg from 'assets/images/crimeStore/historyBg.svg';
import topUp     from 'assets/images/crimeStore/topUp.svg';
import withdraw  from 'assets/images/crimeStore/withdraw.svg';

import './History.scss';

const History = ({store}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('crime-store-history_active'), 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="crime-store-history">
		<div className="crime-store-history-content">
			<div className="crime-store-history-content-header">
				<div
					className="crime-store-history-content-header__element crime-store-history-content-header__element_type">
					Операция
				</div>
				<div
					className="crime-store-history-content-header__element crime-store-history-content-header__element_date">
					Дата
				</div>
				<div
					className="crime-store-history-content-header__element crime-store-history-content-header__element_id">
					ID
				</div>
				<div
					className="crime-store-history-content-header__element crime-store-history-content-header__element_nickname">
					Никнейм
				</div>
				<div
					className="crime-store-history-content-header__element crime-store-history-content-header__element_item">
					Предмет
				</div>
				<div
					className="crime-store-history-content-header__element crime-store-history-content-header__element_count">
					Кол-во
				</div>
			</div>
			<div className="crime-store-history-content-list">
				{store.storeLogs.map((el, key) => {
					return <div key={key} className="crime-store-history-content-list-element">
						<div
							className="crime-store-history-content-list-element crime-store-history-content-list-element_type">
							<img
								className="crime-store-history-content-list-element__icon"
								src={el.action ? topUp : withdraw}
								alt="#"
							/>
						</div>
						<div
							className="crime-store-history-content-list-element crime-store-history-content-list-element_date">
							{el.date}
						</div>
						<div
							className="crime-store-history-content-list-element crime-store-history-content-list-element_id">
							{el.playerId}
						</div>
						<div
							className="crime-store-history-content-list-element crime-store-history-content-list-element_nickname">
							{store.players.find(p => p.id === el.playerId).nickname}
						</div>
						<div
							className="crime-store-history-content-list-element crime-store-history-content-list-element_item">
							{el.item}
						</div>
						<div
							className="crime-store-history-content-list-element crime-store-history-content-list-element_count">
							{el.count}
						</div>
					</div>;
				})}
			</div>
		</div>
		<img className="crime-store-history__bg" src={historyBg} alt="#"/>
	</div>;
};

export default observer(History);