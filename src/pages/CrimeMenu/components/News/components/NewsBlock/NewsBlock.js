import * as React from 'react';
import cn         from 'classnames';

import removeIcon from 'assets/images/crimeMenu/removeIcon.svg';

import './NewsBlock.scss';

const NewsBlock = ({el, id, handleRemove, currentBlock, setBlock}) => {
	const text = React.useMemo(() => {
		let _text = el.text.split('');
		
		if (_text.length > 80 && currentBlock !== id) {
			_text.splice(80);
			_text.push('...');
		}
		
		return _text.join('');
	}, [currentBlock, el.text, id]);
	
	return <div
		className={cn('crime-hud-news-block', currentBlock === id ? 'crime-hud-news-block_active' : null)}
		onClick={() => setBlock(id)}
	>
		<div className="crime-hud-news-block__date">{el.date}</div>
		<div className="crime-hud-news-block__text">{text}</div>
		<img className="crime-hud-news-block__remove" src={removeIcon} alt="#" onClick={e => {
			e.stopPropagation();
			handleRemove(id);
		}}/>
	</div>;
};

export default React.memo(NewsBlock);