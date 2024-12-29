import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Courses.css';
// import Datascience from '../assets/Datascience.jpeg';
// import webdev from '../assets/webdev.jpeg';
// import graphic from '../assets/graphic.jpg';
// import digitalmarket from '../assets/digitalmarket.jpg';
// import cybersecurity from '../assets/cybersecurity.jpeg';
// import DevOps from '../assets/DevOps.jpg';
// import cloudcomp from '../assets/cloudcomp.jpeg';
// import artificial from '../assets/artificial.jpeg';
// import blockChain from '../assets/blockChain.webp';
import { Link } from "react-router-dom";
import courseData from "../Components/CourseData";



const Courses = ({limit}) =>{
    const coursesToDisplay = limit ? courseData.slice(0,limit) : courseData;

    return(
        <section className="courses-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">Our Courses</h2>
                <div className="row">
                    {coursesToDisplay.map(course=>(
                        <div key={course.id} className="col-md-4 mb-4">
                            <div className="card card-body">
                                <img src={course.image} className="card-img-top" height="150px"></img>
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                               <Link to={'/courses/${course.id}'} className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;