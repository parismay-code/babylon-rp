import * as React from 'react'
import {observer} from "mobx-react-lite";

import BankWithdrawHistory from "./components/BankWithdrawHistory";

import {regExp} from "utils/regExp";

import './BankWithdraw.scss';

const BankWithdraw = ({store, player}) => {
    const balance = React.useMemo(() =>
        `$ ${String(player.money.card).replace(regExp.money, '$1 ')}`, [player.money.card]);

    const input = React.useRef(null);

    return <div className='bank-withdraw'>
        <div className='bank-withdraw-header'>
            <div className='bank-withdraw-header-info'>
                <div className='bank-withdraw-header-info-balance'>
                    <div className='bank-withdraw-header-info-balance__title'>Баланс</div>
                    <div className='bank-withdraw-header-info-balance__subtitle'>{balance}</div>
                </div>
                <div className='bank-withdraw-header-info-card'>
                    <div className='bank-withdraw-header-info-card__title'>{player.bank.name} <b>{player.bank.type}</b></div>
                    <div className='bank-withdraw-header-info-card__subtitle'># {player.bank.account}</div>
                </div>
            </div>
            <div className='bank-withdraw-header-form'>
                <div className='bank-withdraw-header-form__description'>
                    Введите сумму, которую <br/>хотите обналичить
                </div>
                <div className='bank-withdraw-header-form-input'>
                    <input className='bank-withdraw-header-form-input__count' type='number' name='n_withdrawCount' placeholder='Сумма' ref={input}/>
                    <input className='bank-withdraw-header-form-input__submit' type='submit' name='n_withdrawSubmit' value='Снять' onClick={() => window.alt.emit('client::bank:withdraw', input.current.value)}/>
                </div>
            </div>
        </div>
        <BankWithdrawHistory store={store}/>
    </div>
}

export default observer(BankWithdraw);