import React from "react";
import HeroSection from "../Components/HeroSection";
import Notice from "../Components/Notice";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import ContactUs from "../Components/ContactUs";
import ScrollToTop from "../Components/ScrollToTop";
import Courses from "../Components/Courses";


const Home = () =>{
    return(
        <div>
            {/* <Header/> */}
            <Notice/>
            <HeroSection/>
            <Courses limit={3}/>
            <Testimonials/>
            <ContactUs/>
            <ScrollToTop/>
            <Footer/>
        </div>
    );
}

export default Home;