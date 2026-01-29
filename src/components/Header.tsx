import React from 'react';

/**
 * The Header component.
 * It provides consistent navigation at the top of the page.
 * It's designed to be clean and unobtrusive.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex justify-between items-center h-20">
          {/* Logo or brand name */}
          <a href="#" className="text-2xl font-extrabold tracking-tight text-slate-900 group">
            Fuel<span className="text-blue-600 group-hover:text-blue-500 transition-colors">Up</span>
          </a>
          
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full">
                Contact
              </a>
            </li>
          </ul>

          {/* Call to action button on larger screens */}
          <a 
            href="#contact" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
