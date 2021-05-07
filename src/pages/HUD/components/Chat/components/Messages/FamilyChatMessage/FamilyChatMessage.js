import * as React from 'react';
import {observer} from "mobx-react-lite";

import family from 'assets/images/chat/family.svg';

import './FamilyChatMessage.scss';

const FamilyChatMessage = ({ data, familyIcon }) => {
    return <div className='family-chat-message'>
        <img className='family-chat-message__icon' src={familyIcon ? familyIcon : family} alt='#'/>
        <div className='family-chat-message-content'>
            <div className='family-chat-message-content__text'>
                { data.text }
            </div>
            <div className='family-chat-message-content-player'>
                <span className='family-chat-message-content-player__nickname'>@ { data.nickname } </span>
                <span className='family-chat-message-content-player__id'>({ data.id })</span>
            </div>
        </div>
    </div>
}

export default observer(FamilyChatMessage);