import * as React from 'react';
import {observer} from 'mobx-react-lite';

import './StoreLogs.scss';

const StoreLogs = ({store, editData}) => {
	return <div className="mafia-menu-player-store-logs">
		<div className="mafia-menu-player-store-logs-list">
			<div className="mafia-menu-player-store-logs-list__title">Действия со складом (72ч)</div>
			<div className="mafia-menu-player-store-logs-list-header">
				<div className="mafia-menu-player-store-logs-list-header__element
				mafia-menu-player-store-logs-list-header__element_date">
					Дата
				</div>
				<div className="mafia-menu-player-store-logs-list-header__element
				mafia-menu-player-store-logs-list-header__element_action">
					Действие
				</div>
				<div className="mafia-menu-player-store-logs-list-header__element
				mafia-menu-player-store-logs-list-header__element_item">
					Предмет
				</div>
				<div className="mafia-menu-player-store-logs-list-header__element
				mafia-menu-player-store-logs-list-header__element_count">
					Кол-во
				</div>
			</div>
			<div className='mafia-menu-player-store-logs-list-content'>
				{store.storeLogs.filter(el => el.playerId === editData.data?.id).map((el, key) => {
					return <div key={key} className='mafia-menu-player-store-logs-list-content-element'>
						<div className='mafia-menu-player-store-logs-list-content-element__date'>{el.date}</div>
						<div
							className='mafia-menu-player-store-logs-list-content-element__action'
							style={el.action ? {color: '#B4F191'} : {color: '#FFAC4E'}}
						>
							{el.action ? 'Положил' : 'Взял'}
						</div>
						<div className='mafia-menu-player-store-logs-list-content-element__item'>{el.item}</div>
						<div className='mafia-menu-player-store-logs-list-content-element__count'>{el.count} шт.</div>
					</div>
				})}
			</div>
		</div>
	</div>;
}

export default observer(StoreLogs);