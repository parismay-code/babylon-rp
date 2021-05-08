import * as React from 'react';

import {regExp} from "utils/regExp";

import './SellCar.scss';

const SellCar = ({currentOption, prevOption, player, transport}) => {
    const input = React.useRef(null);

    const [currentCar, setCurrentCar] = React.useState(0);

    const motorcycles = React.useMemo(() => transport.filter(el => el.type === 'motorcycle'), [transport]);
    const cars = React.useMemo(() => transport.filter(el => el.type === 'car'), [transport]);
    const air = React.useMemo(() => transport.filter(el => el.type === 'air'), [transport]);
    const boats = React.useMemo(() => transport.filter(el => el.type === 'boat'), [transport]);

    const findIndex = React.useCallback((name) => transport.findIndex(el => el.name === name), [transport]);

    const cost = React.useMemo(() =>
        `${String(transport[currentCar].cost).replace(regExp.money, '$1 ')} $`, [currentCar, transport]);

    const toggleStyles = React.useMemo(() => {
        if (currentOption === 'sellCar' && !prevOption)
            return {visibility: 'visible', width: '100%', height: '100%'};
        else if (currentOption === 'sellCar' && prevOption)
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
        className='hud-interactions-property-sell-car'
        style={toggleStyles}
    >
        <div className='hud-interactions-property-sell-car-header'>
            <div className='hud-interactions-property-sell-car-header-nickname'>
                <span
                    className='hud-interactions-property-sell-car-header-nickname__firstname'>{player?.nickname?.firstname}</span>
                <span
                    className='hud-interactions-property-sell-car-header-nickname__lastname'>{player?.nickname?.lastname}</span>
                <div className='hud-interactions-property-sell-car-header-nickname__id'>ID: {player?.id}</div>
            </div>
        </div>
        <div className='hud-interactions-property-sell-car-content'>
            <div className='hud-interactions-property-sell-car-content-choose-transport'>
                <div className='hud-interactions-property-sell-car-content-choose-transport-header'>Выберите транспорт
                </div>
                <div className='hud-interactions-property-sell-car-content-choose-transport-list'
                     style={motorcycles.length > 0 ? {display: 'flex'} : {display: 'none'}}>
                    {motorcycles.map((el, key) => {
                        return <svg
                            className='hud-interactions-property-sell-car-content-choose-transport-list__element'
                            key={key} xmlns="http://www.w3.org/2000/svg" width="36.366" height="21.816"
                            viewBox="0 0 36.366 21.816" fill={currentCar === findIndex(el.name) ? '#AAB6EF' : null}
                            opacity={currentCar === findIndex(el.name) ? '1' : '.5'}
                            onClick={() => setCurrentCar(findIndex(el.name))}>
                            <path
                                d="M29.138,11.772a7.188,7.188,0,0,0-2.409.392L24.86,9.045h4.681A1.36,1.36,0,0,0,30.9,7.681V5.863A1.36,1.36,0,0,0,29.541,4.5H26.967a1.364,1.364,0,0,0-1.011.449l-2.13,2.369-1.3-2.159A1.373,1.373,0,0,0,21.36,4.5H16.815a.912.912,0,0,0-.909.909v.909a.912.912,0,0,0,.909.909h3.772l1.091,1.818H12.947C11.941,7.733,10.4,6.772,7.271,6.772H4.118A1.383,1.383,0,0,0,2.726,8.164,1.362,1.362,0,0,0,4.09,9.5H7.271a3.008,3.008,0,0,1,2.716,1.409l-.642,1.165a7.272,7.272,0,1,0,4.971,8.789H19.1a1.364,1.364,0,0,0,1.363-1.426,8.605,8.605,0,0,1,3.193-7.1l.71,1.182a7.273,7.273,0,1,0,4.772-1.744ZM7.271,23.588a4.545,4.545,0,0,1,0-9.09,4.227,4.227,0,0,1,.71.057L5.624,18.839a1.365,1.365,0,0,0,1.193,2.022h4.619A4.557,4.557,0,0,1,7.271,23.588Zm26.354-4.295a4.545,4.545,0,0,1-9.084-.25,4.508,4.508,0,0,1,1.256-3.13L28.6,20.594a.913.913,0,0,0,1.25.312l.778-.466a.913.913,0,0,0,.312-1.25l-2.761-4.6a4.351,4.351,0,0,1,.9-.091A4.544,4.544,0,0,1,33.626,19.293Z"
                                transform="translate(0.002 -4.5)"/>
                        </svg>

                    })}
                </div>
                <div className='hud-interactions-property-sell-car-content-choose-transport-list'
                     style={cars.length > 0 ? {display: 'flex'} : {display: 'none'}}>
                    {cars.map((el, key) => {
                        return <svg
                            className='hud-interactions-property-sell-car-content-choose-transport-list__element'
                            key={key} xmlns="http://www.w3.org/2000/svg" width="29.394" height="22.964"
                            viewBox="0 0 29.394 22.964" fill={currentCar === findIndex(el.name) ? '#AAB6EF' : null}
                            opacity={currentCar === findIndex(el.name) ? '1' : '.5'}
                            onClick={() => setCurrentCar(findIndex(el.name))}>
                            <path
                                d="M9.461,21.487a2.3,2.3,0,0,0-2.3-2.3,2.3,2.3,0,1,0,1.622,3.918A2.211,2.211,0,0,0,9.461,21.487Zm.517-4.593H24.56L23.282,11.77a.523.523,0,0,0-.2-.251.517.517,0,0,0-.3-.136H11.757a.517.517,0,0,0-.3.136.523.523,0,0,0-.2.251Zm19.692,4.593a2.3,2.3,0,1,0-.675,1.622A2.211,2.211,0,0,0,29.669,21.487Zm2.3-1.378v5.511a.442.442,0,0,1-.459.459H30.129v1.837a2.756,2.756,0,1,1-5.511,0V26.08H9.92v1.837a2.744,2.744,0,0,1-2.756,2.756,2.744,2.744,0,0,1-2.756-2.756V26.08H3.031a.442.442,0,0,1-.459-.459V20.109a3.1,3.1,0,0,1,.94-2.275,3.1,3.1,0,0,1,2.275-.94h.4L7.7,10.881A4.036,4.036,0,0,1,9.188,8.62a4.067,4.067,0,0,1,2.569-.911H22.78a4.279,4.279,0,0,1,4.062,3.172l1.507,6.014h.4a3.21,3.21,0,0,1,3.215,3.215Z"
                                transform="translate(-2.571 -7.709)"/>
                        </svg>

                    })}
                </div>
                <div className='hud-interactions-property-sell-car-content-choose-transport-list'
                     style={air.length > 0 ? {display: 'flex'} : {display: 'none'}}>
                    {air.map((el, key) => {
                        return <svg
                            className='hud-interactions-property-sell-car-content-choose-transport-list__element'
                            key={key} xmlns="http://www.w3.org/2000/svg" width="24.401" height="24.279"
                            viewBox="0 0 24.401 24.279" fill={currentCar === findIndex(el.name) ? '#AAB6EF' : null}
                            opacity={currentCar === findIndex(el.name) ? '1' : '.5'}
                            onClick={() => setCurrentCar(findIndex(el.name))}>
                            <path
                                d="M24.637,18.67a.348.348,0,0,0,.483-.352V16.542a1,1,0,0,0-.437-.769L15.39,10.235a1,1,0,0,1-.437-.768v-6.2a3.137,3.137,0,0,0-.19-.98S14.209.905,13.239.752A1.814,1.814,0,0,0,12.924.72h-.005a1.877,1.877,0,0,0-.362.037l-.11.024L12.28.833c-.807.269-1.223,1.441-1.223,1.441a3.547,3.547,0,0,0-.17.988v6.2a1,1,0,0,1-.437.769L1.157,15.773a1,1,0,0,0-.437.769v1.776a.348.348,0,0,0,.483.351l9.2-2.987a.348.348,0,0,1,.483.352V20.88a1.15,1.15,0,0,1-.407.814l-1.22.916a1.15,1.15,0,0,0-.407.814v1.188a.363.363,0,0,0,.489.368l3.088-.887a2.088,2.088,0,0,1,.977,0l3.091.887a.363.363,0,0,0,.489-.368V23.424a1.15,1.15,0,0,0-.407-.814l-1.22-.916a1.152,1.152,0,0,1-.407-.814V16.034a.348.348,0,0,1,.483-.351l9.2,2.987Z"
                                transform="translate(-0.72 -0.72)"/>
                        </svg>

                    })}
                </div>
                <div className='hud-interactions-property-sell-car-content-choose-transport-list'
                     style={boats.length > 0 ? {display: 'flex'} : {display: 'none'}}>
                    {boats.map((el, key) => {
                        return <svg
                            className='hud-interactions-property-sell-car-content-choose-transport-list__element'
                            key={key} xmlns="http://www.w3.org/2000/svg" width="28.125" height="29.25"
                            viewBox="0 0 28.125 29.25" fill={currentCar === findIndex(el.name) ? '#AAB6EF' : null}
                            opacity={currentCar === findIndex(el.name) ? '1' : '.5'}
                            onClick={() => setCurrentCar(findIndex(el.name))}>
                            <g>
                                <path
                                    d="M24.736,29.672a23.181,23.181,0,0,1-6.757,1.048,23.181,23.181,0,0,1-6.757-1.048,13.8,13.8,0,0,1-4.38,2.545.141.141,0,0,0,.063.274,29.49,29.49,0,0,0,4.317-.844,22.591,22.591,0,0,0,6.757.977,20.094,20.094,0,0,0,6.757-.977A27.807,27.807,0,0,0,29.1,32.5a.141.141,0,0,0,.063-.274A14.968,14.968,0,0,1,24.736,29.672Z"
                                    transform="translate(-3.937 -3.375)"/>
                                <path
                                    d="M31.324,18.492h0L18.232,12.48a.552.552,0,0,0-.471,0L4.676,18.492h0a1.27,1.27,0,0,0-.738,1.153,1.307,1.307,0,0,0,.091.471l3.846,9.555a8,8,0,0,0,3.987-1.547,17.014,17.014,0,0,0,5.576,1.308c.2.014.387.014.563.014s.366-.007.563-.014a16.838,16.838,0,0,0,5.576-1.308,8,8,0,0,0,3.987,1.547l3.846-9.555a1.307,1.307,0,0,0,.091-.471A1.27,1.27,0,0,0,31.324,18.492ZM14.906,20.25c-.464,0-.844-.689-.844-1.547s.38-1.547.844-1.547.844.689.844,1.547S15.37,20.25,14.906,20.25Zm6.188,0c-.464,0-.844-.689-.844-1.547s.38-1.547.844-1.547.844.689.844,1.547S21.558,20.25,21.094,20.25Z"
                                    transform="translate(-3.937 -3.375)"/>
                                <path
                                    d="M27.555,8.93V8.923c-.394-1.87-1.23-3.3-2.805-3.3H22.317l-.141-.562A2.25,2.25,0,0,0,20,3.375H15.989a2.249,2.249,0,0,0-2.18,1.695l-.141.555H11.25c-1.61,0-2.468,1.455-2.8,3.3l-1.28,6.806a.282.282,0,0,0,.394.309l1.779-.816a.283.283,0,0,0,.162-.2l1.139-6.019c.176-.752.513-1.125,1.132-1.125H24.23c.626,0,.921.352,1.132,1.125L26.5,15.026a.268.268,0,0,0,.162.2l1.786.823a.281.281,0,0,0,.394-.309Z"
                                    transform="translate(-3.937 -3.375)"/>
                            </g>
                        </svg>

                    })}
                </div>
            </div>
            <div className='hud-interactions-property-sell-car-content-form'>
                <div className='hud-interactions-property-sell-car-content-form__title'>Введите сумму</div>
                <div className='hud-interactions-property-sell-car-content-form-input'>
                    <input
                        ref={input}
                        className='hud-interactions-property-sell-car-content-form-input__field'
                        type='number'
                        name='n_sellTransportInput'
                    />
                    <div className='hud-interactions-property-sell-car-content-form-input__dollar'>$</div>
                    <input
                        className='hud-interactions-property-sell-car-content-form-input__submit'
                        type='submit'
                        name='n_sellTransportSubmit'
                        value='Продать'
                        onClick={() => {
                            window.alt.emit('client::interaction:sellCar', transport[currentCar].name, input.current.value);
                        }}
                    />
                </div>
            </div>
            <div className='hud-interactions-property-sell-car-content-info'>
                <div className='hud-interactions-property-sell-car-content-info-name'>
                    <div className='hud-interactions-property-sell-car-content-info-name__title'>Марка</div>
                    <div
                        className='hud-interactions-property-sell-car-content-info-name__value'>{transport[currentCar].name}</div>
                </div>
                <div className='hud-interactions-property-sell-car-content-info-trunk'>
                    <div className='hud-interactions-property-sell-car-content-info-trunk__title'>Багажник</div>
                    <div
                        className='hud-interactions-property-sell-car-content-info-trunk__value'>{transport[currentCar].trunk}</div>
                </div>
                <div className='hud-interactions-property-sell-car-content-info-cost'>
                    <div className='hud-interactions-property-sell-car-content-info-cost__title'>Гос. стоимость</div>
                    <div className='hud-interactions-property-sell-car-content-info-cost__value'>{cost}</div>
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(SellCar);