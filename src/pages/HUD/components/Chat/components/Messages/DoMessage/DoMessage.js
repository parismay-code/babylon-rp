import * as React from 'react';
import {observer} from "mobx-react-lite";

import './DoMessage.scss';

const DoMessage = ({ data }) => {
    return <div className='do-message'>
        <div className='do-message-player'>
            <span className='do-message-player__nickname'>@ { data.nickname } </span>
            <span className='do-message-player__id'>({ data.id })</span>
        </div>
        <div className='do-message__text'>{ data.text }</div>
    </div>
}

export default observer(DoMessage);