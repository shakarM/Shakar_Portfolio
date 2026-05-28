import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../services/sanityApi';
import { useTranslation } from 'react-i18next';
import './ProjectCard.scss';
import { FaArrowRight, FaFigma, FaBehance, FaFilePdf, FaImage } from 'react-icons/fa';

const ProjectCard = ({ work }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'ku' ? 'ku' : 'en';

  const getLocalizedText = (field) => {
    if (!field) return '';
    if (typeof field === 'object') {
      return field[currentLang] || field.en || field.ku || '';
    }
    return field;
  };

  const title = getLocalizedText(work.title);
  const description = getLocalizedText(work.description);
  const tags = work.tags || [];
  
  // Determine card type based on tags or title
  const isContentCreation = tags.some(t => {
    const tag = getLocalizedText(t).toLowerCase();
    return tag.includes('content') || tag.includes('social') || tag.includes('marketing') || tag.includes('document');
  });

  if (isContentCreation) {
    // Content Creation Card (Document-based)
    return (
      <motion.div 
        className="project-card content-card"
        initial="initial"
        whileHover="hover"
      >
        <div className="card-image-wrapper">
          {work.imgUrl ? (
            <img src={urlFor(work.imgUrl).width(800).url()} alt={title} />
          ) : (
            <div className="image-placeholder"></div>
          )}
          <div className="overlay-cta-container">
            <a href={work.projectLink || '#'} target="_blank" rel="noreferrer" className="primary-cta-btn">
              <FaFilePdf className="mr-2" /> Download PDF
            </a>
            {/* Or View on Canva based on logic */}
          </div>
        </div>
        <div className="card-content">
          <div className="tags-row">
            {tags.slice(0,3).map((t, i) => (
              <span key={i} className="sub-tag">{getLocalizedText(t).toUpperCase()}</span>
            ))}
          </div>
          <h3>{title}</h3>
        </div>
      </motion.div>
    );
  }

  // UX/UI Card (Image 1 Style Inspiration)
  return (
    <motion.div 
      className="project-card ux-card"
      initial="initial"
      whileHover="hover"
    >
      <div className="card-image-wrapper">
        {work.imgUrl ? (
          <img src={urlFor(work.imgUrl).width(800).url()} alt={title} />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
      
      <div className="card-content">
        <div className="tags-row">
          {tags.slice(0,3).map((t, i) => (
            <React.Fragment key={i}>
              <span className="sub-tag">{getLocalizedText(t).toUpperCase()}</span>
              {i < Math.min(tags.length - 1, 2) && <span className="divider">|</span>}
            </React.Fragment>
          ))}
        </div>
        
        <h3>{title}</h3>
        <p>{description}</p>
        
        {/* Highlight Box Simulation */}
        <div className="highlight-box">
          <span className="highlight-text"><strong>10x</strong> Faster workflows</span>
        </div>
        
        <a href={work.projectLink || '#'} target="_blank" rel="noreferrer" className="read-case-study-btn">
          View Project <FaArrowRight className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
