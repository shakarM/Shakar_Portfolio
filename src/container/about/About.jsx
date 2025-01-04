import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import AppWrap from "../../wrapper/AppWrapp";
import myself from "./myself.png";
import { client, urlFor } from "../../client";
import { useTranslation } from "react-i18next";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  const isKurdish = i18n.language === "ku";
  return (
    <div className="about-container ">
      <h2 className={`head-text  ${isKurdish ? "kurdish " : ""}`}>
        {t("about.title")} <span>{t("about.subtitle")}</span>
      </h2>
      <div className="about-content">
        <div className="app__aboutme">
          <div className="aboutme-content overflow-hidden">
            {isKurdish ? (
              <>
                <motion.p
                  whileInView={{ opacity: [0, 1], x: [200, 0] }}
                  transition={{ duration: 1.3 }}
                  className={`about-description ${
                    isKurdish ? "kurdish3 text-right" : " sm:text-left"
                  }`}
                >
                  {t("about.description")}
                </motion.p>
                <motion.img
                  whileInView={{ opacity: [0, 1], x: [-200, 0] }}
                  transition={{ duration: 1.3 }}
                  className="app__aboutme-img"
                  src={myself}
                  alt="Myself"
                />
              </>
            ) : (
              <>
                <motion.img
                  whileInView={{ opacity: [0, 1], x: [-200, 0] }}
                  transition={{ duration: 1.3 }}
                  className="app__aboutme-img"
                  src={myself}
                  alt="Myself"
                />
                <motion.p
                  whileInView={{ opacity: [0, 1], x: [200, 0] }}
                  transition={{ duration: 1.3 }}
                  className={`about-description ${
                    isKurdish ? "kurdish3 text-right" : " sm:text-left "
                  }`}
                >
                  {isKurdish && t("about.description")}
                  {!isKurdish &&
                    "Hello! I'm Shakar, a Software Engineering student at the American University of Iraq - Sulaimani with a minor in Business Administration. I'm currently in my sixth semester. Since childhood, I've had a strong passion for programming and design, which led me to work in various design positions. My most recent experience was as an app and website designer at Zoo Company in Erbil. I have good expertise in frontend web development, but I've focused more on the design aspect. In design, I have my own unique process that allows me to create designs quickly and gain client approval. I'm experienced with working in an Agile methodology. Besides design and coding, I'm interested in content creation and participate in various activities and courses, both in my field and in soft skills development. I always strive to improve myself and seek environments that support my personal growth."}
                </motion.p>
              </>
            )}
          </div>
        </div>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              key={about.title[i18n.language] + index}
              className="app__profile-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.7 }}
              >
                <motion.img src={urlFor(about.imgUrl)} alt="about" />
                <motion.h2
                  className={`bold-text ${
                    isKurdish ? "kurdish text-right" : "text-left"
                  }`}
                >
                  {about.title[i18n.language]}
                </motion.h2>
                <motion.p
                  className={`des p-text ${
                    isKurdish ? "kurdish3 text-right" : "text-left"
                  }`}
                >
                  {about.description[i18n.language]}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
