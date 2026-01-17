import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAllPosts, BlogPost } from '../lib/blog';
import { Reveal } from './Reveal';

export const LatestArticles: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        getAllPosts().then(allPosts => setPosts(allPosts.slice(0, 3)));
    }, []);

    if (posts.length === 0) return null;

    return (
        <section className="py-24 bg-cream">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between items-end mb-16">
                    <Reveal width="100%">
                        <div>
                            <span className="text-gold font-sans tracking-[0.2em] text-xs uppercase block mb-4">The Journal</span>
                            <h2 className="font-display text-4xl md:text-5xl text-obsidian">Latest Insights</h2>
                        </div>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <Link to="/blog" className="hidden md:flex items-center gap-2 font-sans text-sm font-bold tracking-widest text-obsidian hover:text-gold transition-colors uppercase">
                            View All <ArrowRight size={16} />
                        </Link>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Reveal key={post.slug} delay={index * 0.1} width="100%">
                            <Link to={`/blog/${post.slug}`} className="group block transition-transform duration-500 hover:-translate-y-2 h-full">
                                <div className="bg-white p-4 rounded-[2rem] shadow-angled h-full flex flex-col transition-shadow duration-500 hover:shadow-xl border border-obsidian/5 relative z-10">
                                    <div className="aspect-[3/2] overflow-hidden rounded-xl mb-6 relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="px-2 pb-2 flex flex-col flex-grow">
                                        <span className="font-sans text-[10px] tracking-widest uppercase text-obsidian/40 mb-3 block">{post.category}</span>
                                        <h3 className="font-display text-xl text-obsidian mb-3 group-hover:text-gold transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="font-sans text-sm text-obsidian/60 leading-relaxed line-clamp-2 mb-4">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                <div className="md:hidden mt-12 flex justify-center">
                    <Link to="/blog" className="flex items-center gap-2 font-sans text-sm font-bold tracking-widest text-obsidian hover:text-gold transition-colors uppercase">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
