import * as React from 'react';

import MainPage  from './components/MainPage';
import Documents from './components/Documents';
import Property  from './components/Property';
import Actions   from './components/Actions';
import Fraction  from './components/Fraction';

import Money        from './components/MainPage/components/Money';
import ArendHouse   from './components/Property/components/ArendHouse';
import SellBusiness from './components/Property/components/SellBusiness';
import SellHouse    from './components/Property/components/SellHouse';
import SellCar      from './components/Property/components/SellCar';
import ArendCar     from './components/Property/components/ArendCar';
import GiveKey      from './components/Actions/components/GiveKey';
import SellMedkit   from './components/Fraction/components/EMS/components/SellMedkit';
import SellPill     from './components/Fraction/components/EMS/components/SellPill';

import './HUDInteraction.scss';

const HUDInteraction = ({targetPlayerData, setTargetPlayerData, player}) => {
	const [currentPage, setCurrentPage] = React.useState('main'),
		[isVisible, setVisible] = React.useState(false),
		[noVisualOption, setNoVisualOption] = React.useState(null),
		[currentOption, setCurrentOption] = React.useState(null),
		[prevOption, setPrevOption] = React.useState(null),
		[nextOption, setNextOption] = React.useState(null),
		[houses, setHousesData] = React.useState([]),
		[business, setBusinessData] = React.useState([]),
		[transport, setTransportData] = React.useState([]);
	
	const optionScreen = React.useRef(null);
	
	const toggleOptionScreen = React.useCallback(() => {
		const visible = 'hud-interaction-option-screen_visible';
		
		if (isVisible) {
			if (!prevOption && currentOption) optionScreen.current.classList.add(visible);
			else if (prevOption && currentOption) {
				optionScreen.current.classList.remove(visible);
				setTimeout(() => optionScreen.current.classList.add(visible), 550);
			} else optionScreen.current.classList.remove(visible);
		} else optionScreen.current.classList.remove(visible);
	}, [isVisible, currentOption, prevOption]);
	
	React.useEffect(() => {
		window.alt.on('cef::hud:toggleInteraction', (bool) => setVisible(bool));
		
		window.alt.on('cef::interaction:setHousesData', array => setHousesData(array));
		window.alt.on('cef::interaction:setBusinessData', array => setBusinessData(array));
		window.alt.on('cef::interaction:setTransportData', array => setTransportData(array));
	}, []);
	React.useEffect(() => setNextOption(null), [noVisualOption]);
	React.useEffect(() => setNoVisualOption(null), [nextOption]);
	React.useEffect(() => setCurrentOption(null), [currentPage]);
	React.useEffect(() => {
		toggleOptionScreen();
		setPrevOption(currentOption);
	}, [currentOption, toggleOptionScreen]);
	
	return <>
		<div ref={optionScreen} className="hud-interaction-option-screen">
			<Money currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}/>
			<ArendHouse currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}
			            houses={houses}/>
			<SellBusiness currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}
			              business={business}/>
			<SellHouse currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}
			           houses={houses}/>
			<SellCar currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}
			         transport={transport}/>
			<ArendCar currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}
			          transport={transport}/>
			<GiveKey currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}
			         transport={transport}/>
			<SellMedkit currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}/>
			<SellPill currentOption={currentOption} prevOption={prevOption} targetPlayerData={targetPlayerData}/>
		</div>
		<div className="hud-interaction" style={isVisible ? {opacity: 1} : {opacity: 0, pointerEvents: 'none'}}>
			<div className="hud-interaction-wave-1">
				<div className="hud-interaction-wave-2">
					<div className="hud-interaction-wave-3">
						<div className="hud-interaction-wave-4"/>
					</div>
				</div>
			</div>
			<div className="hud-interaction-circle">
				{currentPage === 'main' && <MainPage
					setCurrentPage={setCurrentPage}
					noVisualOption={noVisualOption}
					setNoVisualOption={setNoVisualOption}
					currentOption={currentOption}
					setCurrentOption={setCurrentOption}
					nextOption={nextOption}
					setNextOption={setNextOption}
					player={player}
					houses={houses}
					business={business}
					transport={transport}
				/>}
				{currentPage === 'documents' && <Documents
					setCurrentPage={setCurrentPage}
					noVisualOption={noVisualOption}
					setNoVisualOption={setNoVisualOption}
					targetPlayerData={targetPlayerData}
				
				/>}
				{currentPage === 'property' && <Property
					setCurrentPage={setCurrentPage}
					currentOption={currentOption}
					setCurrentOption={setCurrentOption}
					nextOption={nextOption}
					setNextOption={setNextOption}
					houses={houses}
					business={business}
					transport={transport}
				/>}
				{currentPage === 'actions' && <Actions
					setCurrentPage={setCurrentPage}
					noVisualOption={noVisualOption}
					setNoVisualOption={setNoVisualOption}
					currentOption={currentOption}
					setCurrentOption={setCurrentOption}
					nextOption={nextOption}
					setNextOption={setNextOption}
					targetPlayerData={targetPlayerData}
					transport={transport}
				/>}
				{currentPage === 'fraction' && <Fraction
					setCurrentPage={setCurrentPage}
					noVisualOption={noVisualOption}
					setNoVisualOption={setNoVisualOption}
					currentOption={currentOption}
					setCurrentOption={setCurrentOption}
					nextOption={nextOption}
					setNextOption={setNextOption}
					setTargetPlayerData={setTargetPlayerData}
					targetPlayerData={targetPlayerData}
					player={player}
				/>}
			</div>
		</div>
	</>;
};

export default React.memo(HUDInteraction);