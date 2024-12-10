import React from 'react';
import { FormSection } from './FormSection';
import { TextInput } from './TextInput';
import { useFormContext } from '../../contexts/FormContext';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export function AddressForm() {
  const { formData, updateFormData } = useFormContext();
  useScrollToTop();

  return (
    <FormSection title="Current Address">
      <div className="space-y-4">
        <TextInput
          label="Street Address"
          name="street"
          placeholder="123 Main St"
          required
          value={formData.street}
          onChange={(e) => updateFormData('street', e.target.value)}
        />
        <TextInput
          label="Apartment/Suite"
          name="apartment"
          placeholder="Apt 4B"
          value={formData.apartment}
          onChange={(e) => updateFormData('apartment', e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="City"
            name="city"
            placeholder="New York"
            required
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
          />
          <TextInput
            label="State"
            name="state"
            placeholder="NY"
            required
            value={formData.state}
            onChange={(e) => updateFormData('state', e.target.value)}
          />
        </div>
        <TextInput
          label="ZIP Code"
          name="zipCode"
          placeholder="10001"
          required
          value={formData.zipCode}
          onChange={(e) => updateFormData('zipCode', e.target.value)}
        />
      </div>
    </FormSection>
  );
}