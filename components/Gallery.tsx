import React from 'react';
import { Reveal } from './Reveal';
import { Carousel, Card } from './ui/apple-cards-carousel';
import acneScarBfr from './ASSETS/BEFORE TREATMENT/ACNESCARBFR.jpg';
import acneScarAft from './ASSETS/AFTER TREATMENT/acnescarclean.jpg';

export const Gallery: React.FC = () => {
  const galleryItems = [
    {
      title: "Pimple and Acne Scar Treatment",
      category: "Acne & Pigmentation",
      src: acneScarBfr,
      afterSrc: acneScarAft
    },
    {
      title: "Earlobe Repair Treatment",
      category: "Reconstructive",
      src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Hair Transplant Treatment",
      category: "Hair Restoration",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1595152772835-219638b6d8b9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Mole Removal Treatment",
      category: "Minor Surgery",
      src: "https://images.unsplash.com/photo-1551021482-95f32cb41097?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Ingrown Nail Surgery",
      category: "Nail Care",
      src: "https://images.unsplash.com/photo-1519415510236-718bdfcd4788?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1632345031635-7b8000994fd4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "PRP Hair Loss Treatment",
      category: "Growth Therapy",
      src: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Laser Hair Removal",
      category: "Laser Aesthetics",
      src: "https://images.unsplash.com/photo-1596910547037-846b7dd4cdd8?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1556942040-aec072282741?q=80&w=1000&auto=format&fit=crop"
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