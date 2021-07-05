import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FinalApp from './FinalApp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <FinalApp />
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
