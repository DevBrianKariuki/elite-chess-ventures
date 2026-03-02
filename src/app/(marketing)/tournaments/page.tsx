'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trophy, Calendar, Users, Award, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { getVisibleTournaments } from '@/lib/firebase/tournaments';
import type { Tournament } from '@/types/tournament';
import Image from 'next/image';

export default function TournamentsPage() {
    const [upcomingTournaments, setUpcomingTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                setLoading(true);
                const tournaments = await getVisibleTournaments();
                setUpcomingTournaments(tournaments);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch tournaments:', err);
                setError('Failed to load tournaments. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTournaments();
    }, []);
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                            Chess <span className="text-red-600">Tournaments</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            Compete, learn, and grow through organized competitive experiences
                        </p>
                    </div>
                </div>
            </section>

            {/* Tournament Stats */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { value: '100+', label: 'Tournaments Organized' },
                            { value: '5,000+', label: 'Total Participants' },
                            { value: '50+', label: 'School Events' },
                            { value: '12', label: 'Annual Championships' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="font-accent font-bold text-3xl text-red-600 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tournament Services */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container max-w-5xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                            Tournament <span className="text-red-600">Services</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600">
                            Professional event management from start to finish
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Trophy,
                                title: 'Tournament Organization',
                                description: 'Complete event planning and execution for schools, clubs, and corporate tournaments.',
                                features: ['Venue setup', 'Registration management', 'Pairing & scheduling', 'Awards ceremony'],
                            },
                            {
                                icon: Users,
                                title: 'FIDE-Rated Events',
                                description: 'Official FIDE-rated tournaments with international arbiters and proper documentation.',
                                features: ['Official rating points', 'FIDE-certified arbiters', 'Digital game records', 'Result reporting'],
                            },
                            {
                                icon: Calendar,
                                title: 'School Championships',
                                description: 'Inter-school tournaments designed to promote healthy competition and team building.',
                                features: ['Age-appropriate formats', 'Team & individual events', 'Educational focus', 'Parent engagement'],
                            },
                            {
                                icon: Award,
                                title: 'Corporate Events',
                                description: 'Chess tournaments and exhibitions for corporate team building and entertainment.',
                                features: ['Custom formats', 'Branded materials', 'Simultaneous exhibitions', 'Professional hosting'],
                            },
                        ].map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.title} className="bg-white rounded-xl p-6">
                                    <Icon className="w-10 h-10 text-red-600 mb-4" />
                                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                                                <span className="text-sm text-slate-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Upcoming Tournaments */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative">
                <div className="container max-w-5xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                            Upcoming <span className="text-red-600">Events</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600">
                            Register for our scheduled tournaments and competitions
                        </p>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-pulse">
                                    {/* Image skeleton */}
                                    <div className="h-48 bg-slate-200"></div>
                                    {/* Content skeleton */}
                                    <div className="p-5">
                                        <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                                        <div className="space-y-2 mb-4">
                                            <div className="h-4 bg-slate-200 rounded w-full"></div>
                                            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                                            <div className="h-4 bg-slate-200 rounded w-4/6"></div>
                                        </div>
                                        <div className="pt-3 border-t border-slate-100">
                                            <div className="h-4 bg-slate-200 rounded w-24"></div>
                                        </div>
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
                    ) : upcomingTournaments.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-slate-600">No upcoming tournaments at the moment. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcomingTournaments.map((tournament) => {
                                const startDate = new Date(tournament.date);
                                const formattedDate = startDate.toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                });

                                const statusConfig = {
                                    open: { label: 'Open', color: 'bg-green-100 text-green-700' },
                                    upcoming: { label: 'Soon', color: 'bg-blue-100 text-blue-700' },
                                    closed: { label: 'Closed', color: 'bg-gray-100 text-gray-700' },
                                    completed: { label: 'Completed', color: 'bg-slate-100 text-slate-700' },
                                };

                                return (
                                    <Link
                                        key={tournament.id}
                                        href={`/tournaments/${tournament.id}`}
                                        className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-red-200"
                                    >
                                        {/* Tournament Image */}
                                        <div className="relative h-48 bg-gradient-to-br from-red-50 to-amber-50 overflow-hidden">
                                            {tournament.image ? (
                                                <Image
                                                    src={tournament.image}
                                                    alt={tournament.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Trophy className="w-16 h-16 text-red-200" />
                                                </div>
                                            )}
                                            {/* Status Badge */}
                                            <div className="absolute top-3 right-3">
                                                <span className={`${statusConfig[tournament.status].color} text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm`}>
                                                    {statusConfig[tournament.status].label}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-5">
                                            <h3 className="font-heading font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                                                {tournament.title}
                                            </h3>

                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <Calendar className="w-4 h-4 text-red-600 flex-shrink-0" />
                                                    <span className="truncate">{formattedDate}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                                                    <span className="truncate">{tournament.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <Users className="w-4 h-4 text-red-600 flex-shrink-0" />
                                                    <span className="truncate">{tournament.category}</span>
                                                </div>
                                            </div>

                                            {/* View Details Button */}
                                            <div className="pt-3 border-t border-slate-100">
                                                <span className="text-sm font-semibold text-red-600 group-hover:text-red-700 inline-flex items-center gap-1">
                                                    View Details
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Host Your Own */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                            Host Your Own <span className="text-red-600">Tournament</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600 mb-8">
                            Let us organize a professional chess tournament for your school or organization
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 md:p-10">
                        <h3 className="font-heading font-bold text-xl text-slate-900 mb-6">
                            What's Included
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                'Event planning & coordination',
                                'Professional arbiters',
                                'Complete equipment setup',
                                'Online registration system',
                                'Swiss pairing software',
                                'Live results & standings',
                                'Professional photography',
                                'Awards & certificates',
                                'Post-event report',
                                'Marketing support',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 text-sm"
                            >
                                Request Tournament Quote <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
