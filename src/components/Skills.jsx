import React, { Component } from 'react';
import { Jumbotron, Button} from 'reactstrap';
import './componentStyles/main.css'


const Skills = () => {
    return (
     <div id="skills">
      <div className="container">
           <div className="row">
               <h1 className="display-4 text-center col-12 mt-5">Skills</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quis officia deleniti maiores eos aperiam dicta ratione hic ducimus nostrum obcaecati doloremque illo, cum praesentium.</p>
           </div>
           {/* <div className="row">
               <div className="col-12  text-center">
                  <i class="fa fa-html5"></i>
                  <i class="fa fa-css3"></i>
                  <i class="fa fa-bootstrap"></i>
               </div>
           </div> */}
           <div className="row pb-3 border rounded skills-row">
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>HTML5 | CSS3</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>JavaScript</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>Python</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>Bootstrap</span>
                <div className="progress">
                    <div className="progress-bar bg-dark" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>Sass | Less</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>ReactJs</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>JQuery</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>Flask</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>SQL</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>Wordpress</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>Github</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="70"></div>
                </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-1 mt-3">
                   <span>Photoshop</span>
                <div className="progress">
                    <div className="progress-bar bg-dark " role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               </div>
           </div>
           <br/> 
           <br/>
      </div>
 </div>

    );
  };
  
  export default Skills;