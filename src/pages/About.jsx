import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import TeamMember from "../components/about/TeamMember";
import Timeline from "../components/about/Timeline";
import Vision from "../components/about/Vision";
import { danielPhoto, brianPhoto, gloryPhoto, hopePhoto, zionPhoto, newtonPhoto } from "../assets"; // Import the photos from the index file

function About() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div>
			{/* Hero Section */}
			<section className="relative h-[60vh] flex items-center justify-center bg-brand-black text-brand-white">
				<div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-30"></div>
				<div className="container mx-auto px-6 relative z-10 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-4xl md:text-6xl font-bold mb-6">
						Our Story
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-brand-brown max-w-2xl mx-auto">
						Building Africa's next generation of strategic thinkers
						through the royal game of chess
					</motion.p>
				</div>
			</section>

			{/* Vision & Mission Section */}
			<Vision />

			{/* Our Journey Timeline */}
			<Timeline />

			{/* Team Section */}
			<section ref={ref} className="py-20 bg-brand-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4 text-brand-red">
							Meet Our Team
						</h2>
						<p className="text-brand-black max-w-2xl mx-auto">
							Our dedicated team of chess professionals and
							educators are committed to nurturing the next
							generation of strategic thinkers.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<TeamMember
							name="Daniel Wangari"
							role="Founder"
							image={danielPhoto} // Use the imported photo
							description="International Master with 15+ years of coaching experience"
						/>
						<TeamMember
							name="Brian Kariuki"
							role="Tournament Director"
							image={brianPhoto} // Use the imported photo
							description="FIDE Arbiter and event management expert"
						/>
						<TeamMember
							name="Shekinnah Glory"
							role="Social Media Manager & Coach"
							image={gloryPhoto} // Use the imported photo
							description="FIDE Arbiter and event management expert"
						/>
						<TeamMember
							name="Hope Hilda Odari"
							role="Coach & Chief Arbiter"
							image={hopePhoto} // Use the imported photo
							description="FIDE Arbiter and event management expert"
						/>
						<TeamMember
							name="Newton Githaiga"
							role="Operations Manager & Coach"
							image={newtonPhoto} // Use the imported photoimage={gloryPhoto} // Use the imported photo
							description="Former national champion and curriculum development specialist"
						/>
						<TeamMember
							name="Zion Makori"
							role="Coach & Chief Arbiter"
							image={zionPhoto} // Use the imported photo
							description="FIDE Arbiter and event management expert"
						/>
					</div>
				</div>
			</section>

			{/* Impact Section */}
			<section className="py-20 bg-brand-brown/10">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4 text-brand-red">
							Our Impact
						</h2>
						<p className="text-brand-black max-w-2xl mx-auto mb-12">
							Since our founding in 2021, we've made significant
							strides in promoting chess across Africa.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								metric: 50,
								label: "Partner Schools",
								description: "Across East Africa",
							},
							{
								metric: 10000,
								label: "Students Trained",
								description: "And counting",
							},
							{
								metric: 100,
								label: "Tournaments",
								description: "Organized successfully",
							},
							{
								metric: 25,
								label: "National Champions",
								description: "Produced",
							},
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								className="bg-brand-white p-8 rounded-lg shadow-md text-center">
								<div className="text-4xl font-bold text-brand-red mb-2">
									<CountUp end={item.metric} duration={2} />
									{item.metric === 50 ? "+" : ""}
								</div>
								<div className="text-xl font-semibold text-brand-black mb-1">
									{item.label}
								</div>
								<div className="text-brand-brown">
									{item.description}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
