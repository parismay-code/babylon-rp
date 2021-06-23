import * as React from 'react';
import cn         from 'classnames';

import truckDriverIcon from 'assets/images/hud/truckDriverIcon.svg';

import {regExp} from 'utils/regExp';

import './HUDAlertsTruckDriver.scss';

const HUDAlertsTruckDriver = ({isVisible, jobNotifyData}) => {
	const price = React.useMemo(() =>
		`${String(jobNotifyData.price).replace(regExp.money, '$1 ')} $`, [jobNotifyData.price]),
		weight = React.useMemo(() => {
			if (jobNotifyData.weight >= 1000) return `${(jobNotifyData.weight / 1000).toFixed()} т.`
			else return `${jobNotifyData.weight} кг`;
		}, [jobNotifyData.weight]);
	
	return <div className={cn('hud-alerts-truck-driver', isVisible ? 'hud-alerts-truck-driver_active' : null)}>
		<div
			className="hud-alerts-truck-driver-before"
			style={!isVisible ? {transition: 'transform .1s ease .4s'} : {transition: 'transform .1s ease'}}
		>
			<img src={truckDriverIcon} alt="#"/>
		</div>
		<div
			className="hud-alerts-truck-driver-content"
			style={!isVisible ? {transition: 'width .3s, opacity 0s .2s'} :
				{transition: 'width .3s .3s, opacity 0s .3s'}}
		>
			<div
				className="hud-alerts-truck-driver-content-info"
				style={!isVisible ? {transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
			>
				<div className="hud-alerts-truck-driver-content-info__title">{jobNotifyData.name}</div>
				<div className="hud-alerts-truck-driver-content-info__subtitle">{weight}</div>
			</div>
			<div
				className="hud-alerts-truck-driver-content__money"
				style={!isVisible ? {transition: 'opacity .1s'} : {transition: 'opacity .2s .5s'}}
			>{price}</div>
		</div>
	</div>;
};

export default React.memo(HUDAlertsTruckDriver);