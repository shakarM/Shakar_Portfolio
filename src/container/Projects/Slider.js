import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { client, urlFor } from "../../client";
import { useTranslation } from "react-i18next";
import "./slider.scss";
import AppWrapp from "../../wrapper/AppWrapp";

const AdvancedSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      const query = '*[_type == "projects"]';
      const projects = await client.fetch(query);
      const formattedProjects = projects.map((project) => ({
        id: project._id,
        title: project.title,
        paragraph: project.paragraph,
        date: project.date,
        image: urlFor(project.image).url(),
        video: project.video || null, // Optional video field
        additionalInfo: project.additionalInfo || "", // Additional info
      }));
      setSlides(formattedProjects);
    };

    fetchProjects();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 12000); // 8 seconds
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const getFieldByLanguage = (field) => {
    const language = i18n.language;
    return field?.[language] || field?.en || "";
  };

  const isKurdish = i18n.language === "ku";

  if (!slides.length) return <div>Loading...</div>;

  return (
    <div className="custom-slider-container">
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 1.2 }}
        className={`head-text work_header ${isKurdish ? "kurdish" : ""}`}
      >
        {isKurdish ? "کار و چالاکیەکانم" : "My Projects"}
      </motion.h2>
      <div className="slider-wrapper">
        <motion.div
          className="custom-slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={`custom-slider ${
                index === currentIndex ? "active-slide" : ""
              }`}
              style={{
                backgroundImage: slide.video
                  ? `url(${slide.image})`
                  : `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              {slide.video && (
                <video className="background-video" autoPlay muted loop>
                  <source src={slide.video} type="video/mp4" />
                </video>
              )}

              {/* Commenting out slide-content div */}
              <div
                className={`slide-content ${
                  isKurdish
                    ? "right-4 text-right" // Aligns to the right and text is right-aligned
                    : "left-4 text-left" // Aligns to the left and text is left-aligned
                }`}
              >
                <div className="date text-[#e9e9e9]">
                  {new Date(slide.date).toLocaleDateString(
                    i18n.language === "ku" ? "ku" : "en-US"
                  )}
                </div>
                <div className="text-overlay">
                  <motion.h2
                    className={`text-2xl text-white md:text-3xl font-bold ${
                      isKurdish ? "kurdish" : ""
                    }`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {getFieldByLanguage(slide.title)}
                  </motion.h2>
                  <motion.p
                    className={`text-sm text-white md:text-base ${
                      isKurdish ? "kurdish3" : ""
                    }`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    {getFieldByLanguage(slide.paragraph)}
                  </motion.p>
                  {slide.additionalInfo && (
                    <motion.div
                      className="additional-info"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    >
                      <p>{getFieldByLanguage(slide.additionalInfo)}</p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* End of slide-content div */}
            </motion.div>
          ))}
        </motion.div>
        <div className="pagination-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button onClick={prevSlide} className="slider-button prev-button">
          <ChevronLeftIcon className="icon" />
        </button>
        <button onClick={nextSlide} className="slider-button next-button">
          <ChevronRightIcon className="icon" />
        </button>
      </div>
    </div>
  );
};

export default AppWrapp(AdvancedSlider, "projects");
