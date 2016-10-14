import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('root')
);
