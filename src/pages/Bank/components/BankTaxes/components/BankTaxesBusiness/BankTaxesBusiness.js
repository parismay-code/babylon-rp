import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTaxesBusinessElement from "./components/BankTaxesBusinessElement";

import './BankTaxesBusiness.scss';

const BankTaxesBusiness = ({store}) => {
    return <div className='bank-taxes-business'>
        {store.business.map((el, key) => {
            return <BankTaxesBusinessElement
                key={key}
                id={el.id}
                price={el.price}
                payed={el.payed}
            />
        })}
    </div>
}

export default observer(BankTaxesBusiness);