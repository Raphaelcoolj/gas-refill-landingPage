import React from 'react';

/**
 * The Hero component.
 * This is the first section users see. Its purpose is to make a strong
 * first impression, clearly state the value proposition, and guide the user
 * to a primary call to action.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/4" />

      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          Now Available in your Area
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Modern Gas Refills, <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Delivered to You.
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Forget the station. We bring high-quality fuel directly to your vehicle, so you can save time and focus on what matters. 
        </p>
        
        {/* Primary Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Schedule a Refill
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2"
          >
            Learn More
          </a>
        </div>

        {/* Stats or Trust Indicators (Optional) */}
        <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-3xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-slate-500 font-medium">Service Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">15m</p>
              <p className="text-sm text-slate-500 font-medium">Avg. Arrival Time</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-slate-900">5k+</p>
              <p className="text-sm text-slate-500 font-medium">Happy Customers</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-slate-900">4.9</p>
              <p className="text-sm text-slate-500 font-medium">User Rating</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
