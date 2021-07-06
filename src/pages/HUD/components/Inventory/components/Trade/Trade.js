import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import arrow from 'assets/images/inventory/arrow.svg';

import './Trade.scss';
import cn    from 'classnames';

const Trade = ({
	store,
	currentItem,
	setItem,
	setTargetCell,
	setDropCell,
	isCellDragged,
	handleMouseDown,
}) => {
	return <div className="inventory-trade">
		<div className="inventory-trade__title">Обмен с</div>
		<div className="inventory-trade-description">
			<div className="inventory-trade-description__title">ID: {store.tradeTarget.id}</div>
			<div className="inventory-trade-description__subtitle">{store.tradeTarget.nickname}</div>
		</div>
		<div className="inventory-trade-get">
			<div className="inventory-trade-get-header">
				<div className="inventory-trade-get-header-money">
					<div className="inventory-trade-get-header-money__value">{store.tradeTarget.money}</div>
					<div className="inventory-trade-get-header-money__dollar">$</div>
				</div>
				<div className="inventory-trade-get-header-info">
					<img className="inventory-trade-get-header-info__arrow" src={arrow} alt="#"/>
					<div className="inventory-trade-get-header-info__title">получаю</div>
					<div className="inventory-trade-get-header-info__line"/>
				</div>
			</div>
			<div className="inventory-trade-get-content">
				{store.tradeTarget.items.map((el, key) => {
					const quality = () => {
						switch (el.quality) {
							case 0:
								return '#B7C2F8';
							case 1:
								return '#8A9EFF';
							case 2:
								return '#C970FF';
							case 3:
								return '#FF8888';
							case 4:
								return '#FFD139';
							default:
								return null;
						}
					};
					
					return <div
						key={key}
						className={cn(
							'inventory-trade-get-content-cell',
							currentItem.component === 'tradeTarget' && currentItem.id === key ? 'inventory-trade-get-content-cell_active' : null,
							el.type === 'food' ? 'inventory-trade-get-content-cell_food' : null,
							el.type === 'drink' ? 'inventory-trade-get-content-cell_drink' : null,
						)}
						style={store.inventory.fastSlots.filter(el => el.component === 'tradeTarget' && el.id === key).length > 0 ? {border: '2px dashed #B8B8B8'} : null}
						onClick={() => {
							if (el.type) setItem({component: 'tradeTarget', id: key, options: null});
						}}
					>
						{el.type && <>
							<div
								className="inventory-trade-get-content-cell__quality"
								style={{background: `linear-gradient(to top, ${quality()}, #C373F360 60%, #C373F300)`}}
							/>
							<img className="inventory-trade-get-content-cell__image"
							     src={`./publicImages/inventory/${el.image}`} alt="#"/>
							{el.count > 1 && <div className="inventory-trade-get-content-cell__count">{el.count}</div>}
						</>}
					</div>;
				})}
				{store.tradeTarget.isReady && <div className="inventory-trade-get-content-ready">
					<div className="inventory-trade-get-content-ready-lines">
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
						<div className="inventory-trade-get-content-ready-lines__line"/>
					</div>
				</div>}
			</div>
		</div>
		<div className="inventory-trade-give">
			<div className="inventory-trade-give-header">
				<div className="inventory-trade-give-header-money">
					<input
						className="inventory-trade-give-header-money__input"
						type="number"
						name="n_inventoryTradeMoneyInput"
						placeholder="0"
						disabled={store.trade.isReady}
						onChange={e => {
							store.trade.money = Number(e.target.value);
							EventManager.emitServer('inventory', 'changeTrade', store.trade);
						}}
					/>
					<div className="inventory-trade-give-header-money__dollar">$</div>
				</div>
				<div className="inventory-trade-give-header-info">
					<img className="inventory-trade-give-header-info__arrow" src={arrow} alt="#"/>
					<div className="inventory-trade-give-header-info__title">отдаю</div>
					<div className="inventory-trade-give-header-info__line"/>
				</div>
			</div>
			<div className="inventory-trade-give-content">
				{store.trade.items.map((el, key) => {
					const quality = () => {
						switch (el.quality) {
							case 0:
								return '#B7C2F8';
							case 1:
								return '#8A9EFF';
							case 2:
								return '#C970FF';
							case 3:
								return '#FF8888';
							case 4:
								return '#FFD139';
							default:
								return null;
						}
					};
					
					return <div
						key={key}
						className={cn(
							'inventory-trade-give-content-cell',
							currentItem.component === 'tradeTo' && currentItem.id === key ? 'inventory-trade-give-content-cell_active' : null,
							el.type === 'food' ? 'inventory-trade-give-content-cell_food' : null,
							el.type === 'drink' ? 'inventory-trade-give-content-cell_drink' : null,
						)}
						style={store.inventory.fastSlots.filter(el => el.component === 'tradeTo' && el.id === key).length > 0 ? {border: '2px dashed #B8B8B8'} : null}
						onClick={() => {
							if (el.type) setItem({component: 'tradeTo', id: key, options: null});
						}}
						onMouseDown={(e) => {
							const timeout = setTimeout(() => {
								if (el.type && e.button === 0) {
									handleMouseDown({component: 'tradeTo', id: key});
									setTargetCell({component: 'tradeTo', id: key});
									setDropCell({component: 'tradeTo', id: key});
								}
							}, 100);
							
							document.body.onmouseup = () => {
								clearTimeout(timeout);
								document.body.onmouseup = null;
							};
						}}
						onMouseEnter={() => isCellDragged && setDropCell({component: 'tradeTo', id: key})}
					>
						{el.type && <>
							<div
								className="inventory-trade-give-content-cell__quality"
								style={{background: `linear-gradient(to top, ${quality()}, #C373F360 60%, #C373F300)`}}
							/>
							<img className="inventory-trade-give-content-cell__image"
							     src={`./publicImages/inventory/${el.image}`} alt="#"/>
							{el.count > 1 && <div className="inventory-trade-give-content-cell__count">{el.count}</div>}
						</>}
					</div>;
				})}
				{store.trade.isReady && <div className="inventory-trade-give-content-ready">
					<div className="inventory-trade-give-content-ready-lines">
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
						<div className="inventory-trade-give-content-ready-lines__line"/>
					</div>
				</div>}
			</div>
			<div
				className="inventory-trade-give__ready"
				onClick={() => {
					store.trade.isReady = !store.trade.isReady;
					EventManager.emitServer('inventory', 'changeTrade', store.trade);
				}}
			>
				{store.trade.isReady ? 'отмена' : 'готов'}
			</div>
		</div>
	</div>;
};

export default observer(Trade);