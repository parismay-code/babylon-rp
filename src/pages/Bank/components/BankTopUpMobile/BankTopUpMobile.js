import * as React from 'react';
import {observer} from "mobx-react-lite";

import './BankTopUpMobile.scss';
import {regExp} from "utils/regExp";

const BankTopUpMobile = ({ player }) => {
    const balance = React.useMemo(() =>
        `$${String(player.phone.balance).replace(regExp.money, '$1 ')}`, [player.phone.balance]);

    const input = React.useRef(null);

    return <div className='bank-top-up-mobile'>
        <div className='bank-top-up-mobile-header'>
            <div className='bank-top-up-mobile-header-title'>
                <span className='bank-top-up-mobile-header-title__operation'>пополнить</span>
                <span className='bank-top-up-mobile-header-title__description'>мобильный телефон</span>
            </div>
            <div className='bank-top-up-mobile-header-price'>
                <span className='bank-top-up-mobile-header-price__count'>$0,5</span>
                <div className='bank-top-up-mobile-header-price-description'>
                    <span className='bank-top-up-mobile-header-price-description__title'>мин.</span>
                    <span className='bank-top-up-mobile-header-price-description__subtitle'>разговора</span>
                </div>
            </div>
            <div className='bank-top-up-mobile-header-balance'>
                <span className='bank-top-up-mobile-header-balance__count'>{balance}</span>
                <span className='bank-top-up-mobile-header-balance__description'>баланс</span>
            </div>
        </div>
        <div className='bank-top-up-mobile__phone'>{player.phone.number}</div>
        <div className='bank-top-up-mobile-form'>
            <input className='bank-top-up-mobile-form__count' type='number' name='n_topUpMobileCount' placeholder='Сумма' ref={input}/>
            <input className='bank-top-up-mobile-form__submit' type='submit' name='n_topUpMobileSubmit' value='пополнить' onClick={() => window.alt.emit('client::bank:topUpMobile', input.current.value)}/>
        </div>
    </div>
}

export default observer(BankTopUpMobile);