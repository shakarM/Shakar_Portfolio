import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import "./Experience.scss";

const experienceData = [
  {
    title: "Customer Experience Design (CXD) Manager",
    company: "Metrik Studios",
    description: "Founded, structured, and currently lead the Customer Experience department. Spearheaded the complete end-to-end CX project for Vanilly Iraq, leading the concept development, research, definition, and design phases."
  },
  {
    title: "Brand Manager (Freelance / Project-Based)",
    company: "Cattuchino Cafe & Adela",
    description: "Structured and managed holistic brand strategies and visual identities for a specialty cafe and a women's fashion brand. Created comprehensive, long-term plans to optimize social media presence and the overall customer experience."
  },
  {
    title: "Content Creator (Freelance)",
    company: "Diwakhan",
    description: "Designed content structures and managed official Instagram content tailored for specific client advertisements."
  },
  {
    title: "Content Creator",
    company: "Layen Agency",
    description: "Managed social media content creation and strategy for major FMCG brands, including Mahmood Coffee, Mahmood Tea, and Confy Iraq."
  },
  {
    title: "Content Strategist & Designer",
    company: "FKR Agency, Sulaymaniyah",
    description: "Contributed to the generation of engaging TV commercials and social media campaigns for Asana Drinking, VIP, Coffella Coffee, and DoGhazal Tea. Developed innovative scenario ideas and scripts, visualized creative concepts, and worked in multiple capacities on production sets. Designed social media posters and authored copy to strictly align with the clients' broader business strategies."
  },
  {
    title: "Project Coordinator",
    company: "China Study Center",
    description: "Coordinated active projects and managed organizational workflows to ensure timely delivery."
  },
  {
    title: "UX/UI Designer",
    company: "ZUU Delivery, Erbil",
    description: "Designed and maintained a comprehensive design system in Figma, building interactive components for consistent and efficient development in an agile environment. Conducted user research and created prototypes to enhance user experiences and validate design concepts for an early-stage app. Utilized AI tools and flowcharts to accelerate and optimize both new and existing user interfaces to align with business goals."
  },
  {
    title: "Intern",
    company: "Click Iraq (Job Studio App)",
    description: "Gained cross-functional, hands-on experience across multiple creative fields, including brand strategy, content creation, marketing, and logistics."
  },
  {
    title: "Media Leader & Graphic Designer",
    company: "American Corner, Sulaimaniyah",
    description: "Initially hired as a Graphic Designer and promoted to Media Leader within one year, overseeing visual output and media strategy."
  },
  {
    title: "Volunteer",
    company: "American University of Iraq, Sulaimani (AUIS)",
    description: "Began professional journey by contributing time and skills to campus initiatives."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-showcase">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="experience-header mb-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold tracking-tight text-pureBlack">Work Experience</h2>
        </motion.div>

        <div className="experience-timeline relative border-l border-gray-200 ml-3 md:ml-0 md:pl-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 relative pl-8 md:pl-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute w-3 h-3 bg-accentOrange rounded-full -left-[1.35rem] md:-left-[2.45rem] top-2 border-2 border-white"></div>
              
              <h3 className="text-2xl font-bold text-pureBlack mb-1 tracking-tight">{item.title}</h3>
              <h4 className="text-lg font-medium text-gray-500 mb-4">{item.company}</h4>
              <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-footer mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-pureBlack text-white rounded-full font-bold hover:bg-accentOrange transition-colors"
          >
            <FaFilePdf />
            <span>View Full Resume (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
