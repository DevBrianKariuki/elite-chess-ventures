'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTextProps {
    texts: string[];
    displayDuration?: number; // How long to show the text
    className?: string;
    highlightWords?: string[]; // Words to highlight in red
}

export default function TypewriterText({
    texts,
    displayDuration = 4000, // 4 seconds display time
    className = '',
    highlightWords = ['Strategic', 'Chess', 'Leaders', 'Strategists'],
}: TypewriterTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (texts.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, displayDuration);

        return () => clearInterval(interval);
    }, [texts, displayDuration]);

    // Function to highlight specific words in red
    const highlightText = (text: string) => {
        // Create a regex pattern from highlightWords
        const pattern = new RegExp(`\\b(${highlightWords.join('|')})\\b`, 'gi');
        const parts = text.split(pattern);

        return parts.map((part, index) => {
            const isHighlighted = highlightWords.some(
                word => part.toLowerCase() === word.toLowerCase()
            );
            return (
                <span key={index} className={isHighlighted ? 'text-red-600' : ''}>
                    {part}
                </span>
            );
        });
    };

    return (
        <span className={`inline-block ${className}`} style={{ minHeight: '1.2em' }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut'
                    }}
                    className="inline-block"
                >
                    {highlightText(texts[currentIndex])}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
