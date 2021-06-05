import * as React from 'react';
import {observer} from 'mobx-react-lite';

import Pockets   from './components/Pockets';
import Backpack  from './components/Backpack';
import FastSlots from './components/FastSlots';

import './Main.scss';

const Main = ({
	store,
	render,
	currentItem,
	setItem,
	setTargetCell,
	setDropCell,
	isCellDragged,
	handleMouseDown,
	notifyText,
	notify,
	handlePutOn,
	handlePutOff,
	handleDrop
}) => {
	const renderQuality = React.useMemo(() => {
		switch (render.quality) {
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
	}, [render.quality]);
	
	return <div className="inventory-main">
		<div className="inventory-main__title">Инвентарь <span>{store.inventoryWeight}/{store.inventoryMaxWeight}кг.</span></div>
		<div className="inventory-main-render" style={render.image ? {opacity: 1} : {opacity: 0}}>
			<img
				className="inventory-main-render__image"
				src={`./publicImages/inventory/${render.image}`}
				alt="#"
				style={{filter: `drop-shadow(0 0 15px ${renderQuality})`}}
			/>
			<div className="inventory-main-render-info">
				<div className="inventory-main-render-info__name">{render.name}</div>
				<div className="inventory-main-render-info__quality"
				     style={{textShadow: `0 0 5px ${renderQuality}`}}>{render.quality + 1} уровня
				</div>
				<div className="inventory-main-render-info__description">{render.description}</div>
			</div>
		</div>
		<Pockets
			store={store}
			currentItem={currentItem}
			setItem={setItem}
			setTargetCell={setTargetCell}
			setDropCell={setDropCell}
			isCellDragged={isCellDragged}
			handleMouseDown={handleMouseDown}
		/>
		<Backpack
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
		/>
		<FastSlots
			store={store}
			currentItem={currentItem}
			setItem={setItem}
			setTargetCell={setTargetCell}
			setDropCell={setDropCell}
			isCellDragged={isCellDragged}
			handleMouseDown={handleMouseDown}
		/>
		<div ref={notify} className='inventory-main-notify'>
			<div className='inventory-main-notify__title'>{notifyText.title}</div>
			<div className='inventory-main-notify__subtitle'>{notifyText.subtitle}</div>
		</div>
	</div>;
};

export default observer(Main);