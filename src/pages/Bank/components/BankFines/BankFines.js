import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankFinesInfo from "./components/BankFinesInfo";

import './BankFines.scss';

const BankFines = ({ store }) => {
    return <div className='bank-fines'>
        <div className='bank-fines-header'>
            <div className='bank-fines-header__fines'>Штраф</div>
            <div className='bank-fines-header__structure'>Структура</div>
            <div className='bank-fines-header__price'>Сумма</div>
        </div>
        <div className='bank-fines-inner'>
            {store.fines.map((el, key) => {
                return <BankFinesInfo
                    key={key}
                    el={el}
                />
            })}
        </div>
    </div>
}

export default observer(BankFines);