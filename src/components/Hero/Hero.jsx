import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fauzul Azkia!</h1>
        <p className={styles.description}>
          I am a Full Stack Developer with several years of experience. I started my first career in programming in 2022.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fauzulazkia2002@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/my-photo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
