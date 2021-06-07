import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn from 'classnames';

import './CellExemplar.scss';

const CellExemplar = ({cellExemplar, store, targetCell}) => {
	const item = React.useMemo(() => {
		if (targetCell.component === 'clothes') return store.clothes[targetCell.id];
		else if (targetCell.component === 'fastSlots') return store.inventory[store.inventory.fastSlots[targetCell.id].component][store.inventory.fastSlots[targetCell.id].id];
		else if (targetCell.component) return store.inventory[targetCell.component][targetCell.id];
	}, [store.clothes, store.inventory, targetCell.component, targetCell.id]);
	const quality = React.useMemo(() => {
		switch (item?.quality) {
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
	}, [item]);
	
	return <div
		className={cn(
			'inventory-cell-exemplar',
			item?.type === 'food' ? 'inventory-cell-exemplar_food' : null,
			item?.type === 'drink' ? 'inventory-cell-exemplar_drink' : null
		)}
		ref={cellExemplar}
		style={targetCell.component ? {display: 'flex'} : {display: 'none'}}
	>
		<div
			className="inventory-cell-exemplar__quality"
			style={{background: `linear-gradient(to top, ${quality}, #C373F360 60%, #C373F300)`}}
		/>
		<img className="inventory-cell-exemplar__image"
		     src={`./publicImages/inventory/${item?.image}`} alt="#"/>
		{item?.count > 1 && <div className="inventory-cell-exemplar__count">{item?.count}</div>}
	</div>;
};

export default observer(CellExemplar);