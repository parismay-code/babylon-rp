import * as React   from 'react';
import EventManager from 'utils/eventManager';

import './Dialogue.scss';

const Dialogue = ({data}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('dialogue_active'), 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div ref={screen} className="dialogue">
		<div className="dialogue-content">
			<div className="dialogue-content-header">
				<div className="dialogue-content-header__name">{data.name}</div>
				<div className="dialogue-content-header__title">{data.title}</div>
				<div className="dialogue-content-header__question">{data.question}</div>
			</div>
			<div className="dialogue-content-answers">
				{data.answers.map((el, key) => {
					return <div
						key={key}
						className="dialogue-content-answers__element"
						onClick={() => EventManager.emitServer('dialogue', 'sendAnswer', el)}
					>
						- {el}
					</div>;
				})}
			</div>
		</div>
		<div className="dialogue-exit">
			<div className="dialogue-exit__button">Esc</div>
			<span className="dialogue-exit__text">- выход</span>
		</div>
	</div>;
};

export default React.memo(Dialogue);