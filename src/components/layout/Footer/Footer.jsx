import React from "react";
import "./Footer.scss";
import AppWrapp from "../wrapper/AppWrapp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBehanceSquare, FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import whatsapp from "../../../assets/whatsapp.png";
import gmail from "../../../assets/gmail.png";
const Footer = () => {
  const { t, i18n } = useTranslation();

  const isKurdish = i18n.language === "ku";

  return (
    <>
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className={`headText mt-6 ${isKurdish ? "kurdish" : ""}`}
      >
        {t("footer.contact")}
      </motion.h2>
      <div className="app__footer-cards">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [30, 0] }}
          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="app__footer-card hover-target magnetic"
        >
          <img src={gmail} alt="email" />
          <a href="mailto:shakar.latif01@gmail.com" className="p-text">
            shakar.latif01@gmail.com
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [30, 0] }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="app__footer-card hover-target magnetic"
        >
          <img src={whatsapp} alt="phone" />
          <a href="tel:+9647702109440" className="p-text">
            +964 0770 210 9440
          </a>
        </motion.div>
      </div>

      <motion.div
        className="app__footer-socials"
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <a href="https://x.com/ShakarLatifM" className="hover-target" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a href="https://www.behance.net/shakarlatif" className="hover-target" target="_blank" rel="noreferrer">
          <FaBehanceSquare />
        </a>
        <a href="https://www.facebook.com/shakar.latif.165/" className="hover-target" target="_blank" rel="noreferrer">
          <FaFacebookSquare />
        </a>
      </motion.div>

      <motion.div
        className="app__footer-rights"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>© {new Date().getFullYear()} Shakar. All rights reserved.</p>
      </motion.div>
    </>
  );
};

export default AppWrapp(Footer, "contact");
