import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Chess Journey?
          </h2>
          <p className="text-brand-brown text-lg mb-8">
            Join Elite Chess Ventures today and become part of Africa's growing chess community.
            Whether you're a beginner or an experienced player, we have programs tailored for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/programs"
              className="bg-brand-red text-brand-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Explore Programs
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-brand-brown text-brand-brown px-8 py-3 rounded-md hover:bg-brand-brown hover:text-brand-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}