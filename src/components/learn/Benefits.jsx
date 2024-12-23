import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaChartLine, FaLightbulb, FaUsers, FaTrophy, FaGraduationCap } from 'react-icons/fa';

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <FaBrain />,
      title: "Critical Thinking",
      description: "Develop advanced problem-solving skills and strategic thinking abilities"
    },
    {
      icon: <FaChartLine />,
      title: "Academic Performance",
      description: "Improve concentration, memory, and overall academic achievement"
    },
    {
      icon: <FaLightbulb />,
      title: "Decision Making",
      description: "Learn to make calculated decisions under pressure"
    },
    {
      icon: <FaUsers />,
      title: "Social Skills",
      description: "Build sportsmanship, respect, and interpersonal skills"
    },
    {
      icon: <FaTrophy />,
      title: "Competitive Edge",
      description: "Develop a winning mindset and competitive resilience"
    },
    {
      icon: <FaGraduationCap />,
      title: "Life Skills",
      description: "Master patience, planning, and goal-setting abilities"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Benefits of Learning Chess</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Chess is more than just a game - it's a powerful tool for developing essential life skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg border border-brand-brown/20 hover:border-brand-red transition-colors"
            >
              <div className="text-brand-red text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-brand-black mb-2">{benefit.title}</h3>
              <p className="text-brand-brown">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}