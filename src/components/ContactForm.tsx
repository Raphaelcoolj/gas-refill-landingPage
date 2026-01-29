'use client'; // This directive is necessary for components that use client-side hooks like useState.

import React, { useState } from 'react';

/**
 * The ContactForm component.
 * This is an interactive component that allows users to send a message.
 * It uses the 'useState' hook to manage form input state.
 * In a real application, the handleSubmit function would send this data to a backend server or API.
 *
 * @returns {JSX.Element} The rendered contact form section.
 */
const ContactForm = () => {
  // State for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To show a success or error message

  /**
   * Handles the form submission.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setStatus('Thank you for your message! We will get back to you shortly.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info / Side Panel */}
          <div className="md:w-5/12 bg-blue-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/50 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-blue-400/50 blur-2xl"></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-200 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-200 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>support@fuelup.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-200 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>123 Gas Station Blvd,<br/>New York, NY 10001</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
               {/* Social Icons Placeholder */}
               <div className="flex space-x-4">
                 <a href="#" className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center hover:bg-blue-500 transition-colors">
                   <span className="sr-only">Facebook</span>
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                 </a>
                 <a href="#" className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center hover:bg-blue-500 transition-colors">
                   <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.94-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C4.5 21.3 2.5 22 0 22c2.14 1.34 4.7 2.13 7.44 2.13 8.94 0 13.84-7.44 13.84-13.84v-.6a9.94 9.94 0 0 0 2.5-2.55l.04-.04z"/></svg>
                 </a>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-7/12 p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 group-focus-within:text-blue-600 transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              {/* Email Input */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 group-focus-within:text-blue-600 transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              {/* Message Textarea */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1 group-focus-within:text-blue-600 transition-colors">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Status message after submission */}
            {status && (
              <div className="mt-6 p-4 rounded-lg bg-green-50 text-green-700 border border-green-100 flex items-center animate-fade-in">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
