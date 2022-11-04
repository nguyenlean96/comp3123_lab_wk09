import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Exercise from './TheRealExercise';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Exercise class_name="Fullstack Development - I" sid="101292266" name="Le An Nguyen" college="Georege Brown College" location="Toronto" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
