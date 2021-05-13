import * as React from 'react';

import Options from "./pages/Options";

import exit from 'assets/images/adminRedactor/exit.svg';

import './AdminRedactor.scss';

const AdminRedactor = ({data}) => {
    const [currentPage, setPage] = React.useState(null),
        [currentOption, setOption] = React.useState(null);

    return <div className='admin-redactor'>
        {currentPage === null ? <>
            <div className='admin-redactor-header'>
                <span className='admin-redactor-header__title'>Redactor</span>
                <img
                    className='admin-redactor-header__exit'
                    src={exit}
                    alt='#'
                    onClick={() => {
                        window.alt.emit('client::adminRedactor:exit');
                    }}
                />
            </div>
            <div className='admin-redactor-content'>
                {data.map((el, key) => {
                    return <div
                        key={key}
                        className='admin-redactor-content__element'
                        onClick={() => {
                            setOption(key);
                            setPage('options');
                        }}
                    >
                        <img src={`./publicImages/adminRedactor/${el.icon}.svg`} alt='#'/>
                    </div>
                })}
            </div>
        </> : <Options setPage={setPage} data={data[currentOption]}/>}
    </div>
}

export default React.memo(AdminRedactor);