import React from 'react';
import { motion } from 'framer-motion';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-2 border-black p-6 mb-6"
    >
      <h3 className="font-display text-xl font-bold mb-4 relative inline-block">
        {title}
        <motion.div
          className="absolute -z-10 w-full h-3 bg-bauhaus-yellow/30 bottom-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </h3>
      {children}
    </motion.div>
  );
}