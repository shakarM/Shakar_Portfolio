import React, { createContext, useState } from "react";
import About from "./container/about/About";
import Header from "./container/Header/Header";
import Works from "./container/Works/Works";
import Skills from "./container/Skill/Skills";

import Footer from "./container/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AdvancedSlider from "./container/Projects/Slider";

export const ThemeContext = createContext(null);
const Home = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="app" id={theme}>
        <Navbar />
        <div className="overflow-x-hidden m-auto">
          <Header />
          <About />

          <Skills />
          <Works />

          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Home;
