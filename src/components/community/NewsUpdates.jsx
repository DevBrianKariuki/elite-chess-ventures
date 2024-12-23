import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaUser } from 'react-icons/fa';

export default function NewsUpdates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const news = [
    {
      title: "Kenya Junior Chess Team Shines at African Championships",
      date: "March 15, 2024",
      author: "John Kamau",
      excerpt: "Our junior team brought home three gold medals from the African Youth Chess Championships..."
    },
    {
      title: "New Chess Program Launches in 10 More Schools",
      date: "March 10, 2024",
      author: "Sarah Mwangi",
      excerpt: "Elite Chess Ventures expands its reach with new school partnerships across Kenya..."
    },
    {
      title: "Upcoming National Chess Tournament Announced",
      date: "March 5, 2024",
      author: "David Omondi",
      excerpt: "Mark your calendars for the biggest chess event of the year, featuring players from all across the country..."
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Latest News</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Stay updated with the latest happenings in our chess community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-brand-black mb-4">{item.title}</h3>
              <div className="flex items-center space-x-4 text-brand-brown mb-4">
                <span className="flex items-center">
                  <FaCalendar className="mr-2" />
                  {item.date}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-2" />
                  {item.author}
                </span>
              </div>
              <p className="text-brand-brown mb-4">{item.excerpt}</p>
              <a
                href="#"
                className="text-brand-red hover:text-opacity-80 transition-colors"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}