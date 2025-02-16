import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+254 111 449 301'],
    },
    {
      icon: <FaWhatsapp />,
      title: 'Whatsapp',
      details: ['+254 111 449 301'],
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['elitechessventures@gmail.com'],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: ['Zulu Plaza', 'Opposite Wallets,Kincar Utawala', 'Nairobi'],
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="bg-brand-white p-8 rounded-lg shadow-lg border border-brand-brown/20">
        <h2 className="text-2xl font-bold text-brand-red mb-8">Contact Information</h2>
        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="text-brand-red text-xl mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-brand-black mb-2">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-brand-brown">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-brand-black p-8 rounded-lg shadow-lg text-brand-white">
        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
        <p className="text-brand-brown mb-6">
          Follow us on social media to stay updated with our latest events and announcements.
        </p>
        <div className="flex space-x-4">
          {['Facebook', 'Instagram'].map((platform, index) => (
            <a
              key={index}
              href="#"
              className="px-4 py-2 bg-brand-red rounded-md hover:bg-opacity-90 transition-colors"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}