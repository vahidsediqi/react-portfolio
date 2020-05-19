import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentStyles/main.css'
import '../App.css';
import Skills from './Skills';
import More from './More';
import { Services } from './About';
import Header from './HeaderComponent'
function Home() {
  return (
      <div>
          <Header />
          <Skills />
          <More />
          <Services />
      </div>
  );
}

export default Home;
