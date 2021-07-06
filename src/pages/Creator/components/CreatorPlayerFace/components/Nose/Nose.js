import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import arrow from 'assets/images/creator/arrow.svg';

const Nose = ({store}) => {
	
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 0, store.data.face.noseWidth);
	}, [store.data.face.noseWidth]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 1, store.data.face.nosePeakHeight);
	}, [store.data.face.nosePeakHeight]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 2, store.data.face.nosePeakLength);
	}, [store.data.face.nosePeakLength]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 3, store.data.face.noseBoneHeight);
	}, [store.data.face.noseBoneHeight]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 4, store.data.face.nosePeakLowering);
	}, [store.data.face.nosePeakLowering]);
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'face', 5, store.data.face.noseBoneTwist);
	}, [store.data.face.noseBoneTwist]);
	
	return (
		<div className="player-options">
			<div className="player-options__title">
				<span>выберите параметры носа</span>
			</div>
			<div className="player-options-list">
				<div key="k_noseWidth" className="player-options-list__element range-element">
					<span>ширина</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.noseWidth -= 10;
							if (store.data.face.noseWidth < -100) store.data.face.noseWidth = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.noseWidth}
							onChange={(e) => {
								store.data.face.noseWidth = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.noseWidth += 10;
							if (store.data.face.noseWidth > 100) store.data.face.noseWidth = -100;
						}}/>
					</div>
				</div>
				<div key="k_noseLength" className="player-options-list__element range-element">
					<span>высота</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.nosePeakHeight -= 10;
							if (store.data.face.nosePeakHeight < -100) store.data.face.nosePeakHeight = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.nosePeakHeight}
							onChange={(e) => {
								store.data.face.nosePeakHeight = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.nosePeakHeight += 10;
							if (store.data.face.nosePeakHeight > 100) store.data.face.nosePeakHeight = -100;
						}}/>
					</div>
				</div>
				<div key="k_noseHeight" className="player-options-list__element range-element">
					<span>длина</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.nosePeakLength -= 10;
							if (store.data.face.nosePeakLength < 0) store.data.face.nosePeakLength = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.nosePeakLength}
							onChange={(e) => {
								store.data.face.nosePeakLength = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.nosePeakLength += 10;
							if (store.data.face.nosePeakLength > 100) store.data.face.nosePeakLength = 0;
						}}/>
					</div>
				</div>
				<div key="k_noseTip" className="player-options-list__element range-element">
					<span>глубина моста</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.noseBoneHeight -= 10;
							if (store.data.face.noseBoneHeight < -100) store.data.face.noseBoneHeight = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.noseBoneHeight}
							onChange={(e) => {
								store.data.face.noseBoneHeight = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.noseBoneHeight += 10;
							if (store.data.face.noseBoneHeight > 100) store.data.face.noseBoneHeight = -100;
						}}/>
					</div>
				</div>
				<div key="k_noseBridge" className="player-options-list__element range-element">
					<span>длина кончика</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.nosePeakLowering -= 10;
							if (store.data.face.nosePeakLowering < -100) store.data.face.nosePeakLowering = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.nosePeakLowering}
							onChange={(e) => {
								store.data.face.nosePeakLowering = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.nosePeakLowering += 10;
							if (store.data.face.nosePeakLowering > 100) store.data.face.nosePeakLowering = -100;
						}}/>
					</div>
				</div>
				<div key="k_noseBridgeShaft" className="player-options-list__element range-element">
					<span>поломанность носа</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.noseBoneTwist -= 10;
							if (store.data.face.noseBoneTwist < -100) store.data.face.noseBoneTwist = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.noseBoneTwist}
							onChange={(e) => {
								store.data.face.noseBoneTwist = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.noseBoneTwist += 10;
							if (store.data.face.noseBoneTwist > 100) store.data.face.noseBoneTwist = -100;
						}}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default observer(Nose);