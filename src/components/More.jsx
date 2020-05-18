import React, { Component } from 'react'
import '../hover.css';
import webdesgn from './images/webdesign.jpg';
import cms from './images/cms.jpg';
import webapp from './images/webapp.jpg';



const More = () => {
    return(
      <div id="services" className=" pt-5 pb-5">
          <div className="container pb-5">
              <div className="row">
                  <h1 className="col-12 text-center text-light">I'm Available For Hire</h1>
              </div>
              <div className="row mt-5">
                    <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-forward" style={{width: "18rem"}}>
                    <img class="card-img-top hvr-icon" style={{borderRadius: '50%'}} src={webapp} alt="Card image cap" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Web Apps</h3>
                            <div className="paragraph">
                             I am expert in web designing using HTML,
                             Css and JavaScript, I use modern front-end 
                             technologies like ReactJs Bootstrap and Jquery to design 
                             a Responsive, Dynamic and animated website.
                            </div>
                        </div>
                    </div>
                     <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-forward" style={{width: "18rem"}}>
                     <img class="card-img-top hvr-icon" style={{borderRadius: '50%'}} src={cms} alt="Card image cap" />
                        <div className="card-body text-center">
                            <h3 className="card-title">CMS</h3>
                            <div className="paragraph">
                            I am comfortable working with CMS like Wordpress,
                             Shopify and OpenCart using elementor wordpress page builder
                             to build responsive Website
                            </div>
                        </div>
                  </div>
                  <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12 hvr-icon-forward" style={{width: "18rem"}}>
                  <img class="card-img-top hvr-icon" style={{borderRadius: '50%'}} src={webdesgn} alt="Card image cap" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Web Apps</h3>
                            <div className="paragraph">
                            I have more than 4 year of experience OOP like JavaScript, C++ and python
                            and I build web apps using flask python library and SQL for backend for building web apps
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    )
}

export default More;