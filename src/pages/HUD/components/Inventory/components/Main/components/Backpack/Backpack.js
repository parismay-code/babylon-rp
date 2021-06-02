import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import arrow from 'assets/images/inventory/arrow.svg';

import './Backpack.scss';

const Backpack = ({
	store,
	setItem,
	currentItem,
	isCellDragged,
	setDropCell,
	setTargetCell,
	handleMouseDown,
	handlePutOn,
	handlePutOff,
	handleDrop
}) => {
	const backpackQuality = React.useMemo(() => {
		switch (store.clothes[4].quality) {
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
				return '#FFFFFF';
		}
	}, [store.clothes[4].quality]);
	
	return <div className="inventory-backpack">
		<div className="inventory-backpack-header">
			<div className="inventory-backpack-header-info">
				<div className="inventory-backpack-header-info__line"
				     style={{backgroundColor: backpackQuality, filter: `drop-shadow(0 0 10px ${backpackQuality})`}}/>
				<div className="inventory-backpack-header-info__title">рюкзак</div>
				<img className="inventory-backpack-header-info__arrow" src={arrow} alt="#"/>
			</div>
		</div>
		<div className="inventory-backpack-content">
			{store.inventory.backpack.map((el, key) => {
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
				
				const backpackLvl = store.clothes[4].quality;
				
				return backpackLvl === 0 && key <= 11 ? <div
					key={key}
					className={cn('inventory-backpack-content-cell', currentItem.component === 'backpack' && currentItem.id === key ? 'inventory-backpack-content-cell_active' : null)}
					style={store.inventory.fastSlots.filter(el => el.component === 'backpack' && el.id === key).length > 0 ? {border: '2px dashed #B8B8B8'} : null}
					onClick={() => {
						if (el.type && backpackLvl >= 0) setItem({component: 'backpack', id: key, options: el.options});
					}}
					onMouseDown={(e) => {
						const timeout = setTimeout(() => {
							if (el.type && e.button === 0) {
								handleMouseDown();
								setTargetCell({component: 'backpack', id: key});
								setDropCell({component: 'backpack', id: key});
							}
						}, 100);
						
						document.body.onmouseup = () => {
							clearTimeout(timeout);
							document.body.onmouseup = null;
						};
					}}
					onMouseEnter={() => isCellDragged && setDropCell({component: 'backpack', id: key})}
				>
					{el.type && <>
						<div
							className="inventory-backpack-content-cell__quality"
							style={{background: `linear-gradient(to top, ${quality()}, #C373F360 60%, #C373F300)`}}
						/>
						<img className="inventory-backpack-content-cell__image"
						     src={`./publicImages/inventory/${el.image}`} alt="#"/>
						{el.count > 1 && <div className="inventory-backpack-content-cell__count">{el.count}</div>}
					</>}
				</div> : backpackLvl === 1 && key <= 23 ? <div
					key={key}
					className={cn('inventory-backpack-content-cell', currentItem.component === 'backpack' && currentItem.id === key ? 'inventory-backpack-content-cell_active' : null)}
					style={store.inventory.fastSlots.filter(el => el.component === 'backpack' && el.id === key).length > 0 ? {border: '2px dashed #B8B8B8'} : null}
					onClick={() => {
						if (el.type && backpackLvl >= 0) setItem({component: 'backpack', id: key, options: el.options});
					}}
					onMouseDown={(e) => {
						const timeout = setTimeout(() => {
							if (el.type && e.button === 0) {
								handleMouseDown();
								setTargetCell({component: 'backpack', id: key});
								setDropCell({component: 'backpack', id: key});
							}
						}, 100);
						
						document.body.onmouseup = () => {
							clearTimeout(timeout);
							document.body.onmouseup = null;
						};
					}}
					onMouseEnter={() => isCellDragged && setDropCell({component: 'backpack', id: key})}
				>
					{el.type && <>
						<div
							className="inventory-backpack-content-cell__quality"
							style={{background: `linear-gradient(to top, ${quality()}, #C373F360 60%, #C373F300)`}}
						/>
						<img className="inventory-backpack-content-cell__image"
						     src={`./publicImages/inventory/${el.image}`} alt="#"/>
						{el.count > 1 && <div className="inventory-backpack-content-cell__count">{el.count}</div>}
					</>}
				</div> : backpackLvl >= 2 && key <= 35 ? <div
						key={key}
						className={cn('inventory-backpack-content-cell', currentItem.component === 'backpack' && currentItem.id === key ? 'inventory-backpack-content-cell_active' : null)}
						style={store.inventory.fastSlots.filter(el => el.component === 'backpack' && el.id === key).length > 0 ? {border: '2px dashed #B8B8B8'} : null}
						onClick={() => {
							if (el.type && backpackLvl >= 0) setItem({component: 'backpack', id: key, options: el.options});
						}}
						onMouseDown={(e) => {
							const timeout = setTimeout(() => {
								if (el.type && e.button === 0) {
									handleMouseDown();
									setTargetCell({component: 'backpack', id: key});
									setDropCell({component: 'backpack', id: key});
								}
							}, 100);
							
							document.body.onmouseup = () => {
								clearTimeout(timeout);
								document.body.onmouseup = null;
							};
						}}
						onMouseEnter={() => isCellDragged && setDropCell({component: 'backpack', id: key})}
					>
						{el.type && <>
							<div
								className="inventory-backpack-content-cell__quality"
								style={{background: `linear-gradient(to top, ${quality()}, #C373F360 60%, #C373F300)`}}
							/>
							<img className="inventory-backpack-content-cell__image"
							     src={`./publicImages/inventory/${el.image}`} alt="#"/>
							{el.count > 1 && <div className="inventory-backpack-content-cell__count">{el.count}</div>}
						</>}
					</div> :
					<div key={key} className="inventory-backpack-content-cell-locked">
						<div className="inventory-backpack-content-cell-locked-lines">
							<div className="inventory-backpack-content-cell-locked-lines__line"/>
							<div className="inventory-backpack-content-cell-locked-lines__line"/>
							<div className="inventory-backpack-content-cell-locked-lines__line"/>
							<div className="inventory-backpack-content-cell-locked-lines__line"/>
							<div className="inventory-backpack-content-cell-locked-lines__line"/>
							<div className="inventory-backpack-content-cell-locked-lines__line"/>
							<div className="inventory-backpack-content-cell-locked-lines__line"/>
						</div>
					</div>;
			})}
			<div className="inventory-backpack-content-options">
				{currentItem.options?.indexOf('use') >= 0 &&
				<div className="inventory-backpack-content-options__element">Использовать</div>}
				{currentItem.options?.indexOf('putOn') >= 0 &&
				<div
					className="inventory-backpack-content-options__element"
					onClick={() => currentItem.component === 'clothes' ? handlePutOff() : handlePutOn()}
				>
					{currentItem.component === 'clothes' ? 'Снять' : 'Надеть'}
				</div>}
				{currentItem.options?.indexOf('drop') >= 0 &&
				<div className="inventory-backpack-content-options__element" onClick={() => handleDrop()}>Выбросить</div>}
				{currentItem.options?.indexOf('trade') >= 0 &&
				<div className="inventory-backpack-content-options__element">Передать</div>}
				{currentItem.options?.indexOf('split') >= 0 &&
				<div className="inventory-backpack-content-options__element">Разделить</div>}
			</div>
		</div>
	</div>;
};

export default observer(Backpack);