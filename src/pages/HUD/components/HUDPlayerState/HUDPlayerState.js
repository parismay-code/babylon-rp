import * as React from 'react';
import {observer} from "mobx-react-lite";
import cn from 'classnames';

import temperature from 'assets/images/hud/temperature.svg';
import amnesia from 'assets/images/hud/amnesia.svg';
import marijuana from 'assets/images/hud/marijuana.svg';
import sickness from 'assets/images/hud/sickness.svg';
import armour from 'assets/images/hud/armour.svg';
import hp from 'assets/images/hud/hp.svg';
import thirst from 'assets/images/hud/thirst.svg';
import hunger from 'assets/images/hud/hunger.svg';
import engine from 'assets/images/hud/engine.svg';
import healingEffectIcon from 'assets/images/hud/healingEffectIcon.svg';

import './HUDPlayerState.scss';

const HUDPlayerState = ({store, isInCar}) => {
    const [isHealing, setHealing] = React.useState(false);

    React.useEffect(() => {
        window.alt.on('cef::hud:selfHeal', bool => setHealing(bool));
    }, []);

    return <div className={cn('hud-player-state', isInCar && 'hud-player-state_inCar')}>
        <div className='hud-player-state-sick'>
            <svg
                className={cn('hud-player-state-sick__element', store.playerState.sick.flu ? 'hud-player-state-sick__element_active' : 'hud-player-state-sick__element_disabled')}
                xmlns="http://www.w3.org/2000/svg" width="27.134"
                height="13.567" viewBox="0 0 27.134 13.567">
                <path
                    d="M11.871,5.088a5.088,5.088,0,1,0-10.175,0V15.864A6.783,6.783,0,0,0,6.735,27.133h.048a6.783,6.783,0,0,0,5.088-11.27ZM6.783,24.59H6.753a4.257,4.257,0,0,1-4.209-4.262,4.932,4.932,0,0,1,1.7-3.5V5.088a2.544,2.544,0,1,1,5.088,0V16.826a4.923,4.923,0,0,1,1.7,3.524A4.244,4.244,0,0,1,6.783,24.59Zm3.392-4.24a3.392,3.392,0,1,1-5.088-2.937V5.088a1.7,1.7,0,1,1,3.392,0V17.413A3.39,3.39,0,0,1,10.175,20.35Z"
                    transform="translate(27.134) rotate(90)"/>
            </svg>
            <svg
                className={cn('hud-player-state-sick__element', store.playerState.sick.amnesia ? 'hud-player-state-sick__element_active' : 'hud-player-state-sick__element_disabled')}
                xmlns="http://www.w3.org/2000/svg" width="21.874"
                height="24.608" viewBox="0 0 21.874 24.608">
                <path
                    d="M8.886,0a2.726,2.726,0,0,0-2.64,2.059c-.034,0-.06-.009-.094-.009A2.737,2.737,0,0,0,3.418,4.785a2.52,2.52,0,0,0,.073.6,3.388,3.388,0,0,0-1.769,4.652,3.405,3.405,0,0,0,.389,6.109,3.131,3.131,0,0,0-.06.6,3.074,3.074,0,0,0,3.076,3.076,2.9,2.9,0,0,0,.513-.051,3.069,3.069,0,0,0,5.981-.974V2.734A2.737,2.737,0,0,0,8.886,0ZM24.608,12.988a3.4,3.4,0,0,0-1.722-2.952,3.363,3.363,0,0,0,.355-1.491,3.418,3.418,0,0,0-2.123-3.161,2.709,2.709,0,0,0-2.662-3.332c-.034,0-.064.009-.094.009a2.729,2.729,0,0,0-5.374.675V18.8a3.069,3.069,0,0,0,5.981.974,2.9,2.9,0,0,0,.513.051,3.074,3.074,0,0,0,3.076-3.076,3.131,3.131,0,0,0-.06-.6A3.418,3.418,0,0,0,24.608,12.988Z"
                    transform="translate(21.874) rotate(90)"/>
            </svg>
            <svg
                className={cn('hud-player-state-sick__element', store.playerState.sick.dependence ? 'hud-player-state-sick__element_active' : 'hud-player-state-sick__element_disabled')}
                xmlns="http://www.w3.org/2000/svg" width="27.133"
                height="27.133" viewBox="0 0 27.133 27.133">
                <g transform="translate(27.133) rotate(90)">
                    <path
                        d="M26.863,19.862a13.743,13.743,0,0,0-6.512-1.779c-.366,0-.729.015-1.088.037a17.736,17.736,0,0,0,2.45-1.584,18.271,18.271,0,0,0,5.393-7.893A.567.567,0,0,0,27,8.1a.579.579,0,0,0-.515-.194,15.69,15.69,0,0,0-7.529,3.831,24.3,24.3,0,0,0-2.57,2.771,17.533,17.533,0,0,0,.573-4.346A19.872,19.872,0,0,0,14.04.239a.587.587,0,0,0-.945,0,19.871,19.871,0,0,0-2.919,9.926,17.533,17.533,0,0,0,.573,4.346,24.291,24.291,0,0,0-2.57-2.771A15.69,15.69,0,0,0,.65,7.908.583.583,0,0,0,.135,8.1a.567.567,0,0,0-.106.54,18.271,18.271,0,0,0,5.393,7.893,17.741,17.741,0,0,0,2.45,1.584c-.359-.022-.722-.037-1.088-.037A13.742,13.742,0,0,0,.272,19.862a.566.566,0,0,0,0,.968,13.95,13.95,0,0,0,6.509,1.777,10.108,10.108,0,0,0,2.286-.283A4.956,4.956,0,0,0,7.915,25.46.565.565,0,0,0,8.48,26a.574.574,0,0,0,.161-.023A8.552,8.552,0,0,0,12.3,23.543a8.285,8.285,0,0,0,.7-.952v3.976a.565.565,0,1,0,1.131,0V22.591a8.279,8.279,0,0,0,.7.952,8.553,8.553,0,0,0,3.658,2.435.574.574,0,0,0,.161.023.565.565,0,0,0,.565-.541,4.955,4.955,0,0,0-1.159-3.141,10.014,10.014,0,0,0,2.29.289,13.742,13.742,0,0,0,6.512-1.779.566.566,0,0,0,0-.967Z"
                        transform="translate(-0.001 0)"/>
                </g>
            </svg>
            <svg
                className={cn('hud-player-state-sick__element', store.playerState.sick.poisoning ? 'hud-player-state-sick__element_active' : 'hud-player-state-sick__element_disabled')}
                xmlns="http://www.w3.org/2000/svg" width="29.837"
                height="18.093" viewBox="0 0 29.837 18.093">
                <path
                    d="M-2731.722-8116.9v-6.473a1.733,1.733,0,0,1-1.276.557,1.736,1.736,0,0,1-1.276-.557v3.689a1.74,1.74,0,0,1-1.739,1.74,1.74,1.74,0,0,1-1.74-1.74v-8.544a5.251,5.251,0,0,1-1.709-1.144,5.222,5.222,0,0,1-1.538-3.714v-2.866a8.991,8.991,0,0,1,.711-3.521,9.019,9.019,0,0,1,1.939-2.875,9.01,9.01,0,0,1,2.875-1.938,8.979,8.979,0,0,1,3.521-.711,8.982,8.982,0,0,1,3.521.711,9.018,9.018,0,0,1,2.875,1.938,9.019,9.019,0,0,1,1.939,2.875,8.991,8.991,0,0,1,.711,3.521v2.866a5.219,5.219,0,0,1-1.539,3.714,5.277,5.277,0,0,1-1.477,1.042v8.414a1.739,1.739,0,0,1-1.74,1.74,1.742,1.742,0,0,1-.58-.1v1.375a1.74,1.74,0,0,1-1.739,1.74A1.739,1.739,0,0,1-2731.722-8116.9Zm6.727-12.99v-.17a2.849,2.849,0,0,0-2.846-2.846h-7.994a2.849,2.849,0,0,0-2.845,2.846v.17h.927v-1.74h11.83v1.74Z"
                    transform="translate(-8115.162 2741) rotate(90)"/>
            </svg>
        </div>
        <div className='hud-player-state-main'>
            <div className='hud-player-state-main-health'>
                <div className='hud-player-state-main-health__top'>
                    <img src={armour} alt='#'/>
                    <div className='hud-player-state-main-health__top_after'
                         style={{width: `${store.playerState.armour}%`, backgroundColor: '#7085FF'}}/>
                </div>
                <div className='hud-player-state-main-health__bottom'>
                    <div
                        className={cn('hud-player-state-main-health-healing-effect', isHealing ? 'hud-player-state-main-health-healing-effect_active' : null)}>
                        <img
                            className='hud-player-state-main-health-healing-effect__element hud-player-state-main-health-healing-effect__element_first'
                            src={healingEffectIcon} alt='#'/>
                        <img
                            className='hud-player-state-main-health-healing-effect__element hud-player-state-main-health-healing-effect__element_second'
                            src={healingEffectIcon} alt='#'/>
                        <img
                            className='hud-player-state-main-health-healing-effect__element hud-player-state-main-health-healing-effect__element_third'
                            src={healingEffectIcon} alt='#'/>
                        <img
                            className='hud-player-state-main-health-healing-effect__element hud-player-state-main-health-healing-effect__element_fourth'
                            src={healingEffectIcon} alt='#'/>
                    </div>
                    <img src={hp} alt='#'/>
                    <div className='hud-player-state-main-health__bottom_after'
                         style={{width: `${store.playerState.hp}%`, backgroundColor: '#B4F191'}}/>
                </div>
            </div>
            <div className='hud-player-state-main-hunger'>
                <div className='hud-player-state-main-hunger__top'>
                    <img src={hunger} alt='#' style={isInCar ? {opacity: '0'} : {opacity: '1'}}/>
                    <div className='hud-player-state-main-hunger__top_after'
                         style={{width: `${store.playerState.hunger}%`, backgroundColor: '#FF9770'}}/>
                </div>
                <div className='hud-player-state-main-hunger__bottom'>
                    <img src={thirst} alt='#' style={isInCar ? {opacity: '0'} : {opacity: '1'}}/>
                    <div className='hud-player-state-main-hunger__bottom_after'
                         style={{width: `${store.playerState.thirst}%`, backgroundColor: '#91C1F1'}}/>
                </div>
            </div>
            <div className='hud-player-state-main-engine' style={isInCar ? {opacity: '1'} : {opacity: '0'}}>
                <div className='hud-player-state-main-engine__bar'>
                    <img src={engine} alt='#'/>
                    <div className='hud-player-state-main-engine__bar_after'
                         style={{width: `${store.carState.engine}%`, backgroundColor: '#46A4D6'}}/>
                </div>
            </div>
        </div>
    </div>
}

export default observer(HUDPlayerState);