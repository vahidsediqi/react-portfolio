import React, { Component } from 'react';
import { Jumbotron, Button} from 'reactstrap';
import mypic from './me.jpg'
import './componentStyles/main.css'


const Hero = (props) => {
    return (
      <div className="hero">
        <Jumbotron className="jumbo" >
           <div className="container" style={{marginTop: '80px'}}>
           <img  className="headshot mt-3" src={mypic} />
                <h1 className="text-center mt-5">Hello, I am Vahid Sediqi</h1>
                  <p className="lead text-center">Front-end <span>Software Engineer,</span> Freelancer</p>
                  <br/>
                  <div className="mt-4">
                      <i className="fa fa-facebook pr-4 hero-icons"><a href="#"></a></i>
                      <i className="fa fa-instagram pr-4 hero-icons"><a href="#"></a></i>
                      <i className="fa fa-github pr-4 hero-icons"><a href="#"></a></i>
                      <i className="fa fa-linkedin hero-icons"><a href="#"></a></i>
                  </div>
           </div>
        </Jumbotron>
      </div>
    );
  };
  
  export default Hero;