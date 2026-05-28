import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";
import AppWrap from "../../components/layout/wrapper/AppWrapp";
import { fetchSkills, urlFor } from "../../services/sanityApi";
import Experience from "../experience/Experience";
import Certifications from "./Certifications";
import { useTranslation } from "react-i18next";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const { t, i18n } = useTranslation();
  const isKurdish = i18n.language === "ku";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  useEffect(() => {
    fetchSkills().then((data) => {
      setSkills(data);
    });
  }, [activeFilter]);

  // Filter skills based on selected category
  const filteredSkills = skills.filter((skill) => {
    if (activeFilter === "all") return true;
    return skill.mainCategory === activeFilter;
  });

  // Group skills by subcategory
  const getGroupedSkills = () => {
    const groupedSkills = {};

    filteredSkills.forEach((skill) => {
      const subCategoryKey = skill.subCategory
        ? (isKurdish ? skill.subCategory.ku : skill.subCategory.en) ||
        t("skills.subCategories.other")
        : t("skills.subCategories.other");

      if (!groupedSkills[subCategoryKey]) {
        groupedSkills[subCategoryKey] = [];
      }

      groupedSkills[subCategoryKey].push(skill);
    });

    return groupedSkills;
  };

  const groupedSkills = getGroupedSkills();

  // Handle filter button click
  const handleFilterChange = (item) => {
    if (activeFilter !== item) {
      setActiveFilter(item);
    }
  };

  return (
    <div className="app__skills-container">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.2,
        }}
      >
        <motion.h2
          className={`headText ${isKurdish ? "kurdish" : ""} `}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.1 }}
        >
          {t("skills.title")}
        </motion.h2>
      </motion.div>

      <motion.div
        className="app__skills-filter"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="app__skills-filter-container"
          variants={itemVariants}
        >
          {["all", "technical", "soft", "language", "general"].map(
            (item, index) => (
              <motion.button
                key={index}
                onClick={() => handleFilterChange(item)}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className={`app__skills-filter-item ${isKurdish ? "kurdish" : ""
                  } ${activeFilter === item ? "item-active" : ""}`}
                custom={index}
              >
                {t(`skills.categories.${item}`)}
              </motion.button>
            )
          )}
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="app__skills-content-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          exit="hidden"
          variants={containerVariants}
        >
          {Object.keys(groupedSkills).length > 0 ? (
            Object.entries(groupedSkills).map(
              ([subCategory, skillsList], subIndex) => (
                <div
                  className="app__skills-subcategory"
                  key={subCategory}
                >
                  <h3
                    className={`subcategory-title ${isKurdish ? "kurdish" : ""
                      }`}
                  >
                    {subCategory}
                  </h3>

                  <div className="app__skills-list">
                    {skillsList.map((skill, skillIndex) => (
                      <motion.div
                        variants={itemVariants}
                        className="app__skills-item hover-target"
                        key={skill._id || skillIndex}
                        data-tooltip-id={`skill-tooltip-${skill._id}`}
                        data-tooltip-content={
                          isKurdish
                            ? skill.description?.ku || ""
                            : skill.description?.en || ""
                        }
                      >
                        <div
                          className="skill-icon-container"
                          style={{
                            backgroundColor: skill.bgColor || "transparent",
                          }}
                        >
                          <img
                            src={urlFor(skill.icon)}
                            alt={isKurdish ? skill.name.ku : skill.name.en}
                          />
                        </div>
                        <p className={`skill-name ${isKurdish ? "kurdish" : ""}`}>
                          {isKurdish ? skill.name.ku : skill.name.en}
                        </p>
                        <Tooltip
                          id={`skill-tooltip-${skill._id}`}
                          className="skill-tooltip"
                          place="top"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            )
          ) : (
            <motion.div className="app__skills-empty" variants={itemVariants}>
              {t("skills.noSkills")}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="app__skills-extra"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Experience />
        <Certifications />
      </motion.div>
    </div>
  );
};

export default AppWrap(Skills, "skills", "small-header");
