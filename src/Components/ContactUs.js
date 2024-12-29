import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ContactUs.css';

const ContactUs = () =>{
    return(
        <section className="contact-us-section-py-5">
            <div className="container">
                <h2 className="text-center mb-4">Contact Us</h2>
                <p className="text-center mb-5">Have Questions? Get in touch with us!</p>
                <div className="row justify-content-center">
                <div className="col-md-6 mb-4">
                        <h4>Contact Information</h4>
                        <p>Email: info@besant.com</p>
                        <p>Phone: 7045998456</p>
                        <p>Address:No. 2757/2760 & 2759, 1st Floor, Kodigehalli Ward No.8, Sahakar Nagar, Bangalore – 560092.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">EmailID</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Message</label>
                                <input type="text" className="form-control" id="message" row="5" placeholder="write your message" required></input>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>Or Reach us at:</p>
                    <p><i className="bi bi-telephone-fill"></i>9078655485</p>
                    <p><i className="bi bi-envelope-fill"></i>info@besanttechnologies.com</p>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;