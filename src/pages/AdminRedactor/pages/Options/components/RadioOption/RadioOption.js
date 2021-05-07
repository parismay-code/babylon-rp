import * as React from 'react';
import cn from 'classnames';

import './RadioOption.scss';

const RadioOption = ({data}) => {
    const [isEnabled, setEnabled] = React.useState(data.value);
    const [isHelpVisible, setHelpVisible] = React.useState(false);

    return <div className='radio-option' onMouseEnter={() => setHelpVisible(true)}
                onMouseLeave={() => setHelpVisible(false)}>
        {data.help &&
        <div className='option__help' style={isHelpVisible ? {opacity: 1} : {opacity: 0}}>{data.help}</div>}
        <div className='radio-option__title'>{data.name}</div>
        <div
            className='radio-option-element'
            onClick={() => {
                setEnabled(!isEnabled);

                window.alt.emit('client::adminRedactor:keyChanged', data.key, !isEnabled);
            }}
        >
            <div className='radio-option-element__off'/>
            <div className='radio-option-element__on'/>
            <div
                className={cn('radio-option-element__scroll', isEnabled ? 'radio-option-element__scroll_on' : 'radio-option-element__scroll_off')}/>
        </div>
    </div>
}

export default React.memo(RadioOption);