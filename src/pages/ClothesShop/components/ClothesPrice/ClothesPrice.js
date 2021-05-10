import * as React from 'react';

import arrow from "assets/images/shops/clothes/arrow.svg";

import {regExp} from "utils/regExp";

import './ClothesPrice.scss';

const ClothesPrice = ({price, handleChangeTexture, emitBuy}) => {
    const _price = React.useMemo(() =>
        `${String(price).replace(regExp.money, '$1 ')} $`, [price]);

    return <div className='clothes-shop-price'>
        <div className='clothes-shop-price-content'>
            <div
                className='clothes-shop-price-content-set-texture'
                onClick={() => handleChangeTexture(true)}
            >
                <div className='clothes-shop-price-content-set-texture__icon'>
                    <img src={arrow} alt='#'/>
                </div>
            </div>
            <div className='clothes-shop-price-content-price'>
                <span className='clothes-shop-price-content-price__title'>Стоимость</span>
                <span className='clothes-shop-price-content-price__value'>{_price}</span>
            </div>
            <div className='clothes-shop-price-content__buy' onClick={() => emitBuy()}>Купить</div>
        </div>
    </div>
}

export default React.memo(ClothesPrice);