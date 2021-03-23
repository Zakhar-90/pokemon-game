import { useState, useEffect, useContext } from 'react';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';
import Layout from './../../../../components/Layout';
import PokemonCard from './../../../../components/PokemonCard';

import s from './style.module.css';

const StartPage = () => {

    const firebase = useContext(FireBaseContext);
    const pokemonsContext = useContext(PokemonContext);
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

    return (
        <>
            <button>
                Start Game
            </button>
            <Layout 
                title="This is Game Page!"
                colorBg="#e2e2e2"
            >
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
            </Layout>
        </>
    );
};

export default StartPage;
