import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Button } from "@material-ui/core";
import project1 from "/hcj.png";
import project2 from "/fullstack.jpeg";
import project3 from "/react.jpeg";
import project4 from "/face.jpeg";

const items = [
  {
    id: 1,
    title: "Basic Website",
    img: project1,
    desc: "A sample website about my hobbies and interests using JavaScript, HTML, CSS",
    buttonLink: "https://github.com/charishma-a/Charishma-Website"
  },
  {
    id: 2,
    title: "Full Stack Donation Application",
    img: project2,
    desc: "A full stack donation project donation web application in which the users can enter their details regarding the donations. Client Side uses TypeScript and the server side is REST API.",
    buttonLink: "https://github.com/charishma-a/FullStack-Donation"
  },
  {
    id: 3,
    title: "Expense Tracker",
    img: project3,
    desc: "A React App which helps in tracking expenses. The basic CRUD operations can be performed",
    buttonLink: "https://github.com/charishma-a/Expense-Tracker"
  },
  {
    id: 4,
    title: "Emotion Classification of faces",
    img: project4,
    desc: "An ML based project. Used dimensionality technique called principle Component analysis. Found the best k for which the seperation between the classes is maximum",
    buttonLink: "https://github.com/charishma-a/Emotion-classification"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Button style={{ color: 'white', border: '5px solid white', borderRadius: '4px' }} target="/" href={item.buttonLink}>Github Link</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
