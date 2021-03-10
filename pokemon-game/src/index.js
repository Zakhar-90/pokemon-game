import React from 'react';
import ReactDOM from 'react-dom';

import HeaderBlock from './components/HeaderBlock';

import './index.css';

const AppList = () => {
  const items = ['Item1', 'Item2', 'Item3', 'Item4'];
  return (
    <ul>
      {
        items.map(item => <li>{ item }</li>)
      }
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
}

const AppHeader = () => {
  return (
      <h1 
        className="header"
      >
        Hello World!
      </h1>
    );
}

const AppInput = () => {
  const placeholder = 'Type text...';

  return (
    <label>
      <input placeholder={placeholder} />
    </label>
  )
}

const App = () => {
  return (
    <>
      <HeaderBlock />
      <AppHeader />
      <AppInput />
      <AppList />
      <AppHeader />
      <AppList />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
