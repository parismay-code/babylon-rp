import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import BankTopUp from "pages/Bank/components/BankTopUp";
import BankWithdraw from "pages/Bank/components/BankWithdraw";
import BankTransfer from "pages/Bank/components/BankTransfer";
import BankTopUpMobile from "pages/Bank/components/BankTopUpMobile";
import BankTaxes from "pages/Bank/components/BankTaxes";
import BankCard from "components/BankCard";

import {regExp} from "utils/regExp";

import submit from 'assets/images/atm/submit.svg';
import fleeca from 'assets/images/atm/fleeca.svg';

import './ATM.scss';

const ATM = ({store, player, pinCode}) => {
    const [isCardActive, setCardActive] = React.useState(false),
        [isMenuActive, setMenuActive] = React.useState(false),
        [currentComponent, setCurrentComponent] = React.useState(null),
        [isNotifyVisible, setNotifyVisible] = React.useState(false),
        [notifyText, setNotifyText] = React.useState(null);

    const pinCodeInput = React.useRef(null);

    const balance = React.useMemo(() =>
        `$ ${String(player.playerState.bank.type ? player.playerState.money.card : player.playerState.money.cash).replace(regExp.money, '$1 ')}`, [player.playerState.bank.type, player.playerState.money.card, player.playerState.money.cash]);

    const cardWidth = React.useMemo(() => {
        if (document.body.clientWidth <= 1000 || document.body.clientHeight <= 800) return '200px';
        else if (document.body.clientWidth <= 1280) return '300px';
        else return '400px';
    }, []);

    const sendNotify = React.useCallback((text, timeout) => {
        setNotifyText(text);
        setNotifyVisible(true);

        setTimeout(() => setNotifyVisible(false), timeout ? timeout : 3000);
    }, []);

    React.useEffect(() => {
        window.alt.on('cef::atm:sendNotify', (text, timeout) => sendNotify(text, timeout));
    }, [sendNotify]);

    return <div className='atm'>
        <div className='atm__header'>Банкомат</div>
        <div className='atm-inner'>
            <div className='atm-inner-navigation'>
                <div className='atm-inner-navigation-card'>
                    <div
                        className='atm-inner-navigation-card__button'
                        onClick={() => {
                            if (isCardActive) {
                                setCardActive(false);
                                setMenuActive(false);
                            } else setCardActive(true);
                        }}
                    >
                        {isCardActive ? 'Забрать карту' : 'Вставить карту'}
                    </div>
                    <div
                        className={cn('atm-inner-navigation-card-pin-code', !isMenuActive && isCardActive ? 'atm-inner-navigation-card-pin-code_active' : null)}>
                        <input
                            className='atm-inner-navigation-card-pin-code__input'
                            type='password'
                            name='n_atmPinCode'
                            placeholder='Введите PIN'
                            ref={pinCodeInput}
                        />
                        <div
                            className='atm-inner-navigation-card-pin-code-submit'
                            onClick={() => {
                                if (pinCodeInput.current.value === pinCode) {
                                    setMenuActive(true);
                                }
                                else sendNotify('Неверный пин-код');
                            }}
                        >
                            <img className='atm-inner-navigation-card-pin-code-submit__icon' src={submit} alt='#'/>
                        </div>
                    </div>
                    <div
                        className={cn('atm-inner-navigation-card-info', isMenuActive ? 'atm-inner-navigation-card-info_active' : null)}>
                        <div
                            className='atm-inner-navigation-card-info__account-number'># {player.playerState.bank.account}</div>
                        <div className='atm-inner-navigation-card-info-bank'>
                            <span className='atm-inner-navigation-card-info-bank__name'>{player.playerState.bank.name} </span>
                            <span
                                className='atm-inner-navigation-card-info-bank__class'>{player.playerState.bank.type}</span>
                        </div>
                        <div className='atm-inner-navigation-card-info-balance'>
                            <div className='atm-inner-navigation-card-info-balance__value'>{balance}</div>
                            <div className='atm-inner-navigation-card-info-balance__title'>баланс</div>
                        </div>
                    </div>
                    <div className='atm-inner-navigation-card-description'>
                        <img className='atm-inner-navigation-card-description__icon' src={fleeca} alt='#'/>
                        <div className='atm-inner-navigation-card-description__text'>
                            За пользование банкоматом будет взыматься комиссия в размере 1% от суммы операции
                        </div>
                    </div>
                    <div className='atm-inner-navigation-card-input'>
                        <BankCard
                            data={player}
                            customStyles={
                                {
                                    width: cardWidth,
                                    position: 'absolute',
                                    top: isCardActive ? '-32%' : '40%',
                                    left: '50%',
                                    transform: 'translateX(-50%) rotate(-90deg)',
                                    transition: 'top 1s ease, opacity .8s',
                                    opacity: isCardActive ? 1 : 0
                                }
                            }
                        />
                        <div className='atm-inner-navigation-card-input__top'/>
                    </div>
                    <div className='atm-inner-navigation-card__notify' style={isNotifyVisible ? {opacity: 1} : {opacity: 0}}>
                        <span>{notifyText}</span>
                    </div>
                </div>
                <div
                    className={cn('atm-inner-navigation-main', isMenuActive ? 'atm-inner-navigation-main_active' : null)}>
                    <div className={cn('atm-inner-navigation-main-element atm-inner-navigation-main-element_topUp', currentComponent === 'topUp' ? 'atm-inner-navigation-main-element_active' : null)}
                         onClick={() => setCurrentComponent('topUp')}>
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
                    <div className={cn('atm-inner-navigation-main-element', currentComponent === 'withdraw' ? 'atm-inner-navigation-main-element_active' : null)} onClick={() => setCurrentComponent('withdraw')}>
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
                    <div className={cn('atm-inner-navigation-main-element', currentComponent === 'transfer' ? 'atm-inner-navigation-main-element_active' : null)}
                         onClick={() => setCurrentComponent('transfer')}>
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
                    <div className={cn('atm-inner-navigation-main-element', currentComponent === 'topUpMobile' ? 'atm-inner-navigation-main-element_active' : null)}
                         onClick={() => {
                             if (player.playerState.phone.number) setCurrentComponent('topUpMobile');
                             else {
                                 setCurrentComponent(null);
                                 sendNotify('У Вас нет мобильного телефона');
                             }
                         }}>
                        <svg className='atm-inner-navigation-main-element__icon atm-inner-navigation-main-element__icon_with-stroke' xmlns="http://www.w3.org/2000/svg" width="24"
                             height="33" viewBox="0 0 24 33"
                             opacity={currentComponent === 'topUpMobile' ? '.5' : '1'}>
                            <g
                                transform="translate(-6 -1.5)">
                                <path
                                    d="M10.5,3h15a3,3,0,0,1,3,3V30a3,3,0,0,1-3,3h-15a3,3,0,0,1-3-3V6a3,3,0,0,1,3-3Z"
                                    fill="none" stroke={currentComponent === 'topUpMobile' ? '#000000' : '#ffffff'}
                                    strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="3"/>
                                <path d="M18,27h0" fill="none"
                                      stroke={currentComponent === 'topUpMobile' ? '#000000' : '#ffffff'}
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                        </svg>

                        <span className='atm-inner-navigation-main-element__title'>пополнить <br/><span>мобильный телефон</span></span>
                    </div>
                    <div className={cn('atm-inner-navigation-main-element', currentComponent === 'taxes' ? 'atm-inner-navigation-main-element_active' : null)}
                         onClick={() => {
                             if (player.playerState.houses.length > 0) setCurrentComponent('taxes');
                             else {
                                 sendNotify('У Вас нет ниодного дома. Для оплаты бизнеса посетите отделение банка.');
                                 setCurrentComponent(null);
                             }
                         }}>
                        <svg className='atm-inner-navigation-main-element__icon' xmlns="http://www.w3.org/2000/svg"
                             width="29.175" height="22.687"
                             viewBox="0 0 29.175 22.687" fill={currentComponent === 'taxes' ? '#000000' : '#ffffff'}
                             opacity={currentComponent === 'taxes' ? '.5' : '1'}>
                            <path
                                d="M14.2,8.139,4.862,15.83v8.3a.81.81,0,0,0,.81.81l5.675-.015a.81.81,0,0,0,.806-.81V19.268a.81.81,0,0,1,.81-.81h3.241a.81.81,0,0,1,.81.81v4.844a.81.81,0,0,0,.81.813l5.673.016a.81.81,0,0,0,.81-.81V15.824L14.974,8.139A.617.617,0,0,0,14.2,8.139Zm14.75,5.227-4.234-3.49V2.861a.608.608,0,0,0-.608-.608H21.271a.608.608,0,0,0-.608.608V6.539L16.129,2.808a2.431,2.431,0,0,0-3.089,0L.22,13.366a.608.608,0,0,0-.081.856l1.291,1.57a.608.608,0,0,0,.856.083L14.2,6.063a.617.617,0,0,1,.775,0l11.914,9.812a.608.608,0,0,0,.856-.081l1.291-1.57a.608.608,0,0,0-.086-.857Z"
                                transform="translate(0.001 -2.254)"/>
                        </svg>

                        <span className='atm-inner-navigation-main-element__title'>Оплатить <br/><span>дом</span></span>
                    </div>
                </div>
            </div>
            {currentComponent === 'topUp' && isMenuActive && <BankTopUp store={store} player={player}/>}
            {currentComponent === 'withdraw' && isMenuActive && <BankWithdraw store={store} player={player}/>}
            {currentComponent === 'transfer' && isMenuActive && <BankTransfer store={store} player={player}/>}
            {currentComponent === 'topUpMobile' && isMenuActive && <BankTopUpMobile player={player}/>}
            {currentComponent === 'taxes' && isMenuActive && <BankTaxes player={player} noNav={true}/>}
        </div>
    </div>
}

export default observer(ATM);