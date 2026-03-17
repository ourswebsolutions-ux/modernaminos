import React, { useState } from 'react';
import { CirclePlus, CircleMinus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Do you ship internationally?",
      answer: "At the moment we only ship to the USA."
    },
    {
      question: "Why do I need an account to view the site?",
      answer: "This is to help ensure that all researchers who are browsing on our site are authorized researchers. This helps us to maintain compliance."
    },
    {
      question: "How long do orders take to arrive?",
      answer: "Orders typically ship the same day and take 3–5 business days to arrive, depending on the courier.."
    },
    {
      question: "I think my package may be lost, or I'm having an order issue, what should I do?",
      answer: "Please contact our service team at cs@modernaminos.com with your full name, order #, and issue with as much description as possible so that they may assist."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-8 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Top Badge */}
        <div className="inline-block bg-[#1a5a8a] text-white text-[11px] md:text-xs font-bold px-6 py-2 rounded-full mb-6 uppercase tracking-wider">
          Frequently Asked Questions
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2a3a] mb-12 tracking-tight">
          Need Help?
        </h2>

        {/* FAQ Container Card - Explicitly white */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
          
          {/* Header Bar - Dark Blue */}
          <div className="bg-[#04212f] py-5">
            <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.25em]">
              General Questions
            </span>
          </div>

          {/* FAQ Items Area - Forced white background */}
          <div className="p-4 sm:p-8 md:p-12 bg-white space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-4 md:p-6 rounded-full transition-all duration-300 border ${
                    openIndex === index 
                    ? 'bg-white border-[#04212f] text-[#04212f] shadow-md'     // Open: white bg
                    : 'bg-[#04212f] border-transparent text-white'           // Closed: dark bg
                  }`}
                >
                  <span className="text-sm md:text-base lg:text-lg font-bold text-left pr-4">
                    {faq.question}
                  </span>
                  
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <CircleMinus size={24} className="text-[#04212f]" />
                    ) : (
                      <CirclePlus size={24} className="text-white" />
                    )}
                  </div>
                </button>

                {/* Answer Area - White background + white text area */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-10 py-6 bg-white text-gray-700 text-left text-base md:text-lg leading-relaxed">
                    <p className="border-l-2 border-[#04212f] pl-4 italic">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;