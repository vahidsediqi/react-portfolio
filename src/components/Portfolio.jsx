import React, { Component, useState }from 'react';
import { PORTFOLIOS } from './Portfolios';
import PagesHero from './PagesHero';
import NavMenu from './Navbar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  
class Protfolio extends Component {
  constructor () {
      super();
      this.state = {
        portfolio: PORTFOLIOS
      }
  }
 
  render() {
     const myWorks = this.state.portfolio.map(mywork => {
             return (
                <div class="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem", border: '0', opacity: '5'}}>
                    <div className="card-group">
                        <img class="card-img-top" src={mywork.image} alt="Card image cap" />
                        <div class="card-body">
                            <h3 className="title">{mywork.title}</h3>
                            <div class="card-text paragraph">
                              {mywork.description}
                            </div>
                            <span className="text-muted d-block">
                                {mywork.projectdate}
                            </span>
                          <a href={mywork.projectURL}>More</a>
                        </div>
                    </div>
                </div>
             )
      })
      return (
          <div>
              <NavMenu />
              <PagesHero title="Portfolio"/>
              <div id="portfolio">
                <div className="container">
                    <div className="row">
                    <div className="col-12 text-center">
                            <h1 clasName="text-center">My Protfolio</h1>
                            <h3 clasName="text-center">I Love What I Do</h3>
                        </div>
                    </div>
                    <div className="row">
                      {myWorks}
                    </div>
                </div>
              </div>
          </div>
      )
  }
}

export default Protfolio;