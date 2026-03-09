'use client';

import React, { useState } from 'react';
import { X, Calendar, Loader2, CheckCircle } from 'lucide-react';
import { sendConsultationRequest } from '@/lib/emailjs';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const result = await sendConsultationRequest(formData);

        if (result.success) {
            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFormData({ name: '', email: '', phone: '', program: '', message: '' });
            }, 2000);
        } else {
            setError(result.error || 'Failed to send request. Please try again.');
        }

        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200 my-8">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h2 className="font-heading font-bold text-xl text-slate-900">Free Consultation</h2>
                        <p className="text-sm text-slate-600">Let's discuss your chess program</p>
                    </div>
                </div>

                {success ? (
                    <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Request Sent!</h3>
                        <p className="text-sm text-slate-600">We'll contact you within 24 hours to schedule your consultation.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm"
                                placeholder="+254 XXX XXX XXX"
                            />
                        </div>

                        <div>
                            <label htmlFor="program" className="block text-sm font-semibold text-slate-700 mb-2">
                                I'm Interested In *
                            </label>
                            <select
                                id="program"
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm"
                            >
                                <option value="">Select a program</option>
                                <option value="School Chess Program">School Chess Program</option>
                                <option value="Private Coaching">Private Coaching</option>
                                <option value="Tournament Organization">Tournament Organization</option>
                                <option value="Chess Mentorship">Chess Mentorship</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                Additional Information
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm resize-none"
                                placeholder="Tell us more about your needs..."
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

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
                                    <Calendar className="w-4 h-4" />
                                    Schedule Consultation
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
