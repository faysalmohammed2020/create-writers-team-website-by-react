import React from 'react';
import './Header.css';

const Header = () => {
    const budget = 2000;
    return (
        
        <div className="header-container">
            <div className="header">
            <div className="Logo">
            <p>Writers App </p>
            </div>
            <div>
            <nav>
                
                <a href="/home">Home</a>
                <a href="/about">About </a>
                <a href="/price">Prices</a>
                <a href="/price">Teams</a>
                <a href="/contact">Contact</a>
            </nav>
            </div>
            </div>
            
            <div className="secondary-header">
            <h2>Make Writer Teams</h2>
            <h1>Total Budget: {budget} Million </h1>
            </div>
            
            
        </div>
        
        
        
        
    );
};

export default Header;