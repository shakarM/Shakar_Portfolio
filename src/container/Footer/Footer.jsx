import React, { useState } from "react";
import "./Footer.scss";
import AppWrapp from "../../wrapper/AppWrapp";
import { client } from "../../client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaDiscord,
  FaLink,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import whatsapp from "../../../src/assets/whatsapp.png";
import gmail from "../../../src/assets/gmail.png";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const { t, i18n } = useTranslation();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitting(true);
    });
  };

  const isKurdish = i18n.language === "ku";

  return (
    <>
      <motion.h2
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className={`head-text mt-6 skills_head ${isKurdish ? "kurdish" : ""}`}
      >
        {t("footer.contact")}
      </motion.h2>
      <div className="app__footer-cards">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__footer-card "
        >
          <img src={gmail} alt="png" className="w-[45px]" />
          <a
            href="mailto:shakar.latif01@gmail.com"
            className="p-text text-slate-800"
          >
            shakar.latif01@gmail.com
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__footer-card"
        >
          <img src={whatsapp} alt="png" className="w-[40px]" />
          <a href="tel:+9647702109440" className="text-[1rem] text-slate-800">
            +964 0770 210 9440
          </a>
        </motion.div>
      </div>

      {!isFormSubmitting ? (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className={` ${isKurdish ? "kurdish3 text-right" : ""}`}
              value={name}
              name="name"
              onChange={handleChangeInput}
              type="text"
              placeholder={t("footer.placeholderName")}
            />
          </div>
          <div className="app__flex">
            <input
              className={` ${isKurdish ? "kurdish3 text-right" : ""}`}
              value={email}
              name="email"
              onChange={handleChangeInput}
              type="email"
              placeholder={t("footer.placeholderEmail")}
            />
          </div>
          <div>
            <textarea
              className={` ${isKurdish ? "kurdish3 text-right" : ""}`}
              placeholder={t("footer.placeholderMessage")}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className={`p-text send-btn ${isKurdish ? "kurdish3" : ""}`}
            onClick={handleSubmit}
          >
            {loading ? t("footer.sending") : t("footer.sendMessage")}
          </button>
        </motion.div>
      ) : (
        <div>
          <h3 className={`head-text ${isKurdish ? "kurdish" : ""}`}>
            {t("footer.thankYou")}
          </h3>
        </div>
      )}

      <div className="app__footer-socials">
        <a href="https://x.com/ShakarLatifM" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a
          href="https://www.behance.net/shakarlatif"
          target="_blank"
          rel="noreferrer"
        >
          <FaBehanceSquare />
        </a>
        <a
          href="https://www.facebook.com/shakar.latif.165/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </div>

      <div className="app__footer-rights">
        <p>© {new Date().getFullYear()} Shakar. All rights reserved.</p>
      </div>
    </>
  );
};

export default AppWrapp(Footer, "contact");
