import React from 'react';
import './componentStyles/main.css'
import NavMenu from './Navbar';


const About = () => {
    return (

        <div id="about">
            <NavMenu />
            <br/>
            <br/>
            <br/>
            <h1 className="display-1 text-center">About Page</h1>
            <h1 className="text-center text-primary">Comeing Soon</h1>
        </div>
    )
}

export default About;