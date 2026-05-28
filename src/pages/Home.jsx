import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Map, Award, ArrowRight } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import aboutImage from '../assets/AboutMe.jpg';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-bgLight text-pureBlack pt-32">
      {/* Hero Section with Geometric Background */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pb-20 pt-10 min-h-[70vh]">
        {/* Geometric Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none -z-20 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating Elements (Leah Kim Inspiration) */}
        <motion.div 
          initial={{ opacity: 0, y: -20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 right-1/4 hidden lg:flex items-center gap-2 bg-pureWhite border border-gray-200 shadow-sm p-3 -z-10"
        >
          <div className="w-2 h-2 bg-accentOrange rounded-full" />
          <span className="text-xs font-bold uppercase tracking-wider">Available Now</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-10 left-10 hidden lg:flex items-center gap-3 bg-pureBlack text-pureWhite p-4 -z-10"
        >
          <span className="text-sm font-bold uppercase tracking-wider">EST UTC+3</span>
        </motion.div>

        <div className="md:w-1/2 mb-10 md:mb-0 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight"
          >
            CX, UX &<br />Marketing Strategy.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <Link to="/about" className="px-6 py-4 bg-pureBlack text-pureWhite font-medium hover:bg-accentOrange transition-colors flex items-center gap-2">
              My Cv <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              From research to execution, building experiences your customers actually deserve.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-md"
          >
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              I'm Specialized in <span className="text-accentOrange font-bold">Strategic Design</span> for <span className="text-green-700 font-bold">Enterprise B2B SaaS,</span> Complex Workflows and Scalable Systems.
            </p>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-72 h-96 bg-gray-200 overflow-hidden relative border-8 border-bgLight shadow-xl"
            style={{ borderRadius: '40px' }}
          >
            <img src={profileImage} alt="Shakar Latif" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-0 right-0 text-center text-white font-bold text-lg drop-shadow-lg z-10">
              Shakar Latif
            </div>
          </motion.div>
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-8xl font-bold text-gray-200 -z-10 tracking-tighter hidden lg:block">
            CX/UX<br/>Design
          </div>
        </div>
      </section>

      {/* Icon Band */}
      <div className="border-y border-gray-300 grid grid-cols-2 md:grid-cols-5 bg-bgLight">
        <div className="border-r border-gray-300 h-24 hidden md:block"></div>
        <div className="border-r border-gray-300 h-24 flex items-center justify-center group hover:bg-pureWhite transition-colors">
          <Eye className="w-8 h-8 text-pureBlack group-hover:text-accentOrange transition-colors" strokeWidth={1} />
        </div>
        <div className="border-r border-gray-300 h-24 flex items-center justify-center group hover:bg-pureWhite transition-colors">
          <Map className="w-8 h-8 text-pureBlack group-hover:text-accentOrange transition-colors" strokeWidth={1} />
        </div>
        <div className="border-r border-gray-300 h-24 flex items-center justify-center px-4 group hover:bg-pureWhite transition-colors text-center font-bold text-sm">
          CX/UX<br/>Strategy
        </div>
        <div className="h-24 flex items-center justify-center group hover:bg-pureWhite transition-colors">
          <Award className="w-8 h-8 text-pureBlack group-hover:text-accentOrange transition-colors" strokeWidth={1} />
        </div>
      </div>

      {/* About Box Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="border border-gray-300 bg-bgLight">
          <div className="flex border-b border-gray-300">
            <div className="px-8 py-4 bg-pureBlack text-pureWhite font-medium text-sm">About Me</div>
            <Link to="/about" className="px-8 py-4 text-gray-500 font-medium text-sm border-r border-gray-300 flex-1 text-center hover:text-pureBlack cursor-pointer block">Skillset</Link>
            <Link to="/about" className="px-8 py-4 text-gray-500 font-medium text-sm flex-1 text-center hover:text-pureBlack cursor-pointer hidden md:block">Experience</Link>
          </div>
          
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 bg-bgLight items-center">
            <div className="md:w-1/2 aspect-video bg-gray-200 border border-gray-300 overflow-hidden flex items-center justify-center">
              <img src={aboutImage} alt="About Shakar" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Designing experiences built on real data.</h2>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                I research how your customers actually feel, then design the experience they deserve. I work across the full spectrum: from surveying hundreds of customers to building customer personas, journey maps, and social media strategies.
              </p>
              
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-gray-500 mb-1 text-xs uppercase tracking-wider">Name</div>
                  <div className="font-bold">Shakar Latif</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1 text-xs uppercase tracking-wider">Phone Number</div>
                  <div className="font-bold">+964 770 210 9440</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1 text-xs uppercase tracking-wider">Email Address</div>
                  <div className="font-bold">shakar.latif01@gmail.com</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1 text-xs uppercase tracking-wider">Social Network</div>
                  <div className="font-bold font-mono">Ln. Be.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-y border-gray-300 py-12 bg-bgLight">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-pureBlack flex-shrink-0" />
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Let's Work Together On Your Next Project!</h2>
          </div>
          <Link to="/contact" className="px-8 py-4 bg-pureBlack text-pureWhite font-medium text-sm hover:bg-accentOrange transition-colors flex items-center gap-2">
            Hire Me Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
