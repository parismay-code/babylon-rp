import * as React from 'react';
import {observer} from "mobx-react-lite";

import arrow from 'assets/images/creator/arrow.svg';

const CreatorPlayerClothes = ({store}) => {
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'clothes',
            store.data.clothes.head.component, store.data.clothes.head.drawable, store.data.clothes.head.texture);
    }, [store.data.clothes.head.component, store.data.clothes.head.drawable, store.data.clothes.head.texture])
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'clothes',
            store.data.clothes.body.component, store.data.clothes.body.drawable, store.data.clothes.body.texture);
    }, [store.data.clothes.body.component, store.data.clothes.body.drawable, store.data.clothes.body.texture])
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'clothes',
            store.data.clothes.pants.component, store.data.clothes.pants.id, store.data.clothes.pants.texture);
    }, [store.data.clothes.pants.component, store.data.clothes.pants.id, store.data.clothes.pants.texture])
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'clothes',
            store.data.clothes.shoes.component, store.data.clothes.shoes.id, store.data.clothes.shoes.texture);
    }, [store.data.clothes.shoes.component, store.data.clothes.shoes.id, store.data.clothes.shoes.texture])

    const getElementByDrawable = React.useCallback((array, drawable) => {
        const id = array.findIndex(el => el.drawable === drawable);
        return array[id];
    }, []);

    const clothesArray = React.useCallback((sex, component) => {
        return store.clothes[sex].filter(el => el.component === component);
    }, [store.clothes]);

    const sex = React.useMemo(() => store.data.sex === 0 ? 'male' : 'female', [store.data.sex]);

    return (
        <div className='player-clothes'>
            <div className='player-navigation'>
                <div className='player-navigation__element active'>одежда</div>
            </div>
            <div className='player-options'>
                <div className='player-options__title'>
                    <span>настройте внешний вид</span>
                </div>
                <div className='player-options-list'>
                    <div key='k_clothesHead' className='player-option-list__element select-element'>
                        <span>головной убор</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                const array = clothesArray(sex, 0);

                                const drawableId = array.findIndex(el => el.drawable === store.data.clothes.head.drawable);

                                if (drawableId - 1 <= 0) store.data.clothes.head.drawable = array[array.length - 1].drawable;
                                else store.data.clothes.head.drawable = array[drawableId - 1].drawable;
                            }}/>
                            <span>{clothesArray(sex, 0).findIndex(el => el.drawable === store.data.clothes.head.drawable)}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                const array = clothesArray(sex, 0);

                                const drawableId = array.findIndex(el => el.drawable === store.data.clothes.head.drawable);

                                if (drawableId + 1 >= array.length) store.data.clothes.head.drawable = array[0].drawable;
                                else store.data.clothes.head.drawable = array[drawableId + 1].drawable;
                            }}/>
                        </div>
                    </div>
                    <div style={{marginBottom: '1.5vw'}} key='k_clothesHeadTexture'
                         className='player-option-list__element select-element'>
                        <span>цвет головного убора</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                const textures = getElementByDrawable(clothesArray(sex, 0), store.data.clothes.head.drawable).textures;

                                const textureId = textures.indexOf(store.data.clothes.head.texture);

                                if (textureId - 1 === 0) store.data.clothes.head.texture = textures[textures.length - 1];
                                else store.data.clothes.head.texture = textures[textureId - 1];
                            }}/>
                            <span>{getElementByDrawable(clothesArray(sex, 0), store.data.clothes.head.drawable)?.textures.indexOf(store.data.clothes.head.texture)}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                const textures = getElementByDrawable(clothesArray(sex, 0), store.data.clothes.head.drawable).textures;

                                const textureId = textures.indexOf(store.data.clothes.head.texture);

                                if (textureId + 1 === textures.length) store.data.clothes.head.texture = textures[0];
                                else store.data.clothes.head.texture = textures[textureId + 1];
                            }}/>
                        </div>
                    </div>
                    <div key='k_clothesBody' className='player-option-list__element select-element'>
                        <span>верхняя одежда</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                const array = clothesArray(sex, 11);

                                const drawableId = array.findIndex(el => el.drawable === store.data.clothes.body.drawable);

                                if (drawableId - 1 <= 0) store.data.clothes.body.drawable = array[array.length - 1].drawable;
                                else store.data.clothes.body.drawable = array[drawableId - 1].drawable;
                            }}/>
                            <span>{clothesArray(sex, 11).findIndex(el => el.drawable === store.data.clothes.body.drawable)}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                const array = clothesArray(sex, 11);

                                const drawableId = array.findIndex(el => el.drawable === store.data.clothes.body.drawable);

                                if (drawableId + 1 >= array.length) store.data.clothes.body.drawable = array[0].drawable;
                                else store.data.clothes.body.drawable = array[drawableId + 1].drawable;
                            }}/>
                        </div>
                    </div>
                    <div style={{marginBottom: '1.5vw'}} key='k_clothesBodyTexture'
                         className='player-option-list__element select-element'>
                        <span>цвет верхней <br/>одежды</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                const textures = getElementByDrawable(clothesArray(sex, 11), store.data.clothes.body.drawable).textures;

                                const textureId = textures.indexOf(store.data.clothes.body.texture);

                                if (textureId - 1 === 0) store.data.clothes.body.texture = textures[textures.length - 1];
                                else store.data.clothes.body.texture = textures[textureId - 1];
                            }}/>
                            <span>{getElementByDrawable(clothesArray(sex, 11), store.data.clothes.body.drawable)?.textures.indexOf(store.data.clothes.body.texture)}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                const textures = getElementByDrawable(clothesArray(sex, 11), store.data.clothes.body.drawable).textures;

                                const textureId = textures.indexOf(store.data.clothes.body.texture);

                                if (textureId + 1 === textures.length) store.data.clothes.body.texture = textures[0];
                                else store.data.clothes.body.texture = textures[textureId + 1];
                            }}/>
                        </div>
                    </div>
                    <div key='k_clothesPants' className='player-option-list__element select-element'>
                        <span>нижняя одежда</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                const array = clothesArray(sex, 4);

                                const drawableId = array.findIndex(el => el.drawable === store.data.clothes.pants.drawable);

                                if (drawableId - 1 <= 0) store.data.clothes.pants.drawable = array[array.length - 1].drawable;
                                else store.data.clothes.pants.drawable = array[drawableId - 1].drawable;
                            }}/>
                            <span>{clothesArray(sex, 4).findIndex(el => el.drawable === store.data.clothes.pants.drawable)}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                const array = clothesArray(sex, 4);

                                const drawableId = array.findIndex(el => el.drawable === store.data.clothes.pants.drawable);

                                if (drawableId + 1 >= array.length) store.data.clothes.pants.drawable = array[0].drawable;
                                else store.data.clothes.pants.drawable = array[drawableId + 1].drawable;
                            }}/>
                        </div>
                    </div>
                    <div style={{marginBottom: '1.5vw'}} key='k_clothesPantsTexture'
                         className='player-option-list__element select-element'>
                        <span>цвет нижней <br/>одежды</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                const textures = getElementByDrawable(clothesArray(sex, 4), store.data.clothes.pants.drawable).textures;

                                const textureId = textures.indexOf(store.data.clothes.pants.texture);

                                if (textureId - 1 === 0) store.data.clothes.pants.texture = textures[textures.length - 1];
                                else store.data.clothes.pants.texture = textures[textureId - 1];
                            }}/>
                            <span>{getElementByDrawable(clothesArray(sex, 4), store.data.clothes.pants.drawable)?.textures.indexOf(store.data.clothes.pants.texture)}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                const textures = getElementByDrawable(clothesArray(sex, 4), store.data.clothes.pants.drawable).textures;

                                const textureId = textures.indexOf(store.data.clothes.pants.texture);

                                if (textureId + 1 === textures.length) store.data.clothes.pants.texture = textures[0];
                                else store.data.clothes.pants.texture = textures[textureId + 1];
                            }}/>
                        </div>
                    </div>
                    <div key='k_clothesShoes' className='player-option-list__element select-element'>
                        <span>обувь</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                const array = clothesArray(sex, 6);

                                const drawableId = array.findIndex(el => el.drawable === store.data.clothes.shoes.drawable);

                                if (drawableId - 1 <= 0) store.data.clothes.shoes.drawable = array[array.length - 1].drawable;
                                else store.data.clothes.shoes.drawable = array[drawableId - 1].drawable;
                            }}/>
                            <span>{clothesArray(sex, 6).findIndex(el => el.drawable === store.data.clothes.shoes.drawable)}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                const array = clothesArray(sex, 6);

                                const drawableId = array.findIndex(el => el.drawable === store.data.clothes.shoes.drawable);

                                if (drawableId + 1 >= array.length) store.data.clothes.shoes.drawable = array[0].drawable;
                                else store.data.clothes.shoes.drawable = array[drawableId + 1].drawable;
                            }}/>
                        </div>
                    </div>
                    <div key='k_clothesShoesTexture' className='player-option-list__element select-element'>
                        <span>цвет обуви</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                const textures = getElementByDrawable(clothesArray(sex, 6), store.data.clothes.shoes.drawable).textures;

                                const textureId = textures.indexOf(store.data.clothes.shoes.texture);

                                if (textureId - 1 === 0) store.data.clothes.shoes.texture = textures[textures.length - 1];
                                else store.data.clothes.shoes.texture = textures[textureId - 1];
                            }}/>
                            <span>{getElementByDrawable(clothesArray(sex, 6), store.data.clothes.shoes.drawable)?.textures.indexOf(store.data.clothes.shoes.texture)}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                const textures = getElementByDrawable(clothesArray(sex, 6), store.data.clothes.shoes.drawable).textures;

                                const textureId = textures.indexOf(store.data.clothes.shoes.texture);

                                if (textureId + 1 === textures.length) store.data.clothes.shoes.texture = textures[0];
                                else store.data.clothes.shoes.texture = textures[textureId + 1];
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(CreatorPlayerClothes);