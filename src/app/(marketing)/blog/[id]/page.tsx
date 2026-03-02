'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Tag, ArrowLeft, Clock, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ReadingProgress from '@/components/ReadingProgress';
import { useParams } from 'next/navigation';
import { getBlogById } from '@/lib/firebase/blogs';
import type { BlogPost } from '@/types/blog';

export default function BlogPostPage() {
    const params = useParams();
    const id = params?.id as string;
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPost = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const blogPost = await getBlogById(id);
                if (blogPost) {
                    setPost(blogPost);
                    setError(null);
                } else {
                    setError('Blog post not found');
                }
            } catch (err) {
                console.error('Failed to fetch blog post:', err);
                setError('Failed to load blog post. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPost();
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

    if (error || !post) {
        return (
            <main className="min-h-screen py-20 md:py-24 bg-slate-50">
                <div className="container max-w-4xl text-center">
                    <h1 className="font-heading font-bold text-3xl text-slate-900 mb-4">
                        {error === 'Blog post not found' ? 'Blog Post Not Found' : 'Error Loading Post'}
                    </h1>
                    <p className="text-slate-600 mb-8">
                        {error || 'The blog post you\'re looking for doesn\'t exist.'}
                    </p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </div>
            </main>
        );
    }

    const postDate = new Date(post.date);
    const formattedDate = postDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <>
            <ReadingProgress />
            <main className="min-h-screen">
                {/* Hero Section */}
                <motion.section
                    className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="container max-w-3xl">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-red-600 transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to all articles
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <motion.span
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Tag className="w-3 h-3" />
                                {post.category}
                            </motion.span>
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                            </span>
                        </div>

                        <motion.h1
                            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            className="flex items-center gap-6 text-sm text-slate-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {formattedDate}
                            </span>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Featured Image */}
                {post.image && (
                    <section className="py-0 bg-white">
                        <div className="container max-w-3xl">
                            <motion.div
                                className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl h-64 md:h-96 flex items-center justify-center overflow-hidden mb-12"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                {typeof post.image === 'string' && post.image.startsWith('http') ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 768px"
                                    />
                                ) : (
                                    <span className="text-8xl md:text-9xl">{post.image}</span>
                                )}
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Article Content */}
                <motion.section
                    className="py-8 md:py-12 bg-white chess-pattern-bg relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div className="container max-w-3xl">
                        <article
                            className="prose prose-slate prose-sm md:prose-base lg:prose-lg max-w-none
                        prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
                        prose-p:text-slate-600 prose-p:leading-relaxed
                        prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-slate-900 prose-strong:font-semibold
                        prose-ul:text-slate-600 prose-ol:text-slate-600
                        prose-li:marker:text-red-600
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </motion.section>

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
                    <div className="container max-w-3xl">
                        <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-8 md:p-12 text-center">
                            <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                                Ready to Start Your Chess Journey?
                            </h2>
                            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                                Join hundreds of students who are already experiencing the transformative benefits of chess education.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/programs"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors"
                                >
                                    View Programs
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-semibold text-sm hover:border-red-600 hover:text-red-600 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="py-12 md:py-16 bg-white border-t border-slate-200">
                    <div className="container max-w-6xl">
                        <h2 className="font-heading font-bold text-2xl text-slate-900 mb-8">
                            More Articles
                        </h2>
                        <div className="text-center text-slate-600">
                            <Link href="/blog" className="text-red-600 hover:text-red-700 font-medium">
                                View all blog posts →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
