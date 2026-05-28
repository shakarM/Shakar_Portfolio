import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Principles.scss";

// Custom Geometric SVG Icons matching the brand accent color
const StarKaizenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L13 8L19.5 5.5L15.5 10.5L22 13L15.5 14L18.5 20L13.5 16L11 23L9.5 16L4 20.5L6.5 14L0.5 12L7 10L3 5L9 8L12 1Z"/>
  </svg>
);

const FourPointStarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 7.52 16.48 12 22 12C16.48 12 12 16.48 12 22C12 16.48 7.52 12 2 12C7.52 12 12 7.52 12 2Z" fill="currentColor"/>
  </svg>
);

const OffsetCirclesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="10" cy="10" r="10" fill="currentColor" />
  </svg>
);

const BurstSparkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L15.3 7.8L23.7 6.3L19.2 13.5L22.8 21L14.7 18.9L9 24.3L8.1 15.9L0 13.2L6.3 7.8L5.7 0L12 0Z" fill="currentColor"/>
  </svg>
);

const AgileMeshIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="8" height="8" rx="4" fill="currentColor" />
    <rect x="13" y="13" width="8" height="8" rx="4" fill="currentColor" />
    <rect x="3" y="13" width="8" height="8" rx="4" fill="currentColor" fillOpacity="0.3" />
    <rect x="13" y="3" width="8" height="8" rx="4" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

const principleIcons = {
  data: <StarKaizenIcon />,
  customer: <FourPointStarIcon />,
  testing: <OffsetCirclesIcon />,
  details: <BurstSparkIcon />,
  agile: <AgileMeshIcon />
};

const Principles = () => {
  const { t, i18n } = useTranslation();
  const isKurdish = i18n.language === "ku";

  const principlesKeys = ["data", "customer", "testing", "details", "agile"];

  return (
    <div className={`app__principles-container ${isKurdish ? "kurdish" : ""}`}>
      <div className="principles-header">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {t("principles.title")}
        </motion.h3>
      </div>

      <div className="principles-grid">
        {principlesKeys.map((key, index) => (
          <motion.div
            key={key}
            className="principle-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="principle-icon hover-target">
              {principleIcons[key]}
            </div>
            <h4 className="principle-title">{t(`principles.items.${key}.title`)}</h4>
            <p className="principle-description">{t(`principles.items.${key}.description`)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
