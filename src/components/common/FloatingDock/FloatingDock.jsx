import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaBehance,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaRegEnvelope,
} from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  RoundedBox,
  Environment,
} from "@react-three/drei";
import "./FloatingDock.scss";

const GlassBackground = () => {
  return (
    <div className="dock-glass-canvas">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

          <RoundedBox args={[5, 1, 0.3]} radius={0.2} smoothness={4}>
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={0.5}
              chromaticAberration={0.06}
              anisotropy={0.1}
              distortion={0.1}
              distortionScale={0.3}
              temporalDistortion={0.5}
              clearcoat={1}
              attenuationDistance={0.5}
              attenuationColor="#ffffff"
              color="#ffffff"
              ior={1.2}
            />
          </RoundedBox>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

const FloatingDock = () => {
  const { t, i18n } = useTranslation();
  const isKurdish = i18n.language === "ku";
  const iconSize = 22;

  const socialLinks = [
    {
      id: "linkedin",
      icon: <FaLinkedin size={iconSize} />,
      url: "https://www.linkedin.com/in/shakar-latif",
      title: "LinkedIn",
    },
    {
      id: "behance",
      icon: <FaBehance size={iconSize} />,
      url: "https://www.behance.net/shakarlatif",
      title: "Behance",
    },
    {
      id: "instagram",
      icon: <FaInstagram size={iconSize} />,
      url: "https://www.instagram.com/sha.kar_/",
      title: "Instagram",
    },
    {
      id: "whatsapp",
      icon: <FaWhatsapp size={iconSize} />,
      url: "https://wa.me/9647702109440",
      title: "WhatsApp",
    },
    {
      id: "work-email",
      icon: <FaEnvelope size={iconSize} />,
      url: "mailto:shakar@metrikstudios.com",
      title: "Work Email",
    },
    {
      id: "personal-email",
      icon: <FaRegEnvelope size={iconSize} />,
      url: "mailto:shakar.latif01@gmail.com",
      title: "Personal Email",
    },
  ];

  return (
    <motion.div
      id="contact"
      className="floating-dock-container mb-4 mt-[-4rem]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <h1 className="font-bold text-xl mb-2">{isKurdish ? "پەیوەندیم پێوە بکە!" : "Connect with me"}</h1>
      <div className="dock-wrapper">
        <div className="dock-items">
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dock-item"
              whileHover={{ y: -10, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              aria-label={link.title}
            >
              {link.icon}
              <span className="dock-tooltip">{link.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingDock;
