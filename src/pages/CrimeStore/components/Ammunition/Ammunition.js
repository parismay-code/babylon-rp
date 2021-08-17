import * as React from 'react';
import {observer} from 'mobx-react-lite';

import Card from './components/Card';

import './Ammunition.scss';

const Ammunition = ({store}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('crime-store-ammunition_active'), 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="crime-store-ammunition">
		{store.store.guns.map((el, key) => {
			return <div key={key} className="crime-store-ammunition-list">
				<div className="crime-store-ammunition-list-header">
					<img
						className="crime-store-ammunition-list-header__icon"
						src={`./publicImages/crimeStore/${el.icon}`}
						alt="#"
					/>
					<div className="crime-store-ammunition-list-header__title">{el.title}</div>
					<div className="crime-store-ammunition-list-header__count">{el.items.length} шт.</div>
				</div>
				{el.items.map((el, key) => {
					return <Card key={`item${key}`} el={el}/>;
				})}
			</div>;
		})}
	</div>;
};

export default observer(Ammunition);