import * as React from 'react';
import {observer} from "mobx-react-lite";

import whitePin from 'assets/images/bank/whitePin.svg';

import {regExp} from "utils/regExp";

import './BankChangePin.scss';

const BankChangePin = ({store}) => {
    const balance = React.useMemo(() =>
        `$ ${String(store.accountState.balance).replace(regExp.money, '$1 ')}`, [store.accountState.balance]);

    const currentPin = React.useRef(null),
        newPin = React.useRef(null),
        rePin = React.useRef(null);

    const changePin = React.useCallback(() => {
        window.alt.emit('client::bank:changePin', currentPin.current.value, newPin.current.value, rePin.current.value);
    }, [currentPin, newPin, rePin]);

    return <div className='bank-change-pin'>
        <div className='bank-change-pin-content'>
            <div className='bank-change-pin-content-title'>
                <img className='bank-change-pin-content-title__image' src={whitePin} alt='#'/>
                <span className='bank-change-pin-content-title__text'>Сменить PIN</span>
            </div>
            <div className='bank-change-pin-content-info'>
                <div className='bank-change-pin-content-info-balance'>
                    <div className='bank-change-pin-content-info-balance__title'>Баланс</div>
                    <div className='bank-change-pin-content-info-balance__value'>{balance}</div>
                </div>
                <div className='bank-change-pin-content-info-card'>
                    <div className='bank-change-pin-content-info-card__type'>{store.accountState.bank}
                        <b>{store.accountState.accountType}</b></div>
                    <div
                        className='bank-change-pin-content-info-card__number'># {store.accountState.accountNumber}</div>
                </div>
            </div>
            <div className='bank-change-pin-content-form'>
                <input ref={currentPin} className='bank-change-pin-content-form__current-pin' type='password'
                       name='n_bankChangePinCurrent' placeholder='Введите существующий PIN'/>
                <input ref={newPin} className='bank-change-pin-content-form__new-pin' type='password'
                       name='n_bankChangePinNew' placeholder='Введите новый PIN'/>
                <input ref={rePin} className='bank-change-pin-content-form__repeat-pin' type='password'
                       name='n_bankChangePinRepeat' placeholder='Подтвердите PIN'/>
            </div>
        </div>
        <div className='bank-change-pin-submit' onClick={() => changePin()}>
            <div className='bank-change-pin-submit__fill'/>
            <span className='bank-change-pin-submit__title'>Сменить</span>
        </div>
    </div>
}

export default observer(BankChangePin);