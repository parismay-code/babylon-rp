import * as React from 'react';
import {observer} from 'mobx-react-lite';

import NewsBlock from './components/NewsBlock';

import sendIcon from 'assets/images/crimeMenu/sendIcon.svg';

import './News.scss';

const News = ({store}) => {
	const [currentBlock, setBlock] = React.useState(null);
	
	const field = React.useRef(null);
	
	const handleSubmit = React.useCallback(() => {
			if (field.current.value) {
				window.alt.emit('client::crimeMenu:changeNews', 'add', field.current.value);
				
				field.current.value = '';
				field.current.blur();
			}
		}, []),
		handleRemove = React.useCallback(id => {
			window.alt.emit('client::crimeMenu:changeNews', 'remove', id);
		}, []);
	
	return <div className="crime-menu-news">
		<form
			className="crime-menu-news-header"
			name="n_crimeMenuNewsForm"
			autoComplete="off"
			onSubmit={e => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<div className="crime-menu-news-header__title">Новости</div>
			<div className="crime-menu-news-header-post">
				<input
					ref={field}
					className="crime-menu-news-header-post__field"
					type="text"
					name="n_crimeMenuNewsFormField"
					maxLength="90"
					placeholder="Введите текст сообщения, его увидят все участники"
				/>
				<img
					className="crime-menu-news-header-post__icon"
					src={sendIcon}
					alt="#"
					onClick={() => handleSubmit()}
				/>
			</div>
		</form>
		<div className="crime-menu-news-list">
			{store.news.map((el, key) => {
				return <NewsBlock
					key={key}
					id={key}
					el={el}
					handleRemove={handleRemove}
					currentBlock={currentBlock}
					setBlock={setBlock}
				/>;
			})}
		</div>
	</div>;
};

export default observer(News);