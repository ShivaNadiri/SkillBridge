import styles from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";

import {
  Navbar,
  Home,
  Contact,
  Courses,
  Pricing,
  AboutUs,
  Login,
  SignUp,
} from "../src/index";
import { GoArrowRight } from "react-icons/go";
import { createContext, useState } from "react";
export const AuthContext = createContext();

function App() {
  const [openDesignCourse, setOpenDesignCourse] = useState(true);
  return (
    <div className={styles.App}>
      <div className={styles.headline}>
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <GoArrowRight />
      </div>
      <AuthContext.Provider value={[openDesignCourse, setOpenDesignCourse]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </AuthContext.Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
