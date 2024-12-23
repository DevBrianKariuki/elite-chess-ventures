import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaMapMarkerAlt, FaClock, FaTrophy } from 'react-icons/fa';

export default function CommunityEvents() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Weekend Chess Workshop",
      date: "Every Saturday",
      location: "Various Locations",
      time: "10:00 AM - 12:00 PM",
      type: "Workshop"
    },
    {
      title: "Junior Chess League",
      date: "Monthly",
      location: "Partner Schools",
      time: "2:00 PM - 6:00 PM",
      type: "Tournament"
    },
    {
      title: "Chess in the Park",
      date: "Last Sunday",
      location: "Uhuru Park",
      time: "3:00 PM - 6:00 PM",
      type: "Community"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Community Events</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Regular events to keep our chess community engaged and growing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg border border-brand-brown/20"
            >
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-brand-red text-brand-white mb-4">
                {event.type}
              </span>
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
              </div>
              <button className="w-full mt-6 bg-brand-red text-brand-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                Register Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}