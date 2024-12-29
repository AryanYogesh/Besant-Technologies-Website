import React from "react";
import { useParams } from "react-router-dom";
import courseData from "../Components/CourseData";

const CourseDetails = () => {
    const { id } = useParams();
    const course = courseData.find((course) => course.id === parseInt(id));

    if (!course) {
        return (
            <div className="container my-5">
                <h2>Course not found!</h2>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2>{course.title}</h2>
            <img src={course.img} alt={course.title} className="img-fluid mb-4" />
            <p>{course.description}</p>
            <a href="/courses" className="btn btn-secondary">Back to Courses</a>
        </div>
    );
};

export default CourseDetails;
