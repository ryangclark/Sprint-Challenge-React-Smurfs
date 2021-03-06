import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink exact to="/">Smurfs Home</NavLink>
            <NavLink to="/smurf-form">Smurf Form</NavLink>
        </nav>
    )
}

export default Navigation;