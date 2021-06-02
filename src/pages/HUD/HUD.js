import * as React from 'react';

import HUDMain from "./pages/HUDMain";
import CrimeHUD from "./pages/CrimeHUD";

import './HUD.scss';

const HUD = ({defaultStore, crimeStore, currentHUD, player, targetPlayerData, inventoryStore}) => {
    const screen = React.useRef(null);
    
    React.useEffect(() => {
        const timeout = setTimeout(() => screen.current.classList.add('hud_active'), 100);
        
        return () => clearTimeout(timeout);
    }, []);
    
    return <div ref={screen} className='hud'>
        {
            currentHUD === 0 ? <HUDMain store={defaultStore} player={player} targetPlayerData={targetPlayerData} inventoryStore={inventoryStore}/>
                : <CrimeHUD defaultStore={defaultStore} crimeStore={crimeStore}/>
        }
    </div>
}

export default React.memo(HUD);