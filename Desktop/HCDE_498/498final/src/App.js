import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Hello World",
      numClicks:0
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav className="App-nav">
            <ul>
              <li><a>Home</a></li>
              <li><a>Earthquake Information</a></li>
              <li><a>Plan</a></li>
              <li><a>Scenarios</a></li>
            </ul>
          </nav>
        </header>
        <body className="App-body">
          <section className="About-us">
          <div className="box">
            <h1> About Us </h1>
            <p>We are a group that is dedicated to allowing people in earthquake prone areas to understand the effects and consequences of an earthquake and how to prepare themselves and their family for an earthquake. We help to provide a readiness plan that is customized for each person based on their living situation, as well as scenarios on what to do during earthquakes and general information about how earthquakes occur. 
            </p>
          <Button variant="contained" color="#FF9C27" 
          onClick={this.handleClick}>
            Learn About Earthquakes
          </Button>
          </div>
          </section>
          <section className="App-build-plan">
            <h2> Build a Plan </h2>
            <p>Take our survey to create your customized preparedness plan</p>
            <div className="card-group">
              
            <Card className="card">
            <CardContent>
              <Typography className="card-title" variant="h5" color="textPrimary" gutterBottom>
                Your Home
              </Typography>
              <Typography variant="h6" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </Typography>
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent>
              <Typography className="card-title" variant="h5" color="textPrimary" gutterBottom>
                Your Family and Pets
              </Typography>
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
              <Typography variant="h6" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </Typography>
            </CardContent>
          </Card>
            </div>
            <Button variant="contained" color="#FF9C27" 
          onClick={this.handleClick}>
            Build Your plan
          </Button>
          </section>

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
        </body>
      </div>
    );
  }
}

export default App;
