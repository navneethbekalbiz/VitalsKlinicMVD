import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Activity, Calendar } from 'lucide-react';
import { Button } from './Button';

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Question {
    id: number;
    text: string;
    type: 'options' | 'scale';
    options?: string[];
}

const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "What is your primary skin or hair goal today?",
        type: 'options',
        options: ["Anti-Aging & Glow", "Acne & Scar Revision", "Hair Density & Restoration", "Preventative Maintenance"]
    },
    {
        id: 2,
        text: "How would you describe your current routine's effectiveness?",
        type: 'options',
        options: ["I'm seeing no results", "Results are inconsistent", "I want to upgrade to medical-grade care"]
    },
    {
        id: 3,
        text: "On a scale of 1-10, how much is this concern affecting your daily confidence?",
        type: 'options', // Simplified Scale to Grid for better UI flow
        options: ["1-3 (Mild)", "4-6 (Noticeable)", "7-8 (Distressing)", "9-10 (Priority)"]
    },
    {
        id: 4,
        text: "Have you previously tried over-the-counter (OTC) products for this?",
        type: 'options',
        options: ["Yes, but they didn't work", "No, I want to start with professional help", "I'm using them currently"]
    },
    {
        id: 5,
        text: "Are you looking for a 'Quick Fix' or a 'Long-term Transformation'?",
        type: 'options',
        options: ["Quick Boost (Event Ready)", "Long-term Transformation"]
    },
    {
        id: 6,
        text: "Final Step: Which best describes your skin/hair type?",
        type: 'options',
        options: ["Oily / Acne-prone", "Dry / Sensitive", "Thinning / Loss", "Mature / Ageing"]
    }
];

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0); // 0 to QUESTIONS.length - 1
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showResult, setShowResult] = useState(false);

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            setStep(0);
            setAnswers({});
            setIsAnalyzing(false);
            setShowResult(false);
        }
    }, [isOpen]);

    const handleAnswer = (answer: string) => {
        setAnswers(prev => ({ ...prev, [step]: answer }));

        if (step < QUESTIONS.length - 1) {
            setTimeout(() => setStep(step + 1), 200); // Slight delay for ripple effect?
        } else {
            setTimeout(() => startAnalysis(), 200);
        }
    };

    const startAnalysis = () => {
        setIsAnalyzing(true);
        // Simulate complex analysis
        setTimeout(() => {
            setIsAnalyzing(false);
            setShowResult(true);
        }, 3000);
    };

    const handleBook = () => {
        window.open("https://calendly.com/d/crvm-84g-rp3", '_blank');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-obsidian/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-sand overflow-hidden rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        {/* Background Texture for Medical Feel */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '30px 30px' }}>
                        </div>

                        {/* Header */}
                        <div className="relative z-10 p-8 pb-0 flex justify-between items-center">
                            {!showResult && !isAnalyzing && (
                                <div className="flex flex-col gap-2 w-full max-w-[200px]">
                                    <span className="text-[10px] uppercase tracking-widest text-obsidian/40 font-bold">
                                        Diagnostic Progress
                                    </span>
                                    <div className="h-1 w-full bg-obsidian/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gold"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        />
                                    </div>
                                </div>
                            )}
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-obsidian/5 transition-colors ml-auto"
                            >
                                <X size={24} className="text-obsidian/60" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="relative z-10 flex-grow p-8 md:p-12 flex flex-col justify-center min-h-[500px]">

                            {/* 1. QUESTIONS */}
                            {!isAnalyzing && !showResult && (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="flex flex-col gap-8"
                                    >
                                        <h3 className="font-serif text-3xl md:text-4xl text-obsidian font-bold leading-tight">
                                            {QUESTIONS[step].text}
                                        </h3>

                                        <div className="grid grid-cols-1 gap-3">
                                            {QUESTIONS[step].options?.map((option, idx) => (
                                                <motion.button
                                                    key={idx}
                                                    whileHover={{ scale: 1.02, backgroundColor: "#1A1A1A", color: "#F2F0EB" }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => handleAnswer(option)}
                                                    className="w-full text-left p-6 rounded-xl border border-obsidian/10 bg-white/50 backdrop-blur-sm hover:border-obsidian transition-all duration-300 group shadow-sm hover:shadow-lg"
                                                >
                                                    <span className="font-sans text-lg tracking-wide group-hover:text-sand text-obsidian/80 transition-colors flex justify-between items-center">
                                                        {option}
                                                        <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" size={18} />
                                                    </span>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            )}

                            {/* 2. ANALYZING STATE */}
                            {isAnalyzing && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center text-center h-full"
                                >
                                    <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                                        <motion.div
                                            className="absolute inset-0 border-2 border-gold rounded-full"
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <motion.div
                                            className="absolute inset-0 border-2 border-gold rounded-full"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                                            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                                        />
                                        <Activity size={48} className="text-gold relative z-10" />
                                    </div>
                                    <h3 className="font-display text-2xl md:text-3xl text-obsidian mb-2">
                                        Analyzing Profile
                                    </h3>
                                    <p className="font-sans text-obsidian/60 animate-pulse">
                                        Comparing against clinical protocols...
                                    </p>
                                </motion.div>
                            )}

                            {/* 3. RESULTS STATE */}
                            {showResult && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center text-center h-full"
                                >
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-600">
                                        <Check size={32} />
                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl text-obsidian mb-4">
                                        Analysis Complete
                                    </h2>

                                    <div className="bg-white/60 p-6 rounded-2xl border border-obsidian/5 mb-8 max-w-md">
                                        <p className="font-sans text-obsidian/80 leading-relaxed mb-2">
                                            Based on your profile, you are a strong candidate for <strong>Targeted Restoration</strong>.
                                        </p>
                                        <p className="font-sans text-sm text-obsidian/60">
                                            Your answers indicate a need for a deeper, medical-grade protocol rather than OTC solutions.
                                        </p>
                                    </div>

                                    <Button
                                        onClick={handleBook}
                                        className="!py-4 !px-12 !text-lg !bg-obsidian !text-sand hover:!bg-gold hover:!text-obsidian shadow-xl w-full md:w-auto"
                                    >
                                        Claim Treatment Plan <Calendar className="ml-2 w-5 h-5" />
                                    </Button>

                                    <p className="mt-4 text-[10px] uppercase tracking-widest text-obsidian/40">
                                        *Limited consultation slots available this week
                                    </p>
                                </motion.div>
                            )}

                        </div>

                        {/* Trust Footer */}
                        {!isAnalyzing && !showResult && (
                            <div className="bg-white/30 border-t border-obsidian/5 p-4 text-center">
                                <p className="font-sans text-[10px] uppercase tracking-widest text-obsidian/50 flex items-center justify-center gap-4">
                                    <span>15k+ Assessments</span> • <span>FDA Approved Protocols</span> • <span>Dr. Harish Prasad</span>
                                </p>
                            </div>
                        )}

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
