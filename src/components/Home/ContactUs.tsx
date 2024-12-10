import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactUs() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-24 px-4 bg-white relative" id="contact">
      {/* Bauhaus-inspired background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-bauhaus-blue/10 transform rotate-45 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-bauhaus-red/10 rounded-full -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-bauhaus-yellow/10 transform -translate-x-1/2 -translate-y-1/2"
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Get in Touch
          </h2>
          <div className="h-2 w-32 bg-bauhaus-red mx-auto mb-4" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about your potential claims? Our team is here to help you every step of the way.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gray-50 transform rotate-2" />
          <div className="relative bg-white border-2 border-black p-8">
            <h3 className="font-display text-2xl font-bold mb-8">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ContactItem
                  icon={Mail}
                  title="Email Us"
                  color="bg-bauhaus-red"
                >
                  <a href="mailto:support@claimista.com" className="text-blue-600 hover:text-blue-700">
                    support@claimista.com
                  </a>
                </ContactItem>
                
                <ContactItem
                  icon={Phone}
                  title="Call Us"
                  color="bg-bauhaus-blue"
                >
                  <a href="tel:339-933-6710" className="text-blue-600 hover:text-blue-700">
                    339-933-6710
                  </a>
                </ContactItem>
              </div>

              <div className="space-y-6">
                <ContactItem
                  icon={MapPin}
                  title="Office Location"
                  color="bg-bauhaus-yellow"
                >
                  <p className="text-gray-600">
                    University of Vermont<br />
                    Burlington, VT
                  </p>
                </ContactItem>

                <ContactItem
                  icon={Clock}
                  title="Business Hours"
                  color="bg-bauhaus-primary"
                >
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 11:00 PM EST<br />
                    Saturday: 10:00 AM - 2:00 PM EST
                  </p>
                </ContactItem>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ 
  icon: Icon, 
  title, 
  color, 
  children 
}: { 
  icon: React.ElementType;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className={`${color} p-3 flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-display font-bold mb-2">{title}</h4>
        {children}
      </div>
    </div>
  );
}