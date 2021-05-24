import * as React from 'react';
import cn         from 'classnames';

import addIcon from 'assets/images/shops/weapons/addIcon.svg';

import {regExp} from 'utils/regExp';

import './GunCard.scss';

const GunCard = ({el, isActive, id, setWeapon, addToBuyList, value, setValue}) => {
	const price = React.useMemo(() =>
		`${String(el.price).replace(regExp.money, '$1 ')}$`, [el.price]);
	
	return <div
		className={cn('gun-card', isActive ? 'gun-card_active' : null)}
		onClick={() => setWeapon(id)}
	>
		<img className="gun-card__image" src={`./publicImages/shops/weaponShop/${el.icon}`} alt="#"/>
		<img
			className="gun-card__add-icon"
			src={addIcon}
			alt="#"
			onClick={() => {
				addToBuyList(el);
				setValue(value + el.price);
			}}
		/>
		<div className="gun-card__name">{el.name}</div>
		<div className="gun-card__price">{price}</div>
	</div>;
};

export default React.memo(GunCard);