import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTaxesHomeElement from "./components/BankTaxesHomeElement";

import './BankTaxesHome.scss';

const BankTaxesHome = ({player}) => {
    return <div className='bank-taxes-home'>
        {player.houses.map((el, key) => {
            return <BankTaxesHomeElement
                key={key}
                id={el.id}
                price={el.extendPrice}
                payed={el.daysExtended}
            />
        })}
    </div>
}

export default observer(BankTaxesHome);