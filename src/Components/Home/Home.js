import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;