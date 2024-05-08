import React from "react";
import vidoeFile from "./Project_video.mp4";
import styles from "./Video.module.css";
function Video() {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} controls>
        <source src={vidoeFile} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
