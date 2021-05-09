import * as React from 'react';
import {observer} from "mobx-react-lite";

import gaugePlaceholder from 'assets/images/bank/gaugePlaceholder.svg';
import lock from 'assets/images/bank/lock.svg';
import pin from 'assets/images/bank/pin.svg';

import {regExp} from "utils/regExp";

import './BankAccount.scss';

const BankAccount = ({player, setPage}) => {
    React.useEffect(() => {
        const canvas = document.getElementById('id_bankAccountCanvas');
        const ctx = canvas.getContext('2d');

        const middleX = canvas.width / 2;
        const middleY = canvas.height / 2;
        const radius = canvas.width / 2.5;

        ctx.beginPath();
        ctx.arc(middleX, middleY, radius, Math.PI, -Math.PI, false);
        ctx.lineWidth = canvas.width * 0.012;
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineCap = 'butt';
        ctx.stroke();

        const drawFirstLine = () => {
            const grad = ctx.createLinearGradient(0, 500, 0, 0);
            grad.addColorStop(0, "#FFB273");
            grad.addColorStop(1, "#80593A");

            ctx.beginPath();
            ctx.arc(middleX, middleY, radius, -Math.PI / 2, 0, false);
            ctx.lineWidth = canvas.width * 0.1;
            ctx.shadowColor = '#00000080';
            ctx.shadowBlur = 10;
            ctx.strokeStyle = grad;
            ctx.lineCap = 'butt';
            ctx.stroke();
        }
        const drawSecondLine = () => {
            const grad = ctx.createLinearGradient(500, 250, 0, 500);
            grad.addColorStop(0, "#575D7C");
            grad.addColorStop(1, "#AEBAF8");

            ctx.beginPath();
            ctx.arc(middleX, middleY, radius, 0, Math.PI * 0.5, false);
            ctx.lineWidth = canvas.width * 0.08;
            ctx.shadowColor = '#00000080';
            ctx.shadowBlur = 10;
            ctx.strokeStyle = grad;
            ctx.lineCap = 'butt';
            ctx.stroke();
        }
        const drawThirdLine = () => {
            const grad = ctx.createLinearGradient(0, 0, 250, 50);
            grad.addColorStop(0, "#C374F2");
            grad.addColorStop(1, "#623A79");

            ctx.beginPath();
            ctx.arc(middleX, middleY, radius, Math.PI * 0.5, Math.PI, false);
            ctx.lineWidth = canvas.width * 0.06;
            ctx.shadowColor = '#00000080';
            ctx.shadowBlur = 10;
            ctx.strokeStyle = grad;
            ctx.lineCap = 'butt';
            ctx.stroke();
        }
        const drawFourthLine = () => {
            const grad = ctx.createLinearGradient(0, 350, 250, 0);
            grad.addColorStop(0, "#2E6666");
            grad.addColorStop(1, "#5CCCCC");

            ctx.beginPath();
            ctx.arc(middleX, middleY, radius, Math.PI, -Math.PI * 0.7, false);
            ctx.lineWidth = canvas.width * 0.04;
            ctx.shadowColor = '#00000080';
            ctx.shadowBlur = 10;
            ctx.strokeStyle = grad;
            ctx.lineCap = 'butt';
            ctx.stroke();
        }

        drawFourthLine();
        drawThirdLine();
        drawSecondLine();
        drawFirstLine();
    }, []);

    const balance = React.useMemo(() =>
        `$ ${String(player.money.card).replace(regExp.money, '$1 ')}`, [player.money.card]);

    const canvasSize = React.useMemo(() => {
        if (document.body.clientWidth <= 1000 || document.body.clientHeight <= 800) return 300;
        else if (document.body.clientWidth <= 1280) return 450;
        else return 600;
    }, []);

    return <div className='bank-account'>
        <div className='bank-account-statistic'>
            <div className='bank-account-statistic-gauge'>
                <div className='bank-account-statistic-gauge-balance'>
                    <div className='bank-account-statistic-gauge-balance__value'>{balance}</div>
                    <div className='bank-account-statistic-gauge-balance__title'>Баланс</div>
                </div>
                <img className='bank-account-statistic-gauge__image' src={gaugePlaceholder} alt='#'/>
            </div>
            <canvas id='id_bankAccountCanvas' width={canvasSize} height={canvasSize} style={{zIndex: 1000}}/>
        </div>
        <div className='bank-account-bottom'>
            <div className='bank-account-bottom__number'># {player.bank.account}</div>
            <div className='bank-account-bottom__bank'>{player.bank.name} <b>{player.bank.type}</b></div>
        </div>
        <div className='bank-account-navigation'>
            <div className='bank-account-navigation-lock' onClick={() => setPage('lock')}>
                <span className='bank-account-navigation-lock__title'>Заблокировать</span>
                <img className='bank-account-navigation-lock__icon' src={lock} alt='#'/>
            </div>
            <div className='bank-account-navigation-change-pin' onClick={() => setPage('changePin')}>
                <span className='bank-account-navigation-change-pin__title'>Сменить PIN</span>
                <img className='bank-account-navigation-change-pin__icon' src={pin} alt='#'/>
            </div>
        </div>
    </div>
}

export default observer(BankAccount);