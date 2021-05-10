import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import './ClothesList.scss';

const ClothesList = ({store, currentType, currentElement, setElement}) => {
    return <div className='clothes-shop-list'>
        {
            store.clothesShopData.filter(el => el.component === currentType).map((el, key) => {
                return <div
                    key={key}
                    className={cn('clothes-shop-list-element', currentElement === el.drawable ? 'clothes-shop-list-element_active' : null)}
                    onClick={() => el.isInStock ? setElement(el.drawable) : null}
                >
                    {!el.isInStock && <div className='clothes-shop-list-element__blank'>Нет в наличии</div>}
                    <img className='clothes-shop-list-element__image' src={`./publicImages/clothes/${el.image}`} alt='#'/>
                </div>
            })
        }
    </div>
}

export default observer(ClothesList);