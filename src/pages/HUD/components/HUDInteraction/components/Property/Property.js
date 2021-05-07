import * as React from 'react';

import rightArrow from "assets/images/hud/rightArrow.svg";

import './Property.scss';

const Property = ({setCurrentPage, currentOption, setCurrentOption, nextOption, setNextOption}) => {
    const titles = React.useMemo(() => ({
        'arendHouse': 'Сдать жилье в аренду',
        'sellBusiness': 'Продажа бизнеса',
        'sellHouse': 'Продажа жилья',
        'sellCar': 'Продажа транспорта',
        'arendCar': 'Сдать транспорт в аренду'
    }), []);

    const arendHouseIcon = React.useMemo(() => {
            return <svg xmlns="http://www.w3.org/2000/svg" width="44.727" height="30.103" viewBox="0 0 44.727 30.103"
                        fill={currentOption === 'arendHouse' || nextOption === 'arendHouse' ? '#AAB6EF' : null}
                        opacity={currentOption === 'arendHouse' || nextOption === 'arendHouse' ? '1' : '.5'}>
                <g transform="translate(-943.706 -143.021)">
                    <g transform="translate(12462.205 -8898.496)">
                        <path
                            d="M20.856,28.967H4.526a.906.906,0,0,1-.905-.9V17.6a1.313,1.313,0,0,1,.126-.073.874.874,0,0,0,.184-.117L16.294,6.5,28.67,17.42a.828.828,0,0,0,.174.11,1.221,1.221,0,0,1,.123.071v.527a7.5,7.5,0,0,0-8.111,10.838ZM2.117,16.294a.907.907,0,0,1-.674-.3L.232,14.647A.907.907,0,0,1,.3,13.368L14.783.581A2.244,2.244,0,0,1,16.29,0a2.274,2.274,0,0,1,1.518.583L23.536,5.64V2.715a.906.906,0,0,1,.9-.9h3.622a.906.906,0,0,1,.9.9v7.72l3.321,2.932a.905.905,0,0,1,.068,1.278l-1.21,1.347a.907.907,0,0,1-1.279.069L16.893,4.618a.906.906,0,0,0-1.2,0L2.722,16.062A.9.9,0,0,1,2.117,16.294Z"
                            transform="translate(-11518.5 9041.517)"/>
                    </g>
                    <path
                        d="M25.422,2.427H14.081A5.292,5.292,0,0,0,10.034.179,4.9,4.9,0,0,0,5.067,5.065a4.84,4.84,0,0,0,4.967,4.817,5.146,5.146,0,0,0,4.608-3.259h1.651l1.2-1.2,1.2,1.2h.746l1.2-1.2,1.2,1.2h.746l1.2-1.2,1.2,1.2h.457v.168l-.1.025L27.679,4.5Zm-17,3.962a1.439,1.439,0,1,1,1.44-1.438A1.439,1.439,0,0,1,8.427,6.389Z"
                        transform="translate(960.754 163.242)"/>
                </g>
            </svg>

        }, [currentOption, nextOption]),
        sellBusinessIcon = React.useMemo(() => {
            return <svg xmlns="http://www.w3.org/2000/svg" width="36.25" height="29" viewBox="0 0 36.25 29"
                        fill={currentOption === 'sellBusiness' || nextOption === 'sellBusiness' ? '#AAB6EF' : null}
                        opacity={currentOption === 'sellBusiness' || nextOption === 'sellBusiness' ? '1' : '.5'}>
                <path
                    d="M12728.093-9115a8.1,8.1,0,0,1-5.767-2.389,8.105,8.105,0,0,1-2.387-5.769,8.105,8.105,0,0,1,2.387-5.769,8.1,8.1,0,0,1,5.767-2.389,8.109,8.109,0,0,1,5.771,2.389,8.105,8.105,0,0,1,2.387,5.769,8.105,8.105,0,0,1-2.387,5.769A8.109,8.109,0,0,1,12728.093-9115Zm-2.666-6.737a2.432,2.432,0,0,0,2.158,2.247v1.275h1.761v-1.263c1.3-.248,2.053-1.007,2.053-2.084,0-1.642-1.394-2.226-2.756-2.58-1.283-.332-1.761-.673-1.761-1.259,0-.66.622-1.087,1.585-1.087.947,0,1.427.4,1.467,1.23h1.295a2.355,2.355,0,0,0-1.883-2.234v-1.285h-1.761v1.266a2.283,2.283,0,0,0-2.053,2.119c0,1.2.877,1.972,2.759,2.423,1.549.372,1.758.923,1.758,1.413,0,.509-.416,1.052-1.582,1.052-1.351,0-1.7-.671-1.748-1.233Zm-6.2,3.113h-16.507a2.791,2.791,0,0,1-2.72-2.721v-8.153h10.874v2.717a.909.909,0,0,0,.908.907h6.728a9.924,9.924,0,0,0-.387,2.717,9.84,9.84,0,0,0,1.1,4.532Zm3.154-12.69H12700v-4.529a2.79,2.79,0,0,1,2.72-2.72h4.529v-2.717a2.791,2.791,0,0,1,2.721-2.72h9.062a2.79,2.79,0,0,1,2.72,2.72v2.717h4.529a2.791,2.791,0,0,1,2.721,2.72v2.766c-.326-.032-.623-.048-.908-.048a9.9,9.9,0,0,0-5.711,1.812Zm-11.507-9.062v1.813h7.249v-1.812Z"
                    transform="translate(-12700 9144)"/>
            </svg>

        }, [currentOption, nextOption]),
        sellHouseIcon = React.useMemo(() => {
            return <svg xmlns="http://www.w3.org/2000/svg" width="34.606" height="32.296" viewBox="0 0 34.606 32.296"
                        fill={currentOption === 'sellHouse' || nextOption === 'sellHouse' ? '#AAB6EF' : null}
                        opacity={currentOption === 'sellHouse' || nextOption === 'sellHouse' ? '1' : '.5'}>
                <g transform="translate(-943.706 -143.021)">
                    <g transform="translate(12462.205 -8898.496)">
                        <path
                            d="M20.856,28.967H4.526a.906.906,0,0,1-.905-.9V17.6a1.313,1.313,0,0,1,.126-.073.874.874,0,0,0,.184-.117L16.294,6.5,28.67,17.42a.828.828,0,0,0,.174.11,1.221,1.221,0,0,1,.123.071v.527a7.5,7.5,0,0,0-8.111,10.838ZM2.117,16.294a.907.907,0,0,1-.674-.3L.232,14.647A.907.907,0,0,1,.3,13.368L14.783.581A2.244,2.244,0,0,1,16.29,0a2.274,2.274,0,0,1,1.518.583L23.536,5.64V2.715a.906.906,0,0,1,.9-.9h3.622a.906.906,0,0,1,.9.9v7.72l3.321,2.932a.905.905,0,0,1,.068,1.278l-1.21,1.347a.907.907,0,0,1-1.279.069L16.893,4.618a.906.906,0,0,0-1.2,0L2.722,16.062A.9.9,0,0,1,2.117,16.294Z"
                            transform="translate(-11518.5 9041.517)"/>
                    </g>
                    <path
                        d="M12726.094-9119a6.116,6.116,0,0,1-4.353-1.8,6.117,6.117,0,0,1-1.8-4.354,6.119,6.119,0,0,1,1.8-4.354,6.116,6.116,0,0,1,4.353-1.8,6.122,6.122,0,0,1,4.355,1.8,6.122,6.122,0,0,1,1.8,4.354,6.121,6.121,0,0,1-1.8,4.354A6.122,6.122,0,0,1,12726.094-9119Zm-2.013-5.086a1.838,1.838,0,0,0,1.629,1.7v.963h1.329v-.953c.985-.187,1.55-.761,1.55-1.574,0-1.238-1.052-1.68-2.08-1.947-.969-.25-1.329-.508-1.329-.949,0-.5.47-.821,1.2-.821s1.077.3,1.107.929h.977a1.776,1.776,0,0,0-1.421-1.686v-.971h-1.329v.955a1.723,1.723,0,0,0-1.549,1.6c0,.908.662,1.488,2.082,1.829,1.169.28,1.327.7,1.327,1.066s-.314.794-1.194.794c-1.02,0-1.28-.506-1.319-.932Z"
                        transform="translate(-11753.938 9294.316)"/>
                </g>
            </svg>

        }, [currentOption, nextOption]),
        sellCarIcon = React.useMemo(() => {
            return <svg xmlns="http://www.w3.org/2000/svg" width="34.453" height="25.203" viewBox="0 0 34.453 25.203"
                        fill={currentOption === 'sellCar' || nextOption === 'sellCar' ? '#AAB6EF' : null}
                        opacity={currentOption === 'sellCar' || nextOption === 'sellCar' ? '1' : '.5'}>
                <g transform="translate(-1021.859 -125.113)">
                    <path
                        d="M12704.823-9119.889a2.8,2.8,0,0,1-2.049-.845,2.792,2.792,0,0,1-.844-2.049v-1.927h-1.448a.465.465,0,0,1-.348-.138.47.47,0,0,1-.135-.346v-5.788a3.269,3.269,0,0,1,.988-2.389,3.264,3.264,0,0,1,2.388-.987h.422l1.582-6.313a4.26,4.26,0,0,1,1.566-2.374,4.3,4.3,0,0,1,2.7-.956h11.575a4.279,4.279,0,0,1,2.7.956,4.269,4.269,0,0,1,1.569,2.374l1.583,6.313h.422a3.267,3.267,0,0,1,2.388.987,3.365,3.365,0,0,1,.756,1.129,8.511,8.511,0,0,0-2.492-.371,8.523,8.523,0,0,0-8.481,7.9h-11.943v1.927a2.792,2.792,0,0,1-.844,2.049A2.8,2.8,0,0,1,12704.823-9119.889Zm0-12.055a2.345,2.345,0,0,0-1.7.707,2.334,2.334,0,0,0-.71,1.7,2.337,2.337,0,0,0,.71,1.7,2.337,2.337,0,0,0,1.7.71,2.324,2.324,0,0,0,1.7-.71,2.333,2.333,0,0,0,.709-1.7,2.329,2.329,0,0,0-.709-1.7A2.332,2.332,0,0,0,12704.823-9131.943Zm4.82-8.2a.553.553,0,0,0-.316.144.577.577,0,0,0-.211.262l-1.339,5.38h15.312l-1.343-5.38a.547.547,0,0,0-.211-.262.533.533,0,0,0-.316-.144Z"
                        transform="translate(-11678.141 9269.113)"/>
                    <path
                        d="M12726.094-9119a6.116,6.116,0,0,1-4.353-1.8,6.117,6.117,0,0,1-1.8-4.354,6.119,6.119,0,0,1,1.8-4.354,6.116,6.116,0,0,1,4.353-1.8,6.122,6.122,0,0,1,4.355,1.8,6.122,6.122,0,0,1,1.8,4.354,6.121,6.121,0,0,1-1.8,4.354A6.122,6.122,0,0,1,12726.094-9119Zm-2.013-5.086a1.838,1.838,0,0,0,1.629,1.7v.963h1.329v-.953c.985-.187,1.55-.761,1.55-1.574,0-1.238-1.052-1.68-2.08-1.947-.969-.25-1.329-.508-1.329-.949,0-.5.47-.821,1.2-.821s1.077.3,1.107.929h.977a1.776,1.776,0,0,0-1.421-1.686v-.971h-1.329v.955a1.723,1.723,0,0,0-1.549,1.6c0,.908.662,1.488,2.082,1.829,1.169.28,1.327.7,1.327,1.066s-.314.794-1.194.794c-1.02,0-1.28-.506-1.319-.932Z"
                        transform="translate(-11675.938 9269.316)"/>
                </g>
            </svg>

        }, [currentOption, nextOption]),
        arendCarIcon = React.useMemo(() => {
            return <svg xmlns="http://www.w3.org/2000/svg" width="44.414" height="24.111" viewBox="0 0 44.414 24.111"
                        fill={currentOption === 'arendCar' || nextOption === 'arendCar' ? '#AAB6EF' : null}
                        opacity={currentOption === 'arendCar' || nextOption === 'arendCar' ? '1' : '.5'}>
                <g transform="translate(-1071.019 -48.186)">
                    <g transform="translate(49.159 -76.928)">
                        <path
                            d="M12704.823-9119.889a2.8,2.8,0,0,1-2.049-.845,2.792,2.792,0,0,1-.844-2.049v-1.927h-1.448a.465.465,0,0,1-.348-.138.47.47,0,0,1-.135-.346v-5.788a3.269,3.269,0,0,1,.988-2.389,3.264,3.264,0,0,1,2.388-.987h.422l1.582-6.313a4.26,4.26,0,0,1,1.566-2.374,4.3,4.3,0,0,1,2.7-.956h11.575a4.279,4.279,0,0,1,2.7.956,4.269,4.269,0,0,1,1.569,2.374l1.583,6.313h.422a3.267,3.267,0,0,1,2.388.987,3.365,3.365,0,0,1,.756,1.129,8.511,8.511,0,0,0-2.492-.371,8.523,8.523,0,0,0-8.481,7.9h-11.943v1.927a2.792,2.792,0,0,1-.844,2.049A2.8,2.8,0,0,1,12704.823-9119.889Zm0-12.055a2.345,2.345,0,0,0-1.7.707,2.334,2.334,0,0,0-.71,1.7,2.337,2.337,0,0,0,.71,1.7,2.337,2.337,0,0,0,1.7.71,2.324,2.324,0,0,0,1.7-.71,2.333,2.333,0,0,0,.709-1.7,2.329,2.329,0,0,0-.709-1.7A2.332,2.332,0,0,0,12704.823-9131.943Zm4.82-8.2a.553.553,0,0,0-.316.144.577.577,0,0,0-.211.262l-1.339,5.38h15.312l-1.343-5.38a.547.547,0,0,0-.211-.262.533.533,0,0,0-.316-.144Z"
                            transform="translate(-11678.141 9269.113)"/>
                    </g>
                    <path
                        d="M25.422,2.427H14.081A5.292,5.292,0,0,0,10.034.179,4.9,4.9,0,0,0,5.067,5.065a4.84,4.84,0,0,0,4.967,4.817,5.146,5.146,0,0,0,4.608-3.259h1.651l1.2-1.2,1.2,1.2h.746l1.2-1.2,1.2,1.2h.746l1.2-1.2,1.2,1.2h.457v.168l-.1.025L27.679,4.5Zm-17,3.962a1.439,1.439,0,1,1,1.44-1.438A1.439,1.439,0,0,1,8.427,6.389Z"
                        transform="translate(1087.754 61.407)"/>
                </g>
            </svg>

        }, [currentOption, nextOption]);

    return <div className='hud-interactions-property'>
        <div className='hud-interactions-property-navigation'>
            <div
                className='hud-interactions-property-navigation-back'
                onClick={() => setCurrentPage('main')}
            >
                <img className='hud-interactions-property-navigation-back__arrow' src={rightArrow} alt='#'/>
                <span className='hud-interactions-property-navigation-back__title'>назад</span>
            </div>
        </div>
        <div className='hud-interactions-property__title'>{titles[nextOption]}</div>
        <div className='hud-interactions-property-options'>
            <div
                className='hud-interactions-property-options__element hud-interactions-property-options__element_arendHouse'
                onMouseOver={() => setNextOption('arendHouse')}
                onClick={() => setCurrentOption('arendHouse')}
            >
                {arendHouseIcon}
            </div>
            <div
                className='hud-interactions-property-options__element hud-interactions-property-options__element_sellBusiness'
                onMouseOver={() => setNextOption('sellBusiness')}
                onClick={() => setCurrentOption('sellBusiness')}
            >
                {sellBusinessIcon}
            </div>
            <div
                className='hud-interactions-property-options__element hud-interactions-property-options__element_sellHouse'
                onMouseOver={() => setNextOption('sellHouse')}
            >
                {sellHouseIcon}
            </div>
            <div
                className='hud-interactions-property-options__element hud-interactions-property-options__element_sellCar'
                onMouseOver={() => setNextOption('sellCar')}
            >
                {sellCarIcon}
            </div>
            <div
                className='hud-interactions-property-options__element hud-interactions-property-options__element_arendCar'
                onMouseOver={() => setNextOption('arendCar')}
            >
                {arendCarIcon}
            </div>
        </div>
    </div>
}

export default React.memo(Property);