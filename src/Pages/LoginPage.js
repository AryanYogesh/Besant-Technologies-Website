import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Loginpage.css';

const LoginPage = () =>{
    return(
        <div className="login-page container py-5">
            <div className="row justitfy-content-center">
                <div className="col-md-6">
                    <div className="card-shadow">
                        <div className="card-body">
                            <h3 className="text-center mb-4">Login</h3>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-control" placeholder="Enter your Email Id"></input>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="email" className="form-control" placeholder="Enter your password"></input>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <p className="text-center mt-3">Don't have an account? <a href="/signup">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;