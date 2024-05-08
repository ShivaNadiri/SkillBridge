import React from "react";
import styles from "./FAQSection.module.css";
import { GoX } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
function FAQSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className={styles.FAQSection}>
      <div className={styles.Container}>
        <div className={styles.TextContainer}>
          <h1>Frequently Asked Questions</h1>
          <p>
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
        </div>
        <button>See All FAQ's</button>
      </div>
      <div className={styles.ItemContainer}>
        {!open && (
          <div className={styles.Card1}>
            <h5>Can I enroll in multiple courses at once?</h5>
            <button
              onClick={() => {
                console.log("clicked");
                setOpen(true);
              }}
            >
              <IoIosAdd className={styles.Icon} />
            </button>
          </div>
        )}
        {open && (
          <div className={styles.Card}>
            <div className={styles.Card_Container}>
              <h5>Can I enroll in multiple courses at once?</h5>
              {open ? (
                <button
                  onClick={() => {
                    console.log("clicked");
                    setOpen(false);
                  }}
                >
                  <GoX className={styles.Icon} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    console.log("clicked");
                    setOpen(true);
                  }}
                >
                  <IoIosAdd className={styles.Icon} />
                </button>
              )}
            </div>
            {open && (
              <>
                <p>
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </p>
                <div className={styles.Card_SubContainer}>
                  <h5>Enrollment Process for Different Courses</h5>
                  <button>
                    <GoArrowRight className={styles.Icon} />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
        <div className={styles.Card1}>
          <h5>What kind of support can I expect from instructors?</h5>
          <button
            onClick={() => {
              console.log("clicked");
              setOpen(false);
            }}
          >
            <IoIosAdd className={styles.Icon} />
          </button>
        </div>
        <div className={styles.Card1}>
          <h5>
            Are the courses self-paced or do they have specific start and end
            dates?
          </h5>
          <button
            onClick={() => {
              console.log("clicked");
              setOpen(false);
            }}
          >
            <IoIosAdd className={styles.Icon} />
          </button>
        </div>
        <div className={styles.Card1}>
          <h5>Are there any prerequisites for the courses?</h5>
          <button
            onClick={() => {
              console.log("clicked");
              setOpen(false);
            }}
          >
            <IoIosAdd className={styles.Icon} />
          </button>
        </div>
        <div className={styles.Card1}>
          <h5>Can I download the course materials for offline access?</h5>
          <button
            onClick={() => {
              console.log("clicked");
              setOpen(false);
            }}
          >
            <IoIosAdd className={styles.Icon} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
