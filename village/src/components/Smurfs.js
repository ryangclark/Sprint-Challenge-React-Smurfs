import React, { Component } from 'react';

import Smurf from './Smurf';
import './Smurf.css';

class Smurfs extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                age={smurf.age}
                handleDeleteClick={this.props.handleDeleteClick}
                height={smurf.height}
                id={smurf.id}
                key={smurf.id}
                name={smurf.name}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
