import * as React from 'react';
import {observer} from "mobx-react-lite";

import HUDMic from "../../components/HUDMic";
import HUDMapInfo from "../../components/HUDMapInfo";

import PlayerState from './components/PlayerState';

import './CrimeHUD.scss';

const CrimeHUD = ({defaultStore, crimeStore, player}) => {
    const [kills, addKill] = React.useState(0);

    React.useEffect(() => {
        window.alt.on('cef::crimeHud:addKill', () => addKill(kills + 1));
        window.alt.on('cef::crimeHud:clearKills', () => addKill(0));
    }, [kills]);

    return <div className='crime-hud'>
        <HUDMic store={defaultStore} player={player}/>
        <HUDMapInfo store={defaultStore} player={player} noGeo={true}/>
        <PlayerState player={player}/>
    </div>
}

export default observer(CrimeHUD);