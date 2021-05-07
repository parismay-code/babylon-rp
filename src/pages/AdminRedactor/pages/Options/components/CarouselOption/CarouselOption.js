import * as React from 'react';

import arrow from "assets/images/creator/arrow.svg";

import './CarouselOption.scss';

const CarouselOption = ({data}) => {
    const [value, setValue] = React.useState(data.count);
    const [isHelpVisible, setHelpVisible] = React.useState(false);

    React.useEffect(() => {
        window.alt.emit('client::adminRedactor:keyChanged', data.key, value);

        data.count = value;
    }, [value, data.key, data.count, data])

    return <div className='carousel-option' onMouseEnter={() => setHelpVisible(true)}
                onMouseLeave={() => setHelpVisible(false)}>
        {data.help &&
        <div className='option__help' style={isHelpVisible ? {opacity: 1} : {opacity: 0}}>{data.help}</div>}
        <div className='carousel-option__title'>{data.name}</div>
        <div className='select-element__input'>
            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                if (value - 1 < 0) setValue(data.maxCount);
                else setValue(value - 1);
            }}/>
            <span>{value}</span>
            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                if (value + 1 > data.maxCount) setValue(0);
                else setValue(value + 1);
            }}/>
        </div>
    </div>
}

export default React.memo(CarouselOption);