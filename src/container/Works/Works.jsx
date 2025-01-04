import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { client, urlFor } from "../../client";
import AppWrap from "../../wrapper/AppWrapp";
import { useTranslation } from "react-i18next";
import "./Works.scss";

const initialAnimateCardState = {
  y: 0,
  opacity: 0,
};

const Works = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState(initialAnimateCardState);
  const { t, i18n } = useTranslation(); // Destructure i18n
  const isKurdish = i18n.language === "ku";

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  function handleWorkFilter(item) {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0, y: 100 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.projectType === item));
      }
    }, 1000);
  }

  const getProjectIcons = (work) => {
    switch (work.projectType) {
      case "Frontend":
      case "Backend":
        return (
          <>
            <a
              href={work.projectLink}
              className="hover:scale-[1.1] transition-all ease-in-out duration-500"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillEye />
            </a>
            <a
              href={work.codeLink}
              className="hover:scale-[1.1] transition-all ease-in-out duration-500"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </>
        );
      case "Graphic Design":
      case "Video Editing":
        return (
          <a
            href={work.projectLink}
            className="hover:scale-[1.1] transition-all ease-in-out duration-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaBehanceSquare />
          </a>
        );
      case "UX/UI":
        return (
          <a
            href={work.projectLink}
            className="hover:scale-[1.1] transition-all ease-in-out duration-500"
            target="_blank"
            rel="noreferrer"
          >
            <SiFigma />
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${isKurdish ? "kurdish" : ""}`}>
      <motion.h2
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.1 }}
        className="head-text work_header mt-6"
      >
        {t("works.header")}
      </motion.h2>
      <motion.div
        whileInView={{ x: [-100, 0] }}
        transition={{ duration: 1.1 }}
        className="app__work-filter"
      >
        {[
          "All",
          "Frontend",
          "Backend",
          "UX/UI",
          "Database",
          "Graphic Design",
          "Video Editing",
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`app__work-filter-item kk app__flex p-text  ${
              activeFilter === item ? "item-active" : ""
            } ${isKurdish ? "kurdish3" : ""}`}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.2 }}
            onClick={() => handleWorkFilter(item)}
          >
            {t(`${item}`)}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        animate={animateCard}
        className="app__work-porfolio"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.2 }}
      >
        {filterWork.map((work, index) => (
          <div key={index} className="app__work-item ne app__flex">
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.title[i18n.language]} />
              <div className={`app__work-hover app__flex mb-6 `}>
                {getProjectIcons(work)}
              </div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text hss">{work.title[i18n.language]}</h4>
              <p
                className={`desc-work p-text text-[var(--dark-color)] font-medium text-center ${
                  isKurdish ? "kurdish3" : ""
                }`}
              >
                {work.description[i18n.language]}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text text-[var(--dark-color)]">
                  {work.tags && work.tags.length > 0 ? work.tags[0] : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Works, "work");
