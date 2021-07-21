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
import mafiaMenuBg    from 'assets/images/mafiaMenu/mafiaMenuBg.png';

import './SetBizwar.scss';

const SetBizwar = ({store, setPage, fractionColor, fractionIcon}) => {
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
				case 'Armenian':
					return store.fractionsFreeze.armenian;
				case 'Japanese':
					return store.fractionsFreeze.japanese;
				case 'Russian':
					return store.fractionsFreeze.russian;
				case 'Italian':
					return store.fractionsFreeze.lcn;
				default:
					return;
			}
		}, [store.fractionName, store.fractionsFreeze.armenian, store.fractionsFreeze.lcn, store.fractionsFreeze.russian, store.fractionsFreeze.japanese]),
		armenianBusiness = React.useMemo(() => {
			const businessCount = store.getFractionTerritory('Armenian');
			
			if (businessCount <= 72 * .1) return '10%';
			else if (businessCount <= 72 * .25) return '35%';
			else if (businessCount <= 72 * .40) return '50%';
			else if (businessCount <= 72 * .55) return '75%';
			else if (businessCount <= 72 * .70) return '90%';
			else if (businessCount <= 72 * .85) return '100%';
			else return '100%';
		}, [store]),
		japaneseBusiness = React.useMemo(() => {
			const businessCount = store.getFractionTerritory('Japanese');
			
			if (businessCount <= 72 * .1) return '10%';
			else if (businessCount <= 72 * .25) return '35%';
			else if (businessCount <= 72 * .40) return '50%';
			else if (businessCount <= 72 * .55) return '75%';
			else if (businessCount <= 72 * .70) return '90%';
			else if (businessCount <= 72 * .85) return '100%';
			else return '100%';
		}, [store]),
		russianBusiness = React.useMemo(() => {
			const businessCount = store.getFractionTerritory('Russian');
			
			if (businessCount <= 72 * .1) return '10%';
			else if (businessCount <= 72 * .25) return '35%';
			else if (businessCount <= 72 * .40) return '50%';
			else if (businessCount <= 72 * .55) return '75%';
			else if (businessCount <= 72 * .70) return '90%';
			else if (businessCount <= 72 * .85) return '100%';
			else return '100%';
		}, [store]),
		italianBusiness = React.useMemo(() => {
			const businessCount = store.getFractionTerritory('Italian');
			
			if (businessCount <= 72 * .1) return '10%';
			else if (businessCount <= 72 * .25) return '35%';
			else if (businessCount <= 72 * .40) return '50%';
			else if (businessCount <= 72 * .55) return '75%';
			else if (businessCount <= 72 * .70) return '90%';
			else if (businessCount <= 72 * .85) return '100%';
			else return '100%';
		}, [store]);
	
	return <div className="mafia-menu-set-bizwar">
		<div className="mafia-menu-set-bizwar-info">
			<img className="mafia-menu-set-bizwar-info__bg" src={mafiaMenuBg} alt="#"/>
			<div className="mafia-menu-set-bizwar-info-content">
				<div className="mafia-menu-set-bizwar-info-content__title">Бизнесов под контролем</div>
				<div className="mafia-menu-set-bizwar-info-content-business">
					<div
						className="mafia-menu-set-bizwar-info-content-business-element mafia-menu-set-bizwar-info-content-business-element_armenian"
						style={{height: armenianBusiness}}
					>
						<div className="mafia-menu-set-bizwar-info-content-business-element-content">
							<svg
								className="mafia-menu-set-bizwar-info-content-business-element-content__icon"
								xmlns="http://www.w3.org/2000/svg"
								width="183.414"
								height="164.757"
								viewBox="0 0 183.414 164.757"
								opacity="1"
								fill="#EAEAEA"
								style={{filter: 'drop-shadow(0 2px 2px #00000080)'}}
							>
								<g transform="translate(1121.012 92.558)">
									<path
										d="M-1075.006,71.412a36.342,36.342,0,0,1-10.019-6.387c-8.287-7.355-13.536-16.616-16.716-27.1a73.648,73.648,0,0,1,.422-44.1c.1-.318.177-.641.325-1.18a42.183,42.183,0,0,0-10.792,6.007,53.221,53.221,0,0,0-8.431,9.015,1.724,1.724,0,0,1-.252-1.235c-.4-8,1.816-15.395,5.181-22.527a128.6,128.6,0,0,1,10.257-17.084c.682-1.007,1.359-2.018,2-3.053.224-.364.764-.72.506-1.163-.212-.362-.775-.148-1.178-.149q-7.53-.018-15.062-.008H-1120c-.111-.525.282-.669.5-.892,5.2-5.4,10.625-10.564,16.054-15.726,3.623-3.445,6.623-7.433,9.915-11.165,6.789-7.7,14.312-14.494,23.464-19.31a64.67,64.67,0,0,1,24.093-7.109c13.48-1.314,26.212,1.636,38.555,6.732a141.507,141.507,0,0,1,26.3,14.019A75.276,75.276,0,0,1-968.086-59.8a8.3,8.3,0,0,1,2.279,3.625c.112.485.429.391.777.412,10.375.629,18.245,5.653,24.134,13.975,2.048,2.893,2.233,6.411,2.572,9.813.544,5.471.077,10.942-.081,16.413-.047,1.632-.007,3.266-.007,4.827-.5.235-.645-.066-.81-.231-2.682-2.692-5.685-5.06-8.106-8.012a1.125,1.125,0,0,0-1-.393c-12.285.012-24.573-.1-36.855.081-6.112.092-11.51,2.685-16.419,6.16a61.943,61.943,0,0,0-23.893,33.39,95.866,95.866,0,0,0-3.685,21.626c-.636,9.311-.387,18.625-.246,27.941.025,1.648,0,1.663-1.468.961a130.635,130.635,0,0,1-30.244-19.57,68.7,68.7,0,0,1-13.4-15.456c-.095-.154-.223-.288-.391-.5a17.177,17.177,0,0,0-1.451,5.784,100.738,100.738,0,0,0,1.291,29.507C-1075.044,70.764-1075.044,70.987-1075.006,71.412Zm45.817-135.836a10.126,10.126,0,0,0,2.035,2.525c1.989,1.821,4.011,3.605,6.021,5.4a3.162,3.162,0,0,1,.976,1.362,12.481,12.481,0,0,0,4.375,5.983c4.932,3.768,10.456,4.179,16.229,2.614,4-1.084,6.131-3.911,6.435-8.015.065-.874-.194-1.168-1.054-1.269a165.57,165.57,0,0,1-18.011-3.309C-1017.9-60.448-1023.664-61.677-1029.189-64.424Z"
										transform="translate(0 0)"/>
								</g>
							</svg>
							<div
								className="mafia-menu-set-bizwar-info-content-business-element-content__value">{store.getFractionTerritory('Armenian')}</div>
						</div>
						<div className="mafia-menu-set-bizwar-info-content-business-element__bottom"/>
					</div>
					<div
						className="mafia-menu-set-bizwar-info-content-business-element mafia-menu-set-bizwar-info-content-business-element_yakuza"
						style={{height: japaneseBusiness}}
					>
						<div className="mafia-menu-set-bizwar-info-content-business-element-content">
							<svg
								className="mafia-menu-set-bizwar-info-content-business-element-content__icon"
								xmlns="http://www.w3.org/2000/svg"
								width="172.826"
								height="169.415"
								viewBox="0 0 172.826 169.415"
								opacity="1"
								fill="#EAEAEA"
								style={{filter: 'drop-shadow(0 2px 2px #00000080)'}}
							>
								<g transform="translate(-11404.999 -5888.199)">
									<path
										d="M144.484,156.211l15.139-15.14,13.2,13.2-15.141,15.14ZM0,154.275l13.2-13.2,15.139,15.14-13.2,13.2Zm124.284-18.261,13.2-13.2,1.935-1.937,13.2,13.2-15.139,15.14ZM20.2,134.078l13.2-13.2,1.935,1.936,13.2,13.2-13.2,13.2Zm80.5-3.53,33.256-33.256,7.529,7.529-5.573,5.575h0l-27.681,27.681ZM36.915,110.4h0l-5.573-5.575,7.529-7.529,33.256,33.256L64.6,138.077Zm49.5-12.253L70.062,114.494,54.922,99.355,71.274,83,17.995,29.725,18.549,0,86.413,67.864,154.278,0l.555,29.725L101.553,83,117.9,99.355l-15.139,15.139Z"
										transform="translate(11405 5888.199)"/>
								</g>
							</svg>
							<div
								className="mafia-menu-set-bizwar-info-content-business-element-content__value">{store.getFractionTerritory('Japanese')}</div>
						</div>
						<div className="mafia-menu-set-bizwar-info-content-business-element__bottom"/>
					</div>
					<div
						className="mafia-menu-set-bizwar-info-content-business-element mafia-menu-set-bizwar-info-content-business-element_russian"
						style={{height: russianBusiness}}
					>
						<div className="mafia-menu-set-bizwar-info-content-business-element-content">
							<svg
								className="mafia-menu-set-bizwar-info-content-business-element-content__icon"
								xmlns="http://www.w3.org/2000/svg"
								width="164.986"
								height="201.186"
								viewBox="0 0 164.986 201.186"
								opacity="1"
								fill="#EAEAEA"
								style={{filter: 'drop-shadow(0 2px 2px #00000080)'}}
							>
								<g transform="translate(-9948.522 -3875.583)">
									<g transform="translate(9948.521 3875.583)">
										<path
											d="M58.84,201.147a34.694,34.694,0,0,1-17.128-63.875,13.433,13.433,0,0,0,6.135-12.035c-.033-.639-.051-1.283-.051-1.922a34.7,34.7,0,0,1,69.377-1.114c.033,1,.021,2.013-.033,3.01a13.474,13.474,0,0,0,6.135,12.061,34.7,34.7,0,0,1-34.646,60.039,13.341,13.341,0,0,0-12.271,0A34.673,34.673,0,0,1,60.4,201.186C59.882,201.186,59.36,201.173,58.84,201.147ZM126.16,90.14c0-2.709.81-7.691,7.782-19.72,2.254-3.882,4.483-7.349,5.879-9.453.366-1.954.816-4.176,1.371-6.711,1.353-6.206,2.689-11.345,2.746-11.566.372-1.42.985-2.273,1.637-2.273s1.263.853,1.634,2.273c.057.222,1.393,5.36,2.749,11.566.556,2.536,1.006,4.76,1.371,6.714,1.393,2.1,3.622,5.57,5.876,9.45,6.975,12.029,7.782,17.011,7.782,19.72a19.413,19.413,0,0,1-38.827,0ZM0,90.14c0-2.709.807-7.691,7.782-19.72,2.251-3.882,4.483-7.349,5.876-9.453.369-1.954.819-4.176,1.374-6.711,1.353-6.206,2.689-11.345,2.746-11.566.372-1.42.985-2.273,1.634-2.273s1.266.853,1.634,2.273c.06.222,1.4,5.36,2.749,11.566.556,2.536,1.006,4.76,1.374,6.714,1.39,2.1,3.619,5.57,5.876,9.45,6.975,12.029,7.782,17.011,7.782,19.72A19.414,19.414,0,0,1,0,90.14ZM87.547,54.784c0-2.7.816-7.691,7.782-19.714,1.731-2.98,3.45-5.717,4.782-7.78.4-3.1,1.139-7.374,2.468-13.451,1.353-6.206,2.695-11.351,2.749-11.566C105.7.847,106.31,0,106.968,0s1.257.847,1.628,2.273c.057.215,1.393,5.36,2.749,11.566,1.329,6.079,2.063,10.357,2.468,13.453,1.335,2.062,3.051,4.8,4.779,7.778,6.975,12.022,7.782,17.011,7.782,19.714a19.414,19.414,0,1,1-38.827,0Zm-48.935,0c0-2.7.807-7.691,7.782-19.714,1.731-2.982,3.447-5.719,4.779-7.781.4-3.095,1.136-7.373,2.465-13.45C55,7.633,56.333,2.488,56.384,2.273,56.756.847,57.369,0,58.025,0s1.263.847,1.634,2.273c.051.215,1.387,5.36,2.749,11.566,1.326,6.076,2.06,10.353,2.465,13.448,1.332,2.063,3.048,4.8,4.779,7.783,6.975,12.022,7.782,17.011,7.782,19.714a19.41,19.41,0,1,1-38.821,0Z"/>
									</g>
								</g>
							</svg>
							<div
								className="mafia-menu-set-bizwar-info-content-business-element-content__value">{store.getFractionTerritory('Russian')}</div>
						</div>
						<div className="mafia-menu-set-bizwar-info-content-business-element__bottom"/>
					</div>
					<div
						className="mafia-menu-set-bizwar-info-content-business-element mafia-menu-set-bizwar-info-content-business-element_italian"
						style={{height: italianBusiness}}
					>
						<div className="mafia-menu-set-bizwar-info-content-business-element-content">
							<svg
								className="mafia-menu-set-bizwar-info-content-business-element-content__icon"
								xmlns="http://www.w3.org/2000/svg"
								width="185.914"
								height="102.389"
								viewBox="0 0 185.914 102.389"
								opacity="1"
								fill="#EAEAEA"
								style={{filter: 'drop-shadow(0 2px 2px #00000080)'}}
							>
								<g transform="translate(0 -127.525)">
									<path
										d="M252.561,173.278c-.028-.259-5.772-54.546-5.814-54.963a18.677,18.677,0,0,0-23.624-16.008l-35.468,9.978a7.333,7.333,0,0,1-3.987,0L148.2,102.307a18.677,18.677,0,0,0-23.624,16.008l-5.814,54.968C160.112,180.121,208.9,180.513,252.561,173.278Z"
										transform="translate(-92.704 25.923)"
									/>
									<path
										d="M176.345,338.833c-50.462,11.433-114.9,11.7-166.761,0a7.874,7.874,0,0,0-3.631,15.321c52.85,13.213,121.149,13.219,174.008,0a7.872,7.872,0,0,0-3.616-15.321Z"
										transform="translate(0 -134.153)"
									/>
								</g>
							</svg>
							<div
								className="mafia-menu-set-bizwar-info-content-business-element-content__value">{store.getFractionTerritory('Italian')}</div>
						</div>
						<div className="mafia-menu-set-bizwar-info-content-business-element__bottom"/>
					</div>
				</div>
			</div>
		</div>
		<div className="mafia-menu-set-bizwar-fractions">
			{store.fractionName !== 'Italian' &&
			<div
				className={cn('mafia-menu-set-bizwar-fractions-element',
					currentFraction === 'italian' ? 'mafia-menu-set-bizwar-fractions-element_active mafia-menu-set-bizwar-fractions-element_active_italian'
						: null)}
				onClick={() => {
					if (store.fractionsFreeze.lcn === 0 && !store.fractionsCaptureStatus.lcn) setFraction('italian');
				}}
			>
				<div
					className="mafia-menu-set-bizwar-fractions-element-attack"
					style={{background: `linear-gradient(to bottom, #00000000, ${fractionColor})`}}
				>
					<img className="mafia-menu-set-bizwar-fractions-element-attack__icon" src={fractionIcon} alt="#"/>
					<div className="mafia-menu-set-bizwar-fractions-element-attack__bottom"/>
				</div>
				<div className="mafia-menu-set-bizwar-fractions-element-content">
					<svg
						className="mafia-menu-set-bizwar-fractions-element-content__icon"
						xmlns="http://www.w3.org/2000/svg"
						width="185.914"
						height="102.389"
						viewBox="0 0 185.914 102.389"
						opacity={currentFraction === 'italian' ? .5 : 1}
						fill={currentFraction === 'italian' ? '#000000' : '#EAEAEA'}
						style={currentFraction === 'italian' ? null : {filter: 'drop-shadow(0 2px 2px #00000080)'}}
					>
						<g transform="translate(0 -127.525)">
							<path
								d="M252.561,173.278c-.028-.259-5.772-54.546-5.814-54.963a18.677,18.677,0,0,0-23.624-16.008l-35.468,9.978a7.333,7.333,0,0,1-3.987,0L148.2,102.307a18.677,18.677,0,0,0-23.624,16.008l-5.814,54.968C160.112,180.121,208.9,180.513,252.561,173.278Z"
								transform="translate(-92.704 25.923)"
							/>
							<path
								d="M176.345,338.833c-50.462,11.433-114.9,11.7-166.761,0a7.874,7.874,0,0,0-3.631,15.321c52.85,13.213,121.149,13.219,174.008,0a7.872,7.872,0,0,0-3.616-15.321Z"
								transform="translate(0 -134.153)"
							/>
						</g>
					</svg>
					
					{store.fractionsFreeze.lcn !== 0 &&
					<div className="mafia-menu-set-bizwar-fractions-element-content-freeze">
						<img className="mafia-menu-set-bizwar-fractions-element-content-freeze__icon"
						     src={fractionFreeze}
						     alt="#"/>
						<div
							className="mafia-menu-set-bizwar-fractions-element-content-freeze__value">{store.fractionsFreeze.lcn}</div>
					</div>}
					{store.fractionsCaptureStatus.lcn &&
					<img className="mafia-menu-set-bizwar-fractions-element-content__captured" src={captureIcon}
					     alt="#"/>}
				</div>
			</div>}
			{store.fractionName !== 'Russian' &&
			<div
				className={cn('mafia-menu-set-bizwar-fractions-element',
					currentFraction === 'russian' ? 'mafia-menu-set-bizwar-fractions-element_active mafia-menu-set-bizwar-fractions-element_active_russian'
						: null)}
				onClick={() => {
					if (store.fractionsFreeze.russian === 0 && !store.fractionsCaptureStatus.russian) setFraction('russian');
				}}
			>
				<div
					className="mafia-menu-set-bizwar-fractions-element-attack"
					style={{background: `linear-gradient(to bottom, #00000000, ${fractionColor})`}}
				>
					<img className="mafia-menu-set-bizwar-fractions-element-attack__icon" src={fractionIcon} alt="#"/>
					<div className="mafia-menu-set-bizwar-fractions-element-attack__bottom"/>
				</div>
				<div className="mafia-menu-set-bizwar-fractions-element-content">
					<svg
						className="mafia-menu-set-bizwar-fractions-element-content__icon"
						xmlns="http://www.w3.org/2000/svg"
						width="164.986"
						height="201.186"
						viewBox="0 0 164.986 201.186"
						opacity={currentFraction === 'russian' ? .5 : 1}
						fill={currentFraction === 'russian' ? '#000000' : '#EAEAEA'}
						style={currentFraction === 'russian' ? null : {filter: 'drop-shadow(0 2px 2px #00000080)'}}
					>
						<g transform="translate(-9948.522 -3875.583)">
							<g transform="translate(9948.521 3875.583)">
								<path
									d="M58.84,201.147a34.694,34.694,0,0,1-17.128-63.875,13.433,13.433,0,0,0,6.135-12.035c-.033-.639-.051-1.283-.051-1.922a34.7,34.7,0,0,1,69.377-1.114c.033,1,.021,2.013-.033,3.01a13.474,13.474,0,0,0,6.135,12.061,34.7,34.7,0,0,1-34.646,60.039,13.341,13.341,0,0,0-12.271,0A34.673,34.673,0,0,1,60.4,201.186C59.882,201.186,59.36,201.173,58.84,201.147ZM126.16,90.14c0-2.709.81-7.691,7.782-19.72,2.254-3.882,4.483-7.349,5.879-9.453.366-1.954.816-4.176,1.371-6.711,1.353-6.206,2.689-11.345,2.746-11.566.372-1.42.985-2.273,1.637-2.273s1.263.853,1.634,2.273c.057.222,1.393,5.36,2.749,11.566.556,2.536,1.006,4.76,1.371,6.714,1.393,2.1,3.622,5.57,5.876,9.45,6.975,12.029,7.782,17.011,7.782,19.72a19.413,19.413,0,0,1-38.827,0ZM0,90.14c0-2.709.807-7.691,7.782-19.72,2.251-3.882,4.483-7.349,5.876-9.453.369-1.954.819-4.176,1.374-6.711,1.353-6.206,2.689-11.345,2.746-11.566.372-1.42.985-2.273,1.634-2.273s1.266.853,1.634,2.273c.06.222,1.4,5.36,2.749,11.566.556,2.536,1.006,4.76,1.374,6.714,1.39,2.1,3.619,5.57,5.876,9.45,6.975,12.029,7.782,17.011,7.782,19.72A19.414,19.414,0,0,1,0,90.14ZM87.547,54.784c0-2.7.816-7.691,7.782-19.714,1.731-2.98,3.45-5.717,4.782-7.78.4-3.1,1.139-7.374,2.468-13.451,1.353-6.206,2.695-11.351,2.749-11.566C105.7.847,106.31,0,106.968,0s1.257.847,1.628,2.273c.057.215,1.393,5.36,2.749,11.566,1.329,6.079,2.063,10.357,2.468,13.453,1.335,2.062,3.051,4.8,4.779,7.778,6.975,12.022,7.782,17.011,7.782,19.714a19.414,19.414,0,1,1-38.827,0Zm-48.935,0c0-2.7.807-7.691,7.782-19.714,1.731-2.982,3.447-5.719,4.779-7.781.4-3.095,1.136-7.373,2.465-13.45C55,7.633,56.333,2.488,56.384,2.273,56.756.847,57.369,0,58.025,0s1.263.847,1.634,2.273c.051.215,1.387,5.36,2.749,11.566,1.326,6.076,2.06,10.353,2.465,13.448,1.332,2.063,3.048,4.8,4.779,7.783,6.975,12.022,7.782,17.011,7.782,19.714a19.41,19.41,0,1,1-38.821,0Z"/>
							</g>
						</g>
					</svg>
					{store.fractionsFreeze.russian !== 0 &&
					<div className="mafia-menu-set-bizwar-fractions-element-content-freeze">
						<img className="mafia-menu-set-bizwar-fractions-element-content-freeze__icon"
						     src={fractionFreeze}
						     alt="#"/>
						<div
							className="mafia-menu-set-bizwar-fractions-element-content-freeze__value">{store.fractionsFreeze.russian}</div>
					</div>}
					{store.fractionsCaptureStatus.russian &&
					<img className="mafia-menu-set-bizwar-fractions-element-content__captured" src={captureIcon}
					     alt="#"/>}
				</div>
			</div>}
			{store.fractionName !== 'Japanese' &&
			<div
				className={cn('mafia-menu-set-bizwar-fractions-element',
					currentFraction === 'japanese' ? 'mafia-menu-set-bizwar-fractions-element_active mafia-menu-set-bizwar-fractions-element_active_yakuza'
						: null)}
				onClick={() => {
					if (store.fractionsFreeze.japanese === 0 && !store.fractionsCaptureStatus.japanese) setFraction('japanese');
				}}
			>
				<div
					className="mafia-menu-set-bizwar-fractions-element-attack"
					style={{background: `linear-gradient(to bottom, #00000000, ${fractionColor})`}}
				>
					<img className="mafia-menu-set-bizwar-fractions-element-attack__icon" src={fractionIcon} alt="#"/>
					<div className="mafia-menu-set-bizwar-fractions-element-attack__bottom"/>
				</div>
				<div className="mafia-menu-set-bizwar-fractions-element-content">
					<svg
						className="mafia-menu-set-bizwar-fractions-element-content__icon"
						xmlns="http://www.w3.org/2000/svg"
						width="172.826"
						height="169.415"
						viewBox="0 0 172.826 169.415"
						opacity={currentFraction === 'japanese' ? .5 : 1}
						fill={currentFraction === 'japanese' ? '#000000' : '#EAEAEA'}
						style={currentFraction === 'japanese' ? null : {filter: 'drop-shadow(0 2px 2px #00000080)'}}
					>
						<g transform="translate(-11404.999 -5888.199)">
							<path
								d="M144.484,156.211l15.139-15.14,13.2,13.2-15.141,15.14ZM0,154.275l13.2-13.2,15.139,15.14-13.2,13.2Zm124.284-18.261,13.2-13.2,1.935-1.937,13.2,13.2-15.139,15.14ZM20.2,134.078l13.2-13.2,1.935,1.936,13.2,13.2-13.2,13.2Zm80.5-3.53,33.256-33.256,7.529,7.529-5.573,5.575h0l-27.681,27.681ZM36.915,110.4h0l-5.573-5.575,7.529-7.529,33.256,33.256L64.6,138.077Zm49.5-12.253L70.062,114.494,54.922,99.355,71.274,83,17.995,29.725,18.549,0,86.413,67.864,154.278,0l.555,29.725L101.553,83,117.9,99.355l-15.139,15.139Z"
								transform="translate(11405 5888.199)"/>
						</g>
					</svg>
					{store.fractionsFreeze.japanese !== 0 &&
					<div className="mafia-menu-set-bizwar-fractions-element-content-freeze">
						<img className="mafia-menu-set-bizwar-fractions-element-content-freeze__icon"
						     src={fractionFreeze}
						     alt="#"/>
						<div
							className="mafia-menu-set-bizwar-fractions-element-content-freeze__value">{store.fractionsFreeze.japanese}</div>
					</div>}
					{store.fractionsCaptureStatus.japanese &&
					<img className="mafia-menu-set-bizwar-fractions-element-content__captured" src={captureIcon}
					     alt="#"/>}
				</div>
			</div>}
			{store.fractionName !== 'Armenian' &&
			<div
				className={cn('mafia-menu-set-bizwar-fractions-element',
					currentFraction === 'armenian' ? 'mafia-menu-set-bizwar-fractions-element_active mafia-menu-set-bizwar-fractions-element_active_armenian'
						: null)}
				onClick={() => {
					if (store.fractionsFreeze.armenian === 0 && !store.fractionsCaptureStatus.armenian) setFraction('armenian');
				}}
			>
				<div
					className="mafia-menu-set-bizwar-fractions-element-attack"
					style={{background: `linear-gradient(to bottom, #00000000, ${fractionColor})`}}
				>
					<img className="mafia-menu-set-bizwar-fractions-element-attack__icon" src={fractionIcon} alt="#"/>
					<div className="mafia-menu-set-bizwar-fractions-element-attack__bottom"/>
				</div>
				<div className="mafia-menu-set-bizwar-fractions-element-content">
					<svg
						className="mafia-menu-set-bizwar-fractions-element-content__icon"
						xmlns="http://www.w3.org/2000/svg"
						width="183.414"
						height="164.757"
						viewBox="0 0 183.414 164.757"
						opacity={currentFraction === 'armenian' ? .5 : 1}
						fill={currentFraction === 'armenian' ? '#000000' : '#EAEAEA'}
						style={currentFraction === 'armenian' ? null : {filter: 'drop-shadow(0 2px 2px #00000080)'}}
					>
						<g transform="translate(1121.012 92.558)">
							<path
								d="M-1075.006,71.412a36.342,36.342,0,0,1-10.019-6.387c-8.287-7.355-13.536-16.616-16.716-27.1a73.648,73.648,0,0,1,.422-44.1c.1-.318.177-.641.325-1.18a42.183,42.183,0,0,0-10.792,6.007,53.221,53.221,0,0,0-8.431,9.015,1.724,1.724,0,0,1-.252-1.235c-.4-8,1.816-15.395,5.181-22.527a128.6,128.6,0,0,1,10.257-17.084c.682-1.007,1.359-2.018,2-3.053.224-.364.764-.72.506-1.163-.212-.362-.775-.148-1.178-.149q-7.53-.018-15.062-.008H-1120c-.111-.525.282-.669.5-.892,5.2-5.4,10.625-10.564,16.054-15.726,3.623-3.445,6.623-7.433,9.915-11.165,6.789-7.7,14.312-14.494,23.464-19.31a64.67,64.67,0,0,1,24.093-7.109c13.48-1.314,26.212,1.636,38.555,6.732a141.507,141.507,0,0,1,26.3,14.019A75.276,75.276,0,0,1-968.086-59.8a8.3,8.3,0,0,1,2.279,3.625c.112.485.429.391.777.412,10.375.629,18.245,5.653,24.134,13.975,2.048,2.893,2.233,6.411,2.572,9.813.544,5.471.077,10.942-.081,16.413-.047,1.632-.007,3.266-.007,4.827-.5.235-.645-.066-.81-.231-2.682-2.692-5.685-5.06-8.106-8.012a1.125,1.125,0,0,0-1-.393c-12.285.012-24.573-.1-36.855.081-6.112.092-11.51,2.685-16.419,6.16a61.943,61.943,0,0,0-23.893,33.39,95.866,95.866,0,0,0-3.685,21.626c-.636,9.311-.387,18.625-.246,27.941.025,1.648,0,1.663-1.468.961a130.635,130.635,0,0,1-30.244-19.57,68.7,68.7,0,0,1-13.4-15.456c-.095-.154-.223-.288-.391-.5a17.177,17.177,0,0,0-1.451,5.784,100.738,100.738,0,0,0,1.291,29.507C-1075.044,70.764-1075.044,70.987-1075.006,71.412Zm45.817-135.836a10.126,10.126,0,0,0,2.035,2.525c1.989,1.821,4.011,3.605,6.021,5.4a3.162,3.162,0,0,1,.976,1.362,12.481,12.481,0,0,0,4.375,5.983c4.932,3.768,10.456,4.179,16.229,2.614,4-1.084,6.131-3.911,6.435-8.015.065-.874-.194-1.168-1.054-1.269a165.57,165.57,0,0,1-18.011-3.309C-1017.9-60.448-1023.664-61.677-1029.189-64.424Z"
								transform="translate(0 0)"/>
						</g>
					</svg>
					{store.fractionsFreeze.armenian !== 0 &&
					<div className="mafia-menu-set-bizwar-fractions-element-content-freeze">
						<img className="mafia-menu-set-bizwar-fractions-element-content-freeze__icon"
						     src={fractionFreeze}
						     alt="#"/>
						<div
							className="mafia-menu-set-bizwar-fractions-element-content-freeze__value">{store.fractionsFreeze.armenian}</div>
					</div>}
					{store.fractionsCaptureStatus.armenian &&
					<img className="mafia-menu-set-bizwar-fractions-element-content__captured" src={captureIcon}
					     alt="#"/>}
				</div>
			</div>}
		</div>
		<div className="mafia-menu-set-bizwar-conditions">
			<div className="mafia-menu-set-bizwar-conditions__title">Захват бизнеса</div>
			<div className="mafia-menu-set-bizwar-conditions-time">
				<div className="mafia-menu-set-bizwar-conditions-time__title">Время</div>
				<div className="mafia-menu-set-bizwar-conditions-time-content">
					<div className="mafia-menu-set-bizwar-conditions-time-content-hours">
						<img
							className="mafia-menu-set-bizwar-conditions-time-content-hours__arrow-next"
							src={arrowTop}
							alt="#"
							onClick={() => {
								if (store.capture.time.hours + 1 > 23) store.capture.time.hours = 14;
								else store.capture.time.hours++;
							}}
						/>
						<div className="mafia-menu-set-bizwar-conditions-time-content-hours__value">{_hours}</div>
						<img
							className="mafia-menu-set-bizwar-conditions-time-content-hours__arrow-prev"
							src={arrowTop}
							alt="#"
							onClick={() => {
								if (store.capture.time.hours - 1 < 14) store.capture.time.hours = 23;
								else store.capture.time.hours--;
							}}
						/>
					</div>
					<span>:</span>
					<div className="mafia-menu-set-bizwar-conditions-time-content-minutes">
						<img
							className="mafia-menu-set-bizwar-conditions-time-content-minutes__arrow-next"
							src={arrowTop}
							alt="#"
							onClick={() => {
								if (store.capture.time.minutes + 1 > 59) store.capture.time.minutes = 0;
								else store.capture.time.minutes++;
							}}
						/>
						<div className="mafia-menu-set-bizwar-conditions-time-content-minutes__value">{_minutes}</div>
						<img
							className="mafia-menu-set-bizwar-conditions-time-content-minutes__arrow-prev"
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
			<div className="mafia-menu-set-bizwar-conditions-items">
				<div className="mafia-menu-set-bizwar-conditions-items__title">Разрешено использовать</div>
				<div className="mafia-menu-set-bizwar-conditions-items-content">
					<div
						className={cn('mafia-menu-set-bizwar-conditions-items-content-element',
							store.capture.access.items.medkit ? 'mafia-menu-set-bizwar-conditions-items-content-element_active' : null)}
						onClick={() => store.capture.access.items = {
							animation: store.capture.access.items.animation,
							armour: store.capture.access.items.armour,
							drug: store.capture.access.items.drug,
							medkit: !store.capture.access.items.medkit,
						}}
					>
						<div className="mafia-menu-set-bizwar-conditions-items-content-element-status">
							<div className="mafia-menu-set-bizwar-conditions-items-content-element-status__fill"/>
						</div>
						<img className="mafia-menu-set-bizwar-conditions-items-content-element__icon" src={medkit}
						     alt="#"/>
						<div className="mafia-menu-set-bizwar-conditions-items-content-element__title">- Аптечки</div>
					</div>
					<div
						className={cn('mafia-menu-set-bizwar-conditions-items-content-element',
							store.capture.access.items.armour ? 'mafia-menu-set-bizwar-conditions-items-content-element_active' : null)}
				onClick={() => store.capture.access.items = {
							animation: store.capture.access.items.animation,
							armour: !store.capture.access.items.armour,
							drug: store.capture.access.items.drug,
							medkit: store.capture.access.items.medkit,
						}}
					>
						<div className="mafia-menu-set-bizwar-conditions-items-content-element-status">
							<div className="mafia-menu-set-bizwar-conditions-items-content-element-status__fill"/>
						</div>
						<img className="mafia-menu-set-bizwar-conditions-items-content-element__icon" src={armour}
						     alt="#"/>
						<div className="mafia-menu-set-bizwar-conditions-items-content-element__title">- Бронежилеты
						</div>
					</div>
					<div
						className={cn('mafia-menu-set-bizwar-conditions-items-content-element',
							store.capture.access.items.drug ? 'mafia-menu-set-bizwar-conditions-items-content-element_active' : null)}
					onClick={() => store.capture.access.items = {
							animation: store.capture.access.items.animation,
							armour: store.capture.access.items.armour,
							drug: !store.capture.access.items.drug,
							medkit: store.capture.access.items.medkit,
						}}
					>
						<div className="mafia-menu-set-bizwar-conditions-items-content-element-status">
							<div className="mafia-menu-set-bizwar-conditions-items-content-element-status__fill"/>
						</div>
						<img className="mafia-menu-set-bizwar-conditions-items-content-element__icon" src={drug}
						     alt="#"/>
						<div className="mafia-menu-set-bizwar-conditions-items-content-element__title">- Наркотики
						</div>
					</div>
					<div
						className={cn('mafia-menu-set-bizwar-conditions-items-content-element',
							store.capture.access.items.animation ? 'mafia-menu-set-bizwar-conditions-items-content-element_active' : null)}
			onClick={() => store.capture.access.items = {
							animation: !store.capture.access.items.animation,
							armour: store.capture.access.items.armour,
							drug: store.capture.access.items.drug,
							medkit: store.capture.access.items.medkit,
						}}
					>
						<div className="mafia-menu-set-bizwar-conditions-items-content-element-status">
							<div className="mafia-menu-set-bizwar-conditions-items-content-element-status__fill"/>
						</div>
						<img className="mafia-menu-set-bizwar-conditions-items-content-element__icon" src={animation}
						     alt="#"/>
						<div className="mafia-menu-set-bizwar-conditions-items-content-element__title">- Анимации</div>
					</div>
				</div>
			</div>
			<div className="mafia-menu-set-bizwar-conditions-guns">
				<div className="mafia-menu-set-bizwar-conditions-guns__title">Разрешенное оружие</div>
				<div className="mafia-menu-set-bizwar-conditions-guns-content">
					<div
						className={cn('mafia-menu-set-bizwar-conditions-guns-content-element',
							store.capture.access.guns.pistol ? 'mafia-menu-set-bizwar-conditions-guns-content-element_active' : null)}
						onClick={() => store.capture.access.guns = {
							shotgun: store.capture.access.guns.shotgun,
							smg: store.capture.access.guns.smg,
							assault: store.capture.access.guns.assault,
							pistol: !store.capture.access.guns.pistol,
						}}
					>
						<div className="mafia-menu-set-bizwar-conditions-guns-content-element-status">
							<div className="mafia-menu-set-bizwar-conditions-guns-content-element-status__fill"/>
						</div>
						<img className="mafia-menu-set-bizwar-conditions-guns-content-element__icon" src={pistol}
						     alt="#"/>
						<div className="mafia-menu-set-bizwar-conditions-guns-content-element__title">- Пистолеты</div>
					</div>
					<div
						className={cn('mafia-menu-set-bizwar-conditions-guns-content-element',
							store.capture.access.guns.smg ? 'mafia-menu-set-bizwar-conditions-guns-content-element_active' : null)}
						onClick={() => store.capture.access.guns = {
							shotgun: store.capture.access.guns.shotgun,
							smg: !store.capture.access.guns.smg,
							assault: store.capture.access.guns.assault,
							pistol: store.capture.access.guns.pistol,
						}}
					>
						<div className="mafia-menu-set-bizwar-conditions-guns-content-element-status">
							<div className="mafia-menu-set-bizwar-conditions-guns-content-element-status__fill"/>
						</div>
						<img className="mafia-menu-set-bizwar-conditions-guns-content-element__icon" src={smg}
						     alt="#"/>
						<div className="mafia-menu-set-bizwar-conditions-guns-content-element__title">-
							Пистолеты-пулеметы
						</div>
					</div>
					<div
						className={cn('mafia-menu-set-bizwar-conditions-guns-content-element',
							store.capture.access.guns.assault ? 'mafia-menu-set-bizwar-conditions-guns-content-element_active' : null)}
						onClick={() => store.capture.access.guns = {
							shotgun: store.capture.access.guns.shotgun,
							smg: store.capture.access.guns.smg,
							assault: !store.capture.access.guns.assault,
							pistol: store.capture.access.guns.pistol,
						}}
					>
						<div className="mafia-menu-set-bizwar-conditions-guns-content-element-status">
							<div className="mafia-menu-set-bizwar-conditions-guns-content-element-status__fill"/>
						</div>
						<img className="mafia-menu-set-bizwar-conditions-guns-content-element__icon" src={assault}
						     alt="#"/>
						<div className="mafia-menu-set-bizwar-conditions-guns-content-element__title">- Штурмовые
							винтовки
						</div>
					</div>
					<div
						className={cn('mafia-menu-set-bizwar-conditions-guns-content-element',
							store.capture.access.guns.shotgun ? 'mafia-menu-set-bizwar-conditions-guns-content-element_active' : null)}
						onClick={() => store.capture.access.guns = {
							shotgun: !store.capture.access.guns.shotgun,
							smg: store.capture.access.guns.smg,
							assault: store.capture.access.guns.assault,
							pistol: store.capture.access.guns.pistol,
						}}
					>
						<div className="mafia-menu-set-bizwar-conditions-guns-content-element-status">
							<div className="mafia-menu-set-bizwar-conditions-guns-content-element-status__fill"/>
						</div>
						<img className="mafia-menu-set-bizwar-conditions-guns-content-element__icon" src={shotgun}
						     alt="#"/>
						<div className="mafia-menu-set-bizwar-conditions-guns-content-element__title">- Дробовики</div>
					</div>
				</div>
			</div>
			<div className="mafia-menu-set-bizwar-conditions-players">
				<div className="mafia-menu-set-bizwar-conditions-players-input">
					<div className="mafia-menu-set-bizwar-conditions-players-input__title">Выберите <br/>количество
						участников
					</div>
					<div className="mafia-menu-set-bizwar-conditions-players-input-range">
						<img
							className="mafia-menu-set-bizwar-conditions-players-input-range__prev"
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
							className="mafia-menu-set-bizwar-conditions-players-input-range__next"
							src={rightArrow}
							alt="#"
							onClick={() => {
								if (store.capture.count + 1 > 15) store.capture.count = 5;
								else store.capture.count++;
							}}
						/>
					</div>
				</div>
				<div className="mafia-menu-set-bizwar-conditions-players-list">
					<div className="mafia-menu-set-bizwar-conditions-players-list-count">
						<div
							className="mafia-menu-set-bizwar-conditions-players-list-count__attack">{store.capture.count}</div>
						<img className="mafia-menu-set-bizwar-conditions-players-list-count__icon" src={versus}
						     alt="#"/>
						<div
							className="mafia-menu-set-bizwar-conditions-players-list-count__defence">{store.capture.count}</div>
					</div>
					<div className="mafia-menu-set-bizwar-conditions-players-list-content">
						<div className="mafia-menu-set-bizwar-conditions-players-list-content-top">
							{players.map((el, key) => {
								return <img
									key={key}
									className="mafia-menu-set-bizwar-conditions-players-list-content-top__icon"
									src={player}
									alt="#"
									style={el > store.capture.count ? {
										filter: 'brightness(0)',
										opacity: .5,
									} : {filter: 'brightness(1)'}}
								/>;
							})}
						</div>
						<div className="mafia-menu-set-bizwar-conditions-players-list-content-bottom">
							{players.map((el, key) => {
								return <img
									key={key}
									className="mafia-menu-set-bizwar-conditions-players-list-content-bottom__icon"
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
			className="mafia-menu-set-bizwar-submit"
			onClick={() => {
				if (fractionFreezeTime !== 0) store.addNotify('Вы не можете назначить бизвар, находясь на отдыхе');
				else if (!currentFraction) store.addNotify('Выберите фракцию, против которой будет назначен бизвар');
				else if (Object.values(store.capture.access.items).filter(el => el).length === 0 ||
					Object.values(store.capture.access.guns).filter(el => el).length === 0)
					store.addNotify('Установите хотя бы по одному ограничению на предметы и оружие');
				else setPage('changeCaptureList');
			}}
		>
			{fractionFreezeTime !== 0 ? <div className="mafia-menu-set-bizwar-submit-disabled">
				<img className="mafia-menu-set-bizwar-submit-disabled__icon" src={fractionFreeze} alt="#"/>
				<div className="mafia-menu-set-bizwar-submit-disabled__title">Захват через {fractionFreezeTime}</div>
			</div> : <div className="mafia-menu-set-bizwar-submit__title">Далее</div>}
		</div>
	</div>;
};

export default observer(SetBizwar);