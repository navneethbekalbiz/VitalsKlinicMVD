import React from 'react';
import { Reveal } from './Reveal';
import { Carousel, Card } from './ui/apple-cards-carousel';

export const Gallery: React.FC = () => {
  const galleryItems = [
    {
      title: "Pimple and Acne Scar Treatment",
      category: "Acne & Pigmentation",
      // Before: Textured, slightly red skin
      src: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=2663&auto=format&fit=crop", 
      // After: Smooth, clear skin
      afterSrc: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=2772&auto=format&fit=crop"
    },
    {
      title: "Earlobe Repair Treatment",
      category: "Reconstructive",
      // Before: Close up, maybe with earrings
      src: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=2574&auto=format&fit=crop", 
      // After: Clean profile
      afterSrc: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Hair Transplant Treatment",
      category: "Hair Restoration",
      // Before: Receding or thinner hair
      src: "https://images.unsplash.com/photo-1552693821-23d324d777db?q=80&w=2670&auto=format&fit=crop", 
      // After: Fuller hair, styled
      afterSrc: "https://images.unsplash.com/photo-1596392927818-23f42199026b?q=80&w=2574&auto=format&fit=crop"
    },
    {
      title: "Mole Removal Treatment",
      category: "Minor Surgery",
      // Before: Skin with marks/freckles
      src: "https://images.unsplash.com/photo-1551021482-95f32cb41097?q=80&w=2000&auto=format&fit=crop", 
      // After: Clear skin
      afterSrc: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2574&auto=format&fit=crop"
    },
    {
      title: "Ingrown Nail Surgery",
      category: "Nail Care",
      // Before: Feet/Pedicure context
      src: "https://images.unsplash.com/photo-1632345031635-7b8000994fd4?q=80&w=2670&auto=format&fit=crop", 
      // After: Clean, healthy feet
      afterSrc: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2574&auto=format&fit=crop"
    },
    {
      title: "PRP Hair Loss Treatment",
      category: "Growth Therapy",
      // Before: Clinical/Treatment process
      src: "https://images.unsplash.com/photo-1634547902360-646876c12c44?q=80&w=2670&auto=format&fit=crop", 
      // After: Healthy, shiny hair
      afterSrc: "https://images.unsplash.com/photo-1595152772835-219638b6d8b9?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Tumour Removal Treatment",
      category: "Surgical Dermatology",
      // Before: Clinical setting/doctor
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop", 
      // After: Happy patient/healthy skin
      afterSrc: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Laser Hair Removal",
      category: "Laser Aesthetics",
      // Before: Laser equipment/process
      src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2670&auto=format&fit=crop", 
      // After: Smooth legs/skin
      afterSrc: "https://images.unsplash.com/photo-1556942040-aec072282741?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  const cards = galleryItems.map((item, index) => (
    <Card 
      key={index} 
      card={{
        src: item.src,
        afterSrc: item.afterSrc,
        title: item.title,
        category: item.category,
        content: (
            <div className="flex flex-col gap-6">
                <p className="font-sans text-lg text-obsidian/80 leading-relaxed font-light">
                    Achieve visible, life-changing results with our specialized {item.title.toLowerCase()}. 
                    We utilize advanced techniques to ensure minimal downtime and maximum aesthetic improvement.
                </p>
                <div className="p-6 bg-sand/30 rounded-2xl border border-obsidian/5">
                    <h4 className="font-display text-xl mb-4">Treatment Highlights</h4>
                    <ul className="list-disc list-inside space-y-2 font-sans text-obsidian/70">
                        <li>Expert consultation and analysis</li>
                        <li>FDA-approved technology</li>
                        <li>Personalized care plan</li>
                    </ul>
                </div>
            </div>
        )
      }} 
      index={index} 
    />
  ));

  return (
    <section id="gallery" className="py-24 md:py-36 bg-sand overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <Reveal width="100%">
          <div className="flex flex-col items-center text-center w-full">
            <span className="text-gold font-sans tracking-[0.2em] text-xs uppercase block mb-4">Real Patients • Real Results</span>
            <h2 className="font-display text-4xl md:text-5xl text-obsidian mb-2">Visible Transformations</h2>
          </div>
        </Reveal>
      </div>

      <div className="w-full h-full">
         <Carousel items={cards} autoScroll={true} />
      </div>
    </section>
  );
};