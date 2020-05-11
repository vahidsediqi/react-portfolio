import React, { Component } from 'react';
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
            <Card className="col-lg-6 col-md-12 p-2 mb-2 ">
                    <CardImg  top width="50%" src={portfolio.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle><strong className="text-danger">Title: </strong>{portfolio.title}</CardTitle>
                    <CardText><strong className="text-danger">Client: </strong>{portfolio.client}</CardText>
                    <CardText><strong className="text-danger">Description: </strong>{portfolio.description}</CardText>
                    <CardText><strong className="text-danger">Project Date: </strong>{portfolio.projectdate}</CardText>
                    <CardText><strong className="text-danger">Project URL: </strong><a href="#">{portfolio.projectURL}</a></CardText>
                </CardBody>
            </Card>
       )
             
       })
        return (
           <div className="container mt-5" id="portfolio">
               <h3 className="text-center text-danger">My Works</h3>
               <div className="row">
                {myWorks}
               </div>
           </div>
        );
    }
}

export default Portfolio;