import React from 'react';
import './Header.css';

const Header = () => {
    const budget = 2000;
    return (
        
        <div className= "header">
            <h2>Make Writer Teams</h2>
            <h1>Total Budget: {budget} Million </h1>

        </div>
    );
};

export default Header;