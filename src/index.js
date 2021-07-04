import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'utils/initMobX';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
