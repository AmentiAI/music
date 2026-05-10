import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { stockImages } from "@/lib/stock-images";

export const metadata: Metadata = {
  title: "Payments & tuition",
  description: "Tuition, billing, and payment options at Amped Music School.",
};

export default function PaymentsPage() {
  return (
    <main id="main">
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Payments</p>
          <h1>Tuition &amp; billing</h1>
          <p className="lead">
            We keep billing straightforward so lessons stay the focus. Details vary by program—reach out and we’ll share
            the current rate sheet and payment options.
          </p>
          <div className="page-hero-banner">
            <Image
              src={stockImages.studioOnline.src}
              alt={stockImages.studioOnline.alt}
              fill
              sizes="100vw"
              className="page-hero-banner-img"
              priority
            />
          </div>
        </div>
      </div>
      <section className="page-inner">
        <div className="container narrow">
          <Reveal>
            <div className="prose-block">
              <h2>How payments work</h2>
              <p>
                Most families pay on a monthly or term-based schedule. We can walk you through what fits your lesson
                length, frequency, and whether you study in-studio or online.
              </p>
              <h2>Gift certificates</h2>
              <p>
                Certificates can be applied toward lessons or packages. Mention gift purchases when you{" "}
                <Link className="link-inline" href="/contact">
                  contact us
                </Link>{" "}
                so we can prepare the right denomination and messaging.
              </p>
              <h2>Questions?</h2>
              <p>
                For account-specific questions or to set up autopay alternatives, email or call the studio—we’re happy to
                help.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
