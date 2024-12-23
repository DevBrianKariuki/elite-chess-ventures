import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChess, FaGraduationCap, FaTrophy } from 'react-icons/fa';

export default function EventCalendar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      month: "June 2024",
      events: [
        {
          date: "15-17",
          title: "National School Chess Championship",
          type: "Tournament",
          icon: <FaTrophy />
        },
        {
          date: "22",
          title: "Beginners Workshop",
          type: "Workshop",
          icon: <FaGraduationCap />
        }
      ]
    },
    {
      month: "July 2024",
      events: [
        {
          date: "8-10",
          title: "Elite Chess Open Tournament",
          type: "Tournament",
          icon: <FaTrophy />
        },
        {
          date: "15",
          title: "Chess Strategy Masterclass",
          type: "Workshop",
          icon: <FaGraduationCap />
        }
      ]
    },
    {
      month: "August 2024",
      events: [
        {
          date: "5-6",
          title: "Junior Chess Championship",
          type: "Tournament",
          icon: <FaTrophy />
        },
        {
          date: "19",
          title: "Chess in the Park",
          type: "Community",
          icon: <FaChess />
        }
      ]
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Event Calendar</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Plan ahead with our comprehensive event schedule
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((month, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-brand-red mb-6">{month.month}</h3>
              <div className="space-y-4">
                {month.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex items-start space-x-4 p-4 bg-brand-brown/5 rounded-lg"
                  >
                    <div className="text-brand-red text-xl">{event.icon}</div>
                    <div>
                      <p className="font-semibold text-brand-black">{event.title}</p>
                      <p className="text-brand-brown text-sm">{event.date}</p>
                      <span className="inline-block mt-1 text-xs px-2 py-1 bg-brand-red/10 text-brand-red rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}