import React, { Component } from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';


class Resume extends Component {
    constructor() {
        super();
        this.state = {
            edu: [
                { 
                    heighschool: 'Ahmad shah Abdali',
                    university: 'Sharq univarsity'
                }
            ],
            exp: [ ]
        }
    }

    render() {
        return (
            <div className="text-center">
               <h1 className="text-center display-2 text-primary">Under <br/> Developments</h1>
               <NavItem className="pr-5">
                   <Link className="text-dark text-center nav-link hvr-underline-from-center" to="/">Back to Home Page</Link>
              </NavItem>
            </div>
        )
    }
}
export default Resume;
