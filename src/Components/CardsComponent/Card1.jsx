import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Cards.module.css";
function Card1() {
  return (
    <div className={styles.ItemsContainer}>
      <div className={styles.Card}>
        <div className={styles.innerCardContainer1}>
          <p>
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
        </div>
        <div className={styles.innerCardContainer2}>
          <div className={styles.subContainer}>
            <img src={getImageUrl("Logo/TestImg-1.png")} alt="TestimonialImg" />
            <h4>Sarah L</h4>
          </div>
          <div className={styles.Card_btn}>
            <button>Read Full Story</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
