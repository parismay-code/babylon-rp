import * as React from 'react';

import HUDMain from "./pages/HUDMain";
import CrimeHUD from "./pages/CrimeHUD";

const HUD = ({defaultStore, crimeStore, currentHUD, player}) => {
    return <div className='hud'>
        {
            currentHUD === 0 ? <HUDMain store={defaultStore} player={player}/>
                : <CrimeHUD defaultStore={defaultStore} crimeStore={crimeStore}/>
        }
    </div>
}

export default React.memo(HUD);