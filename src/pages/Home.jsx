import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import UpcomingEvents from '../components/home/UpcomingEvents';
import CallToAction from '../components/home/CallToAction';

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-brand-black text-brand-white">
        <div className="absolute inset-0 bg-[url('/hero-chess.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Nurturing Strategic Minds Through Chess Across Africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-brand-brown"
          >
            Empowering the next generation of strategic thinkers and chess champions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <a href="#learn-more" className="bg-brand-red text-brand-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
              Learn More
            </a>
            <a href="/contact" className="bg-transparent border-2 border-brand-brown text-brand-brown px-8 py-3 rounded-md hover:bg-brand-brown hover:text-brand-white transition-colors">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section ref={ref} className="py-20 bg-brand-white" id="learn-more">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-brand-red">Welcome to Elite Chess Ventures</h2>
            <p className="text-brand-black max-w-2xl mx-auto">
              We are dedicated to promoting chess culture in schools across Africa,
              developing strategic thinking skills, and nurturing the next generation
              of chess champions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Chess Training',
                description: 'Structured programs for all skill levels',
                icon: '♟️',
              },
              {
                title: 'School Programs',
                description: 'Integrated chess education for schools',
                icon: '🏫',
              },
              {
                title: 'Tournaments',
                description: 'Regular competitions and events',
                icon: '🏆',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-brand-brown/10 p-8 rounded-lg text-center hover:bg-brand-brown/20 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-brand-red">{item.title}</h3>
                <p className="text-brand-black">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}

export default Home;