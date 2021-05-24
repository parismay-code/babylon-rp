import * as React from 'react';
import {observer} from 'mobx-react-lite';

import BuyListCard from './components/BuyListCard';

import {regExp} from 'utils/regExp';

import './BuyList.scss';

const BuyList = ({store, notify, value, setValue, buyWeapons}) => {
	const price = React.useMemo(() =>
		`${String(value).replace(regExp.money, '$1 ')}$`, [value]);
	
	return <div className="gun-buy-list">
		<div className="gun-buy-list-content">
			{store.weaponBuyList.map((el, key) => {
				return <BuyListCard
					el={el}
					key={key}
					id={key}
					removeElement={store.removeWeaponBuyListElement}
					setValue={setValue}
					value={value}
				/>;
			})}
		</div>
		<div ref={notify} className="gun-buy-list-notify"/>
		<div className="gun-buy-list-price">
			<span className="gun-buy-list-price__title">Сумма</span>
			<span className="gun-buy-list-price__value">{price}</span>
		</div>
		<div
			className='gun-buy-list__submit'
			onClick={() => buyWeapons()}
		>Купить оружие</div>
	</div>;
};

export default observer(BuyList);