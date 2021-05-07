import * as React from 'react';

import Buy from "./components/Buy";
import QuestCard from "./components/QuestCard";
import AwardCard from "./components/AwardCard";

import coin from 'assets/images/battlePass/coin.svg';

import './BattlePass.scss';

const BattlePass = ({ store }) => {
    return <div className='battle-pass'>
        <div className='battle-pass-content'>
            <Buy />
            <div className='battle-pass-content-season'>
                <div className='battle-pass-content-season__title'>Сезон: {store.season}</div>
                <div className='battle-pass-content-season-coins'>
                    <div className='battle-pass-content-season-coins-value'>
                        <img className='battle-pass-content-season-coins-value__icon' src={coin} alt='#'/>
                        <div className='battle-pass-content-season-coins-value-text'>
                            <div className='battle-pass-content-season-coins-value-text__title'>{store.coins}</div>
                            <div className='battle-pass-content-season-coins-value-text__subtitle'>babicOin</div>
                        </div>
                    </div>
                    <div className='battle-pass-content-season-coins__buy'>купить babicOin</div>
                </div>
                <div className='battle-pass-content-season-quests'>
                    <div className='battle-pass-content-season-quests__title'>ЗАДАНИЯ battlePass</div>
                    <div className='battle-pass-content-season-quests-list'>
                        {store.quests.map((el, key) => {
                            return <QuestCard key={key} data={el}/>
                        })}
                    </div>
                </div>
                <div className='battle-pass-content-season-awards'>
                    <span className='battle-pass-content-season-awards-title'>
                        <span className='battle-pass-content-season-awards-title__premium'>Premium</span>
                        <span className='battle-pass-content-season-awards-title__free'>Free</span>
                    </span>
                    <div className='battle-pass-content-season-awards-content'>
                        {store.awards.map((el, key) => {
                            return <AwardCard key={key} data={el} day={key + 1}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(BattlePass);