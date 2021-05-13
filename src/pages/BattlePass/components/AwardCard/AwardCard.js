import * as React from 'react';
import {observer} from "mobx-react-lite";

import reRoll from 'assets/images/battlePass/reRoll.svg';
import whiteCoin from 'assets/images/battlePass/whiteCoin.svg';
import completed from 'assets/images/battlePass/completed.svg';

import './AwardCard.scss';

const AwardCard = ({data, day}) => {
    const freeColor = React.useMemo(() => {
        switch (data.free.quality) {
            case 0:
                return '#B7C2F8';
            case 1:
                return '#8A9EFF';
            case 2:
                return '#C970FF';
            case 3:
                return '#FF8888';
            case 4:
                return '#FFD139';
            default:
                return null;
        }
    }, [data.free.quality]);

    const premiumColor = React.useMemo(() => {
        switch (data.premium.quality) {
            case 0:
                return '#B7C2F8';
            case 1:
                return '#8A9EFF';
            case 2:
                return '#C970FF';
            case 3:
                return '#FF8888';
            case 4:
                return '#FFD139';
            default:
                return null;
        }
    }, [data.premium.quality]);

    return <div className='battle-pass-award-card'>
        <div className='battle-pass-award-card-free'>
            <div className='battle-pass-award-card-free-header'>
                <img className='battle-pass-award-card-free-header__re-roll' src={reRoll} alt='#'/>
                <div className='battle-pass-award-card-free-header-re-roll-cost'>
                    <img className='battle-pass-award-card-free-header-re-roll-cost__icon' src={whiteCoin} alt='#'/>
                    <span className='battle-pass-award-card-free-header-re-roll-cost__value'>{data.reRoll}</span>
                </div>
            </div>
            <div className='battle-pass-award-card-free-content'
                 style={{background: `linear-gradient(to top, ${freeColor}, #C373F360, #C373F300)`}}>
                <img className='battle-pass-award-card-free-content__image'
                     src={`./publicImages/battlePass/${data.free.image}`} alt='#'/>
                <div className='battle-pass-award-card-free-content-description'>
                    <div className='battle-pass-award-card-free-content-description__subtitle'>{data.free.subtitle}</div>
                    <div className='battle-pass-award-card-free-content-description__title'>{data.free.title}</div>
                </div>
            </div>
        </div>
        {
            data.canBeReceived ? data.isReceived ?
                <div className='battle-pass-award-card-status'>
                    <div className='battle-pass-award-card-status-received-block'>
                        <img className='battle-pass-award-card-status-received-block__icon' src={completed} alt='#'/>
                    </div>
                </div> :
                <div className='battle-pass-award-card-status battle-pass-award-card-status-get'>
                    <div className='battle-pass-award-card-status-get__blur'/>
                    <span className='battle-pass-award-card-status-get__text'>Получить</span>
                </div> :
                <div className='battle-pass-award-card-status battle-pass-award-card-status_day'>{day}</div>
        }
        <div className='battle-pass-award-card-premium'>
            <div className='battle-pass-award-card-premium-content'
                 style={{background: `linear-gradient(to bottom, ${premiumColor}, #C373F360, #C373F300)`}}>
                <img className='battle-pass-award-card-premium-content__image'
                     src={`./publicImages/battlePass/${data.premium.image}`} alt='#'/>
                <div className='battle-pass-award-card-premium-content-description'>
                    <div className='battle-pass-award-card-premium-content-description__subtitle'>{data.premium.subtitle}</div>
                    <div className='battle-pass-award-card-premium-content-description__title'>{data.premium.title}</div>
                </div>
            </div>
        </div>
    </div>
}

export default observer(AwardCard);