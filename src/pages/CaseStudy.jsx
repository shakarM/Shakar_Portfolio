import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bgLight text-pureBlack">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-accentOrange z-50 transition-all duration-75"
        style={{ width: scrollProgress }}
      />
      
      {/* Header Band */}
      <header className="pt-40 pb-20 px-6 md:px-12 border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 capitalize tracking-tighter">{slug?.replace('-', ' ')}</h1>
            <p className="text-xl font-bold text-gray-500 uppercase tracking-wider">CX Research & Strategy</p>
          </div>
          <div className="flex flex-col gap-4 text-sm font-bold w-full md:w-auto">
            <div className="flex justify-between md:justify-start gap-10 border-b border-gray-300 pb-2">
              <span className="text-gray-500 uppercase tracking-wider">Client</span>
              <span>Vanilly</span>
            </div>
            <div className="flex justify-between md:justify-start gap-10 border-b border-gray-300 pb-2">
              <span className="text-gray-500 uppercase tracking-wider">Role</span>
              <span>CX Design Manager</span>
            </div>
            <div className="flex justify-between md:justify-start gap-10 border-b border-gray-300 pb-2">
              <span className="text-gray-500 uppercase tracking-wider">Date</span>
              <span>May 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats Bar */}
      <div className="bg-pureWhite border-b border-gray-300 py-6 px-6 md:px-12 font-bold text-sm uppercase tracking-widest text-pureBlack">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6">
          <span>766 Respondents</span>
          <span className="text-accentOrange">•</span>
          <span>4 Surveys</span>
          <span className="text-accentOrange">•</span>
          <span>10 Personas</span>
          <span className="text-accentOrange">•</span>
          <span>71 Touchpoints</span>
        </div>
      </div>

      {/* Content */}
      <article className="py-20 px-6 md:px-12 bg-bgLight">
        <div className="max-w-4xl mx-auto space-y-24">
          
          <section className="flex flex-col md:flex-row gap-10">
            <h2 className="text-2xl font-bold w-48 shrink-0">The Challenge</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              The client needed to understand why their customer satisfaction scores were plateauing despite continuous investments in their physical locations. The core challenge was separating real customer feedback from polite, culturally biased responses.
            </p>
          </section>

          <section className="flex flex-col md:flex-row gap-10">
            <h2 className="text-2xl font-bold w-48 shrink-0">My Approach</h2>
            <div className="flex-1">
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                I designed a multi-stage research methodology incorporating mystery shopping, digital audits, and culturally adapted surveys to get underneath the standard "everything is fine" response common in the Iraqi market.
              </p>
              {/* Fake diagram in minimal style */}
              <div className="w-full aspect-[2/1] bg-pureWhite border border-gray-300 p-8 flex flex-col items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                [Workflow Mini Diagram]
              </div>
            </div>
          </section>

          <section>
            <div className="bg-pureBlack text-pureWhite p-10 md:p-16 relative">
              <div className="w-4 h-4 bg-accentOrange absolute top-10 left-10" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 ml-8">Key Insight</h2>
              <p className="text-2xl md:text-4xl font-bold leading-tight ml-8">
                "Discovered that 40–50% of Iraqi respondents said 'nothing needs to change' in open-ended questions while simultaneously selecting multiple improvements in multiple-choice questions."
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-10">
            <h2 className="text-2xl font-bold w-48 shrink-0">The Work</h2>
            <div className="flex-1 space-y-10">
              <div className="aspect-[3/2] bg-pureWhite border border-gray-300 p-4">
                <div className="w-full h-full bg-bgLight flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                  [Presentation Deck Screenshot]
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/5] bg-pureWhite border border-gray-300 p-4">
                  <div className="w-full h-full bg-bgLight flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-center px-4">
                    [Persona Card]
                  </div>
                </div>
                <div className="aspect-[4/5] bg-pureWhite border border-gray-300 p-4">
                  <div className="w-full h-full bg-bgLight flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-center px-4">
                    [Journey Map Excerpt]
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-10 border-t border-gray-300 pt-20">
            <h2 className="text-2xl font-bold w-48 shrink-0">Deliverables</h2>
            <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-bold uppercase tracking-wider text-pureBlack">
              <li className="flex items-center gap-4 border-b border-gray-300 pb-4">
                <div className="w-2 h-2 bg-accentOrange rounded-full" />
                4 Customer Surveys
              </li>
              <li className="flex items-center gap-4 border-b border-gray-300 pb-4">
                <div className="w-2 h-2 bg-accentOrange rounded-full" />
                10 Customer Personas
              </li>
              <li className="flex items-center gap-4 border-b border-gray-300 pb-4">
                <div className="w-2 h-2 bg-accentOrange rounded-full" />
                71-item Touchpoint Checklist
              </li>
              <li className="flex items-center gap-4 border-b border-gray-300 pb-4">
                <div className="w-2 h-2 bg-accentOrange rounded-full" />
                Full CX Strategy & Playbook
              </li>
            </ul>
          </section>

        </div>
      </article>
    </div>
  );
};

export default CaseStudy;
