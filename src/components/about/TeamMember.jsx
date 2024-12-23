import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function TeamMember({ name, role, image, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-brand-white p-6 rounded-lg shadow-md border border-brand-brown/20"
    >
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-lg"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400?text=Photo';
          }}
        />
      </div>
      <h3 className="text-xl font-semibold text-brand-red mb-1">{name}</h3>
      <p className="text-brand-black font-medium mb-2">{role}</p>
      <p className="text-brand-brown mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href="#" className="text-brand-brown hover:text-brand-red transition-colors">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="text-brand-brown hover:text-brand-red transition-colors">
          <FaTwitter size={20} />
        </a>
      </div>
    </motion.div>
  );
}