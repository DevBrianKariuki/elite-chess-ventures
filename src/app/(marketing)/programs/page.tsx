import React from 'react';
import Link from 'next/link';
import { School, User, Trophy, TrendingUp, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';

export default function ProgramsPage() {
    const programs = [
        {
            id: 'school',
            icon: School,
            title: 'School Chess Programs',
            tagline: 'Comprehensive curriculum for educational institutions',
            description: 'Integrated chess programs designed to complement your school\'s academic objectives. We provide everything needed to establish a thriving chess culture.',
            features: [
                'FIDE-certified coaches',
                'All equipment & materials included',
                'Curriculum aligned with educational goals',
                'Flexible scheduling options',
                'Regular progress reports',
                'Inter-school tournament opportunities',
            ],
            pricing: 'From KES 15,000/term',
            cta: 'Request School Demo',
        },
        {
            id: 'private',
            icon: User,
            title: 'Private Chess Coaching',
            tagline: 'Personalized one-on-one instruction',
            description: 'Tailored coaching that adapts to your child\'s unique learning style, pace, and goals. Available for all ages and skill levels.',
            features: [
                'Customized learning plans',
                'Flexible location (home/online)',
                'Weekend & evening slots available',
                'Tournament preparation included',
                'Progress tracking portal',
                'Beginner to advanced levels',
            ],
            pricing: 'From KES 3,000/month',
            cta: 'Book Free Trial',
        },
        {
            id: 'tournaments',
            icon: Trophy,
            title: 'Tournament Organization',
            tagline: 'Professional event management services',
            description: 'End-to-end tournament organization for schools, clubs, and corporate events. We handle every detail from logistics to officiating.',
            features: [
                'FIDE-rated arbiters',
                'Full equipment provision',
                'Online registration system',
                'Live game streaming',
                'Professional photography',
                'Awards & certificates',
            ],
            pricing: 'Custom quotes available',
            cta: 'Plan Your Tournament',
        },
        {
            id: 'mentorship',
            icon: TrendingUp,
            title: 'Chess Mentorship Program',
            tagline: 'Elite training for competitive players',
            description: 'Intensive development program for serious players preparing for national and international competitions.',
            features: [
                'Grandmaster-level coaching',
                'Advanced tactical training',
                'Opening repertoire development',
                'Tournament psychology sessions',
                'Rating improvement strategies',
                'Career guidance & pathways',
            ],
            pricing: 'From KES 8,000/month',
            cta: 'Apply for Mentorship',
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                            Our <span className="text-red-600">Programs</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            Professional chess education tailored to your goals and skill level
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative">
                <div className="container max-w-6xl">
                    <div className="space-y-12 md:space-y-16">
                        {programs.map((program, index) => {
                            const Icon = program.icon;
                            return (
                                <div
                                    key={program.id}
                                    id={program.id}
                                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        } gap-8 lg:gap-12 items-center`}
                                >
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="bg-red-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                            <Icon className="w-7 h-7 text-red-600" />
                                        </div>
                                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                                            {program.title}
                                        </h2>
                                        <p className="text-sm text-red-600 font-semibold mb-4">
                                            {program.tagline}
                                        </p>
                                        <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                                            {program.description}
                                        </p>

                                        <ul className="space-y-2.5 mb-6">
                                            {program.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-slate-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                                            <div>
                                                <p className="text-xs text-slate-500 mb-1">Starting from</p>
                                                <p className="font-accent font-bold text-xl text-slate-900">
                                                    {program.pricing}
                                                </p>
                                            </div>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 text-sm"
                                        >
                                            {program.cta} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>

                                    {/* Visual */}
                                    <div className="flex-1">
                                        <div className="bg-slate-100 rounded-xl p-8 h-80 flex items-center justify-center">
                                            <Icon className="w-32 h-32 text-slate-300" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                            Simple <span className="text-red-600">3-Step Process</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600">
                            Getting started is easy and risk-free
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: '1', title: 'Book Consultation', desc: 'Free initial assessment and program discussion' },
                            { step: '2', title: 'Customize Plan', desc: 'We design a program tailored to your needs' },
                            { step: '3', title: 'Start Learning', desc: 'Begin your chess journey with expert guidance' },
                        ].map((item) => (
                            <div key={item.step} className="bg-white rounded-xl p-6 text-center">
                                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-accent font-bold text-xl mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container max-w-3xl text-center">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-4">
                        Ready to Choose Your Program?
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 mb-8">
                        Schedule a free consultation to discuss which program is right for you
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 text-sm"
                    >
                        <Calendar className="w-4 h-4" />
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
