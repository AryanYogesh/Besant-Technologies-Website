import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css';

const Footer = () =>{
    return(
        <footer className="footer bg-dark text-white py-4">
            <div className="container text-center">
                <p>
                    &copy; {new Date().getFullYear()} Besant Technologies. All Rights Reserved.
                </p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white mx-2">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white mx-2">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white mx-2">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;