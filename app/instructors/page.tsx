import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { stockImages } from "@/lib/stock-images";
import { faculty } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instructors",
  description:
    "Meet the Amped Music School faculty—experienced educators dedicated to your progress on guitar, piano, drums, voice, and bass.",
};

export default function InstructorsPage() {
  return (
    <main id="main">
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Faculty</p>
          <h1>Educators who invest in your growth</h1>
          <p className="lead">
            Highly trained on their instruments—and committed to your progress with structured guidance and honest
            encouragement.
          </p>
          <div className="page-hero-banner">
            <Image
              src={stockImages.instructorsBanner.src}
              alt={stockImages.instructorsBanner.alt}
              fill
              sizes="100vw"
              className="page-hero-banner-img"
              priority
            />
          </div>
        </div>
      </div>
      <section className="page-inner section-faculty">
        <div className="container">
          <ul className="faculty-grid">
            {faculty.map((person, i) => (
              <li key={person.name} className="faculty-card">
                <Reveal delay={i % 3 === 0 ? "0" : i % 3 === 1 ? "1" : "2"}>
                  <span className="faculty-name">{person.name}</span>
                  <span className="faculty-role">{person.role}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
