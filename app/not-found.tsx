import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Took a wrong turn",
};

export default function NotFound() {
  return (
    <section className="tl-not-found">
      <div className="tl-not-found-inner">
        <p className="number">
          4<em>0</em>4
        </p>
        <p className="greeting">looks like you took a wrong turn ✦</p>
        <h1>
          The road ends <em>here.</em>
        </h1>
        <p>
          The page you were looking for has either been moved, never
          existed, or is on a side road I haven&rsquo;t mapped yet. Try one
          of these instead.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="tl-btn-primary">
            Go home &rarr;
          </Link>
          <Link href="/destinations" className="tl-btn-outline">
            Browse destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
