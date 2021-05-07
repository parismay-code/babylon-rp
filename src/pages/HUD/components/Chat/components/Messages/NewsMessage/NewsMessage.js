import * as React from 'react';
import {observer} from "mobx-react-lite";

import news from 'assets/images/chat/news.svg';

import './NewsMessage.scss';

const NewsMessage = ({ data }) => {
    return <div className='news-message'>
        <div className='news-message-before'>
            <img className='news-message-before__icon' src={news} alt='#'/>
        </div>
        <div className='news-message-text'>
            [Новостной канал] { data.rank } { data.nickname } ({ data.id }): { data.text }
        </div>
    </div>
}

export default observer(NewsMessage);