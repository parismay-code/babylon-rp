import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import arrow from 'assets/images/creator/arrow.svg';

const Other = ({store}) => {
	
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 12, store.data.face.lips);
	}, [store.data.face.lips]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 13, store.data.face.jawBoneWidth);
	}, [store.data.face.jawBoneWidth]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 14, store.data.face.jawBoneBackLength);
	}, [store.data.face.jawBoneBackLength]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 19, store.data.face.neckWidth);
	}, [store.data.face.neckWidth]);
	
	return (
		<div className="player-options">
			<div className="player-options__title">
				<span>выберите остальные параметры</span>
			</div>
			<div className="player-options-list">
				<div key="k_lips" className="player-options-list__element range-element">
					<span>толщина губ</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.lips -= 10;
							if (store.data.face.lips < -100) store.data.face.lips = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.lips}
							onChange={(e) => {
								store.data.face.lips = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.lips += 10;
							if (store.data.face.lips > 100) store.data.face.lips = -100;
						}}/>
					</div>
				</div>
				<div key="k_chinWidth" className="player-options-list__element range-element">
					<span>ширина челюсти</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.jawBoneWidth -= 10;
							if (store.data.face.jawBoneWidth < -100) store.data.face.jawBoneWidth = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.jawBoneWidth}
							onChange={(e) => {
								store.data.face.jawBoneWidth = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.jawBoneWidth += 10;
							if (store.data.face.jawBoneWidth > 100) store.data.face.jawBoneWidth = -100;
						}}/>
					</div>
				</div>
				<div key="k_chinHeight" className="player-options-list__element range-element">
					<span>размер челюсти</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.jawBoneBackLength -= 10;
							if (store.data.face.jawBoneBackLength < -100) store.data.face.jawBoneBackLength = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.jawBoneBackLength}
							onChange={(e) => {
								store.data.face.jawBoneBackLength = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.jawBoneBackLength += 10;
							if (store.data.face.jawBoneBackLength > 100) store.data.face.jawBoneBackLength = -100;
						}}/>
					</div>
				</div>
				<div key="k_neckWidth" className="player-options-list__element range-element">
					<span>обхват шеи</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.neckWidth -= 10;
							if (store.data.face.neckWidth < -100) store.data.face.neckWidth = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.neckWidth}
							onChange={(e) => {
								store.data.face.neckWidth = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.neckWidth += 10;
							if (store.data.face.neckWidth > 100) store.data.face.neckWidth = -100;
						}}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default observer(Other);