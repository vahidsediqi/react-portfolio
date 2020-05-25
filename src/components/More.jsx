import React, { Component } from 'react'
import '../hover.css';
import webdesgn from './images/features-3.svg';
import cms from './images/features-4.svg';
import webapp from './images/webapp.jpg';



const More = () => {
    return(
      <div id="services" className=" pt-5 pb-5">
          <div className="container pb-5">
              <div className="row">
                  <h1 className="col-12 text-center text-light">I'm Available For Hire</h1>
              </div>
              <div className="row mt-5">
                    <div className="card p-0 col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-forward" style={{width: "18rem"}}>
                        <img class="card-img card-img-top hvr-icon"  src={webdesgn} alt="web design" />
                        <h3 className="card-title text-center mt-3">WEB DESIGN</h3>
                            <div className="card-body text-center">
                                <div className="paragraph">
                                I am an expert at designing websites using HTML,
                                CSS and JavaScript. As well as, modern frontend technologies like React,
                                Bootstrap and jQuery to design dynamic, responsive and mobile-friendly websites                            </div>
                            </div>
                    </div>
                     <div className="card p-0 col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-forward" style={{width: "18rem"}}>
                        <img class="card-img" src={cms} alt="wordpress design" />
                        <h3 className="card-title text-center mt-3">CMS</h3>
                            <div className="card-body text-center">
                                <div className="paragraph">
                                I am comfortable working with CMS like Wordpress,
                                Shopify and OpenCart using elementor wordpress page builder
                                to build responsive Website
                                </div>
                            </div>
                  </div>
                  <div className="card p-0 col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-forward" style={{width: "18rem"}}>
                    <img class="card-img card-img-top hvr-icon" src={webapp} alt="web apps" />
                    <h3 className="card-title text-center mt-3">WEB APPS</h3>
                            <div className="card-body text-center">
                                <div className="paragraph">
                                I have 4+ years of OOP experience using JavaScript, C++ and Python. I build web applications using Flask and SQL for backend and JavaScript and React for frontend.
                                </div>
                            </div>
                    </div>
              </div>
          </div>
      </div>
    )
}

export default More;