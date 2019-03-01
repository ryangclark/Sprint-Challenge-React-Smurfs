import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route 
          exact
          path="/"
          render={props => 
            <Smurfs {...props} smurfs={this.state.smurfs} />
          }
        />
        <Route path="/smurf-form" component={SmurfForm} />
      </div>
    );
  }
}

export default App;
