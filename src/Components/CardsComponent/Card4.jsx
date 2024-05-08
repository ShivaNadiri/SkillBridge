import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Cards.module.css";
function Card4() {
  return (
    <div className={styles.ItemsContainer}>
      <div className={styles.Card}>
        <div className={styles.innerCardContainer1}>
          <p>
            I enrolled in the graphic design course as a beginner, and it was
            the perfect starting point. The instructor's guidance and feedback
            improved my design abilities significantly. I'm grateful for this
            course!
          </p>
        </div>
        <div className={styles.innerCardContainer2}>
          <div className={styles.subContainer}>
            <img src={getImageUrl("Logo/TestImg-4.png")} alt="TestimonialImg" />
            <h4>Michael K</h4>
          </div>
          <div className={styles.Card_btn}>
            <button>Read Full Story</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
