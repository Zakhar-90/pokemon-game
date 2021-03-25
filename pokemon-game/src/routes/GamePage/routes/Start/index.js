import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from './../../../../components/PokemonCard';

import s from './style.module.css';

const StartPage = () => {

    const firebase = useContext(FireBaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
        });

        return () => firebase.offPokemonSoket();
    }, []);

    const handleChangeSelected = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonsContext.onSelectedPokemons(key, pokemon);

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }

    const handleStartGameClick = () => {
        history.push('/game/board');
    }

    const handleNewPokemon = async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const boardRequest = await boardResponse.json();
        
        const newPokemon = boardRequest.data[Math.floor(Math.random() * 5)];

        firebase.addPokemon(newPokemon, () => {
            firebase.getPokemonSoket((pokemons) => {
                setPokemons(pokemons);
            });
    
            return () => firebase.offPokemonSoket();
        });
    };

    return (
        <>
            <div className={s.buttonWrap}>
                
                <button
                    onClick={handleStartGameClick}
                    disabled={Object.keys(pokemonsContext.pokemons).length < 5}
                >
                    Start Game
                </button>
            </div>
            <div className={s.flex}>
            {
                Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => (
                    <PokemonCard 
                        className={s.card}
                        key={key}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        isActive={true}
                        isSelected={selected}
                        onClickCard={() => {
                            if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                handleChangeSelected(key)
                            }
                        }}
                    />
                ))
            }
            </div>
            <div className={s.buttonWrap}>
                <button
                        onClick={handleNewPokemon}
                    >
                        New Pokemon
                </button>
            </div>
        </>
    );
};

export default StartPage;
