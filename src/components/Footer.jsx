import React from 'react';
import './componentStyles/main.css'

const Footer = () => {
    return (
            <div id="footer">
                <div className="container text-center text-light">
                    <div className="row">
                    <div className="col-12">
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