import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import transfer from 'assets/images/bank/transfer.svg';
import open from 'assets/images/bank/open.svg';

import './BankNav.scss';

const BankNav = ({store, setPage, currentPage}) => {
    const navList = React.useMemo(() => [
        {
            page: 'account',
            name: 'мой счет',
        },
        {
            page: 'fines',
            name: 'штрафы',
        },
        {
            page: 'taxes',
            name: 'налоги',
        },
        {
            page: 'business',
            name: 'бизнес',
        },
        {
            page: 'family',
            name: 'семья',
        },
        {
            page: 'organization',
            name: 'организация',
        },
        {
            page: 'charity',
            name: 'благотворительность',
        },
    ], []);

    return <div className='bank-nav'>
        {navList.map((el, key) => {
            return <div
                key={key}
                className={cn('bank-nav__element', currentPage === navList[key].page && 'active')}
                onClick={() => {
                    if (el.page === 'fines' || el.page === 'taxes' || el.page === 'business') setPage(el.page);
                    else if (store.accountState.accountType) setPage(el.page);
                    else setPage('open');
                }}
            >
                {el.name}
            </div>
        })}
        <div className='bank-nav-bottom'>
            <div className={cn('bank-nav-bottom-transfer', currentPage === 'transfer' && 'active')} onClick={() => setPage('transfer')}>
                <span className='bank-nav-bottom-transfer__title'>перевод на счет</span>
                <img className='bank-nav-bottom-transfer__icon' src={transfer} alt='#'/>
            </div>
            <div className={cn('bank-nav-bottom-open', currentPage === 'open' && 'active')} onClick={() => {
                if (store.accountState.accountType) setPage('lock');
                else setPage('open');
            }}>
                <span className='bank-nav-bottom-open__title'>открыть счет</span>
                <img className='bank-nav-bottom-open__icon' src={open} alt='#'/>
            </div>
        </div>
    </div>
}

export default observer(BankNav);