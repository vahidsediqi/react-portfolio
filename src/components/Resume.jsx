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
                       <div className="row mt-4">
                           <div className="col-lg-6 col-md-6">
                               <h1 className="title">Work Experience</h1>
                               <ul className="list-group p-3">
                                   <li className="list-group-item" style={fontSize}>
                                       <strong className="title">FRONT-END WEB DEVELOPER</strong> <br/>
                                       <span className="text-muted">2019 - Present</span> <br/>
                                       <span>California, US</span> <br/>
                                       Since Feb 2019 I am working for <a href="https://jsdesigns.site/">JS Designs</a> company as an independent
                                       contractor web designer that is a web development company in United 
                                       State of America
                                   </li>

                                   <li className="list-group-item" style={fontSize}>
                                       <strong className="title">FULL TIME FREELANCER</strong> <br/>
                                       <span className="text-muted">2016 - Present</span> <br/>
                                       <span>Worldwide</span> <br/>
                                       since 2016 I work as a Freelancer web developer I design and develop website for small businesses
                                   </li>
                                   <li className="list-group-item" style={fontSize}>
                                       <strong className="title">GIS Manager, office clerk</strong> <br/>
                                       <span className="text-muted">2008 - 2016</span> <br/>
                                       <span>Kabul, Afghanistan</span> <br/>
                                       I have more than 8 years of experience in office management andGIS management in kabul afghanistan
                                   </li>
                               </ul>
                           </div>
                           <div className="col-lg-6 col-md-6">
                               <h1 className="title">Education</h1>
                               <ul className="list-group p-3">
                                   <li className="list-group-item" style={fontSize}>
                                       <strong className="title"> AHMAD SHAH ABDALI HIGH SCHOOL </strong><br/>
                                        <span className="text-muted">1996 - 2008</span>
                                   </li>
                                   <li className="list-group-item" style={fontSize}>
                                       <strong className="title">BACHELOR OF SOFTWAR ENGINEERING</strong> <br/>
                                        <span className="text-muted">2013 - 2016</span> <br/>
                                        <span>
                                        Because of some physical security problems, I couldn’t finish the bachelor degree so in 2017 when I was in 8th semester I left my country
                                        </span>
                                   </li>
                                   <li className="list-group-item" style={fontSize}>
                                        <strong className="title">ONLINE COURSES AND CODING BOOTCAMPS</strong> <br/>
                                        <span className="text-muted">2014 - 2019</span> <br/>
                                        <span>
                                        As I am a self-taught programmer and web developer, since 2014 I have completed too many online courses and received authorized certificates from Coursera.com                                        </span>
                                   </li>
                                   <li className="list-group-item pl-5" style={fontSize} >
                                         <h3 className="title">Languages</h3>
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
