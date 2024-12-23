import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function EventRegistration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-red">Event Registration</h2>
            <p className="text-brand-brown">
              Register for upcoming tournaments and secure your spot
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="event" className="block text-sm font-medium text-brand-brown mb-2">
                Select Event
              </label>
              <select
                id="event"
                className="w-full px-4 py-2 bg-brand-white text-brand-black rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                <option>National School Chess Championship</option>
                <option>Elite Chess Open Tournament</option>
                <option>Junior Chess Championship</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-brown mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-brand-white text-brand-black rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-brown mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-brand-white text-brand-black rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-brown mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 bg-brand-white text-brand-black rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-brand-brown mb-2">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-2 bg-brand-white text-brand-black rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <option>Under 14</option>
                  <option>Under 18</option>
                  <option>Open</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red text-brand-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Register Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}