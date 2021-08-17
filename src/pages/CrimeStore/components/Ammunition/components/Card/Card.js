import * as React   from 'react';
import EventManager from 'utils/eventManager';

import whiteWithdraw from 'assets/images/crimeStore/whiteWithdraw.svg';
import whiteTopUp    from 'assets/images/crimeStore/whiteTopUp.svg';
import submit        from 'assets/images/crimeStore/submit.svg';

const Card = ({el}) => {
	const [type, setType] = React.useState('default');
	
	const withdrawInput = React.useRef(null),
		topUpInput = React.useRef(null);
	
	return <div className="crime-store-ammunition-list-element">
		<div className="crime-store-ammunition-list-element-info">
			<img
				className="crime-store-ammunition-list-element-info__image"
				src={`./publicImages/crimeStore/${el.icon}`}
				alt="#"
			/>
			<div className="crime-store-ammunition-list-element-info__title">
				{el.name}
			</div>
			<div className="crime-store-ammunition-list-element-info__count">
				{el.count} ед.
			</div>
		</div>
		<div className="crime-store-ammunition-list-element-buttons">
			<div
				className="crime-store-ammunition-list-element-buttons-withdraw"
				onClick={() => setType('withdraw')}
			>
				{type === 'withdraw' ?
					<form
						className="crime-store-ammunition-list-element-buttons-withdraw-form"
						name="n_crimeStoreAmmunitionForm"
						onSubmit={e => {
							e.preventDefault();
							if (withdrawInput.current.value) EventManager.emitServer('crimeStore', 'withdraw', el.key, withdrawInput.current.value);
							setType('default');
						}}
					>
						<input
							ref={withdrawInput}
							className="crime-store-ammunition-list-element-buttons-withdraw-form__input"
							type="number"
							name="n_crimeStoreAmmunitionFormWithdrawInput"
							placeholder="кол-во"
						/>
						<div
							className="crime-store-ammunition-list-element-buttons-withdraw-form-submit"
							onClick={e => {
								e.stopPropagation();
								if (withdrawInput.current.value) EventManager.emitServer('crimeStore', 'withdraw', el.key, withdrawInput.current.value);
								setType('default');
							}}
						>
							<img
								className="crime-store-ammunition-list-element-buttons-withdraw-form-submit__icon"
								src={submit}
								alt="#"
							/>
						</div>
					</form> :
					<>
						<img
							className="crime-store-ammunition-list-element-buttons-withdraw__icon"
							src={whiteWithdraw}
							alt="#"
						/>
						<div className="crime-store-ammunition-list-element-buttons-withdraw__title">взять
						</div>
					</>
				}
			</div>
			<div
				className="crime-store-ammunition-list-element-buttons-top-up"
				onClick={() => setType('topUp')}
			>
				{type === 'topUp' ?
					<form
						className="crime-store-ammunition-list-element-buttons-top-up-form"
						name="n_crimeStoreAmmunitionTopUpForm"
						onSubmit={e => {
							e.preventDefault();
							if (topUpInput.current.value) EventManager.emitServer('crimeStore', 'topUp', el.key, topUpInput.current.value);
							setType('default');
						}}
					>
						<input
							ref={topUpInput}
							className="crime-store-ammunition-list-element-buttons-top-up-form__input"
							type="number"
							name="n_crimeStoreAmmunitionFormTopUpInput"
							placeholder="кол-во"
						/>
						<div
							className="crime-store-ammunition-list-element-buttons-top-up-form-submit"
							onClick={e => {
								e.stopPropagation();
								if (topUpInput.current.value) EventManager.emitServer('crimeStore', 'topUp', el.key, topUpInput.current.value);
								setType('default');
							}}
						>
							<img
								className="crime-store-ammunition-list-element-buttons-top-up-form-submit__icon"
								src={submit}
								alt="#"
							/>
						</div>
					</form> :
					<>
						<img
							className="crime-store-ammunition-list-element-buttons-top-up__icon"
							src={whiteTopUp}
							alt="#"
						/>
						<div className="crime-store-ammunition-list-element-buttons-top-up__title">положить
						</div>
					</>
				}
			</div>
		</div>
	</div>;
};

export default React.memo(Card);