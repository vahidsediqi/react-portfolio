import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentStyles/main.css'
import { Link } from 'react-router-dom';
import Home from './Home';

function PagesHero(props) {
  return (
      <div id="pages-hero">
         <div className="container">
             <div className="row">
                 <div  style={{marginTop: '60px', fontSize: '25px'}} className="col-12">
                 <span><Link className="text-light d-inline" to="/">Home /</Link>
                 <Link className="text-light nav-link d-inline" to="/about">About</Link>
                 </span>   
                 </div>
             </div>
         </div>
      </div>
  );
}

export default PagesHero;