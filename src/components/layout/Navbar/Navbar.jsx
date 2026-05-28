import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About me", link: "/about" },
    { label: "Service", link: "/services" },
    { label: "Portfolio", link: "/work" },
    { label: "Process", link: "/process" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-bgLight py-6 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-pureBlack z-50">
          Shakar.
        </Link>
        
        {/* Desktop */}
        <div className="hidden md:flex gap-10 items-center text-sm font-medium">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.link} 
              className={`transition-colors border-b-2 ${location.pathname === item.link ? 'border-pureBlack text-pureBlack' : 'border-transparent text-gray-500 hover:text-pureBlack hover:border-gray-300'} pb-1`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact" className="px-6 py-3 bg-pureBlack text-pureWhite text-sm font-semibold hover:bg-accentOrange transition-colors">
            Get A Quote →
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden z-50">
          {!toggle ? (
            <HiMenuAlt4 className="w-8 h-8 text-pureBlack cursor-pointer" onClick={() => setToggle(true)} />
          ) : (
            <HiX className="w-8 h-8 text-pureBlack cursor-pointer" onClick={() => setToggle(false)} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-pureWhite flex flex-col justify-center items-center gap-8 z-40 md:hidden"
          >
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.link} 
                onClick={() => setToggle(false)}
                className={`text-2xl font-bold ${location.pathname === item.link ? 'text-accentOrange' : 'text-pureBlack'}`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
