import React, { useState } from "react";
import styles from "./Contact.module.css";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";
import FooterSection from "../FooterSection/FooterSection";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });
  const { FirstName, LastName, Email, Phone, Subject, Message } = formData;

  function handlerSubmit(e) {
    e.preventDefault();
    toast.success("sent a message!");
    setFormData({
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      Subject: "",
      Message: "",
    });
  }
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };
  return (
    <>
      <div className={styles.TopContainer}>
        <h1>Contact Us</h1>
        <p>
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
      <div className={styles.ContactSection}>
        <form onSubmit={handlerSubmit} className={styles.form}>
          <div className={styles.formElements}>
            <div className={styles.Elements_Container}>
              <div className={styles.Elements_SubContainer}>
                <label htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  id="FirstName"
                  placeholder="Enter First Name"
                  value={FirstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.Elements_SubContainer}>
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  id="LastName"
                  placeholder="Enter Last Name"
                  value={LastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.Elements_Container}>
              <div className={styles.Elements_SubContainer}>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  placeholder="Enter your Email"
                  value={Email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.Elements_SubContainer}>
                <label htmlFor="Phone">Phone</label>
                <input
                  type="phone"
                  id="Phone"
                  placeholder="Enter Phone Number"
                  value={Phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.Elements_Container}>
              <div className={styles.Elements_SubContainer}>
                <label htmlFor="Subject">Subject</label>
                <input
                  type="text"
                  id="Subject"
                  placeholder="Enter your Subject"
                  value={Subject}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.Elements_SubContainer}>
              <label htmlFor="Message">Message</label>
              <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="10"
                placeholder="Enter your Message"
                value={Message}
                onChange={handleChange}
              ></textarea>
              {/* <input
                type="text"
                id="Message"
                placeholder="Enter your Message"
                value={Message}
                onChange={handleChange}
              /> */}
            </div>
          </div>
          <div className={styles.Submit_btn}>
            <button type="submit">Send Your Message</button>
          </div>
        </form>
        <div className={styles.line}></div>
        <div className={styles.ButtonsContainer}>
          <div className={styles.Buttons_Sub_Container}>
            <div className={styles.btn_container}>
              <button>
                <MdEmail />
              </button>
              support@skillbridge.com
            </div>
            <div className={styles.btn_container}>
              <button>
                <MdLocalPhone />
              </button>
              <p> +91 0000000000</p>
            </div>
            <div className={styles.btn_container}>
              <button>
                <MdLocationOn />
              </button>
              Somewhere in the World
            </div>
            <div className={`${styles.btn_social} ${styles.btn_container}`}>
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
              <p>Social profiles</p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default Contact;
