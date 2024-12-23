import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

export default function SuccessStories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stories = [
    {
      quote: "Thanks to the scholarship program, I was able to receive professional chess training and went on to represent Kenya in international tournaments.",
      name: "John Kamau",
      role: "National Champion U16",
      image: "/success-stories/john.jpg"
    },
    {
      quote: "The equipment donation to our school sparked interest in chess among students. Now we have a thriving chess club with over 50 members.",
      name: "Sarah Mwangi",
      role: "School Chess Coordinator",
      image: "/success-stories/sarah.jpg"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Success Stories</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            See how your support transforms lives through chess education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-8 rounded-lg shadow-lg border border-brand-brown/20"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80x80?text=Photo';
                    }}
                  />
                </div>
                <div>
                  <FaQuoteLeft className="text-brand-red mb-4 text-xl" />
                  <p className="text-brand-black mb-4 italic">{story.quote}</p>
                  <div>
                    <p className="font-semibold text-brand-red">{story.name}</p>
                    <p className="text-brand-brown">{story.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}