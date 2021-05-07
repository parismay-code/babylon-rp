import * as React from 'react';
import cn from 'classnames';

import './HUDAlertsTaxi.scss';

const HUDAlertsTaxi = () => {
    const [isHidden, setHidden] = React.useState(false);

    return <div className={cn('hud-alerts-taxi', !isHidden ? 'hud-alerts-taxi_active' : null)}>
        <div
            className='hud-alerts-taxi-before'
            style={isHidden ? {transition: 'transform .1s ease .4s'} : {transition: 'transform .1s ease'}}
        >
            <div className='hud-alerts-taxi-before__blank'/>
            <div className='hud-alerts-taxi-before__colored'/>
            <div className='hud-alerts-taxi-before__blank'/>
            <div className='hud-alerts-taxi-before__colored'/>
            <div className='hud-alerts-taxi-before__blank'/>
            <div className='hud-alerts-taxi-before__colored'/>
            <div className='hud-alerts-taxi-before__blank'/>
            <div className='hud-alerts-taxi-before__colored'/>
            <div className='hud-alerts-taxi-before__blank'/>
            <div className='hud-alerts-taxi-before__colored'/>
            <div className='hud-alerts-taxi-before__blank'/>
            <div className='hud-alerts-taxi-before__colored'/>
            <div className='hud-alerts-taxi-before__blank'/>
            <div className='hud-alerts-taxi-before__colored'/>
            <div className='hud-alerts-taxi-before__blank'/>
        </div>
        <div
            className='hud-alerts-taxi-content'
            style={isHidden ? {transition: 'width .3s, opacity 0s .2s'} :
                {transition: 'width .3s .3s, opacity 0s .3s'}}
        >
            <div
                className='hud-alerts-taxi-content-info'
                style={isHidden ? { transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
            >
                <div className='hud-alerts-taxi-content-info__title'>Таксометр включен</div>
                <div className='hud-alerts-taxi-content-info__subtitle'>Заработано</div>
            </div>
            <div
                className='hud-alerts-taxi-content__money'
                style={isHidden ? { transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
            >180 $</div>
        </div>
    </div>
}

export default React.memo(HUDAlertsTaxi);