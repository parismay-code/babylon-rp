import * as React   from 'react';
import cn           from 'classnames';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import {
	headHairList,
	beardHairList,
	chestHairList,
} from './utils/hairList';

import colors from 'configs/colors';

import arrow from 'assets/images/creator/arrow.svg';

const Hair = ({store}) => {
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'hair', 0, store.data.hair.head);
	}, [store.data.hair.head]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'hair', 2, store.data.hair.chest);
	}, [store.data.hair.chest]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'hair', 3, store.data.hair.beard);
	}, [store.data.hair.beard]);
	
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'color', 0, store.data.color.head);
	}, [store.data.color.head]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'color', 3, store.data.color.chest);
	}, [store.data.color.chest]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'color', 4, store.data.color.beard);
	}, [store.data.color.beard]);
	
	return (
		<div className="player-options">
			<div className="player-options__title">
				<span>настройте параметры растительности</span>
			</div>
			<div className="player-options-list">
				<div key="k_headHairType" className="player-options-list__element select-element">
					<span>тип прически</span>
					<div className="select-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.hair.head -= 1;
							if (store.data.hair.head < 0) store.data.hair.head = headHairList.length - 1;
						}}/>
						<span>{headHairList[store.data.hair.head]}</span>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.hair.head += 1;
							if (store.data.hair.head > headHairList.length - 1) store.data.hair.head = 0;
						}}/>
					</div>
				</div>
				<div style={{height: '5vw'}} key="k_headHairColor"
				     className="player-options-list__element color-element">
					<span>цвет прически</span>
					<div className="color-element__input">
						{
							colors.hair.map((el, key) => {
								if (key < 19) return (
									<div key={key}
									     className={cn('color-element__input-box', store.data.color.head === key && 'active')}
									     style={{backgroundColor: `${el.color}`}}
									     onClick={() => {
										     store.data.color.head = key;
									     }}/>
								);
								else return null;
							})
						}
					</div>
				</div>
				{store.data.sex === 0 && <>
					<div key="k_chestHairType" className="player-options-list__element select-element">
						<span>волосы на груди</span>
						<div className="select-element__input">
							<img className="left-arrow" src={arrow} alt="#" onClick={() => {
								store.data.hair.chest -= 1;
								if (store.data.hair.chest < 0) store.data.hair.chest = store.data.sex === 0 ? chestHairList.length - 1 : 0;
							}}/>
							<span>{chestHairList[store.data.hair.chest]}</span>
							<img className="right-arrow" src={arrow} alt="#" onClick={() => {
								store.data.hair.chest += 1;
								if (store.data.hair.chest > (store.data.sex === 0 ? chestHairList.length - 1 : 0)) store.data.hair.chest = 0;
							}}/>
						</div>
					</div>
					<div style={{height: '5vw'}} key="k_chestHairColor"
					     className="player-options-list__element color-element">
						<span>цвет волос на груди</span>
						<div className="color-element__input">
							{
								colors.hair.map((el, key) => {
									if (key < 19) return (
										<div key={key}
										     className={cn('color-element__input-box', store.data.color.chest === key && 'active')}
										     style={{backgroundColor: `${el.color}`}}
										     onClick={() => {
											     store.data.color.chest = key;
										     }}/>
									);
									else return null;
								})
							}
						</div>
					</div>
					<div key="k_beardHairType" className="player-options-list__element select-element">
						<span>Борода и усы</span>
						<div className="select-element__input">
							<img className="left-arrow" src={arrow} alt="#" onClick={() => {
								store.data.hair.beard -= 1;
								if (store.data.hair.beard < 0) store.data.hair.beard = beardHairList.length - 1;
							}}/>
							<span>{beardHairList[store.data.hair.beard]}</span>
							<img className="right-arrow" src={arrow} alt="#" onClick={() => {
								store.data.hair.beard += 1;
								if (store.data.hair.beard > beardHairList.length - 1) store.data.hair.beard = 0;
							}}/>
						</div>
					</div>
					<div key="k_beardHairColor" className="player-options-list__element color-element">
						<span>цвет бороды</span>
						<div className="color-element__input">
							{
								colors.hair.map((el, key) => {
									if (key < 19) return (
										<div key={key}
										     className={cn('color-element__input-box', store.data.color.beard === key && 'active')}
										     style={{backgroundColor: `${el.color}`}}
										     onClick={() => {
											     store.data.color.beard = key;
										     }}/>
									);
									else return null;
								})
							}
						</div>
					</div>
				</>}
			</div>
		</div>
	);
};

export default observer(Hair);