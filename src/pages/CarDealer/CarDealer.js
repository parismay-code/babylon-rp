import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import rotateIcon    from 'assets/images/shops/carDealer/rotateIcon.svg';
import testDriveIcon from 'assets/images/shops/carDealer/testDriveIcon.svg';
import arrow         from 'assets/images/shops/carDealer/arrow.svg';

import {regExp} from 'utils/regExp';

import './CarDealer.scss';

const CarDealer = ({store}) => {
	const [currentCategory, setCategory] = React.useState(store.carDealerData[0]?.categoryId),
		[currentCar, setCar] = React.useState(0),
		[currentColor, setColor] = React.useState(0);
	
	const colorsList = React.useMemo(() =>
		['#000000', '#ffffff', '#E5413D', '#F28C2F', '#E8F12D', '#4EE553', '#82E2FF', '#E500C0'], []);
	
	const data = React.useMemo(() =>
			store.carDealerData.filter(el => el.categoryId === currentCategory)[0], [currentCategory, store.carDealerData]),
		price = React.useMemo(() =>
			`${String(data?.cars[currentCar].price).replace(regExp.money, '$1 ')} $`, [currentCar, data?.cars]);
	
	const handleChangeCar = React.useCallback((bool) => {
		if (bool) {
			if (currentCar + 1 > data?.cars.length - 1) setCar(0);
			else setCar(currentCar + 1);
		} else {
			if (currentCar - 1 < 0) setCar(data?.cars.length - 1);
			else setCar(currentCar - 1);
		}
	}, [currentCar, data?.cars.length]);
	
	React.useEffect(() => {
		setCar(0);
	}, [currentCategory]);
	
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="car-dealer">
		<div className="car-dealer-navigation">
			{store.carDealerData.filter(el => el.categoryId === 0).length > 0 &&
			<div
				className={cn('car-dealer-navigation-element',
					currentCategory === 0 ? 'car-dealer-navigation-element_active' : null)}
				onClick={() => setCategory(0)}
			>
				<div className="car-dealer-navigation-element__icon">
					<svg
						width="57.729"
						height="18.781"
						viewBox="0 0 57.729 18.781"
					>
						<path
							d="M-1499.771-664.648c-.142-.469-.257-.949-.436-1.4-.145-.369-.414-.624-.382-1.129a1.578,1.578,0,0,0-1.057-1.607,45.936,45.936,0,0,0-8.925-3.192c-.431-.091-.87-.151-1.308-.2-.173-.019-.369-.11-.52.145-.047.079-.409.037-.588-.04-.735-.319-1.456-.67-2.179-1.014-2.063-.981-4.123-1.968-6.189-2.944a14.184,14.184,0,0,0-5.222-1.127q-3.12-.205-6.251-.245a33.366,33.366,0,0,0-12.238,2.2c-2.462.924-4.972,1.718-7.47,2.541a9.239,9.239,0,0,1-1.575.287.952.952,0,0,1-.591-.151,2.494,2.494,0,0,0-1.72-.2c-.008.075-.024.113-.012.125.478.5.339,1.023.178,1.625a12.876,12.876,0,0,0-.353,2.415,3.52,3.52,0,0,1-.662,1.938,2.764,2.764,0,0,0-.228.458v1.766c.045.329.091.657.134.986a1.274,1.274,0,0,0,1.255,1.271c1.488.255,2.97.54,4.455.813l.394.071a5.141,5.141,0,0,1,4.874-6.505,5.137,5.137,0,0,1,4.8,6.713h25.722a5.033,5.033,0,0,1,1.384-5.374,4.743,4.743,0,0,1,3.592-1.316,4.835,4.835,0,0,1,3.99,2.269,4.966,4.966,0,0,1,.487,4.609,18.728,18.728,0,0,0,3.956-.345,3.923,3.923,0,0,1,1.972-.189.315.315,0,0,0,.273-.146.543.543,0,0,0-.043-.4c-.1-.158-.367-.277-.368-.413a5.906,5.906,0,0,1,.172-1.053l.684.128Z"
							transform="translate(1557.5 677.406)"/>
						<path
							d="M-1024-545.783a4.13,4.13,0,0,0-4.108,4.152,4.155,4.155,0,0,0,4.209,4.061,4.146,4.146,0,0,0,4.024-4.12A4.124,4.124,0,0,0-1024-545.783Z"
							transform="translate(1035.095 556.351)"/>
						<path
							d="M-1463.394-545.746a4.1,4.1,0,0,0-4.1,4.067,4.107,4.107,0,0,0,4.074,4.142,4.127,4.127,0,0,0,4.128-4.137A4.094,4.094,0,0,0-1463.394-545.746Z"
							transform="translate(1509.796 556.317)"/>
					</svg>
				</div>
			</div>}
			{store.carDealerData.filter(el => el.categoryId === 1).length > 0 &&
			<div
				className={cn('car-dealer-navigation-element',
					currentCategory === 1 ? 'car-dealer-navigation-element_active' : null)}
				onClick={() => setCategory(1)}
			>
				<div className="car-dealer-navigation-element__icon">
					<svg
						width="56.325"
						height="24.049"
						viewBox="0 0 56.325 24.049"
					>
						<g transform="translate(1455.552 75.204)">
							<path
								d="M-1401.5-56.973a7.82,7.82,0,0,0-2.862-6.245,7.584,7.584,0,0,0-5.561-1.771,7.927,7.927,0,0,0-7.335,8.443h-17.426a7.876,7.876,0,0,0-3.1-6.811,7.607,7.607,0,0,0-5.179-1.64,7.772,7.772,0,0,0-5.6,2.638,7.959,7.959,0,0,0-1.975,5.822,14.553,14.553,0,0,1-2.162-.018,2.781,2.781,0,0,1-2.325-3.017c.243-2.482.55-4.959.873-7.432a3.66,3.66,0,0,1,.5-1.325c.9-1.542,1.874-3.046,2.772-4.592a3.388,3.388,0,0,1,3.192-1.782c6.78.015,13.56,0,20.34.019a25.969,25.969,0,0,1,3.975.2,6.861,6.861,0,0,1,2.513,1.011c2.07,1.314,4.064,2.746,6.111,4.1a2.774,2.774,0,0,0,1.167.365c3.26.4,6.526.746,9.783,1.157a3.2,3.2,0,0,1,2.155,1.67,11.018,11.018,0,0,1,1.5,4.135c.123.632.246,1.265.354,1.9A3.007,3.007,0,0,1-1401.5-56.973Zm-27.3-15.355v4.122c.07.038.1.07.141.073q4.5.4,9.005.791a4.225,4.225,0,0,0,2.425-.821c-1.86-1.263-3.621-2.5-5.434-3.662a3.487,3.487,0,0,0-1.659-.482C-1425.8-72.372-1427.271-72.328-1428.8-72.328Zm-8.252-.016v3.407l5.966.569v-3.976Zm-6.937-.118c-.039.411-.084.759-.1,1.107a1.561,1.561,0,0,0,1.3,1.779c1.051.194,2.125.266,3.223.4v-3.282Z"
								stroke="rgba(0,0,0,0)" strokeWidth="1"/>
							<path
								d="M-1401.448,25.847a5.568,5.568,0,0,1,5.494-5.565,5.686,5.686,0,0,1,5.771,5.582,5.687,5.687,0,0,1-5.681,5.613A5.642,5.642,0,0,1-1401.448,25.847Z"
								transform="translate(-46.906 -83.133)" stroke="rgba(0,0,0,0)" strokeWidth="1"/>
							<path
								d="M-1129.921,20.311a5.581,5.581,0,0,1,5.493,5.563,5.659,5.659,0,0,1-5.522,5.631,5.739,5.739,0,0,1-5.636-5.61A5.57,5.57,0,0,1-1129.921,20.311Z"
								transform="translate(-279.594 -83.159)" stroke="rgba(0,0,0,0)" strokeWidth="1"/>
						</g>
					</svg>
				</div>
			</div>}
			{store.carDealerData.filter(el => el.categoryId === 2).length > 0 &&
			<div
				className={cn('car-dealer-navigation-element',
					currentCategory === 2 ? 'car-dealer-navigation-element_active' : null)}
				onClick={() => setCategory(2)}
			>
				<div className="car-dealer-navigation-element__icon">
					<svg
						width="54.977"
						height="15.475"
						viewBox="0 0 54.977 15.475"
					>
						<g transform="translate(0.5 0.501)">
							<path
								d="M-742,345.18c.14.434.25.88.426,1.3a4.183,4.183,0,0,0,3.136,2.415c-.8-2.663-.265-4.878,2.077-6.4a4.765,4.765,0,0,1,5.689.154,5.16,5.16,0,0,1,1.649,6.623l24.277.227a4.91,4.91,0,0,1-.2-4.362A4.551,4.551,0,0,1-703.133,343a4.8,4.8,0,0,1,5.6.234,4.83,4.83,0,0,1,1.858,3.185,5.128,5.128,0,0,1-.914,3.62c.926-.071,1.772-.084,2.6-.211,1.288-.2,2.573-.433,3.842-.727a4.5,4.5,0,0,0,2.125-1.162v-2.587c-.311-.195-.626-.383-.931-.585a24.941,24.941,0,0,0-7.468-3.332,33.781,33.781,0,0,0-5.3-.855,6.974,6.974,0,0,1-1.833-.7c-2.369-.987-4.726-2-7.108-2.954a5.379,5.379,0,0,0-1.642-.27.97.97,0,0,0-1.016.649.661.661,0,0,0,.4.978c.92.4,1.839.808,2.747,1.237a.677.677,0,0,1,.259.4c.083.281.121.576.188.914a2.862,2.862,0,0,1-.363.017q-3.138-.2-6.276-.41c-1.273-.086-1.273-.091-1.273-1.359v-.043c0-1.021,0-1.021-.907-1.436-.063-.029-.169-.049-.181-.094-.218-.787-.9-.63-1.45-.7a8.076,8.076,0,0,0-2.933.366c-2.172.538-4.338,1.1-6.509,1.639a15.454,15.454,0,0,1-3.584.379c-1.575.019-3.148.212-4.723.292-.785.04-1.574.016-2.36-.013-.7-.026-.807.086-.579.725a.358.358,0,0,1-.009.274,7.847,7.847,0,0,0-1.12,2.63Z"
								transform="translate(742 -336.657)" stroke="rgba(0,0,0,0)" strokeWidth="1"/>
							<path
								d="M-258.436,413.456a4.241,4.241,0,0,0,4.281-4.259,4.245,4.245,0,0,0-4.3-4.334,4.3,4.3,0,0,0-4.286,4.354A4.3,4.3,0,0,0-258.436,413.456Z"
								transform="translate(266.809 -398.982)" stroke="rgba(0,0,0,0)" strokeWidth="1"/>
							<path
								d="M-639.849,419.174a4.024,4.024,0,0,0,3.951-4.049,4.022,4.022,0,0,0-4.1-3.94,4.014,4.014,0,0,0-3.907,4.175A4.045,4.045,0,0,0-639.849,419.174Z"
								transform="translate(681.416 -404.757)" stroke="rgba(0,0,0,0)" strokeWidth="1"/>
						</g>
					</svg>
				</div>
			</div>}
		</div>
		<div className="car-dealer-info">
			<div className="car-dealer-info-number">
				<div className="car-dealer-info-number-value">
					<span className="car-dealer-info-number-value__current">{currentCar + 1}</span>
					<span className="car-dealer-info-number-value__all">/{data?.cars.length}</span>
				</div>
				<div className="car-dealer-info-number__title">{data?.name}</div>
			</div>
			<div className="car-dealer-info-car">
				<div className="car-dealer-info-car__name">{data?.cars[currentCar].name}</div>
				<div className="car-dealer-info-car__price">{price}</div>
				<div className="car-dealer-info-car-colors">
					{colorsList.map((el, key) => {
						return <div
							key={key}
							className={cn('car-dealer-info-car-colors__element',
								currentColor === key ? 'car-dealer-info-car-colors__element_active' : null)}
							style={{backgroundColor: colorsList[key]}}
							onClick={() => setColor(key)}
						/>;
					})}
				</div>
			</div>
			<div
				className="car-dealer-info-test"
				onClick={() => window.alt.emit('client::carDealer:testDrive', data?.cars[currentCar].id)}
			>
				<img className="car-dealer-info-test__icon" src={testDriveIcon} alt="#"/>
				<div className="car-dealer-info-test__title">тест-драйв</div>
			</div>
		</div>
		<div className="car-dealer-choose">
			<div
				className="car-dealer-choose__prev"
				onClick={() => handleChangeCar(false)}
			>
				<img src={arrow} alt="#"/>
			</div>
			<div
				className="car-dealer-choose__next"
				onClick={() => handleChangeCar(true)}
			>
				<img src={arrow} alt="#"/>
			</div>
		</div>
		<div className="car-dealer-stats">
			<div className="car-dealer-stats-element car-dealer-stats-element_controllability">
				<div className="car-dealer-stats-element-value">
					<span
						className="car-dealer-stats-element-value__title">{data?.cars[currentCar].controllability}</span>
				</div>
				<div className="car-dealer-stats-element__title">Управляемость</div>
			</div>
			<div className="car-dealer-stats-element car-dealer-stats-element_gasMileage">
				<div className="car-dealer-stats-element-value">
					<span className="car-dealer-stats-element-value__title">{data?.cars[currentCar].gasMileage}</span>
					<span className="car-dealer-stats-element-value__unit">л.</span>
				</div>
				<div className="car-dealer-stats-element__title">Расход</div>
			</div>
			<div className="car-dealer-stats-element car-dealer-stats-element_maxSpeed">
				<div className="car-dealer-stats-element-value">
					<span className="car-dealer-stats-element-value__title">{data?.cars[currentCar].maxSpeed}</span>
					<span className="car-dealer-stats-element-value__unit">км/ч</span>
				</div>
				<div className="car-dealer-stats-element__title">Макс. скорость</div>
			</div>
			<div className="car-dealer-stats-element car-dealer-stats-element_overclocking">
				<div className="car-dealer-stats-element-value">
					<span className="car-dealer-stats-element-value__title">{data?.cars[currentCar].overclocking}</span>
					<span className="car-dealer-stats-element-value__unit">сек.</span>
				</div>
				<div className="car-dealer-stats-element__title">Разгон</div>
			</div>
			<div className="car-dealer-stats-element car-dealer-stats-element_trunk">
				<div className="car-dealer-stats-element-value">
					<span className="car-dealer-stats-element-value__title">{data?.cars[currentCar].trunk}</span>
					<span className="car-dealer-stats-element-value__unit">кг.</span>
				</div>
				<div className="car-dealer-stats-element__title">Объем багажника</div>
			</div>
		</div>
		<div
			className={cn('car-dealer__buy',
				data?.cars[currentCar].isInStock ? 'car-dealer__buy_disabled' : null)}
		>
			{data?.cars[currentCar].isInStock ? 'Купить' : 'Нет в наличии'}
		</div>
		<div className="car-dealer-exit">
			<div className="car-dealer-exit__button">Esc</div>
			<span className="car-dealer-exit__text">- выход</span>
		</div>
		<div className="car-dealer-rotate">
			<div className="car-dealer-rotate__title">вращать авто</div>
			<img className="car-dealer-rotate__icon" src={rotateIcon} alt="#"/>
		</div>
	</div>;
};

export default observer(CarDealer);