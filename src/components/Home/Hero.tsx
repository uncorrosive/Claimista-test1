import React from 'react';
import { ArrowRight, Shield, Users, Gavel, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { GradientText } from '../common/GradientText';
import { UnderlinedText } from '../common/UnderlinedText';
import { useFormContext } from '../../contexts/FormContext';

interface HeroProps {
  onGetNotified: () => void;
}

export function Hero({ onGetNotified }: HeroProps) {
  const { hasSubmitted } = useFormContext();

  return (
    <div className="pt-24 pb-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-black">Get Your Fair Share</span>
              <br />
              <UnderlinedText>
                from Class Action
              </UnderlinedText>
            </h1>
            <p className="text-xl text-black mb-8 font-light">
              Join millions who have claimed their rightful compensation. Our AI-powered system matches you with eligible lawsuits instantly.
            </p>
            
            <motion.button 
              onClick={onGetNotified}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              <span className="relative z-10">
                {hasSubmitted ? (
                  <>
                    Edit Form
                    <Edit className="w-5 h-5 inline-block ml-2 relative z-10" />
                  </>
                ) : (
                  <>
                    Get Notified
                    <ArrowRight className="w-5 h-5 inline-block ml-2 relative z-10" />
                  </>
                )}
              </span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-bauhaus-red/20 to-bauhaus-blue/20 rounded-none transform rotate-3" />
            <div className="relative bg-white p-8 border-2 border-black">
              <div className="grid gap-6">
                {[
                  { icon: Shield, label: '$50B+ Total Settlements', color: 'bg-bauhaus-red' },
                  { icon: Users, label: '2M+ People Helped', color: 'bg-bauhaus-blue' },
                  { icon: Gavel, label: '500+ Active Cases', color: 'bg-bauhaus-yellow' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 + 0.5 }}
                  >
                    <div className={`p-3 ${item.color}`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-display font-medium text-gray-800">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}