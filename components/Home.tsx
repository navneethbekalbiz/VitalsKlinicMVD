import React from 'react';
import { Hero } from './Hero';
import { Intro } from './Intro';
import { Specializations } from './Specializations';
import { Experts } from './Experts';
import { Treatments } from './Treatments';
import { Gallery } from './Gallery';
import { Stats } from './Stats';
import { Testimonials } from './Testimonials';
import { LatestArticles } from './LatestArticles';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Specializations />
            <Experts />
            <Treatments />
            <Gallery />
            <Stats />
            <LatestArticles />
            <Testimonials />
        </>
    );
};
