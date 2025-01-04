import React from "react";

import SocialMedia from "../components/Navbar/SocialMedia";
import { motion } from "framer-motion";

const AppWrapp = (Component, idName, classNames) =>
  function HOC() {
    return (
      <motion.div className={`app__container ${classNames}`}>
        <SocialMedia />
        <motion.div id={idName} className="app__wrapper app__flex">
          <Component />
        </motion.div>
      </motion.div>
    );
  };

export default AppWrapp;

// Designs I can find them in App.css
