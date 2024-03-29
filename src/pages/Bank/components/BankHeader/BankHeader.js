import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import phone from 'assets/images/bank/phone.svg';
import withdraw from 'assets/images/bank/withdraw.svg';
import topUp from 'assets/images/bank/topUp.svg';

import './BankHeader.scss';

const BankHeader = ({player, setPage, currentPage, sendNotify}) => {
    return <div className='bank-header'>
        <div className='bank-header__logo'>БАНК</div>
        <div className={cn('bank-header-top-up-mobile', currentPage === 'mobile' && 'active')} onClick={() => {
            if (player.playerState.phone.number) setPage('mobile');
            else {
                sendNotify('У Вас нет мобильного телефона');
                setPage(player.playerState.bank.type ? 'account' : 'open')
            }
        }}>
            <img className='bank-header-top-up-mobile__icon' src={phone} alt='#'/>
            <div className='bank-header-top-up-mobile-text'>
                <span className='bank-header-top-up-mobile-text__title'>пополнить</span>
                <span className='bank-header-top-up-mobile-text__subtitle'>мобильный телефон</span>
            </div>
        </div>
        <div className={cn('bank-header-withdraw', currentPage === 'withdraw' && 'active')} onClick={() => {
            if (player.playerState.bank.type) setPage('withdraw');
            else {
                sendNotify('Для пользования данной услугой необходимо открыть счет');
                setPage('open');
            }
        }}>
            <span className='bank-header-withdraw__text'>снять</span>
            <img className='bank-header-withdraw__icon' src={withdraw} alt='#'/>
        </div>
        <div className={cn('bank-header-top-up', currentPage === 'topUp' && 'active')} onClick={() => {
            if (player.playerState.bank.type) setPage('topUp');
            else {
                sendNotify('Для пользования данной услугой необходимо открыть счет');
                setPage('open');
            }
        }}>
            <span className='bank-header-top-up__text'>пополнить</span>
            <img className='bank-header-top-up__icon' src={topUp} alt='#'/>
        </div>
    </div>
}

export default observer(BankHeader);