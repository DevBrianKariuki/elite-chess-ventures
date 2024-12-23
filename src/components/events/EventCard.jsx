import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaClock, FaTrophy, FaUsers } from 'react-icons/fa';

export default function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-brand-white p-6 rounded-lg shadow-lg border border-brand-brown/20"
    >
      <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
        <img
          src={event.image || 'https://via.placeholder.com/400x300?text=Event+Photo'}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Event+Photo';
          }}
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium bg-brand-red text-brand-white">
          {event.category}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-brand-black mb-4">{event.title}</h3>
      <div className="space-y-2 text-brand-brown">
        <p className="flex items-center">
          <FaCalendar className="mr-2" />
          {event.date}
        </p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          {event.location}
        </p>
        <p className="flex items-center">
          <FaClock className="mr-2" />
          {event.time}
        </p>
        <p className="flex items-center">
          <FaUsers className="mr-2" />
          {event.participants}
        </p>
        {event.prize && (
          <p className="flex items-center">
            <FaTrophy className="mr-2" />
            {event.prize}
          </p>
        )}
      </div>
      <button className="w-full mt-6 bg-brand-red text-brand-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
        Register Now
      </button>
    </motion.div>
  );
}