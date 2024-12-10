import React, { createContext, useContext, useState, useEffect } from 'react';

interface FormState {
  // Personal Info
  fullName: string;
  age: string;
  gender: string;
  email: string;
  phone: string;

  // Address
  street: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;

  // Employment
  currentEmployer: string;
  currentPosition: string;
  currentStartDate: string;
  previousEmployer: string;
  previousPosition: string;
  previousStartDate: string;
  previousEndDate: string;

  // Additional Info
  prevAddress1: string;
  prevAddress2: string;
  university: string;
  fieldOfStudy: string;
  eduStartYear: string;
  eduEndYear: string;
  medicalHistory: string;
  shoppingHabits: string;
  vehicle: string;
  bank: string;
  accountTypes: string[];

  // Lifestyle
  shoppingStyle: string;
  interests: string;
  socialMedia: Array<{
    platform: string;
    handle: string;
  }>;

  // Contact
  preferredContact: string[];
  bestTime: string;
}

interface FormContextType {
  formData: FormState;
  updateFormData: (field: keyof FormState, value: any) => void;
  updateSocialMedia: (platform: string, handle: string) => void;
  hasSubmitted: boolean;
  setHasSubmitted: (value: boolean) => void;
  resetForm: () => void;
}

const defaultFormState: FormState = {
  fullName: '',
  age: '',
  gender: '',
  email: '',
  phone: '',
  street: '',
  apartment: '',
  city: '',
  state: '',
  zipCode: '',
  currentEmployer: '',
  currentPosition: '',
  currentStartDate: '',
  previousEmployer: '',
  previousPosition: '',
  previousStartDate: '',
  previousEndDate: '',
  prevAddress1: '',
  prevAddress2: '',
  university: '',
  fieldOfStudy: '',
  eduStartYear: '',
  eduEndYear: '',
  medicalHistory: '',
  shoppingHabits: '',
  vehicle: '',
  bank: '',
  accountTypes: [],
  shoppingStyle: '',
  interests: '',
  socialMedia: [],
  preferredContact: [],
  bestTime: '',
};

const FormContext = createContext<FormContextType | undefined>(undefined);

const STORAGE_KEY = 'claimista_form_data';
const SUBMITTED_KEY = 'claimista_form_submitted';

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormState>(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : defaultFormState;
  });

  const [hasSubmitted, setHasSubmitted] = useState(() => {
    return localStorage.getItem(SUBMITTED_KEY) === 'true';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem(SUBMITTED_KEY, hasSubmitted.toString());
  }, [hasSubmitted]);

  const updateFormData = (field: keyof FormState, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateSocialMedia = (platform: string, handle: string) => {
    setFormData(prev => {
      const existingMedia = prev.socialMedia.filter(sm => sm.platform !== platform);
      return {
        ...prev,
        socialMedia: handle 
          ? [...existingMedia, { platform, handle }]
          : existingMedia,
      };
    });
  };

  const resetForm = () => {
    setFormData(defaultFormState);
    setHasSubmitted(false);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SUBMITTED_KEY);
  };

  return (
    <FormContext.Provider value={{ 
      formData, 
      updateFormData, 
      updateSocialMedia, 
      hasSubmitted, 
      setHasSubmitted,
      resetForm 
    }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}