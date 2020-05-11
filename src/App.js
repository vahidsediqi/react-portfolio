import React from 'react';
import { Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';



function App() {
  return (
    <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />

    </React.Fragment>
  );
}

export default App;
