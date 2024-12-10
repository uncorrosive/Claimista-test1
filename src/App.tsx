import React, { Suspense, lazy } from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Home/Hero';
import { NotificationForm } from './components/Form/NotificationForm';
import { motion } from 'framer-motion';
import { FormProvider } from './contexts/FormContext';
import { HeroSkeleton } from './components/Loading/HeroSkeleton';
import { FAQSkeleton } from './components/Loading/FAQSkeleton';
import { BauhausShapes } from './components/common/BauhausShapes';

// Lazy load components that are not immediately visible
const HowItWorks = lazy(() => import('./components/Home/HowItWorks').then(module => ({ default: module.HowItWorks })));
const FAQ = lazy(() => import('./components/Home/FAQ').then(module => ({ default: module.FAQ })));
const ContactUs = lazy(() => import('./components/Home/ContactUs').then(module => ({ default: module.ContactUs })));
const Footer = lazy(() => import('./components/Layout/Footer').then(module => ({ default: module.Footer })));

function App() {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <FormProvider>
      <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
        <BauhausShapes />
        
        <Header onGetNotified={() => setShowForm(true)} />
        
        <motion.main 
          className="flex-grow pt-16 pb-20 md:pb-0 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<HeroSkeleton />}>
            <Hero onGetNotified={() => setShowForm(true)} />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>}>
            <HowItWorks />
          </Suspense>

          <Suspense fallback={<FAQSkeleton />}>
            <FAQ />
          </Suspense>

          <Suspense fallback={null}>
            <ContactUs />
          </Suspense>
        </motion.main>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        <NotificationForm 
          isOpen={showForm} 
          onClose={() => setShowForm(false)} 
        />
      </div>
    </FormProvider>
  );
}

export default App;