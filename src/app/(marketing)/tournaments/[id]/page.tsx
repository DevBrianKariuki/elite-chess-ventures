'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, MapPin, Clock, DollarSign, ArrowLeft, Trophy, Award, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { getTournamentById } from '@/lib/firebase/tournaments';
import type { Tournament } from '@/types/tournament';
import Image from 'next/image';

export default function TournamentDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const [tournament, setTournament] = useState<Tournament | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTournament = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const tournamentData = await getTournamentById(id);
                if (tournamentData) {
                    setTournament(tournamentData);
                    setError(null);
                } else {
                    setError('Tournament not found');
                }
            } catch (err) {
                console.error('Failed to fetch tournament:', err);
                setError('Failed to load tournament. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTournament();
    }, [id]);

    if (loading) {
        return (
            <main className="min-h-screen py-20 md:py-24 bg-slate-50">
                <div className="container max-w-4xl">
                    <div className="flex justify-center items-center py-12">
                        <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
                    </div>
                </div>
            </main>
        );
    }

    if (error || !tournament) {
        return (
            <main className="min-h-screen py-20 md:py-24 bg-slate-50">
                <div className="container max-w-4xl text-center">
                    <h1 className="font-heading font-bold text-3xl text-slate-900 mb-4">
                        {error === 'Tournament not found' ? 'Tournament Not Found' : 'Error Loading Tournament'}
                    </h1>
                    <p className="text-slate-600 mb-8">
                        {error || 'The tournament you\'re looking for doesn\'t exist.'}
                    </p>
                    <Link
                        href="/tournaments"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Tournaments
                    </Link>
                </div>
            </main>
        );
    }

    const startDate = new Date(tournament.date);
    const formattedDate = tournament.endDate
        ? `${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${new Date(tournament.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
        : startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const statusConfig = {
        open: { label: 'Open for Registration', color: 'bg-green-100 text-green-700', borderColor: 'border-green-200' },
        upcoming: { label: 'Registration Opens Soon', color: 'bg-blue-100 text-blue-700', borderColor: 'border-blue-200' },
        closed: { label: 'Registration Closed', color: 'bg-gray-100 text-gray-700', borderColor: 'border-gray-200' },
        completed: { label: 'Completed', color: 'bg-slate-100 text-slate-700', borderColor: 'border-slate-200' },
    };

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container max-w-4xl">
                    <Link
                        href="/tournaments"
                        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-red-600 transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to all tournaments
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <motion.span
                            className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold ${statusConfig[tournament.status].color}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Trophy className="w-4 h-4" />
                            {statusConfig[tournament.status].label}
                        </motion.span>
                        {tournament.isFeatured && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
                                <Award className="w-3 h-3" />
                                Featured
                            </span>
                        )}
                    </div>

                    <motion.h1
                        className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        {tournament.title}
                    </motion.h1>

                    {tournament.description && (
                        <motion.p
                            className="text-lg text-slate-600 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {tournament.description}
                        </motion.p>
                    )}
                </div>
            </motion.section>

            {/* Tournament Image */}
            {tournament.image && (
                <section className="py-0 bg-white">
                    <div className="container max-w-4xl">
                        <motion.div
                            className="rounded-xl overflow-hidden h-64 md:h-96 mb-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Image
                                src={tournament.image}
                                alt={tournament.title}
                                width={1200}
                                height={600}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+"
                            />
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Tournament Details */}
            <motion.section
                className="py-12 md:py-16 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Key Information */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">
                                    Tournament Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">Date</p>
                                            <p className="text-sm text-slate-600">{formattedDate}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">Location</p>
                                            <p className="text-sm text-slate-600">{tournament.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">Category</p>
                                            <p className="text-sm text-slate-600">{tournament.category}</p>
                                        </div>
                                    </div>
                                    {tournament.timeControl && (
                                        <div className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">Time Control</p>
                                                <p className="text-sm text-slate-600">{tournament.timeControl}</p>
                                            </div>
                                        </div>
                                    )}
                                    {tournament.format && (
                                        <div className="flex items-start gap-3">
                                            <Trophy className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">Format</p>
                                                <p className="text-sm text-slate-600">{tournament.format}</p>
                                            </div>
                                        </div>
                                    )}
                                    {tournament.entryFee && (
                                        <div className="flex items-start gap-3">
                                            <DollarSign className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">Entry Fee</p>
                                                <p className="text-sm text-slate-600">{tournament.entryFee}</p>
                                            </div>
                                        </div>
                                    )}
                                    {tournament.prizePool && (
                                        <div className="flex items-start gap-3">
                                            <Award className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">Prize Pool</p>
                                                <p className="text-sm text-slate-600">{tournament.prizePool}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Participation Progress */}
                            {tournament.maxParticipants && tournament.currentParticipants !== undefined && (
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
                                        Registration Status
                                    </h3>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-slate-700">Current Participants</span>
                                        <span className="text-lg font-bold text-red-600">
                                            {tournament.currentParticipants} / {tournament.maxParticipants}
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-3">
                                        <div
                                            className="bg-red-600 h-3 rounded-full transition-all duration-300"
                                            style={{ width: `${(tournament.currentParticipants / tournament.maxParticipants) * 100}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">
                                        {tournament.maxParticipants - tournament.currentParticipants} spots remaining
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar - Registration CTA */}
                        <div className="lg:col-span-1">
                            <div className={`bg-white border-2 ${statusConfig[tournament.status].borderColor} rounded-xl p-6 sticky top-24`}>
                                <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
                                    {tournament.status === 'open' ? 'Register Now' : 'Tournament Status'}
                                </h3>

                                {tournament.registrationDeadline && (
                                    <div className="mb-4 p-3 bg-amber-50 rounded-lg">
                                        <p className="text-xs font-semibold text-amber-900 mb-1">Registration Deadline</p>
                                        <p className="text-sm text-amber-700">
                                            {new Date(tournament.registrationDeadline).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                )}

                                {tournament.status === 'open' ? (
                                    <>
                                        <Link
                                            href="/contact"
                                            className="w-full bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 text-center block mb-3"
                                        >
                                            Register for Tournament
                                        </Link>
                                        {tournament.contact && (
                                            <p className="text-xs text-slate-500 text-center">
                                                Questions? Contact {tournament.contact}
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <div className="text-center">
                                        <p className="text-sm text-slate-600 mb-4">
                                            {tournament.status === 'upcoming' && 'Registration will open soon. Check back later!'}
                                            {tournament.status === 'closed' && 'Registration has closed for this tournament.'}
                                            {tournament.status === 'completed' && 'This tournament has ended.'}
                                        </p>
                                        <Link
                                            href="/tournaments"
                                            className="text-sm text-red-600 hover:text-red-700 font-medium"
                                        >
                                            View Other Tournaments
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
                <div className="container max-w-4xl">
                    <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-8 md:p-12 text-center">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                            Want to Organize Your Own Tournament?
                        </h2>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                            Let us help you organize a professional chess tournament for your school or organization.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
                        >
                            Request Tournament Quote
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
