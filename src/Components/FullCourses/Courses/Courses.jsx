import React from "react";
import styles from "./Courses.module.css";
import { getImageUrl } from "../../../utils";
import FooterSection from "../../FooterSection/FooterSection";
import { useState } from "react";
import DesignCourse from "../DesignCourse/DesignCourse";
import { useContext } from "react";
import { AuthContext } from "../../../App";
function Courses() {
  const [openDesignCourse, setOpenDesignCourse] = useContext(AuthContext);
  return (
    <section className={styles.courseSection}>
      {!openDesignCourse && (
        <>
          <div className={styles.TopContainer}>
            <h1>Online Courses on Design and Development</h1>
            <p>
              Welcome to our online course page, where you can enhance your
              skills in design and development. Choose from our carefully
              curated selection of 10 courses designed to provide you with
              comprehensive knowledge and practical experience. Explore the
              courses below and find the perfect fit for your learning journey.
            </p>
          </div>
          <div className={styles.BottomContainer}>
            <div className={styles.CardContainer}>
              <div className={styles.Container1}>
                <div className={styles.subContainer1}>
                  <div className={styles.TextContainer}>
                    <h4>Web Design Fundamentals</h4>
                    <p>
                      Learn the fundamentals of web design, including HTML, CSS,
                      and responsive design principles. Develop the skills to
                      create visually appealing and user-friendly websites.
                    </p>
                  </div>
                  <button>View Course</button>
                </div>
                <div className={styles.ImageContainer}>
                  <img src={getImageUrl("Logo/web1.png")} alt="web1" />
                  <img src={getImageUrl("Logo/web2.png")} alt="web2" />
                  <img src={getImageUrl("Logo/web3.png")} alt="web3" />
                </div>
                <div className={styles.subContainer2}>
                  <div className={styles.Container_sub}>
                    <div className={styles.duration_Container}>4 Weeks</div>
                    <div className={styles.level_Container}>Beginner</div>
                  </div>
                  <h5>By John Smith</h5>
                </div>
              </div>
              <div className={styles.Container2}>
                <div className={styles.CardSubContainer1}>
                  <h4>Curriculum</h4>
                </div>
                <div className={styles.CardSubContainer2}>
                  <div className={styles.featureItem}>
                    <h4>01</h4>
                    <p>Introduction to HTML</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>02</h4>
                    <p>Styling with CSS</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>03</h4>
                    <p>Introduction to Responsive Design</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>04</h4>
                    <p>Design Principles for Web</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>05</h4>
                    <p>Building a Basic Website</p>
                  </div>
                  {/* <div className={styles.line}></div> */}
                </div>
              </div>
            </div>
            <div className={styles.CardContainer}>
              <div className={styles.Container1}>
                <div className={styles.subContainer1}>
                  <div className={styles.TextContainer}>
                    <h4>UI/UX Design</h4>
                    <p>
                      Master the art of creating intuitive user interfaces (UI)
                      and enhancing user experiences (UX). Learn design
                      principles, wireframing, prototyping, and usability
                      testing techniques.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setOpenDesignCourse(true);
                    }}
                  >
                    View Course
                  </button>
                </div>
                <div className={styles.ImageContainer}>
                  <img src={getImageUrl("Logo/web4.png")} alt="web1" />
                  <img src={getImageUrl("Logo/web5.png")} alt="web2" />
                  <img src={getImageUrl("Logo/web6.png")} alt="web3" />
                </div>
                <div className={styles.subContainer2}>
                  <div className={styles.Container_sub}>
                    <div className={styles.duration_Container}>6 Weeks</div>
                    <div className={styles.level_Container}>Intermediate</div>
                  </div>
                  <h5>By Emily Johnson</h5>
                </div>
              </div>
              <div className={styles.Container2}>
                <div className={styles.CardSubContainer1}>
                  <h4>Curriculum</h4>
                </div>
                <div className={styles.CardSubContainer2}>
                  <div className={styles.featureItem}>
                    <h4>01</h4>
                    <p>Introduction to UI/UX Design</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>02</h4>
                    <p>User Research and Personas</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>03</h4>
                    <p>Wireframing and Prototyping</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>04</h4>
                    <p>Visual Design and Branding</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>05</h4>
                    <p>Usability Testing and Iteration</p>
                  </div>
                  {/* <div className={styles.line}></div> */}
                </div>
              </div>
            </div>
            {/* 3rd  */}
            <div className={styles.CardContainer}>
              <div className={styles.Container1}>
                <div className={styles.subContainer1}>
                  <div className={styles.TextContainer}>
                    <h4>Mobile App Development</h4>
                    <p>
                      Dive into the world of mobile app development. Learn to
                      build native iOS and Android applications using
                      industry-leading frameworks like Swift and Kotlin.
                    </p>
                  </div>
                  <button>View Course</button>
                </div>
                <div className={styles.ImageContainer}>
                  <img src={getImageUrl("Logo/web7.png")} alt="web1" />
                  <img src={getImageUrl("Logo/web8.png")} alt="web2" />
                  <img src={getImageUrl("Logo/web9.png")} alt="web3" />
                </div>
                <div className={styles.subContainer2}>
                  <div className={styles.Container_sub}>
                    <div className={styles.duration_Container}>8 Weeks</div>
                    <div className={styles.level_Container}>Intermediate</div>
                  </div>
                  <h5>By David Brown</h5>
                </div>
              </div>
              <div className={styles.Container2}>
                <div className={styles.CardSubContainer1}>
                  <h4>Curriculum</h4>
                </div>
                <div className={styles.CardSubContainer2}>
                  <div className={styles.featureItem}>
                    <h4>01</h4>
                    <p>Introduction to Mobile App Development</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>02</h4>
                    <p>Fundamentals of Swift Programming (iOS)</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>03</h4>
                    <p>Fundamentals of Kotlin Programming (Android)</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>04</h4>
                    <p>Building User Interfaces</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>05</h4>
                    <p>App Deployment and Testing</p>
                  </div>
                  {/* <div className={styles.line}></div> */}
                </div>
              </div>
            </div>
            {/* 4th */}
            <div className={styles.CardContainer}>
              <div className={styles.Container1}>
                <div className={styles.subContainer1}>
                  <div className={styles.TextContainer}>
                    <h4>Front-End Web Development</h4>
                    <p>
                      Become proficient in front-end web development. Learn
                      HTML, CSS, JavaScript, and popular frameworks like
                      Bootstrap and React. Build interactive and responsive
                      websites.
                    </p>
                  </div>
                  <button>View Course</button>
                </div>
                <div className={styles.ImageContainer}>
                  <img src={getImageUrl("Logo/web10.png")} alt="web1" />
                  <img src={getImageUrl("Logo/web11.png")} alt="web2" />
                  <img src={getImageUrl("Logo/web12.png")} alt="web3" />
                </div>
                <div className={styles.subContainer2}>
                  <div className={styles.Container_sub}>
                    <div className={styles.duration_Container}>10 Weeks</div>
                    <div className={styles.level_Container}>Intermediate</div>
                  </div>
                  <h5>By Michael Adams</h5>
                </div>
              </div>
              <div className={styles.Container2}>
                <div className={styles.CardSubContainer1}>
                  <h4>Curriculum</h4>
                </div>
                <div className={styles.CardSubContainer2}>
                  <div className={styles.featureItem}>
                    <h4>01</h4>
                    <p>HTML Fundamentals</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>02</h4>
                    <p>CSS Styling and Layouts</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>03</h4>
                    <p>JavaScript Basics</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>04</h4>
                    <p>Building Responsive Websites</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.featureItem}>
                    <h4>05</h4>
                    <p>Introduction to Bootstrap and React</p>
                  </div>
                  {/* <div className={styles.line}></div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {openDesignCourse && <DesignCourse />}
      <FooterSection />
    </section>
  );
}

export default Courses;
