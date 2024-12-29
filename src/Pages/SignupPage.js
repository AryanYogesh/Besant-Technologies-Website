import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/SignupPage.css';

const SignupPage = () => {
    return (
        <div className="signup-page container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="text-center mb-4">Sign Up</h3>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            </form>
                            <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
