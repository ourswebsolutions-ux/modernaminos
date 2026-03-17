import React from 'react';
import HeroSection from '../Components/homeComponents/HeroSection';
import GuaranteeSection from '../Components/homeComponents/GuaranteeSection';
import FeaturesSection from '../Components/homeComponents/FeaturesSection';
import FAQSection from '../Components/homeComponents/FAQSection';

import QuoteBanner from '../Components/homeComponents/QuoteBanner';

function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

            <div className="w-full bg-[#005a8c] py-2.5 px-4 shadow-sm z-20">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-white text-[12px] md:text-[14px] font-semibold tracking-wider uppercase">
                        Login for the full experience. - For laboratory research use only. Not for human consumption.
                    </p>
                </div>
            </div>

            <main className="flex-grow w-full">
                <div className="px-4 py-6 md:px-6 md:py-8">
                    <div className="max-w-[1600px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <HeroSection />
                    </div>
                </div>

                <div className="space-y-0">
                    <GuaranteeSection />
                    <FeaturesSection />
                    <FAQSection />
                    <QuoteBanner />
                </div>

            </main>
        </div>
    );
}

export default Home;
