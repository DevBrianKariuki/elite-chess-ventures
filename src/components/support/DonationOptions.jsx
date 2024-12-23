import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChessKnight, FaGraduationCap, FaTrophy, FaChessBoard } from 'react-icons/fa';

export default function DonationOptions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const options = [
    {
      icon: <FaChessBoard />,
      title: "Equipment Fund",
      amount: "$25",
      description: "Provide chess sets and boards to a classroom",
      impact: "Enables 20 students to practice chess"
    },
    {
      icon: <FaChessKnight />,
      title: "Training Program",
      amount: "$50",
      description: "Sponsor chess training for underprivileged students",
      impact: "Supports one student for a month"
    },
    {
      icon: <FaGraduationCap />,
      title: "School Program",
      amount: "$100",
      description: "Help establish chess programs in schools",
      impact: "Launches a program in one new school"
    },
    {
      icon: <FaTrophy />,
      title: "Tournament Sponsor",
      amount: "$200",
      description: "Support local chess tournaments",
      impact: "Funds one school tournament"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Ways to Support</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Choose how you'd like to make a difference in young chess players' lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg border border-brand-brown/20 hover:border-brand-red transition-colors"
            >
              <div className="text-brand-red text-3xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold text-brand-black mb-2">{option.title}</h3>
              <div className="text-2xl font-bold text-brand-red mb-4">{option.amount}</div>
              <p className="text-brand-brown mb-4">{option.description}</p>
              <p className="text-sm text-brand-brown/80">{option.impact}</p>
              <button className="w-full mt-4 bg-brand-red text-brand-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                Donate Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}