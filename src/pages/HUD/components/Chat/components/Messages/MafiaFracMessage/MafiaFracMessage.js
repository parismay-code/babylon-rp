import * as React from 'react';
import {observer} from "mobx-react-lite";

import lcn from 'assets/images/chat/lcn.svg';
import russian from 'assets/images/chat/russian.svg';
import yakuza from 'assets/images/chat/yakuza.svg';
import armenian from 'assets/images/chat/armenian.svg';

import './MafiaFracMessage.scss';

const MafiaFracMessage = ({ data }) => {
    const getIcon = React.useMemo(() => {
        switch (data.fraction.name) {
            case 'lcn': return lcn;
            case 'russian': return russian;
            case 'japanese': return yakuza;
            case 'armenian': return armenian;
            default: break;
        }
    }, [data.fraction.name]);

    const getColor = React.useMemo(() => {
        switch (data.fraction.name) {
            case 'lcn': return ['#C373F3', '#623A7A'];
            case 'russian': return ['#AFAFAF', '#585858'];
            case 'yakuza': return ['#FF2C2C', '#801616'];
            case 'armenian': return ['#FFBF95', '#80604B'];
            default: break;
        }
    }, [data.fraction.name]);

    return <div className='mafia-frac-message'>
        <div className='mafia-frac-message-before' style={{background: `linear-gradient(to bottom, ${getColor[0]}, ${getColor[1]}`}}>
            <img className='mafia-frac-message-before__icon' src={getIcon} alt='#'/>
        </div>
        <div className='mafia-frac-message__text'>
            { data.text }
        </div>
        <div className='mafia-frac-message-player'>
            <span className='mafia-frac-message-player__nickname'>@ { data.nickname }</span>
            <span className='mafia-frac-message-player__id'>({ data.id })</span>
        </div>
    </div>
}

export default observer(MafiaFracMessage);