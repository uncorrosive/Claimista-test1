import { addDocument } from '../firebase/firestore';

export interface FormData {
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

export const submitFormData = async (data: FormData) => {
  try {
    const timestamp = new Date().toISOString();
    const formSubmission = {
      ...data,
      submittedAt: timestamp,
      status: 'pending'
    };
    
    const docId = await addDocument('formSubmissions', formSubmission);
    return docId;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};