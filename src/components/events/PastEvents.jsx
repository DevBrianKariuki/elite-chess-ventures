import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EventCard from './EventCard';

export default function PastEvents() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Kenya National Chess Championship 2023",
      date: "December 2023",
      location: "Nairobi",
      time: "9:00 AM - 6:00 PM",
      participants: "250+ players",
      category: "Championship",
      image: "/events/past-national-2023.jpg",
      winner: "GM David Karanja",
      highlight: "Record-breaking participation"
    },
    {
      title: "East African School Chess Tournament",
      date: "October 2023",
      location: "Mombasa",
      time: "8:00 AM - 5:00 PM",
      participants: "300+ students",
      category: "Regional",
      image: "/events/past-school-2023.jpg",
      winner: "Sunrise Academy Team",
      highlight: "International participation"
    },
    {
      title: "Nairobi Open Chess Championship",
      date: "August 2023",
      location: "Westlands",
      time: "9:00 AM - 7:00 PM",
      participants: "180+ players",
      category: "Open",
      image: "/events/past-open-2023.jpg",
      winner: "IM Sarah Wanjiku",
      highlight: "First female champion"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Past Events</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Relive the moments from our previous tournaments and celebrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}