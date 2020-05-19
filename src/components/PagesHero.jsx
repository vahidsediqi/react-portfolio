import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentStyles/main.css'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


function PagesHero(props) {
  return (
<>
    <Navigation />
      <div id="pages-hero">
         <div className="container mt-5 mb-5">
             <div className="row">
                 <div className="col-12">
                     <h1 className="text-light display-4 title">Welcome</h1>

                </div>
                 <div  style={{fontSize: '25px'}} className="col-12 mt-4">
                 <span>
                       <Link className="text-light d-inline" to="/">Home /</Link>
                       <Link className="text-light nav-link d-inline" to={props.route}>{props.title}</Link>
                 </span>   
                 </div>
             </div>
         </div>
      </div>
    </>
  );
}

export default PagesHero;