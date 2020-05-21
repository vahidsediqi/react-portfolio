import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentStyles/main.css'
import '../App.css';
import Skills from './Skills';
import More from './More';
import { Services } from './About';
import Header from './HeaderComponent'
import { motion } from "framer-motion"


function Home() {
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "-100vw"
    }
  }

  const pageTransition = {
    duration: 0.5
  }
  return (
      <motion.div initial="out" animate="in" exit="out"
       transition={pageTransition}
       variants={pageVariants}>
          <Header />
          <Skills />
          <More />
          <Services />
      </motion.div>
  );
}

export default Home;
