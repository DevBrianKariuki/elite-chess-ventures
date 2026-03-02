'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ReadingProgress() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (value) => {
            setIsVisible(value > 0.01);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Percentage Indicator */}
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-20 right-4 md:right-8 z-50"
                >
                    <motion.div
                        className="bg-white shadow-lg rounded-full p-3 border-2 border-red-600"
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            className="text-xs font-bold text-red-600 w-10 h-10 flex items-center justify-center"
                        >
                            <motion.span>
                                {Math.round(scrollYProgress.get() * 100)}%
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
