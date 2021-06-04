import * as React from 'react';
import {observer} from 'mobx-react-lite';

import './TradeList.scss';

const TradeList = ({ store, handleTrade }) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div className='inventory-trade-list' ref={screen}>
		{store.playersAround.map((el, key) => {
			return <div
				key={key}
				className='inventory-trade-list__element'
				onClick={() => handleTrade(el.id)}
			>
				ID: {el.id} <br/>{el.name}
			</div>
		})}
	</div>
}

export default observer(TradeList);