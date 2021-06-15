import * as React from 'react';
import {observer} from 'mobx-react-lite';

import CarsCategory from './components/CarsCategory';

import './Cars.scss';

const Cars = ({store}) => {
	return <div className="crime-menu-cars">
		<div className="crime-menu-cars__title">Доступ к авто</div>
		<div className="crime-menu-cars-content">
			{store.ranks.slice().reverse().map((el, key) => {
				return <CarsCategory key={key} store={store} el={el} id={key}/>
			})}
		</div>
	</div>;
};

export default observer(Cars);