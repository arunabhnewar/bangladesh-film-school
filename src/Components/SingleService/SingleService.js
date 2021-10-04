import React from 'react';
import './SingleService.css';

const SingleService = (props) => {
    const { name, courseDirector, email, fee, duration, description, img } = props.service;
    // console.log(props.name)
    return (
        <div className="container single-service-container mt-5">
            <div className="row">
                <div className="service-img col-md-5">
                    <img className="w-75" src={img} alt="" />
                </div>
                <div className="service-details col-md-7">
                    <h2><span className="details-text">{name}</span></h2>
                    <h5>Course Director: <span>{courseDirector}</span></h5>
                    <h5>Email: <span>{email}</span></h5>
                    <h5>Course Fee: $<span>{fee}</span></h5>
                    <h5>Course Duration: <span>{duration}</span></h5>
                    <h5>Describe: <span>{description}</span></h5>
                </div>
            </div>
        </div>
    );
};

export default SingleService;