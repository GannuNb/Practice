import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homecards.module.css";
import card1 from "./images/nature1.webp";
import card2 from "./images/nature2.webp";
import card3 from "./images/nature4.webp";
import img3 from "./images/mountain1.jpg";

const cards = [
  {
    title: "Ooty",
    bg: "bg1",
    btnClass: "btnBlue",
    image: card1,
    path: "/ooty",
  },
  {
    title: "Goa",
    bg: "bg2",
    btnClass: "btnYellow",
    image: card2,
    path: "/goa",
  },
  {
    title: "Pahalgam",
    bg: "bg3",
    btnClass: "btnGray",
    image: card3,
    path: "/Pahalgam",
  },
  {
    title: "Other Tourists",
    bg: "bg4",
    btnClass: "btnPink",
    image: img3,
    path: "/other-tourists",
  },
];

const Homecards = () => {
  return (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.heading}>Tourisim Places</h2>
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <Link to={card.path} key={index} className={styles.linkWrapper}>
            <div className={`${styles.glassCard} ${styles[card.bg]}`}>
              <div className={styles.glassOverlay} />
              <div className={styles.imageContainer}>
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.cardImage}
                  />
                ) : (
                  <div className={styles.placeholderText}>Uploading Soon</div>
                )}
              </div>
              <div className={styles.cardDetails}>
                <p className={styles.title}>{card.title}</p>
                <button className={`${styles.buyButton} ${styles[card.btnClass]}`}>
                  Know More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homecards;