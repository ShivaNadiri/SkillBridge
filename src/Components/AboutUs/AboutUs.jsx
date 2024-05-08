import React from "react";
import styles from "./AboutUs.module.css";
import { getImageUrl } from "../../utils";
import FooterSection from "../FooterSection/FooterSection";

function AboutUs() {
  return (
    <section className={styles.AboutSection}>
      <div className={styles.TopContainer}>
        <h1>About Skillbridge</h1>
        <p>
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      <div className={styles.AchievmentContainer}>
        <div className={styles.TextContainer}>
          <h3>Achievements</h3>
          <p>
            Our commitment to excellence has led us to achieve significant
            milestones along our journey. Here are some of our notable
            achievements
          </p>
        </div>

        <div className={styles.CardContainer}>
          <div className={styles.card}>
            <div className={styles.IconContainer}>
              <img
                src={getImageUrl("Logo/Achievment1.png")}
                alt="AchivementIcon"
              />
            </div>
            <div className={styles.card_TextContainer}>
              <h4>Trusted by Thousands</h4>
              <p>
                We have successfully served thousands of students, helping them
                unlock their potential and achieve their career goals.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.IconContainer}>
              <img
                src={getImageUrl("Logo/Achievment2.png")}
                alt="AchivementIcon"
              />
            </div>
            <div className={styles.card_TextContainer}>
              <h4>Award-Winning Courses</h4>
              <p>
                Our courses have received recognition and accolades in the
                industry for their quality, depth of content, and effective
                teaching methodologies.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.IconContainer}>
              <img
                src={getImageUrl("Logo/Achievment3.png")}
                alt="AchivementIcon"
              />
            </div>
            <div className={styles.card_TextContainer}>
              <h4>Positive Student Feedback</h4>
              <p>
                We take pride in the positive feedback we receive from our
                students, who appreciate the practicality and relevance of our
                course materials.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.IconContainer}>
              <img
                src={getImageUrl("Logo/Achievment4.png")}
                alt="AchivementIcon"
              />
            </div>
            <div className={styles.card_TextContainer}>
              <h4>Industry Partnerships</h4>
              <p>
                We have established strong partnerships with industry leaders,
                enabling us to provide our students with access to the latest
                tools and technologies
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.AchievmentContainer}>
        <div className={styles.TextContainer}>
          <h3>Our Goals</h3>
          <p>
            At SkillBridge, our goal is to empower individuals from all
            backgrounds to thrive in the world of design and development. We
            believe that education should be accessible and transformative,
            enabling learners to pursue their passions and make a meaningful
            impact. Through our carefully crafted courses, we aim to
          </p>
        </div>

        <div className={styles.CardContainer}>
          <div className={styles.card}>
            <div className={styles.IconContainer}>
              <img
                src={getImageUrl("Logo/ourgoal1.png")}
                alt="AchivementIcon"
              />
            </div>
            <div className={styles.card_TextContainer}>
              <h4>Provide Practical Skills</h4>
              <p>
                We focus on delivering practical skills that are relevant to the
                current industry demands. Our courses are designed to equip
                learners with the knowledge and tools needed to excel in their
                chosen field.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.IconContainer}>
              <img
                src={getImageUrl("Logo/ourgoal2.png")}
                alt="AchivementIcon"
              />
            </div>
            <div className={styles.card_TextContainer}>
              <h4>Foster Creative Problem-Solving</h4>
              <p>
                We encourage creative thinking and problem-solving abilities,
                allowing our students to tackle real-world challenges with
                confidence and innovation.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.IconContainer}>
              <img
                src={getImageUrl("Logo/ourgoal3.png")}
                alt="AchivementIcon"
              />
            </div>
            <div className={styles.card_TextContainer}>
              <h4>Promote Collaboration and Community</h4>
              <p>
                We believe in the power of collaboration and peer learning. Our
                platform fosters a supportive and inclusive community where
                learners can connect, share insights, and grow together.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.IconContainer}>
              <img
                src={getImageUrl("Logo/ourgoal4.png")}
                alt="AchivementIcon"
              />
            </div>
            <div className={styles.card_TextContainer}>
              <h4>Stay Ahead of the Curve</h4>
              <p>
                The digital landscape is constantly evolving, and we strive to
                stay at the forefront of industry trends. We regularly update
                our course content to ensure our students receive the latest
                knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.CTASection}>
        <div className={styles.CTA_TextContainer}>
          <h1>
            <span className={styles.FirstWord}>Together</span>, let's shape the
            future of digital innovation
          </h1>
          <p>
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <div>
          <img
            src={getImageUrl("Logo/AbstractDesign.png")}
            alt="CTAICON"
            className={styles.CTA_Icon}
          />
        </div>

        <div className={styles.btn_container}>
          <button>Join Now</button>
        </div>
      </div>
      <FooterSection />
    </section>
  );
}

export default AboutUs;
