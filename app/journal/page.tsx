import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Notes from the road — essays, field reports, and small stories from the places I've been writing back from. Travel with Liana journal.",
};

interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  alt: string;
}

const featured: Post = {
  slug: "the-bakery-in-glendale",
  category: "Glendale",
  title: "The bakery in Glendale that still makes the gata right.",
  excerpt:
    "Three sisters, one oven, a Wednesday at 6:42 AM. Why I keep going back, and what to order if you only get one trip.",
  date: "Mar 22, 2026",
  readTime: "6 min read",
  img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80&auto=format&fit=crop",
  alt: "A pastry shop window with morning light",
};

const recent: ReadonlyArray<Post> = [
  {
    slug: "why-i-drove-to-big-sur-on-a-tuesday",
    category: "Field notes",
    title: "Why I drove to Big Sur on a Tuesday.",
    excerpt:
      "The case for going midweek, the pull-off you have to know about, and the reason I'll never recommend Pfeiffer Beach on a Saturday.",
    date: "Mar 12, 2026",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80&auto=format&fit=crop",
    alt: "Coastal cliffs at sunset",
  },
  {
    slug: "what-slow-travel-actually-looks-like",
    category: "Essays",
    title: "What &lsquo;slow travel&rsquo; actually looks like.",
    excerpt:
      "Less itinerary, more breakfasts. A working definition after eight years of getting it wrong.",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80&auto=format&fit=crop",
    alt: "European street with morning light",
  },
  {
    slug: "the-cinque-terre-village-i-almost-skipped",
    category: "Italy",
    title: "The Cinque Terre village I almost skipped.",
    excerpt:
      "Manarola is on every list. The other one — the quiet one — is where I&rsquo;d send a friend.",
    date: "Feb 14, 2026",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80&auto=format&fit=crop",
    alt: "Pastel village built into a coastal hillside",
  },
  {
    slug: "yerevan-in-april",
    category: "Armenia",
    title: "Yerevan in April.",
    excerpt:
      "When I go home. Why I always go in spring. The two cafés that are worth the long walk through the cascade.",
    date: "Jan 30, 2026",
    readTime: "10 min read",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80&auto=format&fit=crop",
    alt: "Traveler looking out from a cliffside",
  },
  {
    slug: "what-i-keep-in-my-camera-bag",
    category: "Gear",
    title: "What I keep in my camera bag.",
    excerpt:
      "The body, the one lens I never leave behind, the SD card sleeve that&rsquo;s saved a trip more than once.",
    date: "Jan 18, 2026",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=80&auto=format&fit=crop",
    alt: "Travel photography setup",
  },
  {
    slug: "a-long-drive-up-the-pch",
    category: "Road trips",
    title: "A long drive up the PCH, no playlist allowed.",
    excerpt:
      "What happens when you do the drive without music. The thing I noticed for the first time in twenty trips.",
    date: "Jan 4, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80&auto=format&fit=crop",
    alt: "Empty highway through the mountains",
  },
];

export default function JournalPage() {
  return (
    <>
      <section className="tl-page-hero">
        <p className="breadcrumb">
          <Link href="/">Travel with Liana</Link>
          <span className="sep">·</span>
          <span>Journal</span>
        </p>
        <span className="label">The journal</span>
        <h1>
          Notes from <em>the road.</em>
        </h1>
        <p className="lede">
          Essays, field reports, and small stories from the places
          I&rsquo;ve been writing back from. Slower than Instagram, longer
          than a caption, written from wherever the wifi reaches.
        </p>
      </section>

      <section className="tl-section" data-reveal>
        <div className="tl-journal-featured">
          <Link
            href={`/journal/${featured.slug}`}
            className="shot"
            aria-label={`Read: ${featured.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.img} alt={featured.alt} loading="lazy" />
          </Link>
          <div className="body">
            <span className="label">Latest</span>
            <h2>
              <Link
                href={`/journal/${featured.slug}`}
                style={{ color: "inherit" }}
              >
                {featured.title}
              </Link>
            </h2>
            <p>{featured.excerpt}</p>
            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                fontFamily: "var(--tl-font-body)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--tl-brown)",
              }}
            >
              <span>{featured.category}</span>
              <span style={{ color: "var(--tl-line)" }}>·</span>
              <span>{featured.date}</span>
              <span style={{ color: "var(--tl-line)" }}>·</span>
              <span>{featured.readTime}</span>
            </div>
            <p style={{ marginTop: 22 }}>
              <Link
                href={`/journal/${featured.slug}`}
                className="tl-btn-primary"
              >
                Read the post &rarr;
              </Link>
            </p>
          </div>
        </div>

        <div
          style={{
            margin: "8px 0 32px",
            paddingTop: 24,
            borderTop: "1px solid var(--tl-line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--tl-font-display)",
              fontWeight: 500,
              fontSize: "clamp(22px, 2.6vw, 28px)",
              letterSpacing: "-0.005em",
              color: "var(--tl-espresso)",
            }}
          >
            Recent posts
          </h3>
          <span
            style={{
              fontFamily: "var(--tl-font-hand)",
              fontSize: 22,
              color: "var(--tl-brown)",
            }}
          >
            an archive in progress ✦
          </span>
        </div>

        <div className="tl-journal">
          {recent.map((p) => (
            <Link
              key={p.slug}
              href={`/journal/${p.slug}`}
              className="tl-journal-card"
            >
              <div className="shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
              <div className="meta">
                <span>{p.category}</span>
                <span className="dot">·</span>
                <span>{p.readTime}</span>
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: p.title }} />
              <p dangerouslySetInnerHTML={{ __html: p.excerpt }} />
            </Link>
          ))}
        </div>
      </section>

      <section className="tl-section tl-bg-peach" data-reveal>
        <div
          className="tl-section-inner"
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
        >
          <span className="tl-eyebrow">Stay in touch</span>
          <h2
            style={{
              margin: "10px 0 14px",
              fontFamily: "var(--tl-font-display)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.6vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.014em",
              color: "var(--tl-espresso)",
            }}
          >
            New posts on Sundays.
          </h2>
          <p style={{ margin: "0 0 24px", color: "var(--tl-soft)" }}>
            Two posts a month, sent the morning they go up. No pop-ups, no
            algorithms, just the journal in your inbox.
          </p>
          <p>
            <Link href="/#newsletter" className="tl-btn-primary">
              Subscribe &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
