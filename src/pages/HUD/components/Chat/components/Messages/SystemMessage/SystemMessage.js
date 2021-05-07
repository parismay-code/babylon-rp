import * as React from 'react';
import {observer} from "mobx-react-lite";

import './SystemMessage.scss';

const SystemMessage = ({ data }) => {
    return <div className='system-message'>
        <div className='system-message__title'>@ {data.nickname ? `${data.nickname} (${data.id})` : 'Server'}</div>
        <div className='system-message__text'>
            {data.text}
        </div>
    </div>
}

export default observer(SystemMessage);