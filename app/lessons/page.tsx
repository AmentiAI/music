import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { stockImages } from "@/lib/stock-images";
import { instruments } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lessons & instruments",
  description:
    "Private lessons on guitar, piano, drums, voice, strings, brass, and woodwinds at Amped Music School.",
};

export default function LessonsPage() {
  return (
    <main id="main">
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">What we teach</p>
          <h1>Lessons across the ensemble</h1>
          <p className="lead">
            Private instruction on the instruments you love—from core rhythm and harmony to winds, strings, and voice.
          </p>
          <div className="page-hero-banner">
            <Image
              src={stockImages.lessonsBanner.src}
              alt={stockImages.lessonsBanner.alt}
              fill
              sizes="100vw"
              className="page-hero-banner-img"
              priority
            />
          </div>
        </div>
      </div>
      <section className="page-inner section-lessons">
        <div className="container">
          <Reveal>
            <ul className="instrument-grid">
              {instruments.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay="1">
            <aside className="callout callout-gift">
              <div className="callout-body">
                <h3>Gift certificates</h3>
                <p>
                  Give the experience of music lessons—thoughtful, lasting, and personal. Ask us about certificates when
                  you get in touch.
                </p>
              </div>
              <Link className="btn btn-secondary" href="/contact">
                Request info
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
