'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Send, ChevronDown } from 'lucide-react';

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                            Get in <span className="text-red-600">Touch</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            Ready to start your chess journey? We're here to help
                        </p>
                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="py-12 md:py-16 bg-white chess-pattern-bg relative border-b border-slate-200">
                <div className="container max-w-6xl">
                    <div className="bg-slate-50 rounded-xl p-6 md:p-8">
                        <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2">
                            <MapPin className="w-6 h-6 text-red-600" />
                            Our Location
                        </h2>
                        <div className="rounded-lg overflow-hidden h-96 w-full shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.18174719618!2d36.70730744999999!3d-1.3028617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1709038445678!5m2!1sen!2ske"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Elite Chess Ventures Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 md:py-20 bg-white chess-pattern-bg relative">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                        {/* Contact Form */}
                        <div className="bg-slate-50 rounded-xl p-8 md:p-10">
                            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">
                                Send Us a Message
                            </h2>
                            <form className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm"
                                        placeholder="+254 XXX XXX XXX"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 mb-2">
                                        I'm Interested In *
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="school">School Chess Program</option>
                                        <option value="private">Private Coaching</option>
                                        <option value="tournament">Tournament Organization</option>
                                        <option value="mentorship">Chess Mentorship</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm resize-none"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                                >
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base text-slate-900 mb-1">Phone</h3>
                                        <a href="tel:0111449301" className="text-sm text-slate-600 hover:text-red-600 transition-colors">0111-449301</a>
                                        <p className="text-xs text-slate-500 mt-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p className="text-xs text-slate-500">Saturday: 9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base text-slate-900 mb-1">WhatsApp</h3>
                                        <a href="https://wa.me/254111449301" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-red-600 transition-colors">0111-449301</a>
                                        <p className="text-xs text-slate-500 mt-1">Chat with us anytime</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base text-slate-900 mb-1">Email</h3>
                                        <a href="mailto:elitechessventures@gmail.com" className="text-sm text-slate-600 hover:text-red-600 transition-colors">elitechessventures@gmail.com</a>
                                        <p className="text-xs text-slate-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base text-slate-900 mb-1">Location</h3>
                                        <p className="text-sm text-slate-600">Zulu Plaza</p>
                                        <p className="text-sm text-slate-600">Opposite Wallets, Kincar Utawala</p>
                                        <p className="text-sm text-slate-600">Nairobi</p>
                                        <p className="text-xs text-slate-500 mt-1">Visit by appointment only</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-heading font-bold text-lg text-slate-900 mb-4">
                                    Quick Actions
                                </h3>
                                <div className="space-y-3">
                                    <button className="w-full bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                                        <Calendar className="w-4 h-4" />
                                        Schedule Free Consultation
                                    </button>
                                    <button className="w-full bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                                        <Phone className="w-4 h-4" />
                                        Request Callback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collapsible FAQ Section */}
            <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
                <div className="container max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-slate-600">
                            Quick answers to common questions about our programs
                        </p>
                    </div>

                    <div className="space-y-3">
                        {[
                            {
                                q: 'How does chess fit into our school curriculum?',
                                a: 'Our programs complement STEM education and co-curricular requirements. Chess can be integrated during games period, club activities, or as an elective.',
                            },
                            {
                                q: 'What equipment do we need to provide?',
                                a: 'Nothing. We provide all chess sets, boards, clocks, and teaching materials. We also handle classroom setup.',
                            },
                            {
                                q: 'My child has never played chess. Can they start?',
                                a: 'Absolutely! We specialize in teaching beginners. Our coaches make learning fun and age-appropriate, starting with basic concepts.',
                            },
                            {
                                q: 'How long until my child sees results?',
                                a: 'Most students show improved focus and problem-solving within 8-12 weeks. Competitive readiness typically takes 6-12 months depending on commitment.',
                            },
                            {
                                q: 'Do you offer online coaching?',
                                a: 'Yes! We offer both in-person and online sessions via Zoom. Online sessions include interactive chess boards and recorded lessons.',
                            },
                            {
                                q: 'What are your coach qualifications?',
                                a: 'All our coaches are FIDE-certified, background-checked, and trained in child safeguarding. Most have teaching experience and competitive chess backgrounds.',
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <h3 className="font-heading font-bold text-base text-slate-900 pr-4">
                                        {faq.q}
                                    </h3>
                                    <ChevronDown
                                        className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
