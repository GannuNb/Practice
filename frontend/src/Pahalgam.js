import React from 'react';
import { Link } from 'react-router-dom';
import pahalgamcss from "./Home.module.css"; // You can reuse or customize the CSS module
import { Carousel } from 'react-bootstrap';
import img1 from "./images/pahalgam1.jpg";
import img2 from "./images/pahalgam2.jpg";
import img3 from "./images/mountain1.jpg";

function Pahalgam() {
    return (
        <>
            <div className={pahalgamcss.carouselWrapper}>
                <Carousel fade interval={4000}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="Pahalgam Valley" />
                        <Carousel.Caption className={pahalgamcss.caption}>
                            <h3>Misty Mountains</h3>
                            <p>Witness the breathtaking Himalayan beauty of Pahalgam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Lidder River" />
                        <Carousel.Caption className={pahalgamcss.caption}>
                            <h3>Tranquil Rivers</h3>
                            <p>Relax by the Lidder River and experience serene surroundings.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Snow-capped views" />
                        <Carousel.Caption className={pahalgamcss.caption}>
                            <h3>Winter Wonderland</h3>
                            <p>Enjoy snow-clad views and adventure sports in Pahalgam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container mt-5">
                <h2 className="mb-4 text-center text-primary">Welcome to Pahalgam – Kashmir's Hidden Gem</h2>

                <div className="row mb-5">
                    <div className="col-md-12">
                        <p>
                            Pahalgam is a tranquil hill town located in Jammu & Kashmir, known for its pine forests, pristine rivers, and scenic meadows.
                            It serves as a base camp for the Amarnath Yatra and is a favorite for honeymooners and nature lovers alike.
                        </p>
                        <p>
                            Our travel packages include local sightseeing, trekking experiences, river rafting, and a range of stays from cottages to resorts.
                        </p>
                    </div>
                </div>

                {/* Styled Cards */}
                <div className="row text-center mb-5">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">🏞️ Nature Walks</h5>
                                <p className="card-text">
                                    Discover places like Aru Valley, Betaab Valley, and Baisaran on guided nature walks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title">🎒 Adventure Activities</h5>
                                <p className="card-text">
                                    Enjoy trekking, pony rides, and white-water rafting in one of Kashmir’s most adventurous destinations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">🏨 Cosy Accommodations</h5>
                                <p className="card-text">
                                    Stay in scenic cottages and mountain-view hotels offering the warmth of Kashmiri hospitality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Highlights */}
                <div className="row mt-4">
                    <div className="col-md-4">
                        <h5>🧣 Local Culture</h5>
                        <p>Interact with local communities, shop for handmade woolens, and enjoy traditional Kashmiri food.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>🕌 Pilgrimage Sites</h5>
                        <p>Visit religious spots and explore the spiritual journey through Amarnath and nearby temples.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>🌲 Forest Escapes</h5>
                        <p>Immerse yourself in the peaceful forests and meadows surrounding the village, away from crowds.</p>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-4 mb-3 d-flex justify-content-center">
                        <Link to="/contact?place=Pahalgam" className="btn btn-primary btn-lg w-100">
                            📞 Contact
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 mb-3 d-flex justify-content-center">
                        <Link to="/booktrip?place=Pahalgam" className="btn btn-success btn-lg w-100">
                            📅 Book Trip
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pahalgam;
