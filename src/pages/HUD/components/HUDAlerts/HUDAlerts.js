import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import HUDAlertsTaxi        from './components/HUDAlertsTaxi';
import HUDAlertsTruckDriver from './components/HUDAlertsTruckDriver';
import HUDAlertsTitled      from './components/HUDAlertsTitled';
import HUDAlertsDefault     from './components/HUDAlertsDefault';

import './HUDAlerts.scss';

const HUDAlerts = ({store, player}) => {
	const [isJobVisible, setJobVisible] = React.useState(false),
		[jobNotifyData, setJobNotifyData] = React.useState({});
	
	React.useEffect(() => {
		if (store.notifyQueue.length > 0) {
			if (store.notifyList.length < 4) {
				store.pushNotify(store.notifyList, store.notifyQueue[0]);
				store.shiftNotify(store.notifyQueue);
				
				setTimeout(() => {
					store.shiftNotify(store.notifyList);
				}, 6000);
			}
		}
	}, [store.notifyQueue.length, store.notifyList.length, store]);
	
	React.useEffect(() => {
		EventManager.addHandler('hud', 'showJobAlert', (bool, data) => {
			if (bool) {
				setJobVisible(bool);
				setJobNotifyData(data);
			} else setJobVisible(bool);
		});
	}, [store]);
	
	return <div className="hud-alerts">
		<div className="hud-alerts-main">
			{store.notifyList.map((el, key) => {
				switch (el.type) {
					case 0:
						return <HUDAlertsTitled key={el.id} data={el.data}/>;
					case 1:
						return <HUDAlertsDefault key={el.id} data={el.data}/>;
					default:
						return null;
				}
			})}
		</div>
		<div className="hud-alerts-job">
			{player.playerState.job === 'taxi' &&
			<HUDAlertsTaxi isVisible={isJobVisible} jobNotifyData={jobNotifyData}/>}
			{player.playerState.job === 'truckDriver' &&
			<HUDAlertsTruckDriver isVisible={isJobVisible} jobNotifyData={jobNotifyData}/>}
		</div>
	</div>;
};

export default observer(HUDAlerts);