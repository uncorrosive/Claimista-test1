import React from 'react';
import { motion } from 'framer-motion';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavigationLink({ href, children, className = '' }: NavigationLinkProps) {
  return (
    <motion.a
      href={href}
      className={`relative font-display text-lg group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-bauhaus-yellow/20 -z-10"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
}

export function MobileNavigationLink({ href, children }: NavigationLinkProps) {
  return (
    <motion.a
      href={href}
      className="block py-3 px-4 font-display text-lg border-b-2 border-black relative overflow-hidden group"
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-bauhaus-yellow/20 -z-0"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}