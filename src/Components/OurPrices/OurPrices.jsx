import React from "react";
import styles from "./OurPrices.module.css";
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";

function OurPrices() {
  return (
    <section className={styles.OurPrices_Section}>
      <div className={styles.container_Top}>
        <div className={styles.TextContainer}>
          <h1>Our Prices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            eaque voluptatem ipsum, sequi modi dignissimos totam aspernatur
            ipsa. Reiciendis, tempora!
          </p>
        </div>
        <div className={styles.Price_btn}>
          <button>Monthly</button>
          <button>Yearly</button>
        </div>
      </div>
      <div className={styles.container_Bottom}>
        <div className={styles.Bottom_card}>
          <div className={styles.Bottom_card_Container1}>
            <h4>Free Plan</h4>
          </div>
          <div className={styles.Bottom_card_TextContainer}>
            <h1>$0</h1>
            <p>/month</p>
          </div>
          <div className={styles.Bottom_card_Container2}>
            <div className={styles.Bottom_card_Subcontainer}>
              <h5>Available Features</h5>
              <div className={styles.ItemContainer}>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Access to selected free courses.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Limited course materials and resources.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Basic community support.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>No certification upon completion.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Ad-supported platform.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer_crossIcon}>
                    <GoX />
                  </div>
                  <p>Access to exclusive Pro Plan community forums</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer_crossIcon}>
                    <GoX />
                  </div>
                  <p>Early access to new courses and updates.</p>
                </div>
              </div>
            </div>
            <div className={styles.Bottom_card_btn}>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        {/* card2 */}

        <div className={styles.Bottom_card}>
          <div className={styles.Bottom_card_Container1}>
            <h4>Pro Plan</h4>
          </div>
          <div className={styles.Bottom_card_TextContainer}>
            <h1>$79</h1>
            <p>/month</p>
          </div>
          <div className={styles.Bottom_card_Container2}>
            <div className={styles.Bottom_card_Subcontainer}>
              <h5>Available Features</h5>
              <div className={styles.ItemContainer}>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Unlimited access to all courses.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Unlimited course materials and resources.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Priority support from instructors.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Course completion certificates.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Ad-free experience.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Access to exclusive Pro Plan community forums.</p>
                </div>
                <div className={styles.FeatureItem}>
                  <div className={styles.IconContainer}>
                    <GoCheck />
                  </div>
                  <p>Early access to new courses and updates.</p>
                </div>
              </div>
            </div>
            <div className={styles.Bottom_card_btn}>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPrices;
