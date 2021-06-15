import * as React from 'react';

import HUDMain from "./pages/HUDMain";
import CrimeHUD from "./pages/CrimeHUD";

import './HUD.scss';

const HUD = ({defaultStore, crimeStore, currentHUD, player, targetPlayerData, inventoryStore}) => {
    return <div className='hud'>
        {
            currentHUD === 0 ? <HUDMain store={defaultStore} player={player} targetPlayerData={targetPlayerData} inventoryStore={inventoryStore}/>
                : <CrimeHUD defaultStore={defaultStore} player={player} crimeStore={crimeStore}/>
        }
    </div>
}

export default React.memo(HUD);