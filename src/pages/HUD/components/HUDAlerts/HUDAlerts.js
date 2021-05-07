import * as React from 'react';

import HUDAlertsTaxi from "./components/HUDAlertsTaxi";
import HUDAlertsJob from "./components/HUDAlertsJob";
import HUDAlertsCar from "./components/HUDAlertsCar";

import './HUDAlerts.scss';

const HUDAlerts = () => {
    return <div className='hud-alerts'>
        <HUDAlertsCar/>
        <HUDAlertsJob/>
        <HUDAlertsTaxi/>
    </div>
}

export default React.memo(HUDAlerts);