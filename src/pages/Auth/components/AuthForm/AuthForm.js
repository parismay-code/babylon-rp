import * as React   from 'react';
import cn           from 'classnames';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import {regExp} from 'utils/regExp';

import resetClose   from 'assets/images/auth/resetClose.svg';
import rememberIcon from 'assets/images/auth/rememberIcon.svg';

import './AuthForm.scss';

const AuthForm = ({store}) => {
	const registrationForm = React.useRef(null);
	const loginForm = React.useRef(null);
	const resetForm = React.useRef(null);
	
	const RegFormLogin = React.useRef(null);
	const RegFormMail = React.useRef(null);
	const RegFormPassword = React.useRef(null);
	const RegFormRePassword = React.useRef(null);
	const RegFormReferral = React.useRef(null);
	
	const ResetFormCode = React.useRef(null);
	const ResetFormMail = React.useRef(null);
	const ResetCloseButton = React.useRef(null);
	
	const LogFormLogin = React.useRef(null);
	const LogFormPassword = React.useRef(null);
	
	const handleSetForm = React.useCallback(screen => store.setCurrentScreen(screen), [store]);
	
	const checkRegData = React.useCallback(() => {
			const login = RegFormLogin.current.value;
			const email = RegFormMail.current.value;
			const password = RegFormPassword.current.value;
			const rePassword = RegFormRePassword.current.value;
			const referral = RegFormReferral.current.value;
			
			if (login === '' || email === '' || password === '' || rePassword === '') store.addNotify(0, 'Заполните все поля');
			else if (login.length < 5) store.addNotify(0, 'Логин должен быть длиннее 5 символов');
			else if (login.length > 16) store.addNotify(0, 'Логин должен быть короче 16 символов');
			else if (!regExp.mail.test(email)) store.addNotify(0, 'Заполните поле "E-Mail" по форме: example@mail.ru');
			else if (password.length < 5) store.addNotify(0, 'Пароль должен быть длиннее 5 символов');
			else if (password.length > 16) store.addNotify(0, 'Пароль должен быть короче 16 символов');
			else if (password !== rePassword) store.addNotify(0, 'Пароли не совпадают');
			else EventManager.emitServer('auth', 'register', {
					login,
					email,
					password,
					referral,
				});
		}, [store]),
		checkLogData = React.useCallback(() => {
			const login = LogFormLogin.current.value;
			const password = LogFormPassword.current.value;
			
			if (login === '' || password === '') store.addNotify(0, 'Заполните все поля');
			else EventManager.emitServer('auth', 'login', {
				login,
				password,
			});
		}, [store]),
		checkResetData = React.useCallback(() => {
			const email = ResetFormMail.current.value;
			const code = ResetFormCode.current;
			
			if (!regExp.mail.test(email)) store.addNotify(0, 'Заполните поле "E-Mail" по форме: example@mail.ru');
			else if (code.disabled) {
				EventManager.emitServer('auth', 'sendResetPassword', email);
				
				code.classList.remove('disabled');
				code.disabled = false;
				store.addNotify(1, 'Письмо отправлено на почту');
			} else {
				if (code.value.toLowerCase() === store.resetCode) {
					EventManager.emitServer('auth', 'recovery', true);
					
					store.addNotify(1, 'Письмо с новым паролем отправлено на Вашу почту');
				} else {
					EventManager.emitServer('auth', 'recovery', false);
					
					store.addNotify(0, 'Неверный код');
				}
			}
		}, [store, store.resetCode]),
		showNotify = React.useCallback(() => {
			const notify = document.getElementById(`id_authNotify_${store.currentScreen}`);
			
			if (store.notifyQueue.length > 0) {
				store.isNotifyShowed = true;
				
				notify.innerText = store.notifyQueue[0].text;
				if (store.notifyQueue[0].type === 0) {
					document.querySelector('.auth').style.background = '#707070 linear-gradient(122deg, #AAB6EF2B 1%, #84818A 88%, #7D7A82 100%)';
					notify.classList.add('auth-error');
				} else notify.classList.add('auth-success');
				notify.style.opacity = '1';
				
				setTimeout(() => {
					document.querySelector('.auth').style.background = '#FFFFFF linear-gradient(122deg, #AAB6EF2B 1%, #84818A 88%, #7D7A82 100%)';
					notify.style.opacity = '0';
					notify.classList.remove('auth-success', 'auth-error');
					store.notifyQueue.shift();
					setTimeout(() => {
						store.isNotifyShowed = false;
					}, 500);
				}, 3000);
			}
		}, [store.notifyQueue, store.isNotifyShowed]);
	
	React.useEffect(() => {
		if (!store.isNotifyShowed) {
			showNotify();
		}
	}, [showNotify, store.notifyQueue.length, store.isNotifyShowed]);
	
	React.useEffect(() => {
		EventManager.addHandler('auth', 'setLogin', text => LogFormLogin.current.value = text);
	}, []);
	
	return (
		<div className="auth-form">
			<div className={cn('auth-form-registration', store.currentScreen === 'reg' ? 'form-active' : undefined)}
			     ref={registrationForm}>
				<div className="auth-form-registration__blur"/>
				<span>babylOn</span>
				<form
					className="auth-form-registration-content"
					name="n_authRegForm"
					autoComplete="off"
					onSubmit={(e) => {
						e.preventDefault();
						checkRegData();
					}}
				>
					<div className="auth-form-registration-content__button">
						<input
							type="submit"
							name="n_authRegFormSubmit"
							value="РЕгиСтРАциЯ"
						/>
						<div className="auth-form-registration-content__button_before"/>
					</div>
					<div className="auth-form-registration-content-form">
						<input
							type="text"
							name="n_authFormRegLogin"
							ref={RegFormLogin}
							placeholder="* Логин"
						/>
						<input
							type="text"
							name="n_authFormRegEmail"
							ref={RegFormMail}
							placeholder="* Почта"
						/>
						<input
							type="password"
							name="n_authFormRegLogin"
							ref={RegFormPassword}
							placeholder="* Пароль"
						/>
						<input
							type="password"
							name="n_authFormRegLogin"
							ref={RegFormRePassword}
							placeholder="* Повторить пароль"
						/>
						<input
							type="number"
							name="n_authFormRegReferral"
							ref={RegFormReferral}
							placeholder="ID пригласившего"
						/>
					</div>
				</form>
				<div className="auth-form-notify" id="id_authNotify_reg"/>
			</div>
			<div className={cn('auth-form-login', store.currentScreen === 'log' ? 'form-active' : undefined)}
			     ref={loginForm}>
				<div className="auth-form-login__blur"/>
				<span>babylOn</span>
				<form
					className="auth-form-login-content"
					name="n_authLogForm"
					autoComplete="off"
					onSubmit={(e) => {
						e.preventDefault();
						checkLogData();
					}}
				>
					<div className="auth-form-login-content__button">
						<input
							type="submit"
							name="n_authRegFormSubmit"
							value="lOg in"
						/>
						<div className="auth-form-login-content__button_before"/>
					</div>
					<div className="auth-form-login-content-form">
						<input
							type="text"
							name="n_authFormLogLogin"
							ref={LogFormLogin}
							placeholder="Логин"
						/>
						<input
							type="password"
							name="n_authFormLogLogin"
							ref={LogFormPassword}
							placeholder="Пароль"
						/>
					</div>
					<div
						className="auth-form-login-content-remember"
						onClick={() => EventManager.emitServer('auth', 'remember')}
					>
						<span>Запомнить</span>
						<img src={rememberIcon} alt="remember"/>
					</div>
				</form>
				<div className="auth-form-notify" id="id_authNotify_log"/>
			</div>
			<div
				className="auth-form-navigation-reset"
				onClick={() => handleSetForm(store.currentScreen === 'reset' ? 'log' : 'reset')}
			>
				<div className={store.currentScreen === 'reset' ? 'reset-active' : undefined} ref={ResetCloseButton}>
					закрыть
					<img src={resetClose} alt="close"/>
				</div>
				восстановление
			</div>
			<div className="auth-form-navigation">
				<div
					className="auth-form-navigation__registration"
					id="id_authNavReg"
					onClick={() => handleSetForm('reg')}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="47" height="38" viewBox="0 0 47 38">
						<path
							d="M1.125,14.625h4.5v-4.5A1.128,1.128,0,0,1,6.75,9H9a1.128,1.128,0,0,1,1.125,1.125v4.5h4.5A1.128,1.128,0,0,1,15.75,15.75V18a1.128,1.128,0,0,1-1.125,1.125h-4.5v4.5A1.128,1.128,0,0,1,9,24.75H6.75a1.128,1.128,0,0,1-1.125-1.125v-4.5h-4.5A1.128,1.128,0,0,1,0,18V15.75A1.128,1.128,0,0,1,1.125,14.625ZM29.25,18a9,9,0,1,1,9-9A9,9,0,0,1,29.25,18Zm-6.3,2.25h1.174a12.24,12.24,0,0,0,10.252,0H35.55A9.452,9.452,0,0,1,45,29.7v2.925A3.376,3.376,0,0,1,41.625,36H16.875A3.376,3.376,0,0,1,13.5,32.625V29.7A9.452,9.452,0,0,1,22.95,20.25Z"
							transform="translate(1 1)"
							fill={store.currentScreen === 'reg' ? '#343434' : 'none'}
							stroke="#343434"
							strokeWidth="2"
							opacity={store.currentScreen === 'reg' ? '1' : '0.3'}/>
					</svg>
				</div>
				<div
					className={cn('auth-form-reset-password', store.currentScreen === 'reset' ? 'form-active' : undefined)}
					ref={resetForm}>
					<div className="auth-form-reset-password__blur"/>
					<form
						className="auth-form-reset-password-content"
						name="n_authResetForm"
						onSubmit={(e) => {
							e.preventDefault();
							checkResetData();
						}}
					>
						<div className="auth-form-reset-password-content__button">
							<input
								type="submit"
								name="n_authResetFormSubmit"
								value="вОсстановить"
							/>
							<div className="auth-form-reset-password-content__button_before"/>
						</div>
						<div className="auth-form-reset-password-content-form">
							<input
								type="text"
								name="n_authFormResetEmail"
								ref={ResetFormMail}
								placeholder="Введите e-mail"
							/>
							<input
								type="text"
								name="n_authFormResetCode"
								ref={ResetFormCode}
								placeholder="Введите код"
								className="disabled"
								disabled
							/>
						</div>
					</form>
					<div className="auth-form-notify" id="id_authNotify_reset"/>
				</div>
				<div
					className="auth-form-navigation__login"
					id="id_authNavLog"
					onClick={() => handleSetForm('log')}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="47.106" height="38" viewBox="0 0 47.106 38">
						<path
							d="M15.75,18a9,9,0,1,0-9-9A9,9,0,0,0,15.75,18Zm6.3,2.25H20.876a12.24,12.24,0,0,1-10.252,0H9.45A9.452,9.452,0,0,0,0,29.7v2.925A3.376,3.376,0,0,0,3.375,36h24.75A3.376,3.376,0,0,0,31.5,32.625V29.7A9.452,9.452,0,0,0,22.05,20.25Zm22.711-9.028L42.806,9.246a.834.834,0,0,0-1.181-.007l-7.369,7.313-3.2-3.22a.834.834,0,0,0-1.181-.007L27.9,15.286a.834.834,0,0,0-.007,1.181l5.745,5.787a.834.834,0,0,0,1.181.007L44.754,12.4a.84.84,0,0,0,.007-1.181Z"
							transform="translate(1 1)"
							fill={store.currentScreen === 'log' ? '#343434' : 'none'}
							stroke="#343434"
							strokeWidth="2"
							opacity={store.currentScreen === 'log' ? '1' : '0.3'}/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default observer(AuthForm);