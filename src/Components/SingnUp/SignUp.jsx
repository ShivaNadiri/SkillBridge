import React from "react";
import styles from "./SignUp.module.css";
import SliderSlick from "../SliderSlick/SliderSlick";
import { getImageUrl } from "../../utils";
import { MdArrowOutward } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterSection from "../FooterSection/FooterSection";
function SignUp() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Password: "",
  });
  const { FullName, Email, Password } = formData;
  function handlerChange(e) {
    console.log(e.target.id);
    setFormData((prevState) => {
      console.log(prevState);
      return { ...prevState, [e.target.id]: e.target.value };
    });
  }
  function handlerSubmit(e) {
    e.preventDefault();
    toast.success("signUp was done,please login");
    setFormData({
      FullName: "",
      Email: "",
      Password: "",
    });
  }
  return (
    <>
      <div className={styles.SignUp}>
        <div className={styles.subContainer}>
          <div className={styles.TextContainer}>
            <h1>Students Testimonials</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div>
            <SliderSlick className={styles.SlickSlider} />
          </div>
        </div>
        <div className={styles.LoginContainer}>
          <div className={styles.Login_TextContainer}>
            <h1>Sign Up</h1>
            <p>Create an account to unlock exclusive features.</p>
          </div>
          <form onSubmit={handlerSubmit} className={styles.signUpForm}>
            <div className={styles.form_container}>
              <div className={styles.form_SubContainer}>
                <label htmlFor="FullName">FullName</label>
                <input
                  type="text"
                  id="FullName"
                  placeholder="Enter your Name"
                  value={FullName}
                  onChange={handlerChange}
                />
              </div>
              <div className={styles.form_SubContainer}>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  placeholder="Enter your Email"
                  autoComplete="username"
                  value={Email}
                  onChange={handlerChange}
                />
              </div>
              <div
                className={`${styles.form_SubContainer} ${styles.Pwd_container}`}
              >
                <label htmlFor="Password">Password</label>
                <input
                  type={visible ? "text" : "password"}
                  id="Password"
                  placeholder="Enter your Password"
                  name="Password"
                  value={Password}
                  onChange={handlerChange}
                  autoComplete="current-password"
                />
                <div
                  onClick={() => {
                    setVisible(!visible);
                  }}
                  className={styles.eyeIcon}
                >
                  {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              <div className={styles.Checkbox}>
                <input type="checkbox" name="Checkbox" id="Checkbox" />
                <span>
                  I agree with <a href="">Terms of Use </a>and
                  <a href="">Privacy Policy</a>
                </span>
              </div>
              <button className={styles.SignUp_Btn} type="submit">
                Sign Up
              </button>
            </div>

            <div className={styles.textBetweenLines}>
              <div className={styles.line}></div>
              <div className={styles.text}>OR</div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.button_2}>
              <button>
                <img src={getImageUrl("Logo/Google.png")} alt="google" />
                Sign Up with Google
              </button>
            </div>
            <div>
              <button className={styles.button_3}>
                Already have an account?<a href="/Login">Login</a>
                <MdArrowOutward />
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default SignUp;
