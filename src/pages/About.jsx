import React from 'react';
import aboutMePhoto from '../assets/shakar-photo.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-bgLight text-pureBlack pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        <div className="lg:w-1/3">
          <h1 className="text-7xl md:text-9xl font-bold mb-10 tracking-tighter">About.</h1>
          <div className="aspect-[3/4] bg-pureWhite border border-gray-300 p-4 mb-10">
            <div className="w-full h-full overflow-hidden">
              <img src={aboutMePhoto} alt="Shakar Latif" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="space-y-6 text-sm">
            <div className="flex justify-between border-b border-gray-300 pb-2 font-bold uppercase tracking-wider">
              <span className="text-gray-500">Location</span>
              <span>Sulaymaniyah, Iraq</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2 font-bold uppercase tracking-wider">
              <span className="text-gray-500">Languages</span>
              <span className="text-right">Kurdish<br/>English<br/>Turkish</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 lg:pt-32 space-y-16">
          <p className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
            I'm Shakar Latif, a CX/UX/Content Designer. I build customer experiences for brands in Iraq and the Kurdistan Region.
          </p>
          
          <div className="space-y-10 border-l-4 border-pureBlack pl-8">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-4">My Journey (Work Experience)</h2>
              <div className="space-y-8 mt-6">
                {[
                  {
                    title: "Customer Experience Design (CXD) Manager",
                    company: "Metrik Studios",
                    description: "Founded, structured, and currently lead the Customer Experience department. Spearheaded the complete end-to-end CX project for Vanilly Iraq, leading the concept development, research, definition, and design phases."
                  },
                  {
                    title: "Brand Manager (Freelance / Project-Based)",
                    company: "Cattuchino Cafe & Adela",
                    description: "Structured and managed holistic brand strategies and visual identities for a specialty cafe and a women's fashion brand. Created comprehensive, long-term plans to optimize social media presence and the overall customer experience."
                  },
                  {
                    title: "Content Creator (Freelance)",
                    company: "Diwakhan",
                    description: "Designed content structures and managed official Instagram content tailored for specific client advertisements."
                  },
                  {
                    title: "Content Creator",
                    company: "Layen Agency",
                    description: "Managed social media content creation and strategy for major FMCG brands, including Mahmood Coffee, Mahmood Tea, and Confy Iraq."
                  },
                  {
                    title: "Content Strategist & Designer",
                    company: "FKR Agency, Sulaymaniyah",
                    description: "Contributed to the generation of engaging TV commercials and social media campaigns for Asana Drinking, VIP, Coffella Coffee, and DoGhazal Tea. Developed innovative scenario ideas and scripts, visualized creative concepts, and worked in multiple capacities on production sets. Designed social media posters and authored copy to strictly align with the clients' broader business strategies."
                  },
                  {
                    title: "Project Coordinator",
                    company: "China Study Center",
                    description: "Coordinated active projects and managed organizational workflows to ensure timely delivery."
                  },
                  {
                    title: "UX/UI Designer",
                    company: "ZUU Delivery, Erbil",
                    description: "Designed and maintained a comprehensive design system in Figma, building interactive components for consistent and efficient development in an agile environment. Conducted user research and created prototypes to enhance user experiences and validate design concepts for an early-stage app. Utilized AI tools and flowcharts to accelerate and optimize both new and existing user interfaces to align with business goals."
                  },
                  {
                    title: "Intern",
                    company: "Click Iraq (Job Studio App)",
                    description: "Gained cross-functional, hands-on experience across multiple creative fields, including brand strategy, content creation, marketing, and logistics."
                  },
                  {
                    title: "Media Leader & Graphic Designer",
                    company: "American Corner, Sulaimaniyah",
                    description: "Initially hired as a Graphic Designer and promoted to Media Leader within one year, overseeing visual output and media strategy."
                  },
                  {
                    title: "Volunteer",
                    company: "American University of Iraq, Sulaimani (AUIS)",
                    description: "Began professional journey by contributing time and skills to campus initiatives."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute w-3 h-3 bg-pureBlack rounded-full -left-[2.15rem] top-1.5 border-2 border-bgLight"></div>
                    <h3 className="text-xl font-bold text-pureBlack mb-1 tracking-tight">{item.title}</h3>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-accentOrange mb-3">{item.company}</h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-4">What I Believe</h2>
              <p className="text-lg text-pureBlack font-medium leading-relaxed max-w-2xl mb-4">
                That data should drive design, not decorate it. That Iraqi and Kurdish customers deserve experiences designed specifically for their culture, not frameworks imported from Silicon Valley.
              </p>
              <p className="text-lg text-pureBlack font-medium leading-relaxed max-w-2xl">
                That a persona without a real backstory is just a demographic slide. That good strategy without great execution is a PDF nobody reads.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-300">
            <h2 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-8">The Toolbox</h2>
            <div className="flex flex-wrap gap-4">
              {['Market Research', 'Customer Personas', 'Journey Mapping', 'Social Media Strategy', 'Content Flow Design', 'Marketing Strategy', 'Figma', 'Adobe Creative Suite'].map(tool => (
                <span key={tool} className="px-6 py-3 bg-pureWhite border border-gray-300 text-xs font-bold uppercase tracking-wider text-pureBlack hover:border-pureBlack hover:text-accentOrange transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
