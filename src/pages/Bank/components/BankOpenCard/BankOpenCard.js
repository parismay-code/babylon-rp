import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import BankOpenCardElement from './components/BankOpenCardElement';

import './BankOpenCard.scss';

const BankOpenCard = ({store, setCardType, setNotifyVisible}) => {
	const openCard = React.useCallback((type) => {
		setCardType(type);
		setNotifyVisible(true);
		EventManager.emitClient('bank', 'openCardStatus', true);
	}, [setCardType, setNotifyVisible]);
	
	return <div className="bank-open-card">
		{store.cards.map((el, key) => {
			return <BankOpenCardElement
				key={key}
				el={el}
				handleClick={openCard}
			/>;
		})}
	</div>;
};

export default observer(BankOpenCard);