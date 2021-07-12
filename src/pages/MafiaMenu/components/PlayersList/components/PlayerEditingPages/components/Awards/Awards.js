import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import submitIcon from 'assets/images/crimeMenu/submitIcon.svg';

import {regExp} from 'utils/regExp';

import './Awards.scss';

const Awards = ({store, editData}) => {
	const field = React.useRef(null);
	
	const handleSubmit = React.useCallback(() => {
		if (field.current.value) {
			EventManager.emitServer('fraction', 'sendAward', editData.data?.id, field.current.value);
		}
	}, [editData.data?.id]);
	
	return <div className="mafia-menu-player-awards">
		<form
			className="mafia-menu-player-awards-form"
			name="n_mafiaMenuPlayerAwardForm"
			onSubmit={e => {
				e.preventDefault();
				
				handleSubmit();
			}}
		>
			<div className="mafia-menu-player-awards-form-title">
				<div className="mafia-menu-player-awards-form-title__top">Премия</div>
				<div className="mafia-menu-player-awards-form-title__bottom">Введите сумму премии</div>
			</div>
			<div className="mafia-menu-player-awards-form-input">
				<input
					ref={field}
					className="mafia-menu-player-awards-form-input__field"
					type="number"
					name="n_mafiaMenuPlayerAwardFormField"
					placeholder="0"
				/>
				<div className="mafia-menu-player-awards-form-input__dollar">$</div>
			</div>
			<div className="mafia-menu-player-awards-form-submit" onClick={() => handleSubmit()}>
				<img className="mafia-menu-player-awards-form-submit__icon" src={submitIcon} alt="#"/>
			</div>
		</form>
		<div className="mafia-menu-player-awards-list">
			<div className="mafia-menu-player-awards-list__title">Выдано премий</div>
			<div className="mafia-menu-player-awards-list-header">
				<div className="mafia-menu-player-awards-list-header__element
				mafia-menu-player-awards-list-header__element_count">
					Сумма
				</div>
				<div className="mafia-menu-player-awards-list-header__element
				mafia-menu-player-awards-list-header__element_from">
					Выдал
				</div>
				<div className="mafia-menu-player-awards-list-header__element
				mafia-menu-player-awards-list-header__element_date">
					Дата
				</div>
			</div>
			<div className="mafia-menu-player-awards-list-content">
				{store.awardLogs.filter(el => el.to === editData.data?.id).map((el, key) => {
					const count = `${String(el.count).replace(regExp.money, '$1 ')} $`;
					
					return <div key={key} className="mafia-menu-player-awards-list-content-element">
						<div className="mafia-menu-player-awards-list-content-element__count">{count}</div>
						<div
							className="mafia-menu-player-awards-list-content-element__from">{el.from.id}: {el.from.nickname}</div>
						<div className="mafia-menu-player-awards-list-content-element__date">{el.date}</div>
					</div>;
				})}
			</div>
		</div>
	</div>;
};

export default observer(Awards);