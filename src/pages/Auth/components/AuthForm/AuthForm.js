import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import {showNotify} from "./utils/notify";
import {regExp} from "utils/regExp";

import resetClose from 'assets/images/auth/resetClose.svg';
import rememberIcon from 'assets/images/auth/rememberIcon.svg';

import './AuthForm.scss';

const AuthForm = ({isRegistered, store}) => {
    const [authForm, setAuthForm] = React.useState(isRegistered ? 'log' : 'reg');

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

    const handleSetForm = React.useCallback((form) => setAuthForm(form), []);

    const checkRegData = React.useCallback(() => {
        const login = RegFormLogin.current.value;
        const email = RegFormMail.current.value;
        const password = RegFormPassword.current.value;
        const rePassword = RegFormRePassword.current.value;
        const referral = RegFormReferral.current.value;

        if (login === '' || email === '' || password === '' || rePassword === '') showNotify(0, 'Заполните все поля', 0);
        else if (login.length < 5) showNotify(0, 'Логин должен быть длиннее 5 символов', 0);
        else if (login.length > 16) showNotify(0, 'Логин должен быть короче 16 символов', 0);
        else if (!regExp.mail.test(email)) showNotify(0, 'Заполните поле "E-Mail" по форме: example@mail.ru', 0);
        else if (password.length < 5) showNotify(0, 'Пароль должен быть длиннее 5 символов', 0);
        else if (password.length > 16) showNotify(0, 'Пароль должен быть короче 16 символов', 0);
        else if (password !== rePassword) showNotify(0, 'Пароли не совпадают', 0);
        else {
            window.alt.emit('client::auth:register', {
                login,
                email,
                password,
                referral
            })

            window.alt.on('cef::auth:tryRegister', (bool, text) => {
                if (bool) showNotify(1, 'Вы успешно зарегистрированы', 0);
                else showNotify(0, text, 0);
            })
        }
    }, []);
    const checkLogData = React.useCallback(() => {
        const login = LogFormLogin.current.value;
        const password = LogFormPassword.current.value;

        if (login === '' || password === '') showNotify(0, 'Заполните все поля', 2);
        else {
            window.alt.emit('client::auth:login', {
                login,
                password
            })

            window.alt.on('cef::auth:tryLogin', (bool, text) => {
                if (!bool) showNotify(0, text, 2);
                else showNotify(1, 'Вы успешно авторизованы', 2);
            });
        }
    }, []);
    const checkResetData = React.useCallback(() => {
        const email = ResetFormMail.current.value;
        const code = ResetFormCode.current;

        if (!regExp.mail.test(email)) showNotify(0, 'Заполните поле "E-Mail" по форме: example@mail.ru', 1);
        else if (code.disabled) {
            window.alt.emit('client::auth:sendResetPassword', email);

            code.classList.remove('disabled');
            code.disabled = false;
            showNotify(1, 'Письмо отправлено на почту', 1);
        } else {
            if (code.value.toLowerCase() === store.resetCode) {
                window.alt.emit('client::auth:recovery', true);

                showNotify(1, 'Письмо с новым паролем отправлено на Вашу почту', 1);
            } else {
                window.alt.emit('client::auth:recovery', false);

                showNotify(0, 'Неверный код', 1);
            }
        }
    }, [store.resetCode]);

    return (
        <div className='auth-form'>
            <div className={cn('auth-form-registration', authForm === 'reg' ? 'form-active' : undefined)}
                 ref={registrationForm}>
                <div className='auth-form-registration__blur'/>
                <span>babylOn</span>
                <div className='auth-form-registration-content'>
                    <div className='auth-form-registration-content__button' onClick={checkRegData}>
                        <span style={{left: '45%'}}>РЕгиСтРАциЯ</span>
                    </div>
                    <div className='auth-form-registration-content-form'>
                        <input
                            type='text'
                            name='n_authFormRegLogin'
                            ref={RegFormLogin}
                            placeholder='* логин'
                        />
                        <input
                            type='email'
                            name='n_authFormRegEmail'
                            ref={RegFormMail}
                            placeholder='* почта'
                        />
                        <input
                            type='password'
                            name='n_authFormRegLogin'
                            ref={RegFormPassword}
                            placeholder='* пароль'
                        />
                        <input
                            type='password'
                            name='n_authFormRegLogin'
                            ref={RegFormRePassword}
                            placeholder='* повторить пароль'
                        />
                        <input
                            type='number'
                            name='n_authFormRegReferral'
                            ref={RegFormReferral}
                            placeholder='id пригласившего'
                        />
                    </div>
                </div>
                <div className='auth-form-notify' id='id_authNotify0'/>
            </div>
            <div className={cn('auth-form-login', authForm === 'log' ? 'form-active' : undefined)} ref={loginForm}>
                <div className='auth-form-login__blur'/>
                <span>babylOn</span>
                <div className='auth-form-login-content'>
                    <div className='auth-form-login-content__button' onClick={checkLogData}>
                        <span>lOg in</span>
                    </div>
                    <div className='auth-form-login-content-form'>
                        <input
                            type='text'
                            name='n_authFormLogLogin'
                            ref={LogFormLogin}
                            placeholder='логин'
                        />
                        <input
                            type='password'
                            name='n_authFormLogLogin'
                            ref={LogFormPassword}
                            placeholder='пароль'
                        />
                    </div>
                    <div
                        className='auth-form-login-content-remember'
                        onClick={() => {
                            window.alt.emit('client::auth:remember');
                        }}
                    >
                        <span>Запомнить</span>
                        <img src={rememberIcon} alt='remember'/>
                    </div>
                </div>
                <div className='auth-form-notify' id='id_authNotify2'/>
            </div>
            <div
                className='auth-form-navigation-reset'
                onClick={() => handleSetForm(authForm === 'reset' ? 'log' : 'reset')}
            >
                <div className={authForm === 'reset' ? 'reset-active' : undefined} ref={ResetCloseButton}>
                    закрыть
                    <img src={resetClose} alt='close'/>
                </div>
                восстановление
            </div>
            <div className='auth-form-navigation'>
                <div
                    className='auth-form-navigation__registration'
                    id='id_authNavReg'
                    onClick={() => handleSetForm('reg')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="38" viewBox="0 0 47 38">
                        <path
                            d="M1.125,14.625h4.5v-4.5A1.128,1.128,0,0,1,6.75,9H9a1.128,1.128,0,0,1,1.125,1.125v4.5h4.5A1.128,1.128,0,0,1,15.75,15.75V18a1.128,1.128,0,0,1-1.125,1.125h-4.5v4.5A1.128,1.128,0,0,1,9,24.75H6.75a1.128,1.128,0,0,1-1.125-1.125v-4.5h-4.5A1.128,1.128,0,0,1,0,18V15.75A1.128,1.128,0,0,1,1.125,14.625ZM29.25,18a9,9,0,1,1,9-9A9,9,0,0,1,29.25,18Zm-6.3,2.25h1.174a12.24,12.24,0,0,0,10.252,0H35.55A9.452,9.452,0,0,1,45,29.7v2.925A3.376,3.376,0,0,1,41.625,36H16.875A3.376,3.376,0,0,1,13.5,32.625V29.7A9.452,9.452,0,0,1,22.95,20.25Z"
                            transform="translate(1 1)"
                            fill={authForm === 'reg' ? '#343434' : 'none'}
                            stroke="#343434"
                            strokeWidth="2"
                            opacity={authForm === 'reg' ? "1" : "0.3"}/>
                    </svg>
                </div>
                <div className={cn('auth-form-reset-password', authForm === 'reset' ? 'form-active' : undefined)}
                     ref={resetForm}>
                    <div className='auth-form-reset-password__blur'/>
                    <div className='auth-form-reset-password-content'>
                        <div className='auth-form-reset-password-content__button' onClick={checkResetData}>
                            <span>вОсстановить</span>
                        </div>
                        <div className='auth-form-reset-password-content-form'>
                            <input
                                type='email'
                                name='n_authFormResetEmail'
                                ref={ResetFormMail}
                                placeholder='введите e-mail'
                            />
                            <input
                                type='text'
                                name='n_authFormResetCode'
                                ref={ResetFormCode}
                                placeholder='введите код'
                                className='disabled'
                                disabled
                            />
                        </div>
                    </div>
                    <div className='auth-form-notify' id='id_authNotify1'/>
                </div>
                <div
                    className='auth-form-navigation__login'
                    id='id_authNavLog'
                    onClick={() => handleSetForm('log')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="47.106" height="38" viewBox="0 0 47.106 38">
                        <path
                            d="M15.75,18a9,9,0,1,0-9-9A9,9,0,0,0,15.75,18Zm6.3,2.25H20.876a12.24,12.24,0,0,1-10.252,0H9.45A9.452,9.452,0,0,0,0,29.7v2.925A3.376,3.376,0,0,0,3.375,36h24.75A3.376,3.376,0,0,0,31.5,32.625V29.7A9.452,9.452,0,0,0,22.05,20.25Zm22.711-9.028L42.806,9.246a.834.834,0,0,0-1.181-.007l-7.369,7.313-3.2-3.22a.834.834,0,0,0-1.181-.007L27.9,15.286a.834.834,0,0,0-.007,1.181l5.745,5.787a.834.834,0,0,0,1.181.007L44.754,12.4a.84.84,0,0,0,.007-1.181Z"
                            transform="translate(1 1)"
                            fill={authForm === 'log' ? '#343434' : 'none'}
                            stroke="#343434"
                            strokeWidth="2"
                            opacity={authForm === 'log' ? "1" : "0.3"}/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default observer(AuthForm);