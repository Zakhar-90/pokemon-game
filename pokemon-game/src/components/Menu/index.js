import classNames from 'classnames';
import {Link} from 'react-router-dom';
import s from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        patch: '/'
    },
    {
        title: 'GAME',
        patch: '/game'
    },
    {
        title: 'ABOUT',
        patch: '/about'
    },
    {
        title: 'CONTACT',
        patch: '/contact'
    }
];

const Menu = ({ isActive, onToPatch }) => {

    return (
        <div className={classNames(s.menuContainer, {
            [s.active] : isActive === true,
            [s.deactive] : isActive === false
        })}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>                
                    {
                        MENU.map(({title, patch}, index) => (
                            <li 
                                key={index}
                                onClick={onToPatch}
                            >
                                <Link to={patch}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;
