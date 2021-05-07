import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import Speedometer from "./components/Speedometer";

import safetyBelt from 'assets/images/hud/safetyBelt.svg';
import engine from 'assets/images/hud/engine.svg';
import doors from 'assets/images/hud/doors.svg';
import cruiseControl from 'assets/images/hud/cruiseControl.svg';

import './HUDSpeedometer.scss';

const HUDSpeedometer = ({isInCar, store}) => {
    const colors = React.useMemo(() => ({
        blue: [
            '#46a4d6',
            '#6a9cbe',
            '#718BA0',
            '#687681',
            '#565C61',
            '#434546',
            '#2E2F2F',
        ],
        yellow: [
            '#ffab00',
            '#ce9b32',
            '#b1904b',
            '#a18a5a',
            '#8d7f64',
            '#58544b',
            '#2E2F2F',
        ],
        red: [
            '#FF0046',
            '#b05c73',
            '#926571',
            '#80636b',
            '#6E5C61',
            '#4e4749',
            '#2E2F2F',
        ]
    }), []);

    const wave = React.useRef(null);

    React.useEffect(() => {
        if (wave) {
            if (!store.carState.launched) {
                setTimeout(() => wave.current.style.animationPlayState = 'paused', 3000);
            }
            else wave.current.style.animationPlayState = 'running';
        }
    }, [wave, store.carState.launched]);

    const speed = React.useCallback(() => {
        if (String(store.carState.speed).length === 1) return `00${store.carState.speed}`;
        else if (String(store.carState.speed).length === 2) return `0${store.carState.speed}`;
        else return String(store.carState.speed);
    }, [store.carState.speed]);

    const [currentColors, setColors] = React.useState(colors.blue);

    React.useEffect(() => {
        if (store.carState.speed / store.carState.maxSpeed * 100 < 30) setColors(colors.blue);
        else if (store.carState.speed / store.carState.maxSpeed * 100 < 80) setColors(colors.yellow);
        else setColors(colors.red);
    }, [store.carState.speed, store.carState.maxSpeed, colors])

    return <div
        className={cn('hud-speedometer', isInCar && 'hud-speedometer_active')}
        style={isInCar ? {transition: 'opacity .5s ease .5s'} : {transition: 'opacity .5s ease .3s'}}
    >
        <Speedometer isInCar={isInCar} colors={currentColors}/>
        <div className='hud-speedometer-content'>
            <div
                className='hud-speedometer-content-fuel'
            >
                <div className='hud-speedometer-content-fuel-top' style={store.carState.fuel === 0 ? {opacity: 0} : null}>
                    <div
                        ref={wave}
                        className='hud-speedometer-content-fuel-top__wave'
                    />
                </div>
                <div className='hud-speedometer-content-fuel__bottom' style={{height: `${store.carState.fuel-20}%`}}/>
                <div className='hud-speedometer-content-fuel__count'>{store.carState.fuel} %</div>
            </div>
            <div
                className='hud-speedometer-content-speed'
                style={isInCar ? {transition: 'opacity .5s ease 1s, top .5s ease 1s, transform .5s ease 1s'} :
                    {transition: 'opacity .5s ease, top .5s ease, transform .5s ease'}}
            >
                <div className='hud-speedometer-content-speed__count'>{speed()}</div>
                <div className='hud-speedometer-content-speed__text'>km/h</div>
            </div>
            <div
                className='hud-speedometer-content-state'
                style={isInCar ? {transition: 'margin-left .5s ease 1s'} :
                    {transition: 'margin-left .5s ease'}}
            >
                <img
                    className='hud-speedometer-content-state__icon'
                    style={store.carState.seatBelt ? {opacity: 1} : {opacity: .5}}
                    src={safetyBelt}
                    alt='#'
                />
                <img
                    className='hud-speedometer-content-state__icon'
                    style={store.carState.locked ? {opacity: 1} : {opacity: .5}}
                    src={doors}
                    alt='#'
                />
                <img
                    className='hud-speedometer-content-state__icon'
                    style={store.carState.launched ? {opacity: 1} : {opacity: .5}}
                    src={engine}
                    alt='#'
                />
                <img
                    className='hud-speedometer-content-state__icon'
                    style={store.carState.cruiseControl ? {opacity: 1} : {opacity: .5}}
                    src={cruiseControl}
                    alt='#'
                />
            </div>
        </div>
    </div>
}

export default observer(HUDSpeedometer);