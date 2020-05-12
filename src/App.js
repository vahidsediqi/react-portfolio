import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import 'font-awesome/css/font-awesome.css';



function App() {
  return (
    <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
    </React.Fragment>
  );
}

export default App;
