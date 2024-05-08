import React from "react";
import styles from "./Ourcourse.module.css";
import { getImageUrl } from "../../../utils";
import { useState } from "react";
function Ourcourse() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className={styles.OurcourseSection}>
      <div className={styles.courseContainer1}>
        <div className={styles.TextContainer}>
          <h1>Our Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            eaque voluptatem ipsum, sequi modi dignissimos totam aspernatur
            ipsa. Reiciendis, tempora!
          </p>
        </div>
        <div className={styles.courses_btn}>
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
      <div className={styles.courseContainer2}>
        {/* 1st item container */}
        <div className={styles.ItemsContainer}>
          {/* 1st card */}
          <div className={styles.Card}>
            <div className={styles.cardContainer}>
              <img src={getImageUrl("Logo/Image.png")} alt="image" />
              <div className={styles.cardSubcontainer}>
                <div className={styles.card_Container}>
                  <div className={styles.card_subcontainer}>
                    <div className={styles.subContainer_Container}>
                      <p>4 Weeks</p>
                      <p>Beginner</p>
                    </div>
                    <h4>By John Smith</h4>
                  </div>
                </div>
                <div className={styles.CardTextContainer}>
                  <h3>Web Design Fundamentals</h3>
                  <p>
                    Learn the fundamentals of web design, including HTML, CSS,
                    and responsive design principles. Develop the skills to
                    create visually appealing and user-friendly websites.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card_btn}>
              <button>Get it Now</button>
            </div>
          </div>
          {/* 2nd card */}
          <div className={styles.Card}>
            <div className={styles.cardContainer}>
              <img src={getImageUrl("Logo/Image-1.png")} alt="image" />
              <div className={styles.cardSubcontainer}>
                <div className={styles.card_Container}>
                  <div className={styles.card_subcontainer}>
                    <div className={styles.subContainer_Container}>
                      <p>10 Weeks</p>
                      <p>Beginner</p>
                    </div>
                    {/* <div className={styles.subContainer_Container}>
                      <p>Beginner</p>
                    </div> */}
                    <h4>By Sarah Thompson</h4>
                  </div>
                </div>
                <div className={styles.CardTextContainer}>
                  <h3>Graphic Design for Beginners</h3>
                  <p>
                    Discover the fundamentals of graphic design, including
                    typography, color theory, layout design, and image
                    manipulation techniques. Create visually stunning designs
                    for print and digital media.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card_btn}>
              <button>Get it Now</button>
            </div>
          </div>
        </div>
        {/* 2nd container */}
        <div className={styles.ItemsContainer}>
          <div className={styles.Card}>
            <div className={styles.cardContainer}>
              <img src={getImageUrl("Logo/Image-2.png")} alt="image" />
              <div className={styles.cardSubcontainer}>
                <div className={styles.card_Container}>
                  <div className={styles.card_subcontainer}>
                    <div className={styles.subContainer_Container}>
                      <p>10 Weeks</p>
                      <p>Intermediate</p>
                    </div>
                    {/* <div className={styles.subContainer_Container}>
                      <p>Beginner</p>
                    </div> */}
                    <h4>By Michael Adams</h4>
                  </div>
                </div>
                <div className={styles.CardTextContainer}>
                  <h3>Front-End Web Development</h3>
                  <p>
                    Become proficient in front-end web development. Learn HTML,
                    CSS, JavaScript, and popular frameworks like Bootstrap and
                    React. Build interactive and responsive websites.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card_btn}>
              <button>Get it Now</button>
            </div>
          </div>
          <div className={styles.Card}>
            <div className={styles.cardContainer}>
              <img src={getImageUrl("Logo/Image-3.png")} alt="image" />
              <div className={styles.cardSubcontainer}>
                <div className={styles.card_Container}>
                  <div className={styles.card_subcontainer}>
                    <div className={styles.subContainer_Container}>
                      <p>6 Weeks</p>
                      <p>Advance</p>
                    </div>
                    {/* <div className={styles.subContainer_Container}>
                      <p>Beginner</p>
                    </div> */}
                    <h4>By Jennifer Wilson</h4>
                  </div>
                </div>
                <div className={styles.CardTextContainer}>
                  <h3>Advanced JavaScript</h3>
                  <p>
                    Take your JavaScript skills to the next level. Explore
                    advanced concepts like closures, prototypes, asynchronous
                    programming, and ES6 features. Build complex applications
                    with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card_btn}>
              <button>Get it Now</button>
            </div>
          </div>
        </div>
        {/* 3rd container */}
        <div className={styles.ItemsContainer}>
          <div className={styles.Card}>
            <div className={styles.cardContainer}>
              <img src={getImageUrl("Logo/Image-4.png")} alt="image" />
              <div className={styles.cardSubcontainer}>
                <div className={styles.card_Container}>
                  <div className={styles.card_subcontainer}>
                    <div className={styles.subContainer_Container}>
                      <p>8 Weeks</p>
                      <p>Intermediate</p>
                    </div>
                    {/* <div className={styles.subContainer_Container}>
                      <p>Beginner</p>
                    </div> */}
                    <h4>By David Brown</h4>
                  </div>
                </div>
                <div className={styles.CardTextContainer}>
                  <h3>Mobile App Development</h3>
                  <p>
                    Dive into the world of mobile app development. Learn to
                    build native iOS and Android applications using
                    industry-leading frameworks like Swift and Kotlin.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card_btn}>
              <button>Get it Now</button>
            </div>
          </div>
          <div className={styles.Card}>
            <div className={styles.cardContainer}>
              <img src={getImageUrl("Logo/Image-5.png")} alt="image" />
              <div className={styles.cardSubcontainer}>
                <div className={styles.card_Container}>
                  <div className={styles.card_subcontainer}>
                    <div className={styles.subContainer_Container}>
                      <p>6 Weeks</p>
                      <p>Intermediate</p>
                    </div>
                    {/* <div className={styles.subContainer_Container}>
                      <p>Beginner</p>
                    </div> */}
                    <h4>By Emily Johnson</h4>
                  </div>
                </div>
                <div className={styles.CardTextContainer}>
                  <h3>UI/UX Design</h3>
                  <p>
                    Master the art of creating intuitive user interfaces (UI)
                    and enhancing user experiences (UX). Learn design
                    principles, wireframing, prototyping, and usability testing
                    techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card_btn}>
              <button>Get it Now</button>
            </div>
          </div>
        </div>
        {/* djdjdjdjdjjdjdjdjdjjdjdjjdjd */}
        {showAll && (
          <div className={styles.ItemsContainer}>
            {/* 1st card */}
            <div className={styles.Card}>
              <div className={styles.cardContainer}>
                <img src={getImageUrl("Logo/Image.png")} alt="image" />
                <div className={styles.cardSubcontainer}>
                  <div className={styles.card_Container}>
                    <div className={styles.card_subcontainer}>
                      <div className={styles.subContainer_Container}>
                        <p>4 Weeks</p>
                        <p>Beginner</p>
                      </div>
                      <h4>By John Smith</h4>
                    </div>
                  </div>
                  <div className={styles.CardTextContainer}>
                    <h3>Web Design Fundamentals</h3>
                    <p>
                      Learn the fundamentals of web design, including HTML, CSS,
                      and responsive design principles. Develop the skills to
                      create visually appealing and user-friendly websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card_btn}>
                <button>Get it Now</button>
              </div>
            </div>
            {/* 2nd card */}
            <div className={styles.Card}>
              <div className={styles.cardContainer}>
                <img src={getImageUrl("Logo/Image-1.png")} alt="image" />
                <div className={styles.cardSubcontainer}>
                  <div className={styles.card_Container}>
                    <div className={styles.card_subcontainer}>
                      <div className={styles.subContainer_Container}>
                        <p>10 Weeks</p>
                        <p>Beginner</p>
                      </div>
                      {/* <div className={styles.subContainer_Container}>
                      <p>Beginner</p>
                    </div> */}
                      <h4>By Sarah Thompson</h4>
                    </div>
                  </div>
                  <div className={styles.CardTextContainer}>
                    <h3>Graphic Design for Beginners</h3>
                    <p>
                      Discover the fundamentals of graphic design, including
                      typography, color theory, layout design, and image
                      manipulation techniques. Create visually stunning designs
                      for print and digital media.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card_btn}>
                <button>Get it Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Ourcourse;
