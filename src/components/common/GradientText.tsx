import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-bauhaus-red via-bauhaus-blue to-bauhaus-yellow bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}