import * as React from 'react';
import cn         from 'classnames';

import SpawnChoiceBlock from './components/SpawnChoiceBlock';

import lastPosChar from 'assets/images/spawnChoice/lastPosChar.png';
import lastPosBg   from 'assets/images/spawnChoice/lastPosBg.png';
import houseChar   from 'assets/images/spawnChoice/houseChar.png';
import houseBg     from 'assets/images/spawnChoice/houseBg.png';
import fracChar    from 'assets/images/spawnChoice/fracChar.png';
import fracBg      from 'assets/images/spawnChoice/fracBg.png';
import familyChar  from 'assets/images/spawnChoice/familyChar.png';
import familyBg    from 'assets/images/spawnChoice/familyBg.png';
import aeroChar    from 'assets/images/spawnChoice/aeroChar.png';
import aeroBg      from 'assets/images/spawnChoice/aeroBg.png';
import trainChar   from 'assets/images/spawnChoice/trainChar.png';
import trainBg     from 'assets/images/spawnChoice/trainBg.png';
import busChar     from 'assets/images/spawnChoice/busChar.png';
import busBg       from 'assets/images/spawnChoice/busBg.png';

import './spawnChoice.scss';

const SpawnChoice = ({player}) => {
	const [currentComponent, setCurrentComponent] = React.useState(0),
		[nextComponent, setNextComponent] = React.useState(0),
		[currentOption, setCurrentOption] = React.useState(0);
	
	const getImage = React.useMemo(() => {
			switch (currentComponent) {
				case 0:
					return {char: lastPosChar, bg: lastPosBg};
				case 1:
					return {char: houseChar, bg: houseBg};
				case 2:
					return {char: fracChar, bg: fracBg};
				case 3:
					return {char: familyChar, bg: familyBg};
				case 4:
					switch (currentOption) {
						case 0:
							return {char: aeroChar, bg: aeroBg};
						case 1:
							return {char: trainChar, bg: trainBg};
						case 2:
							return {char: busChar, bg: busBg};
						default:
							return;
					}
				default:
					return;
			}
		}, [currentComponent, currentOption]),
		customStyle = React.useMemo(() => {
			if (currentComponent === 4) {
				switch (currentOption) {
					case 0:
						return {height: '150px', top: '20%', transform: 'translateX(-150px)'};
					case 1:
						return {height: '350px', top: '39%', transform: 'translateX(-70px)'};
					case 2:
						return {height: '600px', top: '12%', transform: 'translateX(-80px)'};
					default:
						return;
				}
			}
		}, [currentComponent, currentOption]);
	
	const slider = React.useRef(null),
		elNextTitle = React.useRef(null),
		elCurrentTitle = React.useRef(null),
		exitPointElement = React.useRef(null),
		screen = React.useRef(null),
		charImage = React.useRef(null),
		bgImage = React.useRef(null);
	
	React.useEffect(() => {
		charImage.current.classList.toggle('spawn-choice-location-frame__char_right');
		bgImage.current.style.filter = 'blur(2px)';
		
		charImage.current.style.transition = 'transform .5s ease';
		charImage.current.style.opacity = 0;
		
		const timeout = setTimeout(() => {
			charImage.current.style.transition = 'transform .5s ease, opacity .2s .1s';
			charImage.current.style.opacity = '1';
		}, 50);
		
		return () => clearTimeout(timeout);
	}, [currentOption, currentComponent]);
	
	const handleMoveSlider = React.useCallback((e) => {
		slider.current.style.width = `${e.target.offsetWidth + 20}px`;
		slider.current.style.left = `${e.target.offsetLeft - 10}px`;
		
		elCurrentTitle.current.style.transition = 'margin .2s ease, opacity .2s ease .1s';
		elNextTitle.current.style.transition = 'opacity .1s ease .3s';
		
		elCurrentTitle.current.style.marginLeft = '35%';
		elCurrentTitle.current.style.opacity = '0';
		elNextTitle.current.style.opacity = '1';
		
		setTimeout(() => {
			setCurrentComponent(nextComponent);
			elCurrentTitle.current.style.marginLeft = '0';
			
			elCurrentTitle.current.style.transition = 'opacity .1s';
			elNextTitle.current.style.transition = 'opacity .1s';
			
			elCurrentTitle.current.style.opacity = '1';
			elNextTitle.current.style.opacity = '0';
		}, 310);
	}, [nextComponent, slider, elNextTitle, elCurrentTitle]);
	
	React.useEffect(() => {
		if (slider.current && exitPointElement.current) {
			slider.current.style.width = `${exitPointElement.current.offsetWidth + 20}px`;
			slider.current.style.left = `${exitPointElement.current.offsetLeft - 10}px`;
		}
	}, [slider, exitPointElement]);
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('spawn-choice_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	const spawnData = React.useMemo(() => [
		{
			id: 0,
			title: 'МЕСтО выхОДА',
			description: 'При выборе точки возрождения "место выхода" вы возродитесь на месте последнего пребывания на сервере',
			note: false,
			data: null,
		},
		{
			id: 1,
			title: 'ДОМ',
			description: 'При выборе точки возрождения "дом" вы возродитесь в одном из выбранных домов',
			note: true,
			data: player.playerState.houses.length > 0 ? player.playerState.houses : undefined,
		},
		{
			id: 2,
			title: 'ОРгАНизАциЯ',
			description: 'При выборе точки возрождения "организация" вы возродитесь на месте спавна организации, в которой вы состоите',
			note: true,
			data: player.playerState.fraction.name ? null : undefined,
		},
		{
			id: 3,
			title: 'СЕМьЯ',
			description: 'При выборе точки возрождения "семья" вы возродитесь в семейном доме',
			note: true,
			data: player.playerState.family.name ? null : undefined,
		},
		{
			id: 4,
			title: 'НАЧАЛЬНЫЕ',
			description: 'При выборе точки возрождения "начальные" вам доступны три станции возрождения',
			note: true,
			data: [{id: 0}, {id: 1}, {id: 2}],
		},
	], [player.playerState.family, player.playerState.fraction, player.playerState.houses]);
	
	return (
		<div ref={screen} className="spawn-choice">
			<div className="spawn-choice-location-frame">
				<img
					ref={bgImage}
					className="spawn-choice-location-frame__bg"
					src={getImage.bg}
					alt="#"
					onLoad={e => setTimeout(() => e.target.style.filter = 'blur(0)', 300)}
				/>
				<img
					ref={charImage}
					className="spawn-choice-location-frame__char spawn-choice-location-frame__char_right"
					src={getImage.char}
					alt="#"
					style={customStyle}
				/>
			</div>
			<div className="spawn-choice__title">выбЕРитЕ тОчку вОзРОжДЕНиЯ</div>
			<div className="spawn-choice-navigation">
				<ul className="spawn-choice-navigation-list">
					{spawnData.filter(el => el.data !== undefined).map((el, key) => {
						if (key === 0) return <li
							key={key}
							ref={exitPointElement}
							className={cn('spawn-choice-navigation-list__element', currentComponent === key && 'active')}
							onMouseOver={() => {
								setNextComponent(el.id);
							}}
							onClick={(e) => handleMoveSlider(e)}
						>{el.title}</li>;
						else return <li
							key={key}
							className={cn('spawn-choice-navigation-list__element', currentComponent === key && 'active')}
							onMouseOver={() => {
								setNextComponent(el.id);
							}}
							onClick={(e) => handleMoveSlider(e)}
						>{el.title}</li>;
					})}
				</ul>
				<div
					className="spawn-choice-navigation__slider"
					ref={slider}
				/>
			</div>
			<div className="spawn-choice-info">
				<span className="spawn-choice-info__title">точка возрождения</span>
				<div className="spawn-choice-info-container prev-container">
					<SpawnChoiceBlock
						nextTitle={spawnData[nextComponent].title}
						currComponent={spawnData[currentComponent]}
						elNextTitle={elNextTitle}
						elCurrentTitle={elCurrentTitle}
						currentOption={currentOption}
						setCurrentOption={setCurrentOption}
					/>
				</div>
			</div>
			<div
				className="spawn-choice-play"
				onClick={() => {
					let result;
					
					if (spawnData[currentComponent].data) {
						result = {
							place: currentComponent,
							data: spawnData[currentComponent].data[currentOption].id,
						};
					} else result = {
						place: currentComponent,
					};
					
					window.alt.emit('client::spawnChoice:choose', result);
				}}>
				<div className="spawn-choice-play__title">играть</div>
				<div className="spawn-choice-play__slider"/>
			</div>
		</div>
	);
};

export default React.memo(SpawnChoice);