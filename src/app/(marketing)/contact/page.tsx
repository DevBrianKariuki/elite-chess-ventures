'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Calendar, Send, ChevronDown, Loader2, CheckCircle } from 'lucide-react';
import CallbackModal from '@/components/modals/CallbackModal';
import ConsultationModal from '@/components/modals/ConsultationModal';
import { sendContactEmail, initEmailJS } from '@/lib/emailjs';

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showCallbackModal, setShowCallbackModal] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Initialize EmailJS when component mounts
        initEmailJS();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const result = await sendContactEmail(formData);

        if (result.success) {
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } else {
            setError(result.error || 'Failed to send message. Please try again.');
        }

        setLoading(false);
    };

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
                                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26633.65412242643!2d36.9819648!3d-1.2845056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x182f6d72e92a5243%3A0x637a552dd9d45773!2sElite%20Chess%20Ventures%2C%20Utawala%20kincar%2C%20Zulu%20Plaza%20opposite%20wallets!3m2!1d-1.2891956999999998!2d36.975880499999995!4m5!1s0x182f6d72e92a5243%3A0x637a552dd9d45773!2sElite%20Chess%20Ventures%2C%20Utawala%20kincar%2C%20Zulu%20Plaza%20opposite%20wallets!3m2!1d-1.2891956999999998!2d36.975880499999995!5e1!3m2!1sen!2ske!4v1773066212637!5m2!1sen!2ske"
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

                            {success && (
                                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        value={formData.phone}
                                        onChange={handleChange}
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
                                        value={formData.interest}
                                        onChange={handleChange}
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
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm resize-none"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
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
                                        <a
                                            href={process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK || 'https://maps.app.goo.gl/xRJb6miNV6QWHmh16'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-slate-600 hover:text-red-600 transition-colors block"
                                        >
                                            <p>Zulu Plaza</p>
                                            <p>Opposite Wallets, Kincar Utawala</p>
                                            <p>Nairobi</p>
                                        </a>
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
                                    <button
                                        onClick={() => setShowConsultationModal(true)}
                                        className="w-full bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Schedule Free Consultation
                                    </button>
                                    <button
                                        onClick={() => setShowCallbackModal(true)}
                                        className="w-full bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                                    >
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

            {/* Modals */}
            <CallbackModal isOpen={showCallbackModal} onClose={() => setShowCallbackModal(false)} />
            <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
        </main>
    );
}
