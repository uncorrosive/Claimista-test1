import React from 'react';
import { FormSection } from './FormSection';
import { TextInput } from './TextInput';
import { motion } from 'framer-motion';
import { useFormContext } from '../../contexts/FormContext';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export function ContactForm() {
  const { formData, updateFormData } = useFormContext();
  useScrollToTop();

  const handleContactMethodChange = (method: string) => {
    const currentMethods = formData.preferredContact || [];
    const newMethods = currentMethods.includes(method)
      ? currentMethods.filter(m => m !== method)
      : [...currentMethods, method];
    updateFormData('preferredContact', newMethods);
  };

  return (
    <FormSection title="Almost there! Let's stay in touch ✨">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-blue-800 text-sm">
            You're amazing! Just a few more details and we'll be ready to help you claim what's yours! 🌟
          </p>
        </div>

        <TextInput
          label="Email Address 📧"
          name="email"
          type="email"
          placeholder="Where should we send updates?"
          required
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
        />

        <TextInput
          label="Phone Number 📱"
          name="phone"
          type="tel"
          placeholder="Best number to reach you"
          required
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How would you like to be contacted? ✉️
          </label>
          <div className="space-y-2">
            {['Email', 'Phone Call', 'Text Message'].map((method) => (
              <label key={method} className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  className="rounded text-blue-600"
                  checked={formData.preferredContact?.includes(method)}
                  onChange={() => handleContactMethodChange(method)}
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Best time to reach you? ⏰
          </label>
          <select 
            className="form-input"
            value={formData.bestTime}
            onChange={(e) => updateFormData('bestTime', e.target.value)}
          >
            <option value="">Choose a time...</option>
            <option value="morning">Morning (9am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 5pm)</option>
            <option value="evening">Evening (5pm - 8pm)</option>
          </select>
        </div>

        <div className="pt-4">
          <label className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1 rounded text-blue-600" required />
            <span className="text-sm text-gray-600">
              I agree to receive updates about potential settlements and understand that I can unsubscribe at any time! 🌈
            </span>
          </label>
        </div>
      </motion.div>
    </FormSection>
  );
}