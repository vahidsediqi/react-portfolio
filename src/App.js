import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import 'font-awesome/css/font-awesome.css';
import Constacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';



function App() {
  return (
    <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Constacts} />
        <Route path="/resume" component={Resume} />


    </React.Fragment>
  );
}

export default App;
