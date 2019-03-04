import React from "react";
import Button from '@material-ui/core/Button';


const About = () => {
    return (
        <section className="About-us">
            <div className="box">
              <h1> About Us </h1>
              <p>We are a group that is dedicated to allowing people in earthquake prone areas to understand the effects and consequences of an earthquake and how to prepare themselves and their family for an earthquake. We help to provide a readiness plan that is customized for each person based on their living situation, as well as scenarios on what to do during earthquakes and general information about how earthquakes occur. 
               </p>
            <Button variant="contained" color="#FF9C27">
                    Learn About Earthquakes
            </Button>
            </div>
        </section>
    );
};

export default About;


      