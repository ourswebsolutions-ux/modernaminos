import React from 'react';
import { Quote } from 'lucide-react';

const QuoteBanner = () => {
  return (
    /* mb-20 footer ke sath gap create karne ke liye hai */
    <section className="relative w-full overflow-hidden mb-20">
      
      {/* 1. Top Solid Bar - Matching your page background */}
      <div className="w-full h-12 md:h-16 bg-gray-50" />

      {/* 2. Main Banner with Fixed Background */}
      <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
        
        {/* Background Image Layer (Fixed) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            // Local path for public folder
            backgroundImage: "url('/bg2.jpg')", 
          }}
        >
          {/* Dark Overlay - taake text saaf nazar aaye */}
          <div className="absolute inset-0 bg-[#04212f]/70" />
        </div>

        {/* 3. Content Area */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          
          {/* White Quote Circle */}
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 md:p-5 rounded-full shadow-2xl">
              <Quote size={32} className="text-[#04212f] rotate-180" fill="currentColor" />
            </div>
          </div>

          {/* Banner Heading */}
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            Quality products and exceptional <br className="hidden md:block" />
            service are very important to us
          </h2>
        </div>
      </div>

      {/* 4. Bottom Solid Bar - Matching your page background */}
      <div className="w-full h-12 md:h-16 bg-gray-50" />
    </section>
  );
};

export default QuoteBanner;