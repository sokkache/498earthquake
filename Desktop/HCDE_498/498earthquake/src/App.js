import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Plan from "./components/Plan";
import Scenarios from "./components/Scenarios";


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
      <div>
      <BrowserRouter>
        <Route path="/" component={Header}/>
      </BrowserRouter>

      <BrowserRouter>
        <Route path="/" component={About}/>
      </BrowserRouter>

      <BrowserRouter>
        <Route path="/" component={Plan}/>
      </BrowserRouter>

      <BrowserRouter>
        <Route path="/" component={Scenarios}/>
      </BrowserRouter>

      </div>

    );
  }
}

export default App;

