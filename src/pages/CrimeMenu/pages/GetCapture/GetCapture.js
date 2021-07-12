import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import marabuntaIcon from 'assets/images/crimeMenu/marabuntaIcon.svg';
import vagosIcon     from 'assets/images/crimeMenu/vagosIcon.svg';
import familiesIcon  from 'assets/images/crimeMenu/familiesIcon.svg';
import ballasIcon    from 'assets/images/crimeMenu/ballasIcon.svg';
import medkit        from 'assets/images/crimeMenu/medkit.svg';
import armour        from 'assets/images/crimeMenu/armour.svg';
import drug          from 'assets/images/crimeMenu/drug.svg';
import animation     from 'assets/images/crimeMenu/animation.svg';
import pistol        from 'assets/images/crimeMenu/pistol.svg';
import smg           from 'assets/images/crimeMenu/smg.svg';
import assault       from 'assets/images/crimeMenu/assault.svg';
import shotgun       from 'assets/images/crimeMenu/shotgun.svg';
import versus        from 'assets/images/crimeMenu/versus.svg';
import captureMap    from 'assets/images/crimeMenu/captureMap.png';
import killedScull   from 'assets/images/crimeMenu/killedScull.svg';

import './GetCapture.scss';

const GetCapture = ({store, setPage, fractionColor}) => {
	const [moveTime, setMoveTime] = React.useState(store.capture.time.move);
	
	const hours = React.useMemo(() => {
			if (String(store.capture.time.hours).length < 2) return `0${store.capture.time.hours}`;
			else return store.capture.time.hours;
		}, [store.capture.time.hours]),
		minutes = React.useMemo(() => {
			if (String(store.capture.time.minutes).length < 2) return `0${store.capture.time.minutes}`;
			else return store.capture.time.minutes;
		}, [store.capture.time.minutes]),
		players = React.useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], []),
		attackIcon = React.useMemo(() => {
			switch (store.capture.attack) {
				case 'Marabunta':
					return marabuntaIcon;
				case 'Vagos':
					return vagosIcon;
				case 'Families':
					return familiesIcon;
				case 'Ballas':
					return ballasIcon;
				default:
					return;
			}
		}, [store.capture.attack]),
		attackColor = React.useMemo(() => {
			switch (store.capture.attack) {
				case 'Marabunta':
					return '#30CDFE';
				case 'Vagos':
					return '#FEEF30';
				case 'Families':
					return '#30FE3E';
				case 'Ballas':
					return '#8B00FF';
				default:
					return;
			}
		}, [store.capture.attack]);
	
		const correctWord = React.useCallback((value) => {
			const lastSymbol = Number(String(value)[String(value).length - 1]);
			const preLastSymbol = Number(String(value)[String(value).length - 2]);
			const lastTwoSymbols = Number(String(lastSymbol) + String(preLastSymbol));
			
			if (lastTwoSymbols > 10 && lastTwoSymbols < 15) return 'участников';
			else if (lastSymbol === 1) return 'участник';
			else if (lastSymbol > 1 && lastSymbol < 5) return 'участника';
			else return 'участников';
		}, []);
	
	return <div className="crime-menu-get-capture">
		<div className="crime-menu-get-capture-map">
			<img className="crime-menu-get-capture-map__image" src={captureMap} alt="#"/>
			<div className="crime-menu-get-capture-map-capture">
				<div className="crime-menu-get-capture-map-capture-left">
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[1] === 'Families' ? '#91FF5380' :
								store.allTerritories[1] === 'Ballas' ? '#C373F380' :
									store.allTerritories[1] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[2] === 'Families' ? '#91FF5380' :
								store.allTerritories[2] === 'Ballas' ? '#C373F380' :
									store.allTerritories[2] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[3] === 'Families' ? '#91FF5380' :
								store.allTerritories[3] === 'Ballas' ? '#C373F380' :
									store.allTerritories[3] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[4] === 'Families' ? '#91FF5380' :
								store.allTerritories[4] === 'Ballas' ? '#C373F380' :
									store.allTerritories[4] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[5] === 'Families' ? '#91FF5380' :
								store.allTerritories[5] === 'Ballas' ? '#C373F380' :
									store.allTerritories[5] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[6] === 'Families' ? '#91FF5380' :
								store.allTerritories[6] === 'Ballas' ? '#C373F380' :
									store.allTerritories[6] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[7] === 'Families' ? '#91FF5380' :
								store.allTerritories[7] === 'Ballas' ? '#C373F380' :
									store.allTerritories[7] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[8] === 'Families' ? '#91FF5380' :
								store.allTerritories[8] === 'Ballas' ? '#C373F380' :
									store.allTerritories[8] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[9] === 'Families' ? '#91FF5380' :
								store.allTerritories[9] === 'Ballas' ? '#C373F380' :
									store.allTerritories[9] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[12] === 'Families' ? '#91FF5380' :
								store.allTerritories[12] === 'Ballas' ? '#C373F380' :
									store.allTerritories[12] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[13] === 'Families' ? '#91FF5380' :
								store.allTerritories[13] === 'Ballas' ? '#C373F380' :
									store.allTerritories[13] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[14] === 'Families' ? '#91FF5380' :
								store.allTerritories[14] === 'Ballas' ? '#C373F380' :
									store.allTerritories[14] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[15] === 'Families' ? '#91FF5380' :
								store.allTerritories[15] === 'Ballas' ? '#C373F380' :
									store.allTerritories[15] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[16] === 'Families' ? '#91FF5380' :
								store.allTerritories[16] === 'Ballas' ? '#C373F380' :
									store.allTerritories[16] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[17] === 'Families' ? '#91FF5380' :
								store.allTerritories[17] === 'Ballas' ? '#C373F380' :
									store.allTerritories[17] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[23] === 'Families' ? '#91FF5380' :
								store.allTerritories[23] === 'Ballas' ? '#C373F380' :
									store.allTerritories[23] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[24] === 'Families' ? '#91FF5380' :
								store.allTerritories[24] === 'Ballas' ? '#C373F380' :
									store.allTerritories[24] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[25] === 'Families' ? '#91FF5380' :
								store.allTerritories[25] === 'Ballas' ? '#C373F380' :
									store.allTerritories[25] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[26] === 'Families' ? '#91FF5380' :
								store.allTerritories[26] === 'Ballas' ? '#C373F380' :
									store.allTerritories[26] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[27] === 'Families' ? '#91FF5380' :
								store.allTerritories[27] === 'Ballas' ? '#C373F380' :
									store.allTerritories[27] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[28] === 'Families' ? '#91FF5380' :
								store.allTerritories[28] === 'Ballas' ? '#C373F380' :
									store.allTerritories[28] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[35] === 'Families' ? '#91FF5380' :
								store.allTerritories[35] === 'Ballas' ? '#C373F380' :
									store.allTerritories[35] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[36] === 'Families' ? '#91FF5380' :
								store.allTerritories[36] === 'Ballas' ? '#C373F380' :
									store.allTerritories[36] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[37] === 'Families' ? '#91FF5380' :
								store.allTerritories[37] === 'Ballas' ? '#C373F380' :
									store.allTerritories[37] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[38] === 'Families' ? '#91FF5380' :
								store.allTerritories[38] === 'Ballas' ? '#C373F380' :
									store.allTerritories[38] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[39] === 'Families' ? '#91FF5380' :
								store.allTerritories[39] === 'Ballas' ? '#C373F380' :
									store.allTerritories[39] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[45] === 'Families' ? '#91FF5380' :
								store.allTerritories[45] === 'Ballas' ? '#C373F380' :
									store.allTerritories[45] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[46] === 'Families' ? '#91FF5380' :
								store.allTerritories[46] === 'Ballas' ? '#C373F380' :
									store.allTerritories[46] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[47] === 'Families' ? '#91FF5380' :
								store.allTerritories[47] === 'Ballas' ? '#C373F380' :
									store.allTerritories[47] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[48] === 'Families' ? '#91FF5380' :
								store.allTerritories[48] === 'Ballas' ? '#C373F380' :
									store.allTerritories[48] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[49] === 'Families' ? '#91FF5380' :
								store.allTerritories[49] === 'Ballas' ? '#C373F380' :
									store.allTerritories[49] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[55] === 'Families' ? '#91FF5380' :
								store.allTerritories[55] === 'Ballas' ? '#C373F380' :
									store.allTerritories[55] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[56] === 'Families' ? '#91FF5380' :
								store.allTerritories[56] === 'Ballas' ? '#C373F380' :
									store.allTerritories[56] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[57] === 'Families' ? '#91FF5380' :
								store.allTerritories[57] === 'Ballas' ? '#C373F380' :
									store.allTerritories[57] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[58] === 'Families' ? '#91FF5380' :
								store.allTerritories[58] === 'Ballas' ? '#C373F380' :
									store.allTerritories[58] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[59] === 'Families' ? '#91FF5380' :
								store.allTerritories[59] === 'Ballas' ? '#C373F380' :
									store.allTerritories[59] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
				</div>
				<div className="crime-menu-get-capture-map-capture-right">
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[10] === 'Families' ? '#91FF5380' :
								store.allTerritories[10] === 'Ballas' ? '#C373F380' :
									store.allTerritories[10] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[11] === 'Families' ? '#91FF5380' :
								store.allTerritories[11] === 'Ballas' ? '#C373F380' :
									store.allTerritories[11] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[18] === 'Families' ? '#91FF5380' :
								store.allTerritories[18] === 'Ballas' ? '#C373F380' :
									store.allTerritories[18] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[19] === 'Families' ? '#91FF5380' :
								store.allTerritories[19] === 'Ballas' ? '#C373F380' :
									store.allTerritories[19] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[20] === 'Families' ? '#91FF5380' :
								store.allTerritories[20] === 'Ballas' ? '#C373F380' :
									store.allTerritories[20] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[21] === 'Families' ? '#91FF5380' :
								store.allTerritories[21] === 'Ballas' ? '#C373F380' :
									store.allTerritories[21] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[22] === 'Families' ? '#91FF5380' :
								store.allTerritories[22] === 'Ballas' ? '#C373F380' :
									store.allTerritories[22] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[29] === 'Families' ? '#91FF5380' :
								store.allTerritories[29] === 'Ballas' ? '#C373F380' :
									store.allTerritories[29] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[30] === 'Families' ? '#91FF5380' :
								store.allTerritories[30] === 'Ballas' ? '#C373F380' :
									store.allTerritories[30] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[31] === 'Families' ? '#91FF5380' :
								store.allTerritories[31] === 'Ballas' ? '#C373F380' :
									store.allTerritories[31] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[32] === 'Families' ? '#91FF5380' :
								store.allTerritories[32] === 'Ballas' ? '#C373F380' :
									store.allTerritories[32] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[33] === 'Families' ? '#91FF5380' :
								store.allTerritories[33] === 'Ballas' ? '#C373F380' :
									store.allTerritories[33] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[34] === 'Families' ? '#91FF5380' :
								store.allTerritories[34] === 'Ballas' ? '#C373F380' :
									store.allTerritories[34] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[40] === 'Families' ? '#91FF5380' :
								store.allTerritories[40] === 'Ballas' ? '#C373F380' :
									store.allTerritories[40] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[41] === 'Families' ? '#91FF5380' :
								store.allTerritories[41] === 'Ballas' ? '#C373F380' :
									store.allTerritories[41] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[41] === 'Families' ? '#91FF5380' :
								store.allTerritories[41] === 'Ballas' ? '#C373F380' :
									store.allTerritories[41] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[42] === 'Families' ? '#91FF5380' :
								store.allTerritories[42] === 'Ballas' ? '#C373F380' :
									store.allTerritories[42] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[43] === 'Families' ? '#91FF5380' :
								store.allTerritories[43] === 'Ballas' ? '#C373F380' :
									store.allTerritories[43] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[50] === 'Families' ? '#91FF5380' :
								store.allTerritories[50] === 'Ballas' ? '#C373F380' :
									store.allTerritories[50] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[51] === 'Families' ? '#91FF5380' :
								store.allTerritories[51] === 'Ballas' ? '#C373F380' :
									store.allTerritories[51] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[52] === 'Families' ? '#91FF5380' :
								store.allTerritories[52] === 'Ballas' ? '#C373F380' :
									store.allTerritories[52] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[53] === 'Families' ? '#91FF5380' :
								store.allTerritories[53] === 'Ballas' ? '#C373F380' :
									store.allTerritories[53] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[54] === 'Families' ? '#91FF5380' :
								store.allTerritories[54] === 'Ballas' ? '#C373F380' :
									store.allTerritories[54] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[60] === 'Families' ? '#91FF5380' :
								store.allTerritories[60] === 'Ballas' ? '#C373F380' :
									store.allTerritories[0] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[61] === 'Families' ? '#91FF5380' :
								store.allTerritories[61] === 'Ballas' ? '#C373F380' :
									store.allTerritories[61] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[62] === 'Families' ? '#91FF5380' :
								store.allTerritories[62] === 'Ballas' ? '#C373F380' :
									store.allTerritories[62] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[63] === 'Families' ? '#91FF5380' :
								store.allTerritories[63] === 'Ballas' ? '#C373F380' :
									store.allTerritories[63] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[64] === 'Families' ? '#91FF5380' :
								store.allTerritories[64] === 'Ballas' ? '#C373F380' :
									store.allTerritories[64] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[65] === 'Families' ? '#91FF5380' :
								store.allTerritories[65] === 'Ballas' ? '#C373F380' :
									store.allTerritories[65] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[66] === 'Families' ? '#91FF5380' :
								store.allTerritories[66] === 'Ballas' ? '#C373F380' :
									store.allTerritories[66] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[67] === 'Families' ? '#91FF5380' :
								store.allTerritories[67] === 'Ballas' ? '#C373F380' :
									store.allTerritories[67] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[68] === 'Families' ? '#91FF5380' :
								store.allTerritories[68] === 'Ballas' ? '#C373F380' :
									store.allTerritories[68] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[69] === 'Families' ? '#91FF5380' :
								store.allTerritories[69] === 'Ballas' ? '#C373F380' :
									store.allTerritories[69] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[70] === 'Families' ? '#91FF5380' :
								store.allTerritories[70] === 'Ballas' ? '#C373F380' :
									store.allTerritories[70] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[71] === 'Families' ? '#91FF5380' :
								store.allTerritories[71] === 'Ballas' ? '#C373F380' :
									store.allTerritories[71] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-get-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[72] === 'Families' ? '#91FF5380' :
								store.allTerritories[72] === 'Ballas' ? '#C373F380' :
									store.allTerritories[72] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
				</div>
			</div>
		</div>
		<div className="crime-menu-get-capture-attack">
			<div className="crime-menu-get-capture-attack-element">
				<div
					className="crime-menu-get-capture-attack-element-content"
					style={{background: `linear-gradient(to bottom, #00000000, ${attackColor} 30%)`}}
				>
					<img className="crime-menu-get-capture-attack-element-content__icon" src={attackIcon} alt="#"/>
				</div>
			</div>
		</div>
		<div className="crime-menu-get-capture-conditions">
			<div className="crime-menu-get-capture-conditions__title">Вам назначен <br/>захват территории</div>
			<div className="crime-menu-get-capture-conditions-description">
				<div className="crime-menu-get-capture-conditions-description__title">Внимание</div>
				<div className="crime-menu-get-capture-conditions-description__subtitle">
					Не нарушайте правила и не будете наказаны. Незнание правил не освобождает от наказания. Ведите себя
					культурно!
				</div>
			</div>
			<div className="crime-menu-get-capture-conditions-time">
				<div className="crime-menu-get-capture-conditions-time-main">
					<div className="crime-menu-get-capture-conditions-time-main__title">Время</div>
					<div className="crime-menu-get-capture-conditions-time-main-content">
						<div className="crime-menu-get-capture-conditions-time-main-content-hours">
							<div
								className="crime-menu-get-capture-conditions-time-main-content-hours__value">{hours}</div>
						</div>
						<span>:</span>
						<div className="crime-menu-get-capture-conditions-time-main-content-minutes">
							<div
								className="crime-menu-get-capture-conditions-time-main-content-minutes__value">{minutes}</div>
						</div>
					</div>
				</div>
				<div className="crime-menu-get-capture-conditions-time-move">
					<div className="crime-menu-get-capture-conditions-time-move__title">Перенос</div>
					<div className="crime-menu-get-capture-conditions-time-move__description">
						У вас есть возможность перенести захват не более чем на 15 минут
					</div>
					<div className="crime-menu-get-capture-conditions-time-move-options">
						<div
							className={cn('crime-menu-get-capture-conditions-time-move-options__element',
								moveTime === 5 ? 'crime-menu-get-capture-conditions-time-move-options__element_active' : null)}
							onClick={() => {
								if (store.capture.time.move > 0) store.addNotify(`Вы уже перенесли капт на ${store.capture.time.move} минут`);
								else setMoveTime(5);
							}}
						>
							5 мин
						</div>
						<div
							className={cn('crime-menu-get-capture-conditions-time-move-options__element',
								moveTime === 10 ? 'crime-menu-get-capture-conditions-time-move-options__element_active' : null)}
							onClick={() => {
								if (store.capture.time.move > 0) store.addNotify(`Вы уже перенесли капт на ${store.capture.time.move} минут`);
								else setMoveTime(10);
							}}
						>
							10 мин
						</div>
						<div
							className={cn('crime-menu-get-capture-conditions-time-move-options__element',
								moveTime === 15 ? 'crime-menu-get-capture-conditions-time-move-options__element_active' : null)}
							onClick={() => {
								if (store.capture.time.move > 0) store.addNotify(`Вы уже перенесли капт на ${store.capture.time.move} минут`);
								else setMoveTime(15);
							}}
						>
							15 мин
						</div>
					</div>
				</div>
			</div>
			<div className="crime-menu-get-capture-conditions-access">
				<div className="crime-menu-get-capture-conditions-access-guns">
					<div className="crime-menu-get-capture-conditions-access-guns__title">Оружие</div>
					<div className="crime-menu-get-capture-conditions-access-guns-content">
						<div
							className={cn('crime-menu-get-capture-conditions-access-guns-content-element',
								store.capture.access.guns.pistol ? 'crime-menu-get-capture-conditions-access-guns-content-element_active' : null)}
						>
							<div className="crime-menu-get-capture-conditions-access-guns-content-element-status">
								<div
									className="crime-menu-get-capture-conditions-access-guns-content-element-status__fill"/>
							</div>
							<img className="crime-menu-get-capture-conditions-access-guns-content-element__icon"
							     src={pistol}
							     alt="#"/>
							<div className="crime-menu-get-capture-conditions-access-guns-content-element__title">-
								Пистолеты
							</div>
						</div>
						<div
							className={cn('crime-menu-get-capture-conditions-access-guns-content-element',
								store.capture.access.guns.smg ? 'crime-menu-get-capture-conditions-access-guns-content-element_active' : null)}
						>
							<div className="crime-menu-get-capture-conditions-access-guns-content-element-status">
								<div
									className="crime-menu-get-capture-conditions-access-guns-content-element-status__fill"/>
							</div>
							<img className="crime-menu-get-capture-conditions-access-guns-content-element__icon"
							     src={smg}
							     alt="#"/>
							<div className="crime-menu-get-capture-conditions-access-guns-content-element__title">-
								Пистолеты-пулеметы
							</div>
						</div>
						<div
							className={cn('crime-menu-get-capture-conditions-access-guns-content-element',
								store.capture.access.guns.assault ? 'crime-menu-get-capture-conditions-access-guns-content-element_active' : null)}
						>
							<div className="crime-menu-get-capture-conditions-access-guns-content-element-status">
								<div
									className="crime-menu-get-capture-conditions-access-guns-content-element-status__fill"/>
							</div>
							<img className="crime-menu-get-capture-conditions-access-guns-content-element__icon"
							     src={assault}
							     alt="#"/>
							<div className="crime-menu-get-capture-conditions-access-guns-content-element__title">-
								Штурмовые
								винтовки
							</div>
						</div>
						<div
							className={cn('crime-menu-get-capture-conditions-access-guns-content-element',
								store.capture.access.guns.shotgun ? 'crime-menu-get-capture-conditions-access-guns-content-element_active' : null)}
						>
							<div className="crime-menu-get-capture-conditions-access-guns-content-element-status">
								<div
									className="crime-menu-get-capture-conditions-access-guns-content-element-status__fill"/>
							</div>
							<img className="crime-menu-get-capture-conditions-access-guns-content-element__icon"
							     src={shotgun}
							     alt="#"/>
							<div className="crime-menu-get-capture-conditions-access-guns-content-element__title">-
								Дробовики
							</div>
						</div>
					</div>
				</div>
				<div className="crime-menu-get-capture-conditions-access-items">
					<div className="crime-menu-get-capture-conditions-access-items__title">Разрешено использовать</div>
					<div className="crime-menu-get-capture-conditions-access-items-content">
						<div
							className={cn('crime-menu-get-capture-conditions-access-items-content-element',
								store.capture.access.items.medkit ? 'crime-menu-get-capture-conditions-access-items-content-element_active' : null)}
						>
							<div className="crime-menu-get-capture-conditions-access-items-content-element-status">
								<div
									className="crime-menu-get-capture-conditions-access-items-content-element-status__fill"/>
							</div>
							<img className="crime-menu-get-capture-conditions-access-items-content-element__icon"
							     src={medkit}
							     alt="#"/>
							<div className="crime-menu-get-capture-conditions-access-items-content-element__title">-
								Аптечки
							</div>
						</div>
						<div
							className={cn('crime-menu-get-capture-conditions-access-items-content-element',
								store.capture.access.items.armour ? 'crime-menu-get-capture-conditions-access-items-content-element_active' : null)}
						>
							<div className="crime-menu-get-capture-conditions-access-items-content-element-status">
								<div
									className="crime-menu-get-capture-conditions-access-items-content-element-status__fill"/>
							</div>
							<img className="crime-menu-get-capture-conditions-access-items-content-element__icon"
							     src={armour}
							     alt="#"/>
							<div className="crime-menu-get-capture-conditions-access-items-content-element__title">-
								Бронежилеты
							</div>
						</div>
						<div
							className={cn('crime-menu-get-capture-conditions-access-items-content-element',
								store.capture.access.items.drug ? 'crime-menu-get-capture-conditions-access-items-content-element_active' : null)}
						>
							<div className="crime-menu-get-capture-conditions-access-items-content-element-status">
								<div
									className="crime-menu-get-capture-conditions-access-items-content-element-status__fill"/>
							</div>
							<img className="crime-menu-get-capture-conditions-access-items-content-element__icon"
							     src={drug}
							     alt="#"/>
							<div className="crime-menu-get-capture-conditions-access-items-content-element__title">-
								Наркотики
							</div>
						</div>
						<div
							className={cn('crime-menu-get-capture-conditions-access-items-content-element',
								store.capture.access.items.animation ? 'crime-menu-get-capture-conditions-access-items-content-element_active' : null)}
						>
							<div className="crime-menu-get-capture-conditions-access-items-content-element-status">
								<div
									className="crime-menu-get-capture-conditions-access-items-content-element-status__fill"/>
							</div>
							<img className="crime-menu-get-capture-conditions-access-items-content-element__icon"
							     src={animation}
							     alt="#"/>
							<div className="crime-menu-get-capture-conditions-access-items-content-element__title">-
								Анимации
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="crime-menu-get-capture-conditions-players">
				<div className="crime-menu-get-capture-conditions-players__title">Игроков</div>
				<div className="crime-menu-get-capture-conditions-players-list">
					<div className="crime-menu-get-capture-conditions-players-list-count">
						<div
							className="crime-menu-get-capture-conditions-players-list-count__attack">{store.capture.count}</div>
						<img className="crime-menu-get-capture-conditions-players-list-count__icon" src={versus}
						     alt="#"/>
						<div
							className="crime-menu-get-capture-conditions-players-list-count__defence">{store.capture.count}</div>
					</div>
					<div className="crime-menu-get-capture-conditions-players-list-content">
						<div className="crime-menu-get-capture-conditions-players-list-content-top">
							{players.map((el, key) => {
								return <svg
									key={key}
									className="crime-menu-get-capture-conditions-players-list-content-top__icon"
									xmlns="http://www.w3.org/2000/svg"
									width="20.486"
									height="23.901"
									viewBox="0 0 20.486 23.901"
									opacity={el > store.capture.count ? .5 : .75}
									fill={el > store.capture.count ? '#000000' : attackColor}
								>
									<path
										d="M10.243,14.2A5.975,5.975,0,1,0,4.268,8.225,5.972,5.972,0,0,0,10.243,14.2Zm4.1,1.707H13.9a8.25,8.25,0,0,1-7.309,0H6.146A6.147,6.147,0,0,0,0,22.053V23.59a2.561,2.561,0,0,0,2.561,2.561H17.926a2.561,2.561,0,0,0,2.561-2.561V22.053A6.147,6.147,0,0,0,14.34,15.908Z"
										transform="translate(0 -2.25)"
									/>
								</svg>;
							})}
						</div>
						<div className="crime-menu-get-capture-conditions-players-list-content-bottom">
							{players.map((el, key) => {
								return <svg
									key={key}
									className="crime-menu-get-capture-conditions-players-list-content-top__icon"
									xmlns="http://www.w3.org/2000/svg"
									width="20.486"
									height="23.901"
									viewBox="0 0 20.486 23.901"
									opacity={el > store.capture.count ? .5 : .75}
									fill={
										el > store.capture.count ? '#000000' :
											el > store.capture.players.filter(el => !el.isBlank && !el.reserve).length ? '#ffffff' : fractionColor
									}
								>
									<path
										d="M10.243,14.2A5.975,5.975,0,1,0,4.268,8.225,5.972,5.972,0,0,0,10.243,14.2Zm4.1,1.707H13.9a8.25,8.25,0,0,1-7.309,0H6.146A6.147,6.147,0,0,0,0,22.053V23.59a2.561,2.561,0,0,0,2.561,2.561H17.926a2.561,2.561,0,0,0,2.561-2.561V22.053A6.147,6.147,0,0,0,14.34,15.908Z"
										transform="translate(0 -2.25)"
									/>
								</svg>;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			className="crime-menu-get-capture-change"
			onClick={() => setPage('changeCaptureList')}
		>
			<div className="crime-menu-get-capture-change__value">{store.capture.players.filter(el => !el.isBlank && !el.reserve).length}</div>
			<img className="crime-menu-get-capture-change__icon" src={killedScull} alt="#"/>
			<div className="crime-menu-get-capture-change-main">
				<div className="crime-menu-get-capture-change-main__title">
					{correctWord(store.capture.players.filter(el => !el.isBlank && !el.reserve).length)}
				</div>
				<div className="crime-menu-get-capture-change-main__edit">редактировать</div>
			</div>
		</div>
		<div
			className="crime-menu-get-capture-submit"
			onClick={() => {
				if (store.capture.time.move > 0) {
					store.addNotify(`Вы уже перенесли капт на ${store.capture.time.move} минут`);
					setPage('main');
				} else if (moveTime > 0) {
					store.capture.time.move = moveTime;
					store.addNotify(`Капт перенесен на ${moveTime} минут`);
					EventManager.emitServer('fraction', 'moveCaptureTime', store.fractionName, moveTime);
					setPage('main');
				} else store.addNotify('Выберите время для переноса');
			}}
		>
			<div className="crime-menu-get-capture-submit__title">Перенести</div>
		</div>
	</div>;
};

export default observer(GetCapture);