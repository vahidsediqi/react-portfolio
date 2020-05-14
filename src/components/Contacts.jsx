import React from 'react';
import './componentStyles/main.css'
import PagesHero from './PagesHero';
import NavMenu from './Navbar';
import Footer from './Footer';

const Constacts = () => {
    return (

           <React.Fragment>
               <NavMenu />
               <PagesHero title="Contacts" route="/contacts"/>
                <div id="contacts">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6 col md-12 col-sm-12 mt-5">
                            <div className="form">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg mt-4" placeholder="Name"/>
                                        <input type="email" className="form-control form-control-lg form-control mt-4" placeholder="Email"/>
                                        <input type="phone" className="form-control form-control-lg mt-4" placeholder="Phone Number"/>
                                        <textarea className="form-control form-control-lg mt-4" placeholder="Message" ></textarea>
                                        <button className="btn btn-outline-dark  mt-3">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                            <div className="col-lg-6 col md-12 col-sm-12">
                                <br/>
                                <div className="p-4 mt-5" style={{backgroundColor: '#F8F9FA'}}>
                                    <span className="text-dark d-block" style={{fontSize: '20px'}}>
                                        <i className="fa fa-phone hvr-skew-forward mr-2"></i><a className="text-dark" href="#">  (+90) 535 636 85 76</a>
                                    </span>
                                </div>
                                <br/>
                                <div className="p-4" style={{backgroundColor: '#F8F9FA'}}>
                                    <span className="text-dark d-block" style={{fontSize: '20px'}}>
                                       <i className="fa fa-envelope hvr-skew-forward mr-2"></i><a className="text-dark" href="#">  vahid.sediqi@gmail.com</a>
                                    </span>
                                </div>
                                <br/>
                                <div className="socials p-4 rounded" style={{backgroundColor: '#F8F9FA'}}>
                                <span className="text-dark d-block" style={{fontSize: '20px'}}>
                                       <i className="fa fa-download hvr-skew-forward mr-2"></i><a className="text-dark" href="#">Download Resume</a>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
           </React.Fragment>
    )
}

export default Constacts;




