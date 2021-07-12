import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import arrow from 'assets/images/crimeMenu/arrow.svg';

const RankCategory = ({store, el, id}) => {
	const [isOpened, setOpened] = React.useState(false);
	
	const rank = React.useMemo(() => store.ranks.length - id, [id, store.ranks.length]);
	
	return <div
		className={cn('mafia-menu-ranks-content-category',
			isOpened ? 'mafia-menu-ranks-content-category_active' : null)}
	>
		<div
			className="mafia-menu-ranks-content-category-header"
			onClick={() => {
				setOpened(!isOpened);
			}}
		>
			<div className="mafia-menu-ranks-content-category-header__rank">{rank}</div>
			<div className="mafia-menu-ranks-content-category-header__rank-name">{el.name}</div>
			<img className="mafia-menu-ranks-content-category-header__icon" src={arrow} alt="#"/>
		</div>
		<div className="mafia-menu-ranks-content-category-content">
			{el.access.map((el, key) => {
				return <div
					key={key}
					className="mafia-menu-ranks-content-category-content-element"
					onClick={() => {
						el.status = !el.status;
						
						EventManager.emitServer('fraction', 'changeRank', rank, store.ranks[rank - 1]);
					}}
				>
					<div
						className={
							cn('mafia-menu-ranks-content-category-content-element-box',
								el.status ? 'mafia-menu-ranks-content-category-content-element-box_active' : null)
						}
					>
						<div className="mafia-menu-ranks-content-category-content-element-box__fill"/>
					</div>
					<div
						className="mafia-menu-ranks-content-category-content-element__title">- {el.name}</div>
				</div>;
			})}
		</div>
	</div>;
};

export default observer(RankCategory);