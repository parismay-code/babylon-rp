import * as React from 'react';
import {observer} from "mobx-react-lite";

import ATMHeader from "./components/ATMHeader";

import './ATM.scss';
import {regExp} from "utils/regExp";

const ATM = ({store}) => {
    const balance = React.useMemo(() =>
        `$ ${String(store.accountState.balance).replace(regExp.money, '$1 ')}`, [store.accountState.balance]);

    return <div className='atm'>
        <ATMHeader />
        <div className='atm-navigation'>
            <div className='atm-navigation-card'>
                <div className='atm-navigation-card__button'>Забрать карту</div>
                <div className='atm-navigation-card-info'>
                    <div className='atm-navigation-card-info__account-number'># {store.accountState.accountNumber}</div>
                    <div className='atm-navigation-card-info-bank'>
                        <span className='atm-navigation-card-info-bank__name'>{store.accountState.bank}</span>
                        <span className='atm-navigation-card-info-bank__class'>{store.accountState.accountType}</span>
                    </div>
                    <div className='atm-navigation-card-info-balance'>
                        <div className='atm-navigation-card-info-balance__value'>{balance}</div>
                        <div className='atm-navigation-card-info-balance__title'>баланс</div>
                    </div>
                </div>
                <div className='atm-navigation-card-input'>
                    <div className='atm-navigation-card-input__top'/>
                </div>
            </div>
        </div>
    </div>
}

export default observer(ATM);