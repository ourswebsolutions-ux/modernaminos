import React from 'react';
import { ShieldCheck, Truck, Headset } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck size={48} className="text-white mb-6 " strokeWidth={1.5} />,
      title: "Third party tested",
      description: "Third Party Multi Vial Batch Tested: Our products undergo rigorous third-party, multi-vial batch testing to ensure exceptional safety, purity, and quality. Batch testing also allows you to easily match each peptide to its corresponding Certificate of Analysis (COA)."
    },
    {
      icon: <Truck size={48} className="text-white mb-6" strokeWidth={1.5} />,
      title: "Fast Shipping",
      description: "Same-Day Shipping Monday through Friday when you order before 12 PM CST! At Modern Aminos, we take pride in our fast, reliable shipping to ensure your order arrives without delay."
    },
    {
      icon: <Headset size={48} className="text-white mb-6" strokeWidth={1.5} />,
      title: "24/7 Customer Support (Monday–Friday)",
      description: "Our dedicated customer service team is available Monday through Friday, and for most of the day on weekends, to ensure your needs are handled quickly and efficiently."
    }
  ];

  return (
    <section className="w-full bg-[#f4f7ff] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#04212f] rounded-[2rem] p-10 flex  flex-col items-center text-center shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Icon Container */}
              <div className="flex justify-center items-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl font-bold mb-4 tracking-tight leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;