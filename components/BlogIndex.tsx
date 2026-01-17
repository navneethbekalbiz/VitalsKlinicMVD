import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getAllPosts, BlogPost } from '../lib/blog';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

export const BlogIndex: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    return (
        <>
            <SEO
                title="Journal"
                description="Expert insights on dermatology, hair restoration, and aesthetic medicine from Vitals Klinic."
            />

            <section className="pt-32 pb-24 min-h-screen relative z-10">
                <div className="container mx-auto px-6 md:px-12">
                    <Reveal width="100%">
                        <div className="flex flex-col items-start md:items-end md:flex-row justify-between mb-24 border-b border-obsidian/10 pb-12">
                            <div className="max-w-2xl">
                                <span className="text-gold font-sans tracking-[0.2em] text-xs uppercase block mb-6">The Journal</span>
                                <h1 className="font-display text-5xl md:text-7xl text-obsidian leading-[0.9]">
                                    Science-Backed <br />
                                    <span className="italic text-obsidian/50">Insights</span>
                                </h1>
                            </div>
                            <div className="mt-8 md:mt-0 max-w-sm text-left md:text-right">
                                <p className="font-sans text-obsidian/60 text-sm leading-relaxed">
                                    Curated articles on hair restoration, skin health, and the science of aesthetic medicine.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                        {posts.length === 0 && (
                            <div className="col-span-full text-center py-20 opacity-50 font-sans tracking-wide">
                                NO ARTICLES FOUND. CHECK CONSOLE.
                            </div>
                        )}
                        {posts.map((post, index) => (
                            <Reveal key={post.slug} delay={index * 0.1} width="100%">
                                <Link to={`/blog/${post.slug}`} className="group block h-full flex flex-col">
                                    <div className="aspect-[3/2] overflow-hidden rounded-sm mb-8 relative bg-obsidian/5">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                    </div>

                                    <div className="flex flex-col flex-grow border-t border-obsidian/10 pt-6 transition-all duration-500 group-hover:border-gold/50">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-gold font-medium">
                                                {post.category}
                                            </span>
                                            <span className="font-sans text-[10px] tracking-widest text-obsidian/40">
                                                {post.date}
                                            </span>
                                        </div>

                                        <h2 className="font-display text-2xl md:text-3xl text-obsidian mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                                            {post.title}
                                        </h2>

                                        <p className="font-sans text-sm text-obsidian/60 leading-relaxed mb-8 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-obsidian group-hover:translate-x-2 transition-transform duration-300">
                                            Read Article <ArrowUpRight size={12} className="ml-2 text-gold" />
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
