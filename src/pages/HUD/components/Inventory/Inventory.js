import * as React from 'react';

import Clothes      from './components/Clothes';
import Main         from './components/Main';
import CellExemplar from './components/CellExemplar';
import DropZone     from './components/DropZone';
import RemoveAccept from './components/RemoveAccept';
import TradeList    from './components/TradeList';

import './Inventory.scss';

const Inventory = ({store}) => {
	const [render, setRender] = React.useState({image: null, quality: null, name: null, description: null}),
		[currentItem, setItem] = React.useState({component: null, id: null, options: null}),
		[targetCell, setTargetCell] = React.useState({component: null, id: null}),
		[dropCell, setDropCell] = React.useState({component: null, id: null}),
		[isCellDragged, setCellDragged] = React.useState(false),
		[notifyText, setNotifyText] = React.useState({title: null, subtitle: null}),
		[middleComponent, setMiddleComponent] = React.useState('dropZone');
	
	const cellExemplar = React.useRef(null),
		notify = React.useRef(null);
	
	const showNotify = React.useCallback((title, subtitle, timeout) => {
			setNotifyText({title, subtitle});
			notify.current.style.opacity = 1;
			
			setTimeout(() => notify.current.style.opacity = 0, timeout ? timeout : 3000);
		}, []),
		handlePutOn = React.useCallback((item) => {
			const target = item ? item : store.inventory[currentItem.component][currentItem.id];
			
			const id = store.clothes.findIndex(el => el.type === target.type);
			const drop = store.clothes[id];
			
			const freeIndex = store.inventory[currentItem.component].findIndex(el => !el.type);
			
			if (target.type === drop.type && target.hash === drop.hash && target.quality === drop.quality) return showNotify('Ошибка', 'Этот предмет уже надет на Вас');
			
			if (target.count === 1) {
				if (drop.isPlaced) store.changeInventoryData(currentItem,
					{
						type: drop.type,
						hash: drop.hash,
						quality: drop.quality,
						image: drop.image,
						render: drop.render,
						name: drop.name,
						description: drop.description,
						count: drop.count,
						weight: drop.weight,
						maxStack: drop.maxStack,
						options: drop.options,
					});
				else store.changeInventoryData(currentItem, {type: null});
				
				store.changeInventoryData({component: 'clothes', id}, {...target, isPlaced: true});
			} else {
				if (freeIndex < 0) return showNotify('Ошибка', 'Недостаточно места в инвентаре');
				
				if (drop.isPlaced) {
					store.changeInventoryData({component: currentItem.component, id: freeIndex},
						{
							type: drop.type,
							hash: drop.hash,
							quality: drop.quality,
							image: drop.image,
							render: drop.render,
							name: drop.name,
							description: drop.description,
							count: drop.count,
							weight: drop.weight,
							maxStack: drop.maxStack,
							options: drop.options,
						});
				}
				
				store.inventory[currentItem.component][currentItem.id].count -= 1;
				store.changeInventoryData({component: 'clothes', id},
					{
						type: target.type,
						hash: target.hash,
						quality: target.quality,
						image: target.image,
						render: target.render,
						name: target.name,
						description: target.description,
						count: 1,
						weight: target.weight,
						maxStack: target.maxStack,
						options: target.options,
						isPlaced: true,
					});
			}
			
			setItem({
				component: 'clothes',
				id,
				options: store.clothes[id].options,
			});
			
			window.alt.emit('client::inventory:update', store.clothes, store.inventory);
		}, [currentItem, showNotify, store]),
		handlePutOff = React.useCallback(() => {
			const item = store.clothes[currentItem.id];
			
			const pocketsFreeIndex = store.inventory.pockets.findIndex(el => !el.type);
			const backpackFreeIndex = store.inventory.backpack.findIndex(el => !el.type);
			
			let component;
			let id;
			
			if (item.weight + Number(store.inventoryWeight) <= store.inventoryMaxWeight) {
				if (pocketsFreeIndex >= 0) {
					store.changeInventoryData({component: 'pockets', id: pocketsFreeIndex},
						{
							type: item.type,
							hash: item.hash,
							quality: item.quality,
							image: item.image,
							render: item.render,
							name: item.name,
							description: item.description,
							count: item.count,
							weight: item.weight,
							maxStack: item.maxStack,
							options: item.options,
						});
					
					id = pocketsFreeIndex;
					component = 'pockets';
				} else if (backpackFreeIndex >= 0 && store.clothes[4].isPlaced) {
					if (item.type === 'backpack') return showNotify('Ошибка', 'Недостаточно места в инвентаре');
					
					store.changeInventoryData({component: 'backpack', id: backpackFreeIndex},
						{
							type: item.type,
							hash: item.hash,
							quality: item.quality,
							image: item.image,
							render: item.render,
							name: item.name,
							description: item.description,
							count: item.count,
							weight: item.weight,
							maxStack: item.maxStack,
							options: item.options,
						});
					
					id = backpackFreeIndex;
					component = 'backpack';
				} else return showNotify('Ошибка', 'Недостаточно места в инвентаре');
			} else return showNotify('Ошибка', 'Недостаточно места в инвентаре');
			
			store.clothes[currentItem.id].isPlaced = false;
			store.clothes[currentItem.id].quality = null;
			setItem({
				component,
				id,
				options: item.options,
			});
			window.alt.emit('client::inventory:update', store.clothes, store.inventory);
		}, [currentItem.id, showNotify, store]),
		handleDrop = React.useCallback((isAccepted) => {
			const item = currentItem.component === 'clothes' ? store.clothes[currentItem.id] : store.inventory[currentItem.component][currentItem.id];
			
			if (item.quality >= 3 && !isAccepted) {
				setMiddleComponent('removeAccept');
			} else {
				setMiddleComponent('dropZone');
				
				window.alt.emit('client::inventory:dropItem', item.hash, item.quality, item.count);
			}
		}, [currentItem.component, currentItem.id, store.clothes, store.inventory]),
		handleTrade = React.useCallback((id) => {
			const item = currentItem.component === 'clothes' ? store.clothes[currentItem.id] : store.inventory[currentItem.component][currentItem.id];
			
			if (id) {
				setMiddleComponent('dropZone');
				
				window.alt.emit('client::inventory:tradeItem', id, item.hash, item.quality, item.count);
			} else {
				setMiddleComponent('tradeList');
			}
		}, [currentItem.component, currentItem.id, store.clothes, store.inventory]),
		handleMouseDown = React.useCallback((_targetCell) => {
			setItem({
				..._targetCell,
				options: _targetCell.component === 'clothes' ? store.clothes[_targetCell.id].options : store.inventory[_targetCell.component][_targetCell.id].options,
			});
			setCellDragged(true);
		}, [store.clothes, store.inventory]),
		handleMouseUp = React.useCallback(() => {
			const error = (title, subtitle, timeout) => {
				setItem({
					...targetCell,
					options: targetCell.component === 'clothes' ? store.clothes[targetCell.id].options : store.inventory[targetCell.component][targetCell.id].options,
				});
				setTargetCell({component: null, id: null});
				setDropCell({component: null, id: null});
				setCellDragged(false);
				
				return showNotify(title, subtitle, timeout);
			};
			
			const success = () => {
				setItem({
					...dropCell,
					options: dropCell.component === 'clothes' ? store.clothes[dropCell.id].options : store.inventory[dropCell.component][dropCell.id].options,
				});
				setTargetCell({component: null, id: null});
				setDropCell({component: null, id: null});
				setCellDragged(false);
				
				return window.alt.emit('client::inventory:update', store.clothes, store.inventory);
			};
			
			const target = targetCell.component === 'clothes' ? store.clothes[targetCell.id] : store.inventory[targetCell.component][targetCell.id];
			
			if (dropCell.component === 'trade') {
				if (targetCell.component === 'fastSlots') return error('Ошибка', 'Нельзя передать предмет из быстрого доступа');
				
				setTargetCell({component: null, id: null});
				setDropCell({component: null, id: null});
				setCellDragged(false);
				return handleTrade();
			}
			
			if (dropCell.component === 'remove') {
				if (targetCell.component === 'fastSlots') return error('Ошибка', 'Нельзя выбросить предмет из быстрого доступа');
				
				setTargetCell({component: null, id: null});
				setDropCell({component: null, id: null});
				setCellDragged(false);
				return handleDrop();
			}
			
			if (dropCell.component === 'putOn') {
				const clothes = ['hat', 'glasses', 'tShirt', 'top', 'backpack', 'ring', 'armour', 'watch', 'gloves', 'pants', 'shoes'];
				
				if (target.isPlaced) return error('Ошибка', 'Этот предмет уже надет на Вас');
				
				if (clothes.includes(target.type)) {
					setTargetCell({component: null, id: null});
					setDropCell({component: null, id: null});
					setCellDragged(false);
					return handlePutOn(target);
				} else return error('Ошибка', 'Предмет нельзя одеть на себя');
			}
			
			const drop = dropCell.component === 'clothes' ? store.clothes[dropCell.id] : store.inventory[dropCell.component][dropCell.id];
			
			if (targetCell.component === 'fastSlots') {
				if (dropCell.component === 'fastSlots') {
					const item = store.inventory.fastSlots[targetCell.id];
					
					store.changeInventoryData({
						component: 'fastSlots',
						id: targetCell.id,
					}, store.inventory.fastSlots[dropCell.id]);
					store.changeInventoryData({component: 'fastSlots', id: dropCell.id}, item);
					return success();
				} else {
					setItem({component: null, id: null, options: null});
					setTargetCell({component: null, id: null});
					setDropCell({component: null, id: null});
					setCellDragged(false);
					return store.changeInventoryData({component: 'fastSlots', id: targetCell.id}, {
						component: null,
						id: null,
					});
				}
			}
			
			if (dropCell.component === 'fastSlots') {
				if (store.inventory.fastSlots.findIndex(el => el.component === targetCell.component && el.id === targetCell.id) >= 0) return error('Ошибка', 'Предмет уже находится в быстром доступе');
				else {
					if (target.options.indexOf('fast') >= 0) {
						store.changeInventoryData({component: 'fastSlots', id: dropCell.id}, targetCell);
						return success();
					} else return error('Ошибка', 'Предмет не может быть помещен в быстрый доступ');
				}
			}
			
			if (dropCell.component === 'clothes') {
				if (targetCell.component !== 'clothes' && target.type === drop.type) {
					if (target.hash === drop.hash && target.quality === drop.quality) return error('Ошибка', 'Этот предмет уже надет на Вас');
					if (target.count === 1) {
						if (drop.isPlaced) store.changeInventoryData(targetCell,
							{
								type: drop.type,
								hash: drop.hash,
								quality: drop.quality,
								image: drop.image,
								render: drop.render,
								name: drop.name,
								description: drop.description,
								count: drop.count,
								weight: drop.weight,
								maxStack: drop.maxStack,
								options: drop.options,
							});
						else store.changeInventoryData(targetCell, {type: null});
						
						store.changeInventoryData(dropCell, {...target, isPlaced: true});
					} else {
						if (drop.isPlaced) {
							const freeIndex = store.inventory[targetCell.component].findIndex(el => !el.type);
							
							if (freeIndex < 0) return error('Ошибка', 'Недостаточно места в инвентаре');
							
							store.changeInventoryData({component: targetCell.component, id: freeIndex},
								{
									type: drop.type,
									hash: drop.hash,
									quality: drop.quality,
									image: drop.image,
									render: drop.render,
									name: drop.name,
									description: drop.description,
									count: drop.count,
									weight: drop.weight,
									maxStack: drop.maxStack,
									options: drop.options,
								});
						}
						
						store.inventory[targetCell.component][targetCell.id].count -= 1;
						store.changeInventoryData(dropCell,
							{
								type: target.type,
								hash: target.hash,
								quality: target.quality,
								image: target.image,
								render: target.render,
								name: target.name,
								description: target.description,
								count: 1,
								weight: target.weight,
								maxStack: target.maxStack,
								options: target.options,
								isPlaced: true,
							});
					}
					
					return success();
				} else return error('Ошибка', 'Предмет нельзя поместить в это место');
			}
			
			if (targetCell.component === 'clothes') {
				if (dropCell.component !== 'clothes' && dropCell.component !== 'fastSlots') {
					if (target.type === 'backpack' && dropCell.component === 'backpack') return error('Ошибка', 'Рюкзак нельзя положить внутрь себя');
					
					if (target.weight * target.count + Number(store.inventoryWeight) > store.inventoryMaxWeight) return error('Ошибка', 'В инвентаре недостаточно места');
					
					if (drop.type !== null) {
						if (drop.type !== target.type || drop.hash !== target.hash || drop.quality !== target.quality) return error('Ошибка', 'Предмет нельзя поместить в это место');
						else if (drop.count + target.count <= drop.maxStack) {
							store.changeInventoryData(dropCell,
								{
									type: target.type,
									hash: target.hash,
									quality: target.quality,
									image: target.image,
									render: target.render,
									name: target.name,
									description: target.description,
									count: target.count + drop.count,
									weight: target.weight,
									maxStack: target.maxStack,
									options: target.options,
								});
						} else {
							const freeIndex = store.inventory[dropCell.component].findIndex(el => !el.type);
							
							if (freeIndex < 0) return error('Ошибка', 'Недостаточно места в инвентаре');
							
							store.changeInventoryData({component: dropCell.component, id: freeIndex},
								{
									type: target.type,
									hash: target.hash,
									quality: target.quality,
									image: target.image,
									render: target.render,
									name: target.name,
									description: target.description,
									count: target.count,
									weight: target.weight,
									maxStack: target.maxStack,
									options: target.options,
								});
						}
					} else {
						store.changeInventoryData(dropCell,
							{
								type: target.type,
								hash: target.hash,
								quality: target.quality,
								image: target.image,
								render: target.render,
								name: target.name,
								description: target.description,
								count: target.count,
								weight: target.weight,
								maxStack: target.maxStack,
								options: target.options,
							});
					}
					
					store.changeInventoryData(targetCell, {
						type: target.type,
						isPlaced: false,
						quality: -1,
						image: target.image,
					});
					
					return success();
				}
			}
			
			const isTargetInFast = store.inventory.fastSlots.findIndex(el => el.component === targetCell.component && el.id === targetCell.id);
			const isDropInFast = store.inventory.fastSlots.findIndex(el => el.component === dropCell.component && el.id === dropCell.id);
			const isTargetEqualsDrop = target.hash === drop.hash && target.quality === drop.quality && (dropCell.component !== targetCell.component || dropCell.id !== targetCell.id);
			
			if (isTargetEqualsDrop) {
				const remains = drop.maxStack - drop.count;
				
				if (remains - target.count < 0) {
					store.inventory[targetCell.component][targetCell.id].count -= remains;
					store.inventory[dropCell.component][dropCell.id].count += remains;
				} else {
					store.inventory[dropCell.component][dropCell.id].count += target.count;
					store.changeInventoryData(targetCell, {type: null});
				}
			} else {
				store.changeInventoryData(targetCell, drop);
				store.changeInventoryData(dropCell, target);
			}
			
			if (isTargetInFast >= 0) store.inventory.fastSlots[isTargetInFast] = dropCell;
			if (isDropInFast >= 0) store.inventory.fastSlots[isDropInFast] = targetCell;
			
			return success();
		}, [dropCell, handleDrop, handlePutOn, handleTrade, showNotify, store, targetCell]);
	
	React.useEffect(() => {
		if (currentItem.component) {
			const item = currentItem.component === 'fastSlots' ? store.inventory[store.inventory.fastSlots[currentItem.id].component][store.inventory.fastSlots[currentItem.id].id] :
				currentItem.component === 'clothes' ? store.clothes[currentItem.id] : store.inventory[currentItem.component][currentItem.id];
			
			setRender({
				image: item.image,
				quality: item.quality,
				name: item.name,
				description: item.description,
			});
		} else setRender({
			image: null,
			quality: null,
			name: null,
			description: null,
		});
		
		setMiddleComponent('dropZone');
	}, [currentItem, store.clothes, store.inventory]);
	
	React.useEffect(() => {
		if (!store.clothes[4].isPlaced) {
			const arr = store.inventory.fastSlots.filter(el => el.component === 'backpack');
			
			for (let i = 0; i < arr.length; i++) {
				const id = store.inventory.fastSlots.findIndex(el => el.component === 'backpack');
				
				store.inventory.fastSlots[id] = {component: null, id: null};
			}
		}
	}, [store.clothes, store.inventory.fastSlots, store.clothes[4].isPlaced]);
	
	React.useEffect(() => {
		window.alt.on('cef::inventory:showNotify', (title, subtitle, timeout) => showNotify(title, subtitle, timeout));
	}, [showNotify]);
	
	return <div
		className="inventory"
		onMouseUp={(e) => e.button === 0 && dropCell.component && handleMouseUp()}
		onMouseMove={(e) => {
			cellExemplar.current.style.left = e.pageX + 'px';
			cellExemplar.current.style.top = e.pageY + 'px';
		}}
	>
		<div className="inventory-content">
			<Clothes
				store={store}
				currentItem={currentItem}
				setItem={setItem}
				setTargetCell={setTargetCell}
				setDropCell={setDropCell}
				isCellDragged={isCellDragged}
				handleMouseDown={handleMouseDown}
			/>
			<Main
				store={store}
				render={render}
				currentItem={currentItem}
				setItem={setItem}
				setTargetCell={setTargetCell}
				setDropCell={setDropCell}
				isCellDragged={isCellDragged}
				handleMouseDown={handleMouseDown}
				notify={notify}
				notifyText={notifyText}
				handlePutOn={handlePutOn}
				handlePutOff={handlePutOff}
				handleDrop={handleDrop}
			/>
			{middleComponent === 'dropZone' && <DropZone
				setDropCell={setDropCell}
				isCellDragged={isCellDragged}
			/>}
			{middleComponent === 'removeAccept' && <RemoveAccept
				setMiddleComponent={setMiddleComponent}
				handleDrop={handleDrop}
				render={render}
			/>}
			{middleComponent === 'tradeList' && <TradeList
				store={store}
				
				handleTrade={handleTrade}
			/>}
		</div>
		<div className="inventory-exit">
			<div className="inventory-exit__button">Esc</div>
			<span className="inventory-exit__text">- выход</span>
		</div>
		<CellExemplar cellExemplar={cellExemplar} store={store} targetCell={targetCell}/>
	</div>;
};

export default React.memo(Inventory);