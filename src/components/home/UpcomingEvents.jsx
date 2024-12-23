import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function UpcomingEvents() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "National School Chess Championship",
      date: "June 15-17, 2024",
      location: "Nairobi International Convention Centre",
      time: "9:00 AM - 5:00 PM",
      category: "Tournament"
    },
    {
      title: "Chess Strategy Workshop",
      date: "May 25, 2024",
      location: "Elite Chess Academy, Westlands",
      time: "2:00 PM - 4:00 PM",
      category: "Workshop"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-brown/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-red mb-4">Upcoming Events</h2>
          <p className="text-brand-black">Join us at our upcoming tournaments and workshops</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-brand-white p-6 rounded-lg shadow-md border border-brand-brown/20"
            >
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-brand-red text-brand-white mb-4">
                {event.category}
              </span>
              <h3 className="text-xl font-semibold text-brand-black mb-4">{event.title}</h3>
              <div className="space-y-2 text-brand-brown">
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{event.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="/events"
            className="inline-block bg-brand-red text-brand-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            View All Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}