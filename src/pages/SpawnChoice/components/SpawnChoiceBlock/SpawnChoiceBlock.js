import * as React from 'react';

import './spawnChoiceBlock.scss';

const SpawnChoiceBlock = ({currComponent, nextTitle, currentOption, setCurrentOption, elCurrentTitle, elNextTitle}) => {
    const note = React.useMemo(() => 'Игровой прогресс будет сохранен, но оружие и броня, находящиеся в инвентаре, будут утеряны', []),
        names = React.useMemo(() => ['аэропорт', 'железнодорожный', 'автостанция'], []);

    return (
        <div className='spawn-choice-content'>
            <div className='spawn-choice-content-title'>
                <span className='spawn-choice-content-title__next'
                      ref={elNextTitle}>{nextTitle}</span>
                <span className='spawn-choice-content-title__current'
                      ref={elCurrentTitle}>{currComponent.title}</span>
            </div>
            <div className='spawn-choice-content-subtitle'>
                    <span
                        className='spawn-choice-content-subtitle__description'>{currComponent.description}</span>
                {currComponent.note ?
                    <span className='spawn-choice-content-subtitle__note'>{`примечание: ${note}`}</span> : <></>}
            </div>
            {
                currComponent.data ?
                    <ul className='spawn-choice-content-list'>
                        {currComponent.data.map((el, key) => {
                            return (
                                <li
                                    key={key}
                                    className={`spawn-choice-content-list__element ${currentOption === key ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentOption(key);
                                    }}
                                >
                                    {currComponent.id === 4 ? names[key] : `дом №${el.id}`}
                                </li>
                            )
                        })}
                    </ul> : null}
        </div>
    )
}

export default React.memo(SpawnChoiceBlock);