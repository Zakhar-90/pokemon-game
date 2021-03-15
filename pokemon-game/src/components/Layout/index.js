import { Children } from 'react';
import s from './style.module.css';

const Layout = ({title, urlBg, colorBg, children}) => {
    const style = {};
    if (urlBg) {
        style.backgroundImage = `url(${urlBg})`;
    }
    if (colorBg) {
        style.backgroundColor = colorBg;
    }
    
    return (
        <section
            style={style}
            className={s.root}
        >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc, s.full}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;
