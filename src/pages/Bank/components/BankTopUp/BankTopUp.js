import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import BankTopUpHistory from './components/BankTopUpHistory';

import {regExp} from 'utils/regExp';

import './BankTopUp.scss';

const BankTopUp = ({customEvent, store, player}) => {
	const input = React.useRef(null);
	
	const balance = React.useMemo(() => `$ ${String(player.playerState.money.card).replace(regExp.money, '$1 ')}`, [player.playerState.money.card]);
	
	const handleTopUp = React.useCallback(() => {
		EventManager.emitServer('bank', 'topUp', input.current.value);
	}, []);
	
	return <div className="bank-top-up">
		<div className="bank-top-up-header">
			<div className="bank-top-up-header-info">
				<div className="bank-top-up-header-info-balance">
					<div className="bank-top-up-header-info-balance__title">Баланс</div>
					<div className="bank-top-up-header-info-balance__subtitle">{balance}</div>
				</div>
				<div className="bank-top-up-header-info-card">
					<div className="bank-top-up-header-info-card__title">{player.playerState.bank.name}
						<b>{player.playerState.bank.type}</b></div>
					<div className="bank-top-up-header-info-card__subtitle"># {player.playerState.bank.account}</div>
				</div>
			</div>
			<div className="bank-top-up-header-form">
				<div className="bank-top-up-header-form__description">
					Введите сумму, на которую <br/>хотите пополнить счет
				</div>
				<div className="bank-top-up-header-form-input">
					<input className="bank-top-up-header-form-input__count" type="number" name="n_topUpCount"
					       placeholder="Сумма" ref={input}/>
					<input
						className="bank-top-up-header-form-input__submit"
						type="submit"
						name="n_topUpSubmit"
						value="Пополнить"
						onClick={() => {
							if (input.current.value) customEvent(handleTopUp);
						}}
					/>
				</div>
			</div>
		</div>
		<BankTopUpHistory store={store}/>
	</div>;
};

export default observer(BankTopUp);