import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaVideo, FaChessBoard, FaPuzzlePiece } from 'react-icons/fa';

export default function Resources() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resources = [
    {
      icon: <FaBook />,
      title: "Study Materials",
      items: [
        "Comprehensive workbooks",
        "Opening repertoire guides",
        "Endgame manuals",
        "Strategy guides"
      ]
    },
    {
      icon: <FaVideo />,
      title: "Video Lessons",
      items: [
        "Recorded lectures",
        "Game analysis",
        "Tournament highlights",
        "Expert interviews"
      ]
    },
    {
      icon: <FaChessBoard />,
      title: "Practice Tools",
      items: [
        "Online chess platform",
        "Analysis board",
        "Game database",
        "Position trainer"
      ]
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Training Exercises",
      items: [
        "Tactical puzzles",
        "Strategic exercises",
        "Endgame studies",
        "Opening drills"
      ]
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Learning Resources</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Access our comprehensive collection of learning materials and tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-6 rounded-lg shadow-lg border border-brand-brown/20"
            >
              <div className="text-brand-red text-3xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold text-brand-black mb-4">{resource.title}</h3>
              <ul className="space-y-2">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="text-brand-brown flex items-center">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}