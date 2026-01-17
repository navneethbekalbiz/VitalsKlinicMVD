import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://vitalsklinic.com';

const generateSitemap = () => {
    const contentDir = path.resolve(__dirname, '../content');
    const posts = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

    const staticPages = [
        '',
        '/blog',
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${DOMAIN}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${posts.map(file => {
        const slug = file.replace('.md', '');
        return `
  <url>
    <loc>${DOMAIN}/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }).join('')}
</urlset>`;

    fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), xml);
    console.log('Sitemap generated!');
};

generateSitemap();
