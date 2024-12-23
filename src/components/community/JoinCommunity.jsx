import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaChessBoard, FaTrophy } from 'react-icons/fa';

export default function JoinCommunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <FaUsers />,
      title: "Connect",
      description: "Join a vibrant community of chess enthusiasts"
    },
    {
      icon: <FaChessBoard />,
      title: "Learn",
      description: "Access exclusive training resources and workshops"
    },
    {
      icon: <FaTrophy />,
      title: "Compete",
      description: "Participate in regular tournaments and events"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Join Our Community</h2>
          <p className="text-brand-brown max-w-2xl mx-auto">
            Become part of Africa's growing chess community and take your game to the next level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-brand-red text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-brand-brown">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/contact"
            className="bg-brand-red text-brand-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-block"
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}