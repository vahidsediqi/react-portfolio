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
                 <div className="col-lg-4 col-md-6 col-sm-12">
                    <img data-toggle="modal" data-target="#exampleModalLong" className="img-fluid m-2" src={mywork.image} />
                      <span className="text-muted tex-center d-block">{mywork.title}</span>
                        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div class="modal-dialog" style={{border: 'orangered solid 1px'}} role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 style={{color: 'orangered'}} class="modal-title" id="exampleModalLongTitle">{mywork.title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                       <img className="img-fluid m-2" src={mywork.image} />
                                        <span className="text-left d-block">Description: {mywork.description}</span>
                                        <span className="text-muted">Date: {mywork.projectdate}</span>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Open</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>
             )
      })
      return (
          <div>
              <NavMenu />
              <PagesHero title="Portfolio"/>
              <div className="container">
                    <div className="col-12 text-center">
                    <h1 clasName="text-center">My Protfolio</h1>
                    <h3 clasName="text-center">I Love What I Do</h3>
                    </div>
                    <div className="row">{myWorks}</div>
              </div>
          </div>
      )
  }
}

export default Protfolio;