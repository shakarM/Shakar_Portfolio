import React from "react";

import Header from "./features/hero/Header";
import Works from "./features/portfolio/Works";
import "react-tooltip/dist/react-tooltip.css";
import { motion } from "framer-motion";
import Experience from "./features/experience/Experience";
import FloatingDock from "./components/common/FloatingDock/FloatingDock";

import Navbar from "./components/layout/Navbar/Navbar";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="app"
    >
      <Navbar />
      <div className="overflow-x-hidden ">
        <div className="">
          <Header />

          <Works />
          <Experience />
        </div>
      </div>
      <FloatingDock />
    </motion.div>
  );
};

export default Home;
