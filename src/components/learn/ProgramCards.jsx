import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChessKnight, FaChessQueen, FaChessKing, FaChessPawn } from 'react-icons/fa';

export default function ProgramCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      icon: <FaChessPawn className="text-4xl" />,
      title: "Beginner's Program",
      description: "Master the basics of chess, piece movements, and fundamental strategies.",
      features: ["Basic rules and movements", "Simple tactics", "Opening principles"],
      duration: "3 months",
      level: "Beginner"
    },
    {
      icon: <FaChessKnight className="text-4xl" />,
      title: "Intermediate Course",
      description: "Develop tactical awareness and positional understanding.",
      features: ["Advanced tactics", "Strategic planning", "Endgame techniques"],
      duration: "6 months",
      level: "Intermediate"
    },
    {
      icon: <FaChessQueen className="text-4xl" />,
      title: "Advanced Training",
      description: "Refine your game with complex strategies and tournament preparation.",
      features: ["Complex combinations", "Advanced openings", "Tournament prep"],
      duration: "12 months",
      level: "Advanced"
    },
    {
      icon: <FaChessKing className="text-4xl" />,
      title: "Elite Program",
      description: "Personalized coaching for competitive players aiming for excellence.",
      features: ["One-on-one coaching", "Custom study plans", "Competition focus"],
      duration: "Flexible",
      level: "Expert"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Our Programs</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Choose the program that best matches your current skill level and chess aspirations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg border border-brand-brown/20 hover:border-brand-red transition-colors"
            >
              <div className="text-brand-red mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-brand-black mb-2">{program.title}</h3>
              <p className="text-brand-brown mb-4">{program.description}</p>
              <ul className="space-y-2 mb-4">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="text-brand-black flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between text-sm text-brand-brown">
                <span>Duration: {program.duration}</span>
                <span>Level: {program.level}</span>
              </div>
              <button className="w-full mt-4 bg-brand-red text-brand-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}