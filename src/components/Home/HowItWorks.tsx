import React from 'react';
import { ClipboardCheck, Search, BadgeCheck, BanknoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Complete Profile",
    description: "Fill out our secure questionnaire with your personal and employment information.",
    details: "We protect your data with bank-level encryption.",
    color: "bg-bauhaus-red"
  },
  {
    icon: Search,
    title: "Smart Matching",
    description: "Our AI system analyzes your profile against active class action lawsuits.",
    details: "We scan thousands of cases daily to find matches.",
    color: "bg-bauhaus-blue"
  },
  {
    icon: BadgeCheck,
    title: "Verify Claims",
    description: "Review matched cases and confirm your eligibility with our expert team.",
    details: "Get personalized support throughout the process.",
    color: "bg-bauhaus-yellow"
  },
  {
    icon: BanknoteIcon,
    title: "Receive Payment",
    description: "Submit required documentation and track your settlement payment.",
    details: "Choose your preferred payment method.",
    color: "bg-bauhaus-primary"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden" id="how-it-works">
      {/* Bauhaus background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-bauhaus-red/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-bauhaus-blue/10 transform rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-bauhaus-yellow/10 -translate-x-1/2 -translate-y-1/2" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            How Claimista Works
          </h2>
          <div className="h-2 w-32 bg-bauhaus-red mx-auto mb-4" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of people who have successfully claimed their settlements through our platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gray-50 transform -rotate-2 transition-transform group-hover:rotate-0" />
              <div className="relative bg-white p-6 border-2 border-black">
                <div className={`${step.color} w-16 h-16 flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <p className="text-sm text-gray-500 italic">{step.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}