import * as React from 'react';
import cn from "classnames";
import {observer} from "mobx-react-lite";

import BankHeader from "./components/BankHeader";
import BankNav from "./components/BankNav";
import BankAccount from "./components/BankAccount";
import BankTopUpMobile from "./components/BankTopUpMobile";
import BankFines from "./components/BankFines";
import BankTaxes from "./components/BankTaxes";
import BankOpenCard from "./components/BankOpenCard";
import BankWithdraw from "./components/BankWithdraw";
import BankTopUp from "./components/BankTopUp";
import BankTransfer from "./components/BankTransfer";
import BankLockCard from "./components/BankLockCard";
import BankChangePin from "./components/BankChangePin";
import BankBusiness from "./components/BankBusiness";
import BankCard from "components/BankCard";

import './Bank.scss';

const Bank = ({store}) => {
    const [currentPage, setPage] = React.useState(store.accountState.accountType ? 'account' : 'open');

    const [cardType, setCardType] = React.useState(),
        [isNotifyVisible, setNotifyVisible] = React.useState(false);

    const cardShadow = React.useMemo(() => {
        switch (cardType) {
            case 'standard':
                return '#D5DCFF';
            case 'gold':
                return '#F4E86F';
            case 'premium':
                return '#FFFFFF70';
            default:
                return null;
        }
    }, [cardType]);

    React.useEffect(() => {
        window.alt.on('cef::bank:cardChoosed', bool => {
            setNotifyVisible(false);
            if (bool) window.alt.emit('client::bank:openCard', cardType);
        })
    }, [cardType]);

    return <>
        <div className='bank'>
            <BankHeader store={store} setPage={setPage} currentPage={currentPage}/>
            <div className='bank__inner'>
                <BankNav store={store} setPage={setPage} currentPage={currentPage}/>
                {currentPage === 'account' && <BankAccount store={store} setPage={setPage}/>}
                {currentPage === 'fines' && <BankFines store={store}/>}
                {currentPage === 'taxes' && <BankTaxes store={store} noNav={false}/>}
                {currentPage === 'business' && <BankBusiness store={store}/>}
                {currentPage === 'family' && <div>family</div>}
                {currentPage === 'organization' && <div>organization</div>}
                {currentPage === 'charity' && <div>charity</div>}
                {currentPage === 'mobile' && <BankTopUpMobile store={store}/>}
                {currentPage === 'withdraw' && <BankWithdraw store={store}/>}
                {currentPage === 'topUp' && <BankTopUp store={store}/>}
                {currentPage === 'transfer' && <BankTransfer store={store}/>}
                {currentPage === 'open' &&
                <BankOpenCard store={store} setCardType={setCardType} setNotifyVisible={setNotifyVisible}/>}
                {currentPage === 'lock' && <BankLockCard store={store}/>}
                {currentPage === 'changePin' && <BankChangePin store={store}/>}
            </div>
            <div className='bank__notify'>
                <span>Вы успешно оплатили штраф</span>
            </div>
        </div>
        <div className={cn('bank-open-card-notify', isNotifyVisible ? 'bank-open-card-notify_active' : null)}>
            {isNotifyVisible ? <BankCard
                data={store.accountState}
                type={cardType}
                customStyles={
                    {
                        width: document.body.clientWidth <= 1000 || document.body.clientHeight <= 800 ? '200px' : '400px',
                        filter: `drop-shadow(0 0 25px ${cardShadow})`,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }
            /> : null}
            <div className='bank-open-card-notify-choose'>
                <div className='bank-open-card-notify-choose__title'>Вы действительно хотите открыть
                    счет <span>{cardType}</span> в банке?
                </div>
                <div className='bank-open-card-notify-choose-buttons'>
                    <div
                        className='bank-open-card-notify-choose-buttons__element bank-open-card-notify-choose-buttons__element_no'
                        onClick={() => setNotifyVisible(false)}
                    >N
                    </div>
                    <div
                        className='bank-open-card-notify-choose-buttons__element bank-open-card-notify-choose-buttons__element_yes'
                        onClick={() => {
                            window.alt.emit('client::bank:openCard', cardType);
                            setNotifyVisible(false);
                        }}
                    >Y
                    </div>
                </div>
            </div>
        </div>
        <div className='bank-exit'>
            <div className='bank-exit__button'>Esc</div>
            <span className='bank-exit__text'>- выход</span>
        </div>
    </>
}

export default observer(Bank);