import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function EventGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    {
      src: "/gallery/tournament-1.jpg",
      alt: "National Championship 2023",
      caption: "Intense matches at the National Championship"
    },
    {
      src: "/gallery/tournament-2.jpg",
      alt: "School Tournament",
      caption: "Young players showing remarkable skills"
    },
    {
      src: "/gallery/tournament-3.jpg",
      alt: "Award Ceremony",
      caption: "Celebrating our champions"
    },
    {
      src: "/gallery/tournament-4.jpg",
      alt: "Chess Workshop",
      caption: "Learning from grandmasters"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Event Gallery</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Moments captured from our previous events and tournaments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Event+Photo';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}