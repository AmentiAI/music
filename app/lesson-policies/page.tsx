import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { stockImages } from "@/lib/stock-images";

export const metadata: Metadata = {
  title: "Lesson policies",
  description: "Attendance, scheduling, and studio expectations at Amped Music School.",
};

export default function LessonPoliciesPage() {
  return (
    <main id="main">
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Policies</p>
          <h1>Lesson policies</h1>
          <p className="lead">
            Clear expectations help every student get the most from their time with us. The summary below reflects how
            most private studios operate—confirm specifics with the school when you enroll.
          </p>
          <div className="page-hero-banner">
            <Image
              src={stockImages.hero.src}
              alt={stockImages.hero.alt}
              fill
              sizes="(max-width: 640px) 100vw, min(1180px, 92vw)"
              quality={88}
              className="page-hero-banner-img"
              priority
            />
          </div>
        </div>
      </div>
      <section className="page-inner section-policies">
        <div className="container narrow">
          <Reveal>
            <div className="prose-block">
              <h2>Attendance &amp; cancellations</h2>
              <p>
                Regular attendance protects your progress and respects faculty time. If you need to miss a lesson, give as
                much notice as possible. Make-up policies depend on instructor availability and studio rules—we’ll
                provide the exact terms when you register.
              </p>
              <h2>Scheduling</h2>
              <p>
                Lesson slots are reserved on a recurring basis. Changes to your standing time may require advance notice
                and are subject to open availability.
              </p>
              <h2>Studio conduct &amp; safety</h2>
              <p>
                We maintain a respectful, focused environment for all ages. Young students should arrive with a parent or
                guardian according to studio guidelines.
              </p>
              <h2>Full policy packet</h2>
              <p>
                Request the complete policy document when you{" "}
                <Link className="link-inline" href="/contact">
                  get in touch
                </Link>
                —we’ll send the latest version tailored to in-studio and online lessons.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
