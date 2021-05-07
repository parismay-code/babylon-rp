import * as React from 'react';
import {observer} from "mobx-react-lite";

import department from 'assets/images/chat/department.svg';

import './DepartmentMessage.scss';

const DepartmentMessage = ({ data }) => {
    return <div className='department-message'>
        <div className='department-message-before'>
            <img className='department-message-before__icon' src={department} alt='#'/>
        </div>
        <div className='department-message-text'>
            [Департамент] { data.rank } <span className='department-message-text__fraction'>{ data.fraction }</span>, { data.nickname } ({ data.id }): { data.text }
        </div>
    </div>
}

export default observer(DepartmentMessage);