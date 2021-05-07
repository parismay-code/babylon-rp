import * as React from 'react';
import {observer} from "mobx-react-lite";

import {regExp} from "utils/regExp";

import './BankTopUpHistory.scss';

const BankTopUpHistory = ({store}) => {
    return <div className='bank-top-up-history'>
        <div className='bank-top-up-history__title'>История</div>
        <div className='bank-top-up-history-header'>
            <div className='bank-top-up-history-header__operation'>Операция</div>
            <div className='bank-top-up-history-header__date'>Дата</div>
            <div className='bank-top-up-history-header__count'>Сумма</div>
        </div>
        <div className='bank-top-up-history-content'>
            {store.topUpHistory.map((el, key) => {
                const count = `$ ${String(el.count).replace(regExp.money, '$1 ')}`;

                return <div key={key} className='bank-top-up-history-content-element'>
                    <div className='bank-top-up-history-content-element__operation'>Пополнение</div>
                    <div className='bank-top-up-history-content-element__date'>{el.date}</div>
                    <div className='bank-top-up-history-content-element__count'>{count}</div>
                </div>
            })}
        </div>
    </div>
}

export default observer(BankTopUpHistory);