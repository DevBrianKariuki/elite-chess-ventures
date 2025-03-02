import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

export default function TeamMember({ name, role, image, description, moreDetails }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={toggleModal}
        className="bg-brand-white p-6 rounded-lg shadow-md border border-brand-brown/20 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative mb-4">
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover rounded-lg"
              // onError={(e) => {
              //   e.target.src = 'https://via.placeholder.com/400x400?text=Photo';
              // }}
            />
          </div>
          <h3 className="text-xl font-semibold text-brand-red mb-1">{name}</h3>
          <p className="text-brand-black font-medium mb-2">{role}</p>        
        </motion.div>
      </motion.div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={toggleModal} className="absolute top-2 right-2 text-brand-red">
              &times;
            </button>
            <h3 className="text-xl font-semibold text-brand-red mb-1">{name}</h3>
            <p className="text-brand-black font-medium mb-2">{role}</p>
            <p className="text-brand-brown mb-4">{description}</p>
            <p className="text-brand-brown mb-4">{moreDetails}</p>
          </div>
        </div>
      )}
    </>
  );
}