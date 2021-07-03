import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import Bus               from './pages/Bus';
import BusWays           from './pages/BusWays';
import TruckDriver       from './pages/TruckDriver';
import TruckDriverArend  from './pages/TruckDriverArend';
import TruckDriverOrders from './pages/TruckDriverOrders';

import './Jobs.scss';

const Jobs = ({store, jobParams, player}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('jobs_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	React.useEffect(() => {
		EventManager.addHandler('jobs', 'setData', obj => store.fetchJobData(obj));
		EventManager.addHandler('jobs', 'setTruckDriverOrders', array => store.fetchTruckDriverOrders(array));
		EventManager.addHandler('jobs', 'addTruckDriverOrder', obj => store.addTruckDriverOrder(obj));
		EventManager.addHandler('jobs', 'removeTruckDriverOrder', id => store.removeTruckDriverOrder(id));
		
		EventManager.stopAddingHandlers('jobs');
		
		return () => EventManager.removeTargetHandlers('jobs');
	}, [store]);
	
	return <div ref={screen} className="jobs">
		{player.playerState.job === 'bus' && !jobParams && <Bus store={store}/>}
		{player.playerState.job === 'truckDriver' && !jobParams && <TruckDriver store={store}/>}
		{player.playerState.job === 'taxi' && !jobParams && <div>taxi</div>}
		
		{player.playerState.job === 'bus' && jobParams === 'ways' && <BusWays store={store}/>}
		{player.playerState.job === 'truckDriver' && jobParams === 'arend' && <TruckDriverArend store={store}/>}
		{player.playerState.job === 'truckDriver' && jobParams === 'orders' && <TruckDriverOrders store={store}/>}
		{player.playerState.job === 'taxi' && jobParams && <div>taxi</div>}
		
		<div className="jobs-exit">
			<div className="jobs-exit__button">Esc</div>
			<span className="jobs-exit__text">- выход</span>
		</div>
	</div>;
};

export default observer(Jobs);