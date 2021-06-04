import * as React from 'react';

import tradeZoneIcon from 'assets/images/inventory/tradeZoneIcon.svg';

import './TradeZone.scss';

const TradeZone = ({setDropCell, isCellDragged}) => {
	return <div
		className="inventory-trade-zone"
		onMouseEnter={() => isCellDragged && setDropCell({component: 'trade', id: null})}
	>
		<img className="inventory-trade-zone__icon" src={tradeZoneIcon} alt="#"/>
		<div className="inventory-trade-zone__title">Передать</div>
	</div>;
};

export default React.memo(TradeZone);