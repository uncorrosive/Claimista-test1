import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PersonalInfoForm } from './PersonalInfoForm';
import { AddressForm } from './AddressForm';
import { EmploymentForm } from './EmploymentForm';
import { AdditionalInfoForm } from './AdditionalInfoForm';
import { LifestyleForm } from './LifestyleForm';
import { ContactForm } from './ContactForm';
import confetti from 'canvas-confetti';
import { useFormContext } from '../../contexts/FormContext';
import { submitFormData } from '../../lib/services/formService';

interface NotificationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationForm({ isOpen, onClose }: NotificationFormProps) {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { formData, setHasSubmitted } = useFormContext();
  const totalSteps = 6;

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
      colors: ['#FF4B4B', '#4B4BFF', '#FFD600']
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < totalSteps) {
      setStep(step + 1);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await submitFormData(formData);
      setHasSubmitted(true);
      triggerConfetti();
      setTimeout(() => {
        onClose();
        setStep(1);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white border-2 border-black max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content"
          >
            <div className="sticky top-0 bg-white p-4 border-b-2 border-black flex justify-between items-center z-10">
              <div>
                <h2 className="font-display text-2xl font-bold">Tell us about yourself! 🌟</h2>
                <div className="w-full bg-gray-200 h-2 mt-2">
                  <motion.div
                    className="h-full bg-bauhaus-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              {step === 1 && <PersonalInfoForm />}
              {step === 2 && <AddressForm />}
              {step === 3 && <EmploymentForm />}
              {step === 4 && <AdditionalInfoForm />}
              {step === 5 && <LifestyleForm />}
              {step === 6 && <ContactForm />}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border-2 border-black font-display hover:bg-gray-100"
                    disabled={isSubmitting}
                  >
                    Back
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-primary ml-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    step === totalSteps ? 'Submit ✨' : 'Next →'
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}