import React from 'react';
import { Scale, Menu, X, Edit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationLink, MobileNavigationLink } from './Navigation';
import { useFormContext } from '../../contexts/FormContext';

interface HeaderProps {
  onGetNotified: () => void;
}

export function Header({ onGetNotified }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { hasSubmitted } = useFormContext();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50">
        <div className="absolute inset-0 border-b-2 border-black" />
        
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="max-w-6xl mx-auto px-4 relative"
        >
          <div className="flex items-center justify-between h-20">
            <motion.a 
              href="/"
              className="flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-bauhaus-blue transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
                <div className="relative bg-bauhaus-red p-2.5">
                  <Scale className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-display font-bold">Claimista.com</span>
            </motion.a>

            <nav className="hidden md:flex items-center space-x-12">
              <NavigationLink href="#how-it-works">How It Works</NavigationLink>
              <NavigationLink href="#faq">FAQ</NavigationLink>
              <NavigationLink href="#contact">Contact Us</NavigationLink>
              
              <motion.button
                onClick={onGetNotified}
                className="relative px-6 py-2 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-bauhaus-red transform transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-bauhaus-blue transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative text-white font-display font-bold flex items-center">
                  {hasSubmitted ? (
                    <>
                      Edit Form
                      <Edit className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    'Get Notified'
                  )}
                </span>
              </motion.button>
            </nav>

            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-bauhaus-yellow transform rotate-45" />
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-black" />
                ) : (
                  <Menu className="w-6 h-6 text-black" />
                )}
              </div>
            </motion.button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-white border-b-2 border-black md:hidden z-40"
          >
            <nav className="divide-y-2 divide-black">
              <MobileNavigationLink href="#how-it-works">
                How It Works
              </MobileNavigationLink>
              <MobileNavigationLink href="#faq">
                FAQ
              </MobileNavigationLink>
              <MobileNavigationLink href="#contact">
                Contact Us
              </MobileNavigationLink>
              
              <div className="p-4">
                <motion.button
                  onClick={onGetNotified}
                  className="w-full relative px-6 py-3 overflow-hidden group"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-bauhaus-red" />
                  <div className="absolute inset-0 bg-bauhaus-blue transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative text-white font-display font-bold flex items-center justify-center">
                    {hasSubmitted ? (
                      <>
                        Edit Form
                        <Edit className="w-5 h-5 ml-2" />
                      </>
                    ) : (
                      'Get Notified'
                    )}
                  </span>
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}