'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Target, Eye, Award, Users, ArrowRight, Mail, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { getVisibleTeamMembers } from '@/lib/firebase/team';
import type { TeamMember } from '@/types/team';

export default function AboutPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                setLoading(true);
                const members = await getVisibleTeamMembers();
                setTeamMembers(members);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch team members:', err);
                setError('Failed to load team members. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                            About <span className="text-red-600">Elite Chess Ventures</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            Leading chess education in Kenya for over 15 years
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative">
                <div className="container max-w-4xl">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-6">
                        Our Story
                    </h2>
                    <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
                        <p>
                            Elite Chess Ventures was founded with a simple mission: to make professional chess coaching
                            accessible to every Kenyan student. What started as small chess clubs in Nairobi has grown
                            into Kenya's premier chess education organization, serving over 50 schools and 2,000 students annually.
                        </p>
                        <p>
                            Our founders recognized that chess is more than a game—it's a tool for developing critical
                            thinking, problem-solving skills, and confidence. Today, we continue to uphold this vision
                            by providing world-class coaching, tournament experiences, and mentorship programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white rounded-xl p-8">
                            <Target className="w-10 h-10 text-red-600 mb-4" />
                            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Our Mission</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                To empower Kenyan students with strategic thinking skills through professional chess
                                education, creating confident problem-solvers and lifelong learners.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-8">
                            <Eye className="w-10 h-10 text-red-600 mb-4" />
                            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Our Vision</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                To be Africa's leading chess education provider, recognized for developing world-class
                                players and contributing to academic excellence across the continent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative">
                <div className="container max-w-5xl">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-10 text-center">
                        Why Choose <span className="text-red-600">Elite Chess</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'FIDE-Certified Coaches',
                                description: 'All our coaches are certified by the World Chess Federation with proven teaching experience.',
                            },
                            {
                                title: 'Proven Track Record',
                                description: '15+ years of excellence with 5 national champions and 100+ tournament winners trained.',
                            },
                            {
                                title: 'Comprehensive Programs',
                                description: 'From beginners to competitive players, we offer tailored programs for every skill level.',
                            },
                            {
                                title: 'Modern Teaching Methods',
                                description: 'We combine traditional chess wisdom with modern technology and pedagogical approaches.',
                            },
                            {
                                title: 'Flexible Scheduling',
                                description: 'Programs designed to fit school timetables and family schedules with online options.',
                            },
                            {
                                title: 'All Equipment Provided',
                                description: 'Complete chess sets, boards, clocks, and learning materials included in every program.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 bg-red-600 rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container max-w-6xl">
                    <motion.div
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                            Our <span className="text-red-600">Team</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600">
                            Passionate chess professionals dedicated to your success
                        </p>
                    </motion.div>
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 animate-pulse">
                                    {/* Header Gradient Skeleton */}
                                    <div className="h-24 bg-slate-200"></div>

                                    {/* Avatar Skeleton */}
                                    <div className="relative px-6 -mt-12">
                                        <div className="w-24 h-24 bg-slate-300 rounded-2xl mx-auto shadow-xl ring-4 ring-white"></div>
                                    </div>

                                    {/* Content Skeleton */}
                                    <div className="p-6 pt-4 text-center">
                                        {/* Name */}
                                        <div className="h-6 bg-slate-200 rounded w-32 mx-auto mb-2"></div>

                                        {/* Role */}
                                        <div className="h-4 bg-slate-200 rounded w-24 mx-auto mb-2"></div>

                                        {/* Rating Badge */}
                                        <div className="h-6 w-20 bg-slate-200 rounded-full mx-auto mb-4"></div>

                                        {/* Bio */}
                                        <div className="space-y-2 mb-4">
                                            <div className="h-4 bg-slate-200 rounded w-full"></div>
                                            <div className="h-4 bg-slate-200 rounded w-full"></div>
                                            <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto"></div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center justify-center gap-4 mb-4">
                                            <div className="h-4 w-20 bg-slate-200 rounded"></div>
                                        </div>

                                        {/* Specialties */}
                                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                                            <div className="h-6 w-20 bg-slate-200 rounded"></div>
                                            <div className="h-6 w-24 bg-slate-200 rounded"></div>
                                            <div className="h-6 w-16 bg-slate-200 rounded"></div>
                                        </div>

                                        {/* Contact Button */}
                                        <div className="h-10 bg-slate-200 rounded-lg w-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center py-12">
                            <p className="text-red-600 mb-4">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="text-sm text-slate-600 hover:text-red-600 underline"
                            >
                                Retry
                            </button>
                        </div>
                    ) : teamMembers.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-slate-600">No team members available at the moment.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100"
                                >
                                    {/* Card Header with Gradient */}
                                    <div className="h-24 bg-gradient-to-br from-red-500 via-red-600 to-amber-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>

                                    {/* Avatar */}
                                    <div className="relative px-6 -mt-12">
                                        <motion.div
                                            className="w-24 h-24 bg-gradient-to-br from-red-100 to-amber-100 rounded-2xl mx-auto flex items-center justify-center shadow-xl ring-4 ring-white group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                                            whileHover={{ rotate: member.photo ? 0 : [0, -5, 5, -5, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {member.photo ? (
                                                <img
                                                    src={member.photo}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-5xl">{member.avatar || '👤'}</span>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 pt-4 text-center">
                                        <h3 className="font-heading font-bold text-xl text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-2 font-medium">{member.role}</p>

                                        {/* Rating Badge */}
                                        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-bold mb-4">
                                            <Trophy className="w-3.5 h-3.5" />
                                            {member.rating}
                                        </div>

                                        {/* Bio */}
                                        {member.bio && (
                                            <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                                                {member.bio}
                                            </p>
                                        )}

                                        {/* Stats */}
                                        <div className="flex items-center justify-center gap-4 mb-4 text-xs text-slate-500">
                                            {member.yearsOfExperience && (
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-3.5 h-3.5 text-red-500" />
                                                    <span className="font-semibold">{member.yearsOfExperience}+ years</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Specialties */}
                                        {member.specialties && member.specialties.length > 0 && (
                                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                                {member.specialties.slice(0, 3).map((specialty, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium hover:bg-red-100 hover:text-red-700 transition-colors"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Contact Button */}
                                        {member.email && (
                                            <motion.a
                                                href={`mailto:${member.email}`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 text-sm font-medium group/btn"
                                            >
                                                <Mail className="w-4 h-4" />
                                                <span>Contact</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative">
                <div className="container max-w-3xl text-center">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-4">
                        Ready to Join Us?
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 mb-8">
                        Experience the Elite Chess difference for yourself
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 text-sm"
                    >
                        Get Started Today <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
