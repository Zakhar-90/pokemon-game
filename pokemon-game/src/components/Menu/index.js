import classNames from 'classnames';
import s from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        patch: '#welcome'
    },
    {
        title: 'GAME',
        patch: '#game'
    },
    {
        title: 'ABOUT',
        patch: '#about'
    },
    {
        title: 'CONTACT',
        patch: '#contact'
    }
];

const Menu = ({isActive}) => {

    return (
        <div className={classNames(s.menuContainer, {[s.active] : isActive}, {[s.deactive] : isActive})}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>                
                    {
                        MENU.map(item => <li><a href={item.patch}>{item.title}</a></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;
