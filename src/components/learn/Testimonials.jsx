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
      quote: "The structured curriculum helped me progress from a complete beginner to winning my first school tournament.",
      author: "David Mwangi",
      role: "Student, Age 14",
      achievement: "School Champion 2023"
    },
    {
      quote: "Elite Chess Ventures' advanced program prepared me perfectly for national competitions. The coaches are world-class.",
      author: "Sarah Omondi",
      role: "National Junior Player",
      achievement: "U16 National Champion"
    },
    {
      quote: "The online resources and practice tools made it possible for me to study and improve even during school holidays.",
      author: "Michael Kimani",
      role: "High School Student",
      achievement: "Most Improved Player 2023"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Student Success Stories</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Hear from our students who have achieved remarkable progress through our programs
          </p>
        </motion.div>

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
              <p className="text-brand-black mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-brand-red">{testimonial.author}</p>
                <p className="text-brand-brown">{testimonial.role}</p>
                <p className="text-brand-brown/80 text-sm mt-1">{testimonial.achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}