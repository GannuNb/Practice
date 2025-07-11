import React from 'react';
import Aboutcss from './About.module.css';
import homeimg from './images/nature.jpg';

function About() {
  return (
    <>
    
      <div className={Aboutcss.aboutWrapper}>
        <img src={homeimg} alt="Scenic view of nature" className={Aboutcss.image} />
         <div className={Aboutcss.textOverlay}>
          <h1>About Tourism</h1>
          <p>Discover, explore, and Experience the wonders of nature through our curated tours.</p>
        </div>
      </div>
     

      {/* About Paragraph Section */}
      <div className={Aboutcss.aboutpara}>
        <h2 className={Aboutcss.sectionTitle}>Why Choose Us?</h2>
        <p>
          At NatureTours, we believe travel is more than just reaching a destination — it’s about embracing the journey, connecting with diverse cultures, and discovering the breathtaking beauty of our planet. Our expertly curated tours are designed for nature lovers, adventure seekers, and anyone longing for meaningful experiences. From serene mountain escapes and pristine beaches to vibrant forests and hidden waterfalls, each destination offers a chance to unwind, explore, and create lasting memories. We take care of all the logistics — transportation, lodging, local guides, and personalized itineraries — so you can focus entirely on the adventure. Let us turn your travel dreams into reality, one unforgettable journey at a time.
        </p>
      </div>
    </>
  );
}

export default About;
