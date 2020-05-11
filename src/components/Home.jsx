import React from 'react';
import { Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentStyles/main.css'
import '../App.css';
import NavMenu from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Services from './Services';
import Footer from './Footer';
import About from './About'

function Home() {
  return (
    <div>
        <NavMenu />
        <Hero />
        <Skills/>
        <Services />
        {/* <Portfolio /> */}
        <Footer />
    </div>
  );
}

export default Home;
