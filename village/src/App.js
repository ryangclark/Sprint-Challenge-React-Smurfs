import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

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

  componentDidMount() {
    this.fetchSmurfs();
  }

  fetchSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({
        smurfs: response.data
      })).catch(error => console.log(error));
  }

  handleDeleteClick = (event, smurfId) => {
    event.preventDefault();
    // axios call
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => this.setState({
        smurfs: response.data
      }))
      .catch(error => console.log("DELETE ERROR:", error))
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route 
          exact
          path="/"
          render={props => 
            <Smurfs
              {...props}
              handleDeleteClick={this.handleDeleteClick}
              smurfs={this.state.smurfs}
            />
          }
        />
        <Route
          exact
          path="/smurf-form"
          render={props =>
            <SmurfForm {...props} fetchSmurfs={this.fetchSmurfs} />
          }
        />
        <Route
          path="/smurf-form/:id"
          render={props =>
            <SmurfForm
              {...props}
              fetchSmurfs={this.fetchSmurfs}
              smurfs={this.state.smurfs}
            />
          }
        />
      </div>
    );
  }
}

export default App;
