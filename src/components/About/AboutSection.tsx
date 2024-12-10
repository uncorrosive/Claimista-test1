import React from 'react';
import { Scale, Shield, UserCheck } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">About Claimista</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Scale className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold mb-2">Justice Made Easy</h3>
            <p className="text-sm text-gray-600">
              We simplify the process of finding and joining class action lawsuits.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold mb-2">Secure & Private</h3>
            <p className="text-sm text-gray-600">
              Your information is protected with bank-level security.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-sm text-gray-600">
              Our team helps you through every step of the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}