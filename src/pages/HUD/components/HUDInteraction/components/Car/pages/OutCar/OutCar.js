import * as React   from 'react';
import EventManager from 'utils/eventManager';

import './OutCar.scss';

const OutCar = ({
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
		'openTrunk': 'Открыть багажник',
		'closeTrunk': 'Закрыть багажник',
		'fix': 'Отремонтировать',
		'fuel': 'Заправить',
		'information': 'Информация о транспорте',
		'setTrunk': 'Лечь в багажник',
	}), []);
	
	const openTrunkIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="44.008" height="42.241" viewBox="0 0 44.008 42.241"
			            fill={noVisualOption === 'openTrunk' || noVisualOption === 'closeTrunk' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'openTrunk' || noVisualOption === 'closeTrunk' ? '1' : '.5'}
			            style={noVisualOption === 'openTrunk' || noVisualOption === 'closeTrunk' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(9.18 4.359) rotate(90)">
					<ellipse cx="4.575" cy="4.575" rx="4.575" ry="4.575"/>
					<path d="M0,6.267s16.656.066,22.442,0c4-.046,0-3.55,0-3.55s-5.548.764-7.276,0C9.556.235,0,0,0,0Z"
					      transform="translate(11.661 2.883)"/>
				</g>
				<path
					d="M11.962,7a6.763,6.763,0,0,0,6.5,7,6.764,6.764,0,0,0,6.5-7,6.765,6.765,0,0,0-6.5-7A6.765,6.765,0,0,0,11.962,7Zm6.532,8.867c-10.008,0-8.772-11.04-8.772-11.04H.268c-.6,0,0,31.306,0,31.306a30.117,30.117,0,0,0,8.018-1.286,11.844,11.844,0,0,0,4.989-3.477l3.444-3.749,9.862,14.62.993-.67L17.644,26.849l1.832-.918s9.845-2.639,13.153-4.625,2.765-7.914,2.953-10.43.34-2.665-.528-4.082A3.867,3.867,0,0,0,32.1,5.206c-.226,0-4.386-.379-4.386-.379S28.5,15.867,18.494,15.867Z"
					transform="translate(44.008 42.241) rotate(180)"/>
			</svg>;
		}, [noVisualOption]),
		fixIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="43.232" height="28.47" viewBox="0 0 43.232 28.47"
			            fill={noVisualOption === 'fix' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'fix' ? '1' : '.5'}
			            style={noVisualOption === 'fix' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(2926.232 6578) rotate(90)">
					<path
						d="M4.28,37.733V14.574a3.889,3.889,0,0,1,.047-.6A7.776,7.776,0,0,1,0,7.08,7.759,7.759,0,0,1,4.284.206V5.337a3.642,3.642,0,0,0,7.284,0V0h0a8.062,8.062,0,0,1,3.4,2.829A7.541,7.541,0,0,1,16.28,7.08a7.775,7.775,0,0,1-4.326,6.892,3.887,3.887,0,0,1,.047.6v23.16a3.86,3.86,0,0,1-7.72,0Z"
						transform="translate(-6565.811 2884.638)"/>
					<path
						d="M0,38.343V27.777A4.888,4.888,0,0,1,2.573,23.47V14.014A2.313,2.313,0,0,1,3.6,12.088V3.321A1.287,1.287,0,0,1,4.89,2.034,1.287,1.287,0,0,1,3.6.748V0H6.176V.748A1.286,1.286,0,0,1,4.89,2.034,1.287,1.287,0,0,1,6.176,3.321v8.767a2.313,2.313,0,0,1,1.03,1.926V23.47a4.888,4.888,0,0,1,2.573,4.307V38.343a4.889,4.889,0,1,1-9.779,0Z"
						transform="translate(-6578 2883)"/>
				</g>
			</svg>;
		}, [noVisualOption]),
		fuelIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="32.716" height="40.393" viewBox="0 0 32.716 40.393"
			            fill={noVisualOption === 'fuel' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'fuel' ? '1' : '.5'}
			            style={noVisualOption === 'fuel' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(-99.321 -62)">
					<path d="M131.424,132.433l1.11,1.189,3.019-2.936-1.114-1.193Z"
					      transform="translate(-28.638 -59.511)"/>
					<rect width="3.54" height="3.54" transform="translate(114.651 84.695)"/>
					<path d="M106.429,96.381l-2.11-2.11-5.484,5.348,2.11,2.109Z" transform="translate(0.486 -28.018)"/>
					<path
						d="M224.035,244H213v11.035h11.035Zm-2.29,8.016a.729.729,0,0,1-.729.729h-5a.729.729,0,0,1-.729-.729v-5a.729.729,0,0,1,.729-.729h5a.729.729,0,0,1,.729.729Z"
						transform="translate(-102.097 -163.053)"/>
					<path
						d="M116,77.324V97.89a4.513,4.513,0,0,0,4.509,4.5h22.233a4.5,4.5,0,0,0,4.489-4.5v-34A1.878,1.878,0,0,0,145.358,62h-13.57a1.848,1.848,0,0,0-1.838,1.887v3.4a.791.791,0,0,1-.778.751h-3.647a1.867,1.867,0,0,0-1.312.519l-7.633,7.414A1.889,1.889,0,0,0,116,77.324Zm16.345-11.607a2.072,2.072,0,0,1,2.059-2.052h8.339a.721.721,0,0,1,.729.719,4.8,4.8,0,0,1-4.808,4.8H133.1a.72.72,0,0,1-.752-.694Z"
						transform="translate(-15.195)"/>
					<path d="M295.132,92H287.6a.613.613,0,0,0-.6.595V94.6h4.862A3.275,3.275,0,0,0,295.132,92Z"
					      transform="translate(-168.393 -26.877)"/>
				</g>
			</svg>;
		}, [noVisualOption]),
		informationIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37"
			            fill={currentOption === 'information' || nextOption === 'information' ? '#eaeaea' : null}
			            opacity={currentOption === 'information' || nextOption === 'information' ? '1' : '.5'}
			            style={currentOption === 'information' || nextOption === 'information' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M18.5,37A18.5,18.5,0,0,1,5.418,5.418,18.5,18.5,0,1,1,31.581,31.581,18.379,18.379,0,0,1,18.5,37ZM16.349,14.628V30.977h4.3V14.628Zm0-6.883v4.3h4.3v-4.3Z"/>
			</svg>;
			
		}, [currentOption, nextOption]),
		setTrunkIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="42.688" height="42.241" viewBox="0 0 42.688 42.241"
			            fill={noVisualOption === 'setTrunk' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'setTrunk' ? '1' : '.5'}
			            style={noVisualOption === 'setTrunk' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M7233.96-3012.5a6.765,6.765,0,0,1,6.5-7,6.764,6.764,0,0,1,6.5,7,6.766,6.766,0,0,1-6.5,7A6.767,6.767,0,0,1,7233.96-3012.5Zm6.533-8.867c-10.006,0-8.771,11.04-8.771,11.04h-9.454c-.6,0,0-31.305,0-31.305a30.131,30.131,0,0,1,8.017,1.285,11.837,11.837,0,0,1,4.99,3.477l3.444,3.749,9.862-14.619.994.669-9.931,14.723,1.832.917s3.14.842,6.469,1.933l1.844-.607.1-.191.2.1c1.96-.644,4.766-1.561,6.841-2.23.113-.317,1.754-4.9,2.372-6.511.242-.638.646-.417.957-.089.505.181,1.45.52,1.849.675s-.206.567-.206.567-.494-.321-.708-.259a2.15,2.15,0,0,1-.726.062,3.577,3.577,0,0,0-.527,1.676,9.326,9.326,0,0,1-.182,3.475c.175.512-.454,1.568-.454,1.568a25.888,25.888,0,0,0-2.941,1.907,8.63,8.63,0,0,1-2.053,1.3c1.238.627,2.556,1.3,3.7,1.885a2.051,2.051,0,0,0,.778.244,3.052,3.052,0,0,0,.25-.374c.758-1.325,2.2-4.144,2.886-5.285.35-.587.709-.3.961.078.465.264,1.336.764,1.7.984s-.3.523-.3.523-.432-.4-.651-.376a2.183,2.183,0,0,1-.728-.066,3.584,3.584,0,0,0-.809,1.557,11.292,11.292,0,0,1-1.273,4.482c.046.6-1.468.984-1.468.984s-.592-.069-1.307-.233a8.239,8.239,0,0,1-1.324-.412c.95,2.573.729,5.951.861,7.692.188,2.516.339,2.666-.531,4.084a3.865,3.865,0,0,1-2.948,1.588c-.226,0-4.385.377-4.385.377S7250.5-3021.367,7240.493-3021.367Z"
					transform="translate(-7222 3047.74)"/>
			</svg>;
		}, [noVisualOption]);
	
	return <div ref={screen} className="hud-interactions-car-out">
		<div
			className="hud-interactions-car-out__title">{titles[nextOption] ? titles[nextOption] : titles[noVisualOption] ? titles[noVisualOption] : null}</div>
		<div className="hud-interactions-car-out-options">
			<div
				className="hud-interactions-car-out-options__element hud-interactions-car-out-options__element_hood"
				onMouseOver={() => setNoVisualOption(target.carData.trunk ? 'closeTrunk' : 'openTrunk')}
				onClick={() => {
					EventManager.emitServer('interaction', 'trunk', !target.carData.trunk);
					target.carData.trunk = !target.carData.trunk;
				}}
			>
				{openTrunkIcon}
			</div>
			<div
				className="hud-interactions-car-out-options__element hud-interactions-car-out-options__element_seatbelt"
				onMouseOver={() => setNoVisualOption('fix')}
				onClick={() => EventManager.emitServer('interaction', 'fix')}
			>
				{fixIcon}
			</div>
			<div
				className="hud-interactions-car-out-options__element hud-interactions-car-out-options__element_eject"
				onMouseOver={() => setNoVisualOption('fuel')}
				onClick={() => EventManager.emitServer('interaction', 'fuel')}
			>
				{fuelIcon}
			</div>
			<div
				className="hud-interactions-car-out-options__element hud-interactions-car-out-options__element_window"
				onMouseOver={() => setNextOption('information')}
				onClick={() => setCurrentOption('information')}
			>
				{informationIcon}
			</div>
			<div
				className="hud-interactions-car-out-options__element hud-interactions-car-out-options__element_trunk"
				onMouseOver={() => setNoVisualOption('setTrunk')}
				onClick={() => EventManager.emitServer('interaction', 'setTrunk')}
			>
				{setTrunkIcon}
			</div>
		</div>
	</div>;
};

export default React.memo(OutCar);