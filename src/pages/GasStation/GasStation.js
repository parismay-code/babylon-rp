import * as React from 'react';

import DefaultGasStation from "./pages/DefaultGasStation";
import ElectroGasStation from "./pages/ElectroGasStation";
import HUDPlayerState from "pages/HUD/components/HUDPlayerState";
import HUDSpeedometer from "pages/HUD/components/HUDSpeedometer";

import './GasStation.scss';

const GasStation = ({data, store, player}) => {
    return <>
        <HUDPlayerState store={store} player={player}/>
        <HUDSpeedometer store={store} player={player}/>
        <div className='gas-station'>
            <div className='gas-station__content'>
                {data.type === 'default' ? <DefaultGasStation data={data} store={store}/> :
                    <ElectroGasStation data={data} store={store}/>}
            </div>
        </div>
    </>
}

export default React.memo(GasStation);