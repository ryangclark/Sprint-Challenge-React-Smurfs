import React, { Component } from 'react';

import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      currentSmurf: {},
    };
    // console.log(props.smurfs);
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
      .catch(error => console.log('POST ERROR:', error));
    
    // reset form via state
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  componentDidMount() {
    if (this.props.match.params.id && this.props.smurfs.length) {
      const currentSmurf = this.props.smurfs.find(smurf => 
        `${smurf.id}` === this.props.match.params.id);
      this.setState({
        currentSmurf: currentSmurf,
        name: currentSmurf.name,
        age: currentSmurf.age,
        height: currentSmurf.height
      });
    }
  }
  
  componentDidUpdate(prevProps) {
    if (
        (this.props.smurfs !== prevProps.smurfs)
        || (this.props.match.params.id !== prevProps.match.params.id)
     ) {
      console.log('this.state.currentSmurf', this.state.currentSmurf);
      console.log(Boolean(this.state.currentSmurf.hasOwnProperty('id')));
      const currentSmurf = this.props.smurfs.find(smurf => 
        `${smurf.id}` === this.props.match.params.id);
      this.setState({
        currentSmurf: currentSmurf,
        name: currentSmurf.name,
        age: currentSmurf.age,
        height: currentSmurf.height
      });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSmurf = event => {
    event.preventDefault();
    
    // add code to create the smurf using the api
    axios
      .put(`http://localhost:3333/smurfs/${this.state.currentSmurf.id}`,
      {name: this.state.name, age: this.state.age, height: this.state.height})
      // .then(response => console.log(response))
      .then(this.props.fetchSmurfs)
      .then(this.props.history.push('/'))
      .catch(error => console.log('PUT ERROR:', error));
  }

  render() {
    return (
      <div className="SmurfForm">
        {this.props.match.params.id
          ? <h2>Edit Smurf: {this.state.currentSmurf.name}</h2>
          : <h2>Add Smurf</h2>
        }
        <form onSubmit={
          this.props.match.params.id
          ? this.updateSmurf
          : this.addSmurf}>
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
          {this.props.match.params.id
          ? <button type="submit">Update Smurf</button>
          : <button type="submit">Add to the Village</button>
        }
        </form>
      </div>
    );
  }
}

export default SmurfForm;
