import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EventCard from './EventCard';

export default function UpcomingTournaments() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tournaments = [
    {
      title: "National School Chess Championship",
      date: "June 15-17, 2024",
      location: "Nairobi International Convention Centre",
      time: "9:00 AM - 5:00 PM",
      category: "Under 18",
      participants: "200+ players",
      prize: "Ksh. 500,000 prize pool",
      image: "/events/national-championship.jpg"
    },
    {
      title: "Elite Chess Open Tournament",
      date: "July 8-10, 2024",
      location: "Sarova Stanley Hotel",
      time: "8:30 AM - 6:00 PM",
      category: "Open",
      participants: "150+ players",
      prize: "Ksh. 300,000 prize pool",
      image: "/events/elite-open.jpg"
    },
    {
      title: "Junior Chess Championship",
      date: "August 5-6, 2024",
      location: "Kasarani Indoor Arena",
      time: "9:00 AM - 4:00 PM",
      category: "Under 14",
      participants: "180+ players",
      prize: "Ksh. 200,000 prize pool",
      image: "/events/junior-championship.jpg"
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
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Upcoming Tournaments</h2>
          <p className="text-brand-black max-w-2xl mx-auto">
            Register for upcoming tournaments and test your skills against the best
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <EventCard key={index} event={tournament} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}