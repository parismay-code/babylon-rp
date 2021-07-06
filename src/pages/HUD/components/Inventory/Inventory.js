import * as React   from 'react';
import EventManager from 'utils/eventManager';

import Clothes      from './components/Clothes';
import Main         from './components/Main';
import CellExemplar from './components/CellExemplar';
import DropZone     from './components/DropZone';
import RemoveAccept from './components/RemoveAccept';
import TradeList    from './components/TradeList';
import Split        from './components/Split';
import Trunk        from './components/Trunk';
import Trade        from './components/Trade';

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
		notify = React.useRef(null),
		screen = React.useRef(null);
	
	const showNotify = React.useCallback((title, subtitle, timeout) => {
			setNotifyText({title, subtitle});
			notify.current.style.opacity = 1;
			
			setTimeout(() => notify.current.style.opacity = 0, timeout ? timeout : 3000);
		}, []),
		handlePutOn = React.useCallback(item => {
			if (currentItem.component === 'tradeTo') return;
			
			const target = item ? item :
				currentItem.component === 'trunk' ? store.trunk[currentItem.id] :
					store.inventory[currentItem.component][currentItem.id];
			
			const id = store.clothes.findIndex(el => el.type === target.type);
			const drop = store.clothes[id];
			
			const freeIndex = currentItem.component === 'trunk' ? store.trunk.findIndex(el => !el.type) :
				currentItem.component === 'tradeTo' ? store.trade.items.findIndex(el => !el.type) :
					store.inventory[currentItem.component].findIndex(el => !el.type);
			
			if (target.type === drop.type && target.key === drop.key && target.quality === drop.quality) return showNotify('Ошибка', 'Этот предмет уже надет на Вас');
			
			if (target.count === 1) {
				if (drop.isPlaced) store.changeInventoryData(currentItem,
					{
						type: drop.type,
						hash: drop.hash,
						key: drop.key,
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
				
				store.changeInventoryData({component: 'clothes', id}, {
					type: target.type,
					hash: target.hash,
					key: target.key,
					quality: target.quality,
					image: target.image,
					render: target.render,
					name: target.name,
					description: target.description,
					count: target.count,
					weight: target.weight,
					maxStack: target.maxStack,
					options: target.options,
					isPlaced: true,
				});
			} else {
				if (freeIndex < 0) return showNotify('Ошибка', 'Недостаточно места в инвентаре');
				
				if (drop.isPlaced) {
					store.changeInventoryData({component: currentItem.component, id: freeIndex},
						{
							type: drop.type,
							hash: drop.hash,
							key: drop.key,
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
						key: target.key,
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
			
			EventManager.emitServer('inventory', 'update', store.clothes, store.inventory);
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
							key: item.key,
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
				} else if (backpackFreeIndex >= 0 && store.clothes[7].isPlaced) {
					if (item.type === 'backpack') return showNotify('Ошибка', 'Недостаточно места в инвентаре');
					
					store.changeInventoryData({component: 'backpack', id: backpackFreeIndex},
						{
							type: item.type,
							hash: item.hash,
							key: item.key,
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
			EventManager.emitServer('inventory', 'update', store.clothes, store.inventory);
		}, [currentItem.id, showNotify, store]),
		handleDrop = React.useCallback(isAccepted => {
			if (currentItem.component === 'tradeTo') return;
			
			const item = currentItem.component === 'clothes' ? store.clothes[currentItem.id] :
				currentItem.component === 'trunk' ? store.trunk[currentItem.id] :
					store.inventory[currentItem.component][currentItem.id];
			
			if (item.quality >= 3 && !isAccepted) {
				setMiddleComponent('removeAccept');
			} else {
				setMiddleComponent('dropZone');
				setItem({component: null, id: null, options: null});
				
				EventManager.emitServer('inventory', 'dropItem', item.hash, item.quality, item.count);
			}
		}, [currentItem.component, currentItem.id, store.clothes, store.inventory, store.trunk]),
		handleTrade = React.useCallback(id => {
			if (currentItem.component === 'tradeTo') return;
			
			const item = currentItem.component === 'clothes' ? store.clothes[currentItem.id] :
				currentItem.component === 'trunk' ? store.trunk[currentItem.id] :
					store.inventory[currentItem.component][currentItem.id];
			
			if (id) {
				setMiddleComponent('dropZone');
				setItem({component: null, id: null, options: null});
				
				EventManager.emitServer('inventory', 'tradeItem', id, item.hash, item.quality, item.count);
			} else {
				setMiddleComponent('tradeList');
			}
		}, [currentItem.component, currentItem.id, store.clothes, store.inventory, store.trunk]),
		handleSplit = React.useCallback((item, value) => {
			if (value > 0) {
				let component;
				let pocketsFreeIndex = store.inventory.pockets.findIndex(el => !el.type);
				let backpackFreeIndex = store.inventory.backpack.findIndex(el => !el.type);
				
				if (pocketsFreeIndex >= 0) component = 'pockets';
				else if (backpackFreeIndex >= 0) component = 'backpack';
				else return showNotify('Ошибка', 'В инвентаре недостаточно места');
				
				currentItem.component === 'fastSlots' ?
					store.inventory[store.inventory.fastSlots[currentItem.id].component][store.inventory.fastSlots[currentItem.id].id].count -= value :
					store.inventory[currentItem.component][currentItem.id].count -= value;
				
				store.changeInventoryData(
					{
						component,
						id: component === 'pockets' ? pocketsFreeIndex : backpackFreeIndex,
					},
					{
						type: item.type,
						hash: item.hash,
						key: item.key,
						quality: item.quality,
						image: item.image,
						render: item.render,
						name: item.name,
						description: item.description,
						count: value,
						weight: item.weight,
						maxStack: item.maxStack,
						options: item.options,
					},
				);
				
				setItem({
					component,
					id: component === 'pockets' ? pocketsFreeIndex : backpackFreeIndex,
					options: item.options,
				});
				
				EventManager.emitServer('inventory', 'update', store.clothes, store.inventory);
			} else setMiddleComponent('dropZone');
		}, [currentItem.component, currentItem.id, showNotify, store]),
		handleMouseDown = React.useCallback((_targetCell) => {
			setItem({
				..._targetCell,
				options: _targetCell.component === 'clothes' ? store.clothes[_targetCell.id].options :
					_targetCell.component === 'trunk' ? store.trunk[_targetCell.id].options :
						_targetCell.component === 'tradeTo' ? null :
							store.inventory[_targetCell.component][_targetCell.id].options,
			});
			setCellDragged(true);
		}, [store.clothes, store.inventory, store.trunk]),
		handleMouseUp = React.useCallback(() => {
			const error = (title, subtitle, timeout) => {
				setItem({
					...targetCell,
					options: targetCell.component === 'clothes' ? store.clothes[targetCell.id].options :
						targetCell.component === 'trunk' ? store.trunk[targetCell.id].options :
							targetCell.component === 'tradeTo' ? null :
								store.inventory[targetCell.component][targetCell.id].options,
				});
				setTargetCell({component: null, id: null});
				setDropCell({component: null, id: null});
				setCellDragged(false);
				
				return showNotify(title, subtitle, timeout);
			};
			
			const success = () => {
				setItem({
					...dropCell,
					options: dropCell.component === 'clothes' ? store.clothes[dropCell.id].options :
						dropCell.component === 'trunk' ? store.trunk[dropCell.id].options :
							dropCell.component === 'tradeTo' ? null :
								store.inventory[dropCell.component][dropCell.id].options,
				});
				setTargetCell({component: null, id: null});
				setDropCell({component: null, id: null});
				setCellDragged(false);
				
				if (targetCell.component === 'tradeTo' || dropCell.component === 'tradeTo')
					EventManager.emitServer('inventory', 'changeTrade', store.trade);
				return EventManager.emitServer('inventory', 'update', store.clothes, store.inventory);
			};
			
			const target = targetCell.component === 'clothes' ? store.clothes[targetCell.id] :
				targetCell.component === 'trunk' ? store.trunk[targetCell.id] :
					targetCell.component === 'tradeTo' ? store.trade.items[targetCell.id] :
						store.inventory[targetCell.component][targetCell.id];
			
			if ((targetCell.component === 'tradeTo' || dropCell.component === 'tradeTo') && store.trade.isReady)
				return error('Ошибка', 'Для изменения условий отмените готовность');
			
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
			
			const drop = dropCell.component === 'clothes' ? store.clothes[dropCell.id] :
				dropCell.component === 'trunk' ? store.trunk[dropCell.id] :
					dropCell.component === 'tradeTo' ? store.trade.items[dropCell.id] :
						store.inventory[dropCell.component][dropCell.id];
			
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
				if (targetCell.component === 'tradeTo') return error('Ошибка', 'Сначала переместите предмет в инвентарь');
				
				if (store.inventory.fastSlots.findIndex(el => el.component === targetCell.component && el.id === targetCell.id) >= 0) return error('Ошибка', 'Предмет уже находится в быстром доступе');
				else {
					if (target.options.indexOf('fast') >= 0) {
						store.changeInventoryData({component: 'fastSlots', id: dropCell.id}, targetCell);
						return success();
					} else return error('Ошибка', 'Предмет не может быть помещен в быстрый доступ');
				}
			}
			
			if (dropCell.component === 'clothes') {
				if (targetCell.component === 'tradeTo') return error('Ошибка', 'Сначала переместите предмет в инвентарь');
				
				if (targetCell.component !== 'clothes' && target.type === drop.type) {
					if (target.key === drop.key && target.quality === drop.quality) return error('Ошибка', 'Этот предмет уже надет на Вас');
					if (target.count === 1) {
						if (drop.isPlaced) store.changeInventoryData(targetCell,
							{
								type: drop.type,
								hash: drop.hash,
								key: drop.key,
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
						
						store.changeInventoryData(dropCell, {
							type: target.type,
							hash: target.hash,
							key: target.key,
							quality: target.quality,
							image: target.image,
							render: target.render,
							name: target.name,
							description: target.description,
							count: target.count,
							weight: target.weight,
							maxStack: target.maxStack,
							options: target.options,
							isPlaced: true,
						})
						;
					} else {
						if (drop.isPlaced) {
							const freeIndex = store.inventory[targetCell.component].findIndex(el => !el.type);
							
							if (freeIndex < 0) return error('Ошибка', 'Недостаточно места в инвентаре');
							
							store.changeInventoryData({component: targetCell.component, id: freeIndex},
								{
									type: drop.type,
									hash: drop.hash,
									key: drop.key,
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
								key: target.key,
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
						if (drop.type !== target.type || drop.key !== target.key || drop.quality !== target.quality) return error('Ошибка', 'Предмет нельзя поместить в это место');
						else if (drop.count + target.count <= drop.maxStack) {
							store.changeInventoryData(dropCell,
								{
									type: target.type,
									hash: target.hash,
									key: target.key,
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
									key: target.key,
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
								key: target.key,
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
			const isTargetEqualsDrop = target.key === drop.key && target.quality === drop.quality && (dropCell.component !== targetCell.component || dropCell.id !== targetCell.id);
			
			if (isTargetEqualsDrop) {
				if (targetCell.component !== 'tradeTo' && dropCell.component !== 'tradeTo') {
					const remains = drop.maxStack - drop.count;
					
					if (remains - target.count < 0) {
						store.inventory[targetCell.component][targetCell.id].count -= remains;
						store.inventory[dropCell.component][dropCell.id].count += remains;
					} else {
						store.inventory[dropCell.component][dropCell.id].count += target.count;
						store.changeInventoryData(targetCell, {type: null});
					}
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
			const item = currentItem.component === 'fastSlots' ?
				store.inventory[store.inventory.fastSlots[currentItem.id].component][store.inventory.fastSlots[currentItem.id].id] :
				currentItem.component === 'trunk' ? store.trunk[currentItem.id] :
					currentItem.component === 'clothes' ? store.clothes[currentItem.id] :
						currentItem.component === 'tradeTarget' ? store.tradeTarget.items[currentItem.id] :
							currentItem.component === 'tradeTo' ? store.trade.items[currentItem.id] :
								store.inventory[currentItem.component][currentItem.id];
			
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
	}, [currentItem, store.clothes, store.inventory, store.trade.items, store.tradeTarget.items, store.trunk]);
	
	React.useEffect(() => {
		if (!store.clothes[7].isPlaced) {
			const arr = store.inventory.fastSlots.filter(el => el.component === 'backpack');
			
			for (let i = 0; i < arr.length; i++) {
				const id = store.inventory.fastSlots.findIndex(el => el.component === 'backpack');
				
				store.inventory.fastSlots[id] = {component: null, id: null};
			}
		}
	}, [store.clothes, store.inventory.fastSlots, store.clothes[7].isPlaced]);
	
	React.useEffect(() => {
		EventManager.addHandler('inventory', 'showNotify', (title, subtitle, timeout) => showNotify(title, subtitle, timeout));
		EventManager.addHandler('inventory', 'showTrunk', bool => store.setTrunkVisible(bool));
		EventManager.addHandler('inventory', 'showTrade', (bool, tradeTarget) => {
			if (bool) store.setTradeVisible(bool, tradeTarget);
			else {
				store.setTradeVisible(bool, {
					id: null,
					nickname: null,
					isReady: false,
					money: 0,
					items: [
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
					],
				});
				store.trade = {
					isReady: false,
					money: 0,
					items: [
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
						{type: null},
					],
				}
			}
		});
		EventManager.addHandler('inventory', 'setTradeTargetReady', bool => store.setTradeTargetReady(bool));
		EventManager.addHandler('inventory', 'changeTradeTargetItem', (id, item) => store.changeTradeTargetItem(id, item));
		EventManager.addHandler('inventory', 'changeTradeTargetMoney', value => store.changeTradeTargetMoney(value));
	}, [showNotify, store]);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('inventory_active'), 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div
		ref={screen}
		className="inventory"
		onMouseUp={(e) => e.button === 0 && dropCell.component && handleMouseUp()}
		onMouseMove={(e) => {
			cellExemplar.current.style.left = e.pageX + 'px';
			cellExemplar.current.style.top = e.pageY + 'px';
		}}
	>
		<div className="inventory-content">
			<div className="inventory-content-left">
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
					handleTrade={handleTrade}
					setMiddleComponent={setMiddleComponent}
				/>
			</div>
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
			{middleComponent === 'split' && <Split
				store={store}
				currentItem={currentItem}
				handleSplit={handleSplit}
			/>}
			<div className="inventory-content-right">
				{store.isTrunkVisible && <Trunk
					store={store}
					currentItem={currentItem}
					setItem={setItem}
					setTargetCell={setTargetCell}
					setDropCell={setDropCell}
					isCellDragged={isCellDragged}
					handleMouseDown={handleMouseDown}
					handlePutOn={handlePutOn}
					handlePutOff={handlePutOff}
					handleDrop={handleDrop}
					handleTrade={handleTrade}
					setMiddleComponent={setMiddleComponent}
				/>}
				{store.isTradeVisible && <Trade
					store={store}
					currentItem={currentItem}
					setItem={setItem}
					setTargetCell={setTargetCell}
					setDropCell={setDropCell}
					isCellDragged={isCellDragged}
					handleMouseDown={handleMouseDown}
				/>}
			</div>
		</div>
		<div className="inventory-exit">
			<div className="inventory-exit__button">Esc</div>
			<span className="inventory-exit__text">- выход</span>
		</div>
		<CellExemplar cellExemplar={cellExemplar} store={store} targetCell={targetCell}/>
	</div>;
};

export default React.memo(Inventory);