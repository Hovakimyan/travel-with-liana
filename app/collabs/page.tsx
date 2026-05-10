import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collabs",
  description:
    "Working with brands, hospitality partners, and tourism boards. What I do, how I work, what I won't do — and how to send a brief.",
};

const services = [
  {
    num: "01",
    title: "Sponsored content",
    desc: "Reels, carousels, and stories woven into my regular publishing rhythm — never standalone ad reads.",
  },
  {
    num: "02",
    title: "Brand campaigns",
    desc: "Multi-asset shoots for hospitality and travel brands — hero film + cutdowns + paid usage rights as needed.",
  },
  {
    num: "03",
    title: "Hosted trips & press",
    desc: "Editorial coverage of brand-funded trips. Best when there's room for a real point of view, not just the brief.",
  },
  {
    num: "04",
    title: "Speaking & podcasts",
    desc: "Travel, content, Armenian-American identity, building a small business as a creator. I show up prepared.",
  },
];

const process = [
  {
    n: "01",
    title: "Send the brief",
    body: "Email with the gist — brand, project, timeline, budget range, deliverables you have in mind. Five lines is plenty.",
  },
  {
    n: "02",
    title: "We talk",
    body: "If it sounds like a fit, I'll send back questions, a usage proposal, and a rate. If not, I'll say so quickly and try to suggest someone better suited.",
  },
  {
    n: "03",
    title: "Work, then publish",
    body: "Production, one round of revisions on captions and cuts, same-day approvals on stories, paid invoiced on completion.",
  },
];

const wontDo = [
  "Undisclosed paid posts.",
  "Products I haven't actually used.",
  "Hard-sell ad reads in the middle of editorial content.",
  "Categories I have a personal conflict with (you'll know which ones).",
  "Exclusive usage rights forever.",
];

export default function CollabsPage() {
  return (
    <>
      <section className="tl-page-hero">
        <p className="breadcrumb">
          <Link href="/">Travel with Liana</Link>
          <span className="sep">·</span>
          <span>Collabs</span>
        </p>
        <span className="label">For brands &amp; agencies</span>
        <h1>
          Working <em>together.</em>
        </h1>
        <p className="lede">
          A short page so you can decide if I&rsquo;m a fit before the
          first email. The way I work, the kinds of projects I love, and
          the specific things I&rsquo;ll politely say no to.
        </p>
        <div className="meta">
          <span><strong>Based</strong> Los Angeles, CA</span>
          <span><strong>Languages</strong> English · Armenian · Russian</span>
          <span><strong>Reach</strong> Available year-round</span>
        </div>
      </section>

      <section className="tl-section" data-reveal>
        <div className="tl-section-head">
          <span className="tl-eyebrow">What I do</span>
          <h2>
            Four kinds of <em>collabs.</em>
          </h2>
          <p>
            Most of my work falls into one of these. If your project
            doesn&rsquo;t — send the brief anyway, sometimes the best
            partnerships start with &ldquo;this isn&rsquo;t quite&rdquo;
            and end somewhere unexpected.
          </p>
        </div>
        <div className="tl-services">
          {services.map((s) => (
            <div key={s.title} className="tl-service-row">
              <span className="num">/ {s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tl-section tl-bg-sand" data-reveal>
        <div className="tl-section-inner">
          <div className="tl-section-head">
            <span className="tl-eyebrow">How I work</span>
            <h2>
              Three steps. <em>One signed agreement.</em>
            </h2>
            <p>
              No surprises. The whole engagement is documented in writing
              before any content gets made.
            </p>
          </div>
          <div
            className="tl-services"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              maxWidth: "100%",
            }}
          >
            {process.map((p) => (
              <div key={p.title} className="tl-service-row">
                <span className="num">/ {p.n}</span>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tl-section tl-bg-espresso" data-reveal>
        <div className="tl-section-inner">
          <div
            className="tl-section-head"
            style={{ color: "var(--tl-ivory)" }}
          >
            <span
              className="tl-eyebrow"
              style={{ color: "var(--tl-peach)" }}
            >
              What I won&rsquo;t do
            </span>
            <h2 style={{ color: "var(--tl-ivory)" }}>
              The list, <em style={{ color: "var(--tl-peach)" }}>before you ask.</em>
            </h2>
            <p style={{ color: "rgba(250, 247, 242, 0.7)" }}>
              Saying no protects what your campaign is paying for. None of
              this is rigid — every brief is a conversation — but starting
              from honest defaults saves us both a round trip.
            </p>
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: 14,
              maxWidth: 640,
            }}
          >
            {wontDo.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "16px 18px",
                  background: "rgba(250, 247, 242, 0.06)",
                  border: "1px solid rgba(250, 247, 242, 0.10)",
                  borderRadius: 4,
                  color: "var(--tl-ivory)",
                  fontSize: 15,
                  lineHeight: 1.55,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    color: "var(--tl-peach)",
                    fontFamily: "var(--tl-font-display)",
                    fontStyle: "italic",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  ✗
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tl-section" data-reveal>
        <div
          className="tl-section-inner"
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
        >
          <span className="tag-hand" style={{
            display: "inline-block",
            fontFamily: "var(--tl-font-hand)",
            fontSize: "clamp(28px, 3.4vw, 40px)",
            color: "var(--tl-brown)",
          }}>
            ready when you are
          </span>
          <h2
            style={{
              margin: "10px 0 14px",
              fontFamily: "var(--tl-font-display)",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: "clamp(28px, 3.6vw, 40px)",
              lineHeight: 1.15,
              color: "var(--tl-espresso)",
            }}
          >
            Send a brief.
          </h2>
          <p style={{ margin: "0 0 28px", color: "var(--tl-soft)" }}>
            Five lines is enough. Brand, project, timeline, budget range,
            and any deliverables you have in mind. I read everything
            within one to two business days.
          </p>
          <p>
            <a
              href="mailto:hello@travelwithliana.example"
              className="tl-btn-primary"
            >
              hello@travelwithliana.example
            </a>
          </p>
          <p
            style={{
              marginTop: 18,
              fontSize: 13,
              color: "var(--tl-soft)",
            }}
          >
            Or DM me on{" "}
            <a
              href="https://www.instagram.com/liana.harutyunyann/"
              target="_blank"
              rel="noopener"
              style={{
                color: "var(--tl-brown)",
                borderBottom: "1px solid var(--tl-brown)",
              }}
            >
              Instagram
            </a>
            {" "}— I check it more than I should.
          </p>
        </div>
      </section>
    </>
  );
}
