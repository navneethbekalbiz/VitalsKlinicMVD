import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight, Activity } from 'lucide-react';
import { QuizModal } from './QuizModal';
import { Reveal } from './Reveal';

export const DiagnosisSection: React.FC = () => {
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    return (
        <section className="py-24 bg-sand relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #121212 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-[3rem] p-12 md:p-20 shadow-soft-xl overflow-hidden relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-1/2 text-left">
                            <Reveal>
                                <div className="flex items-center gap-3 mb-6 text-gold">
                                    <Activity size={24} />
                                    <span className="font-sans text-xs tracking-widest uppercase font-bold">AI-Powered Analysis</span>
                                </div>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="font-display text-5xl md:text-6xl text-obsidian mb-6 leading-tight">
                                    Unsure what your <br /><span className="italic text-gold">skin needs?</span>
                                </h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="font-sans text-obsidian/70 text-lg leading-relaxed mb-8 max-w-md">
                                    Take our verified 2-minute diagnostic quiz. We analyze your profile against 50+ clinical protocols to recommend the perfect medical-grade treatment.
                                </p>
                            </Reveal>
                            <Reveal delay={0.3}>
                                <div className="flex items-center gap-4 text-sm font-sans text-obsidian/60 mb-8">
                                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> 15k+ Assessments</span>
                                    <span className="hidden md:inline">|</span>
                                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"></div> FDA-Approved Protocols</span>
                                </div>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <Button
                                    onClick={() => setIsQuizOpen(true)}
                                    className="!py-4 !px-10 !text-base !bg-obsidian !text-sand hover:!bg-gold hover:!text-obsidian shadow-xl shadow-obsidian/10"
                                >
                                    Get Your Diagnosis <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Reveal>
                        </div>

                        {/* Visual Side */}
                        <div className="w-full md:w-[40%] relative">
                            <Reveal delay={0.2}>
                                <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-angled border border-white/50 relative group cursor-pointer" onClick={() => setIsQuizOpen(true)}>
                                    <img
                                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                                        alt="Clinical Analysis"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="font-sans text-xs text-obsidian/50 uppercase tracking-wider mb-1">Match Rate</p>
                                                    <p className="font-display text-3xl text-obsidian">94% Accuracy</p>
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-obsidian">
                                                    <ArrowRight size={20} className="-rotate-45" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        </section>
    );
};
