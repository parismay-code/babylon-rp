import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTransferHistory from "./components/BankTransferHistory";

import {regExp} from "utils/regExp";

import './BankTransfer.scss';

const BankTransfer = ({store, player}) => {
    const balance = React.useMemo(() =>
        `$ ${String(player.playerState.bank.type ? player.playerState.money.card : player.playerState.money.cash).replace(regExp.money, '$1 ')}`, [player.playerState.bank.type, player.playerState.money.card,  player.playerState.money.cash]);

    const account = React.useRef(null);
    const value = React.useRef(null);

    return <div className='bank-transfer'>
        <div className='bank-transfer-header'>
            <div className='bank-transfer-header-info'>
                <div className='bank-transfer-header-info-balance'>
                    <div className='bank-transfer-header-info-balance__title'>Баланс</div>
                    <div className='bank-transfer-header-info-balance__subtitle'>{balance}</div>
                </div>
                <div className='bank-transfer-header-info-card'>
                    <div className='bank-transfer-header-info-card__title'>{player.playerState.bank.name} <b>{player.playerState.bank.type}</b></div>
                    <div className='bank-transfer-header-info-card__subtitle'># {player.playerState.bank.account}</div>
                </div>
            </div>
            <div className='bank-transfer-header-form'>
                <div className='bank-transfer-header-form__description'>
                    Введите номер счета для <br/>перевода
                </div>
                <div className='bank-transfer-header-form-input'>
                    <input className='bank-transfer-header-form-input__count' type='number' name='n_withdrawCount' placeholder='Счет' ref={account}/>
                </div>
            </div>
            <div className='bank-transfer-header-form'>
                <div className='bank-transfer-header-form__description'>
                    Введите сумму, которую <br/>хотите перевести
                </div>
                <div className='bank-transfer-header-form-input'>
                    <input className='bank-transfer-header-form-input__count' type='number' name='n_withdrawCount' placeholder='Сумма' ref={value}/>
                    <input className='bank-transfer-header-form-input__submit' type='submit' name='n_withdrawSubmit' value='Перевести' onClick={() => window.alt.emit('client::bank:transfer', account.current.value, value.current.value)}/>
                </div>
            </div>
        </div>
        <BankTransferHistory store={store}/>
    </div>
}

export default observer(BankTransfer);