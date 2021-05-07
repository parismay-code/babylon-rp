import * as React from 'react';
import {observer} from "mobx-react-lite";

import arrow from "assets/images/creator/arrow.svg";

const Similarity = ({store}) => {
    const raceList = React.useMemo(() => ['европеец', 'афроамериканец', 'азиат'], [])

    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'race', store.data.race);
    }, [store.data.race]);

    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'parents', 0, store.data.parents.leatherMix);
    }, [store.data.parents.leatherMix]);

    React.useEffect(() => {
        window.alt.emit('client::characterCreator:preview', 'parents', 1, store.data.parents.similarity);
    }, [store.data.parents.similarity]);

    return (
        <div className='player-options'>
            <div className='player-options__title'>
                <span>настройте тип и параметры лица</span>
            </div>
            <div className='player-options-list'>
                <div key='k_race' className='player-option-list__element select-element'>
                    <span>Раса</span>
                    <div className='select-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.race -= 1;
                            if (store.data.race < 0) store.data.race = raceList.length - 1;
                        }}/>
                        <span>{raceList[store.data.race]}</span>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.race += 1;
                            if (store.data.race > raceList.length - 1) store.data.race = 0;
                        }}/>
                    </div>
                </div>
                <div key='k_similarity' className='player-option-list__element range-element'>
                    <span>Схожесть</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.parents.similarity -= 10;
                            if (store.data.parents.similarity < -100) store.data.parents.similarity = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.parents.similarity}
                            onChange={(e) => {
                                store.data.parents.similarity = Number(e.target.value);
                            }}
                        />
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.parents.similarity += 10;
                            if (store.data.parents.similarity > 100) store.data.parents.similarity = -100;
                        }}/>
                    </div>
                </div>
                <div key='k_leatherMix' className='player-option-list__element range-element'>
                    <span>тон кожи</span>
                    <div className='range-element__input'>
                        <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.parents.leatherMix -= 10;
                            if (store.data.parents.leatherMix < -100) store.data.parents.leatherMix = 100;
                        }}/>
                        <input
                            type='range'
                            min='-100'
                            max='100'
                            value={store.data.parents.leatherMix}
                            onChange={(e) => {
                                store.data.parents.leatherMix = Number(e.target.value);
                            }}/>
                        <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                            store.data.parents.leatherMix += 10;
                            if (store.data.parents.leatherMix > 100) store.data.parents.leatherMix = -100;
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Similarity);