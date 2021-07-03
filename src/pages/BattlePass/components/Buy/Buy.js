import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import confetti from 'assets/images/battlePass/confetti.svg';
import tower    from 'assets/images/battlePass/tower.svg';

import './Buy.scss';

const Buy = () => {
	return <div className="battle-pass-content-buy">
		<img className="battle-pass-content-buy__confetti" src={confetti} alt="#"/>
		<img className="battle-pass-content-buy__tower" src={tower} alt="#"/>
		<div className="battle-pass-content-buy-content">
			<div className="battle-pass-content-buy-content__battle">
				<span>b</span>
				<span>a</span>
				<span>t</span>
				<span>t</span>
				<span>l</span>
				<span>e</span>
			</div>
			<div
				className="battle-pass-content-buy-content__button"
				onClick={() => {
					EventManager.emitServer('battlePass', 'buy');
				}}
			>купить
			</div>
			<div className="battle-pass-content-buy-content__pass">
				<span>P</span>
				<span>a</span>
				<span>s</span>
				<span>s</span>
			</div>
			<div className="battle-pass-content-buy-content-exit">
				<div className="battle-pass-content-buy-content-exit__button">Esc</div>
				<span className="battle-pass-content-buy-content-exit__text">- выход</span>
			</div>
			<div className="battle-pass-content-buy-content__flare"/>
		</div>
	</div>;
};

export default observer(Buy);