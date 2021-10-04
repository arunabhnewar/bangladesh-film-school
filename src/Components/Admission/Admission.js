import React from 'react';
import './Admission.css';
import Footer from '../Footer/Footer';



const Admission = () => {
    return (
        <div className="admission-container">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="admission-form my-5 mx-auto">
                            <h4>Create an account to start your application</h4>
                            <input type="text" placeholder="First Name" />
                            <br />
                            <input type="text" placeholder="Last Name" />
                            <br />
                            <input type="text" placeholder="Date of Birth" />
                            <br />
                            <input type="text" placeholder="Email Address" />
                            <br />
                            <input type="text" placeholder="Phone Number" />
                            <br />
                            <input type="text" placeholder="Address" />
                            <br />
                            <button className="submit-btn">Submit</button>
                        </div>
                    </div>
                    <div className="col-md-6 my-5">
                        <h3 className="admission-title">Admission</h3>
                        <p className="admission-details">
                            The admission process consists of the nationally administered Joint Entrance Test (JET), and subsequent rounds of Orientation / Interview. The students are selected on the basis of their JET scores, and performance in the orientation and interviews.
                            On the basis of performance in JET, the list of candidates shortlisted for the next level of selection will be made available on the website of the Institute. The institute will send interview letters to the shortlisted candidates directly.
                            The criteria for short listing may vary for different courses. Please read BFS prospectus carefully for further information

                        </p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admission;