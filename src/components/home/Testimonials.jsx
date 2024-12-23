import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Elite Chess Ventures has transformed our school's approach to strategic thinking. The students are more focused and analytical in their studies.",
      author: "Sarah Kimani",
      role: "Principal, Sunrise Academy"
    },
    {
      quote: "My daughter's confidence has grown tremendously since joining the chess program. The coaches are exceptional and truly care about each student's progress.",
      author: "James Ochieng",
      role: "Parent"
    },
    {
      quote: "The structured approach to teaching chess has helped our students develop critical thinking skills that extend far beyond the chessboard.",
      author: "Michael Ndung'u",
      role: "Education Director"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12 text-brand-red"
        >
          What People Say About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-brand-white p-8 rounded-lg shadow-lg border border-brand-brown/20"
            >
              <FaQuoteLeft className="text-brand-red mb-4 text-2xl" />
              <p className="text-brand-black mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-brand-red">{testimonial.author}</p>
                <p className="text-brand-brown">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}