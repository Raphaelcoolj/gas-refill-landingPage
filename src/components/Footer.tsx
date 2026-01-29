import React from 'react';

/**
 * The Footer component.
 * It appears at the bottom of the page and contains copyright information,
 * and potentially other links like social media or terms of service.
 * Keeps the UI feeling complete.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
             <a href="#" className="text-2xl font-extrabold tracking-tight text-white">
              Fuel<span className="text-blue-500">Up</span>
            </a>
            <p className="text-sm mt-2 text-slate-500">Fueling your journey, differently.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} FuelUp. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
