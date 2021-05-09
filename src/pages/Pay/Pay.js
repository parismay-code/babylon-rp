import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import BankCard from "components/BankCard";

import moneyIcon from 'assets/images/hud/money.svg';
import bankIcon from 'assets/images/hud/bank.svg';

import {regExp} from "utils/regExp";

import './Pay.scss';

const Pay = ({player, payPrice}) => {
    const [type, setType] = React.useState(null);

    const price = React.useMemo(() =>
        `${String(payPrice).replace(regExp.money, '$1 ')}$`, [payPrice]);

    const paperMoney = React.useMemo(() => `${String(player.money.cash).replace(regExp.money, '$1 ')}$`, [player.money.cash]);
    const bank = React.useMemo(() => `${String(player.money.card).replace(regExp.money, '$1 ')}$`, [player.money.card]);

    const cardWidth = React.useMemo(() => {
        if (document.body.clientWidth <= 1000 || document.body.clientHeight <= 800) return '100px';
        else if (document.body.clientWidth <= 1280) return '150px';
        else if (document.body.clientWidth >= 3000) return '400px';
        else return '200px';
    }, []);

    const cardFont = React.useMemo(() => {
        if (document.body.clientWidth <= 1000 || document.body.clientHeight <= 800) return '.4rem';
        else if (document.body.clientWidth <= 1154) return '.55rem';
        else if (document.body.clientWidth <= 1280) return '.4rem';
        else if (document.body.clientWidth >= 3000) return '.7rem';
        else return '.5rem';
    }, [])

    React.useEffect(() => {
        if (type) {
            setTimeout(() => {
                type === 'bank' ? player.money.card -= payPrice : player.money.cash -= payPrice;

                setTimeout(() => {
                    setType(null);
                    setTimeout(() => {
                        window.alt.emit('client::pay:type', type, payPrice);
                    }, type === 'bank' ? 500 : 0);
                }, type === 'bank' ? 3000 : 2000);
            }, type === 'bank' ? 850 : 0);
        }
    }, [type, player.money, payPrice]);

    return <div className='pay'>
        <div className='pay-content'>
            <div className='pay-content__title'>Выберите способ оплаты</div>
            <div className='pay-content-choose'>
                <div className='pay-content-choose-money'>
                    <div className='pay-content-choose-money-content'>
                        <div className={cn('pay-content-choose-money-content-button', type === 'money' ? 'pay-content-choose-money-content-button_active' : null)} onClick={() => setType('money')}>
                            <div className='pay-content-choose-money-content-button__title'><span>Наличными</span></div>
                            <img className='pay-content-choose-money-content-button__icon' src={moneyIcon} alt='#'/>
                        </div>
                        <div className='pay-content-choose-money-content__cash'>{paperMoney}</div>
                    </div>
                    <div className='pay-content-choose-money__price' style={type === 'money' ? {animationName: 'pay'} : null}>- {price}</div>
                </div>
                <div className='pay-content-choose__separator'/>
                <div className='pay-content-choose-bank'>
                    <div className='pay-content-choose-bank-content'>
                        <div className={cn('pay-content-choose-bank-content-button', type === 'bank' ? 'pay-content-choose-bank-content-button_active' : null)} onClick={() => setType('bank')}>
                            <div className='pay-content-choose-bank-content-button__title'><span>Картой</span></div>
                            <img className='pay-content-choose-bank-content-button__icon' src={bankIcon} alt='#'/>
                        </div>
                        <BankCard
                            data={player}
                            customStyles={
                                {
                                    width: cardWidth,
                                    position: 'absolute',
                                    top: '75%',
                                    left: type === 'bank' ? '-30%' : '30%',
                                    transform: 'translateY(-50%)',
                                    transition: 'left 1s ease, opacity .5s',
                                    opacity: type === 'bank' ? 1 : 0,
                                    fontSize: cardFont
                                }
                            }
                        />
                        <div className='pay-content-choose-bank-content__cash'>{bank}</div>
                    </div>
                    <div className='pay-content-choose-bank__price' style={type === 'bank' ? {animationName: 'pay', animationDelay: '1.2s'} : null}>- {price}</div>
                </div>
            </div>
        </div>
    </div>
}

export default observer(Pay);