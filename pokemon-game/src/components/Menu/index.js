import classNames from 'classnames';
import s from './style.module.css';

const Menu = ({isActive}) => {
    const classIsActive = isActive ? s.active : s.deactive;

    return (
        <div className={classNames(s.menuContainer, classIsActive)}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                <li>
                    <a href="#welcome">
                    HOME
                    </a>
                </li>
                <li>
                    <a href="#game">
                    GAME
                    </a>
                </li>
                <li>
                    <a href="#about">
                    ABOUT
                    </a>
                </li>
                <li>
                    <a href="#contact">
                    CONTACT
                    </a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;
