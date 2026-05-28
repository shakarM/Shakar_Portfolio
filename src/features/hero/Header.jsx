import React, { useRef, useState, useEffect } from "react";
import "./Header.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import shakarImg from "../../assets/Shakar.png";
import { FaLinkedin, FaFilePdf, FaFolder, FaRegClock, FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";

const Header = () => {
  const { i18n } = useTranslation();
  const isKurdish = i18n.language === "ku";
  const containerRef = useRef(null);

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'P.M.' : 'A.M.';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div id="home" className={`leah-hero-container ${isKurdish ? "kurdish" : ""}`} ref={containerRef}>
      <div className="leah-hero-grid-bg" />
      
      {/* Center Text */}
      <div className="leah-center-text">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          I design <em>and</em> ship. Fast.
        </motion.h1>
      </div>

      <div className="floating-elements-container">
        {/* Photo Card */}
        <motion.div drag dragConstraints={containerRef} className="floating-card profile-card" initial={{x: -350, y: -200, rotate: -5}} animate={{x: -350, y: -200, rotate: -5}}>
          <div className="img-wrapper">
            <img src={shakarImg} alt="Shakar" />
          </div>
          <p>Shakar - Iraq</p>
        </motion.div>

        {/* Time Card */}
        <motion.div drag dragConstraints={containerRef} className="floating-card time-card" initial={{x: -380, y: 50, rotate: 2}} animate={{x: -380, y: 50, rotate: 2}}>
          <p className="location">IRAQ, IQ</p>
          <h2>{formatTime(time)} <span className="ampm">{time.getHours() >= 12 ? 'P.M.' : 'A.M.'}</span></h2>
          <p className="timezone">AST - UTC+3</p>
        </motion.div>

        {/* Music Card */}
        <motion.div drag dragConstraints={containerRef} className="floating-card music-card" initial={{x: -100, y: -250, rotate: -2}} animate={{x: -100, y: -250, rotate: -2}}>
          <div className="music-info">
            <div className="album-art"></div>
            <div>
              <h4>Vierd Blues</h4>
              <p>Bill Evans</p>
            </div>
            <div className="bars">||||</div>
          </div>
          <div className="music-controls">
            <span>1:24</span>
            <div className="controls-icons">
              <FaStepBackward />
              <div className="play-btn"><FaPlay /></div>
              <FaStepForward />
            </div>
            <span>5:52</span>
          </div>
        </motion.div>

        {/* Book a call */}
        <motion.div drag dragConstraints={containerRef} className="floating-card dark-card book-call" initial={{x: 200, y: -200, rotate: 3}} animate={{x: 200, y: -200, rotate: 3}}>
          <p className="small-label">OPEN TO WORK</p>
          <div className="call-info">
            <FaRegClock />
            <div>
              <h4>Book a call</h4>
              <p>Schedule 30 min</p>
            </div>
          </div>
        </motion.div>

        {/* Available Now */}
        <motion.div drag dragConstraints={containerRef} className="floating-card green-card available-card" initial={{x: 450, y: -250, rotate: -3}} animate={{x: 450, y: -250, rotate: -3}}>
          <p className="small-label flex-center"><span className="dot"></span> AVAILABLE NOW</p>
          <h2>CX/UX Designer</h2>
          <ul>
            <li>Iraq</li>
            <li>Remote Worldwide</li>
          </ul>
        </motion.div>

        {/* Resume */}
        <motion.div drag dragConstraints={containerRef} className="floating-card yellow-card resume-card" initial={{x: 500, y: 50, rotate: 5}} animate={{x: 500, y: 50, rotate: 5}}>
          <p className="small-label">CV</p>
          <div className="resume-info">
            <FaFilePdf />
            <div>
              <h4>Resume</h4>
              <p>PDF - 1 page</p>
            </div>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div drag dragConstraints={containerRef} className="floating-card blue-card linkedin-card" initial={{x: 450, y: 250, rotate: -4}} animate={{x: 450, y: 250, rotate: -4}}>
          <p className="small-label">FIND ME ONLINE</p>
          <div className="linkedin-info">
            <FaLinkedin />
            <div>
              <h4>LinkedIn</h4>
              <p>/in/shakarm</p>
            </div>
          </div>
        </motion.div>

        {/* Folder */}
        <motion.div drag dragConstraints={containerRef} className="floating-card no-bg folder-card" initial={{x: -50, y: 150, rotate: 0}} animate={{x: -50, y: 150, rotate: 0}}>
          <FaFolder className="folder-icon" />
          <p>MY WRITINGS</p>
        </motion.div>

        {/* Rating */}
        <motion.div drag dragConstraints={containerRef} className="floating-card rate-card" initial={{x: -250, y: 180, rotate: -4}} animate={{x: -250, y: 180, rotate: -4}}>
          <p className="small-label">RATE THIS PORTFOLIO</p>
          <div className="stars">☆☆☆☆☆</div>
        </motion.div>
      </div>

    </div>
  );
};

export default Header;
