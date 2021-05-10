import * as React from 'react';
import {observer} from "mobx-react-lite";

import players from "assets/images/hud/players.svg";
import time from "assets/images/hud/time.svg";

import './ShopMapState.scss';

const ShopMapState = ({store, player}) => {
    return <div className='shop-map-state'>
        <div className='shop-map-state-players'>
            <img className='shop-map-state-players__icon' src={players} alt='#'/>
            <div className='shop-map-state-players__count'>{store.mapState.players}</div>
            <div className='shop-map-state-players__id'>ID: {player.id}</div>
        </div>
        <div className='shop-map-state-time'>
            <img className='shop-map-state-time__icon' src={time} alt='#'/>
            <div className='shop-map-state-time__time'>{store.time}</div>
            <div className='shop-map-state-time__date'>{store.date}</div>
        </div>
        <div className='shop-map-state-location'>
            <div className='shop-map-state-location__area'>{store.mapState.area}</div>
            <div className='shop-map-state-location__street'>{store.mapState.street}</div>
        </div>
    </div>
}

export default observer(ShopMapState);