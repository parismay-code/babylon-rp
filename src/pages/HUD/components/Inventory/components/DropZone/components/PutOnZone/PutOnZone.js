import * as React from 'react';

import putOnZoneIcon from 'assets/images/inventory/putOnZoneIcon.svg';

import './PutOnZone.scss';

const PutOnZone = ({setDropCell, isCellDragged}) => {
	return <div
		className="inventory-put-on-zone"
		onMouseEnter={() => isCellDragged && setDropCell({component: 'putOn', id: null})}
	>
		<img className="inventory-put-on-zone__icon" src={putOnZoneIcon} alt="#"/>
		<div className="inventory-put-on-zone__title">Перетащите предмет на <br/> персонажа, чтобы одеть</div>
	</div>;
};

export default React.memo(PutOnZone);