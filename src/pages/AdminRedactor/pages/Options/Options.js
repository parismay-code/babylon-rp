import * as React from 'react';

import RadioOption from "./components/RadioOption";
import RangeOption from "./components/RangeOption";
import TextOption from "./components/TextOption";
import CarouselOption from "./components/CarouselOption";
import ColorOption from "./components/ColorOption";

import arrowBack from 'assets/images/adminRedactor/arrowBack.svg';
import arrow from 'assets/images/adminRedactor/arrow.svg';

import './Options.scss';

const Options = ({setPage, data}) => {
    const [isConfirmVisible, setConfirmVisible] = React.useState(false);

    return <div className='admin-redactor-options'>
        <div className='admin-redactor-options-header'>
            <img
                className='admin-redactor-options-header__back'
                src={arrowBack}
                alt='#'
                onClick={() => {
                    setPage(null);
                }}
            />
            <span className='admin-redactor-options-header__title'>{data.name}</span>
        </div>
        <div className='admin-redactor-options-content'>
            {data.categories.map((el, key) => {
                return <div key={key} className='admin-redactor-options-content-category'>
                    <div
                        className='admin-redactor-options-content-category-title'
                        onClick={(e) => {
                            e.target.classList.toggle('admin-redactor-options-content-category-title_active');
                        }}
                    >
                        <span className='admin-redactor-options-content-category-title__text'>{el.name}</span>
                        <img
                            className='admin-redactor-options-content-category-title__arrow'
                            src={arrow}
                            alt='#'
                        />
                    </div>
                    <div className='admin-redactor-options-content-category-content'>
                        {el.options.map((el, key) => {
                            switch (el.type) {
                                case 'radio':
                                    return <RadioOption key={key} data={el}/>;
                                case 'range':
                                    return <RangeOption key={key} data={el}/>;
                                case 'text':
                                    return <TextOption key={key} data={el}/>;
                                case 'carousel':
                                    return <CarouselOption key={key} data={el}/>;
                                case 'color':
                                    return <ColorOption key={key} data={el}/>;
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
            })}
        </div>
        <div className='admin-redactor-options-save'>
            <div
                className='admin-redactor-options-save__button'
                onClick={() => setConfirmVisible(true)}
            >Сохранить</div>
            <div className='admin-redactor-options-save-confirm' style={isConfirmVisible ? {opacity: 1} : {opacity: 0}}>
                <div className='admin-redactor-options-save-confirm__title'>Вы действительно хотите сохранить?</div>
                <div className='admin-redactor-options-save-confirm-choose'>
                    <div
                        className='admin-redactor-options-save-confirm-choose__no'
                        onClick={() => setConfirmVisible(false)}
                    >Нет</div>
                    <div
                        className='admin-redactor-options-save-confirm-choose__yes'
                        onClick={() => {
                            window.alt.emit('client::adminRedactor:save', data.name, data.categories);

                            setConfirmVisible(false);
                        }}
                    >Да</div>
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(Options);