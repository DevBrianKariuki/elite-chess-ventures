import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react';

export default function Curriculum() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const levels = [
    {
      name: "Beginner",
      modules: [
        {
          title: "Chess Basics",
          topics: ["Piece movements", "Basic rules", "Chess notation", "Basic checkmates"]
        },
        {
          title: "Elementary Tactics",
          topics: ["Pins", "Forks", "Double attacks", "Basic combinations"]
        },
        {
          title: "Opening Principles",
          topics: ["Center control", "Development", "King safety", "Basic structures"]
        }
      ]
    },
    {
      name: "Intermediate",
      modules: [
        {
          title: "Advanced Tactics",
          topics: ["Complex combinations", "Sacrifices", "Attack patterns", "Defense techniques"]
        },
        {
          title: "Positional Play",
          topics: ["Pawn structures", "Piece placement", "Strategic planning", "Weaknesses"]
        },
        {
          title: "Endgame Theory",
          topics: ["Basic endings", "Pawn endgames", "Rook endings", "Technical positions"]
        }
      ]
    },
    {
      name: "Advanced",
      modules: [
        {
          title: "Complex Strategy",
          topics: ["Dynamic play", "Position evaluation", "Long-term planning", "Prophylaxis"]
        },
        {
          title: "Opening Theory",
          topics: ["Repertoire building", "Theory understanding", "Move order nuances", "Transpositions"]
        },
        {
          title: "Tournament Preparation",
          topics: ["Time management", "Psychology", "Physical preparation", "Competition strategies"]
        }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Curriculum Overview</h2>
          <p className="text-brand-brown max-w-2xl mx-auto">
            Explore our comprehensive curriculum designed for each skill level
          </p>
        </motion.div>

        <Tab.Group>
          <Tab.List className="flex space-x-4 mb-8 justify-center">
            {levels.map((level) => (
              <Tab
                key={level.name}
                className={({ selected }) =>
                  `px-6 py-2 rounded-md focus:outline-none transition-colors ${
                    selected
                      ? 'bg-brand-red text-brand-white'
                      : 'bg-brand-brown/20 text-brand-brown hover:bg-brand-brown/30'
                  }`
                }
              >
                {level.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {levels.map((level, idx) => (
              <Tab.Panel key={idx}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {level.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-brand-white p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold text-brand-red mb-4">{module.title}</h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="text-brand-brown flex items-center">
                            <span className="mr-2">•</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}