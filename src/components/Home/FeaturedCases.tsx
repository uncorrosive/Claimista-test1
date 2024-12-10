import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURED_CASES = [
  {
    title: "Consumer Data Breach Settlement",
    company: "Major Tech Corp",
    compensation: "$500 - $2,500",
    deadline: "December 31, 2024",
    description: "For customers affected by the 2023 data breach.",
    color: "bg-blue-50"
  },
  {
    title: "Vehicle Emissions Settlement",
    company: "AutoMaker Inc",
    compensation: "Up to $5,000",
    deadline: "March 15, 2024",
    description: "For owners of affected 2018-2022 vehicle models.",
    color: "bg-green-50"
  },
  {
    title: "Banking Fee Settlement",
    company: "National Bank",
    compensation: "$25 - $300",
    deadline: "June 30, 2024",
    description: "For account holders charged overdraft fees during 2020-2023.",
    color: "bg-purple-50"
  }
];

export function FeaturedCases() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const diff = startX - touch.clientX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setActiveIndex(prev => Math.min(prev + 1, FEATURED_CASES.length - 1));
        } else {
          setActiveIndex(prev => Math.max(prev - 1, 0));
        }
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', handleTouchMove);
    }, { once: true });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Class Action Lawsuits
        </motion.h2>

        <div 
          onTouchStart={handleTouchStart}
          className="relative"
        >
          <div className="flex md:grid md:grid-cols-3 gap-8 px-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide">
            {FEATURED_CASES.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${caseItem.color} rounded-3xl p-6 min-w-[300px] md:min-w-0 snap-center`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{caseItem.title}</h3>
                    <p className="text-gray-600">{caseItem.company}</p>
                  </div>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 shadow-sm"
                  >
                    {caseItem.compensation}
                  </motion.span>
                </div>
                
                <p className="text-gray-600 mb-6">{caseItem.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline: {caseItem.deadline}</span>
                  </div>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-1"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8 md:hidden">
            {FEATURED_CASES.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}