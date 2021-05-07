import * as React from 'react';

import {regExp} from "utils/regExp";

const BankOpenCardElement = ({el, handleClick}) => {
    const price = React.useMemo(() =>
        `$ ${String(el.price).replace(regExp.money, '$1 ')}`, [el.price]);

    return <div className='bank-open-card-element' onClick={() => handleClick(el.class)}>
        <div className='bank-open-card-element-info'>
            <span className='bank-open-card-element-info__title'>{el.class}</span>
            <span className='bank-open-card-element-info__subtitle'>{price}</span>
        </div>
        <div
            className='bank-open-card-element-bonuses'
            style={{background: `linear-gradient(to right, #00000000 40%, ${el.color})`}}
        >
            {el.bonuses.map((el, key) => {
                return <div
                    key={key}
                    className='bank-open-card-element-bonuses__element'
                >
                    {el}
                </div>
            })}
        </div>
    </div>
}

export default React.memo(BankOpenCardElement);