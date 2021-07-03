import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import BankWithdrawHistory from './components/BankWithdrawHistory';

import {regExp} from 'utils/regExp';

import './BankWithdraw.scss';

const BankWithdraw = ({customEvent, store, player}) => {
	const balance = React.useMemo(() =>
		`$ ${String(player.playerState.money.card).replace(regExp.money, '$1 ')}`, [player.playerState.money.card]);
	
	const input = React.useRef(null);
	
	const handleWithdraw = React.useCallback(() => {
		EventManager.emitServer('bank', 'withdraw', input.current.value);
	}, []);
	
	return <div className="bank-withdraw">
		<div className="bank-withdraw-header">
			<div className="bank-withdraw-header-info">
				<div className="bank-withdraw-header-info-balance">
					<div className="bank-withdraw-header-info-balance__title">Баланс</div>
					<div className="bank-withdraw-header-info-balance__subtitle">{balance}</div>
				</div>
				<div className="bank-withdraw-header-info-card">
					<div className="bank-withdraw-header-info-card__title">{player.playerState.bank.name}
						<b>{player.playerState.bank.type}</b></div>
					<div className="bank-withdraw-header-info-card__subtitle"># {player.playerState.bank.account}</div>
				</div>
			</div>
			<div className="bank-withdraw-header-form">
				<div className="bank-withdraw-header-form__description">
					Введите сумму, которую <br/>хотите обналичить
				</div>
				<div className="bank-withdraw-header-form-input">
					<input className="bank-withdraw-header-form-input__count" type="number" name="n_withdrawCount"
					       placeholder="Сумма" ref={input}/>
					<input
						className="bank-withdraw-header-form-input__submit"
						type="submit"
						name="n_withdrawSubmit"
						value="Снять"
						onClick={() => {
							if (input.current.value) customEvent(handleWithdraw);
						}}
					/>
				</div>
			</div>
		</div>
		<BankWithdrawHistory store={store}/>
	</div>;
};

export default observer(BankWithdraw);