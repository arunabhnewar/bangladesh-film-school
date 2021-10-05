import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Features.css';

const Features = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    console.log(features);
    return (
        <div className="container">
            <h1 className="mt-5 features-title text-muted">Best Features</h1>
            <div className="row">
                {
                    features?.map(feature =>
                        <div className="col-md-3 col-lg-3 my-5" key={feature.key}>
                            <div className="card features w-100 h-75">
                                <div className="feature-img">
                                    <img className="w-100" src={feature.img} alt="" />
                                </div>
                                <div className="info-area card-body">
                                    <h4 className="feature-name">{feature.name}</h4>
                                    <p className="text-muted">Course Director: <span className="feature-detail">{feature.courseDirector}</span> </p>
                                    <p className="text-muted mb-4">Course Fee: $<span className="feature-detail">{feature.fee}</span> </p>

                                    <NavLink to="/services" className="enroll-btn">Read More</NavLink>
                                    <NavLink to="/admission" className="enroll-btn">Enroll Now</NavLink>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Features;