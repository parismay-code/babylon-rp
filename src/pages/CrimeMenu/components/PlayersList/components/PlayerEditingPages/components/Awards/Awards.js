import * as React from 'react';
import {observer} from 'mobx-react-lite';

import submitIcon from 'assets/images/crimeMenu/submitIcon.svg';

import {regExp}   from 'utils/regExp';

import './Awards.scss';

const Awards = ({store, editData}) => {
	const field = React.useRef(null);
	
	const handleSubmit = React.useCallback(() => {
		if (field.current.value) {
			window.alt.emit('client::crimeMenu:sendAward', editData.data?.id, field.current.value);
		}
	}, [editData.data?.id]);
	
	return <div className="crime-menu-player-awards">
		<form
			className="crime-menu-player-awards-form"
			name="n_crimeMenuPlayerAwardForm"
			onSubmit={e => {
				e.preventDefault();
				
				handleSubmit();
			}}
		>
			<div className="crime-menu-player-awards-form-title">
				<div className="crime-menu-player-awards-form-title__top">Премия</div>
				<div className="crime-menu-player-awards-form-title__bottom">Введите сумму премии</div>
			</div>
			<div className="crime-menu-player-awards-form-input">
				<input
					ref={field}
					className="crime-menu-player-awards-form-input__field"
					type='number'
					name="n_crimeMenuPlayerAwardFormField"
					placeholder='0'
				/>
				<div className="crime-menu-player-awards-form-input__dollar">$</div>
			</div>
			<div className="crime-menu-player-awards-form-submit" onClick={() => handleSubmit()}>
				<img className="crime-menu-player-awards-form-submit__icon" src={submitIcon} alt="#"/>
			</div>
		</form>
		<div className="crime-menu-player-awards-list">
			<div className="crime-menu-player-awards-list__title">Выдано премий</div>
			<div className="crime-menu-player-awards-list-header">
				<div className="crime-menu-player-awards-list-header__element
				crime-menu-player-awards-list-header__element_count">
					Сумма
				</div>
				<div className="crime-menu-player-awards-list-header__element
				crime-menu-player-awards-list-header__element_from">
					Выдал
				</div>
				<div className="crime-menu-player-awards-list-header__element
				crime-menu-player-awards-list-header__element_date">
					Дата
				</div>
			</div>
			<div className='crime-menu-player-awards-list-content'>
				{store.awardLogs.filter(el => el.to === editData.data?.id).map((el, key) => {
					const count = `${String(el.count).replace(regExp.money, '$1 ')} $`;
					
					return <div key={key} className='crime-menu-player-awards-list-content-element'>
						<div className='crime-menu-player-awards-list-content-element__count'>{count}</div>
						<div className='crime-menu-player-awards-list-content-element__from'>{el.from.id}: {el.from.nickname}</div>
						<div className='crime-menu-player-awards-list-content-element__date'>{el.date}</div>
					</div>
				})}
			</div>
		</div>
	</div>;
};

export default observer(Awards);