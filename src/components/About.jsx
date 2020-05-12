import React from 'react';
import './componentStyles/main.css'
import NavMenu from './Navbar';
import about from './about.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import PagesHero from './PagesHero';
import Footer from './Footer';


const About = () => {
  
    return (
        <React.Fragment>
            <NavMenu />
            <PagesHero title="About" />
            <div id="about" class="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5 mb-5">
                            <h1 className="display-3">About Me</h1>
                                <div className="text-left">I am a creative, artistic and ambitious Sorftware Engineer with a talent for
                                thinking outside the box and coming up with innovative ideas and designs.
                                I have been working in the web design industry for the past 5 years.
                                I pride myself in providing excellent service to all stakeholders 
                                and seeing the positive impact I make in people’s lives and businesses.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <img class="img-fluid img-thumbnail"  src={about} />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 mt-2 ">
                           <h1>Front-end Developer</h1>
                           <div className="row">
                           <ul class="list-group col-lg-6 col-sm-12">
                                <li class="list-group-item"><strong>Birthday: </strong>30 Aug 1989</li>
                                <li class="list-group-item"><strong>Website: </strong>www.vahid.tech</li>
                                <li class="list-group-item"><strong>Phone: </strong>+90 535 636 85 76</li>
                                <li class="list-group-item"><strong>City: </strong>Ankara, Turkey</li>
                            </ul>
                            <ul class="list-group col-lg-6 col-sm-12">
                                <li class="list-group-item"><strong>Freelance: </strong>Available</li>
                                <li class="list-group-item"><strong>Email: </strong>vahid.sediqi@gmail.com</li>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about-cards">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <h1 className="text-center">Learn More</h1>
                            <div className="text-center">I will design and develop fully dynamic and responsive Website or
                               Landing Page for you that will be eye catching, responsive, 
                               Google-friendly and affordable price.
                               I am a Website Developer having 5+ years of professional 
                                experience in this Industry. My focus is customer satisfaction,
                                precision, accuracy and quick services.</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                    <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-briefcase service-icon"></i></div>
                            <h3 className="card-subtitle mb-2">Want An Expert</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                     <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-shield service-icon"></i></div>
                            <h3 className="card-subtitle mb-2">Unlimited Revisions</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                  </div>
                  <div className="card rounded col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{width: "18rem"}}>
                        <div className="card-body text-center">
                            <div className="card-title"><i className="fa fa-dollar service-icon"></i></div>
                            <h3 className="card-subtitle mb-2">Let's Discuss</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </React.Fragment>
    )
}

export default About;