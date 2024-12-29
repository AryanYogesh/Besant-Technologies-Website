import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../Styles/Header.css';
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () =>{

    const [isLoggesIn, setIsLoggedIn] = useState(true);

    const handleLogout = () =>{
        setIsLoggedIn(false);
    };

    return(
        <header className="bg-primary text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">


                <div className="d-flex align-items-center">
                    <img src={logo} alt="Besant logo" className="header-logo"/>
                    <h1 className="header-title ms-3">Besant Technologies</h1>
                </div>


                <nav className="nav-left ml-0">
                    <ul className="nav-list list-styled d-flex m-0">
                        <li className="mx-3"><a href="/" className="nav-link text-white">Home</a></li>
                        <li className="mx-3"><a href="/courses" className="nav-link text-white">Courses</a></li>
                        <li className="mx-3"><a href="/about" className="nav-link text-white">About</a></li>
                        <li className="mx-3"><a href="/contact" className="nav-link text-white">Contact us</a></li>
                    </ul>
                </nav>

                <div>
                    {isLoggesIn ? (
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-user" className="text-whit">
                            <i className="bi bi-person-circle" style={{fontSize:"1.5rem"}}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/dashboard">Dashboard</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onclick={handleLogout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                    
                        <>
                            <Link to="/login" className="btn btn-outline-light mx-2 rounded-pill">
                                Login
                            </Link>
                            <Link to="/signup" className="btn btn-outline-light mx-2 rounded-pill">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;