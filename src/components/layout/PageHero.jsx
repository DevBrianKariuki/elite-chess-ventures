import { motion } from 'framer-motion';
import { photo3 } from '../../assets';

export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-brand-black text-brand-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${photo3})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-brand-brown"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}