import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react';

export default function TeachingMethodology() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const methodologies = [
    {
      title: "Interactive Learning",
      description: "Our interactive approach combines traditional teaching with modern technology",
      points: [
        "Live demonstrations on digital boards",
        "Interactive puzzles and exercises",
        "Real-time feedback and discussion",
        "Hands-on practice sessions"
      ]
    },
    {
      title: "Personalized Approach",
      description: "We adapt our teaching methods to match each student's learning style",
      points: [
        "Individual progress tracking",
        "Customized homework assignments",
        "Flexible learning pace",
        "One-on-one coaching sessions"
      ]
    },
    {
      title: "Practice-Based",
      description: "Regular practice and application of learned concepts",
      points: [
        "Weekly practice tournaments",
        "Position analysis workshops",
        "Game review sessions",
        "Online practice matches"
      ]
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Our Teaching Methodology</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            We employ proven teaching methods that ensure effective learning and steady progress
          </p>
        </motion.div>

        <Tab.Group>
          <Tab.List className="flex space-x-4 mb-8 justify-center overflow-x-auto px-4 snap-x snap-mandatory">
            {methodologies.map((method) => (
              <Tab
                key={method.title}
                className={({ selected }) =>
                  `px-6 py-2 rounded-md focus:outline-none transition-colors whitespace-nowrap snap-start ${
                    selected
                      ? 'bg-brand-red text-brand-white'
                      : 'bg-brand-brown/20 text-brand-brown hover:bg-brand-brown/30'
                  }`
                }
              >
                {method.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {methodologies.map((method, idx) => (
              <Tab.Panel key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="bg-brand-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-brand-red mb-4">{method.title}</h3>
                  <p className="text-brand-black mb-6">{method.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {method.points.map((point, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                        <p className="text-brand-brown">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}