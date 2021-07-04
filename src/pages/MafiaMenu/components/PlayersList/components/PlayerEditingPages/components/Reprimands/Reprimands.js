import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import reprimandIcon from 'assets/images/crimeMenu/reprimandIcon.svg';

import './Reprimands.scss';

const Reprimands = ({store, editData}) => {
	const [reprimandType, setReprimandType] = React.useState(0);
	
	const field = React.useRef(null);
	
	const handleSubmit = React.useCallback(() => {
		if (field.current.value) {
			EventManager.emitServer('mafiaMenu', 'sendReprimand', editData.data?.id, reprimandType, field.current.value);
		}
	}, [editData.data?.id, reprimandType]);
	
	return <div className="mafia-menu-player-reprimands">
		<div className="mafia-menu-player-reprimands__title">Объявить/снять выговор</div>
		<form
			className="mafia-menu-player-reprimands-form"
			name="n_mafiaMenuPlayerReprimandsForm"
			onSubmit={e => {
				e.preventDefault();
				
				handleSubmit();
			}}
		>
			<div className="mafia-menu-player-reprimands-form-radio">
				<div
					className="mafia-menu-player-reprimands-form-radio-element"
					onClick={() => setReprimandType(0)}
				>
					<div
						className={
							cn('mafia-menu-player-reprimands-form-radio-element-box',
								reprimandType ? null : 'mafia-menu-player-reprimands-form-radio-element-box_active')
						}
					>
						<div className="mafia-menu-player-reprimands-form-radio-element-box__fill"/>
					</div>
					<div className="mafia-menu-player-reprimands-form-radio-element__title">- объявить</div>
				</div>
				<div
					className="mafia-menu-player-reprimands-form-radio-element"
					onClick={() => setReprimandType(1)}
				>
					<div
						className={
							cn('mafia-menu-player-reprimands-form-radio-element-box',
								reprimandType ? 'mafia-menu-player-reprimands-form-radio-element-box_active' : null)
						}
					>
						<div className="mafia-menu-player-reprimands-form-radio-element-box__fill"/>
					</div>
					<div className="mafia-menu-player-reprimands-form-radio-element__title">- снять</div>
				</div>
			</div>
			<div className="mafia-menu-player-reprimands-form-input">
				<input
					ref={field}
					className="mafia-menu-player-reprimands-form-input__field"
					type="text"
					name="n_mafiaMenuPlayerReprimandsFormField"
					placeholder="Введите причину"
				/>
			</div>
			<div className="mafia-menu-player-reprimands-form-submit" onClick={() => handleSubmit()}>
				<img className="mafia-menu-player-reprimands-form-submit__icon" src={reprimandIcon} alt="#"/>
			</div>
		</form>
		<div className="mafia-menu-player-reprimands-list">
			<div className="mafia-menu-player-reprimands-list-header">
				<div className="mafia-menu-player-reprimands-list-header__element
				mafia-menu-player-reprimands-list-header__element_from">
					Выдал/Снял
				</div>
				<div className="mafia-menu-player-reprimands-list-header__element
				mafia-menu-player-reprimands-list-header__element_reason">
					Причина
				</div>
				<div className="mafia-menu-player-reprimands-list-header__element
				mafia-menu-player-reprimands-list-header__element_action">
					Операция
				</div>
			</div>
			<div className="mafia-menu-player-reprimands-list-content">
				{store.reprimandLogs.filter(el => el.to === editData.data?.id).map((el, key) => {
					return <div key={key} className="mafia-menu-player-reprimands-list-content-element">
						<div className="mafia-menu-player-reprimands-list-content-element-from">
							{el.from.id}: {el.from.nickname}
							<br/>
							<span
								className="mafia-menu-player-reprimands-list-content-element-from__date">{el.date}</span>
						</div>
						<div className="mafia-menu-player-reprimands-list-content-element__reason">{el.reason}</div>
						<div
							className="mafia-menu-player-reprimands-list-content-element__action"
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