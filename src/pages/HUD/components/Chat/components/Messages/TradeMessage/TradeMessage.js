import * as React from 'react';
import {observer} from "mobx-react-lite";

import car from 'assets/images/chat/car.svg';
import house from 'assets/images/chat/house.svg';
import business from 'assets/images/chat/business.svg';
import discount from 'assets/images/chat/discount.svg';
import other from 'assets/images/chat/other.svg';
import service from 'assets/images/chat/service.svg';
import dating from 'assets/images/chat/dating.svg';
import phone from 'assets/images/chat/phone.svg';
import message from 'assets/images/chat/message.svg';

import './TradeMessage.scss';

const TradeMessage = ({data, isCursorActive}) => {
    const getIcon = React.useMemo(() => {
        switch (data.category) {
            case 'car':
                return car;
            case 'house':
                return house;
            case 'business':
                return business;
            case 'discount':
                return discount;
            case 'other':
                return other;
            case 'service':
                return service;
            case 'dating':
                return dating;
            default:
                return null;
        }
    }, [data.category]);

    const getColor = React.useMemo(() => {
        switch (data.category) {
            case 'car':
                return '#ADFF6E';
            case 'house':
                return '#FFB950';
            case 'business':
                return '#5073FF';
            case 'discount':
                return '#FF7127';
            case 'other':
                return '#AAB6EF';
            case 'service':
                return '#6EFFFF';
            case 'dating':
                return '#FF5151';
            default:
                return null;
        }
    }, [data.category]);

    return <div className='trade-message'>
        <div className='trade-message__before'
             style={{backgroundColor: getColor, filter: `drop-shadow(-.2em 0 .2em ${getColor})`}}/>
        <div className='trade-message-text'>
            <img className='trade-message-text__icon' src={getIcon} alt='#'/>
            <div className='trade-message-text__content'>{data.text}</div>
        </div>
        <div
            className='trade-message-player'
            style={isCursorActive ? {pointerEvents: 'auto'} : {pointerEvents: 'none'}}
        >
            <div className='trade-message-player__nickname'>@ {data.nickname}</div>
            <div
                className='trade-message-player-phone'
                onClick={() => {
                    window.alt.emit('client::chat:callTrader', data.id);
                }}
            >
                <span className='trade-message-player-phone__text'>позвонить</span>
                <img className='trade-message-player-phone__icon' src={phone} alt='#'/>
            </div>
            <div
                className='trade-message-player-message'
                onClick={() => {
                    window.alt.emit('client::chat:messageTrader', data.id);
                }}
            >
                <span className='trade-message-player-message__text'>написать</span>
                <img className='trade-message-player-message__icon' src={message} alt='#'/>
            </div>
        </div>
    </div>
}

export default observer(TradeMessage);