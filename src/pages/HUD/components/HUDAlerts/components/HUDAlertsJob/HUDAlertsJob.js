import * as React from 'react';
import cn from 'classnames';

import dispetcherNotify from 'assets/images/hud/dispetcherNotify.svg';

import './HODAlertsJob.scss';

const HUDAlertsJob = () => {
    const [isHidden, setHidden] = React.useState(false);

    return <div className={cn('hud-alerts-job', !isHidden && 'active')}>
        <div
            className='hud-alerts-job__icon'
            style={isHidden ? {transition: 'transform .1s ease .4s'} : {transition: 'transform .1s ease'}}
        >
            <img src={dispetcherNotify} alt='#'/>
        </div>
        <div
            className='hud-alerts-job-content'
            style={isHidden ? {transition: 'width .3s, opacity 0s .2s'} :
                {transition: 'width .3s .3s, opacity 0s .3s'}}
        >
            <div
                className='hud-alerts-job-content__title'
                style={isHidden ? { transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
            >
                Диспетчер
            </div>
            <div
                className='hud-alerts-job-content__subtitle'
                style={isHidden ? { transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
            >
                В таксопарк поступил новый заказ
            </div>
        </div>
    </div>
}

export default React.memo(HUDAlertsJob);