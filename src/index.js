import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './components/About/About';
import Contact from './components/Contact/Contact.lazy';
import Login from './components/Login/Login';

ReactDOM.render(
  <React.StrictMode>
    <App />,
    <About />,
    <Contact></Contact>,
    <Login />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
