import React, { useEffect, useState } from "react";
import "./Experiences.scss";
import { motion, AnimatePresence } from "framer-motion";
import { fetchExperiences, urlFor } from "../../services/sanityApi";
import { useTranslation } from "react-i18next";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Start by showing 3 experiences
  const { i18n, t } = useTranslation();

  useEffect(() => {
    fetchExperiences().then((data) => setExperiences(data));
  }, []);

  const getFieldByLanguage = (field) => {
    const language = i18n.language;
    return field?.[language] || field?.en || "";
  };

  const isKurdish = i18n.language === "ku";

  const getFontFamily = (tag) => {
    if (isKurdish) {
      if (tag === "h1") return "kurdish";
      if (["h2", "h3", "h4", "h5", "h6"].includes(tag)) return "kurdish2";
      if (tag === "p") return "kurdish3";
    }
    return "";
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 2, experiences.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 2, 3));
  };

  const transitionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className={`ex__experiences ${isKurdish ? "kurdish " : ""}`}>
      <motion.h1
        className={`headText`}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.1 }}
      >
        {isKurdish ? "ئەزموونی کارەکانم" : "Work Experiences"}
      </motion.h1>
      <div className="ex__grid ">
        <AnimatePresence>
          {experiences
            .slice()
            .reverse() // Reverse the array to display the last index first
            .slice(0, visibleCount) // Limit the visible experiences
            .map((exp, index) => (
              <motion.div
                key={index}
                className={`ex__card ${isKurdish ? "kurdish" : ""}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={transitionVariants}
                transition={{ duration: 0.5, delay: (index % 2) * 0.2 }}
              >
                <div
                  className={`ex__item ${isKurdish ? "kurdish  items-right" : ""
                    }`}
                >
                  {exp.icon && (
                    <div
                      className={`ex__logo-wrapper ${isKurdish ? "kurdish" : ""
                        }`}
                      style={{ order: isKurdish ? 1 : 0 }}
                    >
                      <img
                        src={urlFor(exp.icon)}
                        alt={t("experience.logoAlt")}
                        className="ex__logo"
                      />
                    </div>
                  )}
                  <div className={`ex__details ${isKurdish ? "kurdish" : ""}`}>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`ex__link  ${isKurdish ? "kurdish" : ""}`}
                    >
                      <h4
                        className={`ex__company ${getFontFamily("h4")}`}
                        style={{ textAlign: isKurdish ? "right" : "left" }}
                      >
                        {getFieldByLanguage(exp.job)}{" "}
                        <span
                          className={`ex__type underline ${getFontFamily("p")}`}
                          style={{ textAlign: isKurdish ? "right" : "left" }}
                        >
                          ({getFieldByLanguage(exp.company)})
                        </span>
                      </h4>
                    </a>
                    <h3
                      className={`ex__responsibilities ${getFontFamily("h3")}`}
                      style={{ textAlign: isKurdish ? "right" : "left" }}
                    >
                      {getFieldByLanguage(exp.responsibilities)}
                    </h3>
                    <p
                      className={`ex__description ${getFontFamily("p")}`}
                      style={{ textAlign: isKurdish ? "right" : "left" }}
                    >
                      {getFieldByLanguage(exp.desc)}
                    </p>
                    <span
                      className={`ex__year ${getFontFamily("p")}`}
                      style={{ textAlign: isKurdish ? "right" : "left" }}
                    >
                      {exp.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      <div className={`ex__controls ${isKurdish ? "kurdish3" : ""}`}>
        {visibleCount < experiences.length && (
          <button className="ex__show-more" onClick={handleShowMore}>
            {isKurdish ? "زیاتر نیشان بدە" : "Show more"}
          </button>
        )}
        {visibleCount > 3 && (
          <button
            className={`ex__show-less ${isKurdish ? "kurdish3" : ""}`}
            onClick={handleShowLess}
          >
            {isKurdish ? " کەمتر نیشان بدە" : "Show less"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Experiences;
