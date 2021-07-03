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

import './GetCapture.scss';

const GetCapture = ({store}) => {
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
		
		<div className="crime-menu-get-capture-conditions">
			<div className="crime-menu-get-capture-conditions__title">Вам назначен <br/>захват территории</div>
			<div className="crime-menu-get-capture-conditions-description">
				<div className="crime-menu-get-capture-conditions-description__title">Внимание</div>
				<div className="crime-menu-get-capture-conditions-description__subtitle">
					Не нарушайте правила и не будете наказаны. Незнание правил не освобождает от наказания. Ведите себя культурно!
				</div>
			</div>
		</div>
		<div
			className="crime-menu-get-capture-submit"
		>
			<div className="crime-menu-get-capture-submit__title">Перенести</div>
		</div>
	</div>;
};

export default observer(GetCapture);