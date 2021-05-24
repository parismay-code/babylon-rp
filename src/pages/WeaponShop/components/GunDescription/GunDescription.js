import * as React from 'react';
import {observer} from 'mobx-react-lite';

import addModifies from 'assets/images/shops/weapons/addMofifies.svg';
import ammoIcon from 'assets/images/shops/weapons/ammo.svg';

import {regExp} from 'utils/regExp';

import './GunDescription.scss';

const GunDescription = ({el, buyAmmo}) => {
	const ammo = React.useRef(null);
	
	const [ammoValue, setAmmoValue] = React.useState(0);
	
	const price = React.useMemo(() =>
		`${String(el.price).replace(regExp.money, '$1 ')}$`, [el.price]),
		ammoCount = React.useMemo(() =>
			`${String(el.ammoPrice * ammoValue).replace(regExp.money, '$1 ')} $`, [el.ammoPrice, ammoValue]);
	
	return <div className="gun-description">
		<div className="gun-description-content">
			<div className="gun-description-content__name">{el.name}</div>
			<div className="gun-description-content__price">{price}</div>
			<img className="gun-description-content__image"
			     src={`./publicImages/shops/weaponShop/${el.descriptionIcon}`} alt="#"/>
			<div className="gun-description-content-params">
				<div className="gun-description-content-params-element">
					<div className="gun-description-content-params-element__title">Урон</div>
					<div className="gun-description-content-params-element__value">{el.params.damage}</div>
				</div>
				<div className="gun-description-content-params-element">
					<div className="gun-description-content-params-element__title">Скорость</div>
					<div className="gun-description-content-params-element__value">{el.params.speed}</div>
				</div>
				<div className="gun-description-content-params-element">
					<div className="gun-description-content-params-element__title">Точность</div>
					<div className="gun-description-content-params-element__value">{el.params.accuracy}</div>
				</div>
				<div className="gun-description-content-params-element">
					<div className="gun-description-content-params-element__title">Дальность</div>
					<div className="gun-description-content-params-element__value">{el.params.range}</div>
				</div>
			</div>
			{el.modifiers && <div className="gun-description-content-modifies">
				<div className="gun-description-content-modifies-add">
					<div className="gun-description-content-modifies-add__title">модифицировать <br/>оружие</div>
					<img className="gun-description-content-modifies-add__icon" src={addModifies} alt="#"/>
				</div>
				{el.modifiers.map((el, key) => {
					return <div key={key} className="gun-description-content-modifies-element">
						{el.isPlaced ? '+' : null}
					</div>;
				})}
			</div>}
		</div>
		<div className="gun-description-bottom">
			<div className="gun-description-bottom__text">
				Низкая отдача, по сравнению с оружием со свободным затвором.
				Высокая точность одиночного огня за счет стрельбы с закрытого затвора.
				Рукоятка имеет удачные наклон и форму, позволяя надёжно удерживать оружие. Размещение флажка
				предохранителя
				и режима огня вблизи неё, позволяет удобно его переключать, не ослабляя хватку рукояти.
			</div>
			{el.maxAmmo && <div className="gun-description-bottom-buy">
				<div className='gun-description-bottom-buy-count'>
					<span className='gun-description-bottom-buy-count__title'>Сумма</span>
					<span className='gun-description-bottom-buy-count__value'>{ammoCount}</span>
				</div>
				<div className="gun-description-bottom-buy-input">
					<input
						ref={ammo}
						className="gun-description-bottom-buy-input__field"
						type="number"
						placeholder="Введите кол-во патрон"
						onChange={(e) => {
							if (e.target.value > el.maxAmmo) e.target.value = el.maxAmmo;
							else if (e.target.value < 0) e.target.value = '0';
							
							setAmmoValue(Number(e.target.value));
						}}
					/>
					<div className="gun-description-bottom-buy-input-price">
						<img className="gun-description-bottom-buy-input-price__icon" src={ammoIcon} alt="#"/>
						<div className="gun-description-bottom-buy-input-price__title">{el.ammoPrice}$/ед.</div>
					</div>
					<div
						className='gun-description-bottom-buy-input__submit'
						onClick={() => buyAmmo(ammoValue, el.ammoPrice)}
					>Купить патроны</div>
				</div>
			</div>}
		</div>
	</div>;
};

export default observer(GunDescription);