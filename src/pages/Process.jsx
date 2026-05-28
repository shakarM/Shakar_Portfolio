import React from 'react';
import { motion } from 'framer-motion';
import { Search, PieChart, Compass, PenTool, PackageCheck, Target, TrendingUp, Monitor } from 'lucide-react';

const Process = () => {
  const contentProcess = [
    { id: '01', title: 'Discover & Plan', desc: 'Analyzing market data, competitor landscapes, and audience sentiment.', icon: Search },
    { id: '02', title: 'Strategize', desc: 'Defining core content pillars and cohesive marketing narratives.', icon: Target },
    { id: '03', title: 'Create', desc: 'Designing high-converting campaigns and digital assets.', icon: PenTool },
    { id: '04', title: 'Deploy & Grow', desc: 'Executing strategies and tracking engagement for sustained growth.', icon: TrendingUp }
  ];

  const uxProcess = [
    { id: '01', title: 'Research', desc: 'Deep-dive surveys, digital audits, and competitor benchmarking.', icon: Search },
    { id: '02', title: 'Synthesize', desc: 'Mapping customer journeys and crafting detailed user personas.', icon: PieChart },
    { id: '03', title: 'Design', desc: 'Developing intuitive wireframes, prototypes, and visual systems.', icon: Monitor },
    { id: '04', title: 'Deliver', desc: 'Client-ready scalable systems and final documentation.', icon: PackageCheck }
  ];

  const ProcessFlow = ({ title, steps }) => (
    <div className="mb-32">
      <h2 className="text-3xl md:text-5xl font-bold mb-20 tracking-tight text-center">{title}</h2>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 md:gap-4 relative">
        {/* Connecting Line for Desktop */}
        <div className="hidden md:block absolute top-[48px] left-[12%] right-[12%] h-1 bg-gray-200 -z-10" />
        
        {steps.map((step, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx} 
            className="flex-1 flex flex-col items-center text-center relative group w-full max-w-sm px-2"
          >
            <div className="w-24 h-24 rounded-full bg-pureWhite border-4 border-gray-200 flex items-center justify-center mb-8 group-hover:border-accentOrange group-hover:scale-110 transition-all duration-300 shadow-sm z-10 shrink-0">
              <step.icon className="w-10 h-10 text-pureBlack group-hover:text-accentOrange transition-colors" strokeWidth={1.5} />
            </div>
            
            <div className="bg-pureWhite p-8 rounded-2xl border border-gray-200 shadow-sm w-full h-full flex flex-col group-hover:border-gray-300 group-hover:shadow-md transition-all">
               <div className="text-accentOrange font-bold text-sm mb-3 uppercase tracking-widest">Step {step.id}</div>
               <h3 className="text-xl font-bold mb-4 text-pureBlack">{step.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed font-medium">{step.desc}</p>
            </div>
            
            {/* Mobile connecting line */}
            {idx !== steps.length - 1 && (
              <div className="md:hidden w-1 h-12 bg-gray-200 my-4" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-bgLight text-pureBlack pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter text-center md:text-left">Process.</h1>
        <p className="text-xl text-gray-500 mb-24 font-medium max-w-2xl text-center md:text-left mx-auto md:mx-0">
          A systematic workflow from raw data to client-ready deliverables, built for clarity and impact.
        </p>

        <ProcessFlow title="Social Media & Content Strategy" steps={contentProcess} />
        
        <ProcessFlow title="UX & CX Design" steps={uxProcess} />

        {/* Professional Requirements Section */}
        <div className="mt-32 border-t border-gray-300 pt-32 mb-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Required Assets for Project Commencement</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                To ensure the highest standard of work and a seamless process, I require the following assets and documents before officially beginning a project:
              </p>
            </div>
            
            <div className="md:w-2/3">
              <ul className="space-y-4 mb-10">
                {[
                  "Market Research Data",
                  "Visual Branding & Brand Strategy Guidelines",
                  "A Documented Business Brief",
                  "Detailed Information on All Products/Services",
                  "A Clear Requirements and Scope Planning Document"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-6 bg-pureWhite border border-gray-200">
                    <div className="w-2 h-2 bg-accentOrange rounded-full" />
                    <span className="text-xl font-bold tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-xl leading-relaxed text-gray-700 font-medium bg-bgLight border-l-4 border-pureBlack p-8">
                Providing these elements upfront eliminates guesswork. It allows me to build on a solid foundation, which directly enhances the precision of my work and, ultimately, elevates the quality and success of your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
