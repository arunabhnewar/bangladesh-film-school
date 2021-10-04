import React, { useEffect, useState } from 'react';
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
        <div className="features-container container">
            <h1 className="mt-5 features-title text-muted">Best Features</h1>
            <div className="row">
                {
                    features?.map(feature =>
                        <div className="col-md-3 my-5" key={feature.key}>
                            <div className="features">
                                <div className="feature-img">
                                    <img className="w-100" src={feature.img} alt="" />
                                </div>
                                <div className="info-area">
                                    <h3 className="feature-name">{feature.name}</h3>
                                    <h5 className="text-muted">Course Director: <span className="feature-detail">{feature.courseDirector}</span> </h5>
                                    <h5 className="text-muted">Course Fee: $<span className="feature-detail">{feature.fee}</span> </h5>

                                    <button className="enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Features;