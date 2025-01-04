import React, { useContext, useEffect, useState } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import yourImage from "../Header/shakar.png";
import background from "../Header/background.json";
import AppWrapp from "../../wrapper/AppWrapp";
import Lottie from "react-lottie";
import backgroundwhite from "../Header/backgroundwhite.json";
import { ThemeContext } from "../../Home";
import { useTranslation } from "react-i18next";
import CV from "../../assets/shakar-lateef-cv.pdf";
import { RiDownloadCloud2Fill } from "react-icons/ri";
const Header = () => {
  const [animatedText, setAnimatedText] = useState("");
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const isKurdish = i18n.language === "ku";

  useEffect(() => {
    const text = t("header.greeting");
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= text.length) {
        setAnimatedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
        setAnimationCompleted(true); // Animation completed
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [t]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: background,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: backgroundwhite,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div
        id="home"
        className={`app__header app__flex w-[80%] sm:items-center ${
          isKurdish ? "kurdish" : ""
        }`}
      >
        <div
          className={`app__header-info mt-[4rem] ${
            isKurdish ? "md:order-2" : "order-1"
          }`}
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <div className="text-center">
                <h1 className="greeting  head-text text-slate-800">
                  {animatedText}
                </h1>
              </div>
            </div>
            {animationCompleted && (
              <div className="tag-cmp app__flex flex-col items-center">
                <div className="p-text-wrapper flex space-x-4">
                  <motion.p
                    whileInView={{ x: [-100, 0] }}
                    transition={{ duration: 1.2 }}
                    className={`${isKurdish ? "kurdish5" : ""} p-text`}
                  >
                    {t("header.webDeveloper")}
                  </motion.p>
                  <motion.p
                    whileInView={{ x: [100, 0] }}
                    transition={{ duration: 1.2 }}
                    className={`${isKurdish ? "kurdish5" : ""} p-text`}
                  >
                    {t("header.uiuxDesigner")}
                  </motion.p>
                </div>
                <motion.div
                  whileInView={{ opacity: [0, 1], y: [50, 0] }}
                  transition={{ duration: 1.2 }}
                  className="tag-cmp "
                >
                  <a
                    href={CV}
                    download
                    className=" flex relative px-6 py-3 font-medium text-[var(--secondary-color)] border-2 border-[var(--secondary-color)] rounded-lg overflow-hidden group"
                  >
                    {" "}
                    <span className="absolute inset-0 w-full h-full bg-[var(--secondary-color)] transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                    <span className="relative text-[var(--secondary-color)]  group-hover:text-[var(--white-color)] transition-colors duration-300 ease-in w-full flex">
                      {" "}
                      {!isKurdish && (
                        <span className="flex justify-center items-center mx-1">
                          <RiDownloadCloud2Fill />
                        </span>
                      )}
                      {isKurdish ? "سەیری سیڤیەکەم بکە" : "Look at my resume"}
                      {isKurdish && (
                        <span className="flex justify-center items-center mx-1">
                          <RiDownloadCloud2Fill />
                        </span>
                      )}
                    </span>
                  </a>
                </motion.div>
              </div>
            )}
          </div>
        </div>
        <div className={`app__header-img ${isKurdish ? "order-1" : "order-2"}`}>
          <motion.img
            src={yourImage}
            alt="profile_circle"
            className="overlay_circle ml-3 my-[-5rem]"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <div className="flex justify-center ml-7 my-[-4rem] items-center">
        {theme === "light" ? (
          <div id="light" className="block">
            <Lottie options={defaultOptions} width={100} />
          </div>
        ) : (
          <div id="dark" className="block mt-3 mr-3">
            <Lottie options={defaultOptions2} width={100} />
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrapp(Header, "home");
