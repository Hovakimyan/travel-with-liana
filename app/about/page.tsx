import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Liana Harutyunyan — LA-based Armenian travel creator. The story behind the bio, what I shoot with, and where I've been writing back from.",
};

const polaroidWall = [
  {
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80&auto=format&fit=crop",
    alt: "A traveler at a coastal viewpoint",
    caption: "big sur, may",
  },
  {
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80&auto=format&fit=crop",
    alt: "European cobblestone street",
    caption: "amalfi, june",
  },
  {
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80&auto=format&fit=crop",
    alt: "Pastel village on a coastal hill",
    caption: "cinque terre, july",
  },
  {
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80&auto=format&fit=crop",
    alt: "Forest with autumn light",
    caption: "joshua tree, march",
  },
];

const press = [
  "Condé Nast",
  "Travel + Leisure",
  "The Infatuation",
  "LA Mag",
  "Glendale News",
  "Wallpaper",
];

const kit = [
  { label: "Body", value: "Sony α7 IV" },
  { label: "Lens (almost always)", value: "Sigma 35mm f/1.4 Art" },
  { label: "Phone backup", value: "iPhone 15 Pro" },
  { label: "Bag", value: "Bellroy Venture Sling" },
  { label: "Notebook", value: "Field Notes (Standard, ruled)" },
  { label: "Pen", value: "Anything with black ink, ideally cheap" },
];

export default function AboutPage() {
  return (
    <>
      <section className="tl-page-hero">
        <p className="breadcrumb">
          <Link href="/">Travel with Liana</Link>
          <span className="sep">·</span>
          <span>About</span>
        </p>
        <span
          className="label"
          style={{
            fontFamily: "var(--tl-font-hand)",
            fontSize: "clamp(28px, 3.4vw, 40px)",
            color: "var(--tl-brown)",
            textTransform: "none",
            letterSpacing: "0.005em",
            paddingBottom: 0,
          }}
        >
          hi, I&rsquo;m Liana <span style={{ color: "var(--tl-peach)" }}>♡</span>
        </span>
        <h1>
          Two countries, <em>one map.</em>
        </h1>
        <p className="lede">
          LA-based Armenian creator, writing from Glendale and traveling out
          of LAX. I make travel content for hospitality and tourism brands
          and small private guides for friends-of-friends. The site is the
          place all of that lives.
        </p>
      </section>

      <section className="tl-section" data-reveal>
        <div className="tl-section-inner" style={{ maxWidth: 720 }}>
          <div className="tl-prose" style={{ padding: 0 }}>
            <p>
              I grew up between Yerevan and Glendale, which means California
              has always been the place I had to translate. To my
              grandmother on the phone. To my cousins visiting in summer.
              To anyone who flew in expecting palm trees and was surprised
              the rest existed.
            </p>
            <p>
              The Instagram started as notes for friends. Where to eat in
              Atwater. Which Big Sur pull-off is worth the gas. Which
              Glendale bakery actually still makes the gata right. Brands
              started reaching out around the time the captions got longer.
            </p>
            <p>
              Now I run small private guides alongside the content work —
              usually for international visitors and small groups who want
              a real day, not a bus. The two sides of what I do feed each
              other. The journal is the slower version of all of it.
            </p>
            <p>
              The work I&rsquo;m proudest of is rarely on the grid. It&rsquo;s
              the friend who texted me asking where to go in Sonoma and
              ended up engaged at the spot I sent her. It&rsquo;s the brand
              partnership that turned into a real friendship. It&rsquo;s the
              pieces I write here that don&rsquo;t do well in the algorithm
              but show up later in someone&rsquo;s saved tab six months in.
            </p>
          </div>
        </div>
      </section>

      <section className="tl-section tl-bg-sand" data-reveal>
        <div className="tl-section-inner">
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(20px, 3vw, 32px)",
            }}
          >
            <span className="tl-eyebrow">A few of the recent ones</span>
          </div>
          <div className="tl-polaroid-wall">
            {polaroidWall.map((p) => (
              <div className="tl-polaroid" key={p.caption}>
                <div className="tl-polaroid-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.alt} loading="lazy" />
                </div>
                <p className="tl-polaroid-caption">{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tl-section" data-reveal>
        <div className="tl-section-inner">
          <div
            style={{
              display: "grid",
              gap: "clamp(36px, 5vw, 64px)",
              gridTemplateColumns: "1fr",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "clamp(36px, 5vw, 64px)",
                gridTemplateColumns: "1fr",
              }}
              className="tl-about-meta-grid"
            >
              <div>
                <span className="tl-eyebrow">Featured in</span>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px 36px",
                    marginTop: 16,
                    color: "var(--tl-soft)",
                    fontFamily: "var(--tl-font-display)",
                    fontStyle: "italic",
                    fontSize: "clamp(18px, 2vw, 24px)",
                  }}
                >
                  {press.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 12,
                    color: "var(--tl-soft)",
                    fontStyle: "italic",
                  }}
                >
                  (Demo placeholders — real client replaces with their actual
                  press features.)
                </p>
              </div>

              <div>
                <span className="tl-eyebrow">In my bag</span>
                <ul
                  style={{
                    margin: "16px 0 0",
                    padding: 0,
                    listStyle: "none",
                    display: "grid",
                    gap: 14,
                  }}
                >
                  {kit.map((k) => (
                    <li
                      key={k.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: "0 18px",
                        alignItems: "baseline",
                        paddingBottom: 10,
                        borderBottom: "1px solid var(--tl-line)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--tl-font-body)",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--tl-brown)",
                          minWidth: 160,
                        }}
                      >
                        {k.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--tl-font-display)",
                          fontSize: 18,
                          color: "var(--tl-espresso)",
                        }}
                      >
                        {k.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tl-collab-strip" data-reveal>
        <span className="tag-hand">say hi</span>
        <h3>If we haven&rsquo;t met yet.</h3>
        <p>
          I read every email. The fastest answers come for trip planning
          and brand collabs; the slowest come for &ldquo;just hi&rdquo;
          notes, but those are the ones I save.
        </p>
        <a href="mailto:hello@travelwithliana.example" className="email">
          Email me &rarr;
        </a>
      </section>
    </>
  );
}
