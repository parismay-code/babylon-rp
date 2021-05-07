import * as React from 'react'
import {observer} from "mobx-react-lite";

import BankWithdrawHistory from "./components/BankWithdrawHistory";

import {regExp} from "utils/regExp";

import './BankWithdraw.scss';

const BankWithdraw = ({store}) => {
    const balance = React.useMemo(() =>
        `$ ${String(store.accountState.balance).replace(regExp.money, '$1 ')}`, [store.accountState.balance]);

    return <div className='bank-withdraw'>
        <div className='bank-withdraw-header'>
            <div className='bank-withdraw-header-info'>
                <div className='bank-withdraw-header-info-balance'>
                    <div className='bank-withdraw-header-info-balance__title'>Баланс</div>
                    <div className='bank-withdraw-header-info-balance__subtitle'>{balance}</div>
                </div>
                <div className='bank-withdraw-header-info-card'>
                    <div className='bank-withdraw-header-info-card__title'>{store.accountState.bank} <b>{store.accountState.accountType}</b></div>
                    <div className='bank-withdraw-header-info-card__subtitle'># {store.accountState.accountNumber}</div>
                </div>
            </div>
            <div className='bank-withdraw-header-form'>
                <div className='bank-withdraw-header-form__description'>
                    Введите сумму, которую <br/>хотите обналичить
                </div>
                <div className='bank-withdraw-header-form-input'>
                    <input className='bank-withdraw-header-form-input__count' type='number' name='n_withdrawCount' placeholder='Сумма'/>
                    <input className='bank-withdraw-header-form-input__submit' type='submit' name='n_withdrawSubmit' value='Снять'/>
                </div>
            </div>
        </div>
        <BankWithdrawHistory store={store}/>
    </div>
}

export default observer(BankWithdraw);