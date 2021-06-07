import * as React from 'react';
import {observer} from 'mobx-react-lite';

import arrow from 'assets/images/shops/clothes/arrow.svg';

import './Split.scss';

const Split = ({store, handleSplit, currentItem}) => {
	const [value, setValue] = React.useState(1);
	
	const screen = React.useRef(null);
	
	const item = React.useMemo(() => currentItem.component === 'fastSlots' ? store.inventory[store.inventory.fastSlots[currentItem.id].component][store.inventory.fastSlots[currentItem.id].id] :
			currentItem.component === 'clothes' ? store.clothes[currentItem.id] : store.inventory[currentItem.component][currentItem.id], [currentItem.component, currentItem.id, store.clothes, store.inventory]);
	
	const renderQuality = React.useMemo(() => {
		switch (item.quality) {
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
	}, [item.quality]);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="inventory-split">
		<div className="inventory-split-content">
			<img
				className="inventory-split-content__image"
				src={`./publicImages/inventory/${item.image}`}
				alt="#"
				style={{filter: `drop-shadow(0 0 15px ${renderQuality})`}}
			/>
			<div className="inventory-split-content__name">{item.name}</div>
			<div
				className="inventory-split-content__quality"
				style={{textShadow: `0 0 5px ${renderQuality}`}}
			>
				{item.quality + 1} уровня
			</div>
			<input
				className="inventory-split-content__field"
				type='number'
				name='n_inventorySplitField'
				value={value}
				onChange={(e) => {
					if (e.target.value > item.count - 1) setValue(item.count - 1);
					else if (e.target.value < 0) setValue(0);
				}}
			/>
			<div className="inventory-split-content-input">
				<img
					className="inventory-split-content-input__left-arrow"
					src={arrow} alt="#"
					onClick={() => {
						if (value - 1 < 0) setValue(item.count - 1);
						else setValue(value - 1);
					}}
				/>
				<input
					className="inventory-split-content-input__range"
					type="range"
					min="0"
					max={item.count - 1}
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
				/>
				<img
					className="inventory-split-content-input__right-arrow"
					src={arrow}
					alt="#"
					onClick={() => {
						if (value + 1 > item.count - 1) setValue(0);
						else setValue(value + 1);
					}}
				/>
			</div>
		</div>
		<div
			className="inventory-split__submit"
			onClick={() => handleSplit(item, value)}
		>Разделить</div>
	</div>;
};

export default observer(Split);