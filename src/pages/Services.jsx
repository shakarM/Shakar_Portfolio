import React from 'react';
import { Search, Puzzle, Megaphone, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const pillars = [
    {
      icon: Search,
      title: "Research & Analysis",
      desc: "Finding what everyone else missed.",
      deliverables: ["Survey design", "Data analysis", "Mystery shopping", "Competitive analysis", "Cultural bias detection", "Independent analysis"]
    },
    {
      icon: Puzzle,
      title: "CX/UX Strategy & Design",
      desc: "Designing the experience they deserve.",
      deliverables: ["Personas", "Journey maps", "Service blueprints", "Touchpoint checklists", "Experience principles", "Priority matrices"]
    },
    {
      icon: Megaphone,
      title: "Marketing & Campaign Strategy",
      desc: "Connecting the dots for growth.",
      deliverables: ["Social media strategy", "Brand voice", "Campaign concepts", "Channel strategy", "Brand consistency matrices", "Cultural direction"]
    },
    {
      icon: Pencil,
      title: "Content & Creative Direction",
      desc: "Storytelling that moves the needle.",
      deliverables: ["Ad scenarios", "TVC/reel scripts", "Photo/video shoot direction", "Kurdish/Arabic content", "Content calendars"]
    }
  ];

  return (
    <div className="min-h-screen bg-bgLight text-pureBlack pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">Services.</h1>
          <p className="text-xl text-gray-500 font-medium max-w-xl">
            Four pillars of work that turn raw customer data into experiences that drive real business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-pureWhite border border-gray-300 p-10 hover:border-pureBlack transition-colors group">
              <div className="w-16 h-16 bg-bgLight flex items-center justify-center mb-8 border border-gray-200 group-hover:bg-pureBlack group-hover:text-pureWhite transition-colors">
                <pillar.icon className="w-8 h-8" strokeWidth={1} />
              </div>
              <h2 className="text-3xl font-bold mb-3 tracking-tight">{pillar.title}</h2>
              <p className="text-gray-500 mb-10 font-medium">{pillar.desc}</p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">Deliverables</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm font-medium">
                  {pillar.deliverables.map(del => (
                    <li key={del} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-accentOrange" />
                      <span className="text-pureBlack">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/work" className="inline-block text-xs font-bold uppercase tracking-widest text-pureBlack hover:text-accentOrange transition-colors border-b-2 border-pureBlack hover:border-accentOrange pb-1">
                See related work
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
