import React, { Component } from 'react'

const Services = () => {
    return(
      <div id="services" className=" pt-5 pb-5">
          <div className="container pb-5">
              <div className="row">
                  <h1 className="col-12 text-center text-light">I'm Available For Hire</h1>
              </div>
              <div className="row mt-5">
                    <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-html5 service-icon"></i></div>
                            <h3 className="card-subtitle mb-2">Web Design</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                     <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-wordpress service-icon"></i></div>
                            <h3 className="card-subtitle mb-2">Wordpress</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                  </div>
                  <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-mobile service-icon"></i></div>
                            <h3 className="card-subtitle mb-2">Web Application</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    )
}

export default Services;