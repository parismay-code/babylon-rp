import * as React from 'react';

import Bus     from './pages/Bus';
import BusWays from './pages/BusWays';
import TruckDriver from './pages/TruckDriver';
import TruckDriverArend from './pages/TruckDriverArend';
import TruckDriverOrders from './pages/TruckDriverOrders';

import './Jobs.scss';

const Jobs = ({store, currentJob, jobParams}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('jobs_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="jobs">
		{currentJob === 'bus' && !jobParams && <Bus store={store}/>}
		{currentJob === 'truckDriver' && !jobParams && <TruckDriver store={store}/>}
		{currentJob === 'taxi' && !jobParams && <div>taxi</div>}
		
		{currentJob === 'bus' && jobParams === 'ways' && <BusWays store={store}/>}
		{currentJob === 'truckDriver' && jobParams === 'arend' && <TruckDriverArend store={store}/>}
		{currentJob === 'truckDriver' && jobParams === 'orders' && <TruckDriverOrders store={store}/>}
		{currentJob === 'taxi' && jobParams && <div>taxi</div>}
		
		<div className="jobs-exit">
			<div className="jobs-exit__button">Esc</div>
			<span className="jobs-exit__text">- выход</span>
		</div>
	</div>;
};

export default React.memo(Jobs);