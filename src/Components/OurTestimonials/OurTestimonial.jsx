import React from "react";
import styles from "./OurTestimonial.module.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";
function OurTestimonial() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className={styles.Testimonial_Section}>
      <div className={styles.container}>
        <div className={styles.TextContainer}>
          <h1>Our Testimonial</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            eaque voluptatem ipsum, sequi modi dignissimos totam aspernatur
            ipsa. Reiciendis, tempora!
          </p>
        </div>
        <div className={styles.Testimonial_btn}>
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
      <div className={styles.cardContainer}>
        <div className={styles.ItemsContainer}>
          <div className={styles.Card}>
            <div className={styles.innerCardContainer1}>
              <p>
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
            <div className={styles.innerCardContainer2}>
              <div className={styles.subContainer}>
                <img
                  src={getImageUrl("Logo/TestImg-1.png")}
                  alt="TestimonialImg"
                />
                <h4>Sarah L</h4>
              </div>
              <div className={styles.Card_btn}>
                <button>Read Full Story</button>
              </div>
            </div>
          </div>
          <div className={styles.Card}>
            <div className={styles.innerCardContainer1}>
              <p>
                The UI/UX design course exceeded my expectations. The
                instructor's expertise and practical assignments helped me
                improve my design skills. I feel more confident in my career
                now. Thank you!
              </p>
            </div>
            <div className={styles.innerCardContainer2}>
              <div className={styles.subContainer}>
                <img
                  src={getImageUrl("Logo/TestImg-2.png")}
                  alt="TestimonialImg"
                />
                <h4>Jason M</h4>
              </div>
              <div className={styles.Card_btn}>
                <button>Read Full Story</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ItemsContainer}>
          <div className={styles.Card}>
            <div className={styles.innerCardContainer1}>
              <p>
                The mobile app development course was fantastic! The
                step-by-step tutorials and hands-on projects helped me grasp the
                concepts easily. I'm now building my own app. Great course!
              </p>
            </div>
            <div className={styles.innerCardContainer2}>
              <div className={styles.subContainer}>
                <img
                  src={getImageUrl("Logo/TestImg-3.png")}
                  alt="TestimonialImg"
                />
                <h4>Emily R</h4>
              </div>
              <div className={styles.Card_btn}>
                <button>Read Full Story</button>
              </div>
            </div>
          </div>
          <div className={styles.Card}>
            <div className={styles.innerCardContainer1}>
              <p>
                I enrolled in the graphic design course as a beginner, and it
                was the perfect starting point. The instructor's guidance and
                feedback improved my design abilities significantly. I'm
                grateful for this course!
              </p>
            </div>
            <div className={styles.innerCardContainer2}>
              <div className={styles.subContainer}>
                <img
                  src={getImageUrl("Logo/TestImg-4.png")}
                  alt="TestimonialImg"
                />
                <h4>Michael K</h4>
              </div>
              <div className={styles.Card_btn}>
                <button>Read Full Story</button>
              </div>
            </div>
          </div>
        </div>

        {showAll && (
          <div className={styles.ItemsContainer}>
            <div className={styles.Card}>
              <div className={styles.innerCardContainer1}>
                <p>
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </p>
              </div>
              <div className={styles.innerCardContainer2}>
                <div className={styles.subContainer}>
                  <img
                    src={getImageUrl("Logo/TestImg-1.png")}
                    alt="TestimonialImg"
                  />
                  <h4>Sarah L</h4>
                </div>
                <div className={styles.Card_btn}>
                  <button>Read Full Story</button>
                </div>
              </div>
            </div>
            <div className={styles.Card}>
              <div className={styles.innerCardContainer1}>
                <p>
                  The UI/UX design course exceeded my expectations. The
                  instructor's expertise and practical assignments helped me
                  improve my design skills. I feel more confident in my career
                  now. Thank you!
                </p>
              </div>
              <div className={styles.innerCardContainer2}>
                <div className={styles.subContainer}>
                  <img
                    src={getImageUrl("Logo/TestImg-2.png")}
                    alt="TestimonialImg"
                  />
                  <h4>Jason M</h4>
                </div>
                <div className={styles.Card_btn}>
                  <button>Read Full Story</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default OurTestimonial;
