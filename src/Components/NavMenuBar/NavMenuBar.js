import React from 'react';
import logo from '../../images/logo.png';
import './NavMenuBar.css';
import { Link } from 'react-router-dom';

const NavMenuBar = () => {
    return (
        <div className="nav-menu-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                            <img className="w-50" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container">
                            <ul className="d-flex justify-content-end align-items-end ">
                                <Link to="/home" className="menu">
                                    <li>Home</li>
                                </Link>
                                <Link to="/services" className="menu">
                                    <li>Services</li>
                                </Link>
                                <Link to="/about" className="menu">
                                    <li>About</li>
                                </Link>
                                <Link to="/admission" className="menu">
                                    <li>Admission</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenuBar;