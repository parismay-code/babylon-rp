import * as React from 'react';

import MainPage from "./components/MainPage";
import Documents from "./components/Documents";
import Property from "./components/Property";
import Actions from "./components/Actions";
import Fraction from "./components/Fraction";

import Money from "./components/MainPage/components/Money";
import ArendHouse from "./components/Property/components/ArendHouse";
import SellBusiness from "./components/Property/components/SellBusiness";
import SellHouse from "./components/Property/components/SellHouse";
import SellCar from "./components/Property/components/SellCar";
import ArendCar from "./components/Property/components/ArendCar";
import GiveKey from "./components/Actions/components/GiveKey";

import './HUDInteraction.scss';

const HUDInteraction = () => {
    const [currentPage, setCurrentPage] = React.useState('main'),
        [isVisible, setVisible] = React.useState(false),
        [noVisualOption, setNoVisualOption] = React.useState(null),
        [currentOption, setCurrentOption] = React.useState(null),
        [prevOption, setPrevOption] = React.useState(null),
        [nextOption, setNextOption] = React.useState(null),
        [player, setPlayerData] = React.useState({
            nickname: {
                firstname: 'Paris',
                lastname: 'May'
            },
            id: '87551'
        }),
        [houses, setHousesData] = React.useState([
            {
                id: 120,
                garden: true,
                garage: 10,
                cost: 1000000
            },
            {
                id: 11,
                garden: false,
                garage: 10,
                cost: 8000000
            },
            {
                id: 5,
                garden: true,
                garage: 20,
                cost: 30000000
            },
        ]),
        [business, setBusinessData] = React.useState([
            {
                id: 11,
                name: 'Заправочная станция',
                cost: 18000000
            },
            {
                id: 15,
                name: 'Магазин одежды',
                cost: 8000000
            },
            {
                id: 9,
                name: 'Магазин 24/7',
                cost: 10000000
            },
        ]),
        [transport, setTransportData] = React.useState([
            {
                type: 'motorcycle',
                name: 'Honda Steed 400',
                trunk: 10,
                cost: 550000
            },
            {
                type: 'motorcycle',
                name: 'Yamaha R1',
                trunk: 10,
                cost: 750000
            },
            {
                type: 'motorcycle',
                name: 'Harley-Davidson Sportster 1200',
                trunk: 10,
                cost: 2000000
            },
            {
                type: 'car',
                name: 'Volkswagen Polo',
                trunk: 10,
                cost: 1500000
            },
            {
                type: 'car',
                name: 'Hyundai Creta',
                trunk: 10,
                cost: 2000000
            },
            {
                type: 'car',
                name: 'Kia Rio',
                trunk: 10,
                cost: 1200000
            },
            {
                type: 'air',
                name: 'CESSNA',
                trunk: 10,
                cost: 10000000
            },
            {
                type: 'air',
                name: 'BOMBARDIER',
                trunk: 10,
                cost: 12000000
            },
            {
                type: 'air',
                name: 'EMBRAER',
                trunk: 10,
                cost: 20000000
            },
            {
                type: 'boat',
                name: 'Hunterboat Hunter 320ЛК',
                trunk: 10,
                cost: 1000000
            },
            {
                type: 'boat',
                name: 'RiverBoats RB370',
                trunk: 10,
                cost: 1300000
            },
            {
                type: 'boat',
                name: 'Intex Seahawk-400',
                trunk: 10,
                cost: 1500000
            },
            {
                type: 'boat',
                name: 'HDX HELIUM-370 AM',
                trunk: 10,
                cost: 900000
            },
            {
                type: 'boat',
                name: 'ЛОЦМАН ПРОФИ С-280-М',
                trunk: 10,
                cost: 3000000
            },
            {
                type: 'boat',
                name: 'STREAM Дельфин-М',
                trunk: 10,
                cost: 5000000
            },
        ]);

    const optionScreen = React.useRef(null);

    const toggleOptionScreen = React.useCallback(() => {
        const visible = 'hud-interaction-option-screen_visible';

        if (!prevOption && currentOption) optionScreen.current.classList.add(visible);
        else if (prevOption && currentOption) {
            optionScreen.current.classList.remove(visible);
            setTimeout(() => optionScreen.current.classList.add(visible), 550);
        }
        else optionScreen.current.classList.remove(visible);
    }, [currentOption, prevOption]);
    
    React.useEffect(() => {
        window.alt.on('cef::hud:toggleInteraction', (bool) => setVisible(bool));

        window.alt.on('cef::interaction:setTargetPlayerData', obj => setPlayerData(obj));
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
        <div ref={optionScreen} className='hud-interaction-option-screen'>
            <Money currentOption={currentOption} prevOption={prevOption} player={player}/>
            <ArendHouse currentOption={currentOption} prevOption={prevOption} player={player}
                        houses={houses}/>
            <SellBusiness currentOption={currentOption} prevOption={prevOption} player={player}
                          business={business}/>
            <SellHouse currentOption={currentOption} prevOption={prevOption} player={player}
                        houses={houses}/>
            <SellCar currentOption={currentOption} prevOption={prevOption} player={player}
                       transport={transport}/>
            <ArendCar currentOption={currentOption} prevOption={prevOption} player={player}
                       transport={transport}/>
            <GiveKey currentOption={currentOption} prevOption={prevOption} player={player}
                      transport={transport}/>
        </div>
        <div className='hud-interaction' style={isVisible ? {opacity: 1} : {opacity: 0}}>
            <div className='hud-interaction-wave-1'>
                <div className='hud-interaction-wave-2'>
                    <div className='hud-interaction-wave-3'>
                        <div className='hud-interaction-wave-4'/>
                    </div>
                </div>
            </div>
            <div className='hud-interaction-circle'>
                {currentPage === 'main' && <MainPage
                    setCurrentPage={setCurrentPage}
                    noVisualOption={noVisualOption}
                    setNoVisualOption={setNoVisualOption}
                    currentOption={currentOption}
                    setCurrentOption={setCurrentOption}
                    nextOption={nextOption}
                    setNextOption={setNextOption}
                />}
                {currentPage === 'documents' && <Documents
                    setCurrentPage={setCurrentPage}
                    noVisualOption={noVisualOption}
                    setNoVisualOption={setNoVisualOption}
                />}
                {currentPage === 'property' && <Property
                    setCurrentPage={setCurrentPage}
                    currentOption={currentOption}
                    setCurrentOption={setCurrentOption}
                    nextOption={nextOption}
                    setNextOption={setNextOption}
                />}
                {currentPage === 'actions' && <Actions
                    setCurrentPage={setCurrentPage}
                    noVisualOption={noVisualOption}
                    setNoVisualOption={setNoVisualOption}
                    currentOption={currentOption}
                    setCurrentOption={setCurrentOption}
                    nextOption={nextOption}
                    setNextOption={setNextOption}
                />}
                {currentPage === 'fraction' && <Fraction setCurrentPage={setCurrentPage}/>}
            </div>
        </div>
    </>
}

export default React.memo(HUDInteraction);