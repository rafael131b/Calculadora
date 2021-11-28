import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './main/Calculator';


ReactDOM.render(
  <React.StrictMode>
    <h1>Calculadora</h1> 
    <Calculator></Calculator>
  </React.StrictMode>,
  document.getElementById('root')
);


