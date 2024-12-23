import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaSchool, FaTrophy, FaGraduationCap } from 'react-icons/fa';

export default function ImpactMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    {
      icon: <FaUsers />,
      number: "10,000+",
      label: "Students Impacted",
      description: "Young minds introduced to chess"
    },
    {
      icon: <FaSchool />,
      number: "50+",
      label: "Partner Schools",
      description: "Educational institutions reached"
    },
    {
      icon: <FaTrophy />,
      number: "100+",
      label: "Tournaments",
      description: "Competitive events organized"
    },
    {
      icon: <FaGraduationCap />,
      number: "25+",
      label: "Champions Produced",
      description: "National-level achievements"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Our Impact So Far</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Your support helps us create lasting change in African chess education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-brand-red text-3xl mb-4">{metric.icon}</div>
              <div className="text-3xl font-bold text-brand-red mb-2">{metric.number}</div>
              <div className="text-xl font-semibold text-brand-black mb-2">{metric.label}</div>
              <p className="text-brand-brown">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}