import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Cards.module.css";
function Card2() {
  return (
    <div className={styles.ItemsContainer}>
      <div className={styles.Card}>
        <div className={styles.innerCardContainer1}>
          <p>
            The UI/UX design course exceeded my expectations. The instructor's
            expertise and practical assignments helped me improve my design
            skills. I feel more confident in my career now. Thank you!
          </p>
        </div>
        <div className={styles.innerCardContainer2}>
          <div className={styles.subContainer}>
            <img src={getImageUrl("Logo/TestImg-2.png")} alt="TestimonialImg" />
            <h4>Jason M</h4>
          </div>
          <div className={styles.Card_btn}>
            <button>Read Full Story</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
