import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import Similarity from "./components/Similarity";
import Hair from "./components/Hair";

const CreatorPlayerAppearance = ({store}) => {
    const [optionsPage, setOptionsPage] = React.useState('similarity');

    const faceOptionsManager = React.useCallback(() => {
        switch (optionsPage) {
            case 'similarity':
                return (<Similarity store={store}/>);
            default:
                return (<Hair store={store}/>);
        }
    }, [optionsPage, store])

    return (
        <div className='player-appearance'>
            <div className='player-navigation'>
                <div className={cn('player-navigation__element', optionsPage === 'similarity' ? 'active' : undefined)}
                     onClick={() => setOptionsPage('similarity')}
                >тип лица
                </div>
                <div className={cn('player-navigation__element', optionsPage === 'hair' ? 'active' : undefined)}
                     onClick={() => setOptionsPage('hair')}
                >растительность
                </div>
            </div>
            {faceOptionsManager()}
        </div>
    )
}

export default observer(CreatorPlayerAppearance);