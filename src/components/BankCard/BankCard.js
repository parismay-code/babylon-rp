import * as React from 'react';
import {observer} from "mobx-react-lite";

import cardStandard from 'assets/images/bankCards/cardStandard.svg';
import cardGold from 'assets/images/bankCards/cardGold.svg';
import cardPremium from 'assets/images/bankCards/cardPremium.svg';

import './BankCard.scss';

const BankCard = ({data, type, customStyles}) => {
    const cardType = React.useMemo(() => {
        if (type) switch (type) {
                case 'standard': return cardStandard;
                case 'gold': return cardGold;
                case 'premium': return cardPremium;
                default: return;
            }
        else switch (data.playerState.bank.type) {
            case 'standard': return cardStandard;
            case 'gold': return cardGold;
            case 'premium': return cardPremium;
            default: return;
        }
    }, [data.playerState.bank.type, type]);

    const accountNumber = React.useMemo(() => data.playerState.bank.account.split(' '), [data.playerState.bank.account]),
        nickname = React.useMemo(() => data.playerState.nickname.split(' '), [data.playerState.nickname]);

    return <div className='bank-card' style={customStyles}>
        <img className='bank-card__bg' src={cardType} alt='#'/>
        <div className='bank-card-content'>
            <div className='bank-card-content-header'>
                <div className='bank-card-content-header__type'>{type ? type : data.playerState.bank.type}</div>
                <div className='bank-card-content-header__name'>
                    Bank<span>{data.playerState.bank.name}</span>
                </div>
            </div>
            <div className='bank-card-content-info'>
                <div className='bank-card-content-info__account-number'>
                    <span className='bank-card-content-info__account-number_first'>{accountNumber[0]}</span>
                    <span className='bank-card-content-info__account-number_second'>{accountNumber[1]}</span>
                    <span className='bank-card-content-info__account-number_third'>{accountNumber[2]}</span>
                    <span className='bank-card-content-info__account-number_fourth'>{accountNumber[3]}</span>
                </div>
                <div className='bank-card-content-info__create-date'>{data.playerState.bank.createDate}</div>
                <div className='bank-card-content-info__nickname'>
                    <span className='bank-card-content-info__nickname_firstname'>{nickname[0]}</span>
                    <span className='bank-card-content-info__nickname_lastname'>{nickname[1]}</span>
                </div>
            </div>
        </div>
    </div>
}

export default observer(BankCard);