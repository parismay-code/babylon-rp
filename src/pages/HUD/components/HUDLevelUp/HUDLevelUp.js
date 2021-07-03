import * as React   from 'react';
import EventManager from 'utils/eventManager';

import './HUDLevelUp.scss';

const HUDLevelUp = () => {
	const [isNotifyHidden, hideNotify] = React.useState(true);
	
	const [data, setData] = React.useState({
		level: 0,
		prevExp: 0,
		maxExp: 0,
		bonus: 0,
	});
	
	const [currentExp, setCurrentExp] = React.useState(data?.prevExp);
	
	const showNotify = React.useCallback((data) => {
		setData(data);
		
		hideNotify(false);
		
		setTimeout(() => {
			setCurrentExp(data?.prevExp + data?.bonus);
		}, 50);
		
		setTimeout(() => {
			hideNotify(true);
		}, 5000);
	}, []);
	
	React.useEffect(() => {
		EventManager.addHandler('hud', 'levelUp', data => showNotify(data));
	}, [showNotify]);
	
	return <div
		className="hud-level-up"
		style={isNotifyHidden ? {opacity: '0'} : {opacity: '1'}}
	>
		<div className="hud-level-up-header">
			<div className="hud-level-up-header__title">{data?.level}</div>
			<div className="hud-level-up-header__subtitle">Повышение уровня</div>
		</div>
		<div className="hud-level-up-bar">
			<div className="hud-level-up-bar__prev-exp">{data?.prevExp}</div>
			<div className="hud-level-up-bar-bg">
				<div
					className="hud-level-up-bar-bg__progress"
					style={{width: `${currentExp / data?.maxExp * 100}%`}}
				/>
			</div>
			<div className="hud-level-up-bar__max-exp">{data?.maxExp}</div>
		</div>
		<div className="hud-level-up__exp">{data?.bonus}</div>
	</div>;
};

export default React.memo(HUDLevelUp);