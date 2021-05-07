import * as React from 'react';
import {observer} from "mobx-react-lite";

import arrow from 'assets/images/creator/arrow.svg';

import clothes from "configs/clothes";

const CreatorPlayerClothes = ({store}) => {

    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'clothes',
            store.data.clothes.head.component, store.data.clothes.head.id, store.data.clothes.head.texture);
    }, [store.data.clothes.head.component, store.data.clothes.head.id, store.data.clothes.head.texture])
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'clothes',
            store.data.clothes.body.component, store.data.clothes.body.id, store.data.clothes.body.texture);
    }, [store.data.clothes.body.component, store.data.clothes.body.id, store.data.clothes.body.texture])
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'clothes',
            store.data.clothes.pants.component, store.data.clothes.pants.id, store.data.clothes.pants.texture);
    }, [store.data.clothes.pants.component, store.data.clothes.pants.id, store.data.clothes.pants.texture])
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'clothes',
            store.data.clothes.shoes.component, store.data.clothes.shoes.id, store.data.clothes.shoes.texture);
    }, [store.data.clothes.shoes.component, store.data.clothes.shoes.id, store.data.clothes.shoes.texture])

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
                                store.data.clothes.head.id -= 1;

                                if (store.data.clothes.head.id < 0) store.data.clothes.head.id =
                                    store.data.sex === 0 ? clothes.male.head.length - 1 :
                                        clothes.female.head.length - 1;
                            }}/>
                            <span>{store.data.clothes.head.id}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.head.id += 1;

                                if (store.data.clothes.head.id >
                                    (store.data.sex === 0 ? clothes.male.head.length - 1 :
                                        clothes.female.head.length - 1)) store.data.clothes.head.id = 0;
                            }}/>
                        </div>
                    </div>
                    <div style={{marginBottom: '1.5vw'}} key='k_clothesHeadTexture'
                         className='player-option-list__element select-element'>
                        <span>цвет головного убора</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.head.texture -= 1;

                                if (store.data.clothes.head.texture < 0) store.data.clothes.head.texture =
                                    store.data.sex === 0 ? clothes.male.head[store.data.clothes.head.id].texture :
                                        clothes.female.head[store.data.clothes.head.id].texture;
                            }}/>
                            <span>{store.data.clothes.head.texture}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.head.texture += 1;

                                if (store.data.clothes.head.texture >
                                    (store.data.sex === 0 ? clothes.male.head[store.data.clothes.head.id].texture :
                                        clothes.female.head[store.data.clothes.head.id].texture)) store.data.clothes.head.texture = 0;
                            }}/>
                        </div>
                    </div>
                    <div key='k_clothesBody' className='player-option-list__element select-element'>
                        <span>верхняя одежда</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.body.id -= 1;

                                if (store.data.clothes.body.id < 0) store.data.clothes.body.id =
                                    store.data.sex === 0 ? clothes.male.body.length - 1 :
                                        clothes.female.body.length - 1;
                            }}/>
                            <span>{store.data.clothes.body.id}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.body.id += 1;

                                if (store.data.clothes.body.id >
                                    (store.data.sex === 0 ? clothes.male.body.length - 1 :
                                        clothes.female.body.length - 1)) store.data.clothes.body.id = 0;
                            }}/>
                        </div>
                    </div>
                    <div style={{marginBottom: '1.5vw'}} key='k_clothesBodyTexture'
                         className='player-option-list__element select-element'>
                        <span>цвет верхней <br/>одежды</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.body.texture -= 1;

                                if (store.data.clothes.body.texture < 0) store.data.clothes.body.texture =
                                    store.data.sex === 0 ? clothes.male.body[store.data.clothes.body.id].texture :
                                        clothes.female.body[store.data.clothes.body.id].texture;
                            }}/>
                            <span>{store.data.clothes.body.texture}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.body.texture += 1;

                                if (store.data.clothes.body.texture >
                                    (store.data.sex === 0 ? clothes.male.body[store.data.clothes.body.id].texture :
                                        clothes.female.body[store.data.clothes.body.id].texture)) store.data.clothes.body.texture = 0;
                            }}/>
                        </div>
                    </div>
                    <div key='k_clothesPants' className='player-option-list__element select-element'>
                        <span>нижняя одежда</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.pants.id -= 1;

                                if (store.data.clothes.pants.id < 0) store.data.clothes.pants.id =
                                    store.data.sex === 0 ? clothes.male.pants.length - 1 :
                                        clothes.female.pants.length - 1;
                            }}/>
                            <span>{store.data.clothes.pants.id}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.pants.id += 1;

                                if (store.data.clothes.pants.id >
                                    (store.data.sex === 0 ? clothes.male.pants.length - 1 :
                                        clothes.female.pants.length - 1)) store.data.clothes.pants.id = 0;
                            }}/>
                        </div>
                    </div>
                    <div style={{marginBottom: '1.5vw'}} key='k_clothesPantsTexture'
                         className='player-option-list__element select-element'>
                        <span>цвет нижней <br/>одежды</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.pants.texture -= 1;

                                if (store.data.clothes.pants.texture < 0) store.data.clothes.pants.texture =
                                    store.data.sex === 0 ? clothes.male.pants[store.data.clothes.pants.id].texture :
                                        clothes.female.pants[store.data.clothes.pants.id].texture;
                            }}/>
                            <span>{store.data.clothes.pants.texture}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.pants.texture += 1;

                                if (store.data.clothes.pants.texture >
                                    (store.data.sex === 0 ? clothes.male.pants[store.data.clothes.pants.id].texture :
                                        clothes.female.pants[store.data.clothes.pants.id].texture)) store.data.clothes.pants.texture = 0;
                            }}/>
                        </div>
                    </div>
                    <div key='k_clothesShoes' className='player-option-list__element select-element'>
                        <span>обувь</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.shoes.id -= 1;

                                if (store.data.clothes.shoes.id < 0) store.data.clothes.shoes.id =
                                    store.data.sex === 0 ? clothes.male.shoes.length - 1 :
                                        clothes.female.shoes.length - 1;
                            }}/>
                            <span>{store.data.clothes.shoes.id}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.shoes.id += 1;

                                if (store.data.clothes.shoes.id >
                                    (store.data.sex === 0 ? clothes.male.shoes.length - 1 :
                                        clothes.female.shoes.length - 1)) store.data.clothes.shoes.id = 0;
                            }}/>
                        </div>
                    </div>
                    <div key='k_clothesShoesTexture' className='player-option-list__element select-element'>
                        <span>цвет обуви</span>
                        <div className='select-element__input'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.shoes.texture -= 1;

                                if (store.data.clothes.shoes.texture < 0) store.data.clothes.shoes.texture =
                                    store.data.sex === 0 ? clothes.male.shoes[store.data.clothes.shoes.id].texture :
                                        clothes.female.shoes[store.data.clothes.shoes.id].texture;
                            }}/>
                            <span>{store.data.clothes.shoes.texture}</span>
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                store.data.clothes.shoes.texture += 1;

                                if (store.data.clothes.shoes.texture >
                                    (store.data.sex === 0 ? clothes.male.shoes[store.data.clothes.shoes.id].texture :
                                        clothes.female.shoes[store.data.clothes.shoes.id].texture)) store.data.clothes.shoes.texture = 0;
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(CreatorPlayerClothes);