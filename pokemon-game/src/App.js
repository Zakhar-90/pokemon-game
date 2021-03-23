import {useLocation, Route, Switch, Redirect} from 'react-router-dom';
import classNames from 'classnames';

import Footer from './components/Footer';
import MenuHeader from './components/MenuHeader';
import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import ContactPage from './routes/ContactPage';
import AboutPage from './routes/AboutPage';
import NotFound from './routes/NotFound';

import { FireBaseContext } from './context/firebaseContext';
import Firebase from './service/firebase';

import s from './style.module.css';

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (   
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader 
              bgActive={!isPadding}
            />
            <div className={classNames(s.wrap, {
              [s.isHomePage] : isPadding
            })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => (
                  <Redirect to="/404" />
                )} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  )
};

export default App;
