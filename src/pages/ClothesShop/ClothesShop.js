import * as React from 'react';
import {observer} from "mobx-react-lite";

import HUDHeader from "pages/HUD/components/HUDHeader";
import ShopMapState from "components/ShopMapState";
import ClothesType from "./components/ClothesType";
import ClothesList from "./components/ClothesList";
import ClothesPrice from "./components/ClothesPrice";

import './ClothesShop.scss';

const ClothesShop = ({player, hudStore, store}) => {
    const [currentType, setType] = React.useState(0),
        [currentElement, setElement] = React.useState(store.clothesShopData.filter(el => el.component === currentType && el.isInStock === true)[0].drawable),
        [currentTexture, setTexture] = React.useState(0);

    const emitPreview = React.useCallback((component, drawable, texture) => window.alt.emit('client::clothesShop:preview', {component, drawable, texture}), []);

    const price = React.useMemo(() => {
        const array = store.clothesShopData.filter(el => el.component === currentType);
        return array.filter(el => el.drawable === currentElement)[0].price;
    }, [currentElement, currentType, store.clothesShopData]);

    const setFirstElement = React.useCallback((component) => {
        setElement(store.clothesShopData.filter(el => el.component === component && el.isInStock)[0].drawable);
    }, [store.clothesShopData]);

    const emitBuy = React.useCallback(() => {
        const obj = {
            component: currentType,
            drawable: currentElement,
            texture: store.clothesShopData.filter(el => el.component === currentType)[0].textures[currentTexture],
            price: price
        };

        window.alt.emit('client::clothesShop:preview', obj);
    }, [currentElement, currentTexture, currentType, price, store.clothesShopData]);
    const handleChangeTexture = React.useCallback(((bool) => {
        const array = store.clothesShopData.filter(el => el.component === currentType);
        const element = array.filter(el => el.drawable === currentElement)[0];

        if (bool) {
            if (currentTexture + 1 >= element.textures.length) {
                setTexture(0);
                emitPreview(element.component, element.drawable, element.textures[0]);
            }
            else {
                setTexture(currentTexture + 1);
                emitPreview(element.component, element.drawable, element.textures[currentTexture + 1]);
            }
        }
        else {
            if (currentTexture - 1 < 0) {
                setTexture(element.textures.length - 1);
                emitPreview(element.component, element.drawable, element.textures[element.textures.length - 1]);
            }
            else {
                setTexture(currentTexture - 1);
                emitPreview(element.component, element.drawable, element.textures[currentTexture - 1]);
            }
        }
    }), [emitPreview, currentElement, currentTexture, currentType, store.clothesShopData]);

    const screen = React.useRef(null);
    
    React.useEffect(() => {
        const timeout = setTimeout(() => screen.current.classList.add('clothes-shop_active'), 100);
        
        return () => clearTimeout(timeout);
    }, []);
    
    React.useEffect(() => {
        const array = store.clothesShopData.filter(el => el.component === currentType);
        const element = array.filter(el => el.drawable === currentElement)[0];

        setTexture(0);

        emitPreview(element.component, element.drawable, element.textures[0]);
    }, [emitPreview, currentType, currentElement, store.clothesShopData]);

    return <div ref={screen} className='clothes-shop'>
        <div className='clothes-shop-content'>
            <ClothesList store={store} currentType={currentType} currentElement={currentElement} setElement={setElement}/>
            <div className='clothes-shop-content-bottom'>
                <ClothesType currentType={currentType} setType={setType} handleChangeTexture={handleChangeTexture} setFirstElement={setFirstElement}/>
                <div className='clothes-shop-content-bottom-texture'>
                    <div className='clothes-shop-content-bottom-texture__title'>Цвет</div>
                    <div className='clothes-shop-content-bottom-texture__value'>{currentTexture}</div>
                </div>
                <ClothesPrice store={store} price={price} handleChangeTexture={handleChangeTexture} emitBuy={emitBuy}/>
            </div>
        </div>
        <div className='clothes-shop__owner'>Владелец: {store.owner}</div>
        <div className='clothes-shop__light clothes-shop__light_left'/>
        <div className='clothes-shop__light clothes-shop__light_right'/>
        <HUDHeader player={player}/>
        <ShopMapState store={hudStore} player={player}/>
    </div>
}

export default observer(ClothesShop);