import * as React   from 'react';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import rightArrow from 'assets/images/hud/rightArrow.svg';

import './Actions.scss';

const Actions = ({
	setCurrentPage,
	noVisualOption,
	setNoVisualOption,
	nextOption,
	setNextOption,
	currentOption,
	setCurrentOption,
	targetPlayerData,
	transport,
}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	const titles = React.useMemo(() => ({
		'giveCarKey': 'Передать ключи',
		'trade': 'Предложить обмен',
		'shakeHands': 'Поздороваться',
		'heal': 'Использовать аптечку',
		'animations': 'Анимации',
	}), []);
	
	const giveCarKeyIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="39.603" height="35.019" viewBox="0 0 39.603 35.019"
			            fill={currentOption === 'giveCarKey' || nextOption === 'giveCarKey' ? '#eaeaea' : null}
			            opacity={currentOption === 'giveCarKey' || nextOption === 'giveCarKey' ? '1' : '.5'}
			            style={currentOption === 'giveCarKey' || nextOption === 'giveCarKey' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(-1088 -28.751)">
					<g transform="translate(1088 49.155)">
						<path
							d="M-9517.881,9056.582v-4.275l1.741,1.28v1.341l14.471,1.2v1.839l-8.781,1.479,10.068,1.217,7.649-1.339,6.012-.811v2.219l-7.1,2.282-10.1,3.9-12.213-1.048v-.283h-1.741Z"
							transform="translate(9526.323 -9052.307)"/>
						<rect width="7.848" height="13.455" transform="translate(0 0.021)"/>
					</g>
					<path
						d="M18.674,1.717H10.913A3.621,3.621,0,0,0,8.144.179a3.352,3.352,0,0,0-3.4,3.344,3.312,3.312,0,0,0,3.4,3.3A3.521,3.521,0,0,0,11.3,4.588h1.13l.819-.819.819.819h.511l.819-.819.819.819h.51l.819-.819.819.819h.313V4.7L18.6,4.72l1.616-1.584ZM7.044,4.428a.984.984,0,1,1,.985-.984A.984.984,0,0,1,7.044,4.428Zm12.45,7.952h-.227l-2.52-4.563a.768.768,0,0,0-.608-.359H8.5a.768.768,0,0,0-.608.359L5.367,12.38H5.14a.823.823,0,0,0-.82.82v4.1a.823.823,0,0,0,.82.82h.82v1.23a1.234,1.234,0,0,0,1.23,1.23H7.6a1.234,1.234,0,0,0,1.23-1.23v-1.23H15.8v1.23a1.234,1.234,0,0,0,1.23,1.23h.41a1.234,1.234,0,0,0,1.23-1.23v-1.23h.82a.823.823,0,0,0,.82-.82V13.2A.823.823,0,0,0,19.494,12.38ZM6.576,15.661A1.025,1.025,0,1,1,7.6,14.636,1.025,1.025,0,0,1,6.576,15.661ZM7.4,12.38,9.058,9.056a.728.728,0,0,1,.593-.367h5.332a.728.728,0,0,1,.593.367l1.662,3.324Zm10.663,3.281a1.025,1.025,0,1,1,1.025-1.025,1.025,1.025,0,0,1-1.025,1.025Z"
						transform="translate(1100.014 28.572)"/>
				</g>
			</svg>;
		}, [currentOption, nextOption]),
		tradeIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="28" height="40.099" viewBox="0 0 28 40.099"
			            fill={noVisualOption === 'trade' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'trade' ? '1' : '.5'}
			            style={noVisualOption === 'trade' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(28 0) rotate(90)">
					<path
						d="M28.9,28V24.578H5.829V18.356h6.7a8.714,8.714,0,0,0,15.091,0H28.9V14.934l11.2,6.533L28.9,28ZM11.2,13.067h0L0,6.533,11.2,0V3.422h23.07V9.644H27.619a8.714,8.714,0,0,0-15.092,0H11.2v3.423Z"
						transform="translate(0 0)"/>
					<path
						d="M4.978,4.356a2.8,2.8,0,1,1-2.8,2.8A2.8,2.8,0,0,1,4.978,4.356Zm2.489-.622H6.4a3.385,3.385,0,0,0-2.835,0H2.489A2.489,2.489,0,0,1,0,1.244V.933A.934.934,0,0,1,.933,0H9.022a.934.934,0,0,1,.933.933v.311A2.489,2.489,0,0,1,7.467,3.733Z"
						transform="translate(24.74 9.022) rotate(90)"/>
				</g>
			</svg>;
		}, [noVisualOption]),
		shakeHandsIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="40.103" height="32.08" viewBox="0 0 40.103 32.08"
			            fill={noVisualOption === 'shakeHands' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'shakeHands' ? '1' : '.5'}
			            style={noVisualOption === 'shakeHands' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M30.578,12.031H21.054V15.54a4.512,4.512,0,1,1-9.023,0V7.921L7.964,10.364A4,4,0,0,0,6.015,13.8v2.964L1,19.657A2,2,0,0,0,.269,22.4L5.282,31.08a2.006,2.006,0,0,0,2.738.733L14.5,28.072h8.559a4.014,4.014,0,0,0,4.01-4.01h1a2,2,0,0,0,2.005-2.005v-4.01h.5a1.5,1.5,0,0,0,1.5-1.5V13.535A1.5,1.5,0,0,0,30.578,12.031Zm9.255-2.344L34.821,1A2.006,2.006,0,0,0,32.082.27L25.6,4.01H19.2a4.04,4.04,0,0,0-2.124.608l-2.1,1.31a1.992,1.992,0,0,0-.94,1.7V15.54a2.506,2.506,0,1,0,5.013,0V10.026h11.53a3.511,3.511,0,0,1,3.509,3.509v1.786L39.1,12.426a2.007,2.007,0,0,0,.733-2.738Z"
					transform="translate(0.002 -0.002)"/>
			</svg>;
		}, [noVisualOption]),
		healIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="31" height="28" viewBox="0 0 31 28"
			            fill={noVisualOption === 'heal' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'heal' ? '1' : '.5'}
			            style={noVisualOption === 'heal' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(9653.219 -9030.119)">
					<path
						d="M31,20H0V0H31V20ZM8.543,8.333v3.334h5.37v5.476h3.418V11.667H22.7V8.333h-5.37V2.857H13.913V8.333Z"
						transform="translate(-9653.219 9034.119)"/>
					<rect width="31" height="3" transform="translate(-9653.219 9030.119)"/>
					<rect width="31" height="3" transform="translate(-9653.219 9055.119)"/>
				</g>
			</svg>;
		}, [noVisualOption]);
	
	return <div ref={screen} className="hud-interactions-actions">
		<div className="hud-interactions-actions-navigation">
			<div
				className="hud-interactions-actions-navigation-back"
				onClick={() => setCurrentPage('main')}
			>
				<img className="hud-interactions-actions-navigation-back__arrow" src={rightArrow} alt="#"/>
				<span className="hud-interactions-actions-navigation-back__title">назад</span>
			</div>
		</div>
		<div
			className="hud-interactions-actions__title">{titles[nextOption] ? titles[nextOption] : titles[noVisualOption] ? titles[noVisualOption] : null}</div>
		<div className="hud-interactions-actions-options">
			<div
				className={cn('hud-interactions-actions-options__element hud-interactions-actions-options__element_giveCarKey',
					transport.length === 0 ? 'hud-interactions-actions-options__element_disabled' : null)}
				onMouseOver={() => transport.length > 0 && setNextOption('giveCarKey')}
				onClick={() => transport.length > 0 && setCurrentOption('giveCarKey')}
			>
				{giveCarKeyIcon}
			</div>
			<div
				className="hud-interactions-actions-options__element hud-interactions-actions-options__element_trade"
				onMouseOver={() => setNoVisualOption('trade')}
				onClick={() => EventManager.emitServer('interaction', 'sendTrade', targetPlayerData.id)}
			>
				{tradeIcon}
			</div>
			<div
				className="hud-interactions-actions-options__element hud-interactions-actions-options__element_shakeHands"
				onMouseOver={() => setNoVisualOption('shakeHands')}
				onClick={() => EventManager.emitServer('interaction', 'shakeHands', targetPlayerData.id)}
			>
				{shakeHandsIcon}
			</div>
			<div
				className="hud-interactions-actions-options__element hud-interactions-actions-options__element_heal"
				onMouseOver={() => setNoVisualOption('heal')}
				onClick={() => EventManager.emitServer('interaction', 'heal', targetPlayerData.id)}
			>
				{healIcon}
			</div>
		</div>
	</div>;
};

export default React.memo(Actions);