import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import completed from 'assets/images/battlePass/completed.svg';
import whiteCoin from 'assets/images/battlePass/whiteCoin.svg';
import whiteCompleted from 'assets/images/battlePass/whiteCompleted.svg';

import './QuestCard.scss';

const QuestCard = ({ data }) => {
    const isCompleted = React.useMemo(() => {
        return !!(data.options[0].completed && data.options[1].completed && data.options[2].completed);
    }, [data.options]);

    return <div className='battle-pass-quest-card'>
        <div className='battle-pass-quest-card__blur'/>
        <div className='battle-pass-quest-card-header'>
            <div className={cn('battle-pass-quest-card-header-status', isCompleted ? 'battle-pass-quest-card-header-status_completed' : null)}>
                {isCompleted ? <img className='battle-pass-quest-card-header-status__icon' src={completed} alt='#'/> :
                    <span className='battle-pass-quest-card-header-status__quest'>?</span>}
            </div>
            <div className='battle-pass-quest-card-header__title'>{data.title}</div>
        </div>
        <div className='battle-pass-quest-card-options'>
            {data.options.map((el, key) => {
                return <div key={key} className='battle-pass-quest-card-options-element'>
                    {el.completed ? <img className='battle-pass-quest-card-options-element__icon' src={whiteCompleted} alt='#'/> :
                        <div className='battle-pass-quest-card-options-element-points'>
                            <img className='battle-pass-quest-card-options-element-points__icon' src={whiteCoin} alt='#'/>
                            <span className='battle-pass-quest-card-options-element-points__value'>{el.points}</span>
                        </div>}
                    <span className='battle-pass-quest-card-options-element__quest'>{el.text}</span>
                </div>
            })}
        </div>
    </div>
}

export default observer(QuestCard);