import Button from '@material-ui/core/Button';
import {BrowserRouter, Route} from "react-router-dom";
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="About-us">
                <div className="box">
                <h1> About Us </h1>
                <p>We are a group that is dedicated to allowing people in earthquake prone areas to understand the effects and consequences of an earthquake and how to prepare themselves and their family for an earthquake. We help to provide a readiness plan that is customized for each person based on their living situation, as well as scenarios on what to do during earthquakes and general information about how earthquakes occur. 
                </p>
                <Button variant="contained" color="#FF9C27" 
                //onClick={Info}   onclick brings this to new page
                >
                        Learn About Earthquakes
                </Button>
                </div>
            </section>
        );
    }
};

export default About;


      