import React from 'react';
import Homecss from "./Home.module.css";
import homeimg from "./images/nature.jpg";
import Homecards from './Homecards';
import { Carousel } from 'react-bootstrap';
import img1 from "./images/nature.jpg";
import img2 from "./images/car3.jpg";
import img3 from "./images/mountain1.jpg";


function Home() {
  return (
    <>

       <div className={Homecss.carouselWrapper}>
      <Carousel fade interval={4000}>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption className={Homecss.caption}>
            <h3>Experience the Serenity</h3>
            <p>Escape into the peaceful beauty of untouched nature.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption className={Homecss.caption}>
            <h3>Adventure Awaits</h3>
            <p>Explore breathtaking trails and mountain landscapes.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption className={Homecss.caption}>
            <h3>Discover Hidden Gems</h3>
            <p>Travel to places less known, but never forgotten.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>




      <div className={`container-fluid ${Homecss.aboutnature}`}>
        <h1 className="text-center text-primary mb-4">Explore the Beauty of Nature</h1>
        <h2 className="text-muted text-center">
          Discover the beauty of nature through our immersive travel experiences. From stunning landscapes to serene getaways,
          we offer unforgettable journeys that bring you closer to the natural world. Whether you're exploring hidden trails,
          relaxing by a tranquil lake, or seeking adventure in the mountains, we make travel effortless by handling every detail
          — accommodation, transport, guided tours, and more. Let us take care of everything while you enjoy the magic of the world around you.
        </h2>
        <div className="text-center mt-4">
          <button className='btn btn-primary'>Learn More</button>
        </div>
      </div>


      <Homecards />


      <div className="container py-5">
        <div className="row align-items-center gx-4">

          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={homeimg}
              alt="Contact nature"
              className="img-fluid rounded shadow"
            />
          </div>


          <div className="col-md-6 text-center text-md-start mx-2">
            <h2 className="text-primary text-center mb-4">Contact Us</h2>
            <p className="fs-5 text-muted">
              We would love to hear from you! Whether you're seeking more information about our services,
              want to discuss a custom travel plan, or have any questions about your next adventure,
              our team is here to help.
            </p>
            <p className="fs-5 text-muted">
              Reach out to us through our contact form, and we’ll respond promptly.
              We're committed to providing exceptional service and building meaningful travel experiences.
            </p>
            <div className="text-center mt-3">
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
