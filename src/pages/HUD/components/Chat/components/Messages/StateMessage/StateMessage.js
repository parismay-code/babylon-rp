import * as React from 'react';
import {observer} from "mobx-react-lite";

import state from 'assets/images/chat/state.svg';

import './StateMessage.scss';

const StateMessage = ({ data }) => {
    return <div className='state-message'>
        <div className='state-message-before'>
            <img className='state-message-before__icon' src={state} alt='#'/>
        </div>
        <div className='state-message-text'>
            [Государственная волна] { data.rank } { data.nickname } ({ data.id }): { data.text }
        </div>
    </div>
}

export default observer(StateMessage);