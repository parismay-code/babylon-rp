import * as React from 'react';
import cn         from 'classnames';

import {regExp}   from 'utils/regExp';

import './HUDAlertsTaxi.scss';

const HUDAlertsTaxi = ({isVisible, jobNotifyData}) => {
    const value = React.useMemo(() =>
        `${String(jobNotifyData.value).replace(regExp.money, '$1 ')} $`, [jobNotifyData.value]);
    
    return <div className={cn('hud-alerts-taxi', isVisible ? 'hud-alerts-taxi_active' : null)}>
        <div
            className='hud-alerts-taxi-before'
            style={!isVisible ? {transition: 'transform .1s ease .4s'} : {transition: 'transform .1s ease'}}
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
            style={!isVisible ? {transition: 'width .3s, opacity 0s .2s'} :
                {transition: 'width .3s .3s, opacity 0s .3s'}}
        >
            <div
                className='hud-alerts-taxi-content-info'
                style={!isVisible ? { transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
            >
                <div className='hud-alerts-taxi-content-info__title'>Таксометр включен</div>
                <div className='hud-alerts-taxi-content-info__subtitle'>Заработано</div>
            </div>
            <div
                className='hud-alerts-taxi-content__money'
                style={!isVisible ? { transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
            >{value}</div>
        </div>
    </div>
}

export default React.memo(HUDAlertsTaxi);