import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MoritzPetersenAdvanced from "./BlogSlider";
import { useTranslation } from "react-i18next";
import ENG from "../../assets/images/circle.png";
import KU from "../../assets/icons/flag.png";

export default function EnhancedPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const { i18n } = useTranslation();
  const [isKurdish, setIsKurdish] = useState(i18n.language === "ku");

  const changeLanguage = () => {
    const newLanguage = isKurdish ? "en" : "ku";
    i18n.changeLanguage(newLanguage);
    setIsKurdish(!isKurdish);
  };

  // Animation variants (updated with green colors)
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "#166534", // green-800
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      backgroundColor: "#22c55e", // green-500
    },
  };

  const closeButtonVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 90,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  const glowEffect = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[20rem] bg-black relative overflow-hidden">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <div className="language-switcher">
          <div
            className={`switcher-container ${isKurdish ? "kurdish" : "english"
              }`}
            onClick={changeLanguage}
          >
            <div className={`toggle-switch ${isKurdish ? "toggled" : ""}`}>
              <img
                className="flag-icon"
                src={isKurdish ? KU : ENG}
                alt={isKurdish ? "Kurdish" : "English"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background glow effects - updated to green */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-green-600 blur-3xl opacity-0"
        variants={glowEffect}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-green-400 blur-3xl opacity-0"
        variants={glowEffect}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      />

      {/* Main button - updated to green */}
      <motion.button
        onClick={() => setShowPopup(true)}
        className="px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg shadow-lg shadow-green-700/30 relative overflow-hidden z-10"
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 opacity-0"
          animate={{
            opacity: [0, 0.5, 0],
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        <span className="relative z-10 flex items-center">
          <span>Launch Experience</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              repeatDelay: 0.5,
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </motion.svg>
        </span>
      </motion.button>

      {/* Popup modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-black border border-gray-800 text-white max-w-5xl w-full rounded-xl shadow-2xl overflow-hidden max-h-[90vh] relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal content with gradient border effect - updated to green */}
              <div className="p-1 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-400 to-green-600 opacity-50 rounded-xl"
                  animate={{
                    background: [
                      "linear-gradient(90deg, #16a34a 0%, #4ade80 50%, #16a34a 100%)",
                      "linear-gradient(90deg, #4ade80 0%, #16a34a 50%, #4ade80 100%)",
                      "linear-gradient(90deg, #16a34a 0%, #4ade80 50%, #16a34a 100%)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
                <div className="bg-black rounded-lg overflow-auto max-h-[88vh] relative z-10 p-6">
                  {/* Close button */}
                  <motion.button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 bg-gray-900 hover:bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 border border-gray-700"
                    variants={closeButtonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  {/* Title bar with animated underline - updated to green */}
                  <motion.div className="mb-6 relative pb-2">
                    <h2 className="text-2xl font-bold text-white">
                      Interactive Portfolio Experience
                    </h2>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-green-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </motion.div>

                  {/* Main content */}
                  <MoritzPetersenAdvanced />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
