import React from "react";
import styles from "../styles/LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles["landing-page-wrapper"]}>
      <div className={styles["hello-wrapper"]}>
        <div className={styles["hello-content-container"]}>
          <div className={styles["hello-index"]}>01</div>
          <div className={styles["hello-content"]}>
            <div className={styles["pre-headline"]}>Hello, I’m</div>
            <div className={styles["main-headline"]}>Victoria Banjo</div>
            <div className={styles["post-headline"]}>
              Hello! I am a software developer! I can help you build a product,
              feature or website. Look through some of my work and experience!
              If you like what you see and have a project you need coded, don’t
              hesitate and contact me.
            </div>
            <div className={styles["subtext"]}>
              <span>See my works - </span>
              {/* react icons */}
            </div>
          </div>
        </div>

        <div className={styles["nav-wrapper"]}>
          <ul>
            <li>Hello</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className={styles["portfolio-wrapper"]}>
        <div className={styles["portfolio-index-container"]}>
          <div className={styles["portfolio-index"]}>02</div>
          <div className={styles["portfolio-content"]}>
            <div className={styles["pre-headline"]}>My recent works</div>
            <div className={styles["main-headline"]}>Portfolio</div>
          </div>
        </div>

        <div className={styles["portfolio-content-container"]}>
          project works
        </div>
      </div>

      <div className={styles["about-wrapper"]}></div>

      <div className={styles["contact-wrapper"]}></div>
    </div>
  );
};

export default LandingPage;
