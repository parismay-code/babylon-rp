import * as React from 'react';
import {observer} from 'mobx-react-lite';

import './Score.scss';

const Score = ({store}) => {
	const [timer, setTimer] = React.useState(300);
	
	const attackColor = React.useMemo(() => {
		switch (store.teams.attack.name) {
			case 'Vagos':
				return '#FFFF36';
			case 'Ballas':
				return '#FF00EE';
			default:
				return null;
		}
	}, [store.teams.attack.name]);
	const defenceColor = React.useMemo(() => {
		switch (store.teams.defence.name) {
			case 'Vagos':
				return '#FFFF36';
			case 'Ballas':
				return '#FF00EE';
			default:
				return null;
		}
	}, [store.teams.defence.name]);
	
	React.useEffect(() => {
		let time = store.battleTimer;
		
		const interval = setInterval(() => {
			const minutes = time / 60 % 60;
			const seconds = time % 60;
			
			if (time <= 0) {
				clearInterval(interval);
				
				window.alt.emit('client::capture:end');
			} else setTimer(`${Math.trunc(minutes)}:${Math.trunc(seconds)}`);
			
			time -= 1;
		}, 1000);
		
		return () => clearInterval(interval);
	}, [store.battleTimer]);
	
	return <div className="crime-hud-score">
		<div className="crime-hud-score-attack">
			<div className="crime-hud-score-attack-players">
				{store.teams.attack.players.slice().sort((a, b) => b.isDead - a.isDead).map((el, key) =>
					<div
						key={key}
						className="crime-hud-score-attack-players__element"
						style={el.isDead ? {backgroundColor: '#000000', opacity: .7} :
							{backgroundColor: attackColor}}
					/>
				)}
				<div className='crime-hud-score-attack-players__count'>{store.teams.attack.players.filter(el => !el.isDead).length}</div>
			</div>
		</div>
		<div className="crime-hud-score-timer">
			<div className="crime-hud-score-timer__value">{timer}</div>
			<div className="crime-hud-score-timer__title">babylOn</div>
		</div>
		<div className="crime-hud-score-defence">
			<div className="crime-hud-score-defence-players">
				{store.teams.defence.players.slice().sort((a, b) => b.isDead - a.isDead).map((el, key) =>
					<div
						key={key}
						className="crime-hud-score-defence-players__element"
						style={el.isDead ? {backgroundColor: '#000000', opacity: .7} :
							{backgroundColor: defenceColor}}
					/>
				)}
				<div className='crime-hud-score-defence-players__count'>{store.teams.defence.players.filter(el => !el.isDead).length}</div>
			</div>
		</div>
	</div>;
};

export default observer(Score);