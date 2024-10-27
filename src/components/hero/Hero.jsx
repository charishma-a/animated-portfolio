import "./hero.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@material-ui/core";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const scrollToContact = () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
};

const scrollToPortfolio = () => {
  document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Charishma</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend developer
          </motion.h1>
          <motion.div variants={textVariants}>
            <p>I am a frontend developer based in Canada. With over 4 years of experience as a Frontend Developer, I bring life to creative ideas. I am motivated towards building scalable products with great user experience. I love what I do!</p>
          </motion.div>
          <motion.div variants={textVariants} className="buttons">
            <motion.button onClick={scrollToPortfolio} variants={textVariants}>
                See the Latest Works
            </motion.button>
            <motion.button onClick={scrollToContact} variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        ReactJs Next HTML CSS JavaScript ML Node
      </motion.div>
      <div className="imageContainer">
        <img src="/Subject 3.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
