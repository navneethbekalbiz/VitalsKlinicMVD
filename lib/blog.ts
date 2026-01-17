import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    image: string;
    content: string;
}

export const getAllPosts = async (): Promise<BlogPost[]> => {
    const posts: BlogPost[] = [];

    try {
        // Method 1: Eager load via Vite glob
        // We try multiple path variants to be safe
        const modulesRelative = import.meta.glob('../content/*.md', { query: '?raw', import: 'default', eager: true });
        const modulesAbsolute = import.meta.glob('/content/*.md', { query: '?raw', import: 'default', eager: true });
        const modulesAlias = import.meta.glob('@/content/*.md', { query: '?raw', import: 'default', eager: true });

        const modules = { ...modulesRelative, ...modulesAbsolute, ...modulesAlias };

        console.log('getAllPosts: Modules found keys:', Object.keys(modules));

        for (const path in modules) {
            const rawContent = modules[path] as string;
            if (!rawContent) continue;

            const { data, content } = matter(rawContent);
            const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';

            // Avoid duplicates if multiple globs found the same file
            if (!posts.find(p => p.slug === slug)) {
                posts.push({
                    slug,
                    title: data.title,
                    excerpt: data.excerpt,
                    date: data.date,
                    author: data.author || 'Vitals Team',
                    category: data.category || 'General',
                    tags: data.tags || [],
                    image: data.image || '',
                    content,
                });
            }
        }
    } catch (e) {
        console.error("Error loading blog posts via glob:", e);
    }

    // fallback content if file system loading fails
    if (posts.length === 0) {
        console.warn("Using fallback hardcoded posts due to file loading failure.");
        return getFallbackPosts();
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
    const posts = await getAllPosts();
    return posts.find((post) => post.slug === slug);
};

// Fallback data to ensure the site works even if FS access fails
function getFallbackPosts(): BlogPost[] {
    return [
        {
            slug: "top-10-questions-hair-transplant",
            title: "Top 10 Questions to Ask Before Getting a Hair Transplant",
            date: "2025-10-10",
            category: "Hair Restoration",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop",
            excerpt: "Considering a hair transplant? Here are the 10 essential questions you must ask your surgeon during the consultation to ensure you get the best results.",
            tags: ["Hair Transplant", "Guide", "Consultation"],
            author: "Dr. Harish Prasad",
            content: `
When considering a **hair transplant**, it’s natural to feel both excited and uncertain. A successful procedure doesn’t just depend on the surgeon or technique—it begins with asking the right questions during your **hair transplant consultation**.

Understanding your treatment, expectations, and recovery can help you make confident, informed decisions. Here’s a detailed guide covering the **top 10 questions to ask before getting a hair transplant**, curated by the experts at [**Vitalsklinic**](https://vitalsklinic.com/), one of Bangalore’s trusted names in aesthetic care.

### **Top 10 Questions to Ask Your Surgeon**

1.  **Am I a good candidate for a hair transplant?**
    Not everyone is eligible. Factors like donor hair density, age, and type of hair loss matter.

2.  **Which technique do you recommend: FUE or FUT?**
    Understanding the difference between Follicular Unit Extraction (FUE) and Follicular Unit Transplantation (FUT) is crucial. FUE is generally preferred for its minimal scarring.

3.  **How much experience does the surgeon have?**
    Always ask about the surgeon's qualifications and the number of successful procedures they have performed.

4.  **Can I see before and after photos of previous patients?**
    Real results speak louder than promises. Look for consistency in the results.

5.  **What is the estimated cost?**
    Get a clear breakdown of the costs involved, including post-op care.

6.  **What is the recovery time?**
    Knowing when you can return to work or exercise is important for planning.

7.  **Will I need more than one session?**
    Depending on the extent of hair loss, you might need a follow-up session for density.

8.  **What are the potential risks and complications?**
    Every surgical procedure carries some risk. Ensure your surgeon explains them clearly.

9.  **What happens if I'm not satisfied with the results?**
    Ask about the clinic's revision policy.

10. **How do I maintain the transplanted hair?**
    Post-transplant care is vital for the longevity of your results.

Ready to restore your confidence? [**Book your personalized hair transplant consultation today.**](https://vitalsklinic.com/contact/)
            `
        },
        {
            slug: "prp-vs-hair-transplant",
            title: "PRP vs Hair Transplant: Which Is Better for You?",
            date: "2025-10-10",
            category: "Hair Restoration",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop",
            excerpt: "Hair loss is a concern that affects both men and women at various stages of life. With advancements in hair restoration, two of the most effective treatments available today are PRP therapy and Hair Transplant.",
            tags: ["Hair Loss", "PRP", "Transplant"],
            author: "Dr. Harish Prasad",
            content: `
Hair loss is a concern that affects both men and women at various stages of life. With advancements in **hair restoration**, two of the most effective treatments available today are **PRP therapy** and **Hair Transplant**.

But which one is right for you? Understanding the key differences between **PRP vs transplant** can help you make an informed decision.

### **What Is PRP Therapy?**

**PRP (Platelet-Rich Plasma) therapy** is a **non-surgical hair restoration** treatment that uses your body’s natural healing properties to stimulate hair growth. The process involves drawing a small amount of your blood, processing it to extract platelet-rich plasma, and injecting it into the scalp where hair thinning occurs.

#### **Benefits of PRP Therapy in Bangalore**

- Completely non-surgical and minimally invasive
- Safe and natural, using your own platelets
- No downtime — resume routine activities the same day
- Boosts hair thickness and reduces shedding

### **What Is a Hair Transplant?**

A **hair transplant** is a surgical procedure that involves moving hair follicles from a donor area (usually the back of the head) to the balding or thinning areas. Techniques like **FUE (Follicular Unit Extraction)** ensure natural-looking results with minimal scarring.

### **Which One Should You Choose?**

The choice depends on the **stage of your hair loss** and your goals:

1.  **Choose PRP** if you have mild thinning, want to improve hair density, or are looking for a non-invasive option to slow down hair fall.
2.  **Choose a Hair Transplant** if you have significant balding, receding hairlines, or want a permanent fix that doesn't require ongoing monthly sessions.
            `
        },
        {
            slug: "acne-vs-purging",
            title: "Acne vs Purging: Understanding Your Skin’s Signals",
            date: "2025-07-15",
            category: "Skin Care",
            image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop",
            excerpt: "Started a new skincare routine and breaking out? It might be purging, not acne. Learn the vital differences to save your skin.",
            tags: ["Acne", "Skincare", "Dermatology"],
            author: "Dr. Harish Prasad",
            content: `
You just started a new skincare routine and suddenly your face is breaking out. Panic sets in. Is this normal? Is your skin reacting or rejecting the product? Understanding the difference between **acne vs purging** can save your skin and your sanity.

### **What is Acne?**

Acne is a **chronic inflammatory condition** that affects millions worldwide. It results from clogged pores, excess oil production, bacteria, and often hormonal imbalances.

### **What is Skin Purging?**
Skin purging refers to a reaction to an active ingredient that increases skin cell turnover rate. As skin turnover speeds up, the skin starts shedding dead skin cells faster than normal. This brings pre-existing microcomedones (clogged pores) to the surface.

#### **Key Differences**

| Feature | Acne Breakout | Skin Purging |
| :--- | :--- | :--- |
| **Location** | Can happen anywhere, often in new areas | Usually occurs where you normally break out |
| **Duration** | Can last for weeks or months if untreated | Temporary, typically clears up in 4-6 weeks |
| **Cause** | Clogged pores, bacteria, hormones | Active ingredients (Retinoids, AHAs/BHAs) |
            `
        },
        {
            slug: "laser-hair-reduction",
            title: "Say Goodbye to Unwanted Hair: Pros & Cons of Laser Hair Reduction",
            date: "2025-07-15",
            category: "Laser Treatments",
            image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop",
            excerpt: "Tired of shaving and waxing? Laser Hair Reduction offers a long-term solution. Explore the benefits, types of lasers, and what to expect.",
            tags: ["Laser Hair Removal", "Grooming", "Aesthetics"],
            author: "Dr. Harish Prasad",
            content: `
In today’s fast-paced world, self-care is no longer a luxury—it’s a necessity. One of the most sought-after treatments is **Laser Hair Reduction**, a modern solution to eliminate unwanted hair safely and effectively.

### **What is Laser Hair Reduction?**

Laser Hair Reduction is a medical procedure that uses concentrated beams of light to destroy hair follicles, preventing future growth.

#### **How Does It Work?**
- A laser emits light absorbed by the pigment (melanin) in the hair.
- The light energy is converted to heat, damaging the hair follicles.
- This damage inhibits or delays future hair growth.

### **The Pros and Cons**

#### **Pros**
1.  **Precision:** Lasers can target dark, coarse hairs while leaving the surrounding skin undamaged.
2.  **Speed:** Each pulse of the laser takes a fraction of a second.
3.  **Predictability:** Most patients have permanent hair loss after an average of three to seven sessions.
            `
        }
    ];
}
