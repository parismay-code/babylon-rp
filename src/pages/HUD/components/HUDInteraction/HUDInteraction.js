import * as React   from 'react';
import EventManager from 'utils/eventManager';

import MainPage  from './components/MainPage';
import Documents from './components/Documents';
import Property  from './components/Property';
import Actions   from './components/Actions';
import Fraction  from './components/Fraction';
import Car       from './components/Car';

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

const HUDInteraction = ({player}) => {
	const [isVisible, setVisible] = React.useState(false),
		[noVisualOption, setNoVisualOption] = React.useState(null),
		[currentOption, setCurrentOption] = React.useState(null),
		[prevOption, setPrevOption] = React.useState(null),
		[nextOption, setNextOption] = React.useState(null),
		[houses, setHousesData] = React.useState([]),
		[business, setBusinessData] = React.useState([]),
		[transport, setTransportData] = React.useState([]),
		[medKitCost, setMedKitCost] = React.useState(500),
		[pillsCost, setPillsCost] = React.useState({
			flu: 100,
			amnesia: 100,
			dependence: 100,
			poisoning: 100,
		}),
		[targetPlayerData, setTargetPlayerData] = React.useState({
			type: 'player',
			nickname: 'Paris May',
			id: 112344,
			isHandcuffed: false,
			isTied: false,
			isControlled: false,
			isBagPut: false,
			isJailed: false,
			isInCar: true,
			isInFraction: false,
			carData: {
				name: 'Lamborghini aventodor 450 RTX',
				engine: 98,
				fuel: 69,
				insurance: false,
				price: 77000,
				tuning: {
					suspension: 1,
					engine: 2,
					transmission: 5,
					brakes: 4,
				},
			},
		}),
		[currentPage, setCurrentPage] = React.useState(targetPlayerData.type === 'player' ? 'main' : 'car');
	
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
		EventManager.addHandler('interaction', 'setTargetPlayerData', obj => setTargetPlayerData(obj));
		EventManager.addHandler('interaction', 'toggle', bool => setVisible(bool));
		
		EventManager.addHandler('interaction', 'setHousesData', array => setHousesData(array));
		EventManager.addHandler('interaction', 'setBusinessData', array => setBusinessData(array));
		EventManager.addHandler('interaction', 'setTransportData', array => setTransportData(array));
		EventManager.addHandler('interaction', 'setMedKitCost', value => setMedKitCost(value));
		EventManager.addHandler('interaction', 'setPillsCost', obj => setPillsCost(obj));
		
		EventManager.stopAddingHandlers('interaction');
		
		return () => EventManager.removeTargetHandlers('interaction');
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
			<SellMedkit
				currentOption={currentOption}
				prevOption={prevOption}
				targetPlayerData={targetPlayerData}
				medKitCost={medKitCost}
			/>
			<SellPill
				currentOption={currentOption}
				prevOption={prevOption}
				targetPlayerData={targetPlayerData}
				pillsCost={pillsCost}
			/>
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
				{currentPage === 'car' && <Car
					setCurrentPage={setCurrentPage}
					noVisualOption={noVisualOption}
					setNoVisualOption={setNoVisualOption}
					currentOption={currentOption}
					setCurrentOption={setCurrentOption}
					nextOption={nextOption}
					setNextOption={setNextOption}
					target={targetPlayerData}
				/>}
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