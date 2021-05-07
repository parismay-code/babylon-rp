import * as React from 'react';

import './TextOption.scss';

const TextOption = ({data}) => {
    const [isHelpVisible, setHelpVisible] = React.useState(false);

    return <div className='text-option' onMouseEnter={() => setHelpVisible(true)}
                onMouseLeave={() => setHelpVisible(false)}>
        {data.help &&
        <div className='option__help' style={isHelpVisible ? {opacity: 1} : {opacity: 0}}>{data.help}</div>}
        <div className='text-option__title'>{data.name}</div>
        <input
            className='text-option__input'
            type='text'
            name={`n_textOption#${data.key}`}
            onChange={(e) => {
                window.alt.emit('client::adminRedactor:keyChanged', data.key, e.target.value);
            }}
        />
    </div>
}

export default React.memo(TextOption);