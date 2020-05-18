import React from 'react';
import { Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import 'font-awesome/css/font-awesome.css';
import Constacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';





function App() {
  return (
    
    <React.Fragment>
      <ScrollToTop />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Constacts} />
        <Route path="/resume" component={Resume} />
      <ScrollToTop />
      <Footer />
    </React.Fragment>
  );
}

export default App;
