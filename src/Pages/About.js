import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/About.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const About = () => {
    return(
        <>
        
        {/* <Header/> */}
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="display-4">About Besant Technologies</h1>
                <p className="lead">
                Empowering careers through quality training and innovative solutions.
                </p>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <h2 className="h4 text-primary">Our Mission</h2>
                    <p>
                        To provide world-class training that enables our students to achieve their
                        career goals.
                    </p>
                </div>
                <div className="col-md-6">
                    <h2 className="h4 text-primary">Our Vision</h2>
                    <p> To be a leading training provider, recognized globally for excellence and
                    innovation.</p>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="h4 text-primary">Our Journey</h2>
                <ul className="list-group">
                <li className="list-group-item">Founded in 2010</li>
                <li className="list-group-item">Trained over 100,000 professionals</li>
                <li className="list-group-item">Partnerships with top companies worldwide</li>
                </ul>
            </div>
            <div className="bg-light p-4 rounded">
                <h2 className="h4 text-primary">Why Choose Us?</h2>
                <p>
                Besant Technologies stands out with industry-recognized certifications,
                hands-on training, and expert instructors committed to your success.
                </p>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default About;