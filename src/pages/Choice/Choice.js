import * as React from 'react';

import ChoiceCharacterCard from "./components/ChoiceCharacterCard";

import './Choice.scss';

const Choice = ({ characters }) => {
    const [currentCard, setCurrentCard] = React.useState();

    return (
        <div className='choice'>
            <div className='choice-content'>
                <span className='choice-content__title'>выбОР пЕРСОНАжА</span>
                <div className='choice-content-characters'>
                    {characters?.map((el, key) => {
                        return (
                            <ChoiceCharacterCard
                                key={key}
                                id={key}
                                el={el}
                                setCurrentCard={setCurrentCard}
                                currentCard={currentCard}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Choice);