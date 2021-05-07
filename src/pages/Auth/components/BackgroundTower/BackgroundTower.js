import * as React from 'react';

import tower from 'assets/images/auth/bgTower.svg';
import imgCloud1 from 'assets/images/auth/cloud1.svg';
import imgCloud2 from 'assets/images/auth/cloud2.svg';
import imgCloud3 from 'assets/images/auth/cloud3.svg';
import imgCloud4 from 'assets/images/auth/cloud4.svg';
import imgCloud5 from 'assets/images/auth/cloud5.svg';
import imgCloud6 from 'assets/images/auth/cloud6.svg';
import imgCloud7 from 'assets/images/auth/cloud7.svg';

import './BackgroundTower.scss';

const BackgroundTower = () => {
    return (
        <div className='background-tower'>
            <img className='background-tower__tower' src={tower} alt='tower'/>
            <img className='background-tower__cloud' src={imgCloud1} alt='cloud'/>
            <img className='background-tower__cloud' src={imgCloud2} alt='cloud'/>
            <img className='background-tower__cloud' src={imgCloud3} alt='cloud'/>
            <img className='background-tower__cloud' src={imgCloud4} alt='cloud'/>
            <img className='background-tower__cloud' src={imgCloud5} alt='cloud'/>
            <img className='background-tower__cloud' src={imgCloud6} alt='cloud'/>
            <img className='background-tower__cloud' src={imgCloud7} alt='cloud'/>
        </div>
    )
}

export default React.memo(BackgroundTower);