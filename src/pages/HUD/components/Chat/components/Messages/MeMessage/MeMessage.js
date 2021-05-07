import * as React from 'react';
import {observer} from "mobx-react-lite";

import './MeMessage.scss';

const MeMessage = ({ data }) => {
    return <div className='me-message'>@ { data.nickname } ({ data.id }) { data.text }</div>
}

export default observer(MeMessage);