import * as React   from 'react';
import EventManager from 'utils/eventManager';

import taxiPrice from 'assets/images/jobs/taxiPrice.svg';

import './TaxiPrice.scss';

const TaxiPrice = () => {
	const input = React.useRef(null);
	
	return <div className="job-taxi-price">
		<img className="job-taxi-price__bg" src={taxiPrice} alt="#"/>
		<div className="job-taxi-price-content">
			<div className="job-taxi-price-content-header">
				<div className="job-taxi-price-content-header__title">Стоимость поездки</div>
				<div className="job-taxi-price-content-header__subtitle">установите цену</div>
			</div>
			<input
				ref={input}
				className="job-taxi-price-content__input"
				type="number"
				name="n_taxiPriceInput"
				placeholder="Введите цену"
				onChange={e => {
					if (Number(e.target.value) > 1000) e.target.value = '1000';
					else if (Number(e.target.value) < 0) e.target.value = '0';
				}}
			/>
			<div className="job-taxi-price-content__description">
				Цена может быть установлена в пределах от 0 до 1000 $
			</div>
		</div>
		<div
			className="job-taxi-price__submit"
			onClick={() => {
				if (input.current.value)
					EventManager.emitServer('jobs', 'setTaxiPrice', input.current.value);
			}}
		>
			подтвердить
		</div>
	</div>;
};

export default React.memo(TaxiPrice);