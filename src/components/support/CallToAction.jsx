import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandHoldingHeart, FaHandshake, FaUsers } from 'react-icons/fa';

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ways = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Make a Donation",
      description: "Support our programs with a one-time or recurring donation"
    },
    {
      icon: <FaHandshake />,
      title: "Corporate Partnership",
      description: "Partner with us to make a lasting impact on chess education"
    },
    {
      icon: <FaUsers />,
      title: "Volunteer",
      description: "Share your skills and time to help our mission"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">
            Join Us in Making a Difference
          </h2>
          <p className="text-brand-black text-lg max-w-2xl mx-auto">
            Every contribution helps us expand our reach and impact more young lives through chess
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-brand-red text-3xl mb-4">{way.icon}</div>
              <h3 className="text-xl font-semibold text-brand-black mb-2">{way.title}</h3>
              <p className="text-brand-brown">{way.description}</p>
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
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}