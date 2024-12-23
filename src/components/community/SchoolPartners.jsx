import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSchool, FaChessBoard, FaTrophy, FaUsers } from 'react-icons/fa';

export default function SchoolPartners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: "Sunrise Academy",
      location: "Nairobi",
      students: "200+",
      achievements: "Regional Champions 2023"
    },
    {
      name: "Victory School",
      location: "Mombasa",
      students: "150+",
      achievements: "Most Improved Program 2023"
    },
    {
      name: "Excel High School",
      location: "Kisumu",
      students: "180+",
      achievements: "National Finalists 2023"
    },
    {
      name: "Pioneer Academy",
      location: "Nakuru",
      students: "120+",
      achievements: "Best New Program 2023"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Partner Schools</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Our network of partner schools is growing, bringing chess education to more students every year
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg border border-brand-brown/20"
            >
              <h3 className="text-xl font-semibold text-brand-red mb-4">{partner.name}</h3>
              <div className="space-y-2 text-brand-brown">
                <p className="flex items-center">
                  <FaSchool className="mr-2" />
                  {partner.location}
                </p>
                <p className="flex items-center">
                  <FaUsers className="mr-2" />
                  {partner.students} Students
                </p>
                <p className="flex items-center">
                  <FaTrophy className="mr-2" />
                  {partner.achievements}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}