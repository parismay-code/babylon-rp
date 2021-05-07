import * as React from 'react';
import {observer} from "mobx-react-lite";

import './DefaultMessage.scss';

const DefaultMessage = ({ data, nrp }) => {
    return <div className='default-message'>
        <div className='default-message__text'>
            { nrp ? `(( ${data.text} ))` : data.text }
        </div>
        <div className='default-message-player'>
            <span className='default-message-player__nickname'>@ { data.nickname } </span>
            <span className='default-message-player__id'>({ data.id })</span>
        </div>
        <div className='default-message-before'>
            <div className='default-message-before__column'/>
            <div className='default-message-before__column'/>
            <div className='default-message-before__column'/>
        </div>
    </div>
}

export default observer(DefaultMessage);