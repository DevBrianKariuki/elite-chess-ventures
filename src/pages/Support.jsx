import { motion } from 'framer-motion';
import DonationOptions from '../components/support/DonationOptions';
import ImpactMetrics from '../components/support/ImpactMetrics';
import SponsorshipTiers from '../components/support/SponsorshipTiers';
import SuccessStories from '../components/support/SuccessStories';
import CallToAction from '../components/support/CallToAction';

function Support() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-brand-black text-brand-white">
        <div className="absolute inset-0 bg-[url('/support-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Support Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-brown max-w-2xl mx-auto"
          >
            Help us empower young minds through chess education across Africa
          </motion.p>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Donation Options */}
      <DonationOptions />

      {/* Sponsorship Tiers */}
      <SponsorshipTiers />

      {/* Success Stories */}
      <SuccessStories />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}

export default Support;