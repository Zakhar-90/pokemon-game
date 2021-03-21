import {useState} from 'react';
import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';
import classNames from 'classnames';

import Footer from './components/Footer';
import MenuHeader from './components/MenuHeader';
import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import ContactPage from './routes/ContactPage';

import s from './style.module.css';
import AboutPage from './routes/AboutPage';
import NotFound from './routes/NotFound';

const App = () => {
  const match = useRouteMatch('/');

  return (    
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader 
              bgActive={!match.isExact}
            />
            <div className={classNames(s.wrap, {
              [s.isHomePage] : match.isExact
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
  )
};

export default App;
