import React from 'react';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2 mb-4 md:mb-0"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-bauhaus-blue transform rotate-45 transition-transform duration-300" />
            <div className="relative bg-bauhaus-red p-2">
              <Scale className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>

        <div className="flex space-x-8">
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="text-sm text-gray-500 mt-4 md:mt-0">
          © {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
}