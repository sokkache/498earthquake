import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import house from "./house.png";
import family from "./family.png";
import firstaid from "./firstaid.png";


const Plan = () => {
    return (
        <section className="App-build-plan">
        <h2> Build a Plan </h2>
        <p>Take our survey to create your customized preparedness plan</p>
        <div className="card-group">
          
            <Card className="card">
            <CardContent>
              <Typography className="card-title" variant="h5" color="textPrimary" gutterBottom>
                Your Home
              </Typography>
              <img src={house}/>
              <Typography variant="h6" color="textSecondary">
              When you are at home when an earthquake occurs, you should drop to the ground and take cover under a sturdy piece of furniture such as a table. Hold on to something untile the shaking stops, and try to avoid glass, windows, or anything else that might fall. 
              </Typography>
            </CardContent>
            </Card>

            <Card className="card">
            <CardContent>
              <Typography className="card-title" variant="h5" color="textPrimary" gutterBottom>
                Your Family and Pets
              </Typography>
              <img src={family}/>
              <Typography variant="h6" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </Typography>
            </CardContent>
            </Card>

            <Card className="card">
            <CardContent>
              <Typography className="card-title" color="textPrimary" variant="h5" gutterBottom>
                Your Current First Aid and Preparedness
              </Typography>
              <img src={firstaid}/>
              <Typography variant="h6" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </Typography>
            </CardContent>
            </Card>
          </div>
          <Button variant="contained" color="#FF9C27">
          Build Your plan
          </Button>
      </section>
    );
};

export default Plan;