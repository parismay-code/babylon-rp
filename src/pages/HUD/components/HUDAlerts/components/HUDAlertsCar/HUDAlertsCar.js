import * as React from 'react';
import cn from 'classnames';

import safetyBelt from 'assets/images/hud/safetyBelt.svg';

import './HODAlertsCar.scss';

const HUDAlertsCar = () => {
    const [isHidden, setHidden] = React.useState(false);

    return <div className={cn('hud-alerts-car', !isHidden && 'active')}>
        <div
            className='hud-alerts-car__icon'
            style={isHidden ? {transition: 'transform .1s ease .4s'} : {transition: 'transform .1s ease'}}
        >
            <img src={safetyBelt} alt='#'/>
        </div>
        <div
            className='hud-alerts-car-content'
            style={isHidden ? {transition: 'width .3s, opacity 0s .2s'} :
                {transition: 'width .3s .3s, opacity 0s .3s'}}
        >
            <div
                className='hud-alerts-car-content__text'
                style={isHidden ? { transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
            >
                Ремень безопасности пристегнут
            </div>
        </div>
    </div>
}

export default React.memo(HUDAlertsCar);