import * as React from 'react';
import {observer} from "mobx-react-lite";

import adminChat from 'assets/images/chat/adminChat.svg';

import './AdminChatMessage.scss';

const AdminChatMessage = ({ data, nrp }) => {
    return <div className='admin-chat-message'>
        <img className='admin-chat-message__icon' src={adminChat} alt='#'/>
        <div className='admin-chat-message__text'>{ data.text }</div>
        <div className='admin-chat-message-player'>
            <span className='admin-chat-message-player__nickname'>@ { data.nickname } </span>
            <span className='admin-chat-message-player__id'>({ data.id })</span>
        </div>
        <div className='admin-chat-message-before'>
            <div className='admin-chat-message-before__column'/>
            <div className='admin-chat-message-before__column'/>
            <div className='admin-chat-message-before__column'/>
        </div>
    </div>
}

export default observer(AdminChatMessage);