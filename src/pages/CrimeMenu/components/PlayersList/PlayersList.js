import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import PlayersListHeader  from './components/PlayersListHeader';
import PlayerEditingPages from './components/PlayerEditingPages';

import editIcon from 'assets/images/crimeMenu/editIcon.svg';
import arrow    from 'assets/images/shops/clothes/arrow.svg';
import person   from 'assets/images/crimeMenu/person.svg';
import kickIcon from 'assets/images/crimeMenu/kickIcon.svg';

import './PlayersList.scss';

const PlayersList = ({store, color}) => {
	const [editData, setEditData] = React.useState({
		visible: false,
		data: null,
	});
	
	return <div className="crime-menu-players-list">
		<PlayersListHeader store={store}/>
		<div className="crime-menu-players-list-content">
			<div className="crime-menu-players-list-content-header">
				<div
					className="crime-menu-players-list-content-header__element crime-menu-players-list-content-header__element_rank">Ранг
				</div>
				<div
					className="crime-menu-players-list-content-header__element crime-menu-players-list-content-header__element_id">ID
				</div>
				<div
					className="crime-menu-players-list-content-header__element crime-menu-players-list-content-header__element_nickname">Имя
				</div>
				<div
					className="crime-menu-players-list-content-header__element crime-menu-players-list-content-header__element_rank-name">Должность
				</div>
				<div
					className="crime-menu-players-list-content-header__element crime-menu-players-list-content-header__element_online">Online
				</div>
				<div
					className="crime-menu-players-list-content-header__element crime-menu-players-list-content-header__element_edit">Управление
				</div>
			</div>
			<div
				className={cn('crime-menu-players-list-content-list', editData.visible ? 'crime-menu-players-list-content-list_editing' : null)}>
				{store.filteredPlayersList.slice().sort((a, b) => b.rank - a.rank).sort((a, b) => b.isOnline - a.isOnline).map((el, key) => {
					return <div
						key={key}
						className="crime-menu-players-list-content-list-element"
						style={editData.data?.id === el.id ? {background: `linear-gradient(135deg, #21212166, #FFFFFF15, ${color}66)`} : null}
					>
						<div className="crime-menu-players-list-content-list-element__rank">{el.rank}</div>
						<div className="crime-menu-players-list-content-list-element__id">{el.id}</div>
						<div className="crime-menu-players-list-content-list-element__nickname">{el.nickname}</div>
						<div
							className="crime-menu-players-list-content-list-element__rank-name">{store.ranks[el.rank - 1].name}</div>
						<div className="crime-menu-players-list-content-list-element-online">
							{el.isOnline ?
								<div className="crime-menu-players-list-content-list-element-online__status"/> :
								<div
									className="crime-menu-players-list-content-list-element-online__date">{el.onlineLogs.filter(el => el.time > 0)[0].date}</div>}
						</div>
						<img
							className="crime-menu-players-list-content-list-element__edit"
							src={editIcon}
							alt="#"
							onClick={() => setEditData({visible: true, data: el})}
						/>
					</div>;
				})}
			</div>
		</div>
		<div
			className={cn('crime-menu-players-list-content-edit', editData.visible ? 'crime-menu-players-list-content-edit_active' : null)}>
			<div className="crime-menu-players-list-content-edit-player">
				<img className="crime-menu-players-list-content-edit-player__person" src={person} alt="#"/>
				<div className="crime-menu-players-list-content-edit-player-header">
					<div
						className="crime-menu-players-list-content-edit-player-header__id">ID: {editData.data?.id}</div>
					{editData.data?.punishment[0] &&
					<div className="crime-menu-players-list-content-edit-player-header__ban">Ban</div>}
					{editData.data?.punishment[1] &&
					<div className="crime-menu-players-list-content-edit-player-header__jail">Jail</div>}
					{editData.data?.punishment[2] &&
					<div className="crime-menu-players-list-content-edit-player-header__mute">Mute</div>}
				</div>
				<div className="crime-menu-players-list-content-edit-player-name">{editData.data?.nickname}</div>
				<div className="crime-menu-players-list-content-edit-player-stat">
					<div
						className="crime-menu-players-list-content-edit-player-stat__online"
						style={editData.data?.isOnline ? null : {color: '#000000', opacity: .5}}
					>
						{editData.data?.isOnline ? 'Online' : editData.data?.onlineLogs.filter(el => el.time > 0)[0].date}
					</div>
					<div className="crime-menu-players-list-content-edit-player-stat__rank">
						{store.ranks[editData.data?.rank - 1]?.name}
					</div>
				</div>
				<div className="crime-menu-players-list-content-edit-player-reputation">
					<div className="crime-menu-players-list-content-edit-player-reputation-rank">
						<img
							className="crime-menu-players-list-content-edit-player-reputation-rank__change
							crime-menu-players-list-content-edit-player-reputation-rank__change_top"
							src={arrow}
							alt="#"
							onClick={() => window.alt.emit('client::crimeMenu:setRank', editData.data?.id, true)}
						/>
						<div className="crime-menu-players-list-content-edit-player-reputation-rank-value">
							<span className="crime-menu-players-list-content-edit-player-reputation-rank-value__count">
								{editData.data?.rank}
							</span>
							ранг
						</div>
						<img
							className="crime-menu-players-list-content-edit-player-reputation-rank__change
							crime-menu-players-list-content-edit-player-reputation-rank__change_bottom"
							src={arrow}
							alt="#"
							onClick={() => window.alt.emit('client::crimeMenu:setRank', editData.data?.id, false)}
						/>
					</div>
					<div className="crime-menu-players-list-content-edit-player-reputation-reprimands">
						<span className="crime-menu-players-list-content-edit-player-reputation-reprimands__count">
							{store.reprimandLogs.filter(el => el.to === editData.data?.id).length}
						</span>
						выговоров
					</div>
				</div>
				<div className="crime-menu-players-list-content-edit-player-online">
					{editData.data?.onlineLogs.map((el, key) => {
						const time = el.time >= 60 ? `${(el.time / 60).toFixed(0)}ч` : `${el.time}мин`;
						
						return <div key={key} className="crime-menu-players-list-content-edit-player-online-element">
							<div className="crime-menu-players-list-content-edit-player-online-element__date">
								{el.date}
							</div>
							<div
								className="crime-menu-players-list-content-edit-player-online-element__time"
								style={el.time === 0 ? {color: '#ffffff', opacity: .5} : null}
							>
								{el.time > 0 ? `(${time})` : 'Offline'}
							</div>
						</div>;
					})}
				</div>
				<div className="crime-menu-players-list-content-edit-player__join-date">
					В организации с: {editData.data?.joinDate}
				</div>
				<div
					className="crime-menu-players-list-content-edit-player-kick"
					onClick={() => window.alt.emit('client::crimeMenu:kick', editData.data?.id)}
				>
					<img className="crime-menu-players-list-content-edit-player-kick__icon" src={kickIcon} alt="#"/>
					исключить
				</div>
			</div>
			<PlayerEditingPages editData={editData} store={store}/>
		</div>
	</div>;
};

export default observer(PlayersList);