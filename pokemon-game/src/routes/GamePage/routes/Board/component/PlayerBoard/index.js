import { useState } from 'react';
import PokemonCard from '../../../../../../components/PokemonCard';
import cn from 'classnames';

import s from './style.module.css';

const PlayerBoard =({ player, cards, onClickCard, turnPlayer }) => {
    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {                
                cards.map((item) => (
                    <div 
                        className={cn(s.cardBoard, {
                            [s.selected]: isSelected === item.id
                        })}
                        onClick={() => {
                            if (player === turnPlayer) {
                                setSelected(item.id);
                                onClickCard && onClickCard({
                                    player,
                                    ...item
                                })
                            }
                        }}
                    >
                        <PokemonCard 
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>
                ))                
            }
        </>
    );
};

export default PlayerBoard;
