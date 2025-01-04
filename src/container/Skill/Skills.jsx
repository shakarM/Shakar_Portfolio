import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrapp";
import { client, urlFor } from "../../client";
import ReactTooltip from "react-tooltip";
import Experiences from "./Experiences";
import Certifications from "./Certifications";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const isKurdish = i18n.language === "ku";

  return (
    <div className={`items-center ${isKurdish ? "" : ""}`}>
      <h2
        className={`head-text ${
          isKurdish ? "kurdish" : ""
        } skills_head text-[#333] mt-6`}
      >
        {t("skills.title")}
      </h2>

      <div className=" flex justify-center items-center ">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col">
        <Experiences />
        <Certifications />
      </div>
    </div>
  );
};

export default AppWrap(Skills, "skills");
