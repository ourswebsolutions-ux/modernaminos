import React, { useState } from 'react';
import { User, Menu, X, AlignRight } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"></link>
    return (
        <nav className="w-full bg-white relative font-['Montserrat'] ">
            {/* Main Container */}
            <div className="max-w-[100%] mx-auto px-4 md:px-14 lg:px-24">
                <div className="flex justify-between items-center h-20 md:h-24 relative">

                    {/* LOGO SECTION - Left */}
                    <div className="flex items-center  z-10">
                        <img
                            src="\nablogo.jpg"
                            alt="Logo"
                            className="h-10 md:h-14 w-auto object-contain "
                        />
                        <div className="flex flex-col">
                            <h1 className="text-lg md:text-[24px] font-normal text-[#0e1b2a] tracking-[-0.05em] leading-[0.9] font-['Michroma']">
                                MODERN AMINOS
                            </h1>
                            <p className="text-[4px] md:text-[7px] text-[#007bb5] font-bold tracking-[0.5] md:tracking-[0.8] mt-0.5 uppercase font-['Michroma'] leading-none">
                                QUALITY PRODUCTS WITH QUALITY SERVICE
                            </p>
                        </div>
                    </div>

                    {/* NAV LINKS - Desktop Only (Absolute Center) */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-2">
                        <a
                            href="#"
                            className="bg-[#e8f1f8] text-[#004a7c] px-5 py-1 rounded-full font-bold text-[15px] hover:bg-[#d0e4f2] transition-all"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-[#0e1b2a] px-5 py-1 font-bold text-[15px] hover:text-[#004a7c] transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* RIGHT SIDE ICONS (Mobile & Desktop) */}
                    <div className="flex items-center gap-3 md:gap-6 z-10">
                        {/* Profile Icon */}
                        <div className="text-[#004a7c] cursor-pointer p-1 hover:bg-gray-100 rounded-full transition-all">
                            <User size={26} strokeWidth={1.5} md:size={30} />
                        </div>

                        {/* Mobile Toggle Button (Exactly as your second image) */}
                        <button
                            className="md:hidden text-[#004a7c] p-1"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X size={28} strokeWidth={1.5} />
                            ) : (
                                <AlignRight size={28} strokeWidth={1.5} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isMenuOpen && (
                <div className="md:hidden bg-white absolute w-full left-0 top-full z-50 shadow-lg border-t border-gray-100 animate-in slide-in-from-top duration-200">
                    <div className="flex flex-col items-center py-6 gap-3">
                        <a href="#" className="w-[90%] text-center py-3 bg-[#e8f1f8] text-[#004a7c] rounded-xl font-bold">
                            Home
                        </a>
                        <a href="#" className="w-[90%] text-center py-3 text-[#0e1b2a] font-bold hover:bg-gray-50 rounded-xl">
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;