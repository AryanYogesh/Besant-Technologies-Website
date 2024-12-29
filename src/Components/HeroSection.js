import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/HeroSection.css';

const HeroSection = () =>{
    return(
        
            <div className="hero-section">
                <h2 className="hero-content">Welcome to Besant Technologies</h2>
                <p className="para">Your Journey to mastering new skills starts here.</p>
                <div className="hero-buttons">
                    <a href="/courses"><button className="btn btn-primary">Explore Courses</button></a>
                    <a href="/contact"><button className="btn btn-primary">Contact Us</button></a>
                </div>
            </div>
        
    );
};

export default HeroSection;