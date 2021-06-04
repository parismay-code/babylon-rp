import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import './Clothes.scss';

const Clothes = ({
	store,
	currentItem,
	setItem,
	setTargetCell,
	setDropCell,
	isCellDragged,
	handleMouseDown,
}) => {
	return <div className="inventory-clothes">
		{store.clothes.map((el, key) => {
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
						return '#FFFFFF00';
				}
			};
			
			return <div key={key} className="inventory-clothes-cell">
				<div className="inventory-clothes-cell__quality"
				     style={{background: `linear-gradient(to left, ${quality()}, #C373F300)`}}/>
				<div
					className={cn('inventory-clothes-cell-content', currentItem.component === 'clothes' && currentItem.id === key ? 'inventory-clothes-cell-content_active' : null)}
					onClick={() => {
						if (el.isPlaced) setItem({component: 'clothes', id: key, options: el.options});
					}}
					onMouseDown={(e) => {
						const timeout = setTimeout(() => {
							if (el.isPlaced && e.button === 0) {
								handleMouseDown({component: 'clothes', id: key});
								setTargetCell({component: 'clothes', id: key});
								setDropCell({component: 'clothes', id: key});
							}
						}, 100);
						
						document.body.onmouseup = () => {
							clearTimeout(timeout);
							document.body.onmouseup = null;
						};
					}}
					onMouseEnter={() => isCellDragged && setDropCell({component: 'clothes', id: key})}
				>
					<img
						className="inventory-clothes-cell-content__icon"
						src={`./publicImages/inventory/${el.image}`}
						alt="#"
						style={el.isPlaced ? {opacity: 1, filter: `drop-shadow(0 0 5px ${quality()})`} : {
							opacity: .3,
							filter: 'none',
						}}
					/>
				</div>
			</div>;
		})}
	</div>;
};

export default observer(Clothes);