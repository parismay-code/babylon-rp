import * as React from 'react';

import {regExp} from "utils/regExp";

const BankFinesInfo = ({el}) => {
    const price = React.useMemo(() =>
        `$ ${String(el.price).replace(regExp.money, '$1 ')}`, [el.price])

    return <div className='bank-fines-info'>
        <div className='bank-fines-info__description'>{el.description}</div>
        <div className='bank-fines-info__structure'>{el.structure}</div>
        <div className='bank-fines-info__price'>{price}</div>
        <input
            className='bank-fines-info__pay'
            type='submit'
            name='n_finesPay'
            value='оплатить'
            onClick={() => {
                window.alt.emit('client::bank:payFine', el.id);
            }}
        />
    </div>
}

export default React.memo(BankFinesInfo);