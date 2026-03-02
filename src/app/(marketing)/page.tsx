'use client';

import React from 'react';
import Link from 'next/link';
import { School, User, Trophy, TrendingUp, ArrowRight, Award, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Counter from '@/components/ui/Counter';
import TypewriterText from '@/components/ui/TypewriterText';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function HomePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section - Compact */}
            <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-5 leading-tight min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex items-center justify-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <TypewriterText
                                texts={[
                                    "Building Kenya's Next Generation of Strategic Thinkers",
                                    "Empowering Young Minds Through Chess Excellence",
                                    "Where Every Move Shapes Tomorrow's Leaders",
                                    "Transforming Students Into Master Strategists"
                                ]}
                                displayDuration={4000}
                                highlightWords={['Strategic', 'Chess', 'Leaders', 'Strategists', 'Kenya', 'Excellence', 'Tomorrow']}
                            />
                        </motion.div>

                        <motion.p
                            className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Professional chess coaching programs for schools and students across Kenya.
                            Develop critical thinking, problem-solving, and confidence.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link
                                href="/contact"
                                className="bg-red-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-red-700 hover:shadow-red transition-all duration-300 text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Book Free Consultation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/programs"
                                className="bg-transparent text-red-600 font-semibold px-7 py-3 rounded-lg border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 text-sm w-full sm:w-auto inline-flex items-center justify-center"
                            >
                                Explore Programs
                            </Link>
                        </motion.div>

                        {/* Compact Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                        >
                            {[
                                { label: 'Schools', value: 50, suffix: '+' },
                                { label: 'Students', value: 5000, suffix: '+' },
                                { label: 'Tournaments', value: 100, suffix: '+' },
                                { label: 'Success Rate', value: 95, suffix: '%' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    variants={fadeInUp}
                                    custom={index}
                                >
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                    <div className="text-xs text-slate-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Programs Overview - Compact Grid */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative">
                <div className="container">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-3">
                            Our <span className="text-red-600">Programs</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                            Comprehensive chess education tailored to your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10">
                        {[
                            {
                                icon: School,
                                title: 'School Programs',
                                description: 'Integrated chess curriculum for schools with professional coaches and materials.',
                                link: '/programs#school',
                            },
                            {
                                icon: User,
                                title: 'Private Coaching',
                                description: 'One-on-one personalized coaching for all skill levels and ages.',
                                link: '/programs#private',
                            },
                            {
                                icon: Trophy,
                                title: 'Tournaments',
                                description: 'Full-service tournament organization and participation opportunities.',
                                link: '/tournaments',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Mentorship',
                                description: 'Advanced training for competitive players and serious students.',
                                link: '/programs#mentorship',
                            },
                        ].map((program, index) => {
                            const Icon = program.icon;
                            return (
                                <motion.div
                                    key={program.title}
                                    variants={fadeInUp}
                                    custom={index}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                >
                                    <Link
                                        href={program.link}
                                        className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-red-600 hover:shadow-md transition-all duration-300 block h-full"
                                    >
                                        <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                                            <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                                            {program.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                            {program.description}
                                        </p>
                                        <span className="text-sm text-red-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Learn more <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Compact */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            className="text-center mb-10 md:mb-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-3">
                                Why <span className="text-red-600">Chess Matters</span>
                            </h2>
                            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                                More than a game—an investment in cognitive development
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {[
                                { title: 'Academic Excellence', stat: '32%', desc: 'improvement in math & problem-solving' },
                                { title: 'Cognitive Growth', stat: '85%', desc: 'students report better focus' },
                                { title: 'Life Skills', stat: '100%', desc: 'develop patience & resilience' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="bg-white rounded-lg p-6 text-center"
                                    variants={fadeInUp}
                                    custom={index}
                                    whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                                >
                                    <div className="font-accent font-bold text-3xl text-red-600 mb-2">
                                        {item.stat}
                                    </div>
                                    <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:gap-3 transition-all"
                            >
                                Learn more about our approach <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Achievements */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative overflow-hidden">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="text-center mb-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                                Our <span className="text-red-600">Impact</span>
                            </h2>
                            <p className="text-sm md:text-base text-slate-600">
                                Making a difference in the lives of young Kenyans
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {[
                                {
                                    icon: Award,
                                    title: 'National Recognition',
                                    desc: "Kenya's leading chess education provider, trusted by top schools nationwide"
                                },
                                {
                                    icon: Users,
                                    title: 'Community Impact',
                                    desc: 'Over 5,000 students trained, with 85% showing improved academic performance'
                                },
                                {
                                    icon: Target,
                                    title: 'Tournament Success',
                                    desc: 'Our students have won 50+ national championships and represented Kenya abroad'
                                }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-6 text-center"
                                        variants={fadeInUp}
                                        custom={index}
                                        whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                                    >
                                        <Icon className="w-10 h-10 text-red-600 mx-auto mb-3" />
                                        <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <Link
                                href="/success-stories"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:gap-3 transition-all"
                            >
                                Read success stories <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Compact */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-red-600 to-red-700">
                <div className="container">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            className="font-heading font-bold text-3xl md:text-4xl text-white mb-4"
                            variants={fadeInUp}
                        >
                            Ready to Get Started?
                        </motion.h2>
                        <motion.p
                            className="text-sm md:text-base text-red-50 mb-8 max-w-2xl mx-auto"
                            variants={fadeInUp}
                            custom={1}
                        >
                            Join thousands of students developing critical thinking skills and confidence through chess.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 justify-center"
                            variants={fadeInUp}
                            custom={2}
                        >
                            <Link
                                href="/contact"
                                className="bg-white text-red-600 font-semibold px-7 py-3 rounded-lg hover:bg-slate-50 transition-all duration-300 text-sm"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/programs"
                                className="bg-transparent text-white font-semibold px-7 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-red-600 transition-all duration-300 text-sm"
                            >
                                View All Programs
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
