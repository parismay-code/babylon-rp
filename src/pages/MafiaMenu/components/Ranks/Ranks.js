import * as React from 'react';
import {observer} from 'mobx-react-lite';

import RankCategory from './components/RankCategory';

import './Ranks.scss';

const Ranks = ({store}) => {
	return <div className="mafia-menu-ranks">
		<div className="mafia-menu-ranks__title">Ранговые полномочия</div>
		<div className="mafia-menu-ranks-content">
			{store.ranks.slice().reverse().map((el, key) => {
				return <RankCategory key={key} store={store} el={el} id={key}/>
			})}
		</div>
	</div>;
};

export default observer(Ranks);