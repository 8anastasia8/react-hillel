import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header';
import Main from "./components/main/Main";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
      <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
