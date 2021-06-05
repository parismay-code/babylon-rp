import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import arrow from 'assets/images/inventory/arrow.svg';

import './FastSlots.scss';

const FastSlots = ({
	store,
	setItem,
	currentItem,
	isCellDragged,
	setDropCell,
	setTargetCell,
	handleMouseDown,
}) => {
	return <div className="inventory-fast-slots">
		<div className="inventory-fast-slots-header">
			<div className="inventory-fast-slots-header__line"/>
			<div className="inventory-fast-slots-header__title">быстрый доступ</div>
			<img className="inventory-fast-slots-header__arrow" src={arrow} alt="#"/>
		</div>
		<div className="inventory-fast-slots-content">
			{store.inventory.fastSlots.map((el, key) => {
				const quality = () => {
					switch (store.inventory[el.component][el.id].quality) {
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
					className={cn('inventory-fast-slots-content-cell', currentItem.component === 'fastSlots' && currentItem.id === key ? 'inventory-fast-slots-content-cell_active' : null)}
					onClick={() => {
						if (el.id >= 0 && el.component) setItem({
							component: 'fastSlots',
							id: key,
							options: store.inventory[el.component][el.id].options,
						});
					}}
					onMouseDown={(e) => {
						const timeout = setTimeout(() => {
							if (el.id !== null && e.button === 0) {
								handleMouseDown({component: 'fastSlots', id: key});
								setTargetCell({component: 'fastSlots', id: key});
								setDropCell({component: 'fastSlots', id: key});
							}
						}, 100);
						
						document.body.onmouseup = () => {
							clearTimeout(timeout);
							document.body.onmouseup = null;
						};
					}}
					onMouseEnter={() => isCellDragged && setDropCell({component: 'fastSlots', id: key})}
				>
					{el.id >= 0 && el.component && <>
						<div
							className="inventory-fast-slots-content-cell__quality"
							style={{background: `linear-gradient(to top, ${quality()}, #C373F360 60%, #C373F300)`}}
						/>
						<img className="inventory-fast-slots-content-cell__image"
						     src={`./publicImages/inventory/${store.inventory[el.component][el.id].image}`} alt="#"/>
					</>}
					<div className="inventory-fast-slots-content-cell__id">{key + 1}</div>
				</div>;
			})}
		</div>
	</div>;
};

export default observer(FastSlots);