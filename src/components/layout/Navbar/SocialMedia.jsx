import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <div className="fixed left-6 bottom-6 flex flex-col gap-3 z-20">
      {/* LinkedIn */}
      <div
        className="group w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 
                     bg-gray-800 hover:bg-[var(--accent-color)] 
                     dark:bg-gray-200 dark:hover:bg-[var(--accent-color)]"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shakar-latif/"
          className="text-gray-100 group-hover:text-white dark:text-gray-800 dark:group-hover:text-white"
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin size={18} />
        </a>
      </div>

      {/* GitHub */}
      <div
        className="group w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 
                     bg-gray-800 hover:bg-[var(--accent-color)] 
                     dark:bg-gray-200 dark:hover:bg-[var(--accent-color)]"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shakarM"
          className="text-gray-100 group-hover:text-white dark:text-gray-800 dark:group-hover:text-white"
          aria-label="GitHub"
        >
          <BsGithub size={18} />
        </a>
      </div>

      {/* Instagram */}
      <div
        className="group w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 
                     bg-gray-800 hover:bg-[var(--accent-color)] 
                     dark:bg-gray-200 dark:hover:bg-[var(--accent-color)]"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/shakarbit"
          className="text-gray-100 group-hover:text-white dark:text-gray-800 dark:group-hover:text-white"
          aria-label="Instagram"
        >
          <BsInstagram size={18} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
