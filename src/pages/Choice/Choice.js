import * as React from 'react';
import cn         from 'classnames';

import ChoiceCharacterCard from './components/ChoiceCharacterCard';

import deleteScreen1 from 'assets/images/choice/deleteScreen1.svg';
import deleteScreen2 from 'assets/images/choice/deleteScreen2.svg';

import './Choice.scss';

const Choice = ({characters}) => {
	const [currentCard, setCurrentCard] = React.useState(),
		[deleteCharId, setDeleteCharId] = React.useState(null);
	
	const screen = React.useRef(null);
	
	const currentScreen = React.useMemo(() => {
		if (Math.round(Math.random()) === 0) return deleteScreen1;
		else return deleteScreen2;
	}, []);
	
	React.useEffect(() => {
		window.alt.on('cef::choice:deleteChar', () => {
			setDeleteCharId(null);
			window.alt.emit('client::choice:deleteCharScreenActive', false);
		});
		
		const timeout = setTimeout(() => screen.current.classList.add('choice_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return (
		<div ref={screen} className="choice">
			<div className="choice-content">
				<span className="choice-content__title">выбОР пЕРСОНАжА</span>
				<div className="choice-content-characters">
					{characters?.map((el, key) => {
						return (
							<ChoiceCharacterCard
								key={key}
								id={key}
								el={el}
								setCurrentCard={setCurrentCard}
								currentCard={currentCard}
								setDeleteCharId={setDeleteCharId}
							/>
						);
					})}
				</div>
			</div>
			<div
				className={cn('choice-delete-char-screen', deleteCharId !== null ? 'choice-delete-char-screen_visible' : null)}>
				<img className="choice-delete-char-screen__bg" src={currentScreen} alt="#"/>
				<div className="choice-delete-char-screen-content">
					<div className="choice-delete-char-screen-content__title">
						вы действительно хотите <span className="choice-delete-char-screen-content__title_orange">удалить персонажа </span>
						<span
							className="choice-delete-char-screen-content__title_blue">{characters[deleteCharId]?.nickname.firstname} {characters[deleteCharId]?.nickname.lastname} </span>
						без возможности восстановления?
					</div>
					<div className="choice-delete-char-screen-content-choose">
						<div
							className="choice-delete-char-screen-content-choose-element"
							onClick={() => {
								window.alt.emit('client::choice:deleteCharScreenActive', false);
								setDeleteCharId(null);
							}}
						>
							<div className="choice-delete-char-screen-content-choose-element__box">N</div>
							<span className="choice-delete-char-screen-content-choose-element__title"> - нет</span>
						</div>
						<div
							className="choice-delete-char-screen-content-choose-element"
							onClick={() => {
								window.alt.emit('client::choice:deleteCharScreenActive', false);
								window.alt.emit('client::choice:deleteChar');
								setDeleteCharId(null);
							}}
						>
							<div className="choice-delete-char-screen-content-choose-element__box">Y</div>
							<span className="choice-delete-char-screen-content-choose-element__title"> - да</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Choice);