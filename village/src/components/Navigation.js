import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink exact to="/">Smurfs Home</NavLink>
            <NavLink to="/smurfs-form">Smurfs Form</NavLink>
        </nav>
    )
}

export default Navigation;