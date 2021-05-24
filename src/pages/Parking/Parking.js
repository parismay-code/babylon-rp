import * as React from 'react';
import cn from 'classnames';

import ParkingSlots from './components/ParkingSlots';

import car from 'assets/images/parking/car.svg';
import carIcon from 'assets/images/parking/carIcon.svg';

import {regExp} from 'utils/regExp';

import './Parking.scss';

const Parking = ({parkingData, player}) => {
	const [currentCar, setCar] = React.useState(0);
	
	const screen = React.useRef(null);
	
	const slots = React.useMemo(() => parkingData.slots.length / 10, [parkingData.slots]);
	
	const price = React.useMemo(() =>
		`${String(parkingData.price).replace(regExp.money, '$1 ')}$`, [parkingData.price]);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('parking_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="parking">
		<div className="parking-content">
			<div className="parking-content-header">
				<div className="parking-content-header-info">
					<div className="parking-content-header-info__title">парковка № {parkingData.id}</div>
					<div className="parking-content-header-info__owner">Владелец: {parkingData.owner}</div>
					<div className="parking-content-header-info-values">
						<div className="parking-content-header-info-values-price">
							<div className="parking-content-header-info-values-price__value">{price}</div>
							<div className='parking-content-header-info-values-price__title'>за <br/>место</div>
						</div>
						<div className="parking-content-header-info-values-slots">
							<div className="parking-content-header-info-values-slots__value">{parkingData.slots.filter(el => !el).length}</div>
							<div className='parking-content-header-info-values-slots__title'>мест <br/>свободно</div>
						</div>
						<div className="parking-content-header-info-values-all-slots">
							<div className="parking-content-header-info-values-all-slots__value">{parkingData.maxSlots}</div>
							<div className='parking-content-header-info-values-all-slots__title'>мест <br/>всего</div>
						</div>
					</div>
				</div>
				<div className='parking-content-header-car parking-content-header-car_active'>
					<img className='parking-content-header-car__image' src={car} alt='#'/>
					<div className='parking-content-header-car__name'>{player.playerState.cars[currentCar].name}</div>
				</div>
				<div className='parking-content-header-arend'>
					<div className='parking-content-header-arend-input'>
						<input
							className='parking-content-header-arend-input__field'
							type='number'
							name='n_parkingArendDays'
							placeholder='Кол-во дней'
							onChange={(e) => {
								if (e.target.value > 14) e.target.value = '14';
								else if (e.target.value < 0) e.target.value = '0';
							}}
						/>
						<div className='parking-content-header-arend-input__submit'>Арендовать</div>
					</div>
					<div className='parking-content-header-arend-choose'>
						<div className='parking-content-header-arend-choose__title'>Выберите авто</div>
						<div className='parking-content-header-arend-choose-cars'>
							{player.playerState.cars.map((el, key) => {
								return <img
									key={key}
									className={cn('parking-content-header-arend-choose-cars__icon', currentCar === key ? 'parking-content-header-arend-choose-cars__icon_active' : null)}
									src={carIcon}
									alt='#'
									onClick={() => setCar(key)}
								/>
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="parking-content-slots">
				{slots > 0 && slots <= 8 && <ParkingSlots split={slots === 1}/>}
				{slots > 2 && slots <= 8 && <ParkingSlots split={slots === 3}/>}
				{slots > 4 && slots <= 8 && <ParkingSlots split={slots === 5}/>}
				{slots > 6 && slots <= 8 && <ParkingSlots split={slots === 7}/>}
			</div>
		</div>
		<div className="parking-exit">
			<div className="parking-exit__button">Esc</div>
			<span className="parking-exit__text">- выход</span>
		</div>
	</div>;
};

export default React.memo(Parking);