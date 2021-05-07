import * as React from 'react';
import cn from 'classnames';

import './HUDFriendship.scss';

const HUDFriendship = () => {
    const [visible, setVisible] = React.useState(false),
        [title, setTitle] = React.useState(null),
        [text, setText] = React.useState(null);

    React.useEffect(() => {
        window.alt.on('cef::hud:showChoice', (title, text) => {
            setVisible(true);
            setTitle(title);
            setText(text);

            const fadeOut = setTimeout(() => setVisible(false), 10000)

            window.alt.on('cef::hud:closeChoice', () => {
                clearTimeout(fadeOut);
                setVisible(false);
                setTitle(null);
                setText(null);
            })
        })
    }, []);

    return <div className={cn('hud-friendship', visible && 'hud-friendship_active')}>
        <div className='hud-friendship__title'>{title}</div>
        <div className='hud-friendship-buttons'>
            <div className='hud-friendship-buttons__accept'>
                <div>Y</div>
            </div>
            <div className='hud-friendship-buttons__decline'>
                <div>N</div>
            </div>
        </div>
        <div className='hud-friendship__description'>{text}</div>
    </div>
}

export default React.memo(HUDFriendship);