import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="w-full bg-[#f4f7ff] py-16 md:py-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-24 md:space-y-32">
        
        {/* Main Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a2a3a] tracking-tight">
            The Modern Aminos Guarantee
          </h2>
        </div>

        {/* --- FIRST CARD: 3rd Party Testing (Image Left, Text Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Image */}
          <div className="w-full order-1">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="\card1.png" 
                alt="3rd Party Testing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: Text */}
          <div className="flex flex-col space-y-6 text-center lg:text-left order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a2a3a]">
              3rd Party Multi Vial Batch Tested
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Modern Aminos, we prioritize the quality and authenticity of every product we offer. 
              Each product undergoes third-party, multi-vial batch testing to verify purity, 
              compound identity, quantity, and endotoxin levels. In addition to this rigorous testing 
              process, every vial includes a unique batch number.
            </p>
            <div className="pt-2">
              <h4 className="text-xl font-bold text-[#0a2a3a] mb-4">Login for the full experience.</h4>
              <button className="bg-[#1a5a8a] hover:bg-[#14486e] text-white font-bold py-3 px-10 rounded-full transition-all shadow-md active:scale-95 text-sm uppercase tracking-wider">
                Login
              </button>
            </div>
          </div>
        </div>

        {/* --- SECOND CARD: Customer Service (Text Left, Image Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text (Order 2 on mobile, Order 1 on Desktop) */}
          <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a2a3a]">
              Customer Service and Experience Always Comes First
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We understand that even though high quality research materials allows for the best 
              most reliable results in laboratory settings, things like slow shipping, and poor 
              customer service can make already tedious research more of a headache. That is why 
              here at Modern Aminos our customer service and shipping teams work around the clock.
            </p>
            <div className="pt-2">
              <h4 className="text-xl font-bold text-[#0a2a3a] mb-4">Login for the full experience.</h4>
              <button className="bg-[#1a5a8a] hover:bg-[#14486e] text-white font-bold py-3 px-10 rounded-full transition-all shadow-md active:scale-95 text-sm uppercase tracking-wider">
                Login
              </button>
            </div>
          </div>
          {/* Right: Image (Order 1 on mobile, Order 2 on Desktop) */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <img 
                src="/card2.png" 
                alt="Customer Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuaranteeSection;