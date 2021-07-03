import * as React from 'react';
import {observer} from 'mobx-react-lite';

import StateFraction from './components/StateFraction';
import CrimeFraction from './components/CrimeFraction';
import EMS           from './components/EMS';
import FIB           from './components/FIB';
import SANG          from './components/SANG';

import './Fraction.scss';

const Fraction = ({
	setCurrentPage,
	noVisualOption,
	setNoVisualOption,
	currentOption,
	setCurrentOption,
	nextOption,
	setNextOption,
	targetPlayerData,
	player,
	setTargetPlayerData,
}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	const currentComponent = React.useMemo(() => {
		if (player.playerState.fraction.name === 'ems') return <EMS
			setCurrentPage={setCurrentPage}
			noVisualOption={noVisualOption}
			setNoVisualOption={setNoVisualOption}
			currentOption={currentOption}
			setCurrentOption={setCurrentOption}
			nextOption={nextOption}
			setNextOption={setNextOption}
			targetPlayerData={targetPlayerData}
			setTargetPlayerData={setTargetPlayerData}
		/>;
		else if (player.playerState.fraction.name === 'sang') return <SANG
			setCurrentPage={setCurrentPage}
			noVisualOption={noVisualOption}
			setNoVisualOption={setNoVisualOption}
			targetPlayerData={targetPlayerData}
			setTargetPlayerData={setTargetPlayerData}
		/>;
		else if (player.playerState.fraction.name === 'fib') return <FIB
			setCurrentPage={setCurrentPage}
			noVisualOption={noVisualOption}
			setNoVisualOption={setNoVisualOption}
			targetPlayerData={targetPlayerData}
			setTargetPlayerData={setTargetPlayerData}
		/>;
		else if (player.playerState.fraction.type === 0 || player.playerState.fraction.type === 1) return <StateFraction
			setCurrentPage={setCurrentPage}
			noVisualOption={noVisualOption}
			setNoVisualOption={setNoVisualOption}
			targetPlayerData={targetPlayerData}
			setTargetPlayerData={setTargetPlayerData}
		/>;
		else if (player.playerState.fraction.type === 2 || player.playerState.fraction.type === 3) return <CrimeFraction
			setCurrentPage={setCurrentPage}
			noVisualOption={noVisualOption}
			setNoVisualOption={setNoVisualOption}
			targetPlayerData={targetPlayerData}
			setTargetPlayerData={setTargetPlayerData}
		/>;
	}, [currentOption, nextOption, noVisualOption, player.playerState.fraction.name, player.playerState.fraction.type, setCurrentOption, setCurrentPage, setNextOption, setNoVisualOption, setTargetPlayerData, targetPlayerData]);
	
	return <div ref={screen} className="hud-interactions-fraction">
		{currentComponent}
	</div>;
};

export default observer(Fraction);