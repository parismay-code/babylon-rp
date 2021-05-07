import * as React from 'react';

import arrow from "assets/images/creator/arrow.svg";

import './RangeOption.scss';

const RangeOption = ({data}) => {
    const [value, setValue] = React.useState(data.count);
    const [isHelpVisible, setHelpVisible] = React.useState(false);

    React.useEffect(() => {
        window.alt.emit('client::adminRedactor:keyChanged', data.key, value);

        data.count = value;
    }, [value, data.key, data.count, data])

    return <div className='range-option' onMouseEnter={() => setHelpVisible(true)}
                onMouseLeave={() => setHelpVisible(false)}>
        {data.help &&
        <div className='option__help' style={isHelpVisible ? {opacity: 1} : {opacity: 0}}>{data.help}</div>}
        <div className='range-option__title'>{data.name}</div>
        <div className='range-element__input'>
            <img
                className='left-arrow'
                src={arrow}
                alt='#'
                onClick={() => {
                    if (value - 10 < 0) setValue(data.maxCount);
                    else setValue(value - 10);
                }}
            />
            <input
                type='range'
                min='0'
                max={data.maxCount}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}/>
            <img
                className='right-arrow'
                src={arrow}
                alt='#'
                onClick={() => {
                    if (value + 10 > data.maxCount) setValue(0);
                    else setValue(value + 10);
                }}
            />
        </div>
    </div>
}

export default React.memo(RangeOption);