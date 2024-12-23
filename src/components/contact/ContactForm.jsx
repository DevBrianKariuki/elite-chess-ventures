import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-brand-white p-8 rounded-lg shadow-lg border border-brand-brown/20"
    >
      <h2 className="text-2xl font-bold text-brand-red mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-brand-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-brand-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-brand-black mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-brand-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-brand-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-red text-brand-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}