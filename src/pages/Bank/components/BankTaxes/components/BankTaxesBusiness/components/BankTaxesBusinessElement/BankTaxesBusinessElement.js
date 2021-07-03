import * as React   from 'react';
import EventManager from 'utils/eventManager';

import business from 'assets/images/bank/business.svg';
import arrow    from 'assets/images/bank/arrow.svg';

import {regExp} from 'utils/regExp';

const BankTaxesBusinessElement = ({customEvent, id, price, payed, name}) => {
	const vip = React.useMemo(() => true, []);
	const maxDays = React.useMemo(() => vip ? 14 : 7, [vip]);
	
	const [days, setDays] = React.useState(maxDays - payed);
	
	React.useEffect(() => {
		if (days > maxDays - payed) setDays(0);
		else if (days < 0) setDays(maxDays - payed);
	}, [days, maxDays, payed]);
	
	const money = React.useMemo(() =>
		`$${String(price).replace(regExp.money, '$1 ')}`, [price]);
	
	const handlePay = React.useCallback(() => {
		EventManager.emitServer('bank', 'payBusinessTax', id, days, days * price);
	}, [days, id, price]);
	
	return <div className="bank-taxes-business-element">
		<div className="bank-taxes-business-element-header">
			<div className="bank-taxes-business-element-header-house">
				<img className="bank-taxes-business-element-header-house__image" src={business} alt="#"/>
				<span className="bank-taxes-business-element-header-house__id">{name}</span>
			</div>
			<div className="bank-taxes-business-element-header-info">
				<div className="bank-taxes-business-element-header-info__price">{money}</div>
				<div className="bank-taxes-business-element-header-info-description">
					<div className="bank-taxes-business-element-header-info-description__title">списание</div>
					<div className="bank-taxes-business-element-header-info-description__subtitle">сут.</div>
				</div>
				<div className="bank-taxes-business-element-header-info__payed">{payed}</div>
				<div className="bank-taxes-business-element-header-info-description">
					<div className="bank-taxes-business-element-header-info-description__title">оплачено</div>
					<div className="bank-taxes-business-element-header-info-description__subtitle">сут.</div>
				</div>
			</div>
		</div>
		
		<div className="bank-taxes-business-element-content">
			<div className="bank-taxes-business-element-content-input">
				<span className="bank-taxes-business-element-content-input__title">Кол-во дней для оплаты</span>
				<div className="bank-taxes-business-element-content-input-range">
					<img
						className="bank-taxes-business-element-content-input-range__left-arrow"
						src={arrow}
						alt="#"
						onClick={() => setDays(days => days - 1)}
					/>
					<input
						type="range"
						name="n_bankTaxesInputRange"
						min="0"
						max={maxDays - payed}
						value={days}
						onChange={(e) => setDays(Number(e.target.value))}
					/>
					<img
						className="bank-taxes-business-element-content-input-range__right-arrow"
						src={arrow}
						alt="#"
						onClick={() => setDays(days => days + 1)}
					/>
				</div>
			</div>
			<div className="bank-taxes-business-element-content__days">{days}</div>
			<div className="bank-taxes-business-element-content-count">
				<span className="bank-taxes-business-element-content-count__price">{days * price}</span>
				<span className="bank-taxes-business-element-content-count__dollar">$</span>
			</div>
			<input
				className="bank-taxes-business-element-content__buy"
				type="submit"
				name="n_bankTaxesBuy"
				value="оплатить"
				onClick={() => {
					customEvent(handlePay);
				}}
			/>
		</div>
	</div>;
};

export default React.memo(BankTaxesBusinessElement);