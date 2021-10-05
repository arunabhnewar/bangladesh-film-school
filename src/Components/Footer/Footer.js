import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">

                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">About</li>
                                    <li className="footer-menu">Admission</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mt-3">
                                <h3>Reach Us</h3>
                                <p>
                                    Law college Road, Gazipur - 411004
                                    <br />
                                    Dhaka Division, Bangladesh
                                </p>
                                <h6>Phone: +3-9-500-777-11-00</h6>
                                <h6>Email: bangladeshfilmschool@mail.com</h6>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="text-start mt-2">
                                <h1>Bangladesh Film School</h1>

                                <p className="mt-4">
                                    <small>
                                        *All donation towards the Prime Minister's National Cultural and Education Fund (PMNCEF) and the Bangladesh Film Development Corporation(BFDC) are notified for 100% deduction from taxable income under section 80G of the Income Tax Act, 2011.
                                    </small>
                                </p>

                                <div className="icons-container d-flex text-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutubeSquare} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="mt-2 mb-0 pb-0">
                    <small>Bangladesh Film School @. All rights reserved</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;