import {useState} from 'react';
import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';

const App = () => {
  const [page, setPage] = useState('app');

  const handleChangePage = (page) => {
    setPage(page);
  };

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />
    case "game":
      return <GamePage onChangePage={handleChangePage} />
    default:
      return <HomePage onChangePage={handleChangePage} />
  }
};

export default App;
