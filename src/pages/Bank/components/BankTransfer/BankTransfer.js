import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTransferHistory from "./components/BankTransferHistory";

import {regExp} from "utils/regExp";

import './BankTransfer.scss';

const BankTransfer = ({store}) => {
    const balance = React.useMemo(() =>
        `$ ${String(store.accountState.balance ? store.accountState.balance : store.accountState.cash).replace(regExp.money, '$1 ')}`, [store.accountState.balance, store.accountState.cash]);

    return <div className='bank-transfer'>
        <div className='bank-transfer-header'>
            <div className='bank-transfer-header-info'>
                <div className='bank-transfer-header-info-balance'>
                    <div className='bank-transfer-header-info-balance__title'>Баланс</div>
                    <div className='bank-transfer-header-info-balance__subtitle'>{balance}</div>
                </div>
                <div className='bank-transfer-header-info-card'>
                    <div className='bank-transfer-header-info-card__title'>{store.accountState.bank} <b>{store.accountState.accountType}</b></div>
                    <div className='bank-transfer-header-info-card__subtitle'># {store.accountState.accountNumber}</div>
                </div>
            </div>
            <div className='bank-transfer-header-form'>
                <div className='bank-transfer-header-form__description'>
                    Введите номер счета для <br/>перевода
                </div>
                <div className='bank-transfer-header-form-input'>
                    <input className='bank-transfer-header-form-input__count' type='number' name='n_withdrawCount' placeholder='Счет'/>
                </div>
            </div>
            <div className='bank-transfer-header-form'>
                <div className='bank-transfer-header-form__description'>
                    Введите сумму, которую <br/>хотите перевести
                </div>
                <div className='bank-transfer-header-form-input'>
                    <input className='bank-transfer-header-form-input__count' type='number' name='n_withdrawCount' placeholder='Сумма'/>
                    <input className='bank-transfer-header-form-input__submit' type='submit' name='n_withdrawSubmit' value='Перевести'/>
                </div>
            </div>
        </div>
        <BankTransferHistory store={store}/>
    </div>
}

export default observer(BankTransfer);