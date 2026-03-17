import React from 'react';
import { Mail, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#04212f] text-white pt-10 pb-8 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
          
          {/* Column 1: Logo Section */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center z-10">
              <img
                src="/footernav.jpg"
                alt="Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-lg md:text-[22px] font-normal text-white tracking-[-0.05em] leading-[0.9] font-['Michroma']">
                  MODERN AMINOS
                </h1>
                <p className="text-[4px] md:text-[6px] text-white font-bold tracking-[0.5] md:tracking-[0.8] mt-0.5 uppercase font-['Michroma'] leading-none">
                  QUALITY PRODUCTS WITH QUALITY SERVICE
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm max-w-[300px] leading-relaxed">
              Quality products and exceptional service are very important to us
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold uppercase tracking-wider text-white">Contact Us</h3>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Mail size={14} />
                <span className="text-sm lowercase">cs@modernaminos.com</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-bold uppercase tracking-wider text-white">Quick Links</h3>
              <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Subscription */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-tight text-white">Subscribe now to save 15%</h3>
            <p className="text-sm text-gray-400 leading-snug">
              Subscribe and Get Exclusive Updates Straight to your Inbox for Free
            </p>
            
            <div className="relative w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border border-white/20 rounded-full py-2.5 px-5 text-sm focus:outline-none focus:border-white transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-white text-[#04212f] px-5 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition-all shadow-md">
                <Send size={12} />
                <span className="font-bold text-[10px] uppercase tracking-wider">Send</span>
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: FULL DISCLAIMER TEXT - CENTERED */}
        <div className="pt-6 pb-6 flex justify-center border-t border-white/5">
          <p className="text-[10px] md:text-[13px] text-gray-400 leading-relaxed max-w-5xl text-center text-bold font-light">
            Please be advised: All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 text-[10px] text-gray-400 uppercase tracking-[0.2em]">
          <p>© 2026, All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;