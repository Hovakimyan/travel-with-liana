import Link from "next/link";

// Server component — no client state needed.
export default function SiteFooter() {
  return (
    <footer className="tl-footer">
      <div className="tl-footer-inner">
        <div className="tl-footer-brand">
          <p className="mark">
            Travel with <em>Liana</em>
          </p>
          <p className="tl-footer-tagline">collect moments, not things ✈</p>
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
                Instagram &rarr;
              </a>
            </li>
            <li>
              <a href="#">TikTok &rarr;</a>
            </li>
            <li>
              <a href="#">YouTube &rarr;</a>
            </li>
            <li>
              <a href="#">Pinterest &rarr;</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Explore</h5>
          <ul>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/journal">Journal</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/collabs">Collabs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="tl-footer-meta">
        <span>© 2026 Travel with Liana</span>
        <span>
          Site by{" "}
          <a href="https://ashoon.online" target="_blank" rel="noopener">
            Ashoon
          </a>
        </span>
        <span>Glendale, CA</span>
      </div>
    </footer>
  );
}
