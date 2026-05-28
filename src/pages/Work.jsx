import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';
import zuuCover from '../assets/zuu-delivery-cover.png';
import uxCover from '../assets/ux-research-cover.png';

const Work = () => {
  const [filter, setFilter] = useState('All');
  const portfolioLink = 'https://canva.link/shakarsportfolio'; // Link to Canva portfolio
  const filters = ['All', 'CX Research', 'CX/UX Strategy', 'Marketing Strategy', 'Campaign & Content', 'UX/UI Design', 'Brand Management'];

  const projects = [
    { id: 1, title: 'Vanilly', tags: ['CX Research', 'CX/UX Strategy'], desc: 'End-to-end CX engagement from raw survey data to final strategy deliverables.', type: 'pdf', link: '#' },
    { id: 2, title: 'ZUU Delivery', tags: ['CX/UX Strategy', 'UX/UI Design'], desc: 'Complete product design and delivery strategy.', type: 'figma', link: 'https://www.figma.com/design/z93t1fRCTAwXgCFKqm6Q0t/ZUU-APP?node-id=0-1&t=kjzeVUTHfTXCgY6R-1', image: zuuCover },
    { id: 3, title: 'UX/UI Research', tags: ['UX/UI Design', 'CX Research'], desc: 'Figma-based in-depth user experience research and interface design.', type: 'figma', link: 'https://www.figma.com/design/zYstjgs7GfR16oJZy5kej4/Quiz-Order?node-id=0-1&t=umLU16DZVRPArRmD-1', image: uxCover },
    { id: 4, title: 'Behance Portfolio', tags: ['Campaign & Content', 'Brand Management'], desc: 'Explore my extensive creative campaigns and designs on Behance.', type: 'behance', link: 'https://behance.net/shakarlatif' }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="min-h-screen bg-bgLight text-pureBlack pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">Works.</h1>
          <a 
            href={portfolioLink} 
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 flex items-center gap-3 bg-pureBlack text-pureWhite px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-accentOrange hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            See My Full Portfolio of Work here
            <ExternalLink className="w-5 h-5 animate-pulse" />
          </a>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-20 border-b border-gray-300 pb-8">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${filter === f ? 'text-accentOrange' : 'text-gray-400 hover:text-pureBlack'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, i) => {
            const isExternal = project.type === 'figma' || project.type === 'behance';
            
            if (project.type === 'pdf') {
              return (
                <div key={project.id} className="group flex flex-col h-full bg-pureWhite border border-gray-200 overflow-hidden hover:border-pureBlack hover:shadow-xl transition-all duration-300 rounded-3xl">
                  <div className="relative aspect-[4/3] bg-gray-100 w-full overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                      [Document Visual - {project.title}]
                    </div>
                    {/* Overlay CTA */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={project.link} className="px-6 py-3 bg-accentOrange text-white font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        Download PDF
                      </a>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold text-accentOrange uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-pureBlack">{project.title}</h3>
                  </div>
                </div>
              );
            }

            return (
              <div key={project.id} className="group flex flex-col h-full bg-pureWhite border border-gray-200 overflow-hidden hover:border-pureBlack hover:shadow-xl transition-all duration-300 rounded-3xl">
                {isExternal ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="block relative aspect-[4/3] bg-bgLight w-full overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : project.type === 'behance' ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#053eff] text-white group-hover:scale-105 transition-transform duration-500">
                        <FaBehance size={120} />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium group-hover:scale-105 transition-transform duration-500">
                        [{project.type === 'figma' ? 'Figma Visual' : 'Behance Visual'} - {project.title}]
                      </div>
                    )}
                  </a>
                ) : (
                  <Link to={project.link} className="block relative aspect-[4/3] bg-bgLight w-full overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium group-hover:scale-105 transition-transform duration-500">
                        [Software Visual - {project.title}]
                      </div>
                    )}
                  </Link>
                )}
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider flex-wrap">
                    {project.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < project.tags.length - 1 && <span className="text-gray-300">|</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold tracking-tight mb-4 text-pureBlack font-serif leading-tight">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                  
                  {!isExternal && (
                    <div className="bg-[#e6f9d3] p-4 rounded-xl mb-8 mt-auto">
                      <span className="text-[#2e5c14] font-medium"><strong className="text-xl mr-2">10x</strong> Faster workflows</span>
                    </div>
                  )}
                  
                  {isExternal ? (
                     <a href={project.link} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 px-6 py-3 border border-pureBlack rounded-full font-bold text-sm w-fit hover:bg-pureBlack hover:text-white transition-colors">
                       View on {project.type === 'figma' ? 'Figma' : 'Behance'} <ArrowRight className="w-4 h-4" />
                     </a>
                  ) : (
                    <Link to={project.link} className="mt-auto inline-flex items-center gap-2 px-6 py-3 border border-pureBlack rounded-full font-bold text-sm w-fit hover:bg-pureBlack hover:text-white transition-colors">
                      View Project <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
