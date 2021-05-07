import * as React from "react";

import BackgroundTower from "./components/BackgroundTower";
import AuthForm from "./components/AuthForm";

import './Auth.scss';

const Auth = ({ isRegistered, store }) => {
    React.useEffect(() => {
        window.alt.emit('client::auth:ready');
    }, [])

    return (
        <div className='auth'>
            <BackgroundTower />
            <AuthForm isRegistered={isRegistered} store={store}/>
        </div>
    )
}

export default React.memo(Auth);