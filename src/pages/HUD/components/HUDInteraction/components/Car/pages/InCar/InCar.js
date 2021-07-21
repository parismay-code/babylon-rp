import * as React from 'react';
import EventManager from 'utils/eventManager';

import './InCar.scss';

const InCar = ({
	noVisualOption,
	setNoVisualOption,
	currentOption,
	setCurrentOption,
	nextOption,
	setNextOption,
	target,
}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	const titles = React.useMemo(() => ({
		'openHood': 'Открыть капот',
		'closeHood': 'Закрыть капот',
		'seatbeltTrue': 'Отстегнуться',
		'seatbeltFalse': 'Пристегнуться',
		'eject': 'Высадить пассажиров',
		'openWindow': 'Открыть/закрыть окна',
		'openTrunk': 'Открыть багажник',
		'closeTrunk': 'Закрыть багажник',
	}), []);
	
	const openHoodIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="35.728" height="42.241" viewBox="0 0 35.728 42.241"
			            fill={noVisualOption === 'openHood' || noVisualOption === 'closeHood' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'openHood' || noVisualOption === 'closeHood' ? '1' : '.5'}
			            style={noVisualOption === 'openHood' || noVisualOption === 'closeHood' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(-8.281)">
					<path
						d="M11.962,7a6.763,6.763,0,0,0,6.5,7,6.764,6.764,0,0,0,6.5-7,6.765,6.765,0,0,0-6.5-7A6.765,6.765,0,0,0,11.962,7Zm6.532,8.867c-10.008,0-8.772-11.04-8.772-11.04H.268c-.6,0,0,31.306,0,31.306a30.117,30.117,0,0,0,8.018-1.286,11.844,11.844,0,0,0,4.989-3.477l3.444-3.749,9.862,14.62.993-.67L17.644,26.849l1.832-.918s9.845-2.639,13.153-4.625,2.765-7.914,2.953-10.43.34-2.665-.528-4.082A3.867,3.867,0,0,0,32.1,5.206c-.226,0-4.386-.379-4.386-.379S28.5,15.867,18.494,15.867Z"
						transform="translate(44.008 42.241) rotate(180)"/>
				</g>
			</svg>;
		}, [noVisualOption]),
		seatbeltIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="36.668" height="36.668" viewBox="0 0 36.668 36.668"
			            fill={noVisualOption === 'seatbeltTrue' || noVisualOption === 'seatbeltFalse' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'seatbeltTrue' || noVisualOption === 'seatbeltFalse' ? '1' : '.5'}
			            style={noVisualOption === 'seatbeltTrue' || noVisualOption === 'seatbeltFalse' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(30.282 0)">
					<rect width="3.808" height="5.223" transform="translate(0 2.693) rotate(-45)"/>
				</g>
				<g transform="translate(18.731 1.162)">
					<path
						d="M268.262,16.231l-4.039,4.039a1.169,1.169,0,0,0-.246.363l-2.332,5.394a1.169,1.169,0,0,0,.246,1.291l5.346,5.346a1.169,1.169,0,0,0,1.291.246l5.394-2.332a1.169,1.169,0,0,0,.363-.246l4.039-4.039Z"
						transform="translate(-261.548 -16.231)"/>
				</g>
				<g transform="translate(1.012 26.977)">
					<rect width="7.049" height="5.223"
					      transform="translate(0 4.984) rotate(-45)"/>
				</g>
				<g transform="translate(0 16.136)">
					<path
						d="M20.533,232.489a2.314,2.314,0,0,0-.682-1.647L15.009,226a2.329,2.329,0,0,0-3.294,0L8.8,228.917l-2.983-.062a1.162,1.162,0,0,0-.851.342l-4.62,4.62a1.169,1.169,0,0,0,0,1.653l1.519,1.518,3.31-3.31a1.169,1.169,0,0,1,1.653,0l5.346,5.346a1.169,1.169,0,0,1,0,1.653l-3.31,3.31,1.518,1.518a1.168,1.168,0,0,0,1.653,0l4.621-4.62a1.169,1.169,0,0,0,.342-.851l-.062-2.983,2.917-2.917A2.314,2.314,0,0,0,20.533,232.489Zm-4.741.757a1.169,1.169,0,0,1-1.653,0L12.6,231.712a1.169,1.169,0,1,1,1.653-1.653l1.534,1.533A1.169,1.169,0,0,1,15.791,233.246Z"
						transform="translate(-0.001 -225.318)"/>
				</g>
			</svg>;
		}, [noVisualOption]),
		ejectIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="45" height="31.5" viewBox="0 0 45 31.5"
			            fill={currentOption === 'eject' || nextOption === 'eject' ? '#eaeaea' : null}
			            opacity={currentOption === 'eject' || nextOption === 'eject' ? '1' : '.5'}
			            style={currentOption === 'eject' || nextOption === 'eject' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M13.5,18a7.875,7.875,0,1,0-7.875-7.875A7.871,7.871,0,0,0,13.5,18Zm5.4,2.25h-.584a10.873,10.873,0,0,1-9.633,0H8.1A8.1,8.1,0,0,0,0,28.35v2.025A3.376,3.376,0,0,0,3.375,33.75h20.25A3.376,3.376,0,0,0,27,30.375V28.35A8.1,8.1,0,0,0,18.9,20.25ZM33.75,18A6.75,6.75,0,1,0,27,11.25,6.752,6.752,0,0,0,33.75,18Zm3.375,2.25h-.267a8.867,8.867,0,0,1-6.216,0h-.267a7.81,7.81,0,0,0-3.916,1.083A10.29,10.29,0,0,1,29.25,28.35v2.7c0,.155-.035.3-.042.45H41.625A3.376,3.376,0,0,0,45,28.125a7.871,7.871,0,0,0-7.875-7.875Z"
					transform="translate(0 -2.25)"/>
			</svg>;
		}, [currentOption, nextOption]),
		openWindowIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="39.788" height="29.139" viewBox="0 0 39.788 29.139"
			            fill={currentOption === 'openWindow' || nextOption === 'openWindow' ? '#eaeaea' : null}
			            opacity={currentOption === 'openWindow' || nextOption === 'openWindow' ? '1' : '.5'}
			            style={currentOption === 'openWindow' || nextOption === 'openWindow' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M-2127.456,960.617q-7.787,0-15.573,0a4.162,4.162,0,0,1-3.28-1.49,3.846,3.846,0,0,1-1-2.545c-.013-2.578-.085-5.159.018-7.732a10.635,10.635,0,0,1,2.885-6.932c2.361-2.545,4.793-5.026,7.256-7.472a10.8,10.8,0,0,1,5.838-2.835,9.2,9.2,0,0,1,1.638-.122q8.807-.012,17.614-.008a4.361,4.361,0,0,1,3.42,1.431,4.214,4.214,0,0,1,1.075,2.922q.01,10.042.007,20.085a4.648,4.648,0,0,1-.876,3.031,4.176,4.176,0,0,1-3.413,1.667Q-2119.651,960.625-2127.456,960.617Zm-18.06-13.942a1.007,1.007,0,0,0-.033.155c0,3-.045,5.992.019,8.986a3.606,3.606,0,0,0,3.782,3.569c1.752-.068,3.509-.014,5.263-.014q12.031,0,24.061,0a3.279,3.279,0,0,0,1.933-.542,3.805,3.805,0,0,0,1.682-3.3q.011-4.278,0-8.557c0-.092-.018-.184-.029-.3Zm24.762-11.8q4.743,0,9.486,0a2.637,2.637,0,0,0,.5-.034.779.779,0,0,0,.657-.779.788.788,0,0,0-.656-.817,2.771,2.771,0,0,0-.533-.032q-9.235,0-18.47,0a8.044,8.044,0,0,0-5.968,2.489c-1.506,1.53-3.047,3.025-4.573,4.537q-1.8,1.789-3.605,3.582a.826.826,0,0,0-.057,1.209.823.823,0,0,0,1.212-.043c.182-.172.356-.352.534-.529q3.877-3.842,7.753-7.685a6.3,6.3,0,0,1,4.667-1.9C-2126.791,934.889-2123.772,934.875-2120.754,934.874Zm.783,10.2-4.478-7.762-4.481,7.762Z"
					transform="translate(2147.345 -931.48)"/>
			</svg>;
		}, [currentOption, nextOption]),
		openTrunkIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="35.727" height="42.241" viewBox="0 0 35.727 42.241"
			            fill={noVisualOption === 'openTrunk' || noVisualOption === 'closeTrunk' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'openTrunk' || noVisualOption === 'closeTrunk' ? '1' : '.5'}
			            style={noVisualOption === 'openTrunk' || noVisualOption === 'closeTrunk' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M11.962,35.241a6.763,6.763,0,0,1,6.5-7,6.764,6.764,0,0,1,6.5,7,6.765,6.765,0,0,1-6.5,7A6.764,6.764,0,0,1,11.962,35.241Zm6.532-8.867c-10.008,0-8.772,11.04-8.772,11.04H.268c-.6,0,0-31.306,0-31.306A30.116,30.116,0,0,1,8.286,7.394a11.843,11.843,0,0,1,4.989,3.477l3.444,3.749L26.581,0l.993.67-9.93,14.722,1.832.918s9.845,2.639,13.153,4.625,2.765,7.914,2.953,10.43.34,2.665-.528,4.082A3.867,3.867,0,0,1,32.1,37.035c-.226,0-4.386.379-4.386.379S28.495,26.374,18.494,26.374Z"
				/>
			</svg>;
		}, [noVisualOption]);
	
	return <div ref={screen} className="hud-interactions-car-in">
		<div
			className="hud-interactions-car-in__title">{titles[nextOption] ? titles[nextOption] : titles[noVisualOption] ? titles[noVisualOption] : null}</div>
		<div className="hud-interactions-car-in-options">
			<div
				className="hud-interactions-car-in-options__element hud-interactions-car-in-options__element_hood"
				onMouseOver={() => setNoVisualOption(target.carData.hood ? 'closeHood' : 'openHood')}
				onClick={() => {
					EventManager.emitServer('interaction', 'hood', !target.carData.hood);
					target.carData.hood = !target.carData.hood;
				}}
			>
				{openHoodIcon}
			</div>
			<div
				className="hud-interactions-car-in-options__element hud-interactions-car-in-options__element_seatbelt"
				onMouseOver={() => setNoVisualOption(target.carData.seatbelt ? 'seatbeltTrue' : 'seatbeltFalse')}
				onClick={() => {
					EventManager.emitServer('interaction', 'seatbelt', !target.carData.seatbelt);
					target.carData.seatbelt = !target.carData.seatbelt;
				}}
			>
				{seatbeltIcon}
			</div>
			<div
				className="hud-interactions-car-in-options__element hud-interactions-car-in-options__element_eject"
				onMouseOver={() => setNextOption('eject')}
				onClick={() => setCurrentOption('eject')}
			>
				{ejectIcon}
			</div>
			<div
				className="hud-interactions-car-in-options__element hud-interactions-car-in-options__element_window"
				onMouseOver={() => setNextOption('openWindow')}
				onClick={() => setCurrentOption('openWindow')}
			>
				{openWindowIcon}
			</div>
			<div
				className="hud-interactions-car-in-options__element hud-interactions-car-in-options__element_trunk"
				onMouseOver={() => setNoVisualOption(target.carData.trunk ? 'closeTrunk' : 'openTrunk')}
				onClick={() => {
					EventManager.emitServer('interaction', 'trunk', !target.carData.trunk);
					target.carData.trunk = !target.carData.trunk;
				}}
			>
				{openTrunkIcon}
			</div>
		</div>
	</div>;
};

export default React.memo(InCar);