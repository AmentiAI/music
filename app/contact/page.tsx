import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { stockImages } from "@/lib/stock-images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for lesson availability, gift certificates, and studio information.`,
};

export default function ContactPage() {
  return (
    <main id="main">
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Start your next chapter in sound</h1>
          <p className="lead">
            Tell us about your instrument, level, and schedule. We’ll follow up with availability and next steps—including
            gift certificates and trial lessons if offered.
          </p>
          <div className="page-hero-banner">
            <Image
              src={stockImages.contactBanner.src}
              alt={stockImages.contactBanner.alt}
              fill
              sizes="(max-width: 640px) 100vw, min(1180px, 92vw)"
              quality={88}
              className="page-hero-banner-img"
              priority
            />
          </div>
        </div>
      </div>
      <section className="page-inner section-contact">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div className="contact-copy">
                <address className="contact-address">
                  <strong>{site.name}</strong>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                  <br />
                  <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
                  <br />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </address>
              </div>
            </Reveal>
            <Reveal delay="1">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
