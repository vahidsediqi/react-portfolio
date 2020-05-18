import React from 'react';
import './componentStyles/main.css'

const Footer = () => {
    return (
            <div id="footer">
                <div className="container text-center text-light">
                    <div className="row">
                    <div className="col-12">
                        <i className="fa fa-facebook pr-4 hero-icons"><a href="#"></a></i>
                        <i className="fa fa-instagram pr-4 hero-icons"><a href="#"></a></i>
                        <i className="fa fa-github pr-4 hero-icons"><a href="#"></a></i>
                        <i className="fa fa-linkedin hero-icons"><a href="#"></a></i>                         
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