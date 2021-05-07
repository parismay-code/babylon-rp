import * as React from "react";
import {observer} from "mobx-react-lite";

import arrow from "assets/images/creator/arrow.svg";

const Chin = ({store}) => {
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'face', 15, store.data.face.ChimpBoneLowering);
    }, [store.data.face.ChimpBoneLowering]);
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'face', 16, store.data.face.ChimpBoneLength);
    }, [store.data.face.ChimpBoneLength]);
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'face', 17, store.data.face.ChimpBoneWidth);
    }, [store.data.face.ChimpBoneWidth]);
    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'face', 18, store.data.face.ChimpHole);
    }, [store.data.face.ChimpHole]);

    return (
        <div className='player-options'>
            <div className='player-options__title'>
                <span>выберите параметры подбородка</span>
            </div>
            <div className='player-options-list'>
                <div key='k_chinHeight' className='player-option-list__element range-element'>
                    <span>высота</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.ChimpBoneLowering -= 10;
                            if (store.data.face.ChimpBoneLowering < -100) store.data.face.ChimpBoneLowering = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.face.ChimpBoneLowering}
                            onChange={(e) => {
                                store.data.face.ChimpBoneLowering = Number(e.target.value)
                            }}/>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.ChimpBoneLowering += 10;
                            if (store.data.face.ChimpBoneLowering > 100) store.data.face.ChimpBoneLowering = -100;
                        }}/>
                    </div>
                </div>
                <div key='k_chinDeep' className='player-option-list__element range-element'>
                    <span>глубина</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.ChimpBoneLength -= 10;
                            if (store.data.face.ChimpBoneLength < -100) store.data.face.ChimpBoneLength = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.face.ChimpBoneLength}
                            onChange={(e) => {
                                store.data.face.ChimpBoneLength = Number(e.target.value);
                            }}/>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.ChimpBoneLength += 10;
                            if (store.data.face.ChimpBoneLength > 100) store.data.face.ChimpBoneLength = -100;
                        }}/>
                    </div>
                </div>
                <div key='k_chinWidth' className='player-option-list__element range-element'>
                    <span>ширина</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.ChimpBoneWidth -= 10;
                            if (store.data.face.ChimpBoneWidth < -100) store.data.face.ChimpBoneWidth = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.face.ChimpBoneWidth}
                            onChange={(e) => {
                                store.data.face.ChimpBoneWidth = Number(e.target.value);
                            }}/>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.ChimpBoneWidth += 10;
                            if (store.data.face.ChimpBoneWidth > 100) store.data.face.ChimpBoneWidth = -100;
                        }}/>
                    </div>
                </div>
                <div key='k_chinIndent' className='player-option-list__element range-element'>
                    <span>отступ</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.ChimpHole -= 10;
                            if (store.data.face.ChimpHole < -100) store.data.face.ChimpHole = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.face.ChimpHole}
                            onChange={(e) => {
                                store.data.face.ChimpHole = Number(e.target.value);
                            }}/>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.face.ChimpHole += 10;
                            if (store.data.face.ChimpHole > 100) store.data.face.ChimpHole = -100;
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Chin);