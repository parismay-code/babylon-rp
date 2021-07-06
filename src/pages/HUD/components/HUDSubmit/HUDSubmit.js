import * as React   from 'react';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import './HUDSubmit.scss';

const HUDSubmit = () => {
	const [visible, setVisible] = React.useState(false),
		[player, setPlayer] = React.useState({nickname: null, id: null}),
		[title, setTitle] = React.useState(null),
		[text, setText] = React.useState(null);
	
	React.useEffect(() => {
		EventManager.addHandler('hud', 'showChoice', (player, title, text) => {
			setVisible(true);
			setPlayer(player);
			setTitle(title);
			setText(text);
		});
		
		EventManager.addHandler('hud', 'closeChoice', () => {
			setVisible(false);
			
			setTimeout(() => {
				setPlayer({nickname: null, id: null});
				setTitle(null);
				setText(null);
			}, 500);
		});
	}, []);
	
	return <div className={cn('hud-submit', visible && 'hud-submit_active')}>
		<div className="hud-submit__nickname">{player.nickname}</div>
		<div className="hud-submit-choice">
			<div className="hud-submit-choice-accept">
				<div className="hud-submit-choice-accept__line hud-submit-choice-accept__line_first"/>
				<div className="hud-submit-choice-accept__line hud-submit-choice-accept__line_second"/>
				<div className="hud-submit-choice-accept__line hud-submit-choice-accept__line_third"/>
				<div className="hud-submit-choice-accept__letter">Y</div>
			</div>
			<div className="hud-submit-choice__id">[{player.id}]</div>
			<div className="hud-submit-choice-decline">
				<div className="hud-submit-choice-decline__line hud-submit-choice-decline__line_first"/>
				<div className="hud-submit-choice-decline__line hud-submit-choice-decline__line_second"/>
				<div className="hud-submit-choice-decline__line hud-submit-choice-decline__line_third"/>
				<div className="hud-submit-choice-decline__letter">N</div>
			</div>
		</div>
		<div className="hud-submit__title">{title}</div>
		<div className="hud-submit__text">{text}</div>
	</div>;
};

export default React.memo(HUDSubmit);