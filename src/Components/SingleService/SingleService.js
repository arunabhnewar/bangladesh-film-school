import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {
    const { name, courseDirector, email, fee, duration, description, img } = props.service;
    // console.log(props.name)
    return (
        <div className="container">
            <div className="single-service-container mt-5">
                <div className="row">
                    <div className="service-img col-md-5">
                        <img className="w-100" src={img} alt="" />
                    </div>
                    <div className="service-details col-md-7">
                        <h2><span className="name-text">{name}</span></h2>
                        <h5 className="detail-text">Course Director: <span>{courseDirector}</span></h5>
                        <h5 className="detail-text">Email: <span>{email}</span></h5>
                        <h5 className="detail-text">Course Fee: $<span>{fee}</span></h5>
                        <h5 className="detail-text">Course Duration: <span>{duration}</span></h5>
                        <h5 className="detail-text mb-4">Describe: <span>{description}</span></h5>

                        <NavLink to="/admission" className="enroll-btn">Enroll Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;