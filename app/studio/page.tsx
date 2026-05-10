import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { stockImages } from "@/lib/stock-images";

export const metadata: Metadata = {
  title: "Studio photos",
  description: "A look at the Amped Music School teaching space in Richmond, Rhode Island.",
};

export default function StudioPage() {
  return (
    <main id="main">
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Studio</p>
          <h1>Where the music happens</h1>
          <p className="lead">
            A welcoming space for focused lessons—swap in your own photography anytime to showcase your rooms, recitals,
            and community.
          </p>
          <div className="page-hero-banner">
            <Image
              src={stockImages.studioInPerson.src}
              alt={stockImages.studioInPerson.alt}
              fill
              sizes="100vw"
              className="page-hero-banner-img"
              priority
            />
          </div>
        </div>
      </div>
      <section className="page-inner">
        <div className="container">
          <Reveal>
            <div className="studio-grid">
              {stockImages.gallery.map((item) => (
                <figure key={item.id} className="studio-photo">
                  <div className="studio-photo-image-wrap">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="studio-photo-img"
                    />
                  </div>
                  <figcaption>{item.alt}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
