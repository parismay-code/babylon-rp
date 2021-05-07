import * as React from 'react';

import radioSet from 'assets/images/hud/radioSet.svg';

import './HUDMicSpeaker.scss';

const HUDMicSpeaker = ({ rank, nickname, id }) => {
    return <div className='hud-mic-speaker'>
        <img className='hud-mic-speaker__icon' src={radioSet} alt='#'/>
        <div className='hud-mic-speaker-info'>
            <div className='hud-mic-speaker-info__rank'>{rank}</div>
            <div className='hud-mic-speaker-info__nickname'>{`${nickname.firstname} ${nickname.lastname}`}</div>
            <div className='hud-mic-speaker-info__id'>{`ID: ${id}`}</div>
        </div>
    </div>
}

export default React.memo(HUDMicSpeaker);