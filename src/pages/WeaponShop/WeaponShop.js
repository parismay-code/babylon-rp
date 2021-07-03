import * as React   from 'react';
import cn           from 'classnames';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import Money          from './components/Money';
import GunCard        from './components/GunCard';
import GunDescription from './components/GunDescription';
import BuyList        from './components/BuyList';

import './WeaponShop.scss';

const WeaponShop = ({player, store}) => {
	const [currentCategory, setCategory] = React.useState(0),
		[currentWeapon, setWeapon] = React.useState(0),
		[value, setValue] = React.useState(0);
	
	const notify = React.useRef(null),
		screen = React.useRef(null);
	
	const sendNotify = React.useCallback((text, timeout) => {
		notify.current.innerText = text;
		notify.current.style.opacity = 1;
		
		setTimeout(() => notify.current.style.opacity = 0, timeout ? timeout : 3000);
	}, [notify]);
	const buyWeapons = React.useCallback(() => {
		if (value > 0) EventManager.emitServer('gunShop', 'buy', store.weaponBuyList, value);
		else sendNotify('Для покупки необходимо добавить оружие в корзину');
	}, [sendNotify, store.weaponBuyList, value]);
	
	const buyAmmo = React.useCallback((ammoValue, ammoPrice) =>
		EventManager.emitServer('gunShop', 'buyAmmo', ammoValue, store.weaponShopData.categories[currentCategory].name, ammoValue * ammoPrice), [currentCategory, store.weaponShopData.categories]);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('weapon-shop_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	React.useEffect(() => {
		setWeapon(0);
	}, [currentCategory]);
	React.useEffect(() => {
		EventManager.addHandler('gunShop', 'sendNotify', (text, timeout) => sendNotify(text, timeout));
	}, [sendNotify]);
	React.useEffect(() => {
		EventManager.addHandler('gunShop', 'fetchData', obj => store.fetchWeaponShopData(obj));
		EventManager.addHandler('gunShop', 'clearBuyList', () => store.clearWeaponBuyList());
		
		EventManager.stopAddingHandlers('gunShop');
		
		return () => EventManager.removeTargetHandlers('gunShop');
	}, [store]);
	
	return <div ref={screen} className="weapon-shop">
		<div className="weapon-shop-category">
			{store.weaponShopData.categories.map((el, key) => {
				return <div
					key={key}
					className={cn('weapon-shop-category-element', currentCategory === key ? 'weapon-shop-category-element_active' : null)}
					onClick={() => setCategory(key)}
				>
					<img
						className="weapon-shop-category-element__icon"
						src={`./publicImages/shops/weaponShop/${el.icon}`}
						alt="#"
					/>
				</div>;
			})}
		</div>
		<div className="weapon-shop-list">
			<Money player={player}/>
			<div className="weapon-shop-list__title">выберите оружие</div>
			<div className="weapon-shop-list-content">
				{store.weaponShopData.categories[currentCategory]?.guns.map((el, key) => {
					return <GunCard
						key={key}
						el={el}
						isActive={currentWeapon === key}
						id={key}
						addToBuyList={store.addWeaponBuyListElement}
						setWeapon={setWeapon}
						setValue={setValue}
						value={value}
					/>;
				})}
			</div>
		</div>
		{store.weaponShopData.categories[currentCategory]?.guns[currentWeapon] && <GunDescription
			el={store.weaponShopData.categories[currentCategory].guns[currentWeapon]}
			buyAmmo={buyAmmo}
		/>}
		<BuyList
			store={store}
			notify={notify}
			value={value}
			setValue={setValue}
			buyWeapons={buyWeapons}
		/>
		<div className="weapon-shop-exit">
			<span className="weapon-shop-exit__text">выход -</span>
			<div className="weapon-shop-exit__button">Esc</div>
		</div>
	</div>;
};

export default observer(WeaponShop);