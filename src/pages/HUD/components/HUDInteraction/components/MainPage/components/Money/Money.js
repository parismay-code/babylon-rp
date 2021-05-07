import * as React from 'react';

import './Money.scss';

const Money = ({currentOption, prevOption, player}) => {
    const input = React.useRef(null);

    const toggleStyles = React.useMemo(() => {
        if (currentOption === 'money' && !prevOption)
            return {visibility: 'visible', width: '100%', height: '100%'};
        else if (currentOption === 'money' && prevOption)
            return {
                visibility: 'visible',
                width: '100%',
                height: '100%',
                transition: 'visibility 0s .5s, width 0s .5s, height 0s .5s'
            };
        else
            return {
                visibility: 'hidden',
                width: 0,
                height: 0,
                transition: 'visibility 0s .5s, width 0s .5s, height 0s .5s'
            };
    }, [currentOption, prevOption]);

    return <div
        className='hud-interactions-main-money'
        style={toggleStyles}
    >
        <div className='hud-interactions-main-money-header'>
            <div className='hud-interactions-main-money-header-nickname'>
                <span
                    className='hud-interactions-main-money-header-nickname__firstname'>{player?.nickname?.firstname}</span>
                <span
                    className='hud-interactions-main-money-header-nickname__lastname'>{player?.nickname?.lastname}</span>
                <div className='hud-interactions-main-money-header-nickname__id'>ID: {player?.id}</div>
            </div>
            <svg className='hud-interactions-main-money-header__icon'
                 width="36.681" height="25.677" viewBox="0 0 36.681 25.677" opacity='.5'>
                <path
                    d="M34.847,2.25H1.834A1.834,1.834,0,0,0,0,4.084V26.093a1.834,1.834,0,0,0,1.834,1.834H34.847a1.834,1.834,0,0,0,1.834-1.834V4.084A1.834,1.834,0,0,0,34.847,2.25ZM10.087,19.208v.924a.458.458,0,0,1-.459.459H8.712a.458.458,0,0,1-.459-.459V19.2a3.282,3.282,0,0,1-1.8-.651.459.459,0,0,1-.033-.7L7.1,17.21a.47.47,0,0,1,.581-.042,1.38,1.38,0,0,0,.735.213h1.611a.721.721,0,0,0,.676-.756.748.748,0,0,0-.5-.73l-2.579-.774a2.594,2.594,0,0,1-1.81-2.487,2.552,2.552,0,0,1,2.446-2.583V9.128a.458.458,0,0,1,.459-.459h.917a.458.458,0,0,1,.459.459v.934a3.277,3.277,0,0,1,1.8.651.459.459,0,0,1,.033.7l-.673.642a.47.47,0,0,1-.581.042,1.375,1.375,0,0,0-.735-.213H8.317a.721.721,0,0,0-.676.756.748.748,0,0,0,.5.73l2.579.774a2.594,2.594,0,0,1,1.81,2.487A2.552,2.552,0,0,1,10.087,19.208Zm13.755-.91a.458.458,0,0,1-.459.459H16.965a.458.458,0,0,1-.459-.459v-.917a.458.458,0,0,1,.459-.459h6.419a.458.458,0,0,1,.459.459Zm9.17,0a.458.458,0,0,1-.459.459H27.969a.458.458,0,0,1-.459-.459v-.917a.458.458,0,0,1,.459-.459h4.585a.458.458,0,0,1,.459.459Zm0-5.5a.458.458,0,0,1-.459.459H16.965a.458.458,0,0,1-.459-.459v-.917a.458.458,0,0,1,.459-.459H32.554a.458.458,0,0,1,.459.459Z"
                    transform="translate(0 -2.25)"/>
            </svg>
        </div>
        <div className='hud-interactions-main-money-content'>
            <div className='hud-interactions-main-money-content__title'>Введите сумму, которую хотите передать</div>
            <div className='hud-interactions-main-money-content-input'>
                <input ref={input} className='hud-interactions-main-money-content-input__field' type='number'
                       name='n_giveMoneyInput'/>
                <div className='hud-interactions-main-money-content-input__dollar'>$</div>
                <input
                    className='hud-interactions-main-money-content-input__submit'
                    type='submit'
                    name='n_giveMoneySubmit'
                    value='Передать'
                    onClick={() => {
                        window.alt.emit('client::interactions:giveMoney', input.current.value);
                    }}
                />
            </div>
        </div>
    </div>
}

export default React.memo(Money);