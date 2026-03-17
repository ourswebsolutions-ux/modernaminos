import React from 'react';

const HeroSection = () => {
  return (
   <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden font-sans">
      
      {/* 1. Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/herobg.jpg')", 
          backgroundAttachment: 'scroll' 
        }}
      />
      
      {/* 2. Light Overlay - Readability for clear image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 z-[1]" />

      {/* 3. Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-12 md:px-12 lg:px-">
        {/* Updated Grid: Left side 1 part, Right side 1.2 parts for more form width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content (Width thori kam kar di) */}
          <div className="text-white space-y-8  lg:pr-10">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight drop-shadow-2xl">
              Thank you for <br /> Visiting 
              Modern <br /> Aminos
            </h1>
            
            <div className="space-y-6 max-w-xl">
              <p className="text-base md:text-lg text-white leading-relaxed font-normal drop-shadow-lg">
                At Modern Aminos, we are committed to maintaining a highly compliant and researcher-friendly experience. To support this commitment, we now require researchers to log in to their user account in order to view our full selection of research materials. If you do not have an existing account with us please register below.
              </p>
              
              {/* Font size updated to match the first paragraph */}
              <p className="text-base md:text-lg text-white leading-relaxed font-normal drop-shadow-md">
                <span className="font-bold">Please be advised:</span> 
                {" "}All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
              </p>
            </div>

            <button className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
              Register Now
            </button>
          </div>

          {/* Right Side: Login Box (Width increased) */}
          <div className="flex justify-center lg:justify-end h-full w-full ">
            {/* Box max-width increased to 550px for more horizontal space */}
            <div className="w-full max-w-[550 bg-transparent border border-white/20 rounded-lg p-8 md:p-10 shadow-none">
              <h2 className="text-3xl font-semibold text-white mb-8 tracking-tight drop-shadow-xl text-center lg:text-left">Login</h2>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-white text-[11px] uppercase tracking-widest font-bold drop-shadow-md">Username or email address *</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/30 rounded py-3 px-4 text-white focus:outline-none focus:border-white transition-all focus:bg-white/10"
                    placeholder=""
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-white text-[11px] uppercase tracking-widest font-bold drop-shadow-md">Password *</label>
                  <input 
                    type="password" 
                    className="w-full bg-white/5 border border-white/30 rounded py-3 px-4 text-white focus:outline-none focus:border-white transition-all focus:bg-white/10"
                    placeholder=""
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/40 bg-transparent cursor-pointer" />
                  <label htmlFor="remember" className="text-white text-sm cursor-pointer select-none drop-shadow-md">Remember Me</label>
                </div>

                <button className="w-full lg:w-auto bg-[#1a5a8a] hover:bg-[#14486e] text-white font-bold py-3 px-12 rounded-full transition-all text-xs uppercase tracking-widest shadow-lg active:scale-95">
                  Log In
                </button>

                <div className="flex gap-1 text-[11px] text-white/90 pt-2 uppercase tracking-tighter font-medium drop-shadow-md">
                  <a href="#" className="hover:text-white transition-colors underline underline-offset-4">Lost your password ?</a>
                  {/* <span className="text-white/30">|</span> */}
                  <a href="#" className="hover:text-white transition-colors font-bold">Register</a>
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-4 pt-6">
                  <button className="w-f bg-white hover:bg-gray-100 text-black py-3 px-4 rounded flex items-center justify-center gap-3 font-semibold text-sm transition-all shadow-md">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="G" />
                    Continue with <span className="font-extrabold text-[13px]">Google</span>
                  </button>
                  
                 
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Shopping Cart Icon */}
      <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-[#1a5a8a] p-4 rounded-full shadow-2xl cursor-pointer relative hover:scale-110 transition-transform">
              <span className="absolute -top-1 -left-1 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-white/20 font-bold">0</span>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;