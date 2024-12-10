import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBFgeiWUdb8oJLcP3dJcrulG2R_Ge8vSBo",
  authDomain: "claimista.firebaseapp.com",
  projectId: "claimista",
  storageBucket: "claimista.firebasestorage.app",
  messagingSenderId: "704102532511",
  appId: "1:704102532511:web:55d00af0b542b1b40aa9aa",
  measurementId: "G-KR4MB8NTBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;