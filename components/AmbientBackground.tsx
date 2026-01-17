import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
    // Use client-side only rendering to avoid hydration mismatches with random values
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Soft Gold Glow - Top Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.2, 1],
                    x: [-20, 20, -20],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gold/10 rounded-full blur-[120px]"
            />

            {/* Deep Sand Shadow - Bottom Right */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                    x: [20, -20, 20],
                    y: [0, -30, 0]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-obsidian/5 rounded-full blur-[100px]"
            />

            {/* Floating Accent - Center Right */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    y: [0, -100, 0],
                    x: [0, -50, 0]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute top-[30%] right-[-20%] w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[90px]"
            />

            {/* Subtle Grain Overlay (Optional, but adds texture) */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>
        </div>
    );
};
