import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import arrow from 'assets/images/creator/arrow.svg';

const Cheeks = ({store}) => {
	React.useEffect(() => {
		EventManager.emitClient('creator' ,'preview', 'face', 10, store.data.face.cheekWidth);
	}, [store.data.face.cheekWidth]);
	
	return (
		<div className="player-options">
			<div className="player-options__title">
				<span>выберите параметры щёк</span>
			</div>
			<div className="player-options-list">
				<div key="k_cheeksDeep" className="player-options-list__element range-element">
					<span>глубина</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.cheekWidth -= 10;
							if (store.data.face.cheekWidth < -100) store.data.face.cheekWidth = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.face.cheekWidth}
							onChange={(e) => {
								store.data.face.cheekWidth = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.face.cheekWidth += 10;
							if (store.data.face.cheekWidth > 100) store.data.face.cheekWidth = -100;
						}}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default observer(Cheeks);