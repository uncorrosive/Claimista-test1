import React from 'react';
import { FormSection } from './FormSection';
import { TextInput } from './TextInput';
import { useFormContext } from '../../contexts/FormContext';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export function PersonalInfoForm() {
  const { formData, updateFormData } = useFormContext();
  useScrollToTop();

  return (
    <FormSection title="Personal Information">
      <div className="space-y-4">
        <TextInput
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          required
          value={formData.fullName}
          onChange={(e) => updateFormData('fullName', e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Age"
            name="age"
            type="number"
            placeholder="30"
            required
            value={formData.age}
            onChange={(e) => updateFormData('age', e.target.value)}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
              value={formData.gender}
              onChange={(e) => updateFormData('gender', e.target.value)}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>
        </div>
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
        />
        <TextInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="(555) 555-5555"
          required
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
        />
      </div>
    </FormSection>
  );
}