import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
    articleData?: {
        publishedTime: string;
        modifiedTime: string;
        author: string;
        section: string;
        tags: string[];
    };
    canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = "Luxury dermatological care in Bangalore. Evidence-based treatments for acne, hair restoration, and anti-aging.",
    image = "https://vitalsklinic.com/og-image.jpg", // Replace with real default
    type = 'website',
    articleData,
    canonicalUrl
}) => {
    const siteUrl = "https://vitalsklinic.com"; // Replace with real URL
    const fullTitle = `${title} | Vitals Klinic`;
    const fullCanonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

    return (
        <Helmet>
            {/* Basic */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Vitals Klinic" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Article Schema */}
            {type === 'article' && articleData && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": title,
                        "image": [image],
                        "datePublished": articleData.publishedTime,
                        "dateModified": articleData.modifiedTime,
                        "author": [{
                            "@type": "Person",
                            "name": articleData.author,
                            "url": `${siteUrl}/experts` // Or author specific URL
                        }],
                        "publisher": {
                            "@type": "Organization",
                            "name": "Vitals Klinic",
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${siteUrl}/logo.png`
                            }
                        },
                        "description": description,
                        "articleSection": articleData.section,
                        "keywords": articleData.tags.join(", ")
                    })}
                </script>
            )}
        </Helmet>
    );
};
