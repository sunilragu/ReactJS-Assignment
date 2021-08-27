import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import MobileOSList from './MobileOSList';
import App from './App';
import ComponentLifeCycle from './ComponentLifeCycle';
import Login from './LoginModule/Login';
import SignUp from './LoginModule/SignUp';

ReactDOM.render(
  <React.StrictMode>

    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
