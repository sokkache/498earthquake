import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import home from "./home.png";
import car from "./car.png";
import bed from "./bed.png";
import pet from "./pet.png";


const Scenarios = () => {
    return (
        <section className="App-scenarios">
        <h2> Quick Tips </h2>
        <p>Know What to Do in Different Scenarios during an Earthquake</p>
        <div className="scenario-group">
          <div className="scenario">
            <img src={car}/>
          </div>
          <div className="scenario">
          <img src={home}/>
          </div>
          <div className="scenario">
          <img src={bed}/>
          </div>
          <div className="scenario">
          <img src={pet}/>
          </div>
        </div>
      </section>
    );
};

export default Scenarios;