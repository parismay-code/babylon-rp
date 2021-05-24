import * as React from 'react';
import {observer} from 'mobx-react-lite';

import {regExp}   from 'utils/regExp';

import './Money.scss';

const Money = ({ player }) => {
	const card = React.useMemo(() =>
		`$ ${String(player.playerState.money.card).replace(regExp.money, '$1 ')}`, [player.playerState.money.card]),
		cash = React.useMemo(() =>
		`$ ${String(player.playerState.money.card).replace(regExp.money, '$1 ')}`, [player.playerState.money.card]);
	
	return <div className='gun-shop-money'>
		<div className='gun-shop-money-bank'>
			<div className='gun-shop-money-bank__value'>{card}</div>
			<div className='gun-shop-money-bank__title'>на карте</div>
		</div>
		<div className='gun-shop-money-cash'>
			<div className='gun-shop-money-cash__value'>{cash}</div>
			<div className='gun-shop-money-cash__title'>наличные</div>
		</div>
	</div>
}

export default observer(Money);