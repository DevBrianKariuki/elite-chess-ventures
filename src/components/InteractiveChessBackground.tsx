'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ChessPiece {
    id: number;
    src: string;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    rotation: number;
    rotationSpeed: number;
    scale: number;
}

// Chess piece images
const chessPieceImages = [
    '/images/chess/bishop.png',
    '/images/chess/chess.png',
    '/images/chess/king-chess-piece-shape.png',
    '/images/chess/queen.png',
    '/images/chess/rook.png',
    '/images/chess/strategy-development.png',
    '/images/chess/strategy.png',
];

export default function InteractiveChessBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const piecesRef = useRef<ChessPiece[]>([]);
    const animationFrameRef = useRef<number>();
    const scrollYRef = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        // Initialize chess pieces
        const initializePieces = () => {
            piecesRef.current = Array.from({ length: 15 }, (_, i) => ({
                id: i,
                src: chessPieceImages[Math.floor(Math.random() * chessPieceImages.length)],
                x: Math.random() * rect.width,
                y: Math.random() * rect.height,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.5,
                scale: 0.6 + Math.random() * 0.6, // Random size between 0.6 and 1.2
            }));
        };

        initializePieces();

        // Handle scroll
        const handleScroll = () => {
            scrollYRef.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Animation loop
        const animate = () => {
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrollInfluence = scrollYRef.current * 0.02;

            piecesRef.current.forEach((piece) => {
                // Update position with scroll influence
                piece.x += piece.speedX + Math.sin(scrollInfluence + piece.id) * 0.1;
                piece.y += piece.speedY + Math.cos(scrollInfluence + piece.id) * 0.1;
                piece.rotation += piece.rotationSpeed;

                // Bounce off edges
                if (piece.x < -100) piece.x = rect.width + 100;
                if (piece.x > rect.width + 100) piece.x = -100;
                if (piece.y < -100) piece.y = rect.height + 100;
                if (piece.y > rect.height + 100) piece.y = -100;
            });

            // Re-render by forcing a state update (we'll use CSS transforms instead)
            if (container) {
                const pieces = container.querySelectorAll('.chess-piece');
                pieces.forEach((element, index) => {
                    const piece = piecesRef.current[index];
                    if (piece && element instanceof HTMLElement) {
                        element.style.transform = `translate(${piece.x}px, ${piece.y}px) rotate(${piece.rotation}deg) scale(${piece.scale})`;
                    }
                });
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-hidden z-0"
            aria-hidden="true"
        >
            {piecesRef.current.map((piece) => (
                <div
                    key={piece.id}
                    className="chess-piece absolute w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-[0.03] transition-transform"
                    style={{
                        transform: `translate(${piece.x}px, ${piece.y}px) rotate(${piece.rotation}deg) scale(${piece.scale})`,
                        willChange: 'transform',
                    }}
                >
                    <Image
                        src={piece.src}
                        alt=""
                        fill
                        className="object-contain"
                        loading="lazy"
                        quality={50}
                    />
                </div>
            ))}
        </div>
    );
}
