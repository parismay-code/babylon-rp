import * as React from 'react';
import cn from 'classnames';

import SpawnChoiceBlock from "./components/SpawnChoiceBlock";

import man from 'assets/images/spawnChoice/man.png';

import './spawnChoice.scss';

const SpawnChoice = ({spawnData}) => {
    const [currentComponent, setCurrentComponent] = React.useState(0);
    const [nextComponent, setNextComponent] = React.useState(0);
    const [currentOption, setCurrentOption] = React.useState(0);

    const slider = React.useRef(null),
        elNextTitle = React.useRef(null),
        elCurrentTitle = React.useRef(null),
        exitPointElement = React.useRef(null);

    const handleMoveSlider = React.useCallback((e) => {
        slider.current.style.width = `${e.target.offsetWidth + 20}px`;
        slider.current.style.left = `${e.target.offsetLeft - 10}px`;

        elCurrentTitle.current.style.transition = 'margin .2s ease, opacity .2s ease .1s'
        elNextTitle.current.style.transition = 'opacity .1s ease .3s'

        elCurrentTitle.current.style.marginLeft = '35%';
        elCurrentTitle.current.style.opacity = '0';
        elNextTitle.current.style.opacity = '1';

        setTimeout(() => {
            setCurrentComponent(nextComponent);
            elCurrentTitle.current.style.marginLeft = '0';

            elCurrentTitle.current.style.transition = 'opacity .1s';
            elNextTitle.current.style.transition = 'opacity .1s';

            elCurrentTitle.current.style.opacity = '1';
            elNextTitle.current.style.opacity = '0';
        }, 310)
    }, [nextComponent, slider, elNextTitle, elCurrentTitle]);

    React.useEffect(() => {
        if (slider.current && exitPointElement.current) {
            slider.current.style.width = `${exitPointElement.current.offsetWidth + 20}px`;
            slider.current.style.left = `${exitPointElement.current.offsetLeft - 10}px`;
        }
    }, [slider, exitPointElement]);

    return (
        <div className='spawn-choice'>
            <div className='spawn-choice-location-frame'>
                <img src={man} alt='man'/>
            </div>
            <div className='spawn-choice__title'>выбЕРитЕ тОчку вОзРОжДЕНиЯ</div>
            <div className='spawn-choice-navigation'>
                <ul className='spawn-choice-navigation-list'>
                    {spawnData.filter(el => el.data !== undefined).map((el, key) => {
                        if (key === 0) return <li
                            key={key}
                            ref={exitPointElement}
                            className={cn('spawn-choice-navigation-list__element', currentComponent === key && 'active')}
                            onMouseOver={() => {
                                setNextComponent(el.id);
                            }}
                            onClick={(e) => handleMoveSlider(e)}
                        >{el.title}</li>
                        else return <li
                            key={key}
                            className={cn('spawn-choice-navigation-list__element', currentComponent === key && 'active')}
                            onMouseOver={() => {
                                setNextComponent(el.id);
                            }}
                            onClick={(e) => handleMoveSlider(e)}
                        >{el.title}</li>
                    })}
                </ul>
                <div
                    className='spawn-choice-navigation__slider'
                    ref={slider}
                />
            </div>
            <div className='spawn-choice-info'>
                <span className='spawn-choice-info__title'>точка возрождения</span>
                <div className='spawn-choice-info-container prev-container'>
                    <SpawnChoiceBlock
                        nextTitle={spawnData[nextComponent].title}
                        currComponent={spawnData[currentComponent]}
                        elNextTitle={elNextTitle}
                        elCurrentTitle={elCurrentTitle}
                        currentOption={currentOption}
                        setCurrentOption={setCurrentOption}
                    />
                </div>
            </div>
            <div
                className='spawn-choice-play'
                onClick={() => {
                    let result;

                    if (spawnData[currentComponent].data) {
                        result = {
                            place: currentComponent,
                            data: spawnData[currentComponent].data[currentOption].id
                        }
                    } else result = {
                        place: currentComponent
                    }

                    window.alt.emit('client::spawnChoice:choose', result);
                }}>
                играть
                <div className='spawn-choice-play__slider'/>
            </div>
        </div>
    )
}

export default React.memo(SpawnChoice);