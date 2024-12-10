import { motion } from 'framer-motion';

interface UnderlinedTextProps {
  children: React.ReactNode;
  className?: string;
}

export function UnderlinedText({ children, className = '' }: UnderlinedTextProps) {
  return (
    <span className={`relative ${className}`}>
      {children}
      <motion.div
        className="absolute -z-10 w-full h-4 bg-bauhaus-yellow/30 bottom-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </span>
  );
}