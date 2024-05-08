import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";
import Video from "./Video/Video";
import Benifits from "./Benifits/Benifits";
import Ourcourse from "./OurCourses/Ourcourse";
import OurTestimonial from "../OurTestimonials/OurTestimonial";
import OurPrices from "../OurPrices/OurPrices";
import FAQSection from "../FAQSection/FAQSection";
import FooterSection from "../FooterSection/FooterSection";
function Home() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.heroContainer}>
          <div className={styles.SubContainer}>
            <div className={styles.iconContainer}>
              <img
                src={getImageUrl("Logo/Icon.png")}
                alt="icon"
                className={styles.Icon}
              />

              <h1>
                <span className={styles.first_word}>Unlock</span> Your Creative
                Potential
              </h1>
            </div>
            <div className={styles.abstractLine}>
              <span>
                <img
                  src={getImageUrl("Logo/Vector-1.png")}
                  alt=""
                  className={styles.image1}
                />
              </span>
              <span>
                <img
                  src={getImageUrl("Logo/Vector-2.png")}
                  alt=""
                  className={styles.image2}
                />
              </span>
              <span>
                <img
                  src={getImageUrl("Logo/Vector-3.png")}
                  alt=""
                  className={styles.image3}
                />
              </span>
            </div>
          </div>
          <div className={styles.TextContainer}>
            <h1>with Online Design and Development Courses.</h1>
            <p>Learn from Industry Experts and Enhance Your Skills.</p>
          </div>
        </div>
        <div className={styles.ButtonContainer}>
          <button className={styles.exploreBtn}>Explore Courses</button>
          <button className={styles.viewBtn}>View Pricing</button>
        </div>
        <div className={styles.Container}>
          <div className={styles.ContainerCards}>
            <img src={getImageUrl("Logo/Card.png")} alt="card" />
          </div>
          <div className={styles.ContainerCards}>
            <img src={getImageUrl("Logo/Card-1.png")} alt="card1" />
          </div>
          <div className={styles.ContainerCards}>
            <img src={getImageUrl("Logo/Card-2.png")} alt="card2" />
          </div>
          <div className={styles.ContainerCards}>
            <img src={getImageUrl("Logo/Card-3.png")} alt="card3" />
          </div>
          <div className={styles.ContainerCards}>
            <img src={getImageUrl("Logo/Card-4.png")} alt="card4" />
          </div>
          <div className={styles.ContainerCards}>
            <img src={getImageUrl("Logo/Card-5.png")} alt="card5" />
          </div>
          <div className={styles.ContainerCards}>
            <img src={getImageUrl("Logo/Card-6.png")} alt="card6" />
          </div>
        </div>
        <Video />
        <Benifits />
        <Ourcourse />
        <OurTestimonial />
        <OurPrices />
        <FAQSection />
      </section>
      <FooterSection />
    </>
  );
}

export default Home;
