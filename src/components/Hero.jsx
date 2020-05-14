import React, { Component } from 'react';
import { Jumbotron, Button} from 'reactstrap';
import mypic from './images/me.jpg'
import './componentStyles/main.css'
import '../hover.css'


const Hero = (props) => {
    return (
      <div className="hero">
        <Jumbotron className="jumbo" >
           <div className="container">
           <img  className="headshot hvr-sweep-to-right" src={mypic} />
                <h1 className="text-center mt-5">Hello, I am Vahid Sediqi</h1>
                  <p className="lead text-center">Front-end <span>Software Engineer,</span> Freelancer</p>
                  <div className="mt-4">
                      <i className="fa fa-facebook pr-4 hero-icons hvr-skew-forward"><a href="#"></a></i>
                      <i className="fa fa-instagram pr-4 hero-icons hvr-skew-forward"><a href="#"></a></i>
                      <i className="fa fa-github pr-4 hero-icons hvr-skew-forward"><a href="#"></a></i>
                      <i className="fa fa-linkedin hero-icons hvr-skew-forward"><a href="#"></a></i>
                  </div>
           </div>
        </Jumbotron>
      </div>
    );
  };
  
  export default Hero;