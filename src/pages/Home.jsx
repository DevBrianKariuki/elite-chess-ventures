import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import UpcomingEvents from '../components/home/UpcomingEvents';
import CallToAction from '../components/home/CallToAction';
import { photo4, photo5, photo7 } from '../assets';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slides = [
    {
      image: photo4,
      title: "Elite Chess Ventures",
      subtitle: "Nurturing Strategic Minds Through Chess Across Africa"
    },
    {
      image: photo5,
      title: "Learn & Grow",
      subtitle: "Expert Coaching and Structured Learning Programs"
    },
    {
      image: photo7,
      title: "Join Our Community",
      subtitle: "Connect with Chess Enthusiasts Across Africa"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-brand-red text-white py-2 overflow-hidden relative z-50"
      >
        <motion.p 
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="text-sm md:text-base font-medium whitespace-nowrap"
        >
          🎉 Join our free chess lessons every Saturday from 10:00 AM - 3:00 PM! 
          <a href="/learn" className="underline ml-2 hover:text-brand-white/80">
            Learn more →
          </a>
        </motion.p>
      </motion.div>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1 }}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        ))}

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            {slides[currentSlide].title}
            {currentSlide === 0 && <span className="text-brand-red"> Ventures</span>}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="/learn" 
              className="bg-brand-red text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all hover:scale-105 transform"
            >
              Start Your Journey
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-black transition-all hover:scale-105 transform"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-brand-red scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <Stats />
      <Testimonials />
      <UpcomingEvents />
      <CallToAction />
    </div>
  );
}

export default Home;