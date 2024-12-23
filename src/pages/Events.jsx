import { motion } from 'framer-motion';
import UpcomingTournaments from '../components/events/UpcomingTournaments';
import EventCalendar from '../components/events/EventCalendar';
import PastEvents from '../components/events/PastEvents';
import EventRegistration from '../components/events/EventRegistration';
import EventGallery from '../components/events/EventGallery';

function Events() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-brand-black text-brand-white">
        <div className="absolute inset-0 bg-[url('/events-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Chess Events & Tournaments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-brown max-w-2xl mx-auto"
          >
            Discover upcoming tournaments, workshops, and community events
          </motion.p>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <UpcomingTournaments />

      {/* Event Calendar */}
      <EventCalendar />

      {/* Past Events */}
      <PastEvents />

      {/* Event Registration */}
      <EventRegistration />

      {/* Event Gallery */}
      <EventGallery />
    </div>
  );
}

export default Events;