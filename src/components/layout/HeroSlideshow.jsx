import { useState, useEffect } from 'react';
import { photo4, photo5, photo7 } from '../../assets';

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: photo4,
      title: "Nurturing Strategic Minds Through Chess Across Africa",
      subtitle: "Empowering the next generation of strategic thinkers and chess champions"
    },
    {
      image: photo5,
      title: "Building Tomorrow's Chess Champions Today",
      subtitle: "Expert coaching, structured learning, and competitive opportunities"
    },
    {
      image: photo7,
      title: "Join Africa's Growing Chess Community",
      subtitle: "Connect, learn, and grow with passionate chess players across the continent"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-brand-brown"
            >
              {slide.subtitle}
            </motion.p>
          </div>
        </div>
      ))}
    </>
  );
}