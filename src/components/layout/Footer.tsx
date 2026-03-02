import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-slate-300">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Elite Chess Ventures Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-lg text-white">
                                Elite Chess
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            Building Kenya's next generation of strategic thinkers through professional chess coaching.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/elitechessventures" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@elitechessventures" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors" aria-label="TikTok">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-bold text-white text-base mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {['About Us', 'Programs', 'Tournaments', 'Success Stories', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-sm text-slate-400 hover:text-red-600 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="font-heading font-bold text-white text-base mb-4">Our Programs</h3>
                        <ul className="space-y-2.5">
                            {['School Chess Programs', 'Private Coaching', 'Tournament Organization', 'Chess Mentorship'].map((item) => (
                                <li key={item}>
                                    <Link href="/programs" className="text-sm text-slate-400 hover:text-red-600 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-bold text-white text-base mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5">
                                <Phone className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                <a href="tel:0111449301" className="text-sm text-slate-400 hover:text-red-600 transition-colors">0111-449301</a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Mail className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                <a href="mailto:elitechessventures@gmail.com" className="text-sm text-slate-400 hover:text-red-600 transition-colors">elitechessventures@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-400">Zulu Plaza, Kincar Utawala, Nairobi</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © {currentYear} Elite Chess Ventures. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-slate-500 hover:text-red-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-slate-500 hover:text-red-600 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
