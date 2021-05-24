import * as React from 'react';
import {observer} from 'mobx-react-lite';

import removeIcon from 'assets/images/shops/weapons/removeIcon.svg';

import {regExp} from 'utils/regExp';

import './BuyListCard.scss';

const BuyListCard = ({el, id, removeElement, value, setValue}) => {
	const price = React.useMemo(() =>
		`${String(el.price * el.count).replace(regExp.money, '$1 ')}$`, [el.price, el.count]);
	
	return <div className="gun-buy-list-card">
		<img className="gun-buy-list-card__image" src={`./publicImages/shops/weaponShop/${el.icon}`} alt="#"/>
		<div className="gun-buy-list-card-input">
			<div
				className="gun-buy-list-card-input__prev"
				onClick={() => {
					if (el.count !== 1) {
						el.count -= 1;
						setValue(value - el.price);
					}
				}}
			>-</div>
			<div className="gun-buy-list-card-input__field">{el.count}</div>
			<div
				className="gun-buy-list-card-input__next"
				onClick={() => {
					el.count += 1;
					setValue(value + el.price);
				}}
			>+</div>
		</div>
		<div className="gun-buy-list-card-info">
			<div className="gun-buy-list-card-info__name">{el.name}</div>
			<div className="gun-buy-list-card-info__price">{price}</div>
		</div>
		<img
			className="gun-buy-list-card__remove"
			src={removeIcon}
			alt="#"
			onClick={() => {
				removeElement(id);
				setValue(value - el.price * el.count);
			}}
		/>
	</div>;
};

export default observer(BuyListCard);