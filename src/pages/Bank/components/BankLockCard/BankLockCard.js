import * as React from 'react';
import {observer} from "mobx-react-lite";

import whiteLock from 'assets/images/bank/whiteLock.svg';

import {regExp} from "utils/regExp";

import './BankLockCard.scss';

const BankLockCard = ({player}) => {
    const balance = React.useMemo(() =>
        `$ ${String(player.money.card).replace(regExp.money, '$1 ')}`, [player.money.card]);

    const accountNumber = React.useRef(null),
        accountPin = React.useRef(null);

    const lockCard = React.useCallback(() => {
        window.alt.emit('client::bank:lockCard', accountNumber.current.value, accountPin.current.value);
    }, [accountNumber, accountPin]);

    return <div className='bank-lock-card'>
        <div className='bank-lock-card-content'>
            <div className='bank-lock-card-content-title'>
                <img className='bank-lock-card-content-title__image' src={whiteLock} alt='#'/>
                <span className='bank-lock-card-content-title__text'>Заблокировать счет</span>
            </div>
            <div className='bank-lock-card-content-info'>
                <div className='bank-lock-card-content-info-balance'>
                    <div className='bank-lock-card-content-info-balance__title'>Баланс</div>
                    <div className='bank-lock-card-content-info-balance__value'>{balance}</div>
                </div>
                <div className='bank-lock-card-content-info-card'>
                    <div className='bank-lock-card-content-info-card__type'>{player.bank.name} <b>{player.bank.type}</b></div>
                    <div className='bank-lock-card-content-info-card__number'># {player.bank.account}</div>
                </div>
            </div>
            <div className='bank-lock-card-content-form'>
                <input ref={accountNumber} className='bank-lock-card-content-form__account-number' type='number'
                       name='n_bankLockNumber' placeholder='Введите номер счета'/>
                <input ref={accountPin} className='bank-lock-card-content-form__account-pin' type='password'
                       name='n_bankLockPin' placeholder='Введите PIN'/>
            </div>
        </div>
        <div className='bank-lock-card-submit' onClick={() => lockCard()}>
            <div className='bank-lock-card-submit__fill'/>
            <span className='bank-lock-card-submit__title'>Заблокировать</span>
        </div>
    </div>
}

export default observer(BankLockCard);