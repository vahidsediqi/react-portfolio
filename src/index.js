import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Router  } from 'react-router-dom'
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
     <HashRouter>
              <App />
              <ScrollToTop />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
