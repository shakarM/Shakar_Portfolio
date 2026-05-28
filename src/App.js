import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Process from "./pages/Process";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar/Navbar";
import "./App.scss";
import CustomCursor from "./components/common/CustomCursor/CustomCursor";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bgLight text-pureBlack font-sans selection:bg-accentOrange selection:text-pureWhite">
        <CustomCursor />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/process" element={<Process />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
