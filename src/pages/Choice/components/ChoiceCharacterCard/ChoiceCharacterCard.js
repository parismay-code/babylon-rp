import * as React   from 'react';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import {regExp} from 'utils/regExp';

import arrow        from 'assets/images/choice/arrow.svg';
import lockIcon     from 'assets/images/choice/lockIcon.svg';
import maleGov      from 'assets/images/choice/maleGov.svg';
import maleFree     from 'assets/images/choice/maleFree.svg';
import maleLspd1    from 'assets/images/choice/maleLspd1.svg';
// import maleLspd2    from 'assets/images/choice/maleLspd2.svg';
import maleCrime1   from 'assets/images/choice/maleCrime1.svg';
// import maleCrime2   from 'assets/images/choice/maleCrime2.svg';
import femaleGov    from 'assets/images/choice/femaleGov.svg';
import femaleFree   from 'assets/images/choice/femaleFree.svg';
import femaleLspd1  from 'assets/images/choice/femaleLspd1.svg';
// import femaleLspd2  from 'assets/images/choice/femaleLspd2.svg';
import femaleCrime1 from 'assets/images/choice/femaleCrime1.svg';
// import femaleCrime2 from 'assets/images/choice/femaleCrime2.svg';

import money from 'assets/images/hud/money.svg';
import bank  from 'assets/images/hud/bank.svg';

import deleteIcon from 'assets/images/choice/deleteIcon.svg';

import './ChoiceCard.scss';

const ChoiceCharacterCard = ({el, id, currentCard, setCurrentCard, setDeleteCharId}) => {
	const cash = React.useMemo(() =>
			`$ ${String(el?.property?.cash).replace(regExp.money, '$1 ')}`, [el?.property?.cash]),
		card = React.useMemo(() =>
			`$ ${String(el?.property?.card).replace(regExp.money, '$1 ')}`, [el?.property?.card]);
	
	const getImage = React.useCallback(() => {
		if (el?.gender === 0) {
			if (el?.fraction?.type === 0) return maleGov;
			else if (el?.fraction?.type === 1) return maleLspd1;
			else if (el?.fraction?.type === 2) return maleCrime1;
			else return maleFree;
		} else {
			if (el.fraction.type === 0) return femaleGov;
			else if (el?.fraction?.type === 1) return femaleLspd1;
			else if (el?.fraction?.type === 2) return femaleCrime1;
			else return femaleFree;
		}
	}, [el?.gender, el?.fraction?.type]);
	
	switch (el?.type) {
		case 0:
			return (
				<div className={cn('choice-character-card', currentCard === id && 'card-active')}
				     onClick={() => {
					     EventManager.emitClient('characterChoice', 'create');
				     }}
				>
					<div className="choice-character-card-blank">
						<span>+</span>
						<span>создать персонажа</span>
					</div>
				</div>
			);
		case 1:
			return (
				<div className="choice-character-card" style={{overflow: 'hidden'}}>
					<div className="choice-character-card_lock"/>
					<div className="choice-character-card-locked">
						<img src={lockIcon} alt="#"/>
						<span>
                            для разблокировки слота Активируйте <b>Prime</b>, который вы можете приобрести во внутриигровом магазине
                        </span>
					</div>
				</div>
			);
		case 2:
			return (
				<div
					className="choice-character-card"
					onClick={() => {
						setCurrentCard(id);
						EventManager.emitClient('characterChoice', 'setPreview', id);
					}}
				>
					<div className="choice-character-card-header">
						<div className="choice-character-card-header-level">
							<span className="choice-character-card-header-level__value">{el?.level}</span>
							<span className="choice-character-card-header-level__title">уровень</span>
						</div>
						<div className="choice-character-card-header-cash">
							<img className="choice-character-card-header-cash__icon" src={money} alt="#"/>
							<span className="choice-character-card-header-cash__value">{cash}</span>
						</div>
						<div className="choice-character-card-header-card">
							<img className="choice-character-card-header-card__icon" src={bank} alt="#"/>
							<span className="choice-character-card-header-card__value">{card}</span>
						</div>
						{
							el?.fraction?.type === -1 ? <></> :
								<div className="choice-character-card-header__fraction-icon">
									{
										el?.fraction?.type === 0 ?
											<svg xmlns="http://www.w3.org/2000/svg" width="14.875" height="17"
											     viewBox="0 0 14.875 17">
												<path id="id_govIcon"
												      d="M17.755,10.637V17.72H12.443V16.3h-4.6V17.72H2.88V10.637ZM14.55,9.346a4.063,4.063,0,0,0-1.385-2.267,7.862,7.862,0,0,0-2.489-1.046h0V3.791l.186-.05.406-.151a3.9,3.9,0,0,1,.445-.128,1.457,1.457,0,0,1,.313-.049,2.426,2.426,0,0,1,.5.064c.2.049.415.1.633.162s.43.121.626.165a2.148,2.148,0,0,0,.474.061,3.426,3.426,0,0,0,.666-.091V1.209a2.426,2.426,0,0,1-.667.131,1.986,1.986,0,0,1-.478-.067c-.2-.038-.4-.1-.625-.162q-.3-.091-.614-.158a1.886,1.886,0,0,0-.453-.068,3.314,3.314,0,0,0-1.413.3V.72H9.963V6.033H9.941A7.939,7.939,0,0,0,7.453,7.1,4.1,4.1,0,0,0,6.066,9.316a.576.576,0,0,0-.679.612h9.906c0-.708-.744-.583-.744-.583Z"
												      transform="translate(-2.88 -0.72)" fill="#fff" opacity="0.5"/>
											</svg> : el?.fraction?.type === 1 ?
											<svg xmlns="http://www.w3.org/2000/svg" width="15.247" height="19.37"
											     viewBox="0 0 15.247 19.37">
												<path id="id_lspdIcon"
												      d="M9.657,21.906h0a20.578,20.578,0,0,1-3.811-2.86,14.358,14.358,0,0,1-2.621-3.282,8.629,8.629,0,0,1-1.191-4.257V2.536A31.2,31.2,0,0,0,9.657,3.668a31.007,31.007,0,0,0,7.624-1.132v8.971a8.629,8.629,0,0,1-1.191,4.257,14.358,14.358,0,0,1-2.621,3.282,20.581,20.581,0,0,1-3.812,2.86Zm0-8.269h0l3.021,2.1a.491.491,0,0,0,.256.09.367.367,0,0,0,.228-.1.392.392,0,0,0,.141-.45l-1.188-3.375,3.07-2.152.074-.062a.42.42,0,0,0,.133-.268.43.43,0,0,0-.435-.4H11.191L10.047,5.689a.418.418,0,0,0-.778,0L8.124,9.027H4.332a.405.405,0,0,0-.41.4.3.3,0,0,0,.007.067.388.388,0,0,0,.172.283l3.1,2.131L6.009,15.283a.394.394,0,0,0,.141.45.4.4,0,0,0,.23.1.517.517,0,0,0,.256-.09l3.021-2.1Z"
												      transform="translate(-2.034 -2.536)" fill="#fff"
												      opacity="0.5"/>
											</svg> : el?.fraction?.type === 2 ?
												<svg xmlns="http://www.w3.org/2000/svg" width="11.033" height="14.71"
												     viewBox="0 0 11.033 14.71">
													<path id="id_gangIcon"
													      d="M7.355,4.6V.46A.46.46,0,0,0,6.895,0H5.975a.46.46,0,0,0-.46.46V4.681A1.367,1.367,0,0,1,5.975,4.6Zm3.678,2.758A1.839,1.839,0,0,0,9.194,5.516H5.972a.456.456,0,0,0-.457.455v.016A1.367,1.367,0,0,0,6.882,7.355H7.895c.278,0,.379.1.379.23V8.05a.236.236,0,0,1-.226.23c-1.279.066-1.843.71-2.76,2.084l-.181.272a.23.23,0,0,1-.319.064l-.382-.255a.23.23,0,0,1-.064-.319l.181-.272A8.131,8.131,0,0,1,5.882,8.186,1.848,1.848,0,0,1,4.766,7.2a1.362,1.362,0,0,1-.628.159H3.218A1.369,1.369,0,0,1,2.3,7a1.369,1.369,0,0,1-.919.359H.46A1.358,1.358,0,0,1,0,7.27V9.509a3.677,3.677,0,0,0,1.077,2.6l.761.762V14.71H9.193V12.873l1.032-1.032a2.759,2.759,0,0,0,.808-1.951Zm-.92-2.588V1.379a.46.46,0,0,0-.46-.46H8.733a.46.46,0,0,0-.46.46V4.6h.919a2.723,2.723,0,0,1,.919.17ZM.46,6.436h.919a.46.46,0,0,0,.46-.46V2.3a.46.46,0,0,0-.46-.46H.46A.46.46,0,0,0,0,2.3V5.976A.46.46,0,0,0,.46,6.436Zm2.758,0h.919a.46.46,0,0,0,.46-.46v-4.6a.46.46,0,0,0-.46-.46H3.218a.46.46,0,0,0-.46.46v4.6a.46.46,0,0,0,.46.46Z"
													      fill="#fff" opacity="0.5"/>
												</svg> :
												<svg xmlns="http://www.w3.org/2000/svg" width="36.759" height="33.865"
												     viewBox="0 0 36.759 33.865">
													<g transform="translate(313.224 -1334.309)">
														<path
															d="M-294.928,1476.557H-310.8c-1.416,0-1.914-.492-1.915-1.9q0-5.15,0-10.3c0-.817.054-.834.736-.442a5.952,5.952,0,0,0,3.083.88c2.814-.028,5.628-.009,8.441-.007,1.061,0,1.123.036,1.131,1.059a1.5,1.5,0,0,0,.965,1.51c.958.445,1.882.967,2.809,1.476a1.336,1.336,0,0,0,1.392.014c1.042-.568,2.094-1.119,3.149-1.662a1.323,1.323,0,0,0,.644-1.307c.042-1.005.115-1.082,1.14-1.086,2.788-.01,5.576-.023,8.364-.009a5.377,5.377,0,0,0,3.284-.951c.392-.282.61-.242.609.29,0,3.692,0,7.383-.012,11.075a1.252,1.252,0,0,1-1.072,1.248,6.742,6.742,0,0,1-1.7.115Q-287.338,1476.56-294.928,1476.557Z"
															transform="translate(-0.005 -108.884)" fill="#fff"
															stroke="rgba(0,0,0,0)"
															strokeWidth="1"/>
														<path
															d="M-294.852,1383.768q7.59,0,15.18,0a9.09,9.09,0,0,1,1.466.073,1.335,1.335,0,0,1,1.226,1.444c.014,2.169.032,4.338-.005,6.506a3.741,3.741,0,0,1-3.8,3.627c-2.942.062-5.886.012-8.829.026-.576,0-.75-.266-.772-.8-.087-2.163-.1-2.162-2.3-2.162-1.756,0-3.511-.007-5.267,0-1.088.007-1.366.289-1.37,1.394-.006,1.706.081,1.564-1.627,1.565-2.556,0-5.112.011-7.668,0a3.812,3.812,0,0,1-4.108-4.113q-.006-2.866,0-5.731c0-1.327.521-1.823,1.917-1.824Q-302.829,1383.765-294.852,1383.768Z"
															transform="translate(0 -41.376)" fill="#fff"
															stroke="rgba(0,0,0,0)" strokeWidth="1"/>
														<path
															d="M-238.511,1334.816c1.33,0,2.593-.011,3.857,0a2.941,2.941,0,0,1,3.226,2.589c.183.828.267,1.678.381,2.52.02.145.018.387-.063.435a3.094,3.094,0,0,1-1.88.142c-.464-.026-.529-.417-.571-.792-.063-.563-.139-1.125-.2-1.688a.71.71,0,0,0-.813-.721q-3.907.016-7.814,0a.792.792,0,0,0-.878.772c-.088.56-.2,1.117-.264,1.68a.783.783,0,0,1-.912.8c-1.656,0-1.863.077-1.422-1.528.177-.642.182-1.33.343-1.978a2.619,2.619,0,0,1,2.285-2.121A43.414,43.414,0,0,1-238.511,1334.816Z"
															transform="translate(-56.332)" fill="#fff"
															stroke="rgba(0,0,0,0)" strokeWidth="1"/>
														<path
															d="M-211.722,1451.851c.594,0,1.188.011,1.781,0,.539-.013.824.2.815.77-.012.8-.007,1.6,0,2.4a.92.92,0,0,1-.558.932c-.07.032-.135.075-.2.113-2.384,1.321-1.657,1.123-4.072-.194a.816.816,0,0,1-.417-.776c-.01-.826-.006-1.652-.018-2.478-.008-.562.277-.788.815-.778.619.011,1.239,0,1.859,0Z"
															transform="translate(-83.092 -98.896)" fill="#fff"
															stroke="rgba(0,0,0,0)"
															strokeWidth="1"/>
													</g>
												</svg>
									}
								</div>
						}
						<div
							className="choice-character-card-delete-char"
							style={el.level >= 5 ? {display: 'flex'} : {display: 'none'}}
							onClick={() => {
								setDeleteCharId(id);
								EventManager.emitClient('choice', 'deleteCharScreenActive', true, id);
							}}
						>
							<div className="choice-character-card-delete-char__bg"/>
							<img className="choice-character-card-delete-char__icon" src={deleteIcon} alt="#"/>
							<span className="choice-character-card-delete-char-title">
                                удалить <span
								className="choice-character-card-delete-char-title__hidden">персонажа</span>
                            </span>
						</div>
					</div>
					<img className="choice-character-card__person" src={getImage()} alt="#"/>
					<div className="choice-character-card-bottom">
						<div className="choice-character-card-bottom-last-place">
							<div className="choice-character-card-bottom-last-place__area">{el?.lastPlace?.area}</div>
							<div
								className="choice-character-card-bottom-last-place__street">{el?.lastPlace?.street}</div>
						</div>
						<div className="choice-character-card-bottom-last-online">
							<div className="choice-character-card-bottom-last-online__title">последний вход</div>
							<div className="choice-character-card-bottom-last-online__value">{el?.lastOnline}</div>
						</div>
					</div>
					<div className="choice-character-card-button" onClick={() => {
						EventManager.emitServer('characterChoice', 'chooseCharacter', id);
					}}>
						<div className="choice-character-card-button__nickname">
                            <span className="choice-character-card-button__nickname-firstname">
                                {el?.nickname?.firstname}
                            </span>
							<span className="choice-character-card-button__nickname-lastname">
                                {el?.nickname?.lastname}
                            </span>
						</div>
						<img src={arrow} alt="#"/>
					</div>
				</div>
			);
		case 3:
			return (
				<div
					className="choice-character-card"
					onClick={() => {
						setCurrentCard(id);
						EventManager.emitClient('client::characterChoice:setPreview', id);
					}}
				>
					<div className="choice-character-card-header">
						<div className="choice-character-card-header-level">
							<span className="choice-character-card-header-level__value">{el?.level}</span>
							<span className="choice-character-card-header-level__title">уровень</span>
						</div>
						<div className="choice-character-card-header-cash">
							<img className="choice-character-card-header-cash__icon" src={money} alt="#"/>
							<span className="choice-character-card-header-cash__value">{cash}</span>
						</div>
						<div className="choice-character-card-header-card">
							<img className="choice-character-card-header-card__icon" src={bank} alt="#"/>
							<span className="choice-character-card-header-card__value">{card}</span>
						</div>
						{
							el?.fraction?.type === -1 ? <></> :
								<div className="choice-character-card-header__fraction-icon">
									{
										el?.fraction?.type === 0 ?
											<svg xmlns="http://www.w3.org/2000/svg" width="14.875" height="17"
											     viewBox="0 0 14.875 17">
												<path id="id_govIcon"
												      d="M17.755,10.637V17.72H12.443V16.3h-4.6V17.72H2.88V10.637ZM14.55,9.346a4.063,4.063,0,0,0-1.385-2.267,7.862,7.862,0,0,0-2.489-1.046h0V3.791l.186-.05.406-.151a3.9,3.9,0,0,1,.445-.128,1.457,1.457,0,0,1,.313-.049,2.426,2.426,0,0,1,.5.064c.2.049.415.1.633.162s.43.121.626.165a2.148,2.148,0,0,0,.474.061,3.426,3.426,0,0,0,.666-.091V1.209a2.426,2.426,0,0,1-.667.131,1.986,1.986,0,0,1-.478-.067c-.2-.038-.4-.1-.625-.162q-.3-.091-.614-.158a1.886,1.886,0,0,0-.453-.068,3.314,3.314,0,0,0-1.413.3V.72H9.963V6.033H9.941A7.939,7.939,0,0,0,7.453,7.1,4.1,4.1,0,0,0,6.066,9.316a.576.576,0,0,0-.679.612h9.906c0-.708-.744-.583-.744-.583Z"
												      transform="translate(-2.88 -0.72)" fill="#fff" opacity="0.5"/>
											</svg> : el?.fraction?.type === 1 ?
											<svg xmlns="http://www.w3.org/2000/svg" width="15.247" height="19.37"
											     viewBox="0 0 15.247 19.37">
												<path id="id_lspdIcon"
												      d="M9.657,21.906h0a20.578,20.578,0,0,1-3.811-2.86,14.358,14.358,0,0,1-2.621-3.282,8.629,8.629,0,0,1-1.191-4.257V2.536A31.2,31.2,0,0,0,9.657,3.668a31.007,31.007,0,0,0,7.624-1.132v8.971a8.629,8.629,0,0,1-1.191,4.257,14.358,14.358,0,0,1-2.621,3.282,20.581,20.581,0,0,1-3.812,2.86Zm0-8.269h0l3.021,2.1a.491.491,0,0,0,.256.09.367.367,0,0,0,.228-.1.392.392,0,0,0,.141-.45l-1.188-3.375,3.07-2.152.074-.062a.42.42,0,0,0,.133-.268.43.43,0,0,0-.435-.4H11.191L10.047,5.689a.418.418,0,0,0-.778,0L8.124,9.027H4.332a.405.405,0,0,0-.41.4.3.3,0,0,0,.007.067.388.388,0,0,0,.172.283l3.1,2.131L6.009,15.283a.394.394,0,0,0,.141.45.4.4,0,0,0,.23.1.517.517,0,0,0,.256-.09l3.021-2.1Z"
												      transform="translate(-2.034 -2.536)" fill="#fff"
												      opacity="0.5"/>
											</svg> :
											<svg xmlns="http://www.w3.org/2000/svg" width="11.033" height="14.71"
											     viewBox="0 0 11.033 14.71">
												<path id="id_gangIcon"
												      d="M7.355,4.6V.46A.46.46,0,0,0,6.895,0H5.975a.46.46,0,0,0-.46.46V4.681A1.367,1.367,0,0,1,5.975,4.6Zm3.678,2.758A1.839,1.839,0,0,0,9.194,5.516H5.972a.456.456,0,0,0-.457.455v.016A1.367,1.367,0,0,0,6.882,7.355H7.895c.278,0,.379.1.379.23V8.05a.236.236,0,0,1-.226.23c-1.279.066-1.843.71-2.76,2.084l-.181.272a.23.23,0,0,1-.319.064l-.382-.255a.23.23,0,0,1-.064-.319l.181-.272A8.131,8.131,0,0,1,5.882,8.186,1.848,1.848,0,0,1,4.766,7.2a1.362,1.362,0,0,1-.628.159H3.218A1.369,1.369,0,0,1,2.3,7a1.369,1.369,0,0,1-.919.359H.46A1.358,1.358,0,0,1,0,7.27V9.509a3.677,3.677,0,0,0,1.077,2.6l.761.762V14.71H9.193V12.873l1.032-1.032a2.759,2.759,0,0,0,.808-1.951Zm-.92-2.588V1.379a.46.46,0,0,0-.46-.46H8.733a.46.46,0,0,0-.46.46V4.6h.919a2.723,2.723,0,0,1,.919.17ZM.46,6.436h.919a.46.46,0,0,0,.46-.46V2.3a.46.46,0,0,0-.46-.46H.46A.46.46,0,0,0,0,2.3V5.976A.46.46,0,0,0,.46,6.436Zm2.758,0h.919a.46.46,0,0,0,.46-.46v-4.6a.46.46,0,0,0-.46-.46H3.218a.46.46,0,0,0-.46.46v4.6a.46.46,0,0,0,.46.46Z"
												      fill="#fff" opacity="0.5"/>
											</svg>
									}
								</div>
						}
					</div>
					<img className="choice-character-card__person" src={getImage()} alt="#"/>
					<div className="choice-character-card-bottom">
						<div className="choice-character-card-bottom-last-place">
							<div className="choice-character-card-bottom-last-place__area">{el?.lastPlace?.area}</div>
							<div
								className="choice-character-card-bottom-last-place__street">{el?.lastPlace?.street}</div>
						</div>
						<div className="choice-character-card-bottom-last-online">
							<div className="choice-character-card-bottom-last-online__title">последний вход</div>
							<div className="choice-character-card-bottom-last-online__value">{el?.lastOnline}</div>
						</div>
					</div>
					<div className="choice-character-card-button">
						<div className="choice-character-card-button__nickname">
                            <span className="choice-character-card-button__nickname-firstname">
                                {el?.nickname?.firstname}
                            </span>
							<span className="choice-character-card-button__nickname-lastname">
                                {el?.nickname?.lastname}
                            </span>
						</div>
						<img src={lockIcon} alt="#"/>
					</div>
					<div className="choice-character-card-ban-info">
						<span className="choice-character-card-ban-info__title">персонаж<br/>заблокирован</span>
						<div className="choice-character-card-ban-info__container">
							<div className="choice-character-card-ban-info__container-row">
								<span className="choice-character-card-ban-info__container-row__title">Срок до:</span>
								<span
									className="choice-character-card-ban-info__container-row__subtitle">{el?.punishment?.date}</span>
							</div>
							<div className="choice-character-card-ban-info__container-row">
								<span className="choice-character-card-ban-info__container-row__title">Причина:</span>
								<span
									className="choice-character-card-ban-info__container-row__subtitle">{el?.punishment?.reason}</span>
							</div>
							<div className="choice-character-card-ban-info__container-row">
                                <span
	                                className="choice-character-card-ban-info__container-row__title">Администратор:</span>
								<div className="choice-character-card-ban-info__container-row__admin">
									<span>{el?.punishment?.admin?.firstname}</span>
									<span>{el?.punishment?.admin?.lastname}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		default:
			return null;
	}
};

export default React.memo(ChoiceCharacterCard);