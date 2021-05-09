import * as React from 'react';
import {observer} from "mobx-react-lite";
import cn from 'classnames';

import HUDMicSpeaker from "../HUDMicSpeaker";

import './HUDMic.scss';

const HUDMic = ({store, player}) => {
    const [isMicrophoneActive, toggleMicrophone] = React.useState(false);
    const [isRadioSetActive, toggleRadioSet] = React.useState(false);

    React.useEffect(() => {
        window.alt.on('cef::hud:toggleMicrophone', (bool) => toggleMicrophone(bool));
        window.alt.on('cef::hud:toggleRadioSet', (bool) => toggleRadioSet(bool));
        window.alt.on('cef::hud:setNewSpeaker', (obj) => store.fetchSpeaker(obj));
        window.alt.on('cef::hud:removeSpeaker', (id) => store.removeSpeaker(id));
    }, [store]);

    return <div className='hud-mic'>
        {player.isRadioSet && <div className='hud-mic-speakers'>
            {store.speakers.map((el, key) => {
                return <HUDMicSpeaker
                    key={key}
                    nickname={el.nickname}
                    rank={el.rank}
                    id={el.id}
                />
            })}
        </div>}
        <div className='hud-mic-state'>
            <div
                style={!player.isRadioSet ? {marginLeft: '3vw'} : null}
                className={cn('hud-mic-state-microphone', !isMicrophoneActive && 'hud-mic-state-microphone_disabled')}
            >
                <div className='hud-mic-state-microphone__hotkey'>N</div>
                <svg className='hud-mic-state-microphone__image' xmlns="http://www.w3.org/2000/svg" width="25.231"
                     height="36.699" viewBox="0 0 25.231 36.699">
                    <path
                        d="M24.084,13.762H22.937a1.147,1.147,0,0,0-1.147,1.147V18.35A9.185,9.185,0,0,1,11.7,27.48a9.453,9.453,0,0,1-8.258-9.539V14.909a1.147,1.147,0,0,0-1.147-1.147H1.147A1.147,1.147,0,0,0,0,14.909v2.879c0,6.425,4.585,12.153,10.9,13.023v2.448H6.881a1.147,1.147,0,0,0-1.147,1.147v1.147A1.147,1.147,0,0,0,6.881,36.7H18.35A1.147,1.147,0,0,0,19.5,35.552V34.405a1.147,1.147,0,0,0-1.147-1.147H14.336V30.838a12.628,12.628,0,0,0,10.9-12.488V14.909A1.147,1.147,0,0,0,24.084,13.762ZM12.615,25.231A6.881,6.881,0,0,0,19.5,18.35H13.38c-.422,0-.765-.257-.765-.573V16.629c0-.317.343-.573.765-.573H19.5V13.762H13.38c-.422,0-.765-.257-.765-.573V12.042c0-.317.343-.573.765-.573H19.5V9.175H13.38c-.422,0-.765-.257-.765-.573V7.455c0-.317.343-.573.765-.573H19.5a6.881,6.881,0,1,0-13.762,0V18.35A6.881,6.881,0,0,0,12.615,25.231Z"
                        fill={isMicrophoneActive ? '#B4F191' : '#8f8e92'}
                    />
                </svg>
            </div>
            {player.isRadioSet &&
            <div className={cn('hud-mic-state-radio-set', !isRadioSetActive && 'hud-mic-state-radio-set_disabled')}>
                <div className='hud-mic-state-radio-set__hotkey'>N</div>
                <svg className='hud-mic-state-radio-set__image' xmlns="http://www.w3.org/2000/svg" width="42"
                     height="24" viewBox="0 0 42 24">
                    <g transform="translate(-628.3 -939)">
                        <g transform="translate(635.8 933)">
                            <path d="M25.5,18a12,12,0,1,1-12-12A12,12,0,0,1,25.5,18Z"
                                  fill={isRadioSetActive ? '#B4F191' : '#8f8e92'}/>
                            <path d="M25.5,6.39V9.525a8.985,8.985,0,0,1,0,16.95V29.61a11.988,11.988,0,0,0,0-23.22Z"
                                  fill={isRadioSetActive ? '#B4F191' : '#8f8e92'}/>
                        </g>
                        <g transform="translate(662.8 969) rotate(180)">
                            <path d="M25.5,6.39V9.525a8.985,8.985,0,0,1,0,16.95V29.61a11.988,11.988,0,0,0,0-23.22Z"
                                  fill={isRadioSetActive ? '#B4F191' : '#8f8e92'}/>
                        </g>
                    </g>
                </svg>
            </div>}
        </div>
    </div>
}

export default observer(HUDMic);