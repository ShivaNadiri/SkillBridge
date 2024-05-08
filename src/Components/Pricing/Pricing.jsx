import React from "react";
// import OurPrices from "../OurPrices/OurPrices";
import FAQSection from "../FAQSection/FAQSection";
import styles from "./Pricing.module.css";
import FooterSection from "../FooterSection/FooterSection";
import PriceCard from "../PriceCard/PriceCard";

function Pricing() {
  return (
    <>
      <div className={styles.TopContainer}>
        <h1>Online Courses on Design and Development</h1>
        <p>
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <div className={styles.Price_btn}>
        <button>Monthly</button>
        <button>Yearly</button>
      </div>
      <div className={styles.Pricing}>
        <PriceCard />
        <FAQSection />
      </div>
      <FooterSection />
    </>
  );
}

export default Pricing;
