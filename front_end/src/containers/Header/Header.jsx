import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Adnan</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Frontend </p>
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app_flex" key={`circle-${index}`}>
            <img src={circle} alt="circle"></img>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
// wrapping the About  component with Appwrap which is an HOC i.e a higher order function
// and passing about as an component and "about" as its id
export default AppWrap(Header, "home");
