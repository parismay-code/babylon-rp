import * as React from 'react';
import {observer} from "mobx-react-lite";

import sheriff from 'assets/images/chat/sheriff.svg';
import lspd from 'assets/images/chat/lspd.svg';
import fib from 'assets/images/chat/fib.svg';
import sang from 'assets/images/chat/sang.svg';
import ems from 'assets/images/chat/ems.svg';
import gov from 'assets/images/chat/gov.svg';

import './StateFracMessage.scss';

const StateFracMessage = ({ data }) => {
    const getIcon = React.useMemo(() => {
        switch (data.fraction.name) {
            case 'sahp': return sheriff;
            case 'lspd': return lspd;
            case 'fib': return fib;
            case 'sang': return sang;
            case 'ems': return ems;
            case 'gov': return gov;
            default: break;
        }
    }, [data.fraction.name]);

    return <div className='state-frac-message'>
        <div className='state-frac-message-before'>
            <img className='state-frac-message-before__icon' src={getIcon} alt='#' style={data.fraction.name === 'fib' ? {transform: 'translateY(-5%)'} : null}/>
            <div className='state-frac-message-before__column'/>
            <div className='state-frac-message-before__column'/>
        </div>
        <div className='state-frac-message__text'>
            { data.text }
        </div>
        <div className='state-frac-message-player'>
            <span className='state-frac-message-player__nickname'>@ { data.nickname } </span>
            <span className='state-frac-message-player__id'>({ data.id })</span>
        </div>
    </div>
}

export default observer(StateFracMessage);