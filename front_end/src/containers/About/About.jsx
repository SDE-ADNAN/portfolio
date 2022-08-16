import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { images } from "../../constants";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div id="about">
      <h2 className="head-text" onClick={console.log(abouts)}>
        I Know That <span>Good Design </span>
        <br />
        means <span>Good Business </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// wrapping the About  component with Appwrap which is an HOC i.e a higher order function
// and passing about as an component and "about" as its id
export default AppWrap(About, "about");
