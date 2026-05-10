import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ResourceTiles } from "@/components/ResourceTiles";
import { stockImages } from "@/lib/stock-images";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <main id="main">
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow">Richmond, Rhode Island · Since 2013</p>
                <div className="hero-copy-intro">
                  <div>
                    <h1 className="hero-title">
                      Private lessons that <em>amplify</em> your musicianship.
                    </h1>
                    <p className="hero-lead">
                      One-on-one instruction from dedicated educators. In our studio or online—tailored to your goals,
                      pace, and sound.
                    </p>
                  </div>
                  <div className="hero-copy-image" aria-hidden="true">
                    <Image
                      src={stockImages.heroAccent1.src}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 30vw, 180px"
                      className="hero-figure-img"
                    />
                  </div>
                </div>
                <div className="hero-actions">
                  <Link className="btn btn-primary" href="/contact">
                    Book a lesson
                  </Link>
                  <Link className="btn btn-ghost" href="/lessons">
                    Explore instruments
                  </Link>
                </div>
                <ul className="hero-stats" aria-label="Highlights">
                  <li>
                    <strong>Online &amp; in-studio</strong>
                    <span>Flexible formats</span>
                  </li>
                  <li>
                    <strong>Gift certificates</strong>
                    <span>Perfect for any occasion</span>
                  </li>
                  <li>
                    <strong>All ages</strong>
                    <span>Guidance at every level</span>
                  </li>
                </ul>
              </Reveal>
            </div>
            <div className="hero-visual">
              <Reveal delay="1">
                <div className="hero-collage" aria-label="Music lesson photography">
                  <div className="hero-collage-main">
                    <Image
                      src={stockImages.hero.src}
                      alt={stockImages.hero.alt}
                      fill
                      sizes="(max-width: 900px) 92vw, 340px"
                      className="hero-figure-img"
                      priority
                    />
                    <div className="hero-collage-quote">
                      <span className="hero-collage-quote-label">Our ethos</span>
                      <p>“The success of our students is our own success.”</p>
                      <cite>— Amped faculty</cite>
                    </div>
                  </div>
                  <div className="hero-collage-side">
                    <Image
                      src={stockImages.heroAccent1.src}
                      alt={stockImages.heroAccent1.alt}
                      fill
                      sizes="(max-width: 900px) 44vw, 180px"
                      className="hero-figure-img"
                      priority
                    />
                  </div>
                  <div className="hero-collage-side">
                    <Image
                      src={stockImages.heroAccent2.src}
                      alt={stockImages.heroAccent2.alt}
                      fill
                      sizes="(max-width: 900px) 44vw, 180px"
                      className="hero-figure-img"
                      priority
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="home-strip-section" aria-label="Program gallery preview">
          <div className="container">
            <Reveal>
              <div className="home-photo-strip">
                <p className="home-photo-strip-label">Across instruments &amp; ages</p>
                <div className="home-photo-strip-grid">
                  {stockImages.homeStrip.map((item) => (
                    <div key={item.id} className="home-strip-cell">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 180px"
                        className="home-strip-img"
                      />
                    </div>
                  ))}
                </div>
                <p className="home-strip-cta">
                  <Link href="/studio" className="link-inline">
                    View the studio gallery →
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-lessons">
          <div className="container">
            <Reveal>
              <header className="section-head">
                <p className="eyebrow">What we teach</p>
                <h2 className="section-title">Lessons across the ensemble</h2>
                <p className="section-desc">
                  Private instruction on the instruments you love—from core rhythm and harmony to winds, strings, and
                  voice.
                </p>
              </header>
            </Reveal>
            <div className="home-bento">
              <Reveal>
                <div>
                  <p className="section-desc" style={{ marginBottom: "1.25rem" }}>
                    Strings, winds, rhythm section, and voice—structured for beginners through advancing players. See
                    every offering on the Lessons page.
                  </p>
                  <Link className="btn btn-primary" href="/lessons" style={{ marginRight: "0.65rem" }}>
                    Full instrument list
                  </Link>
                  <Link className="btn btn-ghost" href="/instructors">
                    Meet faculty
                  </Link>
                  <aside className="callout callout-gift" style={{ marginTop: "2rem" }}>
                    <div className="callout-body">
                      <h3>Gift certificates</h3>
                      <p>
                        Give the experience of music lessons—thoughtful, lasting, and personal. Ask us about certificates
                        when you get in touch.
                      </p>
                    </div>
                    <Link className="btn btn-secondary" href="/contact">
                      Request info
                    </Link>
                  </aside>
                </div>
              </Reveal>
              <Reveal delay="1">
                <div className="home-bento-visual">
                  <div className="home-bento-cell tall">
                    <Image
                      src={stockImages.strings.src}
                      alt={stockImages.strings.alt}
                      fill
                      sizes="(max-width: 900px) 45vw, 280px"
                      className="home-bento-img"
                    />
                  </div>
                  <div className="home-bento-cell">
                    <Image
                      src={stockImages.winds.src}
                      alt={stockImages.winds.alt}
                      fill
                      sizes="(max-width: 900px) 45vw, 200px"
                      className="home-bento-img"
                    />
                  </div>
                  <div className="home-bento-cell">
                    <Image
                      src={stockImages.voice.src}
                      alt={stockImages.voice.alt}
                      fill
                      sizes="(max-width: 900px) 45vw, 200px"
                      className="home-bento-img"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section-formats">
          <div className="container">
            <Reveal>
              <header className="section-head">
                <p className="eyebrow">How it works</p>
                <h2 className="section-title">Practice daily for the best outcome</h2>
                <p className="section-desc">
                  Consistency beats intensity. We help you build a routine that fits real life—so progress feels natural,
                  not forced.
                </p>
              </header>
            </Reveal>
            <div className="format-cards">
              <Reveal>
                <article className="format-card">
                  <div className="format-card-media">
                    <Image
                      src={stockImages.studioInPerson.src}
                      alt={stockImages.studioInPerson.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                      className="format-card-img"
                    />
                  </div>
                  <span className="format-icon" aria-hidden="true">
                    ◇
                  </span>
                  <h3>In-studio</h3>
                  <p>
                    Learn in a focused environment with hands-on coaching, tone production, and real-time feedback.
                  </p>
                </article>
              </Reveal>
              <Reveal delay="1">
                <article className="format-card">
                  <div className="format-card-media">
                    <Image
                      src={stockImages.studioOnline.src}
                      alt={stockImages.studioOnline.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                      className="format-card-img"
                    />
                  </div>
                  <span className="format-icon" aria-hidden="true">
                    ◎
                  </span>
                  <h3>Online</h3>
                  <p>
                    Study from home with clear lesson plans, play-along materials, and the same faculty you’d meet in
                    person.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section-resources">
          <div className="container">
            <div className="home-resources-split">
              <Reveal>
                <header className="section-head">
                  <p className="eyebrow">Beyond the lesson</p>
                  <h2 className="section-title">Video, community, and practice tools</h2>
                  <p className="section-desc">
                    New tutorials and lessons are always within reach—so you can review, warm up, and explore between
                    sessions.
                  </p>
                </header>
              </Reveal>
              <Reveal delay="1">
                <div className="home-resources-visual">
                  <Image
                    src={stockImages.contactBanner.src}
                    alt={stockImages.contactBanner.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 400px"
                    className="home-resources-img"
                  />
                </div>
              </Reveal>
            </div>
            <Reveal>
              <ResourceTiles />
            </Reveal>
          </div>
        </section>

        <section className="section section-policies">
          <div className="container narrow">
            <Reveal>
              <header className="section-head">
                <p className="eyebrow">Policies &amp; studio</p>
                <h2 className="section-title">Clear expectations, great experiences</h2>
                <p className="section-desc">
                  Lesson policies, scheduling, payments, and studio guidelines are all spelled out so you can focus on
                  playing.
                </p>
              </header>
            </Reveal>
            <Reveal>
              <ul className="policy-list">
                <li>
                  <Link href="/lesson-policies">Lesson policies &amp; attendance →</Link>
                </li>
                <li>
                  <Link href="/payments">Tuition &amp; payments →</Link>
                </li>
                <li>
                  <Link href="/studio">Studio photos &amp; space →</Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section section-contact">
          <div className="container narrow">
            <Reveal>
              <header className="section-head">
                <p className="eyebrow">Visit us</p>
                <h2 className="section-title">Richmond, Rhode Island</h2>
                <p className="section-desc">
                  {site.name}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                  <br />
                  <a className="link-inline" href={`tel:${site.phoneTel}`}>
                    {site.phone}
                  </a>
                  <br />
                  <a className="link-inline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
              </header>
            </Reveal>
            <Reveal delay="1">
              <p style={{ margin: 0 }}>
                <Link className="btn btn-primary" href="/contact">
                  Go to full contact form →
                </Link>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
