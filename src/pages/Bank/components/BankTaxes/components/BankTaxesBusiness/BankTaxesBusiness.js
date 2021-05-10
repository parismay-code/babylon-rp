import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTaxesBusinessElement from "./components/BankTaxesBusinessElement";

import './BankTaxesBusiness.scss';

const BankTaxesBusiness = ({player}) => {
    return <div className='bank-taxes-business'>
        {player.playerState.business.map((el, key) => {
            return <BankTaxesBusinessElement
                key={key}
                id={el.id}
                price={el.extendPrice}
                payed={el.daysExtended}
                name={el.name}
            />
        })}
    </div>
}

export default observer(BankTaxesBusiness);