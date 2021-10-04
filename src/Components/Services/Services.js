import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="services-container">
            {
                services.map(service => <SingleService key={service.key} service={service}></SingleService>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Services;