import * as React from 'react';
import cn from 'classnames';

import BankTaxesHome from "./components/BankTaxesHome";
import BankTaxesBusiness from "./components/BankTaxesBusiness";

import './BankTaxes.scss';

const BankTaxes = ({customEvent, player, noNav}) => {
    const [currentPage, setPage] = React.useState(player.playerState.houses.length > 0 ? 'home' : 'business');

    return <div className='bank-taxes'>
        {!noNav ? <div className='bank-taxes-nav'>
            <div
                className={cn('bank-taxes-nav__element', currentPage === 'home' && 'active')}
                onClick={() => setPage('home')}
            >Дом</div>
            <div
                className={cn('bank-taxes-nav__element', currentPage === 'business' && 'active')}
                onClick={() => setPage('business')}
            >Бизнес</div>
        </div> : null}
        <div className='home-taxes-content'>
            {currentPage === 'home' ? <BankTaxesHome player={player} customEvent={customEvent}/> :
                <BankTaxesBusiness player={player} customEvent={customEvent}/>}
        </div>
    </div>
}

export default React.memo(BankTaxes);