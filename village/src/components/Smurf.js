import React from 'react';

import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <i
        className="far fa-trash-alt delete-icon"
        onClick={event => props.handleDeleteClick(event, props.id)}
      />
      <Link
        className="far fa-edit edit-icon"
        to={`/smurf-form/${props.id}`}
      />
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

