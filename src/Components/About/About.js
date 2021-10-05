import React from 'react';
import './About.css';
import img from '../../images/about-img.jpg';
import image from '../../images/achievement.jpg';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div className="about-container ">
            <div className="row mx-auto container py-5">
                <div className="col-md-6 about-details justify-content-center align-self-center py-5">
                    <h2 className="about-title">About BFS</h2>
                    <p className="about-text">The Bangladesh Film School (BFS) was set up by the Government of Bangladesh in 2009, in the premises of the erstwhile Bangladesh Film Studios in Gazipur.
                        The BFS Campus currently stands on the grounds of the erstwhile Bangladesh Film Studio. Bangladesh Film Studio was a pioneer in the business of filmmaking and shifted to Gazipur from Kawran Bazar in 2001. The old Studios of Bangladesh Film are now heritage structures and BFS students continue to work at the world's oldest functioning  film shooting studios. <br />
                    </p>
                </div>
                <div className="col-md-6 about-img justify-content-center align-self-center py-5">
                    <img className="w-75 img-fluid" src={img} alt="" />
                </div>
            </div>


            <div className="row mx-auto container py-5 mb-5">
                <div className="col-md-6 achievement-img justify-content-center align-self-center py-5">
                    <img className="img-fluid w-75" src={image} alt="" />
                </div>
                <div className="col-md-6 justify-content-center align-self-center py-5 about-details">
                    <h2 className="achievement-title">Achievement</h2>
                    <p className="about-text">
                        Today, BFS is recognized as a centre for excellence in audio visual media across the world and one of the best film institute  in Bangladesh. Our alumni work everywhere: from Los Angeles, Paris, and London to Mumbai, Hyderabad, Trivandrum, Chennai, and Kolkata. They have gained popularity and have earned various laurels as accomplished technicians and superstars. The alumni have also won popular film and television awards from the ‘National Film Awards’ to ‘Oscars’.
                        From its original four courses, BFS has grown to offer nine full-time courses in various disciplines of film and television as well as a host of short term courses. These courses are held on-campus in Gazipur as well as off-campus at across centers all over Bangladesh.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;