import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import LocationMap from '../components/contact/LocationMap';
import FAQ from '../components/contact/FAQ';

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-brand-black text-brand-white">
        <div className="absolute inset-0 bg-[url('/contact-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-brown max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <ContactForm />
            
            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <LocationMap />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}

export default Contact;