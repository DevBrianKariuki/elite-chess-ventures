import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBullseye, FaChessKnight, FaHandshake } from "react-icons/fa";

export default function Vision() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section ref={ref} className="py-20 bg-brand-white">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{[
						{
							icon: (
								<FaBullseye className="text-4xl text-brand-red mb-4" />
							),
							title: "Our Vision",
							description:
								"To be Africa's leading chess education institution, fostering critical thinking and strategic decision-making skills in young minds.",
						},
						{
							icon: (
								<FaChessKnight className="text-4xl text-brand-red mb-4" />
							),
							title: "Our Mission",
							description:
								"To promote chess culture in schools across Africa, making the game accessible to all while developing future champions and leaders.",
						},
						{
							icon: (
								<FaHandshake className="text-4xl text-brand-red mb-4" />
							),
							title: "Our Values",
							description:
								"Excellence, Innovation, Inclusivity, and Strategic Thinking guide everything we do at Elite Chess Ventures.",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="text-center p-6">
							<div className="flex justify-center">
								{item.icon}
							</div>
							<h3 className="text-xl font-semibold text-brand-black mb-4">
								{item.title}
							</h3>
							<p className="text-brand-brown">
								{item.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
