import { motion } from 'framer-motion';

export default function LocationMap() {
  return (
    <section className="py-20 bg-brand-brown/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-red mb-4">Visit Our Office</h2>
          <p className="text-brand-black">
            Find us at our headquarters in Westlands, Nairobi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193213776024!2d36.8062833!3d-1.2635385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17390a6c5c89%3A0x5f7f6c6e6d177e48!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1647887642324!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Elite Chess Ventures Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}