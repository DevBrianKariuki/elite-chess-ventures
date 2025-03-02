import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'Elite Chess Ventures was established with a vision to transform chess education in Africa.'
    },
    {
      year: '2022',
      title: 'First School Partnership',
      description: 'Launched our first school program with 5 pioneer schools in Nairobi.'
    },
    {
      year: '2023',
      title: 'Regional Expansion',
      description: 'Expanded to 25+ schools across Kenya and organized our first national tournament.'
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description: 'Launched online learning platform and reached 10,000+ students milestone.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-16 text-brand-red"
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-brown/30 hidden md:block" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-12 flex-col md:${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-5/12 mb-4 md:mb-0" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-red rounded-full" />
              <div className="w-full md:w-5/12 p-4 md:p-6 bg-brand-brown/10 rounded-lg">
                <div className="text-brand-red font-bold text-xl mb-2">{milestone.year}</div>
                <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                <p className="text-brand-brown">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}