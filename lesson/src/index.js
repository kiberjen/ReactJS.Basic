import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const currentName = 'Evgen';

ReactDOM.render(
  <React.StrictMode>
  <App name={currentName} />
  </React.StrictMode>,
  document.getElementById('root')
);
