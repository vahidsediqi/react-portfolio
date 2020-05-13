import React from 'react';
import './componentStyles/main.css'
import webpic from './images/website.png'


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
           <div className="row">
           <div className="col-lg-8 col-md-12 mt-5">
                    <h4>
                       What is Mobile-first approach?
                    </h4>
                    <div className="paragraph mt-3">It is the ideology that mobile design, as the hardest, should be done first. 
                      Once the mobile design questions are answered, designing for other devices will be easier.
                     What it boils down to is that, the smallest of the designs will have only the essential features,
                     so right away you have designed the heart of your UX.
                     I will design a fully responsive website (Mobile-first approach) website that fits all screen sizes with latest technology
                     like bootstrap 4 and Materialize Css.
                     </div>
               </div>
               <div className="col-lg-4 col-md-12 ml-auto">
                   <img className="img-thumbnail" src={webpic} />
               </div>

           </div>
           <br/>
      </div>
 </div>

    );
  };
  
  export default Skills;