import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./FooterSection.module.css";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";
function FooterSection() {
  return (
    <footer className={styles.FooterSection}>
      <div className={styles.FooterContainer}>
        <div className={styles.SubContainer1}>
          <div className={styles.logo}>
            <img
              src={getImageUrl("Logo/shape-17.png")}
              alt="logo"
              className={styles.logoShape}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <button>
              <MdEmail />
              hello@skillbridge.com
            </button>
            <button>
              <MdLocalPhone />
              +91 91813 23 2309
            </button>
            <button>
              <MdLocationOn />
              Somewhere in the World
            </button>
          </div>
        </div>
        <div className={styles.SubContainer2}>
          <div className={styles.Container}>
            <h5>Home</h5>
            <div className={styles.btnContainers}>
              <p>Benifts</p>
              <p>Our Courses</p>
              <p>Our Testimonials</p>
              <p>Our FAQ</p>
            </div>
          </div>
          <div className={styles.Container}>
            <h5>About</h5>
            <div className={styles.btnContainers}>
              <p>Company</p>
              <p>Achievments</p>
              <p>Our Goals</p>
            </div>
          </div>
          <div className={styles.Container}>
            <h5>Social Profiles</h5>
            <div className={styles.btnContainers}>
              <button>
                <BsFacebook />
              </button>
              <button>
                <BsTwitterX />
              </button>
              <button>
                <BsLinkedin />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <p>© 2024 Skillbridge. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
