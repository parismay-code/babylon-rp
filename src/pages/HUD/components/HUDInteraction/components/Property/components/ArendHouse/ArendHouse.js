import * as React from 'react';

import arrow from 'assets/images/creator/arrow.svg';

import {regExp} from "utils/regExp";

import './ArendHouse.scss';

const ArendHouse = ({currentOption, prevOption, player, houses}) => {
    const input = React.useRef(null),
        term = React.useRef(null);

    const [currentHouse, setCurrentHouse] = React.useState(0),
        [arendTerm, setArendTerm] = React.useState(7);

    const cost = React.useMemo(() =>
        `${String(houses[currentHouse].cost).replace(regExp.money, '$1 ')} $`, [currentHouse, houses]);

    const toggleStyles = React.useMemo(() => {
        if (currentOption === 'arendHouse' && !prevOption)
            return {visibility: 'visible', width: '100%', height: '100%'};
        else if (currentOption === 'arendHouse' && prevOption)
            return {
                visibility: 'visible',
                width: '100%',
                height: '100%',
                transition: 'visibility 0s .5s, width 0s .5s, height 0s .5s'
            };
        else
            return {
                visibility: 'hidden',
                width: 0,
                height: 0,
                transition: 'visibility 0s .5s, width 0s .5s, height 0s .5s'
            };
    }, [currentOption, prevOption]);

    return <div
        className='hud-interactions-property-arend-house'
        style={toggleStyles}
    >
        <div className='hud-interactions-property-arend-house-header'>
            <div className='hud-interactions-property-arend-house-header-nickname'>
                <span
                    className='hud-interactions-property-arend-house-header-nickname__firstname'>{player?.nickname?.firstname}</span>
                <span
                    className='hud-interactions-property-arend-house-header-nickname__lastname'>{player?.nickname?.lastname}</span>
                <div className='hud-interactions-property-arend-house-header-nickname__id'>ID: {player?.id}</div>
            </div>
        </div>
        <div className='hud-interactions-property-arend-house-content'>
            <div className='hud-interactions-property-arend-house-content-choose-house'>
                <div className='hud-interactions-property-arend-house-content-choose-house-header'>
                    <div className='hud-interactions-property-arend-house-content-choose-house-header__title'>Выберите
                        дом
                    </div>
                    <div
                        className='hud-interactions-property-arend-house-content-choose-house-header__id'>{houses[currentHouse].id}</div>
                </div>
                <div className='hud-interactions-property-arend-house-content-choose-house-list'>
                    {houses.map((el, key) => {
                        return <svg className='hud-interactions-property-arend-house-content-choose-house-list__element'
                                    key={key} xmlns="http://www.w3.org/2000/svg" width="32.588" height="28.967"
                                    viewBox="0 0 32.588 28.967" fill={currentHouse === key ? '#AAB6EF' : null}
                                    opacity={currentHouse === key ? '1' : '.5'}
                                    onClick={() => setCurrentHouse(key)}
                        >
                            <path
                                d="M16.294,6.5,3.93,17.409a2.617,2.617,0,0,1-.309.19V28.062a.9.9,0,0,0,.905.905H28.062a.9.9,0,0,0,.905-.905V17.6a2.64,2.64,0,0,1-.3-.181Zm15.993,6.864-3.32-2.932V2.716a.9.9,0,0,0-.905-.905H24.441a.9.9,0,0,0-.905.905V5.64L17.807.583a2.255,2.255,0,0,0-3.024,0L.3,13.368a.905.905,0,0,0-.068,1.279l1.211,1.348a.905.905,0,0,0,1.279.068L15.7,4.618a.906.906,0,0,1,1.2,0L29.867,16.062a.906.906,0,0,0,1.279-.068l1.211-1.348A.9.9,0,0,0,32.287,13.368Z"
                                transform="translate(0)"/>
                        </svg>
                    })}
                </div>
            </div>
            <div className='hud-interactions-property-arend-house-content-form'>
                <div className='hud-interactions-property-arend-house-content-form__title'>Введите сумму</div>
                <div className='hud-interactions-property-arend-house-content-form-input'>
                    <input
                        ref={input}
                        className='hud-interactions-property-arend-house-content-form-input__field'
                        type='number'
                        name='n_arendHouseInput'
                    />
                    <div className='hud-interactions-property-arend-house-content-form-input__dollar'>$</div>
                    <input
                        className='hud-interactions-property-arend-house-content-form-input__submit'
                        type='submit'
                        name='n_arendHouseSubmit'
                        value='Сдать'
                        onClick={() => {
                            window.alt.emit('client::interactions:arendHouse', houses[currentHouse].id, arendTerm, input.current.value);
                        }}
                    />
                </div>
            </div>
            <div className='hud-interactions-property-arend-house-content-info'>
                <div className='hud-interactions-property-arend-house-content-info-term'>
                    <div className='hud-interactions-property-arend-house-content-info-term__title'>Срок аренды</div>
                    <div className='hud-interactions-property-arend-house-content-info-term-input'>
                        <img
                            className='hud-interactions-property-arend-house-content-info-term-input__left-arrow'
                            src={arrow}
                            alt='#'
                            onClick={() => {
                                if (arendTerm - 1 < 0) setArendTerm(7);
                                else setArendTerm(arendTerm - 1);

                                term.current.value = arendTerm;
                            }}
                        />
                        <input
                            ref={term}
                            className='hud-interactions-property-arend-house-content-info-term-input__field'
                            type='number'
                            name='n_arendHouseTerm'
                            defaultValue={arendTerm}
                            onChange={(e) => {
                                if (Number(e.target.value) > 7) e.target.value = '7';
                                else if (Number(e.target.value) < 0) e.target.value = '0';

                                setArendTerm(Number(e.target.value));
                            }}
                        />
                        <img
                            className='hud-interactions-property-arend-house-content-info-term-input__right-arrow'
                            src={arrow}
                            alt='#'
                            onClick={() => {
                                if (arendTerm + 1 > 7) setArendTerm(0);
                                else setArendTerm(arendTerm + 1);

                                term.current.value = arendTerm;
                            }}
                        />
                    </div>
                </div>
                <div className='hud-interactions-property-arend-house-content-info-garden'>
                    <div className='hud-interactions-property-arend-house-content-info-garden__title'>Сад</div>
                    <div
                        className='hud-interactions-property-arend-house-content-info-garden__value'>{houses[currentHouse].garden ? 'Есть' : 'Отсуствует'}</div>
                </div>
                <div className='hud-interactions-property-arend-house-content-info-garage'>
                    <div className='hud-interactions-property-arend-house-content-info-garage__title'>Мест в гараже
                    </div>
                    <div
                        className='hud-interactions-property-arend-house-content-info-garage__value'>{houses[currentHouse].garage}</div>
                </div>
                <div className='hud-interactions-property-arend-house-content-info-cost'>
                    <div className='hud-interactions-property-arend-house-content-info-cost__title'>Гос. стоимость</div>
                    <div className='hud-interactions-property-arend-house-content-info-cost__value'>{cost}</div>
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(ArendHouse);