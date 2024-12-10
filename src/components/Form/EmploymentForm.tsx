import React from 'react';
import { FormSection } from './FormSection';
import { TextInput } from './TextInput';
import { useFormContext } from '../../contexts/FormContext';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export function EmploymentForm() {
  const { formData, updateFormData } = useFormContext();
  useScrollToTop();

  return (
    <FormSection title="Employment History">
      <div className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-700">Current Employment</h4>
          <TextInput
            label="Company Name"
            name="currentEmployer"
            placeholder="Company Inc."
            value={formData.currentEmployer}
            onChange={(e) => updateFormData('currentEmployer', e.target.value)}
          />
          <TextInput
            label="Position"
            name="currentPosition"
            placeholder="Software Engineer"
            value={formData.currentPosition}
            onChange={(e) => updateFormData('currentPosition', e.target.value)}
          />
          <TextInput
            label="Start Date"
            name="currentStartDate"
            type="date"
            value={formData.currentStartDate}
            onChange={(e) => updateFormData('currentStartDate', e.target.value)}
          />
        </div>
        
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-700">Previous Employment</h4>
          <TextInput
            label="Company Name"
            name="previousEmployer"
            placeholder="Previous Corp."
            value={formData.previousEmployer}
            onChange={(e) => updateFormData('previousEmployer', e.target.value)}
          />
          <TextInput
            label="Position"
            name="previousPosition"
            placeholder="Marketing Manager"
            value={formData.previousPosition}
            onChange={(e) => updateFormData('previousPosition', e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="Start Date"
              name="previousStartDate"
              type="date"
              value={formData.previousStartDate}
              onChange={(e) => updateFormData('previousStartDate', e.target.value)}
            />
            <TextInput
              label="End Date"
              name="previousEndDate"
              type="date"
              value={formData.previousEndDate}
              onChange={(e) => updateFormData('previousEndDate', e.target.value)}
            />
          </div>
        </div>
      </div>
    </FormSection>
  );
}