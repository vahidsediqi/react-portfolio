import React, { Component } from 'react';
import { Jumbotron, Button} from 'reactstrap';
import mypic from './images/me.png'
import './componentStyles/main.css'
import '../hover.css'
import Navigation from './Navigation'

const Header = (props) => {
    return (
      <>
    <Navigation />
      <div id="hero">
        <Jumbotron className="jumbo" >
           <div className="container">
           <img  className="headshot hvr-sweep-to-right" src={mypic} />
                <h1 className="text-center mt-5">Hello, I am Vahid Sediqi</h1>
                  <p className="lead text-center">Front-end <span>Software Engineer,</span> Freelancer</p>
                  <div className="mt-4">
                  <a style={{color: "white"}} href="https://www.facebook.com/vs.sediqi">  
                        <i className="fa fa-facebook pr-4 hero-icons "></i>
                    </a>
                    <a style={{color: "white"}} href="https://www.instagram.com/vahidsediqi_/">
                        <i className="fa fa-instagram pr-4 hero-icons "></i>
                    </a>
                    <a style={{color: "white"}} href="https://github.com/vahidsediqi">
                        <i className="fa fa-github pr-4 hero-icons "></i>
                    </a>
                    <a style={{color: "white"}} href="https://www.linkedin.com/in/vahid-sediqi-582021131/tr-tr?originalSubdomain=tr">
                        <i className="fa fa-linkedin hero-icons "></i>
                    </a> 
                  </div>
           </div>
        </Jumbotron>
      </div>
      </>
    );
  };
  
  export default Header;