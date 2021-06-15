import * as React from 'react';
import {observer} from 'mobx-react-lite';

import searchIcon from 'assets/images/crimeMenu/searchIcon.svg';

import './PlayersListHeader.scss';

const PlayersListHeader = ({store}) => {
	return <div className="crime-menu-players-list-header">
		<div className="crime-menu-players-list-header__title">Участники</div>
		<div className="crime-menu-players-list-header-online">
			<div
				className="crime-menu-players-list-header-online__value">{store.players.filter(el => el.isOnline).length}</div>
			<div className="crime-menu-players-list-header-online__title">Online</div>
		</div>
		<div className="crime-menu-players-list-header-search">
			<input
				className="crime-menu-players-list-header-search__field"
				type="text"
				name="n_crimeMenuPlayersListField"
				placeholder="Введите имя или ID для поиска"
				autoComplete="off"
				onChange={e => store.filterPlayers(e.target.value)}
			/>
			<div className="crime-menu-players-list-header-search-submit">
				<img className="crime-menu-players-list-header-search-submit__icon" src={searchIcon} alt="#"/>
			</div>
		</div>
	</div>;
};

export default observer(PlayersListHeader);