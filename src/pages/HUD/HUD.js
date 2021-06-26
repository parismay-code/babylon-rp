import * as React from 'react';

import HUDMain  from './pages/HUDMain';
import CrimeHUD from './pages/CrimeHUD';

import './HUD.scss';

const HUD = ({
	defaultStore,
	crimeStore,
	currentHUD,
	player,
	setTargetPlayerData,
	targetPlayerData,
	inventoryStore,
	currentJob,
}) => {
	return <div className="hud">
		{
			currentHUD === 0 ? <HUDMain
					store={defaultStore}
					player={player}
					targetPlayerData={targetPlayerData}
					setTargetPlayerData={setTargetPlayerData}
					inventoryStore={inventoryStore}
					currentJob={currentJob}
				/>
				: <CrimeHUD defaultStore={defaultStore} player={player} crimeStore={crimeStore}/>
		}
	</div>;
};

export default React.memo(HUD);