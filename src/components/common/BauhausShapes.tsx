import React from 'react';
import { motion } from 'framer-motion';

export function BauhausShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circle */}
      <motion.div
        className="bauhaus-shape bauhaus-circle w-32 h-32"
        style={{ top: '10%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Square */}
      <motion.div
        className="bauhaus-shape bauhaus-square w-24 h-24"
        style={{ top: '60%', right: '10%' }}
        animate={{
          rotate: [45, 405],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Triangle */}
      <motion.div
        className="bauhaus-shape bauhaus-triangle w-40 h-40"
        style={{ bottom: '15%', left: '15%' }}
        animate={{
          rotate: [0, -360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bauhaus-grid" />
    </div>
  );
}