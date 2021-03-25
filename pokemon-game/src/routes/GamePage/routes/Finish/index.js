import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import s from './style.module.css';

const FinishPage = () => {
    const { pokemons } = useContext(PokemonContext);
    const { player2 } = useContext(PokemonContext);
    const history = useHistory();

    const [player2Pokemons, setPlayer2Pokemons] = useState(player2);

    console.log("pl2Cards", player2Pokemons);

    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item
        }))
    });

    const handleEndGameClick = () => {
        history.push('/game');
    }

    console.log("PokemonContext", pokemons);
    return (
        <div className={s.root}>
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
                            minimize
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
                    ))
                }
            </div>
        </div>
    )
}

export default FinishPage;
