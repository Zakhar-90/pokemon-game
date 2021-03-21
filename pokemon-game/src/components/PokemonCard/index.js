import className from 'classnames';

import cardBackSide from './assets/card-back-side.jpg';

import s from './style.module.css';

const PokemonCard = ({pokKey, name, img, id, type, values, isActive, onClickCard}) => {

    console.log("key", pokKey);

    const handleClick = () => {
        onClickCard(id, pokKey);
    }

    return (
        <div className={s.root} onClick={handleClick}>
            <div className={className(s.pokemonCard, {[s.active] : isActive})}>
                <div className={s.cardFront}>
                    <div className={className(s.wrap, s.front)}>
                        <div className={className(s.pokemon, s[type])}>
                            <div className={s.values}>
                                <div className={className(s.count, s.top)}>{values.top}</div>
                                <div className={className(s.count, s.right)}>{values.right}</div>
                                <div className={className(s.count, s.bottom)}>{values.bottom}</div>
                                <div className={className(s.count, s.left)}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={className(s.wrap, s.back)}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;
