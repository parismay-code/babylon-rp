import * as React from 'react';
import cn from 'classnames';

import './HODAlertsDefault.scss';

const HUDAlertsDefault = ({data}) => {
    const [isHidden, setHidden] = React.useState(true);
    
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setHidden(false);
            
            setTimeout(() => {
                setHidden(true);
            }, 4900);
        }, 100);
        
        return () => clearTimeout(timeout);
    }, []);

    return <div
        className={cn('hud-alerts-default', !isHidden ? 'hud-alerts-default_active' : null)}
        style={isHidden ? {transition: 'height .5s ease .5s, margin-bottom .5s ease .5s'} : {transition: 'height 0s, margin-bottom 0s'}}
    >
        <div
            className='hud-alerts-default__icon'
            style={isHidden ? {transition: 'transform .1s ease .4s'} : {transition: 'transform .1s ease'}}
        >
            <img src={`./publicImages/notify/${data.icon}`} alt='#'/>
        </div>
        <div
            className='hud-alerts-default-content'
            style={isHidden ? {transition: 'width .3s, opacity 0s .2s'} :
                {transition: 'width .3s .3s, opacity 0s .3s'}}
        >
            <div
                className='hud-alerts-default-content__text'
                style={isHidden ? { transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
            >
                {data.text}
            </div>
        </div>
    </div>
}

export default React.memo(HUDAlertsDefault);