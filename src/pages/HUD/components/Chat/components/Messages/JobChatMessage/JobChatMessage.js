import * as React from 'react';
import {observer} from "mobx-react-lite";

import taxi from 'assets/images/chat/taxi.svg';
import electric from 'assets/images/chat/electric.svg';
import truckDriver from 'assets/images/chat/truckDriver.svg';
import woodsman from 'assets/images/chat/woodsman.svg';
import career from 'assets/images/chat/career.svg';
import farmer from 'assets/images/chat/farmer.svg';
import collector from 'assets/images/chat/collector.svg';
import postal from 'assets/images/chat/postal.svg';

import './JobChatMessage.scss';
import family from "assets/images/chat/family.svg";

const JobChatMessage = ({ data }) => {
    const getIcon = React.useMemo(() => {
        switch (data.job) {
            case 'taxi': return taxi;
            case 'electric': return electric;
            case 'truckDriver': return truckDriver;
            case 'woodsman': return woodsman;
            case 'career': return career;
            case 'farmer': return farmer;
            case 'collector': return collector;
            case 'postal': return postal;
            default: break;
        }
    }, [data.job]);

    return <div className='job-chat-message'>
        <img className='job-chat-message__icon' src={getIcon} alt='#'/>
        <div className='job-chat-message-content'>
            <div className='job-chat-message-content__text'>
                { data.text }
            </div>
            <div className='job-chat-message-content-player'>
                <span className='job-chat-message-content-player__nickname'>@ { data.nickname } </span>
                <span className='job-chat-message-content-player__id'>({ data.id })</span>
            </div>
        </div>
    </div>
}

export default observer(JobChatMessage);