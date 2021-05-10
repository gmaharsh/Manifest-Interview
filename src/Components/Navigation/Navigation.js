import React from 'react';
import './Navigation.css';

import MenuIcon from '@material-ui/icons/Menu';

function Navigation() {
    return (
        <div className="Navigation">
            <div className="navigation__left">

            </div>
            <div className="navigation__center">
                <h1>Manifest</h1>
            </div>
            <div className="navigation__right">
                <MenuIcon />
            </div>
        </div>
    )
}

export default Navigation
