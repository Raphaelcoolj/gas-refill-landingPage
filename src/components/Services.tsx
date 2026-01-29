import React from 'react';

// A simple SVG icon component for visual flair.
// In a real app, these might be more complex or come from a library.
const ServiceIcon = ({ color }: { color: string }) => (
  <div className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  </div>
);

/**
 * The Services component.
 * This section details the key services offered. Using a grid of cards
 * allows for a clear, scannable, and responsive presentation of each offering.
 *
 * @returns {JSX.Element} The rendered services section.
 */
const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Quality fuel, exceptional service.</h3>
          <p className="text-lg text-slate-600">We offer a range of premium services designed to keep you moving without interruption.</p>
        </div>
        
        {/* Responsive Grid for Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service Card 1 */}
          <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
            <div className="mb-6 w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Standard Refill</h3>
            <p className="text-slate-600 leading-relaxed">
              Quick and efficient refilling with high-quality standard gasoline. Perfect for daily drivers looking for convenience.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-100 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
             <div className="mb-6 w-14 h-14 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Premium Fuel</h3>
            <p className="text-slate-600 leading-relaxed">
              High-octane premium fuel for enhanced performance and engine health. Recommended for sports and luxury vehicles.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300">
             <div className="mb-6 w-14 h-14 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">24/7 Emergency</h3>
            <p className="text-slate-600 leading-relaxed">
              Ran out of fuel? Our emergency team is available around the clock to get you back on the road in no time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
