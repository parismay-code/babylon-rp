import * as React from 'react';

import ems from 'assets/images/hud/ems.svg';
import skull from 'assets/images/hud/skull.svg';

import './HUDDead.scss';

const HUDDead = ({player}) => {
    const [timer, setTimer] = React.useState(null);

    React.useEffect(() => {
        let time = player.playerState.dead.knockdown;

        const interval = setInterval(() => {
            const minutes = time / 60 % 60;
            const seconds = time % 60;

            if (time <= 0) {
                clearInterval(interval);

                window.alt.emit('client::player:die');
            } else setTimer(`${Math.trunc(minutes)}:${Math.trunc(seconds)}`);

            time -= 1;
        }, 1000)

        return () => clearInterval(interval);
    }, [player.playerState.dead.knockdown])

    return <div className='hud-dead'>
        <div className='hud-dead__pulse'/>
        <div className='hud-dead__timer'>{timer}</div>
        <div
            className='hud-dead-med'
            onClick={() => {
                window.alt.emit('client::player:callEms');
            }}
        >
            <img className='hud-dead-med__icon' src={ems} alt='#'/>
            <div className='hud-dead-med__title'>Вызвать медиков</div>
        </div>
        <div className='hud-dead__description'>
            Вы умираете! Без оказания медицинской помощи, Вы погибните по истечению таймера.
        </div>
        <div className='hud-dead-attacker'>
            <span className='hud-dead-attacker__title'>Вас атаковал</span>
            <br/>[{player.playerState.dead.attacker.id}]
            <br/>{player.playerState.dead.attacker.nickname}
        </div>
        <div
            className='hud-dead-submit'
            onClick={() => {
                window.alt.emit('client::player:die');
            }}
        >
            <img className='hud-dead-submit__icon' src={skull} alt='#'/>
            <div className='hud-dead-submit__title'>Умереть</div>
        </div>
    </div>
}

export default React.memo(HUDDead);