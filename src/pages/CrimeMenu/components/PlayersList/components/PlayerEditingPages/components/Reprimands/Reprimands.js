import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import reprimandIcon from 'assets/images/crimeMenu/reprimandIcon.svg';

import {regExp} from 'utils/regExp';

import './Reprimands.scss';

const Reprimands = ({store, editData}) => {
	const [reprimandType, setReprimandType] = React.useState(0);
	
	const field = React.useRef(null);
	
	const handleSubmit = React.useCallback(() => {
		if (field.current.value) {
			window.alt.emit('client::crimeMenu:sendReprimand', editData.data?.id, reprimandType, field.current.value);
		}
	}, [editData.data?.id, reprimandType]);
	
	return <div className="crime-menu-player-reprimands">
		<div className="crime-menu-player-reprimands__title">Объявить/снять выговор</div>
		<form
			className="crime-menu-player-reprimands-form"
			name="n_crimeMenuPlayerReprimandsForm"
			onSubmit={e => {
				e.preventDefault();
				
				handleSubmit();
			}}
		>
			<div className="crime-menu-player-reprimands-form-radio">
				<div
					className="crime-menu-player-reprimands-form-radio-element"
					onClick={() => setReprimandType(0)}
				>
					<div
						className={
							cn('crime-menu-player-reprimands-form-radio-element-box',
								reprimandType ? null : 'crime-menu-player-reprimands-form-radio-element-box_active')
						}
					>
						<div className="crime-menu-player-reprimands-form-radio-element-box__fill"/>
					</div>
					<div className="crime-menu-player-reprimands-form-radio-element__title">- объявить</div>
				</div>
				<div
					className="crime-menu-player-reprimands-form-radio-element"
					onClick={() => setReprimandType(1)}
				>
					<div
						className={
							cn('crime-menu-player-reprimands-form-radio-element-box',
								reprimandType ? 'crime-menu-player-reprimands-form-radio-element-box_active' : null)
						}
					>
						<div className="crime-menu-player-reprimands-form-radio-element-box__fill"/>
					</div>
					<div className="crime-menu-player-reprimands-form-radio-element__title">- снять</div>
				</div>
			</div>
			<div className="crime-menu-player-reprimands-form-input">
				<input
					ref={field}
					className="crime-menu-player-reprimands-form-input__field"
					type="text"
					name="n_crimeMenuPlayerReprimandsFormField"
					placeholder="Введите причину"
				/>
			</div>
			<div className="crime-menu-player-reprimands-form-submit" onClick={() => handleSubmit()}>
				<img className="crime-menu-player-reprimands-form-submit__icon" src={reprimandIcon} alt="#"/>
			</div>
		</form>
		<div className="crime-menu-player-reprimands-list">
			<div className="crime-menu-player-reprimands-list-header">
				<div className="crime-menu-player-reprimands-list-header__element
				crime-menu-player-reprimands-list-header__element_from">
					Выдал/Снял
				</div>
				<div className="crime-menu-player-reprimands-list-header__element
				crime-menu-player-reprimands-list-header__element_reason">
					Причина
				</div>
				<div className="crime-menu-player-reprimands-list-header__element
				crime-menu-player-reprimands-list-header__element_action">
					Операция
				</div>
			</div>
			<div className="crime-menu-player-reprimands-list-content">
				{store.reprimandLogs.filter(el => el.to === editData.data?.id).map((el, key) => {
					return <div key={key} className="crime-menu-player-reprimands-list-content-element">
						<div className="crime-menu-player-reprimands-list-content-element-from">
							{el.from.id}: {el.from.nickname}
							<br/>
							<span
								className="crime-menu-player-reprimands-list-content-element-from__date">{el.date}</span>
						</div>
						<div className="crime-menu-player-reprimands-list-content-element__reason">{el.reason}</div>
						<div
							className="crime-menu-player-reprimands-list-content-element__action"
							style={el.type ? {color: '#B4F191'} : {color: '#FFAC4E'}}
						>
							{el.type ? 'снял' : 'объявил'}
						</div>
					</div>;
				})}
			</div>
		</div>
	</div>;
};

export default observer(Reprimands);