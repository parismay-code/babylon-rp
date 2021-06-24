import * as React from 'react';

import {regExp} from "utils/regExp";

import './SellBusiness.scss';

const SellBusiness = ({currentOption, prevOption, targetPlayerData, business}) => {
    const input = React.useRef(null);

    const [currentBusiness, setCurrentBusiness] = React.useState(0);

    const cost = React.useMemo(() =>
        `${String(business[currentBusiness].cost).replace(regExp.money, '$1 ')} $`, [currentBusiness, business]);

    const toggleStyles = React.useMemo(() => {
        if (currentOption === 'sellBusiness' && !prevOption)
            return {visibility: 'visible', width: '100%', height: '100%'};
        else if (currentOption === 'sellBusiness' && prevOption)
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
        className='hud-interactions-property-sell-business'
        style={toggleStyles}
    >
        <div className='hud-interactions-property-sell-business-header'>
            <div className='hud-interactions-property-sell-business-header-nickname'>
                <span
                    className='hud-interactions-property-sell-business-header-nickname__name'>{targetPlayerData.nickname}</span>
                <div className='hud-interactions-property-sell-business-header-nickname__id'>ID: {targetPlayerData.id}</div>
            </div>
        </div>
        <div className='hud-interactions-property-sell-business-content'>
            <div className='hud-interactions-property-sell-business-content-choose-business'>
                <div className='hud-interactions-property-sell-business-content-choose-business-header'>Выберите бизнес
                </div>
                <div className='hud-interactions-property-sell-business-content-choose-business-list'>
                    {business.map((el, key) => {
                        return <svg
                            key={key}
                            className='hud-interactions-property-sell-business-content-choose-business-list__element'
                            xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27"
                            fill={currentBusiness === key ? '#eaeaea' : null}
                            style={currentBusiness === key ? {filter: 'drop-shadow(0 1px 1px #00000080)'} : null}
                            opacity={currentBusiness === key ? '1' : '.5'}
                            onClick={() => setCurrentBusiness(key)}>
                            <path
                                d="M15,24V22.5H4.515l-.015,6a2.99,2.99,0,0,0,3,3h21a2.99,2.99,0,0,0,3-3v-6H21V24ZM30,10.5H23.985v-3l-3-3h-6l-3,3v3H6a3.009,3.009,0,0,0-3,3V18a2.99,2.99,0,0,0,3,3h9V18h6v3h9a3.009,3.009,0,0,0,3-3V13.5A3.009,3.009,0,0,0,30,10.5Zm-9,0H15v-3h6Z"
                                transform="translate(-3 -4.5)"/>
                        </svg>
                    })}
                </div>
            </div>
            <div className='hud-interactions-property-sell-business-content-form'>
                <div className='hud-interactions-property-sell-business-content-form__title'>Введите сумму продажи</div>
                <div className='hud-interactions-property-sell-business-content-form-input'>
                    <input
                        ref={input}
                        className='hud-interactions-property-sell-business-content-form-input__field'
                        type='number'
                        name='n_sellBusinessInput'
                    />
                    <div className='hud-interactions-property-sell-business-content-form-input__dollar'>$</div>
                    <input
                        className='hud-interactions-property-sell-business-content-form-input__submit'
                        type='submit'
                        name='n_sellBusinessSubmit'
                        value='Продать'
                        onClick={() => {
                            window.alt.emit('client::interaction:sellBusiness', business[currentBusiness].id, input.current.value, targetPlayerData.id);
                        }}
                    />
                </div>
            </div>
            <div className='hud-interactions-property-sell-business-content-info'>
                <div className='hud-interactions-property-sell-business-content-info-name'>
                    <div className='hud-interactions-property-sell-business-content-info-name__title'>Название</div>
                    <div
                        className='hud-interactions-property-sell-business-content-info-name__value'>{business[currentBusiness].name} #{business[currentBusiness].id}</div>
                </div>
                <div className='hud-interactions-property-sell-business-content-info-cost'>
                    <div className='hud-interactions-property-sell-business-content-info-cost__title'>Гос. стоимость
                    </div>
                    <div className='hud-interactions-property-sell-business-content-info-cost__value'>{cost}</div>
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(SellBusiness);