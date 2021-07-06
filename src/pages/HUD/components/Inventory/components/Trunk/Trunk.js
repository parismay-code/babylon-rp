import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import arrow from 'assets/images/inventory/arrow.svg';

import './Trunk.scss';

const Trunk = ({
	store,
	currentItem,
	setItem,
	setTargetCell,
	setDropCell,
	isCellDragged,
	handleMouseDown,
	handlePutOn,
	handlePutOff,
	handleDrop,
	handleTrade,
	setMiddleComponent,
}) => {
	return <div className="inventory-trunk">
		<div className="inventory-trunk-header">
			<div className="inventory-trunk-header-info">
				<img className="inventory-trunk-header-info__arrow" src={arrow} alt="#"/>
				<div className="inventory-trunk-header-info__title">багажник</div>
				<div className="inventory-trunk-header-info__line"/>
			</div>
		</div>
		<div className="inventory-trunk-content">
			{store.trunk.map((el, key) => {
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
						'inventory-trunk-content-cell',
						currentItem.component === 'trunk' && currentItem.id === key ? 'inventory-trunk-content-cell_active' : null,
						el.type === 'food' ? 'inventory-trunk-content-cell_food' : null,
						el.type === 'drink' ? 'inventory-trunk-content-cell_drink' : null,
					)}
					style={store.inventory.fastSlots.filter(el => el.component === 'trunk' && el.id === key).length > 0 ? {border: '2px dashed #B8B8B8'} : null}
					onClick={() => {
						if (el.type) setItem({component: 'trunk', id: key, options: el.options});
					}}
					onMouseDown={(e) => {
						const timeout = setTimeout(() => {
							if (el.type && e.button === 0) {
								handleMouseDown({component: 'trunk', id: key});
								setTargetCell({component: 'trunk', id: key});
								setDropCell({component: 'trunk', id: key});
							}
						}, 100);
						
						document.body.onmouseup = () => {
							clearTimeout(timeout);
							document.body.onmouseup = null;
						};
					}}
					onMouseEnter={() => isCellDragged && setDropCell({component: 'trunk', id: key})}
				>
					{el.type && <>
						<div
							className="inventory-trunk-content-cell__quality"
							style={{background: `linear-gradient(to top, ${quality()}, #C373F360 60%, #C373F300)`}}
						/>
						<img className="inventory-trunk-content-cell__image"
						     src={`./publicImages/inventory/${el.image}`} alt="#"/>
						{el.count > 1 && <div className="inventory-trunk-content-cell__count">{el.count}</div>}
					</>}
				</div>;
			})}
			<div className="inventory-trunk-content-options">
				{currentItem.options?.indexOf('use') >= 0 &&
				<div
					className="inventory-trunk-content-options__element"
					onClick={() => {
						const item = currentItem.component === 'fastSlots' ? store.inventory[store.inventory.fastSlots[currentItem.id].component][store.inventory.fastSlots[currentItem.id].id] :
							currentItem.component === 'trunk' ? store.trunk[currentItem.id] :
								currentItem.component === 'clothes' ? store.clothes[currentItem.id] : store.inventory[currentItem.component][currentItem.id];
						
						EventManager.emitServer('inventory', 'useItem', item);
					}}
				>Использовать</div>}
				{currentItem.options?.indexOf('putOn') >= 0 &&
				<div
					className="inventory-trunk-content-options__element"
					onClick={() => currentItem.component === 'clothes' ? handlePutOff() : handlePutOn()}
				>
					{currentItem.component === 'clothes' ? 'Снять' : 'Надеть'}
				</div>}
				{currentItem.options?.indexOf('drop') >= 0 &&
				<div
					className="inventory-trunk-content-options__element"
					onClick={() => handleDrop()}
				>Выбросить</div>}
				{currentItem.options?.indexOf('trade') >= 0 &&
				<div
					className="inventory-trunk-content-options__element"
					onClick={() => handleTrade()}
				>Передать</div>}
				{currentItem.options?.indexOf('split') >= 0 &&
				<div
					className="inventory-trunk-content-options__element"
					onClick={() => {
						const item = currentItem.component === 'fastSlots' ? store.inventory[store.inventory.fastSlots[currentItem.id].component][store.inventory.fastSlots[currentItem.id].id] :
							currentItem.component === 'trunk' ? store.trunk[currentItem.id] :
								currentItem.component === 'clothes' ? store.clothes[currentItem.id] : store.inventory[currentItem.component][currentItem.id];
						
						if (item.count > 1) setMiddleComponent('split');
					}}
				>Разделить</div>}
			</div>
		</div>
	</div>;
};

export default observer(Trunk);