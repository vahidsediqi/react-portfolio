import React, { Component, Fragment } from 'react';
import PagesHero from './PagesHero';
import NavMenu from './Navbar';
import Skills from './Skills';
import More from './More';


class Resume extends Component {
  

    render() {
        const fontSize = {
            fontSize: '18px'
        }
        const maxWidth = {
            maxWidth: "550px"  
        }
        return (
            <Fragment>
                <NavMenu />
               <PagesHero title="Resume"/>
               <div id="resume">
                   <div className="container">
                       <div className="row">
                           <div className="p-3 col-12">
                               <h1>SUMARY</h1>
                               <div style={maxWidth, fontSize}>Experienced Front-end Softwar Developer with a demonstrated history 
                              of working in the arts and crafts industry. Skilled in JavaScript and ReactJs. </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-lg-6 col-md-6">
                               <h1 className="text-light">Work Experience</h1>
                               <ul className="list-group p-3">
                                   <li className="list-group-item" style={fontSize}>
                                       <strong>FRONT-END WEB DEVELOPER</strong> <br/>
                                       <span className="text-muted">2019 - Present</span> <br/>
                                       <span>California, US</span> <br/>
                                       Since Feb 2019 I am working for <a href="https://jsdesigns.site/">JS Designs</a> company as an independent
                                       contractor web designer that is a web development company in United 
                                       State of America
                                   </li>
                                   <li className="list-group-item" style={fontSize}>
                                       <strong>WEB MASTER, SOCIAL MEDIA MANAGER</strong> <br/>
                                       <span className="text-muted">2017 - 2019</span> <br/>
                                       <span>California, US</span> <br/>
                                       Since Feb 2019 I am working for JS Designs company as an independent
                                       contractor web designer that is a web development company in United 
                                       State of America
                                   </li>
                                   <li className="list-group-item" style={fontSize}>
                                       <strong>FULL TIME FREELANCER</strong> <br/>
                                       <span className="text-muted">2016 - Present</span> <br/>
                                       <span>Worldwide</span> <br/>
                                       since 2016 I work as a Freelancer web developer I design and develop website for small businesses
                                   </li>
                               </ul>
                           </div>
                           <div className="col-lg-6 col-md-6">
                               <h1 className="text-light">Education</h1>
                               <ul className="list-group p-3">
                                   <li className="list-group-item" style={fontSize}>
                                        AHMAD SHAH ABDALI HIGH SCHOOL <br/>
                                        <span className="text-muted">1996 - 2008</span>
                                   </li>
                                   <li className="list-group-item" style={fontSize}>
                                        BACHELOR OF SOFTWAR ENGINEERING <br/>
                                        <span className="text-muted">2013 - 2016</span> <br/>
                                        <span>
                                        Because of some physical security problems, I couldn’t finish the bachelor degree so in 2017 when I was in 8th semester I left my country
                                        </span>
                                   </li>
                                   <li className="list-group-item" style={fontSize}>
                                         ONLINE COURSES AND CODING BOOTCAMPS  <br/>
                                        <span className="text-muted">2014 - 2019</span> <br/>
                                        <span>
                                        As I am a self-taught programmer and web developer, since 2014 I have completed too many online courses and received authorized certificates from Coursera.com                                        </span>
                                   </li>
                                   <li className="list-group-item pl-5" style={fontSize} >
                                         <h3>Languages</h3>
                                        <li>
                                            English  <span className="badge badge-warning">Advanced</span>
                                        </li>
                                        <li>
                                            Turkish  <span className="badge badge-warning">Intermediate</span>
                                        </li>
                                        <li>
                                        Persian  <span className="badge badge-warning">Native</span>
                                        </li>
                                   </li>
                             
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
               <Skills />
            <More />
            </Fragment>
        )
    }
}
export default Resume;
