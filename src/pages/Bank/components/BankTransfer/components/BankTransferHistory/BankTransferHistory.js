import * as React from 'react';
import {observer} from "mobx-react-lite";

import {regExp} from "utils/regExp";

import './BankTransferHistory.scss';

const BankTransferHistory = ({store}) => {
    return <div className='bank-transfer-history'>
        <div className='bank-transfer-history__title'>История</div>
        <div className='bank-transfer-history-header'>
            <div className='bank-transfer-history-header__operation'>Операция</div>
            <div className='bank-transfer-history-header__date'>Дата</div>
            <div className='bank-transfer-history-header__account'>Счет</div>
            <div className='bank-transfer-history-header__count'>Сумма</div>
        </div>
        <div className='bank-transfer-history-content'>
            {store.transferHistory.map((el, key) => {
                const count = `$ ${String(el.count).replace(regExp.money, '$1 ')}`;

                return <div key={key} className='bank-transfer-history-content-element'>
                    <div className='bank-transfer-history-content-element__operation'>Перевод</div>
                    <div className='bank-transfer-history-content-element__date'>{el.date}</div>
                    <div className='bank-transfer-history-content-element__account'># {el.account}</div>
                    <div className='bank-transfer-history-content-element__count'>{count}</div>
                </div>
            })}
        </div>
    </div>
}

export default observer(BankTransferHistory);