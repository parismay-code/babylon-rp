import * as React from 'react';
import {observer} from "mobx-react-lite";

import mara from 'assets/images/chat/mara.svg';
import vagos from 'assets/images/chat/vagos.svg';
import ballas from 'assets/images/chat/ballas.svg';
import families from 'assets/images/chat/families.svg';

import './CrimeFracMessage.scss';

const CrimeFracMessage = ({ data }) => {
    const getIcon = React.useMemo(() => {
        switch (data.fraction.name) {
            case 'mara': return mara;
            case 'vagos': return vagos;
            case 'ballas': return ballas;
            case 'families': return families;
            default: return null;
        }
    }, [data.fraction.name]);

    return <div className='crime-frac-message'>
        <img className='crime-frac-message__icon' src={getIcon} alt='#'/>
        <div className='crime-frac-message-content'>
            <div className='crime-frac-message-content__text'>
                { data.text }
            </div>
            <div className='crime-frac-message-content-player'>
                <span className='crime-frac-message-content-player__nickname'>@ { data.nickname } </span>
                <span className='crime-frac-message-content-player__id'>({ data.id })</span>
            </div>
        </div>
    </div>
}

export default observer(CrimeFracMessage);