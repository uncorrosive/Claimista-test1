import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { FirebaseProvider } from './contexts/FirebaseContext';
import './index.css';

// Preload critical fonts
const fontPreloadLink = document.createElement('link');
fontPreloadLink.rel = 'preload';
fontPreloadLink.as = 'style';
fontPreloadLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
document.head.appendChild(fontPreloadLink);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </StrictMode>
);