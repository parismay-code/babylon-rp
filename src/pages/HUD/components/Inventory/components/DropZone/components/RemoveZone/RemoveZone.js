import * as React from 'react';

import removeZoneIcon from 'assets/images/inventory/removeZoneIcon.svg';

import './RemoveZone.scss';

const RemoveZone = ({isCellDragged, setDropCell}) => {
	return <div
		className="inventory-remove-zone"
		onMouseEnter={() => isCellDragged && setDropCell({component: 'remove', id: null})}
	>
		<div className="inventory-remove-zone__title">Выбросить</div>
		<img className="inventory-remove-zone__icon" src={removeZoneIcon} alt="#"/>
	</div>;
};

export default React.memo(RemoveZone);