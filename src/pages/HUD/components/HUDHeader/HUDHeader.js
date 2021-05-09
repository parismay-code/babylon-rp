import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import logo from 'assets/images/hud/logo.svg';
import money from 'assets/images/hud/money.svg';
import bank from 'assets/images/hud/bank.svg';
import arrow from 'assets/images/hud/arrow.svg';
import mainMenu from 'assets/images/hud/mainMenu.svg';
import interaction from 'assets/images/hud/interaction.svg';
import phone from 'assets/images/hud/phone.svg';
import inventory from 'assets/images/hud/inventory.svg';
import tilda from 'assets/images/hud/tilda.svg';
import tablet from 'assets/images/hud/tablet.svg';
import topArrow from 'assets/images/hud/topArrow.svg';
import star from 'assets/images/hud/star.svg';
import ammo from 'assets/images/hud/ammo.svg';

import {regExp} from "utils/regExp";

import './HUDHeader.scss';

const HUDHeader = ({player}) => {
    const [altOpened, setAlt] = React.useState(false),
        [isAmmoVisible, setAmmoVisible] = React.useState(false);

    React.useEffect(() => {
        window.alt.on('cef::hud:toggleAlt', (bool) => setAlt(bool));
        window.alt.on('cef::hud:toggleAmmo', (bool) => setAmmoVisible(bool));
    }, [])

    const cashCount = React.useMemo(() =>
        `$ ${String(player.money.cash).replace(regExp.money, '$1 ')}`, [player.money.cash])

    const bankCount = React.useMemo(() =>
        `$ ${String(player.money.card).replace(regExp.money, '$1 ')}`, [player.money.card])

    return <div className='hud-header'>
        <div className='hud-header-logo'>
            <img src={logo} alt='#'/>
            <div className='hud-header-logo__title'>babylOn</div>
        </div>
        <div className='hud-header-bottom'>
            <div className='hud-header-bottom-stars'>
                {player.stars >= 1 && <img src={star} alt='#'/>}
                {player.stars >= 2 && <img src={star} alt='#'/>}
                {player.stars >= 3 && <img src={star} alt='#'/>}
                {player.stars >= 4 && <img src={star} alt='#'/>}
                {player.stars === 5 && <img src={star} alt='#'/>}
            </div>
            <div className='hud-header-bottom-money'>
                <div className='hud-header-bottom-money__cash'>
                    <img src={money} alt='#'/>
                    <span>{cashCount}</span>
                </div>
                <div className='hud-header-bottom-money__bank'>
                    <img src={bank} alt='#'/>
                    <span>{bankCount}</span>
                </div>
            </div>
            {isAmmoVisible && <div className='hud-header-bottom-ammo'>
                <div className='hud-header-bottom-ammo__charged'>{player.ammo.charged}</div>
                <div className='hud-header-bottom-ammo__clip'>{player.ammo.clip}</div>
                <img className='hud-header-bottom-ammo__icon' src={ammo} alt='#'/>
            </div>}
            <div className='hud-header-bottom-menu'>
                <div
                    className='hud-header-bottom-menu-button'
                    onClick={() => setAlt(!altOpened)}
                >
                    ALT
                    <img
                        className={cn(!altOpened && 'hud-header-bottom-menu-button_closed')}
                        src={arrow}
                        alt='#'
                    />
                </div>
                <div className={cn('hud-header-bottom-menu-list', !altOpened && 'hud-header-bottom-menu-list_closed')}>
                    <div className='hud-header-bottom-menu-list-element'>
                        <div className='hud-header-bottom-menu-list-element__hotkey'>K</div>
                        <img className='hud-header-bottom-menu-list-element__image' src={mainMenu} alt='#'/>
                    </div>
                    <div className='hud-header-bottom-menu-list-element'>
                        <div className='hud-header-bottom-menu-list-element__hotkey'>G</div>
                        <img className='hud-header-bottom-menu-list-element__image' src={interaction} alt='#'/>
                    </div>
                    <div className='hud-header-bottom-menu-list-element'>
                        <img
                            className='hud-header-bottom-menu-list-element__hotkey'
                            src={topArrow}
                            alt='#'
                            style={{height: '.8em'}}
                        />
                        <img className='hud-header-bottom-menu-list-element__image' src={phone} alt='#'/>
                    </div>
                    <div className='hud-header-bottom-menu-list-element'>
                        <div className='hud-header-bottom-menu-list-element__hotkey'>I</div>
                        <img className='hud-header-bottom-menu-list-element__image' src={inventory} alt='#'/>
                    </div>
                    <div className='hud-header-bottom-menu-list-element'>
                        <div className='hud-header-bottom-menu-list-element__hotkey'>~</div>
                        <img className='hud-header-bottom-menu-list-element__image' src={tilda} alt='#'/>
                    </div>
                    <div className='hud-header-bottom-menu-list-element'>
                        <div className='hud-header-bottom-menu-list-element__hotkey'>P</div>
                        <img className='hud-header-bottom-menu-list-element__image' src={tablet} alt='#'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default observer(HUDHeader);