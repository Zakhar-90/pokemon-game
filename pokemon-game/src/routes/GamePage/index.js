import { useRouteMatch, Switch, Route } from 'react-router-dom';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react';

const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [cardPlayer2, setCardPlayer2] = useState({});
  const [isWin, setWin] = useState({});

  const match = useRouteMatch();

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];

        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon
      }
    })
  }

  const setWiner = (win) => {
    setWin(win);
  }

  const setCards = (player2) => {
    setCardPlayer2(player2);
  }

  const clearContext = () => {
    setSelectedPokemons({});
  }

  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      onSelectedPokemons: handleSelectedPokemons,
      setCardPlayer: setCards,
      player2: cardPlayer2,
      clearContext: clearContext,
      isWin: isWin,
      setWin: setWiner

    }}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
