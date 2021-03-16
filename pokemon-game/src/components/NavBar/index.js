import { useState } from 'react';
import classNames from 'classnames';

import s from './style.module.css';

const NavBar = ({onVisibleMenu}) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
        onVisibleMenu && onVisibleMenu(isActive);
    } 

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <a  onClick={handleClick} className={classNames(s.menuButton, {[s.active] : isActive})}>
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;
