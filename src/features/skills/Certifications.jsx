import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchCertificates, urlFor } from "../../services/sanityApi";
import { motion } from "framer-motion";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchCertificates().then((data) => {
      setCertifications(data);
    });
  }, []);

  const isKurdish = i18n.language === "ku";

  const getFieldByLanguage = (field) => {
    const language = i18n.language;
    return field?.[language] || field?.en || "";
  };

  return (
    <div className="p-4 lg:p-8">
      <motion.h1
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.1 }}
        className={`text-xl lg:text-2xl font-bold mb-12 ${isKurdish ? "kurdish" : "text-gray-900"
          }`}
      >
        {isKurdish ? "شەهادەکانم" : "My Certificates"}
      </motion.h1>
      <div className={`grid grid-cols-1 md:grid-cols-2 mt-[-20px] text-left`}>
        {certifications.map((cert) => {
          const logo = cert.logo?.asset ? urlFor(cert.logo).url() : "";
          return (
            <div
              key={cert._id}
              className={`flex flex-col ${isKurdish ? "" : ""
                } border-b border-gray-300 pb-2 `}
            >
              {logo && (
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              )}

              <div className={`${isKurdish ? "mr-2" : "ml-2"} flex-1`}>
                <h2
                  className={`text-base lg:text-lg font-semibold ${isKurdish ? "kurdish3" : "text-gray-800"
                    }`}
                >
                  {getFieldByLanguage(cert.title)}
                </h2>
                <p className={`text-xs lg:text-sm text-gray-600`}>
                  {new Date(cert.startDate).toLocaleDateString(
                    i18n.language === "ku" ? "ku" : "en-US"
                  )}
                  {" - "}
                  {new Date(cert.endDate).toLocaleDateString(
                    i18n.language === "ku" ? "ku" : "en-US"
                  )}
                </p>
                <p
                  className={`text-xs lg:text-sm mt-1 ${isKurdish ? "kurdish6" : "text-gray-700"
                    }`}
                >
                  {getFieldByLanguage(cert.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
