import * as React from 'react';
import {observer} from "mobx-react-lite";
import cn from 'classnames';

import arrow from "assets/images/creator/arrow.svg";

import {eyebrowsList} from "./utils/eyebrowsList";
import colors from "configs/colors";

const Eyebrows = ({store}) => {

    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'hair', 1, store.data.hair.eyebrows);
    }, [store.data.hair.eyebrows]);
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'face', 6, store.data.face.eyebrowHeight);
    }, [store.data.face.eyebrowHeight]);
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'face', 7, store.data.face.eyebrowForward);
    }, [store.data.face.eyebrowForward]);
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'color', 1, store.data.color.eyebrows);
    }, [store.data.color.eyebrows]);

    return (
        <div className='player-options'>
            <div className='player-options__title'>
                <span>выберите параметры бровей</span>
            </div>
            <div className='player-options-list'>
                <div key='k_eyebrowsType' className='player-option-list__element select-element'>
                    <span>тип</span>
                    <div className='select-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.hair.eyebrows -= 1;
                            if (store.data.hair.eyebrows < 0) store.data.hair.eyebrows = eyebrowsList.length - 1;
                        }}/>
                        <span>{eyebrowsList[store.data.hair.eyebrows]}</span>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.hair.eyebrows += 1;
                            if (store.data.hair.eyebrows > eyebrowsList.length - 1) store.data.hair.eyebrows = 0;
                        }}/>
                    </div>
                </div>
                <div key='k_eyebrowsHeight' className='player-option-list__element range-element'>
                    <span>высота</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.eyebrowHeight -= 10;
                            if (store.data.face.eyebrowHeight < -100) store.data.face.eyebrowHeight = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.face.eyebrowHeight}
                            onChange={(e) => {
                                store.data.face.eyebrowHeight = Number(e.target.value);
                            }}/>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.eyebrowHeight += 10;
                            if (store.data.face.eyebrowHeight > 100) store.data.face.eyebrowHeight = -100;
                        }}/>
                    </div>
                </div>
                <div key='k_eyebrowsDeep' className='player-option-list__element range-element'>
                    <span>глубина</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.eyebrowForward -= 10;
                            if (store.data.face.eyebrowForward < -100) store.data.face.eyebrowForward = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.eyebrowForward}
                            onChange={(e) => {
                                store.data.face.eyebrowForward = Number(e.target.value);
                            }}/>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.eyebrowForward += 10;
                            if (store.data.face.eyebrowForward > 100) store.data.face.eyebrowForward = -100;
                        }}/>
                    </div>
                </div>
                <div key='k_eyebrowsColor' className='player-option-list__element color-element'>
                    <span>цвет бровей</span>
                    <div className='color-element__input'>
                        {
                            colors.hair.map((el, key) => {
                                if (key < 19) return (
                                    <div key={key}
                                         className={cn('color-element__input-box', store.data.color.eyebrows === key && 'active')}
                                         style={{backgroundColor: `${el.color}`}}
                                         onClick={() => {
                                             store.data.color.eyebrows = key;
                                         }}/>
                                );
                                else return null
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Eyebrows);