import * as React   from 'react';
import EventManager from 'utils/eventManager';

import {regExp} from 'utils/regExp';

const BankFinesInfo = ({customEvent, el}) => {
	const price = React.useMemo(() =>
		`$ ${String(el.price).replace(regExp.money, '$1 ')}`, [el.price]);
	
	const handlePay = React.useCallback(() => {
		EventManager.emitServer('bank', 'payFine', el.id);
	}, [el.id]);
	
	return <div className="bank-fines-info">
		<div className="bank-fines-info__description">{el.description}</div>
		<div className="bank-fines-info__structure">{el.structure}</div>
		<div className="bank-fines-info__price">{price}</div>
		<input
			className="bank-fines-info__pay"
			type="submit"
			name="n_finesPay"
			value="оплатить"
			onClick={() => customEvent(handlePay)}
		/>
	</div>;
};

export default React.memo(BankFinesInfo);