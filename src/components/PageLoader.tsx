'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    return (
        <AnimatePresence>
            {loading && (
                <>
                    {/* Progress Bar */}
                    <motion.div
                        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[9999] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 1, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    />

                    {/* Loading Overlay (optional, lighter version) */}
                    <motion.div
                        className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9998] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="flex flex-col items-center gap-3"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 border-4 border-slate-200 rounded-full" />
                                <div className="w-12 h-12 border-4 border-red-600 rounded-full absolute top-0 left-0 border-t-transparent animate-spin" />
                            </div>
                            <p className="text-sm font-medium text-slate-600">Loading...</p>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
