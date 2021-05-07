import * as React from "react";
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import colors from "configs/colors";

import arrow from "assets/images/creator/arrow.svg";

const Eyes = ({store}) => {

    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'face', 11, store.data.face.eyesWidth);
    }, [store.data.face.eyesWidth])
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'color', 2, store.data.color.eyes);
    }, [store.data.color.eyes])

    return (
        <div className='player-options'>
            <div className='player-options__title'>
                <span>выберите параметры глаз</span>
            </div>
            <div className='player-options-list'>
                <div key='k_eyesWidth' className='player-option-list__element range-element'>
                    <span>ширина</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.eyesWidth -= 10;
                            if (store.data.face.eyesWidth < -100) store.data.face.eyesWidth = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.face.eyesWidth}
                            onChange={(e) => {
                                store.data.face.eyesWidth = Number(e.target.value);
                            }}/>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.eyesWidth += 10;
                            if (store.data.face.eyesWidth > 100) store.data.face.eyesWidth = -100;
                        }}/>
                    </div>
                </div>
                <div key='k_eyesColor' className='player-option-list__element color-element'>
                    <span>цвет глаз</span>
                    <div className='color-element__input'>
                        {
                            colors.eyes.map((el, key) => {
                                if (key !== 8 && key !== 9 && key !== 10) return (
                                    <div key={key}
                                         className={cn('color-element__input-box', store.data.color.eyes === key && 'active')}
                                         style={{backgroundColor: `${el.color}`}}
                                         onClick={() => {
                                             store.data.color.eyes = key;
                                         }}/>
                                );
                                else return <></>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Eyes);