import * as React from 'react';
import {observer} from "mobx-react-lite";
import cn from 'classnames';

import players from 'assets/images/hud/players.svg';
import time from 'assets/images/hud/time.svg';

import './HUDMapInfo.scss';

const HUDMapInfo = ({store, player, noGeo}) => {
    return <div className={cn('hud-map-info', noGeo ? 'hud-map-info_no-geo' : null)}>
        {noGeo ? null :<div className='hud-map-info-header'>
            <div className='hud-map-info-header-location'>
                <div className='hud-map-info-header-location__area'>{store.mapState.area}</div>
                <div className='hud-map-info-header-location__street'>{store.mapState.street}</div>
            </div>
        </div>}
        <div className='hud-map-info-bottom'>
            <div className='hud-map-info-bottom-players'>
                <img className='hud-map-info-bottom-players__icon' src={players} alt='#'/>
                <div className='hud-map-info-bottom-players__count'>{store.mapState.players}</div>
                <div className='hud-map-info-bottom-players__id'>ID: {player.playerState.id}</div>
            </div>
            <div className='hud-map-info-bottom-time'>
                <img className='hud-map-info-bottom-time__icon' src={time} alt='#'/>
                <div className='hud-map-info-bottom-time__time'>{store.time}</div>
                <div className='hud-map-info-bottom-time__date'>{store.date}</div>
            </div>
        </div>
    </div>
}

export default observer(HUDMapInfo);