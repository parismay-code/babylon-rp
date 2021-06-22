import * as React from 'react';
import {observer} from "mobx-react-lite";

import BankTaxesHomeElement from "./components/BankTaxesHomeElement";

import './BankTaxesHome.scss';

const BankTaxesHome = ({customEvent, player}) => {
    return <div className='bank-taxes-home'>
        {player.playerState.houses.map((el, key) => {
            return <BankTaxesHomeElement
                key={key}
                id={el.id}
                price={el.extendPrice}
                payed={el.daysExtended}
                customEvent={customEvent}
            />
        })}
    </div>
}

export default observer(BankTaxesHome);