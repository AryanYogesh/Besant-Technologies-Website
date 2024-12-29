import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Testimonials.css';




const Testimonials = () =>{
    return(
        <section className="testimonials-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">Student Testimonials</h2>
                <p className="text-center mb-5">Hear from our students about their journey with Besant Technologies!</p>
                <div className="row justify-content-center">


                    <div className="col-md-6 mb-4">
                        <div className="video-card">
                            <iframe 
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/OyaP4Y65rFE?si=3FaXdPvCMOVtiHVl"
                            title="Youtube video player"
                            allowFullScreen>
                            </iframe>
                            <div className="video-info">
                                <h5 className="mt-3">Vivek Anand</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="video-card">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/-IBFUsVuNBk?si=-lE4mO3fdZqL1rwH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="video-info">
                                <h5 className="mt-3">Nawazuddin</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="video-card">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/jFKbTv7oshc?si=hESNsEpQGJgtqzxB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="video-info">
                                <h5 className="mt-3">Vidya kousalya</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="video-card">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/l2cv1SSTE18?si=IAMAD7D4xhCxSxL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="video-info">
                                <h5 className="mt-3">Nithin</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Testimonials;