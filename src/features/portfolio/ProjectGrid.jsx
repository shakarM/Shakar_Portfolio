import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './ProjectGrid.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
  }
};

const ProjectGrid = ({ works }) => {
  if (!works || works.length === 0) {
    return <div className="no-works">No projects available.</div>;
  }

  return (
    <motion.div 
      className="project-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {works.map((work, index) => (
        <motion.div key={work._id || index} variants={itemVariants} className="grid-item">
          <ProjectCard work={work} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
