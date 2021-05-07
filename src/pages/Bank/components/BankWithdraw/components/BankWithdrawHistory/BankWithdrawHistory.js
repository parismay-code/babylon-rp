import * as React from 'react';
import {observer} from "mobx-react-lite";

import {regExp} from "utils/regExp";

import './BankWithdrawHistory.scss';

const BankWithdrawHistory = ({store}) => {
    return <div className='bank-withdraw-history'>
        <div className='bank-withdraw-history__title'>История</div>
        <div className='bank-withdraw-history-header'>
            <div className='bank-withdraw-history-header__operation'>Операция</div>
            <div className='bank-withdraw-history-header__date'>Дата</div>
            <div className='bank-withdraw-history-header__count'>Сумма</div>
        </div>
        <div className='bank-withdraw-history-content'>
            {store.withdrawHistory.map((el, key) => {
                const count = `$ ${String(el.count).replace(regExp.money, '$1 ')}`;

                return <div key={key} className='bank-withdraw-history-content-element'>
                    <div className='bank-withdraw-history-content-element__operation'>Снятие</div>
                    <div className='bank-withdraw-history-content-element__date'>{el.date}</div>
                    <div className='bank-withdraw-history-content-element__count'>{count}</div>
                </div>
            })}
        </div>
    </div>
}

export default observer(BankWithdrawHistory);