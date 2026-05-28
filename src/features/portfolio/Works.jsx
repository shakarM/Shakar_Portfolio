import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../components/layout/wrapper/AppWrapp";
import { useTranslation } from "react-i18next";
import Principles from "../principles/Principles";
import ProjectGrid from "./ProjectGrid";
import { fetchWorks } from "../../services/sanityApi";
import "./Works.scss";

const Works = () => {
  const { t, i18n } = useTranslation();
  const isKurdish = i18n.language === "ku";
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWorks = async () => {
      try {
        const data = await fetchWorks();
        setWorks(data);
      } catch (error) {
        console.error("Error fetching works:", error);
      } finally {
        setLoading(false);
      }
    };
    getWorks();
  }, []);

  return (
    <div className={`app__work-container ${isKurdish ? "kurdish" : ""}`}>
      <div className="works-header-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="headText solid-text"
        >
          {t("works.header_solid").split(/('Wow')/g).map((part, index) => 
            part === "'Wow'" ? <span key={index} style={{ color: "var(--accent-color)" }}>{part}</span> : part
          )}
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="headText faded-text"
        >
          {t("works.header_faded")}
        </motion.h2>
      </div>

      <div className="text-center py-12 px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed"
        >
          I'm Specialized in <span style={{ color: "var(--accent-color)" }}>Strategic Design</span> for <span style={{ color: "#2e5c14" }}>Enterprise B2B SaaS,</span> Complex Workflows and Scalable Systems.
        </motion.p>
      </div>

      <Principles />

      <div className="works-list-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="headText solid-text"
        >
          {t("works.list_title_solid")}
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="archive-link-container"
        >
          <a href="#" className="explore-archive-link">Explore My Complete Archive</a>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="headText faded-text"
        >
          {t("works.list_title_faded")}
        </motion.h2>
      </div>

      {!loading && <ProjectGrid works={works} />}
    </div>
  );
};

export default AppWrap(Works, "work");
