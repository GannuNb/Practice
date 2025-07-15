import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="container text-md-left">
                <div className="row text-md-left">

                    {/* About Section */}
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-success">Explore the Beauty of Nature</h5>
                        <p>
                            Discover the beauty of nature through our immersive travel experiences. From stunning landscapes to serene getaways, we offer unforgettable journeys that bring you closer to the natural world.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-success">Quick Links</h5>
                        <p><Link to="/" className="text-light text-decoration-none">Home</Link></p>
                        <p><Link to="/ooty" className="text-light text-decoration-none">Ooty</Link></p>
                        <p><Link to="/goa" className="text-light text-decoration-none">Goa</Link></p>
                        <p><Link to="/pahalgam" className="text-light text-decoration-none">Pahalgam</Link></p>
                        <p><Link to="/contact" className="text-light text-decoration-none">Contact</Link></p>
                    </div>

                    {/* Contact */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-success">Contact</h5>
                        <p><i className="fas fa-home me-3"></i> 123 Nature Lane, Hillside View</p>
                        <p><i className="fas fa-envelope me-3"></i> info@natureexplore.com</p>
                        <p><i className="fas fa-phone me-3"></i> +91 98765 43210</p>
                    </div>

                    {/* Social Icons */}
                    <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 text-center">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-success">Follow Us</h5>
                        <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-light"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <hr className="mb-4" />

                {/* Copyright */}
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-start">© {new Date().getFullYear()} <strong className="text-success">Nature Explore</strong>. All rights reserved.</p>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <p className="text-center text-md-end">Crafted with ❤️ for Nature Lovers</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
