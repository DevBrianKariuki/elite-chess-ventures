'use client';

import React, { useState } from 'react';
import { X, Phone, Loader2, CheckCircle } from 'lucide-react';
import { sendCallbackRequest } from '@/lib/emailjs';

interface CallbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        preferredTime: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const result = await sendCallbackRequest(formData);

        if (result.success) {
            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFormData({ name: '', phone: '', preferredTime: '' });
            }, 2000);
        } else {
            setError(result.error || 'Failed to send request. Please try again.');
        }

        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h2 className="font-heading font-bold text-xl text-slate-900">Request Callback</h2>
                        <p className="text-sm text-slate-600">We'll call you back within 24 hours</p>
                    </div>
                </div>

                {success ? (
                    <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Request Sent!</h3>
                        <p className="text-sm text-slate-600">We'll get back to you soon.</p>
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
                            <label htmlFor="preferredTime" className="block text-sm font-semibold text-slate-700 mb-2">
                                Preferred Time
                            </label>
                            <select
                                id="preferredTime"
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm"
                            >
                                <option value="">Select a time</option>
                                <option value="Morning (8AM-12PM)">Morning (8AM-12PM)</option>
                                <option value="Afternoon (12PM-4PM)">Afternoon (12PM-4PM)</option>
                                <option value="Evening (4PM-6PM)">Evening (4PM-6PM)</option>
                            </select>
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
                                    <Phone className="w-4 h-4" />
                                    Request Callback
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
