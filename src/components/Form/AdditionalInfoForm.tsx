import React from 'react';
import { FormSection } from './FormSection';
import { TextInput } from './TextInput';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export function AdditionalInfoForm() {
  useScrollToTop();

  return (
    <FormSection title="Additional Information 📝">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Previous Addresses (Optional) 🏠
          </label>
          <div className="space-y-4">
            <TextInput
              label="Address 1"
              name="prevAddress1"
              placeholder="Where did you live before?"
            />
            <TextInput
              label="Address 2"
              name="prevAddress2"
              placeholder="Any other previous addresses?"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Education Background 🎓
          </label>
          <div className="space-y-4">
            <TextInput
              label="University/College"
              name="university"
              placeholder="Where did you study?"
            />
            <TextInput
              label="Field of Study"
              name="fieldOfStudy"
              placeholder="What did you study?"
            />
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                label="Start Year"
                name="eduStartYear"
                type="number"
                placeholder="2018"
              />
              <TextInput
                label="End Year"
                name="eduEndYear"
                type="number"
                placeholder="2022"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Medical History (Share only what you are comfortable with, we are not doctors) 🏥
          </label>
          <textarea
            className="form-input"
            rows={4}
            placeholder="Tell us about any relevant medical conditions or treatments..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Shopping Habits 🛒
          </label>
          <textarea
            className="form-input"
            rows={4}
            placeholder="What are your favorite stores? How often do you shop online?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Information 🚗
          </label>
          <TextInput
            label="Current Vehicle"
            name="vehicle"
            placeholder="Toyota Camry 2020"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Financial Information 💳
          </label>
          <div className="space-y-4">
            <TextInput
              label="Primary Bank"
              name="bank"
              placeholder="Which bank do you use?"
            />
            <div className="space-y-2">
              <p className="text-sm text-gray-600">What types of accounts do you have?</p>
              {['Checking', 'Savings', 'Credit Card', 'Investment', 'Loan'].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FormSection>
  );
}