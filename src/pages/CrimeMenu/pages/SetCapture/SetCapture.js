import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import fractionFreeze from 'assets/images/crimeMenu/fractionFreeze.svg';
import captureIcon    from 'assets/images/crimeMenu/captureIcon.svg';
import arrowTop       from 'assets/images/crimeMenu/arrowTop.svg';
import rightArrow     from 'assets/images/crimeMenu/rightArrow.svg';
import medkit         from 'assets/images/crimeMenu/medkit.svg';
import armour         from 'assets/images/crimeMenu/armour.svg';
import drug           from 'assets/images/crimeMenu/drug.svg';
import animation      from 'assets/images/crimeMenu/animation.svg';
import pistol         from 'assets/images/crimeMenu/pistol.svg';
import smg            from 'assets/images/crimeMenu/smg.svg';
import assault        from 'assets/images/crimeMenu/assault.svg';
import shotgun        from 'assets/images/crimeMenu/shotgun.svg';
import versus         from 'assets/images/crimeMenu/versus.svg';
import player         from 'assets/images/crimeMenu/player.svg';
import captureMap     from 'assets/images/crimeMenu/captureMap.png';

import './SetCapture.scss';

const SetCapture = ({store, setPage, fractionColor, fractionIcon}) => {
	const [currentFraction, setFraction] = React.useState(null);
	
	React.useEffect(() => {
		store.capture.defence = currentFraction;
		store.capture.attack = store.fractionName;
	}, [currentFraction, store.capture, store.fractionName]);
	
	const _hours = React.useMemo(() => {
			if (String(store.capture.time.hours).length < 2) return `0${store.capture.time.hours}`;
			else return store.capture.time.hours;
		}, [store.capture.time.hours]),
		_minutes = React.useMemo(() => {
			if (String(store.capture.time.minutes).length < 2) return `0${store.capture.time.minutes}`;
			else return store.capture.time.minutes;
		}, [store.capture.time.minutes]),
		players = React.useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], []),
		fractionFreezeTime = React.useMemo(() => {
			switch (store.fractionName) {
				case 'Marabunta':
					return store.fractionsFreeze.mara;
				case 'Vagos':
					return store.fractionsFreeze.vagos;
				case 'Ballas':
					return store.fractionsFreeze.ballas;
				case 'Families':
					return store.fractionsFreeze.families;
				default:
					return;
			}
		}, [store.fractionName, store.fractionsFreeze.ballas, store.fractionsFreeze.families, store.fractionsFreeze.mara, store.fractionsFreeze.vagos]);
	
	return <div className="crime-menu-set-capture">
		<div className="crime-menu-set-capture-map">
			<img className="crime-menu-set-capture-map__image" src={captureMap} alt="#"/>
			<div className="crime-menu-set-capture-map-capture">
				<div className="crime-menu-set-capture-map-capture-left">
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[1] === 'Families' ? '#91FF5380' :
								store.allTerritories[1] === 'Ballas' ? '#C373F380' :
									store.allTerritories[1] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[2] === 'Families' ? '#91FF5380' :
								store.allTerritories[2] === 'Ballas' ? '#C373F380' :
									store.allTerritories[2] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[3] === 'Families' ? '#91FF5380' :
								store.allTerritories[3] === 'Ballas' ? '#C373F380' :
									store.allTerritories[3] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[4] === 'Families' ? '#91FF5380' :
								store.allTerritories[4] === 'Ballas' ? '#C373F380' :
									store.allTerritories[4] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[5] === 'Families' ? '#91FF5380' :
								store.allTerritories[5] === 'Ballas' ? '#C373F380' :
									store.allTerritories[5] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[6] === 'Families' ? '#91FF5380' :
								store.allTerritories[6] === 'Ballas' ? '#C373F380' :
									store.allTerritories[6] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[7] === 'Families' ? '#91FF5380' :
								store.allTerritories[7] === 'Ballas' ? '#C373F380' :
									store.allTerritories[7] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[8] === 'Families' ? '#91FF5380' :
								store.allTerritories[8] === 'Ballas' ? '#C373F380' :
									store.allTerritories[8] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[9] === 'Families' ? '#91FF5380' :
								store.allTerritories[9] === 'Ballas' ? '#C373F380' :
									store.allTerritories[9] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[10] === 'Families' ? '#91FF5380' :
								store.allTerritories[10] === 'Ballas' ? '#C373F380' :
									store.allTerritories[10] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[11] === 'Families' ? '#91FF5380' :
								store.allTerritories[11] === 'Ballas' ? '#C373F380' :
									store.allTerritories[11] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[14] === 'Families' ? '#91FF5380' :
								store.allTerritories[14] === 'Ballas' ? '#C373F380' :
									store.allTerritories[14] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[15] === 'Families' ? '#91FF5380' :
								store.allTerritories[15] === 'Ballas' ? '#C373F380' :
									store.allTerritories[15] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[16] === 'Families' ? '#91FF5380' :
								store.allTerritories[16] === 'Ballas' ? '#C373F380' :
									store.allTerritories[16] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[17] === 'Families' ? '#91FF5380' :
								store.allTerritories[17] === 'Ballas' ? '#C373F380' :
									store.allTerritories[17] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[18] === 'Families' ? '#91FF5380' :
								store.allTerritories[18] === 'Ballas' ? '#C373F380' :
									store.allTerritories[18] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[19] === 'Families' ? '#91FF5380' :
								store.allTerritories[19] === 'Ballas' ? '#C373F380' :
									store.allTerritories[19] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[25] === 'Families' ? '#91FF5380' :
								store.allTerritories[25] === 'Ballas' ? '#C373F380' :
									store.allTerritories[25] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[26] === 'Families' ? '#91FF5380' :
								store.allTerritories[26] === 'Ballas' ? '#C373F380' :
									store.allTerritories[26] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[27] === 'Families' ? '#91FF5380' :
								store.allTerritories[27] === 'Ballas' ? '#C373F380' :
									store.allTerritories[27] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[28] === 'Families' ? '#91FF5380' :
								store.allTerritories[28] === 'Ballas' ? '#C373F380' :
									store.allTerritories[28] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[29] === 'Families' ? '#91FF5380' :
								store.allTerritories[29] === 'Ballas' ? '#C373F380' :
									store.allTerritories[29] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[30] === 'Families' ? '#91FF5380' :
								store.allTerritories[30] === 'Ballas' ? '#C373F380' :
									store.allTerritories[30] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[37] === 'Families' ? '#91FF5380' :
								store.allTerritories[37] === 'Ballas' ? '#C373F380' :
									store.allTerritories[37] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[38] === 'Families' ? '#91FF5380' :
								store.allTerritories[38] === 'Ballas' ? '#C373F380' :
									store.allTerritories[38] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[39] === 'Families' ? '#91FF5380' :
								store.allTerritories[39] === 'Ballas' ? '#C373F380' :
									store.allTerritories[39] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[40] === 'Families' ? '#91FF5380' :
								store.allTerritories[40] === 'Ballas' ? '#C373F380' :
									store.allTerritories[40] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[41] === 'Families' ? '#91FF5380' :
								store.allTerritories[41] === 'Ballas' ? '#C373F380' :
									store.allTerritories[41] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[48] === 'Families' ? '#91FF5380' :
								store.allTerritories[48] === 'Ballas' ? '#C373F380' :
									store.allTerritories[48] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[49] === 'Families' ? '#91FF5380' :
								store.allTerritories[49] === 'Ballas' ? '#C373F380' :
									store.allTerritories[49] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[50] === 'Families' ? '#91FF5380' :
								store.allTerritories[50] === 'Ballas' ? '#C373F380' :
									store.allTerritories[50] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[51] === 'Families' ? '#91FF5380' :
								store.allTerritories[51] === 'Ballas' ? '#C373F380' :
									store.allTerritories[51] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[58] === 'Families' ? '#91FF5380' :
								store.allTerritories[58] === 'Ballas' ? '#C373F380' :
									store.allTerritories[58] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[59] === 'Families' ? '#91FF5380' :
								store.allTerritories[59] === 'Ballas' ? '#C373F380' :
									store.allTerritories[59] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[60] === 'Families' ? '#91FF5380' :
								store.allTerritories[60] === 'Ballas' ? '#C373F380' :
									store.allTerritories[60] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-left__element"
						style={{
							backgroundColor: store.allTerritories[61] === 'Families' ? '#91FF5380' :
								store.allTerritories[61] === 'Ballas' ? '#C373F380' :
									store.allTerritories[61] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
				</div>
				<div className="crime-menu-set-capture-map-capture-right">
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[12] === 'Families' ? '#91FF5380' :
								store.allTerritories[12] === 'Ballas' ? '#C373F380' :
									store.allTerritories[12] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[13] === 'Families' ? '#91FF5380' :
								store.allTerritories[13] === 'Ballas' ? '#C373F380' :
									store.allTerritories[13] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[20] === 'Families' ? '#91FF5380' :
								store.allTerritories[20] === 'Ballas' ? '#C373F380' :
									store.allTerritories[20] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[21] === 'Families' ? '#91FF5380' :
								store.allTerritories[21] === 'Ballas' ? '#C373F380' :
									store.allTerritories[21] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[22] === 'Families' ? '#91FF5380' :
								store.allTerritories[22] === 'Ballas' ? '#C373F380' :
									store.allTerritories[22] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[23] === 'Families' ? '#91FF5380' :
								store.allTerritories[23] === 'Ballas' ? '#C373F380' :
									store.allTerritories[23] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[24] === 'Families' ? '#91FF5380' :
								store.allTerritories[24] === 'Ballas' ? '#C373F380' :
									store.allTerritories[24] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[31] === 'Families' ? '#91FF5380' :
								store.allTerritories[31] === 'Ballas' ? '#C373F380' :
									store.allTerritories[31] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[32] === 'Families' ? '#91FF5380' :
								store.allTerritories[32] === 'Ballas' ? '#C373F380' :
									store.allTerritories[32] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[33] === 'Families' ? '#91FF5380' :
								store.allTerritories[33] === 'Ballas' ? '#C373F380' :
									store.allTerritories[33] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[34] === 'Families' ? '#91FF5380' :
								store.allTerritories[34] === 'Ballas' ? '#C373F380' :
									store.allTerritories[34] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[35] === 'Families' ? '#91FF5380' :
								store.allTerritories[35] === 'Ballas' ? '#C373F380' :
									store.allTerritories[35] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[36] === 'Families' ? '#91FF5380' :
								store.allTerritories[36] === 'Ballas' ? '#C373F380' :
									store.allTerritories[36] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[42] === 'Families' ? '#91FF5380' :
								store.allTerritories[42] === 'Ballas' ? '#C373F380' :
									store.allTerritories[42] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[43] === 'Families' ? '#91FF5380' :
								store.allTerritories[43] === 'Ballas' ? '#C373F380' :
									store.allTerritories[43] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[44] === 'Families' ? '#91FF5380' :
								store.allTerritories[44] === 'Ballas' ? '#C373F380' :
									store.allTerritories[44] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[45] === 'Families' ? '#91FF5380' :
								store.allTerritories[45] === 'Ballas' ? '#C373F380' :
									store.allTerritories[45] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[46] === 'Families' ? '#91FF5380' :
								store.allTerritories[46] === 'Ballas' ? '#C373F380' :
									store.allTerritories[46] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[47] === 'Families' ? '#91FF5380' :
								store.allTerritories[47] === 'Ballas' ? '#C373F380' :
									store.allTerritories[47] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[52] === 'Families' ? '#91FF5380' :
								store.allTerritories[52] === 'Ballas' ? '#C373F380' :
									store.allTerritories[52] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[53] === 'Families' ? '#91FF5380' :
								store.allTerritories[53] === 'Ballas' ? '#C373F380' :
									store.allTerritories[53] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[54] === 'Families' ? '#91FF5380' :
								store.allTerritories[54] === 'Ballas' ? '#C373F380' :
									store.allTerritories[54] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[55] === 'Families' ? '#91FF5380' :
								store.allTerritories[55] === 'Ballas' ? '#C373F380' :
									store.allTerritories[55] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[56] === 'Families' ? '#91FF5380' :
								store.allTerritories[56] === 'Ballas' ? '#C373F380' :
									store.allTerritories[56] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[57] === 'Families' ? '#91FF5380' :
								store.allTerritories[57] === 'Ballas' ? '#C373F380' :
									store.allTerritories[57] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[62] === 'Families' ? '#91FF5380' :
								store.allTerritories[62] === 'Ballas' ? '#C373F380' :
									store.allTerritories[62] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[63] === 'Families' ? '#91FF5380' :
								store.allTerritories[63] === 'Ballas' ? '#C373F380' :
									store.allTerritories[63] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[64] === 'Families' ? '#91FF5380' :
								store.allTerritories[64] === 'Ballas' ? '#C373F380' :
									store.allTerritories[64] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[65] === 'Families' ? '#91FF5380' :
								store.allTerritories[65] === 'Ballas' ? '#C373F380' :
									store.allTerritories[65] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[66] === 'Families' ? '#91FF5380' :
								store.allTerritories[66] === 'Ballas' ? '#C373F380' :
									store.allTerritories[66] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[67] === 'Families' ? '#91FF5380' :
								store.allTerritories[67] === 'Ballas' ? '#C373F380' :
									store.allTerritories[67] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[68] === 'Families' ? '#91FF5380' :
								store.allTerritories[68] === 'Ballas' ? '#C373F380' :
									store.allTerritories[68] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[69] === 'Families' ? '#91FF5380' :
								store.allTerritories[69] === 'Ballas' ? '#C373F380' :
									store.allTerritories[69] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[70] === 'Families' ? '#91FF5380' :
								store.allTerritories[70] === 'Ballas' ? '#C373F380' :
									store.allTerritories[70] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[71] === 'Families' ? '#91FF5380' :
								store.allTerritories[71] === 'Ballas' ? '#C373F380' :
									store.allTerritories[71] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
					<div
						className="crime-menu-set-capture-map-capture-right__element"
						style={{
							backgroundColor: store.allTerritories[72] === 'Families' ? '#91FF5380' :
								store.allTerritories[72] === 'Ballas' ? '#C373F380' :
									store.allTerritories[72] === 'Vagos' ? '#FFFF3680' : '#AAB6EF80',
						}}
					/>
				</div>
			</div>
		</div>
		<div className="crime-menu-set-capture-fractions">
			{store.fractionName !== 'Marabunta' &&
			<div
				className={cn('crime-menu-set-capture-fractions-element',
					currentFraction === 'marabunta' ? 'crime-menu-set-capture-fractions-element_active crime-menu-set-capture-fractions-element_active_marabunta'
						: null)}
				onClick={() => {
					if (store.fractionsFreeze.mara === 0 && !store.fractionsCaptureStatus.mara) setFraction('marabunta');
				}}
			>
				<div
					className="crime-menu-set-capture-fractions-element-attack"
					style={{background: `linear-gradient(to bottom, #00000000, ${fractionColor})`}}
				>
					<img className="crime-menu-set-capture-fractions-element-attack__icon" src={fractionIcon} alt="#"/>
					<div className="crime-menu-set-capture-fractions-element-attack__bottom"/>
				</div>
				<div className="crime-menu-set-capture-fractions-element-content">
					<svg
						className="crime-menu-set-capture-fractions-element-content__icon"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="60.058"
						height="73.057"
						viewBox="0 0 60.058 73.057"
						opacity={currentFraction === 'marabunta' ? .5 : 1}
						fill={currentFraction === 'marabunta' ? '#000000' : '#EAEAEA'}
						style={currentFraction === 'marabunta' ? null : {filter: 'drop-shadow(0 2px 2px #00000080)'}}
					>
						<g transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								d="M1993.006,4905a4.036,4.036,0,0,1,.15-1.09,10.182,10.182,0,0,1,2.05-.875,2.666,2.666,0,1,0,3.6,0,10.151,10.151,0,0,1,2.045.873,3.957,3.957,0,0,1,.15,1.09,4,4,0,1,1-8,0Zm-1.723-1.6a.73.73,0,0,1-.213-.039,3.921,3.921,0,0,1-1.917-1.5,5.868,5.868,0,0,1-1.262-3.434,2.323,2.323,0,0,1,1.12-2.108,7.793,7.793,0,0,1,3.245-1.183h.01c.267-.041.478-.07.451-.448a21.087,21.087,0,0,0-3.276-10.467,11.79,11.79,0,0,0-4.372-4.006.84.84,0,0,0-.291-.123c-.049,0-.073.046-.09.118a26.632,26.632,0,0,0-.991,3.97c0,1.078,4.7,1.963,5.92,2a19.611,19.611,0,0,1,1.881,5.469c.111.563.184,1.14.257,1.7.024.2.051.4.077.605.041.3-.053.427-.346.482a8.641,8.641,0,0,0-2.292.8l-.015.01-.014.007a.3.3,0,0,1-.136.049c-.051,0-.092-.036-.128-.121a7.753,7.753,0,0,0-2.813-3.044c-.545-.4-1.117-.772-1.67-1.137l-.041-.026h-.007c-.535-.352-1.085-.715-1.614-1.1a4.246,4.246,0,0,1-1.767-3.276,15.929,15.929,0,0,1,.322-5.205.236.236,0,0,0-.01-.2c-.039-.056-.119-.07-.235-.078a10.065,10.065,0,0,1-8.469-6.257c-.012-.034-.024-.07-.039-.1a1.023,1.023,0,0,1-.094-.45l.153.063.1.039a3.82,3.82,0,0,0,.863.273,5.862,5.862,0,0,0,.952.075,10.365,10.365,0,0,0,2.067-.244,1.376,1.376,0,0,1,.2-.022c.189-.017.385-.028.417-.184.027-.126-.143-.209-.3-.286a1.243,1.243,0,0,1-.2-.1,10.034,10.034,0,0,1-4.287-5.7,10.56,10.56,0,0,1-.327-4.377,8.5,8.5,0,0,1,6.994-7.054,6.088,6.088,0,0,1,1.226-.139,2.778,2.778,0,0,1,.33.013,6.034,6.034,0,0,0-2.845,4.015,5.69,5.69,0,0,0,4.217,6.858l.119.029a14.052,14.052,0,0,1,.048-2.283,15.386,15.386,0,0,1,1.054-4.313,6.229,6.229,0,0,1,.279-.571l.029-.059c.039-.075.075-.146.112-.221.08.424.126.846.172,1.251a9.192,9.192,0,0,0,.39,2.064,4.75,4.75,0,0,0,.71,1.449,1.35,1.35,0,0,0,1.078.579,1.448,1.448,0,0,0,.456-.075,1.419,1.419,0,0,0,1.078-1.32,7.894,7.894,0,0,0-.334-2.482c-.053-.218-.116-.465-.167-.71-.029-.136-.061-.271-.09-.4a8.762,8.762,0,0,1-.266-3.8,4.43,4.43,0,0,1,1.779-2.748c.051.313.094.635.126.892a10.713,10.713,0,0,0,.4,2.009,3.481,3.481,0,0,0,1.188,1.845,2.123,2.123,0,0,0,1.263.414,2.951,2.951,0,0,0,1.153-.259,2.14,2.14,0,0,0,1.236-2.056,17.284,17.284,0,0,0-.15-3.146c-.053-.5-.109-1.008-.143-1.512a8.363,8.363,0,0,1,.325-3.211,4.242,4.242,0,0,1,3.768-2.9c-1.449,2.344-.4,4.367.8,6.235,1.032,1.611,2.2,3.438,1.917,5.733a20.182,20.182,0,0,1-.853,3.541c-.182.576-.4,1.291.3,1.737a1.052,1.052,0,0,0,.564.182,1.906,1.906,0,0,0,1.2-.725c2.031-1.994,2.244-5.789.477-8.46l-.577-.867a6.871,6.871,0,0,1,4.612,6.147,13.331,13.331,0,0,1-.114,2.082,16.517,16.517,0,0,0-.121,1.662,1.878,1.878,0,0,0,1.062,2,1.654,1.654,0,0,0,.627.134,2.409,2.409,0,0,0,1.556-.8c.94-.88,1.265-1.946,1.289-4.236a4.462,4.462,0,0,1,.787,1.7c.027.095.056.187.085.278a14.554,14.554,0,0,1,.62,5.234,5.993,5.993,0,0,0,1.876-.777,5.361,5.361,0,0,0,2.566-4.2,6.1,6.1,0,0,0-2.922-5.937h.254a7.191,7.191,0,0,1,2.106.329,8.078,8.078,0,0,1,6.09,6.62,9.694,9.694,0,0,1-3.269,9.333,10.9,10.9,0,0,1-1.6,1.2l-.046.024c-.068.036-.138.075-.136.155,0,.1.08.1.148.106a.273.273,0,0,1,.063,0,12.024,12.024,0,0,0,2.477.332,5.3,5.3,0,0,0,1.27-.144,3.612,3.612,0,0,0,.822-.342l.01,0,.024-.015a6.713,6.713,0,0,1-.844,2,10.214,10.214,0,0,1-6.95,4.786,4.933,4.933,0,0,1-.839.085c-.133,0-.2.021-.242.067s-.039.126,0,.255a15.015,15.015,0,0,1,.4,3.72,13.541,13.541,0,0,1-.2,2.186,3.916,3.916,0,0,1-1.713,2.573c-.567.422-1.168.814-1.75,1.192l-.012.008c-.48.314-.979.64-1.461.983a10.408,10.408,0,0,0-2.186,1.958,4.506,4.506,0,0,0-.649,1.069c-.043.1-.08.169-.162.169a.288.288,0,0,1-.133-.041,8.721,8.721,0,0,0-2.45-.851c-.155-.031-.225-.08-.211-.267a20.533,20.533,0,0,1,2.36-8.261c1.486-.126,5.865-1.107,5.865-2.133a18.522,18.522,0,0,0-1.086-3.533c-.007-.012-.01-.031-.017-.041l-.007-.02,0,.012a.12.12,0,0,0-.09-.048.492.492,0,0,0-.2.067,11.475,11.475,0,0,0-2.959,2.232,16.444,16.444,0,0,0-3.814,6.931,23.663,23.663,0,0,0-.926,5.481c-.012.262.15.276.3.291l.053.007a9,9,0,0,1,2.462.705c.114.049.213.1.308.146a2.6,2.6,0,0,1,1.648,3.124,5.9,5.9,0,0,1-2.421,3.931,2.082,2.082,0,0,1-.262.157,1.26,1.26,0,0,1-.6.185.982.982,0,0,1-.606-.235,7.492,7.492,0,0,0-2.709-1.274c-.133-.034-.2-.07-.218-.124s-.01-.126.048-.237a7.758,7.758,0,0,1,.519-.862,2.506,2.506,0,1,0-.4-1.367,2.894,2.894,0,0,0,.027.381,9.067,9.067,0,0,0-.824,1.706c-.063.172-.124.259-.286.259a.718.718,0,0,1-.1-.01,7.65,7.65,0,0,0-1.224-.1,7.374,7.374,0,0,0-1.2.1.867.867,0,0,1-.112.013c-.155,0-.216-.083-.276-.245a8.689,8.689,0,0,0-1.006-1.987v-.116a2.5,2.5,0,1,0-.315,1.217,6.367,6.367,0,0,1,.671,1.124.158.158,0,0,1,.019.136c-.024.054-.087.075-.165.1a9.016,9.016,0,0,0-3.058,1.477.452.452,0,0,1-.229.063Z"
								transform="translate(-1967 -4841.94)"/>
						</g>
					</svg>
					{store.fractionsFreeze.mara !== 0 &&
					<div className="crime-menu-set-capture-fractions-element-content-freeze">
						<img className="crime-menu-set-capture-fractions-element-content-freeze__icon"
						     src={fractionFreeze}
						     alt="#"/>
						<div
							className="crime-menu-set-capture-fractions-element-content-freeze__value">{store.fractionsFreeze.mara}</div>
					</div>}
					{store.fractionsCaptureStatus.mara &&
					<img className="crime-menu-set-capture-fractions-element-content__captured" src={captureIcon}
					     alt="#"/>}
				</div>
			</div>}
			{store.fractionName !== 'Vagos' &&
			<div
				className={cn('crime-menu-set-capture-fractions-element',
					currentFraction === 'vagos' ? 'crime-menu-set-capture-fractions-element_active crime-menu-set-capture-fractions-element_active_vagos'
						: null)}
				onClick={() => {
					if (store.fractionsFreeze.vagos === 0 && !store.fractionsCaptureStatus.vagos) setFraction('vagos');
				}}
			>
				<div
					className="crime-menu-set-capture-fractions-element-attack"
					style={{background: `linear-gradient(to bottom, #00000000, ${fractionColor})`}}
				>
					<img className="crime-menu-set-capture-fractions-element-attack__icon" src={fractionIcon} alt="#"/>
					<div className="crime-menu-set-capture-fractions-element-attack__bottom"/>
				</div>
				<div className="crime-menu-set-capture-fractions-element-content">
					<svg
						className="crime-menu-set-capture-fractions-element-content__icon"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="74.115"
						height="59.841"
						viewBox="0 0 74.115 59.841"
						opacity={currentFraction === 'vagos' ? .5 : 1}
						fill={currentFraction === 'vagos' ? '#000000' : '#EAEAEA'}
						style={currentFraction === 'vagos' ? null : {filter: 'drop-shadow(0 2px 2px #00000080)'}}
					>
						<g transform="translate(-4094.432 5523.308)">
							<g transform="matrix(1, 0, 0, 1, 4094.43, -5523.31)">
								<path
									d="M5780.959-718.292c-.805-.219-1.61-.441-2.415-.661l.029-.109.752.2c-.217-.177-.5-.221-.7-.419l.088-.326a7.644,7.644,0,0,0,1.019-.783q9.877-7.969,19.748-15.944c.153-.123.245-.187.327-.188l2.56-2.051a1.826,1.826,0,0,1-.468-1.813,1.732,1.732,0,0,1,.228-.487,4.531,4.531,0,0,1,1.9-1.614.256.256,0,0,1,.359.069c1.494,1.686,3,3.365,4.493,5.053a1.423,1.423,0,0,1,.222,1.65,1.546,1.546,0,0,1-1.373.95,1.845,1.845,0,0,1-.912-.308c-.453-.284-.889-.591-1.315-.911l-3.13,2.509,1.788,2.219c.214.265.205.331-.063.548-4.006,3.235-8,6.48-12.026,9.7a11.221,11.221,0,0,1-2.6,1.393,14.987,14.987,0,0,1-7.2,1.342c-.362-.028-.725-.079-1.122-.123l.392.155a.387.387,0,0,1-.183.043A1.621,1.621,0,0,1,5780.959-718.292Zm5.426-6.238-2.7,2.244.034.056c.1-.07.192-.138.285-.208l10.242-7.8-.389-.486Q5790.12-727.624,5786.385-724.53Zm25.558,6.275a20.237,20.237,0,0,1-5.458-1.136,22.514,22.514,0,0,1-3.88-1.829,21.575,21.575,0,0,1-4.377-3.5c-.271-.279-.265-.307.11-.4a5.538,5.538,0,0,0,2.323-1.331c.45-.39.459-.406.879,0a16.5,16.5,0,0,0,4.5,3.11c.378.18.776.321,1.163.484.151.062.229.016.243-.148q.134-1.483.27-2.964c.016-.16-.1-.238-.189-.321a10.491,10.491,0,0,1-2.276-3,6.607,6.607,0,0,1-.477-1.1c-.026-.3-.025-.591-.026-.9a1.066,1.066,0,0,0-.069-.389.727.727,0,0,0-.041-.084,4.223,4.223,0,0,1,.171-.877l1.074-.881c.3-.248.611-.488.9-.754a.487.487,0,0,1,.519-.128,2.021,2.021,0,0,0,2.485-2.1c0-.355.009-.383.346-.252a2.686,2.686,0,0,0,3.361-2.238c0-.142.041-.221.194-.133a2.159,2.159,0,0,0,2.2-.069c.013-.007.037,0,.113.007-.375.771-.738,1.518-1.1,2.263-1.428,2.924-2.931,5.81-4.329,8.748-.276.581-.274.582.38.584.449,0,.458,0,.512.459q.3,2.536.588,5.077c.023.2.085.3.292.28a.466.466,0,0,1,.089.006c.655.048.641.051.5-.6-.34-1.648-.663-3.3-1-4.948-.042-.207.015-.279.217-.273s.427,0,.64,0c.007-.026.013-.053.021-.079-.351-.22-.7-.444-1.052-.66s-.36-.216-.179-.572c1.764-3.461,3.539-6.914,5.279-10.386a1.413,1.413,0,0,1,.968-.71c.969-.321,1.943-.632,2.914-.95a.513.513,0,0,0,.268-.123c-.015-.11-.1-.082-.16-.079-.912.029-1.824.062-2.735.089-.075,0-.17.053-.224-.034s.035-.163.081-.235c.433-.688.892-1.355,1.373-2.008.034-.047.086-.089.047-.182a3.4,3.4,0,0,0-.67.421c-.635.455-1.242.95-1.893,1.381a3.572,3.572,0,0,1-3.5.254.812.812,0,0,1-.512-1.1,7.541,7.541,0,0,1,.436-1.305,4.946,4.946,0,0,1,1.351-1.551,15.633,15.633,0,0,1,4.123-2.72,4.7,4.7,0,0,1,2.295-.5.454.454,0,0,1,.46.348c.178.594.359,1.188.527,1.785q.7,2.5,1.4,5c.155.56.3,1.122.451,1.682a.846.846,0,0,1-.035.559c-1.151,2.741-2.311,5.477-3.444,8.226-.455,1.1-.881,2.214-1.346,3.311a.776.776,0,0,0-.012.589c.458,1.186.851,2.395,1.269,3.594.127.365.176.377.548.207a17.168,17.168,0,0,0,2.666-1.566,16.959,16.959,0,0,0,5.692-6.744,17.722,17.722,0,0,0,1.73-8.367,16.208,16.208,0,0,0-1.837-7.033c-.056-.106-.1-.22-.156-.324-.208-.38-.208-.383.213-.437.963-.126,1.93-.245,2.892-.381a.431.431,0,0,1,.544.3,20.178,20.178,0,0,1,1.587,5.242,21.377,21.377,0,0,1-.159,7.8,20.819,20.819,0,0,1-2.987,7.1,20.757,20.757,0,0,1-5.094,5.43,21.1,21.1,0,0,1-5.785,3.012,21.046,21.046,0,0,1-4.541.981,20.477,20.477,0,0,1-2.2.119Q5812.674-718.2,5811.943-718.255Zm-18.252-13.9c-.109-.053-.128-.3-.181-.46a23.16,23.16,0,0,1-.966-4.7,20.782,20.782,0,0,1,.356-6.278,19.157,19.157,0,0,1,1.605-4.738,21.578,21.578,0,0,1,4.372-6.025,20.386,20.386,0,0,1,6.362-4.239,21.928,21.928,0,0,1,8.819-1.647,19.017,19.017,0,0,1,7.058,1.469c.36.153.717.312,1.081.452.133.051.179.109.129.242-.358.946-.726,1.887-1.133,2.813-.1.226-.233.229-.425.139a17.145,17.145,0,0,0-2.763-1.006,17.163,17.163,0,0,0-6.107-.535,17.151,17.151,0,0,0-8.282,2.956,17.193,17.193,0,0,0-6.484,8.188,17.77,17.77,0,0,0-1.107,7.82,15.962,15.962,0,0,0,.488,2.747.518.518,0,0,1-.181.623c-.764.617-1.5,1.267-2.263,1.886-.109.089-.163.312-.3.312A.173.173,0,0,1,5793.691-732.152Zm15.879-5.646c-1.053-1.1-2.027-2.27-3.049-3.4-.477-.526-.921-1.085-1.419-1.591a1.394,1.394,0,0,1-.224-1.714,3.4,3.4,0,0,1,2.367-1.871.722.722,0,0,1,.851.324c1.39,1.961,2.845,3.873,4.208,5.851.125.182.261.355.381.538a1.318,1.318,0,0,1-.369,1.964,2.456,2.456,0,0,1-1.415.493l-.1,0A1.656,1.656,0,0,1,5809.57-737.8Zm4.013-1.965a7.135,7.135,0,0,1-.755-.972c-.025-.041-.079-.079-.047-.13s.1-.032.16-.01a5.557,5.557,0,0,0,2.3.334,6.745,6.745,0,0,0,1.2-.257c.082-.019.179-.1.253-.021s-.01.2-.048.273a2.291,2.291,0,0,1-2.022,1.229q-.059.005-.116.005A1.231,1.231,0,0,1,5813.583-739.762Zm-1.815-2.283c-1.051-1.44-2.108-2.876-3.154-4.32-.274-.38-.585-.755-.521-1.11a2.709,2.709,0,0,1,1.485-2.362,3.462,3.462,0,0,1,1.414-.474.89.89,0,0,1,.865.377c.874,1.2,1.775,2.376,2.611,3.6.1.145.072.219-.053.32-.378.311-.733.655-1.126.949a2.954,2.954,0,0,0-1.093,1.936c-.067.345-.146.685-.22,1.028-.012.056,0,.13-.075.148a.1.1,0,0,1-.026,0C5811.823-741.95,5811.8-742,5811.768-742.046Zm10.894-6.239q1.839-1.6,3.678-3.21a1.184,1.184,0,0,0-.05-1.861,1.188,1.188,0,0,0-1.533.119q-2.226,1.936-4.447,3.874l-.348.3-1.883-2.16q1.3-1.135,2.606-2.274c.685-.6,1.412-1.154,2.035-1.82a5.026,5.026,0,0,0,1.348-3.474,9.5,9.5,0,0,1,1.482-5.08,9.2,9.2,0,0,1,10.5-3.713c.384.126.419.337.1.619q-1.894,1.654-3.791,3.3a2.861,2.861,0,0,0-.329,4.053q.79.939,1.609,1.849a2.867,2.867,0,0,0,4.04.255c1.34-1.156,2.669-2.323,4-3.486.362-.317.538-.261.636.221a8.9,8.9,0,0,1-2.114,8.131,8.816,8.816,0,0,1-8.421,2.934,5.424,5.424,0,0,0-4.7,1.351q-1.269,1.111-2.542,2.216Zm-7.97,1.485c-.783-1.2-1.556-2.4-2.271-3.644a.508.508,0,0,1-.1-.308,2.092,2.092,0,0,1,.437-.912,3.017,3.017,0,0,1,1.718-1.031,1.54,1.54,0,0,1,1.691.629,23.154,23.154,0,0,1,1.859,3.117.273.273,0,0,1-.117.416c-.918.607-1.836,1.214-2.745,1.832a.423.423,0,0,1-.225.092C5814.851-746.608,5814.777-746.67,5814.692-746.8Z"
									transform="translate(-5773.43 772.04)"/>
							</g>
						</g>
					</svg>
					{store.fractionsFreeze.vagos !== 0 &&
					<div className="crime-menu-set-capture-fractions-element-content-freeze">
						<img className="crime-menu-set-capture-fractions-element-content-freeze__icon"
						     src={fractionFreeze}
						     alt="#"/>
						<div
							className="crime-menu-set-capture-fractions-element-content-freeze__value">{store.fractionsFreeze.vagos}</div>
					</div>}
					{store.fractionsCaptureStatus.vagos &&
					<img className="crime-menu-set-capture-fractions-element-content__captured" src={captureIcon}
					     alt="#"/>}
				</div>
			</div>}
			{store.fractionName !== 'Families' &&
			<div
				className={cn('crime-menu-set-capture-fractions-element',
					currentFraction === 'families' ? 'crime-menu-set-capture-fractions-element_active crime-menu-set-capture-fractions-element_active_families'
						: null)}
				onClick={() => {
					if (store.fractionsFreeze.families === 0 && !store.fractionsCaptureStatus.families) setFraction('families');
				}}
			>
				<div
					className="crime-menu-set-capture-fractions-element-attack"
					style={{background: `linear-gradient(to bottom, #00000000, ${fractionColor})`}}
				>
					<img className="crime-menu-set-capture-fractions-element-attack__icon" src={fractionIcon} alt="#"/>
					<div className="crime-menu-set-capture-fractions-element-attack__bottom"/>
				</div>
				<div className="crime-menu-set-capture-fractions-element-content">
					<svg
						className="crime-menu-set-capture-fractions-element-content__icon"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="69.92"
						height="72.178"
						viewBox="0 0 69.92 72.178"
						opacity={currentFraction === 'families' ? .5 : 1}
						fill={currentFraction === 'families' ? '#000000' : '#EAEAEA'}
						style={currentFraction === 'families' ? null : {filter: 'drop-shadow(0 2px 2px #00000080)'}}
					>
						<g transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								d="M18126.924,2764.7a14.985,14.985,0,0,1-9.238-5.516,15.408,15.408,0,0,1-3.258-10.264,15.987,15.987,0,0,1,2.162-7.527c1.271-2.258,3.41-3.761,5.473-5.265a15.974,15.974,0,0,1,4.834-2.362c.744-.223,1.514-.337,2.395-.531-.189.119-.279.171-.416.251.664-.1,1.275-.19,1.883-.29a14.612,14.612,0,0,1,4.723.232,19.211,19.211,0,0,0,3.572.346c1.93-.057,3.248-1.266,4.453-2.561,1.836-1.982,3.264-4.316,5.293-6.147,2.168-1.958,5.047-2.675,6.973-1.665a.527.527,0,0,1,.26.36c.006.1-.18.309-.27.3-4.207-.375-5.947,2.751-7.92,5.54a6.873,6.873,0,0,1-3.012,2.542c-.471.2-.973.465-.963,1.058a.8.8,0,0,0,.492.574,2.3,2.3,0,0,0,2.035-.484c1.754-1.252,2.6-3.225,3.941-4.809,2.148-2.552,4.377-3.491,6.578-2.632a2.723,2.723,0,0,1,1.119.852q.48-2.051.953-4.11a1.69,1.69,0,0,0,.029-.171c-.148.119-.252.2-.352.285-.588.484-1.182.963-1.77,1.451-.146.124-.309.2-.475.062s-.133-.318-.023-.5c.455-.773.906-1.551,1.381-2.367-.418.033-.793.066-1.166.1q-3.53.313-7.053.631a2.467,2.467,0,0,1-.262.009.284.284,0,0,1-.266-.237.277.277,0,0,1,.133-.327.9.9,0,0,1,.275-.1q3.5-1.017,7-2.03c.1-.028.205-.062.355-.109-.535-.4-1.039-.777-1.541-1.152q-2.062-1.529-4.121-3.059c-.039-.028-.076-.062-.119-.09a.31.31,0,0,1-.143-.422c.09-.185.246-.2.428-.161l1.641.341c1.309.271,2.623.545,3.938.816a.534.534,0,0,0,.084,0c.014-.119-.07-.185-.113-.266q-1.11-1.9-2.225-3.79c-.033-.052-.062-.1-.09-.152a.318.318,0,0,1,.027-.451.322.322,0,0,1,.471.043l1.238,1.124c.834.764,1.674,1.527,2.547,2.319.133-.726.256-1.414.379-2.1q.5-2.825,1.01-5.644c.039-.213.119-.389.371-.365.232.019.273.208.283.408.1,2.191.186,4.382.281,6.574,0,.1.014.2.027.4.346-.655.65-1.224.953-1.8q2.021-3.82,4.041-7.646c.2-.379.4-.759.6-1.138.1-.189.229-.308.441-.218s.219.275.156.47q-.867,2.618-1.736,5.227-1.052,3.173-2.105,6.341c-.037.119-.07.242-.123.427,1.205-.612,2.348-1.2,3.49-1.774,1.182-.6,2.357-1.2,3.539-1.8a1.344,1.344,0,0,1,.18-.09.31.31,0,0,1,.342.5,2.417,2.417,0,0,1-.318.261l-5.15,4.083a.6.6,0,0,0-.242.242c.641.09,1.268.175,1.893.266.313.042.621.09.936.123.207.024.406.071.412.323,0,.271-.205.318-.428.346-1.133.147-2.271.3-3.4.455-.115.015-.229.038-.408.066.607.4,1.162.769,1.721,1.139q4.063,2.682,8.131,5.359c.18.123.316.266.193.483s-.312.176-.512.09q-4.831-2.113-9.672-4.211c-.1-.043-.2-.081-.322-.128a.524.524,0,0,0,.186.294q2.285,2.81,4.576,5.61c.152.185.381.384.115.622-.248.223-.428,0-.6-.161q-2.648-2.427-5.289-4.852c-.07-.066-.146-.128-.236-.2-.043.109.01.185.027.261.205.764.408,1.527.617,2.291.057.213.133.441-.143.55s-.385-.114-.492-.3c-.418-.707-.836-1.414-1.262-2.115-.049-.081-.072-.185-.215-.251-.094.232-.184.465-.283.7q-1.474,3.479-2.951,6.958c-.08.19-.176.346-.408.29s-.27-.251-.217-.465c.193-.833.391-1.667.584-2.5-2.766-.973-3.99-.523-5.91,1.932-1.182,1.513-2.111,3.239-3.672,4.435a8.053,8.053,0,0,1-1.309.692c3.529.4,7.209,1.727,10.723-.455a.26.26,0,0,1,.152-.019h.076a2.11,2.11,0,0,1-.146.356c-2.187,3.329-5.137,4.216-8.988,3.168-2.377-.645-4.605,1.314-4.3,3.368a2.008,2.008,0,0,0,3.316,1.385c1.654-1.267,3.268-2.585,5.416-2.931a9.833,9.833,0,0,1,1.295-.09c.08,0,.223.109.227.181a.975.975,0,0,1-.08.512.352.352,0,0,1-.318.133c-1.631-.413-5.5,2.153-6.217,3.624-1.75,3.576-2.191,7.583-3.832,11.169-.256.569-.508,1.133-.764,1.7-.2.294-.4.588-.6.882-1.441,1.537-2.627,3.23-4.3,4.354l-1.281.7-.1.043c-.393.588-1.584.455-2.371,1.058l.014-.014a11.743,11.743,0,0,1-4.92,1.031A15.721,15.721,0,0,1,18126.924,2764.7Zm-5.492-14.646a8.913,8.913,0,0,1,1.643,2.215,28.532,28.532,0,0,0,3.566,5.331,12.759,12.759,0,0,0,4.463,3.5,14.319,14.319,0,0,0,7.6-4.615,33.028,33.028,0,0,1-16.713-8.072A14.487,14.487,0,0,0,18121.432,2750.052Zm-.312,6.578a.671.671,0,0,0,.072.1,14.1,14.1,0,0,0,1.85,1.636c.113.081.166.251.246.379-.129.023-.256.052-.441.085a3.976,3.976,0,0,1,.939.336,10.913,10.913,0,0,0,3.51,1.589,17.017,17.017,0,0,1-2.029-2.03,29.891,29.891,0,0,1-3.781-5.653,6.9,6.9,0,0,0-.492-.8A14.521,14.521,0,0,0,18121.119,2756.63Zm1.67-9.894a31.466,31.466,0,0,0,17.064,8.167,34.534,34.534,0,0,0,1.869-3.367c.592-1.171,1.063-2.4,1.57-3.619a8.866,8.866,0,0,0-1.982-1.058,2.126,2.126,0,0,1-1.025-.332,17.96,17.96,0,0,0-5.545-.455c-.881.038-1.783.1-2.65.171-1.357.1-2.756.213-4.164.213a7.059,7.059,0,0,1-4.277-1.1A15.34,15.34,0,0,0,18122.789,2746.737Zm-5.174,3.5a8.864,8.864,0,0,0,1.5,4.24,16.273,16.273,0,0,1,.342-3.771,2.719,2.719,0,0,0-.973-.437,1.967,1.967,0,0,0-.412-.038Zm-.049-2.035h1.361l-.01.375a3.938,3.938,0,0,1,1.006.361,15.908,15.908,0,0,1,.707-1.812c-.777-.778-1.521-1.6-2.215-2.438l-.109-.133A12.58,12.58,0,0,0,18117.566,2748.207Zm1.58-5.44.621.759c.541.668,1.125,1.318,1.73,1.949.3-.5.627-.986.979-1.461a5.735,5.735,0,0,1,.051-4.984A12.1,12.1,0,0,0,18119.146,2742.767Zm6.943-5.559-.854.934a6.755,6.755,0,0,0-.963,1.314,3.922,3.922,0,0,0-.01,4.045l.039.043.146.161a4.972,4.972,0,0,0,3.57,1.024h.01c1.338,0,2.7-.1,4.018-.2.887-.071,1.8-.137,2.713-.18a23.754,23.754,0,0,1,4.221.147,2.574,2.574,0,0,1,.043-.863c.318-1.542,1.912-1.869,2.609-3.121a3.823,3.823,0,0,1-1.367.081,2.473,2.473,0,0,0-.687,0,7.6,7.6,0,0,1-3.52.247c-1.242-.247-2.418-.73-2.531-2.187s.91-1.484,2.139-1.167a5.472,5.472,0,0,0-.939-.489,15.8,15.8,0,0,0-4.029-.53A14.518,14.518,0,0,0,18126.09,2737.208Zm33.158-12.317c.744-.953,1.389-3.064,1.133-3.685A6.8,6.8,0,0,0,18159.248,2724.891Zm4.059-3.164a2.807,2.807,0,0,0-1.764-1.684A2.425,2.425,0,0,0,18163.307,2721.728Zm3.7-.531a11.162,11.162,0,0,0-4.4-2.248A9.429,9.429,0,0,0,18167,2721.2Z"
								transform="translate(-18109.42 -2698.82)"/>
						</g>
					</svg>
					{store.fractionsFreeze.families !== 0 &&
					<div className="crime-menu-set-capture-fractions-element-content-freeze">
						<img className="crime-menu-set-capture-fractions-element-content-freeze__icon"
						     src={fractionFreeze}
						     alt="#"/>
						<div
							className="crime-menu-set-capture-fractions-element-content-freeze__value">{store.fractionsFreeze.families}</div>
					</div>}
					{store.fractionsCaptureStatus.families &&
					<img className="crime-menu-set-capture-fractions-element-content__captured" src={captureIcon}
					     alt="#"/>}
				</div>
			</div>}
			{store.fractionName !== 'Ballas' &&
			<div
				className={cn('crime-menu-set-capture-fractions-element',
					currentFraction === 'ballas' ? 'crime-menu-set-capture-fractions-element_active crime-menu-set-capture-fractions-element_active_ballas'
						: null)}
				onClick={() => {
					if (store.fractionsFreeze.ballas === 0 && !store.fractionsCaptureStatus.ballas) setFraction('ballas');
				}}
			>
				<div
					className="crime-menu-set-capture-fractions-element-attack"
					style={{background: `linear-gradient(to bottom, #00000000, ${fractionColor})`}}
				>
					<img className="crime-menu-set-capture-fractions-element-attack__icon" src={fractionIcon} alt="#"/>
					<div className="crime-menu-set-capture-fractions-element-attack__bottom"/>
				</div>
				<div className="crime-menu-set-capture-fractions-element-content">
					<svg
						className="crime-menu-set-capture-fractions-element-content__icon"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="60.506"
						height="70.163"
						viewBox="0 0 60.506 70.163"
						opacity={currentFraction === 'ballas' ? .5 : 1}
						fill={currentFraction === 'ballas' ? '#000000' : '#EAEAEA'}
						style={currentFraction === 'ballas' ? null : {filter: 'drop-shadow(0 2px 2px #00000080)'}}
					>
						<g transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								d="M2018.593,4905.976l-1.591-3.059c-.021-.042-.046-.081-.073-.13a.167.167,0,0,0-.03.122c-.035.378-.067.756-.1,1.135-.01.1-.012.22-.156.224s-.153-.113-.172-.215c-.073-.388-.145-.774-.22-1.161a.225.225,0,0,0-.057-.15c-.081.091-.16.181-.243.268q-1.237,1.33-2.475,2.657c-.066.071-.137.127-.231.064s-.08-.158-.022-.246l.906-1.389,1.166-1.792c.01-.013.017-.029.041-.071l-.206.069c-.346.122-.692.242-1.037.365-.087.031-.172.039-.224-.051s-.007-.164.07-.228c.334-.273.664-.552,1.013-.842l-.544-.146-3.286-.873a.982.982,0,0,1-.121-.04.137.137,0,0,1-.08-.15.135.135,0,0,1,.115-.127.576.576,0,0,1,.139,0l3.493.235.18.01-.507-.774q-.68-1.029-1.357-2.058c-.014-.02-.025-.041-.038-.059a.151.151,0,0,1,0-.217c.07-.069.144-.048.218,0,.228.142.457.282.685.422l.567.351a9.455,9.455,0,0,1-.345-1.267,4.137,4.137,0,0,1,2.085-4.738,14.756,14.756,0,0,1,1.8-.861c.255-.107.517-.218.772-.333l.011,0a3.663,3.663,0,0,0,1.281-.808,1.254,1.254,0,0,0,.267-1.042,1.855,1.855,0,0,0-.782-1.272,4.7,4.7,0,0,0-2.119-.551c-.032,0-.058,0-.084,0a.205.205,0,0,0-.151.043.3.3,0,0,0-.051.212,1.259,1.259,0,0,1-1.205,1.315c-1.219.082-2.463.139-3.663.2h-.03l-.725.034-3.238.15h-.049l-3.192.149q-1.561.073-3.121.15l-.037,0q-1.271.061-2.541.122c-.9.044-3.771.085-6.812.127h-.006c-3.255.045-6.619.095-7.6.147l-.059,0a.24.24,0,0,1-.177-.05c-.044-.044-.052-.118-.05-.235.007-2.122.006-4.274,0-6.4,0-.1.012-.146.041-.175a.166.166,0,0,1,.123-.033l.052,0c.369.021,2.608.036,4.68.051-.217.855-.539,2.954,1.124,3.983,2.194,1.357,3.739,1.709,7.516,1.709,3.854,0,5.63-.383,7.912-1.709a3.264,3.264,0,0,0,1.457-3.353l.576.028.421.022c1.159.057,2.328.12,3.461.179,1.216.065,2.476.132,3.722.194a1.345,1.345,0,0,1,1.442,1.432,7.627,7.627,0,0,1,1.734.2,3.646,3.646,0,0,1,3.052,2.871,2.769,2.769,0,0,1-.6,2.567,5.818,5.818,0,0,1-1.953,1.313c-.267.125-.544.239-.811.352a10.961,10.961,0,0,0-1.613.782,2.432,2.432,0,0,0-1.228,2.766,7.352,7.352,0,0,0,.269,1.06l.589,1.124c.18-.307.349-.6.517-.885q.691-1.191,1.381-2.384c.053-.09.119-.155.228-.1s.091.139.063.231q-.478,1.507-.954,3.014c-.015.047-.027.1-.053.184l.727-.655q1.538-1.393,3.078-2.787c.153-.138.307-.276.458-.416.074-.07.153-.1.235-.026s.052.16-.009.237l-1.641,2.075-1.991,2.516c-.038.047-.073.1-.127.172l1.868-.228,1.891-.23a.934.934,0,0,1,.1-.01.141.141,0,0,1,.149.106.143.143,0,0,1-.079.177,1.581,1.581,0,0,1-.185.066l-3,1a.3.3,0,0,0-.149.07l.811.431c.133.07.265.143.4.209.091.045.172.1.133.213s-.144.109-.249.086c-.537-.12-1.074-.237-1.612-.355-.054-.012-.11-.021-.195-.037.207.279.4.539.59.8q1.393,1.879,2.789,3.755c.063.084.1.171.01.249s-.171.028-.246-.043l-3.675-3.488c-.037-.036-.076-.069-.124-.112a.26.26,0,0,0,.035.164l1.145,3.284c.038.108.108.236-.051.3a.184.184,0,0,1-.068.015C2018.673,4906.163,2018.635,4906.057,2018.593,4905.976Zm-3.556-2.592a2.814,2.814,0,0,0,1.118-1.478A3.259,3.259,0,0,0,2015.037,4903.384Zm4.105-.393a5.33,5.33,0,0,0-1.614-1.737A4.541,4.541,0,0,0,2019.142,4902.991Zm-1.755-.367a1.349,1.349,0,0,0-.52-1.052A1.171,1.171,0,0,0,2017.388,4902.624Zm-39.542-10.126c-.244-.084-.243-.308-.241-.525v-.052q0-1.852,0-3.706,0-3.708,0-7.418a.612.612,0,0,1,.115-.435.329.329,0,0,1,.153-.083,1.6,1.6,0,0,1,.412-.064.777.777,0,0,1,.456.134.556.556,0,0,1,.144.473v2.079q0,3.018,0,6.038c0,.736.006,1.484.01,2.207v.007q0,.414,0,.827v.027c0,.18,0,.363-.167.456a.947.947,0,0,1-.453.108A1.4,1.4,0,0,1,1977.846,4892.5Zm-4.057-1.878a5.757,5.757,0,0,1-1.753-3.6,5.834,5.834,0,0,1,1.689-4.739,5.713,5.713,0,0,1,3.067-1.605.806.806,0,0,1,.135-.015c.161,0,.19.092.19.3,0,1.777,0,3.583,0,5.329l0,1.775q0,.99,0,1.985v.038q0,1.055,0,2.122h0A5.637,5.637,0,0,1,1973.789,4890.62Zm5.617,1.389c-.032-.033-.033-.1-.032-.183,0-.287,0-.578,0-.859v-1.575c0-2.719,0-5.53,0-8.292,0-.121.007-.193.042-.23a.108.108,0,0,1,.076-.024.5.5,0,0,1,.171.039,6.856,6.856,0,0,1,1.79.956,1.079,1.079,0,0,1,.473.962c-.021,2.309-.009,4.657,0,6.927l0,.482c0,.211-.017.463-.156.541a6.575,6.575,0,0,1-2.182,1.256.415.415,0,0,1-.121.025A.083.083,0,0,1,1979.406,4892.009Zm2.8-1.4c0-2.407,0-4.984,0-8.354a.391.391,0,0,1,.07-.276.131.131,0,0,1,.1-.038.481.481,0,0,1,.223.075c.259.142.517.294.767.441.111.066.223.13.334.2a.368.368,0,0,1,.182.366c0,2.044,0,4.279,0,6.83a.409.409,0,0,1-.121.344l-.357.2c-.261.151-.532.308-.8.453a.546.546,0,0,1-.233.079C1982.25,4890.932,1982.2,4890.835,1982.2,4890.613Zm15.751-4.364a1.036,1.036,0,0,0-.107-.51c-.057.352-.121.7-.166,1.058-.065.52-.138,1.011-.875.833-.564-.137-1.4.127-1.253-.969a11.473,11.473,0,0,0,.011-1.5c-.325.523-.19,1.1-.351,1.617-.128.408-.3.573-.723.427a5.324,5.324,0,0,0-.672-.188c-.7-.143-1.106-.448-.609-1.349-.456.222-.537.756-.9.687a3.941,3.941,0,0,1-.967-.478.991.991,0,0,1-.525-1.167,4.516,4.516,0,0,0-.047-2.52c-.255-.582.509-.463.77-.735a5.042,5.042,0,0,0-2.078.176,3.149,3.149,0,0,1-3.651-1.4,5.405,5.405,0,0,0-1.606-1.644,1.655,1.655,0,0,1-.532-2.032,15.213,15.213,0,0,1,2.188-4.189,6.553,6.553,0,0,0,.31-6.477,9.364,9.364,0,0,1-1.572,6.594c-.144-.634-.268-1.14-.377-1.649a24.138,24.138,0,0,0-1.038-3.659c-.937-2.448-.374-4.845.453-7.214,1.883-5.389,5.924-8.183,11.324-9.019a16.372,16.372,0,0,1,14.9,4.75c2.42,2.464,3.006,5.546,2.573,8.879-.264,2.039-1.124,3.953-1.267,6.016a2,2,0,0,1-.048.309c-.06.268.084.712-.182.772-.358.082-.5-.363-.672-.631a6.375,6.375,0,0,1-.832-4.264,5.6,5.6,0,0,0-.011,4.212,22.473,22.473,0,0,0,1.873,3.047,9.973,9.973,0,0,1,1.141,2.71,1.121,1.121,0,0,1-.135.972,15.387,15.387,0,0,1-2.906,3.331,2.466,2.466,0,0,1-2.605.447,4.207,4.207,0,0,0-2.247-.214c.72.305.746.681.514,1.15a2.065,2.065,0,0,0-.02,1.662,1.883,1.883,0,0,1-1.569,2.567c-.546.073-.712-.435-1.041-.706-.19.095-.128.271-.1.4.127.641-.219.852-.776.992-.613.155-.87-.139-1.036-.639a6.93,6.93,0,0,0-.513-1.287c.039.512.075,1.026.122,1.538.041.442-.12.649-.595.7-.383.04-.672.07-.89.07C1997.962,4887.719,1997.957,4887.432,1997.953,4886.249Zm2.325-3.976a1.337,1.337,0,0,0,.282-1.707c-.506-1-.819-2.066-1.268-3.082-.127-.287-.18-.778-.564-.739-.321.031-.233.513-.352.785-.033.07-.049.149-.079.221-.069.17-.135.352-.356.361-.254.01-.374-.176-.436-.375-.1-.318-.165-.644-.246-.966l-.22-.08a25.082,25.082,0,0,0-1.869,3.848,1.836,1.836,0,0,0,1.3,2.115c.867.241,1.176-.41,1.495-1.015.019-.029.07-.043.1-.064C1998.774,4882.935,1999.357,4883.118,2000.278,4882.273Zm-11.353-11.452a2.076,2.076,0,0,0-1.444,2.016c0,1.09.006,2.183.107,3.267.116,1.288.632,1.719,1.945,1.676a15.43,15.43,0,0,0,3.235-.426,4.137,4.137,0,0,0,3.456-4.408,1.339,1.339,0,0,0-.815-1.362,11.514,11.514,0,0,0-4.446-1.085h-.156A4.911,4.911,0,0,0,1988.925,4870.821Zm11.534.782a1.175,1.175,0,0,0-.736.931,4.513,4.513,0,0,0,2.184,4.246,10.4,10.4,0,0,0,4.844.936c1.217.014,1.57-.422,1.7-1.665.063-.62.092-1.243.126-1.7,0-.451,0-.737,0-1.024a2.461,2.461,0,0,0-2.524-2.813c-.282-.023-.563-.034-.841-.034A11.021,11.021,0,0,0,2000.459,4871.6Zm13.58,4.16a1.345,1.345,0,0,1-.267-.9c0-.666,0-1.348,0-2.008v-.558c0-.659,0-1.332,0-2,0-2.348,0-4.871.012-7.5,0-.746.2-1.2.627-1.44a16.454,16.454,0,0,0-1.987-5.153,1.485,1.485,0,0,1-.688-.6,17.037,17.037,0,0,0-11.88-6.843,21.325,21.325,0,0,0-2.4-.141,16.944,16.944,0,0,0-13.06,6h0a.006.006,0,0,0,0,.006,16.628,16.628,0,0,0-3.055,6.77,1.859,1.859,0,0,1,.518,1.546c.005,2.728.009,4.824.009,7,0,1.459,0,2.869-.009,4.7a1.43,1.43,0,0,1-.31,1.06,1.449,1.449,0,0,1-.974.531q-.078.007-.155.007a1.31,1.31,0,0,1-.3-.032,1.153,1.153,0,0,1-1.07-1.23s0-.01,0-.016a.061.061,0,0,0,0-.02v-3.193a6.615,6.615,0,0,0-.458,1.884c-.133.46-.238.68-.478.68a1.414,1.414,0,0,1-.579-.2,3.908,3.908,0,0,1-1.783-2.175.862.862,0,0,0-.575-.575c-.759-.259-.8-.939-.837-1.6l0-.047a2.972,2.972,0,0,0-.131-.76v-1.185c.154-.045.206-.173.186-.453a2.343,2.343,0,0,1,.023-.444,2.83,2.83,0,0,0,.03-.357c-.009-.617.281-.938.861-.952.284-.008.427-.113.478-.352a3.521,3.521,0,0,1,2.234-2.461.871.871,0,0,0,.607-.728,17.444,17.444,0,0,1,2.508-6.887,17.62,17.62,0,0,1,5.11-5.289,20.035,20.035,0,0,1,7.531-3.441,18.722,18.722,0,0,1,7.964.025,18.467,18.467,0,0,1,3.861,1.313,18.84,18.84,0,0,1,10.587,11.711,3.693,3.693,0,0,1,.195.633c.228,1.387.548,2.572,2.171,3.05a2.571,2.571,0,0,1,1.56,1.951c.086.362.217.472.577.486h.037a.78.78,0,0,1,.781.745v.022a24.023,24.023,0,0,1,.1,3.814,1.631,1.631,0,0,1-.316.962c-.188.235-.35.343-.509.343s-.341-.127-.533-.4a4.751,4.751,0,0,1-1.459,2.662,3.132,3.132,0,0,1-.41.308,1.652,1.652,0,0,1-.72.267c-.278,0-.428-.231-.537-.824-.058-.321-.107-.651-.154-.969l0-.011a16.919,16.919,0,0,0-.39-2.03v4.446a1.182,1.182,0,0,1-.857,1.3,1.518,1.518,0,0,1-.513.09A1.487,1.487,0,0,1,2014.039,4875.762Z"
								transform="translate(-1966.99 -4842)"/>
						</g>
					</svg>
					{store.fractionsFreeze.ballas !== 0 &&
					<div className="crime-menu-set-capture-fractions-element-content-freeze">
						<img className="crime-menu-set-capture-fractions-element-content-freeze__icon"
						     src={fractionFreeze}
						     alt="#"/>
						<div
							className="crime-menu-set-capture-fractions-element-content-freeze__value">{store.fractionsFreeze.ballas}</div>
					</div>}
					{store.fractionsCaptureStatus.ballas &&
					<img className="crime-menu-set-capture-fractions-element-content__captured" src={captureIcon}
					     alt="#"/>}
				</div>
			</div>}
		</div>
		<div className="crime-menu-set-capture-conditions">
			<div className="crime-menu-set-capture-conditions__title">Захват территории</div>
			<div className="crime-menu-set-capture-conditions-time">
				<div className="crime-menu-set-capture-conditions-time__title">Время</div>
				<div className="crime-menu-set-capture-conditions-time-content">
					<div className="crime-menu-set-capture-conditions-time-content-hours">
						<img
							className="crime-menu-set-capture-conditions-time-content-hours__arrow-next"
							src={arrowTop}
							alt="#"
							onClick={() => {
								if (store.capture.time.hours + 1 > 23) store.capture.time.hours = 14;
								else store.capture.time.hours++;
							}}
						/>
						<div className="crime-menu-set-capture-conditions-time-content-hours__value">{_hours}</div>
						<img
							className="crime-menu-set-capture-conditions-time-content-hours__arrow-prev"
							src={arrowTop}
							alt="#"
							onClick={() => {
								if (store.capture.time.hours - 1 < 14) store.capture.time.hours = 23;
								else store.capture.time.hours--;
							}}
						/>
					</div>
					<span>:</span>
					<div className="crime-menu-set-capture-conditions-time-content-minutes">
						<img
							className="crime-menu-set-capture-conditions-time-content-minutes__arrow-next"
							src={arrowTop}
							alt="#"
							onClick={() => {
								if (store.capture.time.minutes + 1 > 59) store.capture.time.minutes = 0;
								else store.capture.time.minutes++;
							}}
						/>
						<div className="crime-menu-set-capture-conditions-time-content-minutes__value">{_minutes}</div>
						<img
							className="crime-menu-set-capture-conditions-time-content-minutes__arrow-prev"
							src={arrowTop}
							alt="#"
							onClick={() => {
								if (store.capture.time.minutes - 1 < 0) store.capture.time.minutes = 59;
								else store.capture.time.minutes--;
							}}
						/>
					</div>
				</div>
			</div>
			<div className="crime-menu-set-capture-conditions-items">
				<div className="crime-menu-set-capture-conditions-items__title">Разрешено использовать</div>
				<div className="crime-menu-set-capture-conditions-items-content">
					<div
						className={cn('crime-menu-set-capture-conditions-items-content-element',
							store.capture.access.items.medkit ? 'crime-menu-set-capture-conditions-items-content-element_active' : null)}
						onClick={() => store.capture.access.items = {
							animation: store.capture.access.items.animation,
							armour: store.capture.access.items.armour,
							drug: store.capture.access.items.drug,
							medkit: !store.capture.access.items.medkit,
						}}
					>
						<div className="crime-menu-set-capture-conditions-items-content-element-status">
							<div className="crime-menu-set-capture-conditions-items-content-element-status__fill"/>
						</div>
						<img className="crime-menu-set-capture-conditions-items-content-element__icon" src={medkit}
						     alt="#"/>
						<div className="crime-menu-set-capture-conditions-items-content-element__title">- Аптечки</div>
					</div>
					<div
						className={cn('crime-menu-set-capture-conditions-items-content-element',
							store.capture.access.items.armour ? 'crime-menu-set-capture-conditions-items-content-element_active' : null)}
						onClick={() => store.capture.access.items = {
							animation: store.capture.access.items.animation,
							armour: !store.capture.access.items.armour,
							drug: store.capture.access.items.drug,
							medkit: store.capture.access.items.medkit,
						}}
					>
						<div className="crime-menu-set-capture-conditions-items-content-element-status">
							<div className="crime-menu-set-capture-conditions-items-content-element-status__fill"/>
						</div>
						<img className="crime-menu-set-capture-conditions-items-content-element__icon" src={armour}
						     alt="#"/>
						<div className="crime-menu-set-capture-conditions-items-content-element__title">- Бронежилеты
						</div>
					</div>
					<div
						className={cn('crime-menu-set-capture-conditions-items-content-element',
							store.capture.access.items.drug ? 'crime-menu-set-capture-conditions-items-content-element_active' : null)}
						onClick={() => store.capture.access.items = {
							animation: store.capture.access.items.animation,
							armour: store.capture.access.items.armour,
							drug: !store.capture.access.items.drug,
							medkit: store.capture.access.items.medkit,
						}}
					>
						<div className="crime-menu-set-capture-conditions-items-content-element-status">
							<div className="crime-menu-set-capture-conditions-items-content-element-status__fill"/>
						</div>
						<img className="crime-menu-set-capture-conditions-items-content-element__icon" src={drug}
						     alt="#"/>
						<div className="crime-menu-set-capture-conditions-items-content-element__title">- Наркотики
						</div>
					</div>
					<div
						className={cn('crime-menu-set-capture-conditions-items-content-element',
							store.capture.access.items.animation ? 'crime-menu-set-capture-conditions-items-content-element_active' : null)}
						onClick={() => store.capture.access.items = {
							animation: !store.capture.access.items.animation,
							armour: store.capture.access.items.armour,
							drug: store.capture.access.items.drug,
							medkit: store.capture.access.items.medkit,
						}}
					>
						<div className="crime-menu-set-capture-conditions-items-content-element-status">
							<div className="crime-menu-set-capture-conditions-items-content-element-status__fill"/>
						</div>
						<img className="crime-menu-set-capture-conditions-items-content-element__icon" src={animation}
						     alt="#"/>
						<div className="crime-menu-set-capture-conditions-items-content-element__title">- Анимации</div>
					</div>
				</div>
			</div>
			<div className="crime-menu-set-capture-conditions-guns">
				<div className="crime-menu-set-capture-conditions-guns__title">Разрешенное оружие</div>
				<div className="crime-menu-set-capture-conditions-guns-content">
					<div
						className={cn('crime-menu-set-capture-conditions-guns-content-element',
							store.capture.access.guns.pistol ? 'crime-menu-set-capture-conditions-guns-content-element_active' : null)}
						onClick={() => store.capture.access.guns = {
							shotgun: store.capture.access.guns.shotgun,
							smg: store.capture.access.guns.smg,
							assault: store.capture.access.guns.assault,
							pistol: !store.capture.access.guns.pistol,
						}}
					>
						<div className="crime-menu-set-capture-conditions-guns-content-element-status">
							<div className="crime-menu-set-capture-conditions-guns-content-element-status__fill"/>
						</div>
						<img className="crime-menu-set-capture-conditions-guns-content-element__icon" src={pistol}
						     alt="#"/>
						<div className="crime-menu-set-capture-conditions-guns-content-element__title">- Пистолеты</div>
					</div>
					<div
						className={cn('crime-menu-set-capture-conditions-guns-content-element',
							store.capture.access.guns.smg ? 'crime-menu-set-capture-conditions-guns-content-element_active' : null)}
						onClick={() => store.capture.access.guns = {
							shotgun: store.capture.access.guns.shotgun,
							smg: !store.capture.access.guns.smg,
							assault: store.capture.access.guns.assault,
							pistol: store.capture.access.guns.pistol,
						}}
					>
						<div className="crime-menu-set-capture-conditions-guns-content-element-status">
							<div className="crime-menu-set-capture-conditions-guns-content-element-status__fill"/>
						</div>
						<img className="crime-menu-set-capture-conditions-guns-content-element__icon" src={smg}
						     alt="#"/>
						<div className="crime-menu-set-capture-conditions-guns-content-element__title">-
							Пистолеты-пулеметы
						</div>
					</div>
					<div
						className={cn('crime-menu-set-capture-conditions-guns-content-element',
							store.capture.access.guns.assault ? 'crime-menu-set-capture-conditions-guns-content-element_active' : null)}
						onClick={() => store.capture.access.guns = {
							shotgun: store.capture.access.guns.shotgun,
							smg: store.capture.access.guns.smg,
							assault: !store.capture.access.guns.assault,
							pistol: store.capture.access.guns.pistol,
						}}
					>
						<div className="crime-menu-set-capture-conditions-guns-content-element-status">
							<div className="crime-menu-set-capture-conditions-guns-content-element-status__fill"/>
						</div>
						<img className="crime-menu-set-capture-conditions-guns-content-element__icon" src={assault}
						     alt="#"/>
						<div className="crime-menu-set-capture-conditions-guns-content-element__title">- Штурмовые
							винтовки
						</div>
					</div>
					<div
						className={cn('crime-menu-set-capture-conditions-guns-content-element',
							store.capture.access.guns.shotgun ? 'crime-menu-set-capture-conditions-guns-content-element_active' : null)}
						onClick={() => store.capture.access.guns = {
							shotgun: !store.capture.access.guns.shotgun,
							smg: store.capture.access.guns.smg,
							assault: store.capture.access.guns.assault,
							pistol: store.capture.access.guns.pistol,
						}}
					>
						<div className="crime-menu-set-capture-conditions-guns-content-element-status">
							<div className="crime-menu-set-capture-conditions-guns-content-element-status__fill"/>
						</div>
						<img className="crime-menu-set-capture-conditions-guns-content-element__icon" src={shotgun}
						     alt="#"/>
						<div className="crime-menu-set-capture-conditions-guns-content-element__title">- Дробовики</div>
					</div>
				</div>
			</div>
			<div className="crime-menu-set-capture-conditions-players">
				<div className="crime-menu-set-capture-conditions-players-input">
					<div className="crime-menu-set-capture-conditions-players-input__title">Выберите <br/>количество
						участников
					</div>
					<div className="crime-menu-set-capture-conditions-players-input-range">
						<img
							className="crime-menu-set-capture-conditions-players-input-range__prev"
							src={rightArrow}
							alt="#"
							onClick={() => {
								if (store.capture.count - 1 < 5) store.capture.count = 15;
								else store.capture.count--;
							}}
						/>
						<input
							type="range"
							name="n_crimeMenuSetCapturePlayers"
							value={store.capture.count}
							min="5"
							max="15"
							onChange={(e) => store.capture.count = Number(e.target.value)}
						/>
						<img
							className="crime-menu-set-capture-conditions-players-input-range__next"
							src={rightArrow}
							alt="#"
							onClick={() => {
								if (store.capture.count + 1 > 15) store.capture.count = 5;
								else store.capture.count++;
							}}
						/>
					</div>
				</div>
				<div className="crime-menu-set-capture-conditions-players-list">
					<div className="crime-menu-set-capture-conditions-players-list-count">
						<div
							className="crime-menu-set-capture-conditions-players-list-count__attack">{store.capture.count}</div>
						<img className="crime-menu-set-capture-conditions-players-list-count__icon" src={versus}
						     alt="#"/>
						<div
							className="crime-menu-set-capture-conditions-players-list-count__defence">{store.capture.count}</div>
					</div>
					<div className="crime-menu-set-capture-conditions-players-list-content">
						<div className="crime-menu-set-capture-conditions-players-list-content-top">
							{players.map((el, key) => {
								return <img
									key={key}
									className="crime-menu-set-capture-conditions-players-list-content-top__icon"
									src={player}
									alt="#"
									style={el > store.capture.count ? {
										filter: 'brightness(0)',
										opacity: .5,
									} : {filter: 'brightness(1)'}}
								/>;
							})}
						</div>
						<div className="crime-menu-set-capture-conditions-players-list-content-bottom">
							{players.map((el, key) => {
								return <img
									key={key}
									className="crime-menu-set-capture-conditions-players-list-content-bottom__icon"
									src={player}
									alt="#"
									style={el > store.capture.count ? {
										filter: 'brightness(0)',
										opacity: .5,
									} : {filter: 'brightness(1)'}}
								/>;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			className="crime-menu-set-capture-submit"
			onClick={() => {
				if (fractionFreezeTime !== 0) store.addNotify('Вы не можете назначить капт, находясь на отдыхе');
				else if (!currentFraction) store.addNotify('Выберите фракцию, против которой будет назначен капт');
				else if (Object.values(store.capture.access.items).filter(el => el).length === 0 ||
					Object.values(store.capture.access.guns).filter(el => el).length === 0)
					store.addNotify('Установите хотя бы по одному ограничению на предметы и оружие');
				else setPage('changeCaptureList');
			}}
		>
			{fractionFreezeTime !== 0 ? <div className="crime-menu-set-capture-submit-disabled">
				<img className="crime-menu-set-capture-submit-disabled__icon" src={fractionFreeze} alt="#"/>
				<div className="crime-menu-set-capture-submit-disabled__title">Захват через {fractionFreezeTime}</div>
			</div> : <div className="crime-menu-set-capture-submit__title">Далее</div>}
		</div>
	</div>;
};

export default observer(SetCapture);