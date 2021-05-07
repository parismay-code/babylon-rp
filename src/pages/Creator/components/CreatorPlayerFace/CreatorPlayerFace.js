import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import Nose from "./components/Nose";
import Eyebrows from "./components/Eyebrows";
import Cheekbones from "./components/Cheekbones";
import Cheeks from "./components/Cheeks";
import Chin from "./components/Chin";
import Eyes from "./components/Eyes";
import Other from "./components/Other";

const CreatorPlayerFace = ({store}) => {
    const [optionsPage, setOptionsPage] = React.useState('nose');

    const faceOptionsManager = React.useCallback(() => {
        switch (optionsPage) {
            case 'nose':
                return (<Nose store={store}/>);
            case 'eyebrows':
                return (<Eyebrows store={store}/>);
            case 'cheekbones':
                return (<Cheekbones store={store}/>);
            case 'cheeks':
                return (<Cheeks store={store}/>);
            case 'chin':
                return (<Chin store={store}/>);
            case 'eyes':
                return (<Eyes store={store}/>);
            default:
                return (<Other store={store}/>);
        }
    }, [optionsPage, store])

    return (
        <div className='player-appearance'>
            <div className='player-navigation'>
                <div className={cn('player-navigation__element', optionsPage === 'nose' && 'active')} onClick={() => {
                    setOptionsPage('nose');
                }}>Нос
                </div>
                <div className={cn('player-navigation__element', optionsPage === 'eyebrows' && 'active')} onClick={() => {
                    setOptionsPage('eyebrows');
                }}>брови
                </div>
                <div className={cn('player-navigation__element', optionsPage === 'cheekbones' && 'active')} onClick={() => {
                    setOptionsPage('cheekbones');
                }}>скулы
                </div>
                <div className={cn('player-navigation__element', optionsPage === 'cheeks' && 'active')} onClick={() => {
                    setOptionsPage('cheeks');
                }}>щёки
                </div>
                <div className={cn('player-navigation__element', optionsPage === 'chin' && 'active')} onClick={() => {
                    setOptionsPage('chin');
                }}>подбородок
                </div>
                <div className={cn('player-navigation__element', optionsPage === 'eyes' && 'active')} onClick={() => {
                    setOptionsPage('eyes');
                }}>глаза
                </div>
                <div className={cn('player-navigation__element', optionsPage === 'other' && 'active')} onClick={() => {
                    setOptionsPage('other');
                }}>другое
                </div>
            </div>
            {faceOptionsManager()}
        </div>
    )
}

export default observer(CreatorPlayerFace);