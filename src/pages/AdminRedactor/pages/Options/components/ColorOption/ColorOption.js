import * as React from 'react';
import {ColorPicker, useColor} from "react-color-palette";

import "react-color-palette/lib/css/styles.css";

import './ColorOption.scss';

const ColorOption = ({data}) => {
    const [color, setColor] = useColor('hex', data.color);
    const [isHelpVisible, setHelpVisible] = React.useState(false);

    React.useEffect(() => {
        window.alt.emit('client::adminRedactor:keyChanged', data.key, color);
    }, [color, data.key]);

    return <div className='color-option' onMouseEnter={() => setHelpVisible(true)}
                onMouseLeave={() => setHelpVisible(false)}>
        {data.help &&
        <div className='option__help' style={isHelpVisible ? {opacity: 1} : {opacity: 0}}>{data.help}</div>}
        <div className='color-option__title'>{data.name}</div>
        <div className='color-option__element'>
            <ColorPicker width={410} height={150} color={color} onChange={setColor} dark/>
        </div>
    </div>
}

export default React.memo(ColorOption);