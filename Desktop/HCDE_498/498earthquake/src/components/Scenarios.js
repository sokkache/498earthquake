import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const Scenarios = () => {
    return (
        <section className="App-scenarios">
        <h2> Quick Tips </h2>
        <p>Know What to Do in Different Scenarios during an Earthquake</p>
        <div className="scenario-group">
          <div className="scenario">
            <p> car </p>
          </div>
          <div className="scenario">
            <p> family </p>
          </div>
          <div className="scenario">
            <p> bed </p>
          </div>
          <div className="scenario">
          <p> pet </p>
          </div>
        </div>
      </section>
    );
};

export default Scenarios;