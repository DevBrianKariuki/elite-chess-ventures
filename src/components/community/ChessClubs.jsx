import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChess, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';

export default function ChessClubs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clubs = [
    {
      name: "Nairobi Chess Club",
      location: "Central Business District",
      meetingTimes: "Saturdays, 2-6 PM",
      members: "50+ active members"
    },
    {
      name: "Westlands Chess Circle",
      location: "Westlands",
      meetingTimes: "Sundays, 3-7 PM",
      members: "35+ active members"
    },
    {
      name: "Junior Chess Academy",
      location: "Kilimani",
      meetingTimes: "Weekdays, 4-6 PM",
      members: "40+ young players"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-brown/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Local Chess Clubs</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Join one of our affiliated chess clubs to practice, learn, and connect with fellow enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-brand-red text-3xl mb-4">
                <FaChess />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-4">{club.name}</h3>
              <div className="space-y-2 text-brand-brown">
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  {club.location}
                </p>
                <p className="flex items-center">
                  <FaClock className="mr-2" />
                  {club.meetingTimes}
                </p>
                <p className="flex items-center">
                  <FaUsers className="mr-2" />
                  {club.members}
                </p>
              </div>
              <button className="w-full mt-6 bg-brand-red text-brand-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                Join Club
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}