import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTaxesHomeElement from "./components/BankTaxesHomeElement";

import './BankTaxesHome.scss';

const BankTaxesHome = ({store}) => {
    return <div className='bank-taxes-home'>
        {store.homes.map((el, key) => {
            return <BankTaxesHomeElement
                key={key}
                id={el.id}
                price={el.price}
                payed={el.payed}
            />
        })}
    </div>
}

export default observer(BankTaxesHome);