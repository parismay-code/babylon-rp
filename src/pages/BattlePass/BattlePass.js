import * as React   from 'react';
import EventManager from 'utils/eventManager';

import Buy       from './components/Buy';
import QuestCard from './components/QuestCard';
import AwardCard from './components/AwardCard';

import coin from 'assets/images/battlePass/coin.svg';

import './BattlePass.scss';

const BattlePass = ({store}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('battle-pass_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	React.useEffect(() => {
		EventManager.addHandler('battlePass', 'setQuests', data => store.fetchQuests(data));
		EventManager.addHandler('battlePass', 'setAwards', data => store.fetchAwards(data));
		EventManager.addHandler('battlePass', 'setSeason', name => store.setSeason(name));
		EventManager.addHandler('battlePass', 'setCoins', value => store.setSeason(value));
		
		EventManager.stopAddingHandlers('battlePass');
		
		return () => EventManager.removeTargetHandlers('battlePass');
	}, [store]);
	
	return <div ref={screen} className="battle-pass">
		<div className="battle-pass-content">
			<Buy/>
			<div className="battle-pass-content-season">
				<div className="battle-pass-content-season__title">Сезон: {store.season}</div>
				<div className="battle-pass-content-season-coins">
					<div className="battle-pass-content-season-coins-value">
						<img className="battle-pass-content-season-coins-value__icon" src={coin} alt="#"/>
						<div className="battle-pass-content-season-coins-value-text">
							<div className="battle-pass-content-season-coins-value-text__title">{store.coins}</div>
							<div className="battle-pass-content-season-coins-value-text__subtitle">babicOin</div>
						</div>
					</div>
					<div className="battle-pass-content-season-coins__buy">купить babicOin</div>
				</div>
				<div className="battle-pass-content-season-quests">
					<div className="battle-pass-content-season-quests__title">ЗАДАНИЯ battlePass</div>
					<div className="battle-pass-content-season-quests-list">
						{store.quests.map((el, key) => {
							return <QuestCard key={key} data={el}/>;
						})}
					</div>
				</div>
				<div className="battle-pass-content-season-awards">
                    <span className="battle-pass-content-season-awards-title">
                        <span className="battle-pass-content-season-awards-title__premium">Premium</span>
                        <span className="battle-pass-content-season-awards-title__free">Free</span>
                    </span>
					<div className="battle-pass-content-season-awards-content">
						{store.awards.map((el, key) => {
							return <AwardCard key={key} data={el} day={key + 1}/>;
						})}
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default React.memo(BattlePass);