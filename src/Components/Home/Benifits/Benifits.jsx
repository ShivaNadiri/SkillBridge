import React from "react";
import styles from "./Benifits.module.css";
import { getImageUrl } from "../../../utils";
import { useState } from "react";
function Benifits() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className={styles.BenifitSection}>
      <div className={styles.container}>
        <div className={styles.TextContainer}>
          <h1>Benifits</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            eaque voluptatem ipsum, sequi modi dignissimos totam aspernatur
            ipsa. Reiciendis, tempora!
          </p>
        </div>
        <div className={styles.Benifits_btn}>
          {showAll ? (
            <button
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              View less
            </button>
          ) : (
            <button
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              View All
            </button>
          )}
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card_content}>
          <h1>01</h1>
          <h4>Flexible Learning Schedule</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            corrupti?
          </p>
          <button>
            <img src={getImageUrl("Logo/Vector (Stroke).png")} alt="arrow" />
          </button>
        </div>
        <div className={styles.card_content}>
          <h1>02</h1>
          <h4>Expert Instruction</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            corrupti?
          </p>
          <button>
            <img src={getImageUrl("Logo/Vector (Stroke).png")} alt="arrow" />
          </button>
        </div>
        <div className={styles.card_content}>
          <h1>03</h1>
          <h4>Diverse Course Offerings</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            corrupti?
          </p>
          <button>
            <img src={getImageUrl("Logo/Vector (Stroke).png")} alt="arrow" />
          </button>
          {/* <img src={getImageUrl("Logo/Vector (Stroke).png")} alt="arrow" /> */}
        </div>
        <div className={styles.card_content}>
          <h1>04</h1>
          <h4>Updated Curriculum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            corrupti?
          </p>

          <button>
            <img src={getImageUrl("Logo/Vector (Stroke).png")} alt="arrow" />
          </button>
        </div>
        <div className={styles.card_content}>
          <h1>05</h1>
          <h4>Practical Projects and Assignments</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            corrupti?
          </p>
          <button>
            <img src={getImageUrl("Logo/Vector (Stroke).png")} alt="arrow" />
          </button>
        </div>
        <div className={styles.card_content}>
          <h1>06</h1>
          <h4>Interactive Learning Environment</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            corrupti?
          </p>
          <button>
            <img src={getImageUrl("Logo/Vector (Stroke).png")} alt="arrow" />
          </button>
        </div>
        {showAll && (
          <>
            <div className={styles.card_content}>
              <h1>07</h1>
              <h4>Expert Instruction</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, corrupti?
              </p>
              <button>
                <img
                  src={getImageUrl("Logo/Vector (Stroke).png")}
                  alt="arrow"
                />
              </button>
            </div>
            <div className={styles.card_content}>
              <h1>08</h1>
              <h4>Diverse Course Offerings</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, corrupti?
              </p>
              <button>
                <img
                  src={getImageUrl("Logo/Vector (Stroke).png")}
                  alt="arrow"
                />
              </button>
              {/* <img src={getImageUrl("Logo/Vector (Stroke).png")} alt="arrow" /> */}
            </div>
            <div className={styles.card_content}>
              <h1>09</h1>
              <h4>Updated Curriculum</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, corrupti?
              </p>

              <button>
                <img
                  src={getImageUrl("Logo/Vector (Stroke).png")}
                  alt="arrow"
                />
              </button>
            </div>
            <div className={styles.card_content}>
              <h1>10</h1>
              <h4>Practical Projects and Assignments</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, corrupti?
              </p>
              <button>
                <img
                  src={getImageUrl("Logo/Vector (Stroke).png")}
                  alt="arrow"
                />
              </button>
            </div>
            <div className={styles.card_content}>
              <h1>11</h1>
              <h4>Interactive Learning Environment</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, corrupti?
              </p>
              <button>
                <img
                  src={getImageUrl("Logo/Vector (Stroke).png")}
                  alt="arrow"
                />
              </button>
            </div>
            <div className={styles.card_content}>
              <h1>12</h1>
              <h4>Flexible Learning Schedule</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, corrupti?
              </p>
              <button>
                <img
                  src={getImageUrl("Logo/Vector (Stroke).png")}
                  alt="arrow"
                />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Benifits;
