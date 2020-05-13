import React, { Component } from 'react'
import '../hover.css'

const More = () => {
    return(
      <div id="services" className=" pt-5 pb-5">
          <div className="container pb-5">
              <div className="row">
                  <h1 className="col-12 text-center text-light">I'm Available For Hire</h1>
              </div>
              <div className="row mt-5">
                    <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-grow-rotate" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-html5 service-icon hvr-icon"></i></div>
                            <h3 className="card-subtitle mb-2">Web Design</h3>
                            <p className="card-text ">
                             I am expert in web designing using HTML,
                             Css and JavaScript, I use modern front-end 
                             technologies like ReactJs Bootstrap and Jquery to design 
                             a Responsive, Dynamic and animated website.
                            </p>
                        </div>
                    </div>
                     <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-grow-rotate" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-wordpress service-icon hvr-icon"></i></div>
                            <h3 className="card-subtitle mb-2">CMS</h3>
                            <p className="card-text">
                            I am comfortable working with CMS like Wordpress,
                             Shopify and OpenCart using elementor wordpress page builder
                             to build responsive Website
                            </p>
                        </div>
                  </div>
                  <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-grow-rotate" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-mobile service-icon hvr-icon"></i></div>
                            <h3 className="card-subtitle mb-2">Web Apps</h3>
                            <p className="card-text">
                            I have more than 4 year of experience OOP like JavaScript, C++ and python
                            and I build web apps using flask python library and SQL for backend for building web apps
                            </p>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    )
}

export default More;