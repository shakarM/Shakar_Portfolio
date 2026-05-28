import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const StatCard = ({ value, label, delay }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const target =
      typeof value === "number"
        ? value
        : parseInt(value.replace(/[^0-9]/g, ""));
    const duration = 2000;
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounter(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 100);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      className="bg-gray-900/50 border border-green-500/20 rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-green-400 text-4xl font-bold mb-2">
        {typeof value === "number" ? counter : value.replace(/[0-9]+/, counter)}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
};

const FeatureCard = ({ title, description, delay, children }) => (
  <motion.div
    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay * 0.1, duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <h3 className="text-xl font-bold mb-3 text-green-400">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    {children}
  </motion.div>
);

export default function MoritzPetersenAdvanced() {
  const { t, i18n } = useTranslation();
  const isKurdish = i18n.language === "ku";
  const containerRef = useRef(null);

  const stats = [
    { value: 50, label: t("portfolio.stats.projects") },
    { value: 100, suffix: "%", label: t("portfolio.stats.satisfaction") },
    { value: 6, label: t("portfolio.stats.experience") },
  ];

  const features = [
    {
      title: t("portfolio.features.animations.title"),
      description: t("portfolio.features.animations.description"),
    },
    {
      title: t("portfolio.features.code.title"),
      description: t("portfolio.features.code.description"),
    },
  ];

  return (
    <div
      className={`bg-black text-white p-4 md:p-8 ${isKurdish ? "rtl" : "ltr"}`}
      ref={containerRef}
    >
      {/* Hero Section */}
      <motion.div
        className="text-center py-12 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("portfolio.title")}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t("portfolio.subtitle")}
        </motion.p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            delay={index}
            suffix={stat.suffix}
          />
        ))}
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            delay={index}
          >
            {index === 0 && (
              <motion.div
                className="mt-4 h-48 bg-gradient-to-r from-green-900/50 to-green-800/30 rounded-lg"
                whileHover={{ scale: 1.02 }}
              />
            )}
            {index === 1 && (
              <div className="mt-4 p-4 bg-gray-800/50 rounded-lg font-mono text-sm">
                <code className="text-green-300">console.log</code>
                <span className="text-white">(</span>
                <span className="text-yellow-300">"Hello World"</span>
                <span className="text-white">)</span>
              </div>
            )}
          </FeatureCard>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t("portfolio.cta.title")}
        </h2>
        <motion.button
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("portfolio.cta.button")}
        </motion.button>
      </motion.div>
    </div>
  );
}
