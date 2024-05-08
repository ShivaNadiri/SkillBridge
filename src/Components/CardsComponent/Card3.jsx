import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Cards.module.css";
function Card3() {
  return (
    <div className={styles.ItemsContainer}>
      <div className={styles.Card}>
        <div className={styles.innerCardContainer1}>
          <p>
            The mobile app development course was fantastic! The step-by-step
            tutorials and hands-on projects helped me grasp the concepts easily.
            I'm now building my own app. Great course!
          </p>
        </div>
        <div className={styles.innerCardContainer2}>
          <div className={styles.subContainer}>
            <img src={getImageUrl("Logo/TestImg-3.png")} alt="TestimonialImg" />
            <h4>Emily R</h4>
          </div>
          <div className={styles.Card_btn}>
            <button>Read Full Story</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
