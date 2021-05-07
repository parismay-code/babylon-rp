import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTopUpHistory from "./components/BankTopUpHistory";

import {regExp} from "utils/regExp";

import './BankTopUp.scss';

const BankTopUp = ({store}) => {
    const balance = React.useMemo(() =>
        `$ ${String(store.accountState.balance).replace(regExp.money, '$1 ')}`, [store.accountState.balance]);

    return <div className='bank-top-up'>
        <div className='bank-top-up-header'>
            <div className='bank-top-up-header-info'>
                <div className='bank-top-up-header-info-balance'>
                    <div className='bank-top-up-header-info-balance__title'>Баланс</div>
                    <div className='bank-top-up-header-info-balance__subtitle'>{balance}</div>
                </div>
                <div className='bank-top-up-header-info-card'>
                    <div className='bank-top-up-header-info-card__title'>{store.accountState.bank} <b>{store.accountState.accountType}</b></div>
                    <div className='bank-top-up-header-info-card__subtitle'># {store.accountState.accountNumber}</div>
                </div>
            </div>
            <div className='bank-top-up-header-form'>
                <div className='bank-top-up-header-form__description'>
                    Введите сумму, на которую <br/>хотите пополнить счет
                </div>
                <div className='bank-top-up-header-form-input'>
                    <input className='bank-top-up-header-form-input__count' type='number' name='n_topUpCount' placeholder='Сумма'/>
                    <input className='bank-top-up-header-form-input__submit' type='submit' name='n_topUpSubmit' value='Пополнить'/>
                </div>
            </div>
        </div>
        <BankTopUpHistory store={store}/>
    </div>
}

export default observer(BankTopUp);