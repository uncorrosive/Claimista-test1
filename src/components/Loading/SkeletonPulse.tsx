import { motion } from 'framer-motion';

interface SkeletonPulseProps {
  className?: string;
}

export function SkeletonPulse({ className = '' }: SkeletonPulseProps) {
  return (
    <motion.div
      className={`w-full h-full bg-gray-200 rounded-lg ${className}`}
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}