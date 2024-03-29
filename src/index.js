import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FetchData from './FetchData';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateStudent from './CreateStudent';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <CreateStudent />
    <FetchData />
  </React.StrictMode>
);

// reportWebVitals();
