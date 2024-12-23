import { motion } from "framer-motion";
import ProgramCards from "../components/learn/ProgramCards";
import LearningPath from "../components/learn/LearningPath";
import Resources from "../components/learn/Resources";
import Curriculum from "../components/learn/Curriculum";
import Testimonials from "../components/learn/Testimonials";
import CallToAction from "../components/learn/CallToAction";
import Benefits from "../components/learn/Benefits";
import TeachingMethodology from "../components/learn/TeachingMethodology";

function Learn() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative h-[60vh] flex items-center justify-center bg-brand-black text-brand-white">
				<div className="absolute inset-0 bg-[url('/learn-hero.jpg')] bg-cover bg-center opacity-30"></div>
				<div className="container mx-auto px-6 relative z-10 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-4xl md:text-6xl font-bold mb-6">
						Learn Chess with Us
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-brand-brown max-w-2xl mx-auto">
						From beginners to advanced players, discover your path
						to chess mastery
					</motion.p>
				</div>
			</section>

			{/* Benefits of Learning Chess */}
			<Benefits />

			{/* Programs Overview */}
			<ProgramCards />

			{/* Teaching Methodology */}
			<TeachingMethodology />

			{/* Learning Path */}
			<LearningPath />

			{/* Curriculum Overview */}
			<Curriculum />

			{/* Resources */}
			<Resources />

			{/* Student Testimonials */}
			<Testimonials />

			{/* Call to Action */}
			<CallToAction />
		</div>
	);
}

export default Learn;
