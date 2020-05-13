import React from 'react';
import { Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentStyles/main.css'
import '../App.css';
import NavMenu from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import More from './More';
import Footer from './Footer';
import { Services } from './About';

function Home() {
  return (
      <div>
          <NavMenu />
          <Hero />
          <Skills />
          <More />
          <Services />
          <Footer />
      </div>
  );
}

export default Home;