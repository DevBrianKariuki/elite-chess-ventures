import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LearningPath() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      title: "Foundation",
      description: "Learn the basics of chess, piece movements, and fundamental rules",
      duration: "1-2 months"
    },
    {
      title: "Tactical Awareness",
      description: "Master basic tactics, patterns, and combinations",
      duration: "2-3 months"
    },
    {
      title: "Strategic Understanding",
      description: "Develop positional play and long-term planning",
      duration: "3-4 months"
    },
    {
      title: "Advanced Concepts",
      description: "Study complex positions, advanced endgames, and opening theory",
      duration: "4-6 months"
    },
    {
      title: "Tournament Ready",
      description: "Prepare for competitive play with tournament strategies",
      duration: "Ongoing"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Your Learning Path</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Follow our structured learning path to progress from beginner to advanced player
          </p>
        </motion.div>

        <div className="relative">
          {/* Path line - hidden on mobile, shown on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-red/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Mobile dot indicator */}
              <div className="md:hidden absolute left-0 top-0 w-4 h-4 bg-brand-red rounded-full -translate-x-1/2" />
              
              {/* Content wrapper */}
              <div className="w-full md:w-5/12" />
              
              {/* Center dot - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-red rounded-full" />
              
              {/* Content box */}
              <div className="w-full md:w-5/12 p-6 bg-brand-white rounded-lg shadow-md ml-6 md:ml-0">
                <div className="flex items-center mb-2">
                  <span className="inline-block w-8 h-8 rounded-full bg-brand-red text-white text-sm flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-brand-red">{step.title}</h3>
                </div>
                <p className="text-brand-black mb-2">{step.description}</p>
                <span className="text-sm text-brand-brown">Duration: {step.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}