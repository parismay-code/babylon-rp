import * as React from 'react';
import cn         from 'classnames';

import Awards     from './components/Awards';
import Reprimands from './components/Reprimands';
import StoreLogs  from './components/StoreLogs';

import './PlayerEditingPages.scss';

const PlayerEditingPages = ({store, editData}) => {
	const [currentComponent, setComponent] = React.useState('awards');
	
	return <div className="crime-menu-player-editing-pages">
		<div className="crime-menu-player-editing-pages-navigation">
			<div
				className={
					cn('crime-menu-player-editing-pages-navigation__element',
						currentComponent === 'awards' ? 'crime-menu-player-editing-pages-navigation__element_active' : null)
				}
				onClick={() => setComponent('awards')}
			>Премия
			</div>
			<div
				className={
					cn('crime-menu-player-editing-pages-navigation__element',
						currentComponent === 'storeLogs' ? 'crime-menu-player-editing-pages-navigation__element_active' : null)
				}
				onClick={() => setComponent('storeLogs')}
			>Действия
			</div>
			<div
				className={
					cn('crime-menu-player-editing-pages-navigation__element',
						currentComponent === 'reprimands' ? 'crime-menu-player-editing-pages-navigation__element_active' : null)
				}
				onClick={() => setComponent('reprimands')}
			>Выговоры
			</div>
		</div>
		{currentComponent === 'awards' && <Awards store={store} editData={editData}/>}
		{currentComponent === 'storeLogs' && <StoreLogs store={store} editData={editData}/>}
		{currentComponent === 'reprimands' && <Reprimands store={store} editData={editData}/>}
	</div>;
};

export default React.memo(PlayerEditingPages);