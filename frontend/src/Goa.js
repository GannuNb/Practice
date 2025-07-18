import React from 'react';
import { Link } from 'react-router-dom';
import goacss from "./Home.module.css"; // Use the same CSS module or create a new one if needed
import { Carousel } from 'react-bootstrap';
import img1 from "./images/goa.jpg";
import img2 from "./images/goa2.avif";
import img3 from "./images/goa3.avif";

function Goa() {
    return (
        <>
            <div className={goacss.carouselWrapper}>
                <Carousel fade interval={4000}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" />
                        <Carousel.Caption className={goacss.caption}>
                            <h3>Sun, Sand, and Sea</h3>
                            <p>Relax on golden beaches with the soothing sounds of waves.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                        <Carousel.Caption className={goacss.caption}>
                            <h3>Thrill & Adventure</h3>
                            <p>Indulge in water sports and beachside excitement in Goa.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                        <Carousel.Caption className={goacss.caption}>
                            <h3>Vibrant Culture</h3>
                            <p>Explore historic forts, churches, and Goa's lively festivals.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container mt-5">
                <h2 className="mb-4 text-center text-primary">Welcome to Goa – India's Beach Paradise</h2>

                <div className="row mb-5">
                    <div className="col-md-12">
                        <p>
                            Goa is a coastal haven known for its picturesque beaches, Portuguese heritage, and energetic nightlife. Whether you're seeking peace or parties, Goa has something for everyone.
                        </p>
                        <p>
                            Our Goa travel package offers guided sightseeing, beach activities, and accommodations ranging from beach huts to luxury resorts.
                        </p>
                    </div>
                </div>

                {/* Styled Cards Section */}
                <div className="row text-center mb-5">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">🌊 Beach Hopping</h5>
                                <p className="card-text">
                                    Visit iconic beaches like Baga, Anjuna, Calangute, and Palolem—each offering unique vibes and views.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title">🚤 Water Sports</h5>
                                <p className="card-text">
                                    Try parasailing, jet skiing, banana boat rides, and scuba diving with expert guides and equipment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">🏨 Stay Options</h5>
                                <p className="card-text">
                                    From beach shacks to high-end resorts, choose the perfect place to relax and enjoy your Goa trip.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="row mt-4">
                    <div className="col-md-4">
                        <h5>🍤 Goan Cuisine</h5>
                        <p>Savor delicious seafood, Goan curries, and famous feni, all served with coastal charm.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>🕍 Historical Sights</h5>
                        <p>Explore churches, forts, and old Portuguese architecture that tells the story of Goa’s rich past.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>🎉 Nightlife & Culture</h5>
                        <p>Enjoy beach parties, music festivals, flea markets, and the spirited Goan lifestyle.</p>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-4 mb-3 d-flex justify-content-center">
                        <Link to="/contact?place=Goa" className="btn btn-primary btn-lg w-100">
                            📞 Contact
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 mb-3 d-flex justify-content-center">
                        <Link to="/booktrip?place=Goa" className="btn btn-success btn-lg w-100">
                            📅 Book Trip
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Goa;
