import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { AmbientBackground } from './AmbientBackground';

export const Layout: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-sand text-obsidian selection:bg-gold selection:text-white font-sans overflow-x-hidden">
            <AmbientBackground />

            <div className="relative z-10 text-balance">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};
