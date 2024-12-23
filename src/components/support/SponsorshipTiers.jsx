import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChess, FaChessQueen, FaChessKing } from 'react-icons/fa';

export default function SponsorshipTiers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tiers = [
    {
      icon: <FaChess />,
      name: "Silver Sponsor",
      amount: "$500/year",
      benefits: [
        "Logo on our website",
        "Social media mentions",
        "Newsletter recognition",
        "Event invitations"
      ]
    },
    {
      icon: <FaChessQueen />,
      name: "Gold Sponsor",
      amount: "$1,000/year",
      benefits: [
        "All Silver benefits",
        "Tournament naming rights",
        "Press release mentions",
        "Quarterly impact reports"
      ]
    },
    {
      icon: <FaChessKing />,
      name: "Platinum Sponsor",
      amount: "$2,500/year",
      benefits: [
        "All Gold benefits",
        "School program branding",
        "Annual gala recognition",
        "Custom partnership options"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-red">Corporate Sponsorship</h2>
          <p className="text-brand-brown max-w-2xl mx-auto">
            Partner with us to make a lasting impact on chess education in Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-brand-red text-4xl mb-4">{tier.icon}</div>
              <h3 className="text-2xl font-semibold text-brand-black mb-2">{tier.name}</h3>
              <div className="text-xl font-bold text-brand-red mb-6">{tier.amount}</div>
              <ul className="space-y-3 mb-8">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-brand-brown">
                    <span className="mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-brand-red text-brand-white py-3 rounded-md hover:bg-opacity-90 transition-colors">
                Become a Sponsor
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}