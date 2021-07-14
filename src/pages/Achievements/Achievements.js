import * as React from 'react';
import {observer} from 'mobx-react-lite';

import AchievementElement from './components/AchievementElement';

import star  from 'assets/images/achievements/star.svg';
import arrow from 'assets/images/achievements/arrow.svg';

import './Achievements.scss';

const Achievements = ({player, setComponent}) => {
	const [firstLastScrollTop, setFirstLastScrollTop] = React.useState(0),
		[secondLastScrollTop, setSecondLastScrollTop] = React.useState(0),
		[thirdLastScrollTop, setThirdLastScrollTop] = React.useState(0),
		[fourthLastScrollTop, setFourthLastScrollTop] = React.useState(0);
	
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		screen.current.classList.add('achievements_active')
	}, []);
	
	const handleFirstScroll = React.useCallback(e => {
			if (e.scrollTop > firstLastScrollTop) {
				setFirstLastScrollTop(firstLastScrollTop + 180);
				e.scrollTop = firstLastScrollTop + 180;
			} else if (e.scrollTop < firstLastScrollTop) {
				if (firstLastScrollTop === 0) return;
				setFirstLastScrollTop(firstLastScrollTop - 180);
				e.scrollTop = firstLastScrollTop - 180;
			}
		}, [firstLastScrollTop]),
		handleSecondScroll = React.useCallback(e => {
			if (e.scrollTop > secondLastScrollTop) {
				setSecondLastScrollTop(secondLastScrollTop + 180);
				e.scrollTop = secondLastScrollTop + 180;
			} else if (e.scrollTop < secondLastScrollTop) {
				if (secondLastScrollTop === 0) return;
				setSecondLastScrollTop(secondLastScrollTop - 180);
				e.scrollTop = secondLastScrollTop - 180;
			}
		}, [secondLastScrollTop]),
		handleThirdScroll = React.useCallback(e => {
			if (e.scrollTop > thirdLastScrollTop) {
				setThirdLastScrollTop(thirdLastScrollTop + 180);
				e.scrollTop = thirdLastScrollTop + 180;
			} else if (e.scrollTop < thirdLastScrollTop) {
				if (thirdLastScrollTop === 0) return;
				setThirdLastScrollTop(thirdLastScrollTop - 180);
				e.scrollTop = thirdLastScrollTop - 180;
			}
		}, [thirdLastScrollTop]),
		handleFourthScroll = React.useCallback(e => {
			if (e.scrollTop > fourthLastScrollTop) {
				setFourthLastScrollTop(fourthLastScrollTop + 180);
				e.scrollTop = fourthLastScrollTop + 180;
			} else if (e.scrollTop < fourthLastScrollTop) {
				if (fourthLastScrollTop === 0) return;
				setFourthLastScrollTop(fourthLastScrollTop - 180);
				e.scrollTop = fourthLastScrollTop - 180;
			}
		}, [fourthLastScrollTop]);
	
	return <div ref={screen} className="achievements">
		<div
			className="achievements-back"
			onClick={() => setComponent('mainMenu')}
		>
			<img className="achievements-back__arrow" src={arrow} alt='#'/>
			<div className="achievements-back__title">Достижения</div>
		</div>
		<div className="achievements-column achievements-column_purple">
			<div className="achievements-column-top">
				<div className="achievements-column-top-block">
					<div className="achievements-column-top-block__fill"/>
				</div>
				<img className="achievements-column-top__star" src={star} alt="#"/>
			</div>
			<div className="achievements-column-title">
				<svg
					className="achievements-column-title__icon"
					width="139.839"
					height="152.281"
					viewBox="0 0 139.839 152.281"
					style={{filter: 'drop-shadow(0 0 10px #7700FF)'}}
				>
					<defs>
						<linearGradient id="purpleGradient" x1="0.938" y1="0.774" x2="0" y2="0.225">
							<stop offset="0" stopColor="#c373f3"/>
							<stop offset="1" stopColor="#aab6ef"/>
						</linearGradient>
					</defs>
					<g transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							d="M-6605.919-5364.86-6606-5411l39.837-23,39.918,23.141.083,46.141-39.839,23Zm7.565-41.709.066,37.3,29.287,16.977v-71.227ZM-6563-5352.3l29.192-16.853-.065-37.3L-6563-5423.338Z"
							transform="translate(6636 5464)" fill="url(#purpleGradient)"/>
					</g>
				</svg>
				<div className="achievements-column-title__text">Общие</div>
			</div>
			<div
				className="achievements-column-content"
				onScroll={e => handleFirstScroll(e.target)}
			>
				{player.playerState.achievements.default.map((el, key) => {
					return <AchievementElement key={key} el={el} type="default"/>;
				})}
			</div>
		</div>
		<div className="achievements-column achievements-column_red">
			<div className="achievements-column-title">
				<svg
					className="achievements-column-title__icon"
					width="139.839"
					height="152.281"
					viewBox="0 0 139.839 152.281"
					style={{filter: 'drop-shadow(0 0 10px #FF5E62)'}}
				>
					<defs>
						<linearGradient id="redGradient" x1="0.938" y1="0.774" x2="0" y2="0.225">
							<stop offset="0" stopColor="#FF5E62"/>
							<stop offset="1" stopColor="#FF9966"/>
						</linearGradient>
					</defs>
					<g transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							d="M-6605.919-5364.86-6606-5411l39.837-23,39.918,23.141.083,46.141-39.839,23Zm7.565-41.709.066,37.3,29.287,16.977v-71.227ZM-6563-5352.3l29.192-16.853-.065-37.3L-6563-5423.338Z"
							transform="translate(6636 5464)" fill="url(#redGradient)"/>
					</g>
				</svg>
				<div className="achievements-column-title__text">Организации</div>
			</div>
			<div
				className="achievements-column-content"
				onScroll={e => handleSecondScroll(e.target)}
			>
				{player.playerState.achievements.fraction.map((el, key) => {
					return <AchievementElement key={key} el={el} type="fraction"/>;
				})}
			</div>
		</div>
		<div className="achievements-column achievements-column_yellow">
			<div className="achievements-column-title">
				<svg
					className="achievements-column-title__icon"
					width="139.839"
					height="152.281"
					viewBox="0 0 139.839 152.281"
					style={{filter: 'drop-shadow(0 0 10px #FFD4A2)'}}
				>
					<defs>
						<linearGradient id="yellowGradient" x1="0.938" y1="0.774" x2="0" y2="0.225">
							<stop offset="0" stopColor="#FFA743"/>
							<stop offset="1" stopColor="#FFEF84"/>
						</linearGradient>
					</defs>
					<g transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							d="M-6605.919-5364.86-6606-5411l39.837-23,39.918,23.141.083,46.141-39.839,23Zm7.565-41.709.066,37.3,29.287,16.977v-71.227ZM-6563-5352.3l29.192-16.853-.065-37.3L-6563-5423.338Z"
							transform="translate(6636 5464)" fill="url(#yellowGradient)"/>
					</g>
				</svg>
				<div className="achievements-column-title__text">Работы</div>
			</div>
			<div
				className="achievements-column-content"
				onScroll={e => handleThirdScroll(e.target)}
			>
				{player.playerState.achievements.job.map((el, key) => {
					return <AchievementElement key={key} el={el} type="job"/>;
				})}
			</div>
		</div>
		<div className="achievements-column achievements-column_blue">
			<div className="achievements-column-title">
				<svg
					className="achievements-column-title__icon"
					width="139.839"
					height="152.281"
					viewBox="0 0 139.839 152.281"
					style={{filter: 'drop-shadow(0 0 10px #AAB6EF)'}}
				>
					<defs>
						<linearGradient id="blueGradient" x1="0.938" y1="0.774" x2="0" y2="0.225">
							<stop offset="0" stopColor="#718AFF"/>
							<stop offset="1" stopColor="#AAB6EF"/>
						</linearGradient>
					</defs>
					<g transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							d="M-6605.919-5364.86-6606-5411l39.837-23,39.918,23.141.083,46.141-39.839,23Zm7.565-41.709.066,37.3,29.287,16.977v-71.227ZM-6563-5352.3l29.192-16.853-.065-37.3L-6563-5423.338Z"
							transform="translate(6636 5464)" fill="url(#blueGradient)"/>
					</g>
				</svg>
				<div className="achievements-column-title__text">Особые</div>
			</div>
			<div
				className="achievements-column-content"
				onScroll={e => handleFourthScroll(e.target)}
			>
				{player.playerState.achievements.special.map((el, key) => {
					return <AchievementElement key={key} el={el} type="special"/>;
				})}
			</div>
		</div>
	</div>;
};

export default observer(Achievements);