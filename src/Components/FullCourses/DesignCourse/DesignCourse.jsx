import React from "react";
import styles from "./DesignCourse.module.css";
import DesignVideo from "./Design_video.mp4";
import { CiClock2 } from "react-icons/ci";
function DesignCourse() {
  return (
    <section>
      <div className={styles.headerContainer}>
        <h1>UI/UX Design Course</h1>
        <p>
          Welcome to our UI/UX Design course! This comprehensive program will
          equip you with the knowledge and skills to create exceptional user
          interfaces (UI) and enhance user experiences (UX). Dive into the world
          of design thinking, wireframing, prototyping, and usability testing.
          Below is an overview of the curriculum
        </p>
      </div>
      <div className={styles.videoContainer}>
        <video className={styles.video} controls>
          <source src={DesignVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.subContainer}>
          <div className={styles.card}>
            <h2>01</h2>
            <h4>Introduction to UI/UX Design</h4>
            <div className={styles.ItemsContainer}>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Understanding UI/UX Design Principles</h5>
                  <p>Lesson 01</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>45 Minutes</p>
                </div>
              </div>
              <div className={`${styles.featureContainer} ${styles.boxShadow}`}>
                <div className={styles.TextContainer}>
                  <h5>Importance of User-Centered Design</h5>
                  <p>Lesson 02</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>The Role of UI/UX Design in Product Development</h5>
                  <p>Lesson 03</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>45 Minutes</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>02</h2>
            <h4>User Research and Analysis</h4>
            <div className={styles.ItemsContainer}>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Conducting User Research and Interviews</h5>
                  <p>Lesson 01</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Analyzing User Needs and Behavior</h5>
                  <p>Lesson 02</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>The Role of UI/UX Design in Product Development</h5>
                  <p>Lesson 03</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>45 Minutes</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>03</h2>
            <h4>Wireframing and Prototyping</h4>
            <div className={styles.ItemsContainer}>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Introduction to Wireframing Tools and Techniques</h5>
                  <p>Lesson 01</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Creating Low-Fidelity Wireframes</h5>
                  <p>Lesson 02</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Prototyping and Interactive Mockups</h5>
                  <p>Lesson 03</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>04</h2>
            <h4>Visual Design and Branding</h4>
            <div className={styles.ItemsContainer}>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Color Theory and Typography in UI Design</h5>
                  <p>Lesson 01</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Visual Hierarchy and Layout Design</h5>
                  <p>Lesson 02</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Creating a Strong Brand Identity</h5>
                  <p>Lesson 03</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>45 Minutes</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>05</h2>
            <h4>Usability Testing and Iteration</h4>
            <div className={styles.ItemsContainer}>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Usability Testing Methods and Techniques</h5>
                  <p>Lesson 01</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>1 Hour</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Analyzing Usability Test Results</h5>
                  <p>Lesson 02</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>45 Minutes</p>
                </div>
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.TextContainer}>
                  <h5>Iterating and Improving UX Designs</h5>
                  <p>Lesson 03</p>
                </div>
                <div className={styles.container}>
                  <CiClock2 />
                  <p>45 Minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DesignCourse;
