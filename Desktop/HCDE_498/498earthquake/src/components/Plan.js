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
              Your living situation and the type of home you live in determines some of the practices and protocols you should take in regards to your safety.
              Specifying this will help us build the most relevant readiness plan for you!
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
              One of the most important things to consider during a natural disaster are your family and pets. 
              Taking steps to ensure their safety and prepare will keep you at ease. 
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
               We want to take into account your previous first aid and preparedness plan to let you know what you're doing great and what you could possibly improve on. 
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