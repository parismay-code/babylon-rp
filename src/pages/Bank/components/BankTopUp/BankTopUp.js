import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTopUpHistory from "./components/BankTopUpHistory";

import {regExp} from "utils/regExp";

import './BankTopUp.scss';

const BankTopUp = ({store, player}) => {
    const input = React.useRef(null);

    return <div className='bank-top-up'>
        <div className='bank-top-up-header'>
            <div className='bank-top-up-header-info'>
                <div className='bank-top-up-header-info-balance'>
                    <div className='bank-top-up-header-info-balance__title'>Баланс</div>
                    <div className='bank-top-up-header-info-balance__subtitle'>{`$ ${String(player.playerState.money.card).replace(regExp.money, '$1 ')}`}</div>
                </div>
                <div className='bank-top-up-header-info-card'>
                    <div className='bank-top-up-header-info-card__title'>{player.playerState.bank.name} <b>{player.playerState.bank.type}</b></div>
                    <div className='bank-top-up-header-info-card__subtitle'># {player.playerState.bank.account}</div>
                </div>
            </div>
            <div className='bank-top-up-header-form'>
                <div className='bank-top-up-header-form__description'>
                    Введите сумму, на которую <br/>хотите пополнить счет
                </div>
                <div className='bank-top-up-header-form-input'>
                    <input className='bank-top-up-header-form-input__count' type='number' name='n_topUpCount' placeholder='Сумма' ref={input}/>
                    <input className='bank-top-up-header-form-input__submit' type='submit' name='n_topUpSubmit' value='Пополнить' onClick={() => window.alt.emit('client::bank:topUp', input.current.value)}/>
                </div>
            </div>
        </div>
        <BankTopUpHistory store={store}/>
    </div>
}

export default observer(BankTopUp);