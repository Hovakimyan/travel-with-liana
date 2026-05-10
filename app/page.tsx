import Interactivity from "@/app/components/Interactivity";

// Destination categories shown on the homepage. Photos are Unsplash
// hotlinks for the demo — swap to her own travel photography once
// the real archive lands.
const destinations = [
  {
    eyebrow: "Weekend Getaways",
    title: "Short trips, big memories.",
    href: "#",
    img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1200&q=80&auto=format&fit=crop",
    alt: "A vintage car parked beside a stretch of palm trees at golden hour",
  },
  {
    eyebrow: "Europe Guides",
    title: "Charming towns & coastal escapes.",
    href: "#",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80&auto=format&fit=crop",
    alt: "Pastel townhouses lining a quiet European street",
  },
  {
    eyebrow: "USA Road Trips",
    title: "Scenic routes & iconic stops.",
    href: "#",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80&auto=format&fit=crop",
    alt: "A winding mountain road cutting through alpine peaks",
  },
];

// Reels — short vertical videos. Each entry pairs an Unsplash poster
// with a stable Pexels MP4. Hover (desktop) or focus (keyboard) plays;
// touch toggles on tap. See app/components/Interactivity.tsx for the
// behavior wiring.
const reels = [
  {
    eyebrow: "Pacific Coast",
    title: "Highway 1 at golden hour",
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80&auto=format&fit=crop",
    video:
      "https://videos.pexels.com/video-files/2098989/2098989-sd_640_360_30fps.mp4",
    isNew: true,
  },
  {
    eyebrow: "Italy",
    title: "Wandering an Amalfi alley",
    poster:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80&auto=format&fit=crop",
    video:
      "https://videos.pexels.com/video-files/1093662/1093662-sd_640_360_30fps.mp4",
    isNew: false,
  },
  {
    eyebrow: "Mountain pass",
    title: "Above the clouds",
    poster:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop",
    video:
      "https://videos.pexels.com/video-files/1722593/1722593-sd_640_360_30fps.mp4",
    isNew: false,
  },
  {
    eyebrow: "Field notes",
    title: "Slow walks, slower shutters",
    poster:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=80&auto=format&fit=crop",
    video:
      "https://videos.pexels.com/video-files/2169880/2169880-sd_640_360_30fps.mp4",
    isNew: false,
  },
];

// Instagram strip — four square tiles. Real Unsplash photos for the demo;
// on the live site this swaps to a live IG Basic Display API pull.
const igTiles = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop",
    alt: "Turquoise water meeting a rocky coast under blue sky",
  },
  {
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80&auto=format&fit=crop",
    alt: "Cobblestone European alley flanked by tall pastel buildings",
  },
  {
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80&auto=format&fit=crop",
    alt: "A traveler in a sun hat looking out over a coastal cliff",
  },
  {
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80&auto=format&fit=crop",
    alt: "A pastel-painted village built into a steep coastal hillside",
  },
];

// Structured data — Person + same-as social profile. Helps Google
// associate the site with her actual Instagram presence.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liana Harutyunyan",
  alternateName: "Travel with Liana",
  jobTitle: "Travel Content Creator",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: ["https://www.instagram.com/liana.harutyunyann/"],
};

export default function Page() {
  return (
    <>
      <a href="#main" className="tl-skip">
        Skip to main content
      </a>

      {/* TOPBAR */}
      <header className="tl-topbar" id="tl-topbar">
        <a href="/" className="tl-mark" aria-label="Travel with Liana home">
          Travel&nbsp;with&nbsp;<em>Liana</em>
        </a>
        <nav className="tl-nav" aria-label="Section navigation">
          <a href="#explore">Destinations</a>
          <a href="#explore">Guides</a>
          <a href="#about">About</a>
          <a href="#newsletter">Journal</a>
          <a href="#collabs">Collabs</a>
        </nav>
        <a href="#newsletter" className="tl-cta-pill">
          Let&rsquo;s connect
        </a>
        <button
          className="tl-menu-toggle"
          aria-label="Open menu"
          type="button"
        >
          <span className="bars">
            <span></span>
          </span>
        </button>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="tl-hero" aria-label="Hero">
          <div
            className="tl-hero-bg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=2000&q=80&auto=format&fit=crop')",
            }}
          />

          {/* Postal stamp decoration */}
          <span className="tl-stamp" aria-hidden="true">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  id="tl-stamp-arc-top"
                  d="M 26,100 a 74,74 0 0 1 148,0"
                  fill="none"
                />
                <path
                  id="tl-stamp-arc-bottom"
                  d="M 174,100 a 74,74 0 0 1 -148,0"
                  fill="none"
                />
              </defs>
              <circle
                cx="100"
                cy="100"
                r="92"
                fill="none"
                stroke="#E7A129"
                strokeWidth="2"
                strokeDasharray="3 4"
                opacity="0.95"
              />
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="#E7A129"
                strokeWidth="1.4"
                opacity="0.95"
              />
              <text
                fontFamily="var(--font-montserrat), sans-serif"
                fontSize="11"
                fontWeight="700"
                letterSpacing="3"
                fill="#E7A129"
              >
                <textPath
                  href="#tl-stamp-arc-top"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  REAL TRAVEL
                </textPath>
              </text>
              <text
                fontFamily="var(--font-montserrat), sans-serif"
                fontSize="11"
                fontWeight="700"
                letterSpacing="3"
                fill="#E7A129"
              >
                <textPath
                  href="#tl-stamp-arc-bottom"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  REAL EXPERIENCES
                </textPath>
              </text>
              {/* Palm tree silhouette */}
              <g
                transform="translate(100, 100)"
                stroke="#E7A129"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 0,22 L 0,-8" />
                <path d="M 0,-8 C -8,-14 -18,-15 -26,-12 C -20,-16 -10,-18 0,-15" />
                <path d="M 0,-8 C 8,-14 18,-15 26,-12 C 20,-16 10,-18 0,-15" />
                <path d="M 0,-8 C -6,-18 -14,-26 -22,-28 C -16,-26 -8,-22 0,-15" />
                <path d="M 0,-8 C 6,-18 14,-26 22,-28 C 16,-26 8,-22 0,-15" />
                <path d="M 0,-8 C -2,-22 0,-32 4,-36 C 0,-30 -1,-22 0,-15" />
                <circle cx="-3" cy="20" r="0.8" fill="#E7A129" />
                <circle cx="3" cy="22" r="0.8" fill="#E7A129" />
              </g>
            </svg>
          </span>

          <div className="tl-hero-inner">
            <span className="tl-hero-tag">LA-based · Travel creator</span>
            <h1>
              <span className="line line-1">Real places.</span>
              <span className="line line-2">Meaningful moments.</span>
              <span className="line line-3">Timeless memories.</span>
            </h1>
            <p className="tl-hero-sub">
              Thoughtful travel guides, hidden gems, and weekend escapes —
              curated with heart and shared with you. Hi, I&rsquo;m Liana.
            </p>
            <div className="tl-hero-ctas">
              <a href="#explore" className="tl-btn-primary">
                Explore guides →
              </a>
              <a href="#about" className="tl-btn-secondary">
                About Liana
              </a>
            </div>
          </div>
        </section>

        {/* EXPLORE / DESTINATIONS */}
        <section className="tl-section" id="explore">
          <div className="tl-explore-head">
            <span className="tl-eyebrow">Inspiring destinations &amp; guides</span>
            <h2>
              Explore<span className="dot">.</span> Dream
              <span className="dot">.</span> Discover<span className="dot">.</span>
            </h2>
            <p>
              Three places to start. The kind of trips that feel less like a
              checklist and more like a story you want to keep telling.
            </p>
          </div>
          <div className="tl-cards">
            {destinations.map((d) => (
              <a key={d.eyebrow} href={d.href} className="tl-card">
                <div className="tl-card-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.img} alt={d.alt} loading="lazy" />
                </div>
                <div className="tl-card-body">
                  <span className="tl-card-eyebrow">{d.eyebrow}</span>
                  <h3 className="tl-card-title">{d.title}</h3>
                  <span className="tl-card-link">Read the guide →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* REELS / IN MOTION */}
        <section className="tl-section" id="watch" aria-label="Video reels">
          <div className="tl-reels-head">
            <span className="tl-eyebrow">In motion</span>
            <h2>
              Reels from <em>the road.</em>
            </h2>
            <p className="hint">hover any clip to play ✦ tap on mobile</p>
          </div>
          <div className="tl-reels">
            {reels.map((r) => (
              <button
                key={r.title}
                className="tl-reel"
                type="button"
                aria-label={`Play video: ${r.title}`}
                data-reel
              >
                <div className="tl-reel-media">
                  {r.isNew && <span className="tl-reel-new">New</span>}
                  <video
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={r.poster}
                    data-reel-video
                    aria-hidden="true"
                  >
                    <source src={r.video} type="video/mp4" />
                  </video>
                  <span className="tl-reel-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <div className="tl-reel-caption">
                    <span className="tl-reel-eyebrow">{r.eyebrow}</span>
                    <p className="tl-reel-title">{r.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ABOUT SNIPPET */}
        <section className="tl-section tl-bg-sand" id="about">
          <div className="tl-section-inner">
            <div className="tl-about-grid">
              <div className="tl-polaroid" aria-hidden="true">
                <div className="tl-polaroid-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80&auto=format&fit=crop"
                    alt="A pastel European street, frame styled as a polaroid"
                    loading="lazy"
                  />
                </div>
                <p className="tl-polaroid-caption">somewhere in italy ✦</p>
              </div>
              <div className="tl-about-copy">
                <span className="tl-about-greet">
                  hi, I&rsquo;m Liana <span className="heart">♡</span>
                </span>
                <h2>
                  The state I have been showing strangers{" "}
                  <em>since I could drive.</em>
                </h2>
                <p className="tl-about-bio">
                  I grew up between Yerevan and Glendale, which means
                  California has always been the place I had to translate. To
                  my grandmother on the phone. To my cousins visiting in
                  summer. To anyone who flew in expecting palm trees and was
                  surprised the rest existed.
                </p>
                <ul className="tl-about-list">
                  <li>
                    <span>
                      <strong>LA-based Armenian creator</strong> — writing
                      from Glendale, traveling out of LAX.
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>
                        Hidden gems, weekend trips &amp; real experiences
                      </strong>{" "}
                      — the way friends recommend places to friends.
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Collabs:</strong>{" "}
                      <a
                        href="mailto:hello@travelwithliana.example"
                        style={{
                          color: "var(--tl-brown)",
                          borderBottom: "1px solid var(--tl-brown)",
                        }}
                      >
                        DM or email
                      </a>{" "}
                      — happy to talk.
                    </span>
                  </li>
                </ul>
                <a href="#newsletter" className="tl-btn-outline">
                  Read the journal
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="tl-section tl-bg-peach" id="newsletter">
          <div className="tl-section-inner">
            <div className="tl-newsletter">
              <div className="tl-newsletter-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1100&q=80&auto=format&fit=crop"
                  alt="A latte with foam art beside a notebook and croissants on a marble table"
                  loading="lazy"
                />
              </div>
              <div className="tl-newsletter-copy">
                <span className="tl-eyebrow">The journal</span>
                <h2>
                  Let&rsquo;s stay in touch <span className="heart">♡</span>
                </h2>
                <p>
                  Get travel tips, new guides, and behind-the-scenes stories
                  — straight to your inbox. Every other Sunday, no more, no
                  less.
                </p>
                <form
                  className="tl-newsletter-form"
                  method="post"
                  action="#"
                  aria-label="Newsletter signup"
                >
                  <label
                    htmlFor="tl-email"
                    className="visually-hidden"
                    style={{ position: "absolute", left: "-9999px" }}
                  >
                    Your email address
                  </label>
                  <input
                    id="tl-email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    autoComplete="email"
                  />
                  <button type="submit">Subscribe</button>
                </form>
                <p className="tl-newsletter-tiny">
                  No spam. Just postcards from the road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IG STRIP */}
        <section className="tl-section" aria-label="Instagram feed">
          <div className="tl-ig-head">
            <span className="label">Follow along on Instagram</span>
            <span className="handle">@travelwithliana</span>
          </div>
          <div className="tl-ig-grid">
            {igTiles.map((t) => (
              <a
                key={t.img}
                href="https://www.instagram.com/liana.harutyunyann/"
                target="_blank"
                rel="noopener"
                className="tl-ig-tile"
                aria-label="View on Instagram"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.alt} loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        {/* COLLABS QUIET STRIP */}
        <section className="tl-collab-strip" id="collabs">
          <span className="tag-hand">collect moments, not things</span>
          <h3>Working with brands &amp; tourism boards.</h3>
          <p>
            Hospitality, fashion, wellness, and tourism partners — the right
            fit means saying no more often than yes. If your story might fit,
            I&rsquo;d love to hear about it.
          </p>
          <a href="mailto:hello@travelwithliana.example" className="email">
            DM or email →
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="tl-footer">
        <div className="tl-footer-inner">
          <div className="tl-footer-brand">
            <p className="mark">
              Travel with <em>Liana</em>
            </p>
            <p className="tl-footer-tagline">
              collect moments, not things ✈
            </p>
            <p className="tl-footer-mini">
              Real travel, hidden gems, and beautiful places through
              Liana&rsquo;s eyes — written from Los Angeles.
            </p>
          </div>
          <div>
            <h5>Find me</h5>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/liana.harutyunyann/"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram →
                </a>
              </li>
              <li>
                <a href="#">TikTok →</a>
              </li>
              <li>
                <a href="#">YouTube →</a>
              </li>
              <li>
                <a href="#">Pinterest →</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>This page</h5>
            <ul>
              <li>
                <a href="#explore">Destinations</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#newsletter">Journal</a>
              </li>
              <li>
                <a href="#collabs">Collabs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tl-footer-meta">
          <span>© 2026 Travel with Liana</span>
          <span>
            Site by{" "}
            <a
              href="https://ashoon.online"
              target="_blank"
              rel="noopener"
            >
              Ashoon
            </a>
          </span>
          <span>Glendale, CA</span>
        </div>
      </footer>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Client island that wires up the topbar shadow + reels hover-play */}
      <Interactivity />
    </>
  );
}
