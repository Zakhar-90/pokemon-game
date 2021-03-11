import s from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg}) => {
    const bg = urlBg ? `url(${urlBg})` : colorBg;
    const styleBg = {
        background: bg
    };

    return (
        <section
            style={styleBg}
            className={s.root}
        >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc, s.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;
