import { useState } from 'react';
import classNames from 'classnames';

import s from './style.module.css';

const NavBar = ({isActive, bgActive = false, onVisibleMenu}) => {
    console.log("isActive", isActive);

    return (
        <nav className={classNames(s.root,
            {[s.bgActive] : bgActive}
        )}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <div  
                    onClick={onVisibleMenu} 
                    className={classNames(s.menuButton, {[s.active] : isActive})}
                >
                    <span />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
