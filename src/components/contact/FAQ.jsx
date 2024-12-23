import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "We offer chess programs for all age groups, starting from 6 years old. Our programs are tailored to different skill levels and age groups to ensure optimal learning outcomes."
    },
    {
      question: "How can schools partner with Elite Chess Ventures?",
      answer: "Schools can partner with us by reaching out through our contact form or directly via email. We'll schedule a meeting to discuss our various program options and create a customized plan for your institution."
    },
    {
      question: "Do you offer private coaching?",
      answer: "Yes, we offer private coaching sessions for individuals and small groups. Our experienced coaches can provide personalized training to help you achieve your chess goals."
    },
    {
      question: "How often do you organize tournaments?",
      answer: "We organize tournaments monthly at various levels, from beginner-friendly events to advanced competitions. Check our events calendar for upcoming tournaments."
    }
  ];

  return (
    <section className="py-20 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-red mb-4">Frequently Asked Questions</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Find answers to common questions about our programs and services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-brand-white rounded-lg shadow-md border border-brand-brown/20 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-brand-black">{faq.question}</h3>
                  <FaChevronDown
                    className={`text-brand-red transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-brand-brown">{faq.answer}</p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}