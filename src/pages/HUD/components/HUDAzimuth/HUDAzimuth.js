import * as React from 'react';
import {observer} from 'mobx-react-lite';

import arrow from 'assets/images/shops/clothes/arrow.svg';

import './HUDAzimuth.scss';

const HUDAzimuth = ({player}) => {
	const transformSteps = React.useMemo(() => {
		if (player.lookDirection === 360 || player.lookDirection === 0) return 0;
		else return player.lookDirection / 15;
	}, [player.lookDirection]);
	
	const elements = React.useMemo(() => <>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">195</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">210</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">225</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">240</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">255</div>
		<div className="hud-azimuth-content__element">W</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">285</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">300</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">315</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">330</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">345</div>
		<div className="hud-azimuth-content__element">N</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">15</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">30</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">45</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">60</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">75</div>
		<div className="hud-azimuth-content__element">E</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">105</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">120</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">135</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">150</div>
		<div className="hud-azimuth-content__element hud-azimuth-content__element_number">165</div>
	</>, []);
	
	return <div className="hud-azimuth">
		<img className="hud-azimuth__arrow" src={arrow} alt="#"/>
		<div className="hud-azimuth-content" style={{transform: `translateX(calc(-540px - ${45 * transformSteps}px))`}}>
			<div className="hud-azimuth-content__element">S</div>
			{elements}
			<div className="hud-azimuth-content__element">S</div>
			{elements}
			<div className="hud-azimuth-content__element">S</div>
			{elements}
			<div className="hud-azimuth-content__element">S</div>
			{elements}
			<div className="hud-azimuth-content__element">S</div>
		</div>
	</div>;
};

export default observer(HUDAzimuth);