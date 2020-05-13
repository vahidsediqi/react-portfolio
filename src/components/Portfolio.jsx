import React, { Component, Fragment } from 'react';
import { PORTFOLIOS } from './Portfolios';
import { Button, Card, CardText, CardTitle, CardImg, CardBody, CardSubtitle,} from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PagesHero from './PagesHero';
import NavMenu from './Navbar';
import Footer from './Footer';


class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
        portfolios : PORTFOLIOS

        }
      
    }
    render() {
      const myWorks = this.state.portfolios.map(portfolio => {
       return (
        <div className="col-lg-6 col-md-6 col-sm-12 mt-4 hvr-outline-in portfolio-item">
            <img className="img-thumbnail" src={portfolio.image} />
            <span className="d-block">{portfolio.title}</span>
            <span className="d-block"><a href="#">{portfolio.projectURL}</a></span>
            <span className="text-muted">{portfolio.projectdate}</span>
       </div>  
       )
             
       })
        return (
            <Fragment>
                <NavMenu />
                 <PagesHero title="Portfolio"/>
                <div id="portfolio">
                    <div  className="container">
                        <h3 style={{color: '#0D1326'}} className="text-center">I Love What I Do</h3>
                        <div className="row">
                            {myWorks}
                        </div>
                    </div>
                </div>
                <Footer />
           </Fragment>
        );
    }
}

export default Portfolio;