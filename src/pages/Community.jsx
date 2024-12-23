import { motion } from 'framer-motion';
import SchoolPartners from '../components/community/SchoolPartners';
import ChessClubs from '../components/community/ChessClubs';
import CommunityEvents from '../components/community/CommunityEvents';
import NewsUpdates from '../components/community/NewsUpdates';
import JoinCommunity from '../components/community/JoinCommunity';

function Community() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-brand-black text-brand-white">
        <div className="absolute inset-0 bg-[url('/community-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Chess Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-brown max-w-2xl mx-auto"
          >
            Join a vibrant network of chess enthusiasts across Africa
          </motion.p>
        </div>
      </section>

      {/* School Partners Section */}
      <SchoolPartners />

      {/* Chess Clubs Section */}
      <ChessClubs />

      {/* Community Events Section */}
      <CommunityEvents />

      {/* News & Updates Section */}
      <NewsUpdates />

      {/* Join Community Section */}
      <JoinCommunity />
    </div>
  );
}

export default Community;