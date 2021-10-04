import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="row d-flex justify-content-center align-items-center header">
                <div className="col-md-6">
                    <h1 className="header-title">Empowering Storytellers</h1>
                    <p className="text-white mt-3 text-center">Everything you want to know about the Bangladesh Film School</p>
                    <button className="mt-3 regular-btn">Learn More</button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default Header;