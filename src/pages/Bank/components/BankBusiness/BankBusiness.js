import * as React from 'react';
import {observer} from "mobx-react-lite";

import gaugePlaceholder from 'assets/images/bank/gaugePlaceholder2.svg';
import withdrawIcon from 'assets/images/bank/withdrawIcon.svg';

import './BankBusiness.scss';
import {regExp} from "utils/regExp";

const BankBusiness = ({player}) => {
    const [currentBusiness, setBusiness] = React.useState(player.playerState.business[0]);

    const input = React.useRef(null);

    React.useEffect(() => {
        const canvas = document.getElementById('id_bankBusinessCanvas');
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
            const grad = ctx.createLinearGradient(0, 0, 500, 500);
            grad.addColorStop(0, "#72984C");
            grad.addColorStop(1, "#B9FE75");

            ctx.beginPath();
            ctx.arc(middleX, middleY, radius, -Math.PI * 0.5, Math.PI * 0.5, false);
            ctx.lineWidth = canvas.width * 0.08;
            ctx.shadowColor = '#00000080';
            ctx.shadowBlur = 10;
            ctx.strokeStyle = grad;
            ctx.lineCap = 'butt';
            ctx.stroke();
        }
        const drawSecondLine = () => {
            const grad = ctx.createLinearGradient(400, 400, 100, 200);
            grad.addColorStop(0, "#FCB96B");
            grad.addColorStop(1, "#FFD4A2");

            ctx.beginPath();
            ctx.arc(middleX, middleY, radius, Math.PI * 0.5, Math.PI / .8, false);
            ctx.lineWidth = canvas.width * 0.05;
            ctx.shadowColor = '#00000080';
            ctx.shadowBlur = 10;
            ctx.strokeStyle = grad;
            ctx.lineCap = 'butt';
            ctx.stroke();
        }

        drawSecondLine();
        drawFirstLine();
    }, []);

    const withdraw = React.useCallback(() => {
        window.alt.emit('client::bank:businessWithdraw', currentBusiness.id, input.current.value);
    }, [currentBusiness, input]);

    const balance = React.useMemo(() =>
        `$ ${String(currentBusiness.balance).replace(regExp.money, '$1 ')}`, [currentBusiness.balance]);

    const canvasSize = React.useMemo(() => {
        if (document.body.clientWidth <= 1000 || document.body.clientHeight <= 800) return 200;
        else if (document.body.clientWidth <= 1280) return 300;
        else return 400;
    }, []);

    return <div className='bank-business'>
        <div className='bank-business-content'>
            <div className='bank-business-content-diagram'>
                <div className='bank-business-content-diagram-gauge'>
                    <div className='bank-business-content-diagram-gauge-balance'>
                        <div className='bank-business-content-diagram-gauge-balance__value'>{balance}</div>
                        <div className='bank-business-content-diagram-gauge-balance__title'>Баланс</div>
                    </div>
                    <img className='bank-business-content-diagram-gauge__image' src={gaugePlaceholder} alt='#'/>
                </div>
                <canvas id='id_bankBusinessCanvas' width={canvasSize} height={canvasSize} style={{zIndex: 1000}}/>
            </div>
            <div className='bank-business-content-form'>
                <div className='bank-business-content-form-choose-business'>
                    <div className='bank-business-content-form-choose-business__title'>Выберите бизнес</div>
                    {player.playerState.business.map((el, key) => {
                        return <svg
                            key={key}
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="27"
                            viewBox="0 0 30 27"
                            onClick={() => {
                                setBusiness(el);
                            }}
                        >
                            <path
                                d="M15,24V22.5H4.515l-.015,6a2.99,2.99,0,0,0,3,3h21a2.99,2.99,0,0,0,3-3v-6H21V24ZM30,10.5H23.985v-3l-3-3h-6l-3,3v3H6a3.009,3.009,0,0,0-3,3V18a2.99,2.99,0,0,0,3,3h9V18h6v3h9a3.009,3.009,0,0,0,3-3V13.5A3.009,3.009,0,0,0,30,10.5Zm-9,0H15v-3h6Z"
                                transform="translate(-3 -4.5)" fill={currentBusiness.id === el.id ? '#ffffff' : null}
                                opacity={currentBusiness.id === el.id ? '1' : '.5'}/>
                        </svg>
                    })}
                </div>
                <div className='bank-business-content-form__business-name'>{currentBusiness.name}</div>
                <div className='bank-business-content-form-withdraw'>
                    <div className='bank-business-content-form-withdraw-title'>
                        <img className='bank-business-content-form-withdraw-title__icon' src={withdrawIcon} alt='#'/>
                        <span className='bank-business-content-form-withdraw-title__text'>Снять прибыль</span>
                    </div>
                    <input ref={input} className='bank-business-content-form-withdraw__input' type='number'
                           name='n_bankBusinessWithdraw' placeholder='Введите сумму'/>
                </div>
            </div>
        </div>
        <div className='bank-business-withdraw' onClick={() => withdraw()}>
            <div className='bank-business-withdraw__fill'/>
            <span className='bank-business-withdraw__title'>Снять</span>
        </div>
    </div>
}

export default observer(BankBusiness);