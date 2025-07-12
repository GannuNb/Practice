import React from 'react';
import { Link } from 'react-router-dom';
import ootycss from "./Home.module.css";
import { Carousel } from 'react-bootstrap';
import img1 from "./images/nature.jpg";
import img2 from "./images/car3.jpg";
import img3 from "./images/mountain1.jpg";

function Ooty() {
    return (
        <>
            <div className={ootycss.carouselWrapper}>
                <Carousel fade interval={4000}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" />
                        <Carousel.Caption className={ootycss.caption}>
                            <h3>Experience the Serenity</h3>
                            <p>Escape into the peaceful beauty of untouched nature.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                        <Carousel.Caption className={ootycss.caption}>
                            <h3>Adventure Awaits</h3>
                            <p>Explore breathtaking trails and mountain landscapes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                        <Carousel.Caption className={ootycss.caption}>
                            <h3>Discover Hidden Gems</h3>
                            <p>Travel to places less known, but never forgotten.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container mt-5">
                <h2 className="mb-4 text-center text-primary">Welcome to Ooty - Queen of Hill Stations</h2>

                <div className="row mb-5">
                    <div className="col-md-12">
                        <p>
                            Ooty (Udhagamandalam) is a scenic hill station nestled in the Nilgiri Hills of Tamil Nadu. Known for its tea plantations,
                            rolling green hills, and colonial charm, it is the perfect retreat for couples, families, and nature lovers.
                        </p>
                        <p>
                            Our tour package includes full travel guidance, transportation via comfortable tourist buses, and a range of accommodation options from budget stays to luxury resorts.
                        </p>
                    </div>
                </div>

                {/* Styled Cards Section */}
                <div className="row text-center mb-5">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">✅ Guided Tours</h5>
                                <p className="card-text">
                                    Explore top attractions like Ooty Lake, Doddabetta Peak, Botanical Gardens, and the Nilgiri Mountain Railway with professional guides.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title">🚌 Comfortable Bus Travel</h5>
                                <p className="card-text">
                                    We provide AC and non-AC buses for travel within and around Ooty, ensuring a safe and relaxing journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">🏨 Accommodation</h5>
                                <p className="card-text">
                                    Choose from our handpicked accommodations including hotels, homestays, and luxury resorts—perfect for all budgets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regular Row Styling for Remaining Info */}
                <div className="row mt-4">
                    <div className="col-md-4">
                        <h5>🍽️ Local Cuisine</h5>
                        <p>Taste the flavors of Ooty with authentic South Indian dishes, homemade chocolates, and aromatic Nilgiri tea.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>🛍️ Shopping Experience</h5>
                        <p>Buy local products like eucalyptus oil, tea, tribal handicrafts, and souvenirs from Ooty markets.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>🌿 Nature & Relaxation</h5>
                        <p>Enjoy peaceful walks through tea gardens, misty valleys, and quiet lakefronts for a truly rejuvenating experience.</p>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <Link to="/contact?place=Ooty" className="btn btn-primary btn-lg">
                        📅 Book a Trip
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Ooty;
