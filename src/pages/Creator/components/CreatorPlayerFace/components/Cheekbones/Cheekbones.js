import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import arrow from 'assets/images/creator/arrow.svg';

const Cheekbones = ({store}) => {
	
	React.useEffect(() => {
		EventManager.emitClient('characterCreator', 'preview', 'face', 8, store.data.face.cheekboneHeight);
	}, [store.data.face.cheekboneHeight]);
	React.useEffect(() => {
		EventManager.emitClient('characterCreator', 'preview', 'face', 9, store.data.face.cheekboneWidth);
	}, [store.data.face.cheekboneWidth]);
	
	return (
		<div className="player-options">
			<div className="player-options__title">
				<span>выберите параметры скул</span>
			</div>
			<div className="player-options-list">
				<div key="k_cheekbonesHeight" className="player-options-list__element range-element">
					<span>высота</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.cheekboneHeight -= 10;
							if (store.data.face.cheekboneHeight < -100) store.data.face.cheekboneHeight = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.cheekboneHeight}
							onChange={(e) => {
								store.data.face.cheekboneHeight = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.cheekboneHeight += 10;
							if (store.data.face.cheekboneHeight > 100) store.data.face.cheekboneHeight = -100;
						}}/>
					</div>
				</div>
				<div key="k_cheekbonesWidth" className="player-options-list__element range-element">
					<span>ширина</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.cheekboneWidth -= 10;
							if (store.data.face.cheekboneWidth < -100) store.data.face.cheekboneWidth = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.cheekboneWidth}
							onChange={(e) => {
								store.data.face.cheekboneWidth = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.cheekboneWidth += 10;
							if (store.data.face.cheekboneWidth > 100) store.data.face.cheekboneWidth = -100;
						}}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default observer(Cheekbones);