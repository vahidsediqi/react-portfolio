import React from 'react';
import './componentStyles/main.css'

const Footer = () => {
    return (

        <div id="footer" className="text-light text-center">
            <div className="conteiner">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-4">
                            <i className="fa fa-facebook pr-4 hero-icons"><a href="#"></a></i>
                            <i className="fa fa-instagram pr-4 hero-icons"><a href="#"></a></i>
                            <i className="fa fa-github pr-4 hero-icons"><a href="#"></a></i>
                            <i className="fa fa-linkedin hero-icons"><a href="#"></a></i>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col 12">
                            <hr style={{backgroundColor: 'white', width: '750px'}}/>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-12">
                        <p>© 2020 Vahid.tech All rights reserved | Designed by Vahid Sediqi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer