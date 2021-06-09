import * as React from 'react';
import {observer} from "mobx-react-lite";

import ammo from 'assets/images/hud/ammo.svg';
import armour from 'assets/images/hud/armour.svg';
import hp from 'assets/images/hud/hp.svg';

import './PlayerState.scss';

const PlayerState = ({ player }) => {
    return <div className='crime-hud-player-state'>
        <div className='crime-hud-player-state-ammo'>
            <img className='crime-hud-player-state-ammo__icon' src={ammo} alt='#'/>
            <div className='crime-hud-player-state-ammo-value'>
                <div className='crime-hud-player-state-ammo-value__charged'>{player.playerState.ammo.charged}</div>
                <div className='crime-hud-player-state-ammo-value__clip'>{player.playerState.ammo.clip}</div>
            </div>
        </div>
        <div className='crime-hud-player-state-main'>
            <div className='crime-hud-player-state-main-armour'>
                <div className='crime-hud-player-state-main-armour-value'>
                    <img className='crime-hud-player-state-main-armour-value__icon' src={armour} alt='#'/>
                    <div className='crime-hud-player-state-main-armour-value__title'>{player.playerState.armour}</div>
                </div>
                <div className='crime-hud-player-state-main-armour-bar'>
                    <div className='crime-hud-player-state-main-armour-bar__fill' style={{width: `${player.playerState.armour}%`}}/>
                </div>
            </div>
            <div className='crime-hud-player-state-main-health'>
                <div className='crime-hud-player-state-main-health-bar'>
                    <div className='crime-hud-player-state-main-health-bar__fill' style={{width: `${player.playerState.hp}%`}}/>
                </div>
                <div className='crime-hud-player-state-main-health-value'>
                    <img className='crime-hud-player-state-main-health-value__icon' src={hp} alt='#'/>
                    <div className='crime-hud-player-state-main-health-value__title'>{player.playerState.hp}</div>
                </div>
            </div>
        </div>
    </div>
}

export default observer(PlayerState);