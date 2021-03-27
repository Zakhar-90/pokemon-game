import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import cn from 'classnames';

import s from './style.module.css';
import { FireBaseContext } from "../../../../context/firebaseContext";

const FinishPage = () => {
    const { pokemons, player2, clearContext, isWin } = useContext(PokemonContext);
    const [isSelected, setSelected] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const firebase = useContext(FireBaseContext);
    
    const history = useHistory();

    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item
        }))
    });

    const handleEndGameClick = () => {
        firebase.addPokemon(selectedPokemon);
        clearContext({});
        history.push('/game');
    }

    return (
        <div className={s.root}>
            <div className={s.win}>
                <h2>You {isWin}!</h2>
                <p className={cn({[s.disable]: isWin !== "WIN"})}>Pick yourself one Pokemon</p>
            </div>
            <div className={s.playerOne}>
                {
                    player1.map((item) => (
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            isActive
                        />
                    ))
                }
            </div>
            <div className={s.title}>
                <button
                    onClick={handleEndGameClick}
                >
                    End Game
                </button>
            </div>
            <div className={s.playerOne}>
                {
                    player2.map((item) => (
                        <div
                            className={cn(s.cardBoard, {
                                [s.selected]: isSelected === item.id
                            })}
                            onClick={() => {
                                if (isWin === "WIN") {
                                    setSelected(item.id);
                                    setSelectedPokemon(item);
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
                            isActive
                        />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FinishPage;
