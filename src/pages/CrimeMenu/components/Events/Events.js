import * as React from 'react';
import {observer} from 'mobx-react-lite';

import './Events.scss';

const Events = ({store}) => {
	return <div className='crime-menu-events'>
		<div className='crime-menu-events__title'>Мероприятия</div>
		<div className='crime-menu-events-list'>
			{store.events?.map((el, key) => {
				return <div key={key} className='crime-menu-events-list-element' style={el.image ? {background: `url("./publicImages/crimeMenu/${el.image}")`} : {background: '#00000080'}}>
					<div className='crime-menu-events-list-element__date'>{el.date}</div>
					<div className='crime-menu-events-list-element__text'>{el.text}</div>
					<div className='crime-menu-events-list-element__title'>{el.name}</div>
				</div>
			})}
		</div>
	</div>
}

export default observer(Events)