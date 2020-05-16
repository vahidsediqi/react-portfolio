import React, { Component } from 'react';
import { PORTFOLIOS } from './Portfolios';
import PagesHero from './PagesHero';
import NavMenu from './Navbar';


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
                    <img className="img-fluid m-2" src={mywork.image} />
                    <span className="text-muted tex-center d-block">{mywork.title}</span>
                    <span className="text-muted tex-center">{mywork.projectURL}</span>
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