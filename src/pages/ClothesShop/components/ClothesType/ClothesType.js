import * as React from 'react';
import {observer} from "mobx-react-lite";
import cn from 'classnames';

import arrow from 'assets/images/shops/clothes/arrow.svg';

import './ClothesType.scss';

// 0 - head, 11 - top, 8 - undershirt, 4 - legs, 6 - shoes, 7 - accessories

const ClothesType = ({currentType, setType, handleChangeTexture, setFirstElement}) => {
    return <div className='clothes-shop-type'>
        <div className='clothes-shop-type-content'>
            <div className='clothes-shop-type-content__title'>Магазин одежды</div>
            <div className='clothes-shop-type-content-list'>
                <div
                    className={cn('clothes-shop-type-content-list-element', currentType === 0 ? 'clothes-shop-type-content-list-element_active' : null)}
                    onClick={() => {
                        setType(0);
                        setFirstElement(0);
                    }}>
                    <div className='clothes-shop-type-content-list-element__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="38.242" height="29.917" viewBox="0 0 38.242 29.917">
                            <path
                                d="M0,28.586V20.157s9.956.9,19.517.9,18.726-.9,18.726-.9v8.429a148.369,148.369,0,0,1-18.726,1.331A170.092,170.092,0,0,1,0,28.586ZM2.42,19.55V15.706h.029A16.617,16.617,0,0,1,5.272,7.364,16.75,16.75,0,0,1,12.62,1.313a16.68,16.68,0,0,1,15.839,1.54A16.753,16.753,0,0,1,34.51,10.2a16.553,16.553,0,0,1,1.284,5.506h.029V19.55s-8.005.607-16.356.607S2.42,19.55,2.42,19.55Z"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    className={cn('clothes-shop-type-content-list-element', currentType === 11 ? 'clothes-shop-type-content-list-element_active' : null)}
                    onClick={() => {
                        setType(11);
                        setFirstElement(11);
                    }}>
                    <div className='clothes-shop-type-content-list-element__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="34.5" height="36.517" viewBox="0 0 34.5 36.517">
                            <path
                                d="M28.468,4.954a29.752,29.752,0,0,0-4.222-1.238l-.038-2.371A11.128,11.128,0,0,0,19.177.017C18.719,0,17.8,0,17.344.017a11.151,11.151,0,0,0-5.031,1.328l-.04,2.371A29.923,29.923,0,0,0,8.051,4.955C3.66,7.52,3.66,7.432,2.658,12.345A108.946,108.946,0,0,0,1.093,35.163c.456.8,5.125.8,5.59,0,0,0-.479-14.776,2.076-18.562V35.026a47.23,47.23,0,0,0,8.783,1.492V12.339s-2.236-9.87-3.553-10.387c0,0,.28-.937,3.354-.9.458,0,1.374-.007,1.833,0,3.045.048,3.354.9,3.354.9-1.316.517-3.553,5.387-3.553,5.387V36.518a47.23,47.23,0,0,0,8.784-1.492V16.6c2.555,3.785,2.076,18.563,2.076,18.563.463.8,5.133.8,5.588,0a109.228,109.228,0,0,0-1.563-22.819C32.853,7.564,32.765,7.476,28.468,4.954Z"
                                transform="translate(-1.009 -0.001)"/>
                        </svg>
                    </div>
                </div>
                <div
                    className={cn('clothes-shop-type-content-list-element', currentType === 8 ? 'clothes-shop-type-content-list-element_active' : null)}
                    onClick={() => {
                        setType(8);
                        setFirstElement(8);
                    }}>
                    <div className='clothes-shop-type-content-list-element__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="39.281" height="31.421" viewBox="0 0 39.281 31.421">
                            <path
                                d="M38.736,5.922,26.787,0c-1.234,1.706-3.964,2.9-7.149,2.9S13.722,1.706,12.488,0L.54,5.922A.989.989,0,0,0,.1,7.242l3.51,7.027a.989.989,0,0,0,1.319.442L8.4,13.01a.98.98,0,0,1,1.411.884V29.457a1.962,1.962,0,0,0,1.964,1.964h15.71a1.962,1.962,0,0,0,1.964-1.964V13.888A.982.982,0,0,1,30.862,13l3.473,1.7a.979.979,0,0,0,1.319-.442l3.516-7.021a.98.98,0,0,0-.436-1.319Z"
                                transform="translate(0.004)"/>
                        </svg>
                    </div>
                </div>
                <div
                    className={cn('clothes-shop-type-content-list-element', currentType === 4 ? 'clothes-shop-type-content-list-element_active' : null)}
                    onClick={() => {
                        setType(4);
                        setFirstElement(4);
                    }}>
                    <div className='clothes-shop-type-content-list-element__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="19.983" height="34.922" viewBox="0 0 19.983 34.922">
                            <g transform="translate(-1746.726 -6046.441)">
                                <path
                                    d="M-.06-314.768H17.483s.828-2.455,1.1,5.46,0,26.2,0,26.2a16.928,16.928,0,0,1-3.021.288,25.637,25.637,0,0,1-3.427-.288s-1.69-23.645-3.369-23.645-3.348,23.645-3.348,23.645a25.509,25.509,0,0,1-3.448.288,18.464,18.464,0,0,1-3.125-.288s-.273-18.285,0-26.2S-.06-314.768-.06-314.768Z"
                                    transform="translate(1748 6364.183)"/>
                                <path d="M0-3.872s4.386-.408,8.816-.408,8.9.408,8.9.408v1.81H0Z"
                                      transform="translate(1747.896 6050.721)"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div
                    className={cn('clothes-shop-type-content-list-element', currentType === 6 ? 'clothes-shop-type-content-list-element_active' : null)}
                    onClick={() => {
                        setType(6);
                        setFirstElement(6);
                    }}>
                    <div className='clothes-shop-type-content-list-element__icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="44.206" height="20.995"
                            viewBox="0 0 44.206 20.995">
                            <g transform="translate(0 -126.209)">
                                <path
                                    d="M39.414,138.993h-.578a12.044,12.044,0,0,1-7.144-2.355l-2.015-1.65-1.515-1.261-2-1.665L24.647,130.8l-2-1.665-2.943-2.45a2.067,2.067,0,0,0-3.39,1.589V129.4c0,3.711-3.043,4.326-6.754,4.326-2.6,0-4.974.878-6.075-1.482l-.317-.679a1.662,1.662,0,0,0-3.169.7v11.08H44.206A4.82,4.82,0,0,0,39.414,138.993Z"/>
                                <g transform="translate(0.5 144.523)">
                                    <path
                                        d="M5.787,354.731a4.819,4.819,0,0,0,4.315,2.682H44.7a4.819,4.819,0,0,0,4.315-2.682Z"
                                        transform="translate(-5.787 -354.731)"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div
                    className={cn('clothes-shop-type-content-list-element', currentType === 7 ? 'clothes-shop-type-content-list-element_active' : null)}
                    onClick={() => {
                        setType(7);
                        setFirstElement(7);
                    }}>
                    <div className='clothes-shop-type-content-list-element__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42"
                             height="15.166" viewBox="0 0 42 15.166">
                            <path
                                d="M40.77,167.229H39.489a5.771,5.771,0,0,0-1.268-1.95,5.393,5.393,0,0,0-2.7-1.473,27.276,27.276,0,0,0-4.551-.244h-.016l-19.55,0H11.4a29.074,29.074,0,0,0-4.915.241,5.393,5.393,0,0,0-2.7,1.473,5.771,5.771,0,0,0-1.268,1.95H1.23a1.23,1.23,0,0,0,0,2.461H2q-.012.238-.012.488c0,5.308,3.567,8.122,6.881,8.49a9.332,9.332,0,0,0,7.162-2.237,11.257,11.257,0,0,0,3.5-6.742h2.935a11.257,11.257,0,0,0,3.5,6.742,9.332,9.332,0,0,0,7.162,2.237c3.314-.369,6.881-3.183,6.881-8.49q0-.251-.012-.488h.768a1.23,1.23,0,0,0,0-2.461Zm-18.56,0H19.791c.006-.144.011-.29.013-.438a2.893,2.893,0,0,0-.089-.767h2.569a2.89,2.89,0,0,0-.089.767C22.2,166.94,22.2,167.085,22.209,167.229Z"
                                transform="translate(0 -163.561)"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div
                className='clothes-shop-type-content-set-texture'
                onClick={() => handleChangeTexture(false)}
            >
                <div className='clothes-shop-type-content-set-texture__icon'>
                    <img src={arrow} alt='#'/>
                </div>
            </div>
        </div>
    </div>
}

export default observer(ClothesType);