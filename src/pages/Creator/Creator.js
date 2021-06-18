import * as React from 'react';
import cn         from 'classnames';
import {observer} from 'mobx-react-lite';

import CreatorPlayerName       from './components/CreatorPlayerName';
import CreatorPlayerAppearance from './components/CreatorPlayerAppearance';
import CreatorPlayerFace       from './components/CreatorPlayerFace';
import CreatorPlayerClothes    from './components/CreatorPlayerClothes';

import {showNotify}       from './utils/notify';
import {setRandomOptions} from './utils/setRandomOptions';

import mouse from 'assets/images/creator/mouse.svg';

import './Creator.scss';

const Creator = ({store}) => {
	const [optionsPage, setOptionsPage] = React.useState('name');
	
	const navSlider = React.useRef(null);
	
	const navName = React.useRef(null),
		navAppearance = React.useRef(null),
		navFace = React.useRef(null),
		navClothes = React.useRef(null),
		screen = React.useRef(null);
	
	React.useEffect(() => {
		window.alt.emit('client::characterCreator:navigation', optionsPage);
	}, [optionsPage]);
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('creator_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	const handleSwitch = React.useCallback((page) => {
		setOptionsPage(page);
	}, []);
	
	const handleCreate = React.useCallback(() => {
		if (store.data.name.firstname && store.data.name.lastname) {
			showNotify(1, 'Персонаж успешно создан');
			
			window.alt.emit('client::characterCreator:create', store.data);
		} else showNotify(0, 'Укажите имя и фамилию персонажа');
	}, [store.data]);
	
	return (
		<div ref={screen} className="creator">
			<div className="creator__content">
				<div className="creator__title">
					<span>СОздАНиЕ пЕРСОНАжА</span>
					<div
						className="creator__title_random"
						onClick={() => {
							setRandomOptions(store);
							showNotify(1, 'Настройки успешно изменены');
						}}
					>
						<svg
							className="svg_random"
							xmlns="http://www.w3.org/2000/svg"
							width="1.3vw"
							viewBox="0 0 26.883 23.522"
						>
							<path
								d="M26.514,19.421a1.26,1.26,0,0,1,0,1.782l-4.2,4.2a1.261,1.261,0,0,1-2.151-.891v-2.1H17.076a.63.63,0,0,1-.461-.2l-3.7-3.969,2.8-3,2.771,2.969h1.68v-2.1a1.261,1.261,0,0,1,2.151-.891l4.2,4.2ZM.63,9.811h4.41L7.812,12.78l2.8-3L6.907,5.81a.63.63,0,0,0-.461-.2H.63A.63.63,0,0,0,0,6.24v2.94A.63.63,0,0,0,.63,9.811Zm19.532,0v2.1a1.261,1.261,0,0,0,2.151.891l4.2-4.2a1.26,1.26,0,0,0,0-1.782l-4.2-4.2a1.261,1.261,0,0,0-2.151.891v2.1H17.076a.63.63,0,0,0-.461.2L5.041,18.212H.63a.63.63,0,0,0-.63.63v2.94a.63.63,0,0,0,.63.63H6.447a.63.63,0,0,0,.461-.2l11.574-12.4Z"
								fill="#080019"
								opacity="0.2"
							/>
						</svg>
						<span>случайная внешность</span>
					</div>
				</div>
				<div id="id_creatorNotify" className="creator__notify"/>
				<div className="creator__navigation">
					<div
						className={cn('creator__navigation-element', optionsPage === 'name' ? 'active' : undefined)}
						ref={navName}
						onClick={() => handleSwitch('name')}
					>
						иМя и пол
					</div>
					<div
						className={cn(
							'creator__navigation-element',
							optionsPage === 'appearance' ? 'active' : undefined,
						)}
						ref={navAppearance}
						onClick={() => handleSwitch('appearance')}
					>
						внешность
					</div>
					<div
						className={cn(
							'creator__navigation-element',
							optionsPage === 'face' ? 'active' : undefined,
						)}
						ref={navFace}
						onClick={() => handleSwitch('face')}
					>
						лицо
					</div>
					<div
						className={cn(
							'creator__navigation-element',
							optionsPage === 'clothes' ? 'active' : undefined,
						)}
						ref={navClothes}
						onClick={() => handleSwitch('clothes')}
					>
						одежда
					</div>
					<div className="creator__navigation-create" onClick={handleCreate}>
						СоздАть
					</div>
					<div
						style={
							navName?.current
								? optionsPage === 'name'
								? {
									left: `${navName.current.offsetLeft + 10}px`,
									width: `${navName.current.offsetWidth - 20}px`,
								}
								: optionsPage === 'appearance'
									? {
										left: `${navAppearance.current.offsetLeft + 10}px`,
										width: `${navAppearance.current.offsetWidth - 20}px`,
									}
									: optionsPage === 'face'
										? {
											left: `${navFace.current.offsetLeft + 10}px`,
											width: `${navFace.current.offsetWidth - 20}px`,
										}
										: optionsPage === 'clothes'
											? {
												left: `${navClothes.current.offsetLeft + 10}px`,
												width: `${navClothes.current.offsetWidth - 20}px`,
											}
											: null
								: null
						}
						ref={navSlider}
						className="creator__navigation-slider"
					/>
				</div>
				{optionsPage === 'name' && <CreatorPlayerName store={store}/>}
				{optionsPage === 'appearance' && (
					<CreatorPlayerAppearance store={store}/>
				)}
				{optionsPage === 'face' && <CreatorPlayerFace store={store}/>}
				{optionsPage === 'clothes' && <CreatorPlayerClothes store={store}/>}
				<div className="creator__player-name">
					<span>{store.data.name.firstname}</span>
					<span>{store.data.name.lastname}</span>
				</div>
				<div className="creator-rotate">
					<div className="creator-rotate__title">
						ПКМ вращать -
					</div>
					<img
						className="creator-rotate__icon"
						src={mouse}
						alt="#"
					/>
				</div>
			</div>
		</div>
	);
};

export default observer(Creator);
