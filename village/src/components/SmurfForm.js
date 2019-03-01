import React, { Component } from 'react';

import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      currentSmurf: {}
    };
  }

  addSmurf = event => {
    event.preventDefault();
    
    // add code to create the smurf using the api
    axios
      .post('http://localhost:3333/smurfs',
      {name: this.state.name, age: this.state.age, height: this.state.height})
      // .then(response => console.log(response))
      .then(this.props.fetchSmurfs)
      .then(this.props.history.push('/'))
      .catch(error => console.log("POST ERROR:", error));
    
    // reset form via state
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState:', prevState);
    console.log('prevProps', prevProps);
    if (this.props.match.params.id)
      if (!this.state.currentSmurf.id) {
        console.log('(!this.state.currentSmurf.id) running');
      } // else if ()
    // if (
    //   //ensure we have a dynamic route, AND one of the following
    //   this.props.match.params.id && 
    //   (
    //     //if this.state doesn't have currentSmurf, get it
    //     (!this.state.currentSmurf.id) 
    //   || // OR
    //     //if the dynamic route doesn't match the state currentSmurf, get it
    //     (this.state.currentSmurf.id !== this.props.match.params.id)
    //   )
    // ) {
    //     this.setState({
    //       currentSmurf: this.props.smurfs.find(smurf => smurf.id )
    //     })
    //   };
    }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <label>
            Name<br></br>
            <input
              name="name"
              onChange={this.handleInputChange}
              placeholder="Brainey Smurf"
              required
              type="text"
              value={this.state.name}
            />
          </label>
          <label>
            Age<br></br>
            <input
              name="age"
              onChange={this.handleInputChange}
              placeholder="200"
              required
              type="number"
              value={this.state.age}
            />
          </label>
          <label>
            Height<br></br>
            <input
              name="height"
              onChange={this.handleInputChange}
              placeholder="8cm"
              value={this.state.height}
            />
          </label>
          <button type="submit">Add to the Village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
