import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { getPostBySlug, BlogPost } from '../lib/blog';
import { SEO } from './SEO';
import { Reveal } from './Reveal';

export const ArticleTemplate: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            getPostBySlug(slug).then((data) => {
                setPost(data || null);
                setLoading(false);
            });
        }
    }, [slug]);

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-sand">Loading...</div>;
    if (!post) return <div className="min-h-screen flex items-center justify-center bg-sand">Article not found</div>;

    return (
        <>
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                type="article"
                articleData={{
                    publishedTime: post.date,
                    modifiedTime: post.date,
                    author: post.author,
                    section: post.category,
                    tags: post.tags
                }}
            />

            <article className="pt-32 pb-24 min-h-screen relative z-10">
                {/* Header */}
                <div className="container mx-auto px-6 md:px-12 mb-12">
                    <Reveal width="100%">
                        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                            <Link to="/blog" className="inline-flex items-center gap-2 text-obsidian/40 hover:text-gold mb-12 transition-colors font-sans text-[10px] tracking-[0.2em] uppercase">
                                <ArrowLeft size={14} /> Back to Journal
                            </Link>

                            <div className="mb-8">
                                <span className="inline-block px-4 py-1 border border-obsidian/10 rounded-full text-[10px] font-sans tracking-[0.2em] uppercase text-gold bg-white/50 backdrop-blur-sm">
                                    {post.category}
                                </span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-obsidian mb-8 leading-[1.1]">
                                {post.title}
                            </h1>

                            <div className="flex items-center justify-center gap-8 text-obsidian/40 font-sans text-xs tracking-widest uppercase">
                                <div className="flex items-center gap-2">
                                    <span>By {post.author}</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-obsidian/20" />
                                <div className="flex items-center gap-2">
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Featured Image */}
                <div className="container mx-auto px-6 md:px-12 mb-20">
                    <Reveal width="100%" delay={0.2}>
                        <div className="max-w-5xl mx-auto aspect-[21/9] rounded-sm overflow-hidden shadow-2xl shadow-obsidian/5">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    </Reveal>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-[680px] mx-auto prose prose-lg prose-p:text-obsidian/80 prose-headings:text-obsidian prose-headings:font-display prose-p:font-sans prose-p:leading-loose prose-a:text-gold hover:prose-a:text-obsidian prose-strong:text-obsidian prose-img:rounded-sm">
                        <Markdown>{post.content}</Markdown>
                    </div>
                </div>

                {/* Tags */}
                <div className="container mx-auto px-6 md:px-12 mt-24">
                    <div className="max-w-[680px] mx-auto pt-12 border-t border-obsidian/10 flex gap-3 flex-wrap">
                        {post.tags.map(tag => (
                            <span key={tag} className="flex items-center gap-1 text-[10px] text-obsidian/40 font-sans tracking-[0.15em] uppercase border border-obsidian/5 px-3 py-2 rounded-full hover:border-gold hover:text-gold transition-colors cursor-default">
                                <Tag size={10} /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </>
    );
};
