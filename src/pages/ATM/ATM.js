import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTopUp from "pages/Bank/components/BankTopUp";
import BankWithdraw from "pages/Bank/components/BankWithdraw";
import BankTransfer from "pages/Bank/components/BankTransfer";
import BankTopUpMobile from "pages/Bank/components/BankTopUpMobile";
import BankTaxes from "pages/Bank/components/BankTaxes";
import BankCard from "components/BankCard";

import {regExp} from "utils/regExp";

import submit from 'assets/images/atm/submit.svg';

import './ATM.scss';

const ATM = ({store}) => {
    const [isCardActive, setCardActive] = React.useState(false),
        [isMenuActive, setMenuActive] = React.useState(false),
        [currentComponent, setCurrentcomponent] = React.useState('topUp');

    const pinCode = React.useRef(null);

    const balance = React.useMemo(() =>
        `$ ${String(store.accountState.balance).replace(regExp.money, '$1 ')}`, [store.accountState.balance]);

    return <div className='atm'>
        <div className='atm__header'>Банкомат</div>
        <div className='atm-inner'>
            <div className='atm-inner-navigation'>
                <div className='atm-inner-navigation-card'>
                    <div
                        className='atm-inner-navigation-card__button'
                    >
                        {isCardActive ? 'Забрать карту' : 'Вставить карту'}
                    </div>
                    <div className='atm-inner-navigation-card-pin-code'>
                        <input
                            className='atm-inner-navigation-card-pin-code__input'
                            type='number'
                            name='n_atmPinCode'
                            placeholder='Введите PIN'
                            ref={pinCode}
                        />
                        <div className='atm-inner-navigation-card-pin-code-submit'>
                            <img className='atm-inner-navigation-card-pint-code-submit__icon' src={submit} alt='#'/>
                        </div>
                    </div>
                    <div className='atm-inner-navigation-card-info'>
                        <div
                            className='atm-inner-navigation-card-info__account-number'># {store.accountState.accountNumber}</div>
                        <div className='atm-inner-navigation-card-info-bank'>
                            <span className='atm-inner-navigation-card-info-bank__name'>{store.accountState.bank}</span>
                            <span
                                className='atm-inner-navigation-card-info-bank__class'>{store.accountState.accountType}</span>
                        </div>
                        <div className='atm-inner-navigation-card-info-balance'>
                            <div className='atm-inner-navigation-card-info-balance__value'>{balance}</div>
                            <div className='atm-inner-navigation-card-info-balance__title'>баланс</div>
                        </div>
                    </div>
                    <div className='atm-inner-navigation-card-input'>
                        <div className='atm-inner-navigation-card-input__top'/>
                    </div>
                </div>
                <div className='atm-inner-navigation-main'>
                    <div className='atm-inner-navigation-main-element atm-inner-navigation-main-element_topUp'>
                        <svg className='atm-inner-navigation-main-element__icon' xmlns="http://www.w3.org/2000/svg"
                             width="24.134" height="24.134"
                             viewBox="0 0 24.134 24.134" fill={currentComponent === 'topUp' ? '#000000' : '#ffffff'}
                             opacity={currentComponent === 'topUp' ? '.5' : '1'}>
                            <g transform="translate(0 24.134) rotate(-90)">
                                <path
                                    d="M.331.326a1.124,1.124,0,0,1,1.584,0L7.449,5.878a1.118,1.118,0,0,1,.035,1.543L2.031,12.892A1.118,1.118,0,1,1,.447,11.314l4.635-4.7L.331,1.9A1.107,1.107,0,0,1,.331.326Z"
                                    transform="translate(9.108 5.452)"/>
                                <path
                                    d="M0,12.067A12.067,12.067,0,1,0,12.067,0,12.065,12.065,0,0,0,0,12.067Zm1.856,0A10.206,10.206,0,0,1,19.284,4.85,10.206,10.206,0,1,1,4.85,19.284,10.123,10.123,0,0,1,1.856,12.067Z"
                                    transform="translate(0 0)"/>
                            </g>
                        </svg>
                        <span className='atm-inner-navigation-main-element__title'>Пополнить</span>
                    </div>
                    <div className='atm-inner-navigation-main-element atm-inner-navigation-main-element_topUp'>
                        <svg className='atm-inner-navigation-main-element__icon' xmlns="http://www.w3.org/2000/svg"
                             width="24.134" height="24.134"
                             viewBox="0 0 24.134 24.134" fill={currentComponent === 'withdraw' ? '#000000' : '#ffffff'}
                             opacity={currentComponent === 'withdraw' ? '.5' : '1'}>
                            <g
                                transform="translate(24.134) rotate(90)">
                                <path
                                    d="M.331.326a1.124,1.124,0,0,1,1.584,0L7.449,5.878a1.118,1.118,0,0,1,.035,1.543L2.031,12.892A1.118,1.118,0,1,1,.447,11.314l4.635-4.7L.331,1.9A1.107,1.107,0,0,1,.331.326Z"
                                    transform="translate(9.108 5.452)"/>
                                <path
                                    d="M0,12.067A12.067,12.067,0,1,0,12.067,0,12.065,12.065,0,0,0,0,12.067Zm1.856,0A10.206,10.206,0,0,1,19.284,4.85,10.206,10.206,0,1,1,4.85,19.284,10.123,10.123,0,0,1,1.856,12.067Z"
                                    transform="translate(0 0)"/>
                            </g>
                        </svg>

                        <span className='atm-inner-navigation-main-element__title'>Снять</span>
                    </div>
                    <div className='atm-inner-navigation-main-element atm-inner-navigation-main-element_topUp'>
                        <svg className='atm-inner-navigation-main-element__icon' xmlns="http://www.w3.org/2000/svg"
                             width="27.285" height="21.221"
                             viewBox="0 0 27.285 21.221" fill={currentComponent === 'transfer' ? '#000000' : '#ffffff'}
                             opacity={currentComponent === 'transfer' ? '.5' : '1'}>
                            <path
                                d="M0,21.2a2.274,2.274,0,0,0,2.274,2.274H25.011A2.274,2.274,0,0,0,27.285,21.2V12.861H0Zm9.095-3.221a.57.57,0,0,1,.568-.568h6.442a.57.57,0,0,1,.568.568v1.895a.57.57,0,0,1-.568.568H9.663a.57.57,0,0,1-.568-.568Zm-6.063,0a.57.57,0,0,1,.568-.568H7.011a.57.57,0,0,1,.568.568v1.895a.57.57,0,0,1-.568.568H3.6a.57.57,0,0,1-.568-.568ZM27.285,4.524V6.8H0V4.524A2.274,2.274,0,0,1,2.274,2.25H25.011A2.274,2.274,0,0,1,27.285,4.524Z"
                                transform="translate(0 -2.25)"/>
                        </svg>

                        <span className='atm-inner-navigation-main-element__title'>Перевести</span>
                    </div>
                    <div className='atm-inner-navigation-main-element atm-inner-navigation-main-element_topUp'>
                        <svg className='atm-inner-navigation-main-element' xmlns="http://www.w3.org/2000/svg" width="24"
                             height="33" viewBox="0 0 24 33" fill={currentComponent === 'topUpMobile' ? '#000000' : '#ffffff'}
                             opacity={currentComponent === 'topUpMobile' ? '.5' : '1'}>
                            <g
                                transform="translate(-6 -1.5)">
                                <path
                                    d="M10.5,3h15a3,3,0,0,1,3,3V30a3,3,0,0,1-3,3h-15a3,3,0,0,1-3-3V6a3,3,0,0,1,3-3Z"
                                    fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="3"/>
                                <path d="M18,27h0" fill="none" stroke={currentComponent === 'topUpMobile' ? '#000000' : '#ffffff'}
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                        </svg>

                        <span className='atm-inner-navigation-main-element__title'>Пополнить</span>
                    </div>
                </div>
            </div>
            {currentComponent === 'topUp' && <BankTopUp store={store}/>}
            {currentComponent === 'withdraw' && <BankWithdraw store={store}/>}
            {currentComponent === 'transfer' && <BankTransfer store={store}/>}
            {currentComponent === 'topUpMobile' && <BankTopUpMobile store={store}/>}
            {currentComponent === 'taxes' && <BankTaxes store={store} noNav={true}/>}
        </div>
    </div>
}

export default observer(ATM);