import * as React from 'react';
import {observer} from "mobx-react-lite";

import './TryMessage.scss';

const TryMessage = ({ data }) => {
    return <div className='try-message'>
        <div className='try-message-player'>
            <span className='try-message-player__nickname'>@ { data.nickname } </span>
            <span className='try-message-player__id'>({ data.id })</span>
        </div>
        <div className='try-message-text'>
            {data.result ? <div className='try-message-text__successfully'>Удачно -</div> : <div className='try-message-text__unsuccessfully'>Неудачно -</div>}
            <div className='try-message-text__content'>{ data.text }</div>
        </div>
    </div>
}

export default observer(TryMessage);