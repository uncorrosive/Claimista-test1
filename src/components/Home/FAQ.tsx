import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What is a class action lawsuit?",
    answer: "A class action lawsuit is a legal proceeding where many individuals with similar claims against the same defendant join together in one lawsuit. This allows for more efficient resolution of common legal issues and helps individuals who might not be able to pursue legal action on their own."
  },
  {
    question: "How does Claimista find eligible lawsuits for me?",
    answer: "Our advanced AI system continuously scans thousands of active class action lawsuits and matches them against your profile information. We consider factors like your purchase history, employment, location, and other relevant details to identify suits where you may be eligible for compensation."
  },
  {
    question: "Is there a fee to use Claimista?",
    answer: "Claimista is completely free to use. We only receive a small commission if you successfully receive a settlement payment. There are no upfront costs or hidden fees."
  },
  {
    question: "How long does it take to receive settlement money?",
    answer: "Settlement timelines vary depending on the specific case. Some settlements are distributed within a few months, while others may take a year or more. We keep you updated throughout the process and notify you when your payment is ready."
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we take data security seriously. We use bank-level encryption to protect your information and never share your data without your explicit consent. Our platform complies with all relevant privacy laws and regulations."
  },
  {
    question: "What documentation do I need to provide?",
    answer: "Required documentation varies by case. Common documents include proof of purchase, employment records, or residence verification. Our system will guide you through exactly what's needed for each claim."
  }
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div 
      initial={false}
      className="border-2 border-black mb-4 relative group"
    >
      <motion.div 
        className="absolute inset-0 bg-bauhaus-yellow/10 transform -rotate-1 transition-transform group-hover:rotate-0"
        style={{ zIndex: -1 }}
      />
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left p-6 bg-white"
      >
        <span className="text-xl font-display font-bold">{question}</span>
        <div className={`w-8 h-8 flex items-center justify-center ${isOpen ? 'bg-bauhaus-red' : 'bg-bauhaus-blue'}`}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-white" />
          )}
        </div>
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-white"
      >
        <p className="p-6 pt-0 text-gray-600 border-t-2 border-black">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-white relative" id="faq">
      {/* Bauhaus decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-bauhaus-blue/10 transform rotate-45 translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-bauhaus-red/10 rounded-full translate-x-[-50%] translate-y-[50%]" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Frequently Asked Questions
          </h2>
          <div className="h-2 w-32 bg-bauhaus-yellow mx-auto mb-4" />
          <p className="text-xl text-gray-600">
            Everything you need to know about class action lawsuits and how Claimista works.
          </p>
        </motion.div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}