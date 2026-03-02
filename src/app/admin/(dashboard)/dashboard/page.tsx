'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trophy, FileText, Users, Calendar, TrendingUp, Plus } from 'lucide-react';
import { getAllTournaments } from '@/lib/firebase/tournaments';
import { getAllBlogs } from '@/lib/firebase/blogs';
import { getAllTeamMembers } from '@/lib/firebase/team';
import type { Tournament } from '@/types/tournament';
import type { BlogPost } from '@/types/blog';
import type { TeamMember } from '@/types/team';

export default function AdminDashboard() {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const [tournamentsData, blogsData, teamData] = await Promise.all([
                    getAllTournaments(),
                    getAllBlogs(),
                    getAllTeamMembers(),
                ]);
                setTournaments(tournamentsData);
                setBlogPosts(blogsData);
                setTeamMembers(teamData);
            } catch (err) {
                console.error('Error fetching dashboard data:', err);
                setError('Failed to load dashboard data. Please refresh the page.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const stats = [
        {
            label: 'Total Tournaments',
            value: tournaments.length,
            change: '+2 this month',
            icon: Trophy,
            color: 'bg-blue-100 text-blue-600',
        },
        {
            label: 'Active Tournaments',
            value: tournaments.filter(t => t.status === 'open' || t.status === 'upcoming').length,
            change: 'Currently open',
            icon: Calendar,
            color: 'bg-green-100 text-green-600',
        },
        {
            label: 'Blog Posts',
            value: blogPosts.length,
            change: '+3 this month',
            icon: FileText,
            color: 'bg-purple-100 text-purple-600',
        },
        {
            label: 'Team Members',
            value: teamMembers.filter(m => m.isVisible).length,
            change: 'Active members',
            icon: Users,
            color: 'bg-amber-100 text-amber-600',
        },
    ];

    const recentTournaments = tournaments
        .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
        .slice(0, 5);

    const recentBlogs = blogPosts
        .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
        .slice(0, 5);

    if (loading) {
        return (
            <div className="space-y-8">
                <div>
                    <h1 className="font-heading font-bold text-3xl text-slate-900 mb-2">Dashboard</h1>
                    <p className="text-slate-600">Welcome back! Here's what's happening with your chess platform.</p>
                </div>

                {/* Stats Grid Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 animate-pulse">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-slate-200 rounded-lg"></div>
                                <div className="w-4 h-4 bg-slate-200 rounded"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                                <div className="h-7 bg-slate-200 rounded w-1/2"></div>
                                <div className="h-2.5 bg-slate-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-slate-200 rounded-xl h-40 animate-pulse"></div>
                    ))}
                </div>

                {/* Recent Activity Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-6 bg-slate-200 rounded w-1/3 animate-pulse"></div>
                                <div className="h-4 bg-slate-200 rounded w-16 animate-pulse"></div>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map((j) => (
                                    <div key={j} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg animate-pulse">
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                            <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                                        </div>
                                        <div className="w-16 h-6 bg-slate-200 rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-8">
                <div>
                    <h1 className="font-heading font-bold text-3xl text-slate-900 mb-2">Dashboard</h1>
                    <p className="text-slate-600">Welcome back! Here's what's happening with your chess platform.</p>
                </div>
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-heading font-bold text-3xl text-slate-900 mb-2">Dashboard</h1>
                <p className="text-slate-600">Welcome back! Here's what's happening with your chess platform.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.label} className="bg-white rounded-xl p-6 border border-slate-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-lg ${stat.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                                    <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
                                    <p className="text-xs text-slate-500">{stat.change}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                    href="/admin/tournaments"
                    className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-8 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 group"
                >
                    <div className="flex items-center justify-between mb-4">
                        <Trophy className="w-12 h-12" />
                        <Plus className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Manage Tournaments</h3>
                    <p className="text-red-100 text-sm">Create and manage chess tournaments</p>
                </Link>

                <Link
                    href="/admin/blogs"
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group"
                >
                    <div className="flex items-center justify-between mb-4">
                        <FileText className="w-12 h-12" />
                        <Plus className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Manage Blog Posts</h3>
                    <p className="text-blue-100 text-sm">Create and publish blog content</p>
                </Link>

                <Link
                    href="/admin/team"
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300 group"
                >
                    <div className="flex items-center justify-between mb-4">
                        <Users className="w-12 h-12" />
                        <Plus className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Manage Team</h3>
                    <p className="text-purple-100 text-sm">Manage team members on about page</p>
                </Link>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Tournaments */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-heading font-bold text-xl text-slate-900">Recent Tournaments</h2>
                        <Link href="/admin/tournaments" className="text-sm text-red-600 hover:text-red-700 font-semibold">
                            View All
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {recentTournaments.map((tournament) => (
                            <div key={tournament.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <div className="flex-1">
                                    <p className="font-semibold text-sm text-slate-900">{tournament.title}</p>
                                    <p className="text-xs text-slate-600 mt-0.5">{new Date(tournament.date).toLocaleDateString()}</p>
                                </div>
                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${tournament.status === 'open' ? 'bg-green-100 text-green-700' :
                                    tournament.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                                        'bg-slate-100 text-slate-700'
                                    }`}>
                                    {tournament.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Blog Posts */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-heading font-bold text-xl text-slate-900">Recent Blog Posts</h2>
                        <Link href="/admin/blogs" className="text-sm text-red-600 hover:text-red-700 font-semibold">
                            View All
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {recentBlogs.map((post) => (
                            <div key={post.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <div className="flex-1">
                                    <p className="font-semibold text-sm text-slate-900">{post.title}</p>
                                    <p className="text-xs text-slate-600 mt-0.5">{post.category} • {post.readTime}</p>
                                </div>
                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${post.isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {post.isPublished ? 'Published' : 'Draft'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
