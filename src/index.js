import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC_QqT6VrooF9Jnhz8L-DkwUZ_XrrlePf0",
  authDomain: "d2print.firebaseapp.com",
  projectId: "d2print",
  storageBucket: "d2print.appspot.com",
  messagingSenderId: "639709305186",
  appId: "1:639709305186:web:0e2e7130dcfaf8961ab43b"
};

const app = initializeApp(firebaseConfig);

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
