import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "California weekend getaways, European hideaways, and the kind of road trips that ruin you for fast travel. The full library of guides from Travel with Liana.",
};

type Category = "weekend" | "europe" | "road-trips" | "wine" | "armenia";

const guides: ReadonlyArray<{
  category: Category;
  eyebrow: string;
  title: string;
  blurb: string;
  img: string;
  alt: string;
}> = [
  {
    category: "road-trips",
    eyebrow: "Pacific Coast Highway",
    title: "Malibu to Big Sur in two days.",
    blurb:
      "Three pull-offs nobody tells you about, the better motel in Cambria, and the lunch spot that justifies the whole drive.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80&auto=format&fit=crop",
    alt: "Winding coastal highway above the Pacific",
  },
  {
    category: "europe",
    eyebrow: "Italy",
    title: "Five days in the Amalfi Coast.",
    blurb:
      "The villages worth staying in vs. the ones worth driving past. Best lemon granita on the coast.",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80&auto=format&fit=crop",
    alt: "Sunlit Amalfi alley with pastel buildings",
  },
  {
    category: "weekend",
    eyebrow: "Weekend Getaways",
    title: "A 36-hour reset in Ojai.",
    blurb:
      "When you can't take a real trip but need one. The exact Friday-Sunday I run when LA gets loud.",
    img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1200&q=80&auto=format&fit=crop",
    alt: "Vintage car with palm trees at golden hour",
  },
  {
    category: "wine",
    eyebrow: "Wine Country",
    title: "Sonoma without the queues.",
    blurb:
      "Two boutique wineries, the breakfast spot in Healdsburg, and a barn-conversion stay that ruined hotels for me.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
    alt: "Mountains above clouds at sunset",
  },
  {
    category: "europe",
    eyebrow: "France",
    title: "Slow Provence in summer.",
    blurb:
      "The market days in Aix, the village I almost moved to, the field of lavender that's not the famous one.",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80&auto=format&fit=crop",
    alt: "Pastel European street with morning light",
  },
  {
    category: "road-trips",
    eyebrow: "USA Road Trips",
    title: "Joshua Tree, Pioneertown, and the desert nights.",
    blurb:
      "Where to stay (the Airstream OR the cabin), what to drink at Pappy & Harriet's, and the best stargazing pull-off off the 62.",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80&auto=format&fit=crop",
    alt: "Desert landscape at dusk",
  },
  {
    category: "armenia",
    eyebrow: "Armenia",
    title: "Yerevan, slowly.",
    blurb:
      "My grandmother's neighborhood, the cafe by the cascade, the Sunday bread I miss every week. Bring an empty stomach.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80&auto=format&fit=crop",
    alt: "Armenian village built into a hillside",
  },
  {
    category: "weekend",
    eyebrow: "Weekend Getaways",
    title: "Carmel-by-the-Sea, no itinerary required.",
    blurb:
      "A weekend designed for two people and zero plans. Walk the beach, eat at the place with the candles, sleep in.",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop",
    alt: "Coastal cliff at golden hour",
  },
  {
    category: "europe",
    eyebrow: "Greece",
    title: "Crete, off the cruise-ship trail.",
    blurb:
      "Skip Heraklion, drive west. The villages, the gorge hike, the family-run taverna nobody Instagrams.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
    alt: "Mediterranean sea at golden hour",
  },
];

const filters: ReadonlyArray<{ id: Category | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "weekend", label: "Weekend" },
  { id: "europe", label: "Europe" },
  { id: "road-trips", label: "Road trips" },
  { id: "wine", label: "Wine country" },
  { id: "armenia", label: "Armenia" },
];

export default function DestinationsPage() {
  return (
    <>
      <section className="tl-page-hero">
        <p className="breadcrumb">
          <Link href="/">Travel with Liana</Link>
          <span className="sep">·</span>
          <span>Destinations</span>
        </p>
        <span className="label">Destinations &amp; guides</span>
        <h1>
          Places worth <em>going slow.</em>
        </h1>
        <p className="lede">
          Every destination here is one I&rsquo;ve actually spent time in.
          The guides skip the lists everyone else writes and tell you what I
          actually do when I land — where I eat the first night, the
          neighborhood worth staying in, the thing that made the trip.
        </p>
      </section>

      <div className="tl-pills" aria-label="Filter by category">
        {filters.map((f, i) => (
          <a
            key={f.id}
            href={f.id === "all" ? "#" : `#${f.id}`}
            className={`tl-pill${i === 0 ? " is-active" : ""}`}
          >
            {f.label}
          </a>
        ))}
      </div>

      <section className="tl-section" data-reveal>
        <div className="tl-cards">
          {guides.map((g) => (
            <article
              key={g.title}
              id={g.category}
              className="tl-card"
              style={{ scrollMarginTop: "100px" }}
            >
              <div className="tl-card-shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={g.alt} loading="lazy" />
              </div>
              <div className="tl-card-body">
                <span className="tl-card-eyebrow">{g.eyebrow}</span>
                <h3 className="tl-card-title">{g.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--tl-soft)" }}>
                  {g.blurb}
                </p>
                <span className="tl-card-link" style={{ marginTop: 16 }}>
                  Read the guide &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tl-collab-strip" data-reveal>
        <span className="tag-hand">tell me where to go</span>
        <h3>Looking for something specific?</h3>
        <p>
          If you&rsquo;re planning a trip and want a hand — what to skip,
          where to stay, when to go — I take a small handful of paid trip
          plans a month. Friend rates for the people I already write for.
        </p>
        <a href="mailto:hello@travelwithliana.example" className="email">
          Ask about trip planning &rarr;
        </a>
      </section>
    </>
  );
}
