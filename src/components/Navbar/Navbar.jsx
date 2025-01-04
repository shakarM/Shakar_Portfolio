import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Toggle from "./Toggle";
import "./Navbar.scss";
import logo from "../logo.svg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { t, i18n } = useTranslation();
  const isKurdish = i18n.language === "ku";

  const navItemsLarge = !isKurdish
    ? ["home", "about", "projects", "skills", "work", "contact"]
    : ["contact", "work", "skills", "projects", "about", "home"];

  const navItemsSmall = [
    "home",
    "about",
    "projects",
    "skills",
    "work",
    "contact",
  ];

  return (
    <nav className={`app__navbar ${isKurdish ? "kurdish" : ""}`}>
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links hidden md:flex">
        {navItemsLarge.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a className={`${isKurdish ? "kurdish2" : ""}`} href={`#${item}`}>
              {t(`navbar.${item}`)}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`app__navbar-controls flex-center gap-8 z-0 ${
          isKurdish ? "kurdish3" : ""
        }`}
      >
        <div className="language-toggle-wrapper">
          <LanguageSwitcher />
        </div>
        <Toggle />
      </div>

      <div className="app__navbar-menu md:hidden">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            className="app__navbar-menu-content z-40"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navItemsSmall.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {t(`navbar.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
