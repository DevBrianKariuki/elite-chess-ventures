'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { getPublishedBlogs } from '@/lib/firebase/blogs';
import type { BlogPost } from '@/types/blog';

export default function BlogPage() {
    const [articles, setArticles] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const blogs = await getPublishedBlogs();
                setArticles(blogs);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch blogs:', err);
                setError('Failed to load blog posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const categories = [
        'All',
        ...Array.from(new Set(articles.map(article => article.category))).sort()
    ];

    const filteredArticles = selectedCategory === 'All'
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container max-w-6xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                            Chess Insights & <span className="text-red-600">Stories</span>
                        </h1>
                        <p className="text-base text-slate-600 leading-relaxed">
                            Expert advice, success stories, and the latest news from Kenya's leading
                            chess education program. Learn how chess transforms young minds.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 border-b border-slate-200 bg-white sticky top-16 md:top-20 z-10 shadow-sm">
                <div className="container max-w-6xl">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === selectedCategory
                                    ? 'bg-red-600 text-white'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-12 md:py-16 bg-slate-50 chess-pattern-bg relative">
                <div className="container max-w-6xl">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
                                    {/* Image Skeleton */}
                                    <div className="h-48 bg-slate-200"></div>

                                    {/* Content Skeleton */}
                                    <div className="p-6">
                                        {/* Category Badge */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="h-6 w-24 bg-slate-200 rounded-full"></div>
                                            <div className="h-4 w-16 bg-slate-200 rounded"></div>
                                        </div>

                                        {/* Title */}
                                        <div className="space-y-2 mb-2">
                                            <div className="h-5 bg-slate-200 rounded w-full"></div>
                                            <div className="h-5 bg-slate-200 rounded w-4/5"></div>
                                        </div>

                                        {/* Excerpt */}
                                        <div className="space-y-2 mb-4">
                                            <div className="h-4 bg-slate-200 rounded w-full"></div>
                                            <div className="h-4 bg-slate-200 rounded w-full"></div>
                                            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="h-4 w-24 bg-slate-200 rounded"></div>
                                                <div className="h-4 w-24 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>

                                        {/* Read More Link */}
                                        <div className="h-4 w-24 bg-slate-200 rounded mt-4"></div>
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
                    ) : filteredArticles.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-slate-600">
                                {selectedCategory === 'All'
                                    ? 'No blog posts available at the moment.'
                                    : `No posts found in "${selectedCategory}" category.`}
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {filteredArticles.map((article) => {
                                const articleDate = new Date(article.date);
                                const formattedDate = articleDate.toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                });

                                return (
                                    <article
                                        key={article.id}
                                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                                    >
                                        {/* Article Image Placeholder */}
                                        <div className="bg-gradient-to-br from-red-50 to-amber-50 h-48 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                                            {article.image && typeof article.image === 'string' && article.image.startsWith('http') ? (
                                                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <span>{article.image || '📝'}</span>
                                            )}
                                        </div>

                                        {/* Article Content */}
                                        <div className="p-6">
                                            {/* Category Badge */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
                                                    <Tag className="w-3 h-3" />
                                                    {article.category}
                                                </span>
                                                {article.readTime && (
                                                    <span className="text-xs text-slate-500">
                                                        {article.readTime}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Title */}
                                            <h2 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                                                {article.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                                                {article.excerpt}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <User className="w-3 h-3" />
                                                        {article.author}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {formattedDate}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Read More Link */}
                                            <Link
                                                href={`/blog/${article.id}`}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 mt-4 group-hover:gap-3 transition-all"
                                            >
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-12 md:py-16 bg-white border-t border-slate-200">
                <div className="container max-w-4xl text-center">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                        Never Miss an Update
                    </h2>
                    <p className="text-sm text-slate-600 mb-6">
                        Subscribe to our newsletter for the latest chess insights, tournament updates,
                        and success stories delivered to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-colors whitespace-nowrap"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
