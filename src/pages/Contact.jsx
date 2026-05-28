import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-bgLight text-pureBlack pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Contact Info */}
        <div className="md:w-1/2">
          <h1 className="text-7xl md:text-9xl font-bold mb-10 tracking-tighter">Contact.</h1>
          <p className="text-3xl font-bold tracking-tight mb-16 leading-snug">
            Have a project in mind?<br/>Let's work together.
          </p>
          
          <div className="space-y-8 font-bold text-sm uppercase tracking-wider">
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span className="text-gray-500">Email</span>
              <a href="mailto:shakar.latif01@gmail.com" className="hover:text-accentOrange transition-colors">shakar.latif01@gmail.com</a>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span className="text-gray-500">Phone</span>
              <a href="tel:+9647702109440" className="hover:text-accentOrange transition-colors">+964 770 210 9440</a>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span className="text-gray-500">Location</span>
              <span>Sulaymaniyah, Iraq</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span className="text-gray-500">Social</span>
              <div className="space-x-4">
                <a href="https://linkedin.com" className="hover:text-accentOrange transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-accentOrange transition-colors">Behance</a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Placeholder */}
        <div className="md:w-1/2 md:pt-32">
          <div className="bg-pureWhite border border-gray-300 p-10 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 text-pureBlack font-medium focus:outline-none focus:border-pureBlack transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 text-pureBlack font-medium focus:outline-none focus:border-pureBlack transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Company (optional)</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 text-pureBlack font-medium focus:outline-none focus:border-pureBlack transition-colors" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project Details</label>
                <textarea rows="3" className="w-full bg-transparent border-b border-gray-300 py-3 text-pureBlack font-medium focus:outline-none focus:border-pureBlack transition-colors resize-none" placeholder="What are we building?" />
              </div>
              <button className="w-full bg-pureBlack text-pureWhite font-bold text-sm uppercase tracking-widest py-5 hover:bg-accentOrange transition-colors mt-8">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
