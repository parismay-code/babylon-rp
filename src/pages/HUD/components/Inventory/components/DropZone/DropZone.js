import * as React from 'react';

import TradeZone  from './components/TradeZone';
import PutOnZone  from './components/PutOnZone';
import RemoveZone from './components/RemoveZone';

import './DropZone.scss';

const DropZone = ({setDropCell, isCellDragged}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div className="inventory-drop-zone" ref={screen}>
		<TradeZone setDropCell={setDropCell} isCellDragged={isCellDragged}/>
		<PutOnZone setDropCell={setDropCell} isCellDragged={isCellDragged}/>
		<RemoveZone setDropCell={setDropCell} isCellDragged={isCellDragged}/>
	</div>;
};

export default React.memo(DropZone);