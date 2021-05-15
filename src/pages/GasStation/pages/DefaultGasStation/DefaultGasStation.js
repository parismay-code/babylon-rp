import * as React from 'react';
import {observer} from "mobx-react-lite";
import cn from 'classnames';

import gasStation from 'assets/images/gasStation/gasStation.svg';
import waves from 'assets/images/gasStation/waves.svg';
import arrow from "assets/images/creator/arrow.svg";

import {regExp} from "utils/regExp";

import './DefaultGasStation.scss';

const DefaultGasStation = ({data, store, player}) => {
    const screen = React.useRef(null),
        main = React.useRef(null);

    const [liters, setLiters] = React.useState(0),
        [type, setType] = React.useState('low'),
        [submitTimeout, setSubmitTimeout] = React.useState(false);

    const totalPrice = React.useMemo(() =>
        `$${String(liters * data.cost[type]).replace(regExp.money, '$1 ')}`, [data.cost, liters, type]);

    const price = React.useMemo(() =>
        `$${String(data.cost[type]).replace(regExp.money, '$1 ')}`, [data.cost, type]);

    const fuel = React.useMemo(() => Math.floor(store.carState.fuel / store.carState.maxFuel * 100), [store.carState.fuel, store.carState.maxFuel]),
        predictionFuel = React.useMemo(() => Math.floor(liters / store.carState.maxFuel * 100 + fuel), [fuel, liters, store.carState.maxFuel]),
        maxLiters = React.useMemo(() => Math.floor(player.playerState.money.cash / data.cost[type]), [data, player.playerState.money.cash, type]);

    React.useEffect(() => setLiters(store.carState.maxFuel - store.carState.fuel), [store.carState.fuel, store.carState.maxFuel]);

    React.useEffect(() => {
        screen.current.classList.add('default-gas-station_active');
    }, []);

    React.useEffect(() => {
        setLiters(0);
    }, [type, fuel]);

    return <div ref={screen} className='default-gas-station'>
        <div className='default-gas-station-fuel-bar'>
            <div className='default-gas-station-fuel-bar__prediction-column' style={{height: `${predictionFuel}%`}}/>
            <div className='default-gas-station-fuel-bar__column' style={{height: `${fuel}%`}}/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar__line'/>
            <div className='default-gas-station-fuel-bar-bottom'>
                <div className='default-gas-station-fuel-bar-bottom__value'>{fuel}%</div>
                <img className='default-gas-station-fuel-bar-bottom__icon' src={gasStation} alt='#'/>
            </div>
        </div>
        <div className='default-gas-station-content'>
            <div className='default-gas-station-content-name'>
                <div className='default-gas-station-content-name__title'>Заправка</div>
                <div className='default-gas-station-content-name__subtitle'><span>Gas-Gas</span> №{data.id}</div>
            </div>
            <div className='default-gas-station-content-type'>
                <div
                    className={cn('default-gas-station-content-type-element default-gas-station-content-type-element_low', type === 'low' ? 'default-gas-station-content-type-element_active' : null)}
                    onClick={() => setType('low')}
                >
                    <div className='default-gas-station-content-type-element__gradient'/>
                    <div className='default-gas-station-content-type-element__blur'/>
                    <span>Low</span>
                </div>
                <div
                    className={cn('default-gas-station-content-type-element default-gas-station-content-type-element_medium', type === 'medium' ? 'default-gas-station-content-type-element_active' : null)}
                    onClick={() => setType('medium')}
                >
                    <div className='default-gas-station-content-type-element__gradient'/>
                    <div className='default-gas-station-content-type-element__blur'/>
                    <span>Medium</span>
                </div>
                <div
                    className={cn('default-gas-station-content-type-element default-gas-station-content-type-element_premium', type === 'premium' ? 'default-gas-station-content-type-element_active' : null)}
                    onClick={() => setType('premium')}
                >
                    <div className='default-gas-station-content-type-element__gradient'/>
                    <div className='default-gas-station-content-type-element__blur'/>
                    <span>Premium</span>
                </div>
            </div>
            <div className='default-gas-station-content-liters'>
                <div className='default-gas-station-content-liters__blur'/>
                <div ref={main} className='default-gas-station-content-liters-main'>
                    <div className='default-gas-station-content-liters-main-waves'>
                        <img className='default-gas-station-content-liters-main-waves__image' src={waves} alt='#'/>
                        <div className='default-gas-station-content-liters-main-waves__block'/>
                    </div>
                    <div className='default-gas-station-content-liters-main-input'>
                        <div className='default-gas-station-content-liters-main-input__title'>Кол-во литров</div>
                        <div className='default-gas-station-content-liters-main-input-block'>
                            <img className='left-arrow' src={arrow} alt='#' onClick={() => {
                                if (liters - 5 < 0) setLiters(store.carState.maxFuel - store.carState.fuel);
                                else setLiters(liters - 5);
                            }}/>
                            <input
                                type='range'
                                name='n_gasStationLiters'
                                value={liters}
                                min='0'
                                max={maxLiters <= store.carState.maxFuel - store.carState.fuel ? maxLiters : store.carState.maxFuel - store.carState.fuel}
                                onChange={(e) => setLiters(Number(e.target.value))}
                            />
                            <img className='right-arrow' src={arrow} alt='#' onClick={() => {
                                if (liters + 5 > store.carState.maxFuel - store.carState.fuel) setLiters(0);
                                else setLiters(liters + 5);
                            }}/>
                        </div>
                    </div>
                    <div className='default-gas-station-content-liters-main-value'>{liters}</div>
                    <div className='default-gas-station-content-liters-main-price'>{totalPrice}</div>
                </div>
                <div className='default-gas-station-content-liters-submit'>
                    <div className='default-gas-station-content-liters-submit-info'>
                        <div
                            className='default-gas-station-content-liters-submit-info__full'
                            onClick={() => setLiters(maxLiters <= store.carState.maxFuel - store.carState.fuel ? maxLiters : store.carState.maxFuel - store.carState.fuel)}
                        >Full
                        </div>
                        <div className='default-gas-station-content-liters-submit-info__price'>{price}</div>
                    </div>
                    <div
                        className='default-gas-station-content-liters-submit__button'
                        onClick={() => {
                            if (!submitTimeout) {
                                if (liters !== 0 && player.playerState.money.cash >= liters * data.cost[type]) {
                                    setSubmitTimeout(true);
                                    window.alt.emit('client::gasStation:refuel', liters, liters * data.cost[type], type);

                                    player.playerState.money.cash -= liters * data.cost[type];
                                    main.current.classList.add('default-gas-station-content-liters-main_waves');

                                    setTimeout(() => store.carState.fuel += liters, 800);
                                    setTimeout(() => {
                                        main.current.classList.remove('default-gas-station-content-liters-main_waves');
                                        setSubmitTimeout(false);
                                    }, 2000);
                                }
                            }
                        }}
                    >Заправить
                    </div>
                </div>
            </div>
            <div className='default-gas-station-content__owner'>Владелец: <span>{data.owner}</span></div>
        </div>
    </div>
}

export default observer(DefaultGasStation);