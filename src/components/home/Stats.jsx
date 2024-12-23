import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '50+', label: 'Partner Schools' },
    { number: '10K+', label: 'Students Trained' },
    { number: '100+', label: 'Tournaments Organized' },
    { number: '25+', label: 'Chess Champions' },
  ];

  return (
    <section ref={ref} className="py-16 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2">{stat.number}</div>
              <div className="text-brand-brown">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}