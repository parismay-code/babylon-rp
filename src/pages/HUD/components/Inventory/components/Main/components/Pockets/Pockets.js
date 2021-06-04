import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import arrow from 'assets/images/inventory/arrow.svg';

import './Pockets.scss';

const Pockets = ({
	store,
	setItem,
	currentItem,
	isCellDragged,
	setDropCell,
	setTargetCell,
	handleMouseDown,
}) => {
	return <div className="inventory-pockets">
		<div className="inventory-pockets-header">
			<div className="inventory-pockets-header-info">
				<div className="inventory-pockets-header-info__line"/>
				<div className="inventory-pockets-header-info__title">карманы</div>
				<img className="inventory-pockets-header-info__arrow" src={arrow} alt="#"/>
			</div>
		</div>
		<div className="inventory-pockets-content">
			{store.inventory.pockets.map((el, key) => {
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
					className={cn('inventory-pockets-content-cell', currentItem.component === 'pockets' && currentItem.id === key ? 'inventory-pockets-content-cell_active' : null)}
					style={store.inventory.fastSlots.filter(el => el.component === 'pockets' && el.id === key).length > 0 ? {border: '2px dashed #B8B8B8'} : null}
					onClick={() => {
						if (el.type) setItem({component: 'pockets', id: key, options: el.options});
					}}
					onMouseDown={(e) => {
						const timeout = setTimeout(() => {
							if (el.type && e.button === 0) {
								handleMouseDown({component: 'pockets', id: key});
								setTargetCell({component: 'pockets', id: key});
								setDropCell({component: 'pockets', id: key});
							}
						}, 100);
						
						document.body.onmouseup = () => {
							clearTimeout(timeout);
							document.body.onmouseup = null;
						};
					}}
					onMouseEnter={() => isCellDragged && setDropCell({component: 'pockets', id: key})}
				>
					{el.type && <>
						<div
							className="inventory-pockets-content-cell__quality"
							style={{background: `linear-gradient(to top, ${quality()}, #C373F360 60%, #C373F300)`}}
						/>
						<img className="inventory-pockets-content-cell__image"
						     src={`./publicImages/inventory/${el.image}`} alt="#"/>
						{el.count > 1 && <div className="inventory-pockets-content-cell__count">{el.count}</div>}
					</>}
				</div>;
			})}
		</div>
	</div>;
};

export default observer(Pockets);