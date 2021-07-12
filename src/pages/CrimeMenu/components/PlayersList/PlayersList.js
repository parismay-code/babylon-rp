import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

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
	
	const reprimandCount = React.useMemo(() => {
		return store.reprimandLogs.filter(el => el.to === editData.data?.id && el.type === 0).length -
			store.reprimandLogs.filter(el => el.to === editData.data?.id && el.type === 1).length;
	}, [editData.data?.id, store.reprimandLogs]);
	
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
					className="crime-menu-players-list-content-header__element crime-menu-players-list-content-header__element_capt">Капт
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
						<div
							className="crime-menu-players-list-content-list-element__capt"
							onClick={() => {
								if (store.playerAccess.includes('manageCapture')) {
									store.changePlayerData(el.id, {...el, isCapture: !el.isCapture});
									EventManager.emitServer('fraction', 'toggleCaptureRole', el.id, el.isCapture);
								} else store.addNotify('Вы не можете управлять каптами.');
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg" width="18.953" height="20.678"
								viewBox="0 0 18.953 20.678"
								fill={el.isCapture ? '#ffffff' : null}
								opacity={el.isCapture ? 1 : .5}
								style={el.isCapture ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}
							>
								<path
									d="M8.773,20.678H7.311v-3.1H5.849v2.505l-2-4.478A8.468,8.468,0,0,1,0,8.649C0,3.88,4.251,0,9.477,0s9.476,3.88,9.476,8.649a8.464,8.464,0,0,1-3.851,6.96l-1.944,4.355V17.582H11.7v3.1H10.235v-3.1H8.773v3.1Zm.7-7.567a.781.781,0,0,0-.75.546l-.364,1.105a.792.792,0,0,0,.109.715.781.781,0,0,0,.641.329h.728a.779.779,0,0,0,.64-.329.791.791,0,0,0,.109-.716l-.364-1.105A.779.779,0,0,0,9.476,13.111ZM14.3,9.021a2.241,2.241,0,0,0-.766.215h0l-.4.149-.19.07a5.3,5.3,0,0,0-2,.973,3.307,3.307,0,0,0,.422,2.276c.384.637.646.644.657.644a.333.333,0,0,0,.07.006,3.324,3.324,0,0,0,1.046-.262l.238-.086A5.07,5.07,0,0,0,15.761,11.6a1.572,1.572,0,0,0-.123-1.8,1.514,1.514,0,0,0-.869-.688A1.747,1.747,0,0,0,14.3,9.021Zm-9.644,0a1.729,1.729,0,0,0-.469.087,1.49,1.49,0,0,0-.868.687,1.567,1.567,0,0,0-.124,1.8,5.066,5.066,0,0,0,2.389,1.411l.24.087a3.313,3.313,0,0,0,1.044.262.414.414,0,0,0,.065,0c.029,0,.294-.032.664-.645a3.313,3.313,0,0,0,.421-2.276,5.291,5.291,0,0,0-2-.973l-.19-.07-.4-.149h0A2.244,2.244,0,0,0,4.655,9.021Z"
								/>
							</svg>
						</div>
						
						<img
							className="crime-menu-players-list-content-list-element__edit"
							src={editIcon}
							alt="#"
							onClick={() => {
								if (store.playerAccess.includes('manage')) setEditData({visible: true, data: el});
								else store.addNotify('Вы не можете управлять составом.');
							}}
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
							onClick={() => EventManager.emitServer('fraction', 'setRank', editData.data?.id, true)}
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
							onClick={() => EventManager.emitServer('fraction', 'setRank', editData.data?.id, false)}
						/>
					</div>
					<div className="crime-menu-players-list-content-edit-player-reputation-reprimands">
						<span className="crime-menu-players-list-content-edit-player-reputation-reprimands__count">
							{reprimandCount}
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
					onClick={() => EventManager.emitServer('fraction', 'kick', editData.data?.id)}
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