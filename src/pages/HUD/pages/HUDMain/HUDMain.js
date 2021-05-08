import * as React from 'react';
import {observer} from "mobx-react-lite";
import cn from 'classnames';

import HUDHeader from "../../components/HUDHeader";
import HUDPlayerState from "../../components/HUDPlayerState";
import HUDMapInfo from "../../components/HUDMapInfo";
import HUDMic from "../../components/HUDMic";
import HUDNotify from "../../components/HUDNotify";
import HUDLevelUp from "../../components/HUDLevelUp";
import HUDAlerts from "../../components/HUDAlerts";
import HUDSpeedometer from "../../components/HUDSpeedometer";
import HUDDead from "../../components/HUDDead";
import HUDFriendship from "../../components/HUDFriendship";
import HUDInteraction from "../../components/HUDInteraction";

import greenZone from 'assets/images/hud/greenZone.svg';

import './HUDMain.scss';

const HUDMain = ({store}) => {
    React.useEffect(() => {
        window.alt.emit('client::hud:ready');

        const handleTabKey = (e) => {
            if (e.keyCode === 9) {
                e.preventDefault();
            }

            if (e.keyCode === 32) {
                e.preventDefault();
            }
        }

        document.getElementsByClassName('hud-main')[0].addEventListener('keydown', e => handleTabKey(e));
    }, []);

    return <div className='hud-main'>
        {!store.deadState.isDead && <>
            <HUDHeader store={store}/>
            <HUDPlayerState store={store} isInCar={store.isInCar}/>
            <HUDSpeedometer store={store} isInCar={store.isInCar}/>
            <HUDMapInfo store={store} noGeo={false}/>
            <HUDMic store={store}/>
        </>}
        <>
            <HUDLevelUp/>
            {store.deadState.isDead &&
            <HUDDead knockdown={store.deadState.knockdown} attacker={store.deadState.attacker}/>}
            <HUDNotify/>
            <HUDFriendship/>
            <HUDAlerts/>
        </>
        {!store.deadState.isDead && <>
            <HUDInteraction/>
            {store.effects.isHealing && <div className='hud-main__heal'/>}
            <div className={cn('hud-main-green-zone', store.greenZone ? 'hud-main-green-zone_active' : null)}>
                <img className='hud-main-green-zone__icon' src={greenZone} alt='#'/>
                <div className='hud-main-green-zone__title'>GreenZone</div>
            </div>
        </>}
    </div>
}

export default observer(HUDMain);