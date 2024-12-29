import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Courses from "../Components/Courses";

const CoursesPage = () => {
    return (
        <div>
            {/* <Header /> */}
            <main className="courses-page">
                <Courses />
            </main>
            <Footer />
        </div>
    );
};

export default CoursesPage;
