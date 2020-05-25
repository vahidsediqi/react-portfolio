import React from 'react';
import './componentStyles/main.css'
import { Link } from 'react-router-dom';
import Protfolio from './Portfolio';
import Resume from './Resume';
import Constacts from './Contacts';

const Footer = () => {
    return (
            <div id="footer">
                <div className="container text-center text-light">
                    <div className="row">
                    <div className="col-12">
                    <span className="d-block text-center text-muted">SOCIALS</span>
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

                    <div className="col-lg-12 mt-4">
                     <span className="d-block text-center text-muted">LINKS</span>
                     <div className="text-center mt-3">
                        <span className="">
                            <Link className="text-light" to="/">Home |</Link>
                        </span>
                        <span className="text-light">
                            <Link className="text-light" to="/about"> About |</Link>
                        </span>
                        <span className="text-light">
                            <Link className="text-light" to="/portfolio"> Protfolio |</Link>
                        </span>
                        <span className="text-light">
                            <Link className="text-light" to="/resume"> Resume |</Link>
                        </span>   
                            <span className="text-light">
                            <Link className="text-light" to="/contacts"> Constacts</Link>
                        </span>
                     </div>
                    </div>
                    </div>
                    <hr style={{backgroundColor: 'white'}}/>

                    <div className="row">
                    <div className="col-12">
                    <p>© 2020 <a style={{color: "orangered", fontSize:'18px'}} href="https://vahid.tech/">Vahid.tech</a> All rights reserved <strong style={{color: "orangered", fontSize:'18px'}}>|</strong> Designed by Vahid Sediqi</p>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer