import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import { images } from "../../constants";

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cpm app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Adnan</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
