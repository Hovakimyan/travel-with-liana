import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  alt: string;
  body: string; // HTML; in production this comes from a CMS or MDX
}

// Tiny in-file post collection so the route works end-to-end.
// Real client wires this up to a CMS (Sanity, Contentlayer, Notion API,
// MDX files in /content) — the page template doesn't change.
const POSTS: Record<string, Post> = {
  "the-bakery-in-glendale": {
    slug: "the-bakery-in-glendale",
    category: "Glendale",
    title: "The bakery in Glendale that still makes the gata right.",
    excerpt:
      "Three sisters, one oven, a Wednesday at 6:42 AM. Why I keep going back, and what to order if you only get one trip.",
    date: "Mar 22, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80&auto=format&fit=crop",
    alt: "A pastry shop window with morning light",
    body: `
      <p>The first time I went, my grandmother was the one who told me to. She said it the way she said most things about Glendale — flatly, in Armenian, with the certainty of someone who had already decided I would understand later. <em>Go to the one on Maryland. Not the one on Brand. The one on Maryland.</em></p>

      <p>It took me ten years to listen.</p>

      <h2>What you should order</h2>
      <p>Get the gata. Not the modern one with the flaky outside and the dry middle, but the round, dense, slightly sweet kind that tastes like the version your aunt makes when she's mad at you and trying to apologize. They make exactly two batches a day. The morning batch is gone by 9. The afternoon batch is what you take home for tomorrow.</p>

      <p>If they have it, also get the <strong>nazook</strong> with walnuts. The walnuts come from a guy in the valley they buy from twice a year. You can taste the difference and you can't quite name what the difference is.</p>

      <h2>What to know before you go</h2>
      <ul>
        <li>Cash is fine. Card is also fine. They will not enjoy splitting the bill three ways.</li>
        <li>The line on Saturdays starts before they open. The line on Wednesdays does not exist.</li>
        <li>The middle sister is the one who speaks the most English. The eldest will pretend she doesn't, then correct your pronunciation when you try.</li>
        <li>Don't ask for the recipe. They will say no kindly, but the asking embarrasses everyone, especially you.</li>
      </ul>

      <blockquote>
        <p>You can't put a place like this on a list. You can only tell one person at a time, the way my grandmother told me, and trust them to pass it on the same way.</p>
      </blockquote>

      <h2>The thing I keep coming back for</h2>
      <p>It's not the gata. It's the way the eldest sister hands it to me without me asking, in a paper bag she folded that morning, the way my mother used to fold lunches. Twenty years later, in a strip mall in Glendale, someone is still doing that for somebody. That's what I'm paying for.</p>

      <p>I won't put the address here. If you message me on Instagram, I'll send it. That's the deal. Some things you have to be told.</p>
    `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <>
      <article>
        <section className="tl-page-hero">
          <p className="breadcrumb">
            <Link href="/">Travel with Liana</Link>
            <span className="sep">·</span>
            <Link href="/journal">Journal</Link>
            <span className="sep">·</span>
            <span>{post.category}</span>
          </p>
          <span className="label">{post.category}</span>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <p className="lede">{post.excerpt}</p>
          <div className="meta">
            <span>
              <strong>By</strong> Liana Harutyunyan
            </span>
            <span>
              <strong>Posted</strong> {post.date}
            </span>
            <span>
              <strong>Read</strong> {post.readTime}
            </span>
          </div>
        </section>

        <div className="tl-lead-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.img} alt={post.alt} />
        </div>

        <div
          className="tl-prose"
          data-reveal
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>

      <section
        className="tl-section tl-bg-peach"
        data-reveal
        style={{ marginTop: "clamp(48px, 6vw, 80px)" }}
      >
        <div
          className="tl-section-inner"
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
        >
          <span className="tl-eyebrow">More from the journal</span>
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
            New posts every other Sunday.
          </h2>
          <p style={{ margin: "0 0 24px", color: "var(--tl-soft)" }}>
            Subscribe and the next one lands in your inbox.
          </p>
          <p>
            <Link href="/#newsletter" className="tl-btn-primary">
              Subscribe to the journal &rarr;
            </Link>
          </p>
          <p style={{ marginTop: 16 }}>
            <Link href="/journal" className="tl-btn-outline">
              Browse the archive
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
