import react from "react";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Contact.css';
import ScrollToTop from "../Components/ScrollToTop";


const Contact = () =>{
    return(
        <div className="contact-page">
            {/* <Header/> */}
            <section className="contact-hero">
                <div className="container text-center">
                    <p>We’d love to hear from you! Reach out to us with your questions or feedback.</p>
                </div>
            </section>
            <ContactUs/>
            <ScrollToTop/>
            <Footer/>
        </div>
    );
};

export default Contact;