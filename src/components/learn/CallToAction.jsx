import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChessKnight, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaChessKnight />,
      title: "Expert Coaches",
      description: "Learn from experienced international players and certified coaches"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Flexible Schedule",
      description: "Choose from various time slots that fit your schedule"
    },
    {
      icon: <FaUserGraduate />,
      title: "Personalized Learning",
      description: "Get a customized learning plan based on your skill level"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-red">
            Start Your Chess Journey Today
          </h2>
          <p className="text-brand-brown text-lg max-w-2xl mx-auto">
            Join Elite Chess Ventures and become part of Africa's growing chess community.
            Whether you're a beginner or an experienced player, we have the perfect program for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-brand-red text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-brand-brown">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-red text-brand-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Enroll Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-brand-brown text-brand-brown px-8 py-3 rounded-md hover:bg-brand-brown hover:text-brand-white transition-colors"
            >
              Schedule a Free Trial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}